#!/usr/bin/env node
// One-off converter: Claude Design ".dc.html" prototypes -> Next.js page modules.
//
// For each page it emits, under src/site/<slug>/:
//   template.tsx  - the page markup as JSX (a pure function of the render values `v`)
//   logic.ts      - the page's behaviour class (ported verbatim from the prototype)
// and collects every `style-hover` / `style-focus` declaration into
// src/styles/pseudo.css.
//
// Usage: node scripts/convert-dc.mjs <path-to-design-project>
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const parse5 = require(process.env.PARSE5 || 'parse5');

const SRC = process.argv[2] || '../project';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

export const PAGES = [
  { file: 'Emburc Homepage- Final.dc.html', slug: 'home', cls: 'HomeLogic', route: '/' },
  { file: 'About Us.dc.html', slug: 'about', cls: 'AboutLogic', route: '/about' },
  { file: 'Talent Solutions.dc.html', slug: 'talent-solutions', cls: 'TalentSolutionsLogic', route: '/talent-solutions' },
  { file: 'Offerings.dc.html', slug: 'offerings', cls: 'OfferingsLogic', route: '/offerings' },
  { file: 'Industries.dc.html', slug: 'industries', cls: 'IndustriesLogic', route: '/industries' },
  { file: 'Case Studies.dc.html', slug: 'case-studies', cls: 'CaseStudiesLogic', route: '/case-studies' },
  { file: 'Privacy Policy.dc.html', slug: 'privacy-policy', cls: 'PrivacyPolicyLogic', route: '/privacy-policy' },
  { file: 'Terms of Use.dc.html', slug: 'terms-of-use', cls: 'TermsOfUseLogic', route: '/terms-of-use' },
];

// ---------------------------------------------------------------- source rewrites
function rewriteUrls(s) {
  // inter-page links
  for (const p of PAGES) s = s.split(p.file).join(p.route);
  // stock photos (self-hosted copies of the Unsplash images used in the prototype)
  s = s.replace(/https:\/\/images\.unsplash\.com\/(photo-[0-9a-f-]+)(\?[^"'`)\s]*)?/g, '/images/stock/$1.jpg');
  s = s.replace(/https:\/\/images\.unsplash\.com\/(['"]) \+ ([\w.]+) \+ (['"])\?[^'"]*\3/g, '/images/stock/$1 + $2 + $3.jpg$3');
  s = s.replace(/https:\/\/images\.unsplash\.com\/\$\{(\w+)\}\?[^`]*/g, '/images/stock/${$1}.jpg');
  if (s.includes('images.unsplash.com')) throw new Error('unhandled unsplash url');
  // technology logos (self-hosted copies of devicon / simple-icons)
  s = s.replace(/https:\/\/cdn\.jsdelivr\.net\/gh\/devicons\/devicon@latest\/icons\//g, '/icons/devicon/');
  s = s.replace(/'https:\/\/cdn\.simpleicons\.org\/'/g, "'/icons/si/'");
  s = s.replace(/'https:\/\/cdn\.jsdelivr\.net\/npm\/simple-icons@v9\/icons\/'/g, "'/icons/si/'");
  s = s.replace(/\bS \+ '([a-z0-9]+)(?:\/([0-9A-Fa-f]{6}))?'/g, (_, slug, hex) => `S + '${slug}${hex ? '-' + hex : ''}.svg'`);
  s = s.replace(/\bV \+ '([a-z0-9]+)\.svg'/g, "V + '$1-v9.svg'");
  // local assets
  s = s.replace(/(["'`(])assets\//g, '$1/assets/');
  return s;
}

// ---------------------------------------------------------------- expressions
const IDENT_RE = /^[A-Za-z_$][A-Za-z0-9_$]*/;
const NUMBER_RE = /^-?\d+(\.\d+)?$/;
function parensWrapWhole(e) {
  let d = 0;
  for (let i = 0; i < e.length - 1; i++) {
    if (e[i] === '(') d++;
    else if (e[i] === ')') { d--; if (d === 0) return false; }
  }
  return true;
}
function findTopLevelEquality(e) {
  let d = 0;
  for (let i = 0; i < e.length; i++) {
    const c = e[i];
    if (c === '[' || c === '(') d++;
    else if (c === ']' || c === ')') d--;
    else if (d === 0 && (c === '=' || c === '!') && e[i + 1] === '=') {
      if (i > 0 && (e[i - 1] === '=' || e[i - 1] === '!')) continue;
      if (!e.slice(0, i).trim()) continue;
      return { index: i, op: e[i + 2] === '=' ? c + '==' : c + '=' };
    }
  }
  return null;
}
// Mirrors the prototype runtime's `resolve()` grammar, emitting a JS expression.
function expr(src, scope) {
  const e = String(src).trim();
  if (!e) return 'undefined';
  if (e[0] === '(' && e[e.length - 1] === ')' && parensWrapWhole(e)) return expr(e.slice(1, -1), scope);
  const eq = findTopLevelEquality(e);
  if (eq) return `(${expr(e.slice(0, eq.index), scope)} ${eq.op} ${expr(e.slice(eq.index + eq.op.length), scope)})`;
  if (e[0] === '!') return `!${expr(e.slice(1), scope)}`;
  if (['true', 'false', 'null', 'undefined'].includes(e)) return e;
  if (NUMBER_RE.test(e)) return e;
  if (e.length >= 2 && (e[0] === '"' || e[0] === "'") && e[e.length - 1] === e[0]) return JSON.stringify(e.slice(1, -1));
  const head = e.match(IDENT_RE);
  if (!head) { warn('unsupported expression: ' + e); return 'undefined'; }
  let out = scope.has(head[0]) ? head[0] : 'v.' + head[0];
  let i = head[0].length;
  while (i < e.length) {
    if (e[i] === '.') {
      const m = e.slice(i + 1).match(IDENT_RE) || e.slice(i + 1).match(/^\d+/);
      if (!m) { warn('bad path: ' + e); return 'undefined'; }
      out += /^\d/.test(m[0]) ? `?.[${m[0]}]` : `?.${m[0]}`;
      i += 1 + m[0].length;
    } else if (e[i] === '[') {
      let d = 1, j = i + 1;
      while (j < e.length && d > 0) { if (e[j] === '[') d++; else if (e[j] === ']') { d--; if (d === 0) break; } j++; }
      out += `?.[${expr(e.slice(i + 1, j), scope)}]`;
      i = j + 1;
    } else { warn('unsupported expression: ' + e); return 'undefined'; }
  }
  return out;
}
let warnings = [];
const warn = (m) => warnings.push(m);

// "a {{ b }} c" -> JS expression producing the interpolated string (or the raw value
// when the whole attribute is a single binding, like the runtime does).
function attrExpr(raw, scope) {
  const whole = raw.match(/^\s*\{\{([\s\S]+?)\}\}\s*$/);
  if (whole) return { dynamic: true, js: expr(whole[1], scope) };
  if (!raw.includes('{{')) return { dynamic: false, js: JSON.stringify(raw), raw };
  const parts = raw.split(/\{\{([\s\S]+?)\}\}/g);
  const js = '`' + parts.map((p, i) => (i & 1 ? '${' + expr(p, scope) + ' ?? ""}' : p.replace(/[`\\]/g, '\\$&').replace(/\$\{/g, '\\${'))).join('') + '`';
  return { dynamic: true, js };
}

// ---------------------------------------------------------------- attributes
const CAMEL = 'sc-camel-';
const RAW_WRAP = { select: 'sc-raw-select', table: 'sc-raw-table', tbody: 'sc-raw-tbody', thead: 'sc-raw-thead', tfoot: 'sc-raw-tfoot', tr: 'sc-raw-tr', td: 'sc-raw-td', th: 'sc-raw-th', caption: 'sc-raw-caption' };
const RAW_UNWRAP = Object.fromEntries(Object.entries(RAW_WRAP).map(([k, v]) => [v, k]));
const EVENT_MAP = { onclick: 'onClick', onchange: 'onChange', oninput: 'onInput', onsubmit: 'onSubmit', onkeydown: 'onKeyDown', onkeyup: 'onKeyUp', onkeypress: 'onKeyPress', onmousedown: 'onMouseDown', onmouseup: 'onMouseUp', onmouseenter: 'onMouseEnter', onmouseleave: 'onMouseLeave', onfocus: 'onFocus', onblur: 'onBlur', ondoubleclick: 'onDoubleClick', oncontextmenu: 'onContextMenu', onmousemove: 'onMouseMove', onmouseover: 'onMouseOver', onmouseout: 'onMouseOut', onpointerdown: 'onPointerDown', onpointerup: 'onPointerUp', onpointermove: 'onPointerMove', onpointerenter: 'onPointerEnter', onpointerleave: 'onPointerLeave', onscroll: 'onScroll', onwheel: 'onWheel', ontouchstart: 'onTouchStart', ontouchend: 'onTouchEnd', ontouchmove: 'onTouchMove', ondragover: 'onDragOver', ondrop: 'onDrop', ondragleave: 'onDragLeave', ondragenter: 'onDragEnter' };
const REACT_ATTR = {
  class: 'className', for: 'htmlFor', tabindex: 'tabIndex', readonly: 'readOnly', maxlength: 'maxLength', minlength: 'minLength',
  autocomplete: 'autoComplete', autoplay: 'autoPlay', playsinline: 'playsInline', crossorigin: 'crossOrigin', srcset: 'srcSet',
  colspan: 'colSpan', rowspan: 'rowSpan', enctype: 'encType', novalidate: 'noValidate', autofocus: 'autoFocus', datetime: 'dateTime',
  inputmode: 'inputMode', enterkeyhint: 'enterKeyHint', disablepictureinpicture: 'disablePictureInPicture', spellcheck: 'spellCheck',
  contenteditable: 'contentEditable', allowfullscreen: 'allowFullScreen', frameborder: 'frameBorder', referrerpolicy: 'referrerPolicy',
  fetchpriority: 'fetchPriority', 'accept-charset': 'acceptCharset', 'http-equiv': 'httpEquiv',
};
const NUMERIC_ATTRS = new Set(['maxLength', 'minLength', 'rows', 'cols', 'tabIndex', 'colSpan', 'rowSpan', 'size', 'span', 'start']);
const BOOL_ATTRS = new Set(['muted', 'playsInline', 'autoPlay', 'loop', 'controls', 'disabled', 'required', 'checked', 'selected', 'multiple', 'hidden', 'readOnly', 'noValidate', 'autoFocus', 'disablePictureInPicture', 'allowFullScreen', 'open', 'defer', 'async', 'novalidate']);
function reactAttrName(name, isSvg) {
  if (name.startsWith(CAMEL)) return name.slice(CAMEL.length).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  if (name.startsWith('on')) return EVENT_MAP[name] || 'on' + name[2].toUpperCase() + name.slice(3);
  if (REACT_ATTR[name]) return REACT_ATTR[name];
  if (name.startsWith('data-') || name.startsWith('aria-')) return name;
  if (name.includes('-') && isSvg) return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  if (name === 'xlink:href') return 'xlinkHref';
  if (name === 'xml:space') return 'xmlSpace';
  return name;
}

// ---------------------------------------------------------------- styles
const kebabToCamel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
function styleObject(raw, scope) {
  const decls = new Map(); // first-occurrence order, last value wins (like the runtime)
  for (const decl of raw.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    const key = prop.startsWith('--') ? prop : kebabToCamel(prop);
    const val = attrExpr(decl.slice(i + 1).trim(), scope);
    const k = /^[A-Za-z_$][\w$]*$/.test(key) ? key : JSON.stringify(key);
    decls.set(k, val.js);
  }
  return `{ ${[...decls].map(([k, js]) => `${k}: ${js}`).join(', ')} }`;
}
function importantify(css) {
  return css.split(';').map((d) => d.trim()).filter(Boolean)
    .map((d) => (/!important\s*$/.test(d) ? d : d + ' !important')).join(';');
}
const pseudoRules = new Map(); // className -> css rule
let cssVarN = 0;
function hashStr(s) { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
function pseudoClass(pseudo, css, scope, extraStyle) {
  // A binding inside a pseudo style becomes a CSS custom property set inline.
  if (css.includes('{{')) {
    css = css.replace(/\{\{([\s\S]+?)\}\}/g, (_, e) => {
      const name = `--dc-pv${++cssVarN}`;
      extraStyle.push(`${JSON.stringify(name)}: ${expr(e, scope)}`);
      return `var(${name})`;
    });
  }
  const cls = 'dc-' + pseudo.replace(/[^a-z]/g, '') + '-' + hashStr(pseudo + '|' + css);
  const sel = pseudo === 'before' || pseudo === 'after' ? `.${cls}::${pseudo}` : `.${cls}:${pseudo}`;
  pseudoRules.set(cls, `${sel}{${pseudo === 'before' || pseudo === 'after' ? css : importantify(css)}}`);
  return cls;
}

// ---------------------------------------------------------------- JSX emit
const BLOCK_TAGS = new Set('address article aside blockquote dd details dialog div dl dt fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 header hgroup hr li main nav ol p pre section table tbody thead tfoot tr td th ul svg video select option'.split(' '));
const VOID = new Set('area base br col embed hr img input link meta source track wbr'.split(' '));
const isFlexOrGrid = (style) => /(^|;)\s*display\s*:\s*(inline-)?(flex|grid)\b/.test(style || '');

function jsxText(t) {
  if (!/[{}<>&'"]/.test(t) && !/^\s|\s$/.test(t)) return t;
  return `{${JSON.stringify(t)}}`;
}
const SVG_NS = 'http://www.w3.org/2000/svg';
const CONTROL = new Set(['#root', 'sc-if', 'sc-for']);
function emitText(node, parentStyle, prev, next, parentTag, pre, scope, parentNs) {
  let txt = node.value;
  if (!txt.includes('{{')) {
    if (!txt.trim()) {
      if (!txt.includes(' ') && !txt.includes('\n') && !txt.includes('\t')) return '';
      if (pre) return `{${JSON.stringify(txt)}}`;
      // whitespace-only: drop where it cannot render (flex/grid containers, between blocks)
      if (isFlexOrGrid(parentStyle)) return '';
      if (parentNs === SVG_NS && parentTag !== 'text' && parentTag !== 'tspan') return '';
      const blockish = (n) => !n || n.nodeName === 'sc-if' || n.nodeName === 'sc-for' || n.nodeName === 'sc-helmet' || n.nodeName === '#comment' ||
        (n.nodeName !== '#text' && BLOCK_TAGS.has(RAW_UNWRAP[n.nodeName] || n.nodeName) && !/display\s*:\s*inline/.test(attr(n, 'style') || ''));
      if (blockish(prev) && blockish(next) && (BLOCK_TAGS.has(parentTag) || CONTROL.has(parentTag))) return '';
      return '{" "}';
    }
    if (pre) return `{${JSON.stringify(txt)}}`;
    return jsxText(txt.replace(/\s+/g, ' '));
  }
  const parts = txt.split(/\{\{([\s\S]+?)\}\}/g);
  return parts.map((p, i) => {
    if (i & 1) return `{${expr(p, scope)}}`;
    if (!p) return '';
    if (pre) return `{${JSON.stringify(p)}}`;
    return jsxText(p.replace(/\s+/g, ' '));
  }).join('');
}
function attr(node, name) {
  const a = node.attrs && node.attrs.find((x) => x.name === name);
  return a ? a.value : undefined;
}

function emitChildren(node, scope, ind, pre) {
  const kids = (node.content ? node.content.childNodes : node.childNodes) || [];
  const style = attr(node, 'style');
  const tag = RAW_UNWRAP[node.nodeName] || node.nodeName;
  const out = [];
  kids.forEach((c, i) => {
    const s = emit(c, scope, ind, pre, style, kids[i - 1], kids[i + 1], tag, node.namespaceURI);
    if (s) out.push(s);
  });
  return out;
}
function wrapChildren(parts, ind) {
  if (!parts.length) return '';
  const pad = '  '.repeat(ind);
  return parts.map((p) => (p.startsWith('{"') || !p.startsWith('<') && !p.startsWith('{') ? pad + p : pad + p)).join('\n');
}

function emit(node, scope, ind, pre, parentStyle, prev, next, parentTag, parentNs) {
  const pad = '  '.repeat(ind);
  if (node.nodeName === '#text') return emitText(node, parentStyle, prev, next, parentTag, pre, scope, parentNs);
  if (node.nodeName === '#comment') return '';
  const tag = node.nodeName;
  if (tag === 'helmet' || tag === 'sc-helmet') return '';
  if (tag === 'sc-for') {
    const list = attrExpr(attr(node, 'list') || '', scope).js;
    const as = attr(node, 'as') || 'item';
    const sub = new Set(scope); sub.add(as); sub.add('$index');
    const body = wrapChildren(emitChildren(node, sub, ind + 2, pre), ind + 2);
    return `{(${list} || []).map((${as}: any, $index: number) => (\n${pad}  <Fragment key={$index}>\n${body}\n${pad}  </Fragment>\n${pad}))}`;
  }
  if (tag === 'sc-if') {
    const val = attrExpr(attr(node, 'value') || '', scope).js;
    const body = wrapChildren(emitChildren(node, scope, ind + 2, pre), ind + 2);
    return `{${val} ? (\n${pad}  <>\n${body}\n${pad}  </>\n${pad}) : null}`;
  }
  if (tag.includes('-') && !RAW_UNWRAP[tag]) warn('custom element <' + tag + '> emitted as-is');
  const real = RAW_UNWRAP[tag] || tag;
  const isSvg = node.namespaceURI === 'http://www.w3.org/2000/svg';
  const props = [];
  const classes = [];
  const extraStyle = [];
  let styleRaw;
  for (const a of node.attrs) {
    let name = a.prefix ? a.prefix + ':' + a.name : a.name;
    if (name === 'data-dc-tpl' || name === 'sc-name' || name === 'hint-size') continue;
    if (name === 'style') { styleRaw = a.value; continue; }
    if (name.startsWith('style-')) { classes.push(JSON.stringify(pseudoClass(name.slice(6), a.value, scope, extraStyle))); continue; }
    const key = reactAttrName(name, isSvg);
    const val = attrExpr(a.value, scope);
    if (key === 'className') { classes.unshift(val.js); continue; }
    if (key.startsWith('on') && key.length > 2 && /[A-Z]/.test(key[2]) && !val.dynamic) { warn(`static event handler ${key}="${a.value}" dropped`); continue; }
    if (!val.dynamic && BOOL_ATTRS.has(key) && (a.value === '' || a.value.toLowerCase() === name)) { props.push(key); continue; }
    if ((key === 'value' || key === 'checked') && val.dynamic) { props.push(`${key}={${val.js} ?? ${key === 'checked' ? 'false' : '""'}}`); continue; }
    if (!val.dynamic && NUMERIC_ATTRS.has(key) && /^-?\d+$/.test(a.value)) { props.push(`${key}={${a.value}}`); continue; }
    if (!val.dynamic && !/["\\\n]/.test(a.value)) props.push(`${key}="${a.value}"`);
    else props.push(`${key}={${val.js}}`);
  }
  if (classes.length === 1 && classes[0].startsWith('"')) props.unshift(`className=${classes[0]}`);
  else if (classes.length) props.unshift(`className={[${classes.join(', ')}].filter(Boolean).join(" ")}`);
  if (styleRaw !== undefined || extraStyle.length) {
    let obj = styleRaw !== undefined ? styleObject(styleRaw, scope) : '{ }';
    if (extraStyle.length) obj = obj.replace(/ \}$/, (obj === '{ }' ? '' : ', ') + extraStyle.join(', ') + ' }');
    props.push(/"--/.test(obj) ? `style={${obj} as React.CSSProperties}` : `style={${obj}}`);
  }
  const open = `<${real}${props.length ? ' ' + props.join(' ') : ''}`;
  const isPre = pre || real === 'pre' || real === 'textarea' || /white-space\s*:\s*pre/.test(styleRaw || '');
  if (real === 'textarea') {
    const t = (node.childNodes || []).map((c) => c.value || '').join('');
    return t ? `${open} defaultValue=${JSON.stringify(t)} />` : `${open} />`;
  }
  const kids = VOID.has(real) ? [] : emitChildren(node, scope, ind + 1, isPre);
  if (!kids.length) return `${open} />`;
  const inline = kids.length <= 3 && kids.every((k) => !k.includes('\n')) && (open.length + kids.join('').length) < 110;
  if (inline) return `${open}>${kids.join('')}</${real}>`;
  return `${open}>\n${wrapChildren(kids, ind + 1)}\n${pad}</${real}>`;
}

// ---------------------------------------------------------------- template prep
function encodeCase(html) {
  html = html.replace(/<(x-import|dc-import)((?:[^>"']|"[^"]*"|'[^']*')*)\/>/gi, (_, t, a) => `<${t}${a}></${t}>`);
  html = html.replace(/<helmet(\s|>)/gi, '<sc-helmet$1').replace(/<\/helmet\s*>/gi, '</sc-helmet>');
  html = html.replace(/(\s)([a-z]+[A-Z][A-Za-z0-9]*)(\s*=)/g, (_, sp, name, eq) => sp + CAMEL + name.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase()) + eq);
  for (const [real, alias] of Object.entries(RAW_WRAP)) html = html.replace(new RegExp('(</?)' + real + '(?=[\\s>])', 'gi'), '$1' + alias);
  return html;
}

function convertPage(p) {
  warnings = [];
  const src = rewriteUrls(fs.readFileSync(path.join(SRC, p.file), 'utf8'));
  const o = /<x-dc(?:\s[^>]*)?>/.exec(src);
  const close = src.lastIndexOf('</x-dc>');
  const tplHtml = src.slice(o.index + o[0].length, close);
  const helmet = (tplHtml.match(/<helmet>([\s\S]*?)<\/helmet>/) || [])[1] || '';
  const title = ((helmet.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '').replace(/&amp;/g, '&');
  const sm = /<script type="text\/x-dc" data-dc-script(?: data-props="([^"]*)")?>([\s\S]*?)<\/script>/.exec(src);
  const propsMeta = sm[1] ? JSON.parse(sm[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&')) : {};
  const defaults = Object.fromEntries(Object.entries(propsMeta).map(([k, m]) => [k, m.default]));
  let js = sm[2].trim();

  const frag = parse5.parseFragment(encodeCase(tplHtml));
  const kids = emitChildren({ nodeName: '#root', childNodes: frag.childNodes, attrs: [] }, new Set(), 3, false);
  const tsx = `// Generated from "${p.file}" by scripts/convert-dc.mjs, then maintained by hand.
import React, { Fragment } from "react";

export default function template(v: any) {
  return (
    <>
${wrapChildren(kids, 3)}
    </>
  );
}
`;
  if (!/^class Component extends DCLogic \{/m.test(js)) throw new Error('no logic class in ' + p.file);
  js = js.replace(/^class Component extends DCLogic \{/m, `export default class ${p.cls} extends DCLogic {\n  [key: string]: any;`);
  const logic = `// @ts-nocheck -- untyped DOM/animation code ported as-is from the prototype.
// Ported from "${p.file}" (Claude Design prototype). Behaviour is kept as designed:
// the class drives the page through state + imperative Web Animations on the DOM.
import React from "react";
import { DCLogic } from "@/lib/dc";

export const defaults = ${JSON.stringify(defaults)};

${js}
`;
  const dir = path.join(ROOT, 'src/site', p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'template.tsx'), tsx);
  fs.writeFileSync(path.join(dir, 'logic.ts'), logic);
  for (const w of new Set(warnings)) console.warn(`[${p.slug}] ${w}`);
  console.log(`${p.slug}: ${tsx.split('\n').length} lines template, ${logic.split('\n').length} lines logic`);
}

for (const p of PAGES) convertPage(p);
fs.mkdirSync(path.join(ROOT, 'src/styles'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'src/styles/pseudo.css'),
  '/* Hover / focus styles from the design prototypes (generated by scripts/convert-dc.mjs). */\n' +
  [...pseudoRules.values()].join('\n') + '\n');
console.log('pseudo rules:', pseudoRules.size);

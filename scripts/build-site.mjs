// Builds the live site from the design-tool HTML exports in the repo root.
//
//   node scripts/build-site.mjs            -> writes ./site (Cloudflare "Build output directory")
//
// The exports are self-unpacking bundles: every image, font, video and script is
// base64-encoded inside each 1-2.5 MB page and decoded in the visitor's browser
// before anything shows. This script unpacks them once at build time instead:
//   * each asset becomes its own content-hashed file under /_a/ (cached for a year,
//     shared between pages, video streamed normally so it plays on iPhone)
//   * each page becomes the plain page the bundle would have produced, so the
//     browser renders it straight away with no loading screen and no swap
//   * the website forms are wired to /api/lead (see forms-client.js)
// Drop new exports into the repo root and push; nothing else needs changing.
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import zlib from "node:zlib";
import crypto from "node:crypto";

const here = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, "..");
const OUT = path.join(ROOT, process.argv[2] || "site");
const ASSET_DIR = "_a";

const EXT = {
  "image/jpeg": "jpg", "image/png": "png", "image/svg+xml": "svg", "image/webp": "webp", "image/gif": "gif",
  "video/mp4": "mp4", "video/webm": "webm", "font/woff2": "woff2", "font/woff": "woff",
  "application/javascript": "js", "text/javascript": "js", "text/css": "css", "application/json": "json",
};

// ---- form wiring (same edits the old patch-forms.mjs made) ----
const H = "window.__ems && window.__ems";
const FORM_EDITS = [
  ["this.setState(ok ? { crSent: true } : { crTried: true })",
   `(ok && ${H}('careers', this.state, e && e.target), this.setState(ok ? { crSent: true } : { crTried: true }))`],
  ["this.setState(ok ? { tSent: true } : { tTried: true })",
   `(ok && ${H}('lets-talk', this.state, e && e.target), this.setState(ok ? { tSent: true } : { tTried: true }))`],
  ["if (tValid) return this.setState({ tSent: true });",
   `if (tValid) return (${H}('lets-talk', this.state, e && e.target), this.setState({ tSent: true }));`],
  ["window.open(this.gcalUrl(s), '_blank', 'noopener'); this.setState({ bSent: true })",
   `${H}('scoping-call', this.state, e && e.target); window.open(this.gcalUrl(s), '_blank', 'noopener'); this.setState({ bSent: true })`],
  ["return this.setState({ cTried: true }); this.setState({ sent: true });",
   `return this.setState({ cTried: true }); ${H}('contact', this.state, e && e.target); this.setState({ sent: true });`],
  ["crSetFile: e => this.setState({ crFile: e.target.files && e.target.files[0] ? e.target.files[0].name : '' })",
   "crSetFile: e => ((window.__emf = window.__emf || {}).cr = e.target.files && e.target.files[0], this.setState({ crFile: e.target.files && e.target.files[0] ? e.target.files[0].name : '' }))"],
  [" setFile: e => this.setState({ tFile: e.target.files && e.target.files[0] ? e.target.files[0].name : '' })",
   " setFile: e => ((window.__emf = window.__emf || {}).t = e.target.files && e.target.files[0], this.setState({ tFile: e.target.files && e.target.files[0] ? e.target.files[0].name : '' }))"],
];
const formsClient = fs.readFileSync(path.join(here, "forms-client.js"), "utf8");

const block = (html, type) => {
  const m = html.match(new RegExp(`<script type="__bundler/${type}">([\\s\\S]*?)</script>`));
  return m ? m[1] : null;
};

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, ASSET_DIR), { recursive: true });
const written = new Map(); // hash -> public path
let failed = false;

// Optimised replacements: scripts/media/<original-hash>.<ext> replaces that asset
// (e.g. a lighter brand video), and scripts/media/<original-hash>-first.jpg is its first frame.
const MEDIA = path.join(here, "media");
const writeAsset = (bytes, ext) => {
  const hash = crypto.createHash("sha256").update(bytes).digest("hex").slice(0, 16);
  const name = `${hash}.${ext}`;
  if (!written.has(hash)) { fs.writeFileSync(path.join(OUT, ASSET_DIR, name), bytes); written.set(hash, `/${ASSET_DIR}/${name}`); }
  return written.get(hash);
};
const LOGO_URL = fs.existsSync(path.join(here, "loader-logo.png")) ? writeAsset(fs.readFileSync(path.join(here, "loader-logo.png")), "png") : null;

// Instant cover: painted with the very first bytes of the page, before any script runs, so
// there's never a blank white screen. Homepage (first visit): the brand video's first frame,
// so the animation continues seamlessly from it. Elsewhere: the logo. It fades out once the
// video is actually playing, or once the page has rendered.
const coverHtml = (first) => `<div id="emb-cover" aria-hidden="true">${first ? `<img data-first src="${first}" alt="">` : ""}${LOGO_URL ? `<img data-logo src="${LOGO_URL}" alt="">` : ""}</div>
<script>(function(){var c=document.getElementById('emb-cover');if(!c)return;var seen=false;try{seen=!!sessionStorage.getItem('emb_splash')}catch(e){}
var f=c.querySelector('[data-first]');var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if(f&&!seen&&!rm)c.className='first';else c.className='logo';
var done=false,t0=Date.now();function hide(){if(done)return;done=true;c.style.opacity='0';setTimeout(function(){c.parentNode&&c.parentNode.removeChild(c)},450)}
(function poll(){if(done)return;var v=document.querySelector('[data-splashvid]'),sp=document.querySelector('[data-splash]');
if(sp&&v){if(!v.paused&&v.currentTime>0.04&&+getComputedStyle(v).opacity>0.98){c.style.transition='opacity .12s linear';return hide()}}else if(document.querySelector('header'))return hide();
if(Date.now()-t0>9000)return hide();requestAnimationFrame(poll)})()})();</script>`;
const COVER_CSS = `<style id="emb-cover-css">#emb-cover{position:fixed;inset:0;z-index:2147483000;background:#fff;display:flex;align-items:center;justify-content:center;padding:24px;transition:opacity .4s ease}#emb-cover img{display:none}#emb-cover.first [data-first]{display:block;width:min(720px,90vw);max-height:80vh;height:auto;object-fit:contain}#emb-cover.logo [data-logo]{display:block;width:min(300px,60vw);height:auto;animation:emb-p 1.6s ease-in-out infinite alternate}@keyframes emb-p{from{opacity:.6}to{opacity:1}}@media (prefers-reduced-motion:reduce){#emb-cover.logo [data-logo]{animation:none}}</style>`;

const pages = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html")).sort();
for (const file of pages) {
  const src = fs.readFileSync(path.join(ROOT, file), "utf8");
  const manifestText = block(src, "manifest");
  const templateText = block(src, "template");
  if (!manifestText || !templateText) {
    // Not a bundle - publish as is.
    fs.copyFileSync(path.join(ROOT, file), path.join(OUT, file));
    console.log(file, "copied (not a bundle)");
    continue;
  }
  const manifest = JSON.parse(manifestText);
  let html = JSON.parse(templateText);
  const ext = JSON.parse(block(src, "ext_resources") || "[]");
  if ((JSON.parse(block(src, "page_order") || "[]")).length) console.warn("WARNING:", file, "has nested pages - not supported");

  const urls = {};
  const posters = {};
  for (const [uuid, entry] of Object.entries(manifest)) {
    let bytes = Buffer.from(entry.data, "base64");
    if (entry.compressed) bytes = zlib.gunzipSync(bytes);
    const ext = EXT[entry.mime] || "bin";
    const orig = crypto.createHash("sha256").update(bytes).digest("hex").slice(0, 16);
    const better = path.join(MEDIA, `${orig}.${ext}`);
    if (fs.existsSync(better)) bytes = fs.readFileSync(better);
    urls[uuid] = writeAsset(bytes, ext);
    const first = path.join(MEDIA, `${orig}-first.jpg`);
    if (fs.existsSync(first)) posters[urls[uuid]] = writeAsset(fs.readFileSync(first), "jpg");
  }
  for (const [uuid, pub] of Object.entries(urls)) html = html.split(uuid).join(pub);
  html = html.replace(/\s+integrity="[^"]*"/gi, "").replace(/\s+crossorigin="[^"]*"/gi, "");

  // Brand intro: poster frame on the video, and let the full animation (5s) play once it has
  // started instead of the design's 4s cap from page start, which cut it before the wordmark.
  let firstFrame = null;
  for (const [vid, poster] of Object.entries(posters)) {
    if (html.includes(`src="${vid}"`)) { html = html.split(`src="${vid}"`).join(`src="${vid}" poster="${poster}"`); firstFrame = poster; }
  }
  const capA = "if (this.state.splash) { this.setState({ splash: false }); this.startPage(); } }, 4000); }";
  if (html.includes(capA)) html = html.replace(capA, capA.replace("}, 4000); }", "}, 7500); }"));

  // Forms
  // (skipped when the export was already wired by the older patch-forms.mjs)
  const already = html.includes("window.__ems && window.__ems");
  const counts = already ? ["pre-wired"] : FORM_EDITS.map(([a, b]) => { const n = html.split(a).length - 1; html = html.split(a).join(b); return n; });
  if (!already && !counts.some(Boolean)) { console.warn("WARNING:", file, "- no form handlers found; its forms will not submit"); }

  // Popups: the design caps each panel at "100vh - margin". On iPhone 100vh includes the
  // area behind the browser bars, so tall popups get their top cut off. Re-cap them at the
  // *visible* height (dvh); browsers without dvh ignore the rule and keep the original.
  const fits = new Map();
  for (const m of html.matchAll(/<div ((?:data-[\w-]+)="")[^>]*?max-height:\s*calc\(100vh - (\d+)px\)/g)) fits.set(m[1].slice(0, -3), m[2]);
  // --emb-vh is measured from the visible screen (visualViewport) and kept updated as the
  // browser bars show/hide; 1dvh / 1vh are fallbacks.
  const fitCss = [...fits].map(([attr, px]) => `[${attr}]{max-height:calc(var(--emb-vh,1vh)*100 - ${px}px)!important;overscroll-behavior:contain}`).join("");
  const fitStyle = fitCss ? `<style id="emburc-popup-fit">:root{--emb-vh:1vh}@supports (height:1dvh){:root{--emb-vh:1dvh}}${fitCss}</style>` +
    `<script>(function(){function s(){var h=window.visualViewport?visualViewport.height:window.innerHeight;if(h>0)document.documentElement.style.setProperty('--emb-vh',(h/100)+'px')}s();window.addEventListener('resize',s);window.addEventListener('orientationchange',s);if(window.visualViewport)visualViewport.addEventListener('resize',s)})();</script>` : "";

  // Head: resource map for the runtime (React from our own files), preloads, forms client
  const resourceMap = {};
  for (const r of ext) if (urls[r.uuid]) resourceMap[r.id] = urls[r.uuid];
  const preloads = Object.values(resourceMap).map((u) => `<link rel="preload" as="script" href="${u}">`).join("");
  const headAdd =
    `<script>window.__resources = ${JSON.stringify(resourceMap).replace(/<\//g, "<\\/")};</script>` + preloads +
    `<script id="emburc-forms">\n${formsClient}</script>` + fitStyle + COVER_CSS;
  const headOpen = html.match(/<head[^>]*>/i);
  if (!headOpen) { console.error("ERROR:", file, "has no <head>"); failed = true; continue; }
  const i = headOpen.index + headOpen[0].length;
  html = html.slice(0, i) + headAdd + html.slice(i);
  const bodyOpen = html.match(/<body[^>]*>/i);
  if (bodyOpen) { const j = bodyOpen.index + bodyOpen[0].length; html = html.slice(0, j) + coverHtml(file === "index.html" ? firstFrame : null) + html.slice(j); }

  // Any uuid left over means an asset we could not resolve
  const left = html.match(/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/g) || [];
  const unresolved = left.filter((u) => manifest[u]);
  if (unresolved.length) console.warn("WARNING:", file, "unresolved assets", unresolved.slice(0, 3));

  fs.writeFileSync(path.join(OUT, file), html);
  console.log(`${file}: ${(src.length / 1e6).toFixed(2)} MB bundle -> ${(html.length / 1e3).toFixed(0)} KB page, forms ${counts.join(",")}, popups fitted ${fits.size}`);
}

// Long cache for content-hashed assets; pages always revalidate.
fs.writeFileSync(path.join(OUT, "_headers"),
  `/${ASSET_DIR}/*\n  Cache-Control: public, max-age=31536000, immutable\n\n/*.html\n  Cache-Control: public, max-age=0, must-revalidate\n`);
console.log(`${written.size} assets written to /${ASSET_DIR}`);
if (failed) process.exit(1);

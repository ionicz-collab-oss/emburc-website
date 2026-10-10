// Wires the website forms to /api/lead. Safe to run repeatedly (skips patched files).
// Usage: node scripts/patch-forms.mjs [dir]   — Cloudflare runs this in the build command.
import fs from "node:fs"; import path from "node:path"; import url from "node:url";
const here = path.dirname(url.fileURLToPath(import.meta.url));
const dir = process.argv[2] || ".";
const client = fs.readFileSync(path.join(here, "forms-client.js"), "utf8");
const MARK = '<script id="emburc-forms">';
const REPL = [
  [
    "this.setState(ok ? { crSent: true } : { crTried: true })",
    "(ok && window.__ems && window.__ems('careers', this.state, e && e.target), this.setState(ok ? { crSent: true } : { crTried: true }))"
  ],
  [
    "this.setState(ok ? { tSent: true } : { tTried: true })",
    "(ok && window.__ems && window.__ems('lets-talk', this.state, e && e.target), this.setState(ok ? { tSent: true } : { tTried: true }))"
  ],
  [
    "if (tValid) return this.setState({ tSent: true });",
    "if (tValid) return (window.__ems && window.__ems('lets-talk', this.state, e && e.target), this.setState({ tSent: true }));"
  ],
  [
    "window.open(this.gcalUrl(s), '_blank', 'noopener'); this.setState({ bSent: true })",
    "window.__ems && window.__ems('scoping-call', this.state, e && e.target); window.open(this.gcalUrl(s), '_blank', 'noopener'); this.setState({ bSent: true })"
  ],
  [
    "return this.setState({ cTried: true }); this.setState({ sent: true });",
    "return this.setState({ cTried: true }); window.__ems && window.__ems('contact', this.state, e && e.target); this.setState({ sent: true });"
  ],
  [
    "crSetFile: e => this.setState({ crFile: e.target.files && e.target.files[0] ? e.target.files[0].name : '' })",
    "crSetFile: e => ((window.__emf = window.__emf || {}).cr = e.target.files && e.target.files[0], this.setState({ crFile: e.target.files && e.target.files[0] ? e.target.files[0].name : '' }))"
  ],
  [
    " setFile: e => this.setState({ tFile: e.target.files && e.target.files[0] ? e.target.files[0].name : '' })",
    " setFile: e => ((window.__emf = window.__emf || {}).t = e.target.files && e.target.files[0], this.setState({ tFile: e.target.files && e.target.files[0] ? e.target.files[0].name : '' }))"
  ]
];
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".html")).sort()) {
  const p = path.join(dir, f);
  let s = fs.readFileSync(p, "utf8");
  if (s.includes(MARK)) { console.log(f, "already patched"); continue; }
  const counts = REPL.map(([a, b]) => { const n = s.split(a).length - 1; s = s.split(a).join(b); return n; });
  if (!counts.some(Boolean)) console.warn("WARNING:", f, "- no form handlers found; forms on this page will not submit");
  s = s.replace("</head>", MARK + "\n" + client + "</script>\n</head>");
  fs.writeFileSync(p, s);
  console.log(f, counts.join(","));
}

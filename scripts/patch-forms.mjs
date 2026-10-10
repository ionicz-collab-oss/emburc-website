// Adds the branded loading screen and wires the website forms to /api/lead. Safe to run repeatedly (skips patched files).
// Usage: node scripts/patch-forms.mjs [dir]   — Cloudflare runs this in the build command.
import fs from "node:fs"; import path from "node:path"; import url from "node:url";
const here = path.dirname(url.fileURLToPath(import.meta.url));
const dir = process.argv[2] || ".";
const client = fs.readFileSync(path.join(here, "forms-client.js"), "utf8");
const MARK = '<script id="emburc-forms">';
const LOADER_MARK = '<style id="emburc-loader">';
const LOGO = "data:image/png;base64," + fs.readFileSync(path.join(here, "loader-logo.png")).toString("base64");
const LOADER_CSS = `
  body { background: #fff !important; }
  #__bundler_thumbnail { background: #fff !important; }
  #__bundler_thumbnail img { width: min(320px, 62vw); height: auto; animation: emb-load 1.6s ease-in-out infinite alternate; }
  #__bundler_loading { display: none !important; }
  @keyframes emb-load { from { opacity: .55; transform: scale(.985); } to { opacity: 1; transform: scale(1); } }
  @media (prefers-reduced-motion: reduce) { #__bundler_thumbnail img { animation: none; } }
`;
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
  const before = s;
  // 1. Branded loading screen instead of the exporter's placeholder "E" tile
  if (!s.includes(LOADER_MARK)) {
    s = s.replace(/<div id="__bundler_thumbnail">[\s\S]*?<\/svg><\/div>/, '<div id="__bundler_thumbnail"><img src="' + LOGO + '" alt="Emburc Technologies"></div>');
    s = s.replace("</head>", LOADER_MARK + LOADER_CSS + "</style>\n</head>");
  }
  // 2. Form wiring
  if (!s.includes(MARK)) {
    const counts = REPL.map(([a, b]) => { const n = s.split(a).length - 1; s = s.split(a).join(b); return n; });
    if (!counts.some(Boolean)) console.warn("WARNING:", f, "- no form handlers found; forms on this page will not submit");
    s = s.replace("</head>", MARK + "\n" + client + "</script>\n</head>");
    console.log(f, "forms", counts.join(","));
  }
  if (s === before) { console.log(f, "already patched"); continue; }
  fs.writeFileSync(p, s);
  console.log(f, "patched");
}

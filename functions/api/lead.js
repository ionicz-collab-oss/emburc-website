// Cloudflare Pages Function: POST /api/lead
// Receives every website form (Let's Talk, Careers, Scoping Call, Contact).
//  1. Saves the submission to D1 (binding LEADS_DB, table form_submissions)
//  2. Saves an attached CV/brief to R2 (binding LEADS_FILES)
//  3. Emails it to sales@ / careers@ via Resend, if RESEND_API_KEY is set
//
// Settings (Cloudflare → Workers & Pages → emburc-website → Settings → Variables and secrets):
//   RESEND_API_KEY  (secret)  — enables email notifications
//   LEAD_FROM       (text, optional) — default "Emburc Website <website@emburc.com>"
//   SALES_TO        (text, optional) — default "sales@emburc.com"
//   CAREERS_TO      (text, optional) — default "careers@emburc.com"

const FORMS = {
  "lets-talk": { label: "Let's Talk enquiry", to: "sales" },
  "scoping-call": { label: "Scoping call booking", to: "sales" },
  contact: { label: "Contact form", to: "sales" },
  careers: { label: "Careers application", to: "careers" },
};

const MAX_FILE = 10 * 1024 * 1024; // 10 MB
const FILE_TYPES = /\.(pdf|doc|docx|ppt|pptx|txt|png|jpe?g)$/i;
const ALLOWED_HOSTS = /(^|\.)emburc\.com$|\.pages\.dev$|^localhost$|^127\.0\.0\.1$/;

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

const esc = (v) =>
  String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const pretty = (k) =>
  k.replace(/^(cr|t|b|c|f)(?=[A-Z])/, "").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase());

const show = (v) => (Array.isArray(v) ? v.join(", ") : typeof v === "boolean" ? (v ? "Yes" : "No") : String(v ?? ""));

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("Origin");
  if (origin) {
    try {
      if (!ALLOWED_HOSTS.test(new URL(origin).hostname)) return json({ ok: false, error: "origin" }, 403);
    } catch {
      return json({ ok: false, error: "origin" }, 403);
    }
  }

  let data;
  try {
    data = await request.formData();
  } catch {
    return json({ ok: false, error: "bad request" }, 400);
  }

  const kind = String(data.get("form") || "");
  const cfg = FORMS[kind];
  if (!cfg) return json({ ok: false, error: "unknown form" }, 400);

  let fields = {};
  try {
    fields = JSON.parse(String(data.get("fields") || "{}"));
  } catch {}
  if (data.get("website")) return json({ ok: true }); // honeypot

  const page = String(data.get("page") || "").slice(0, 200);
  const email = String(fields.email || "").trim();
  const name = String(fields.name || "").trim();
  if (!/^\S+@\S+\.\S+$/.test(email)) return json({ ok: false, error: "email" }, 400);

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  // Optional attachment
  let file = data.get("file");
  let fileKey = null;
  let fileBuf = null;
  if (file && typeof file === "object" && file.size > 0) {
    if (file.size > MAX_FILE) return json({ ok: false, error: "file too large" }, 413);
    if (!FILE_TYPES.test(file.name || "")) return json({ ok: false, error: "file type" }, 415);
    fileBuf = await file.arrayBuffer();
    const safe = (file.name || "file").replace(/[^\w.\-]+/g, "_").slice(-100);
    fileKey = `${kind}/${createdAt.slice(0, 10)}/${id}-${safe}`;
    if (env.LEADS_FILES) {
      await env.LEADS_FILES.put(fileKey, fileBuf, {
        httpMetadata: { contentType: file.type || "application/octet-stream" },
        customMetadata: { name, email, form: kind },
      });
    }
  } else {
    file = null;
  }

  // Save to D1
  if (env.LEADS_DB) {
    await env.LEADS_DB.prepare(
      `CREATE TABLE IF NOT EXISTS form_submissions (
        id TEXT PRIMARY KEY, created_at TEXT NOT NULL, form TEXT NOT NULL, page TEXT,
        name TEXT, email TEXT, fields TEXT, file_key TEXT, ip_country TEXT, emailed INTEGER DEFAULT 0)`
    ).run();
    await env.LEADS_DB.prepare(
      `INSERT INTO form_submissions (id, created_at, form, page, name, email, fields, file_key, ip_country)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(id, createdAt, kind, page, name, email, JSON.stringify(fields), fileKey, request.cf?.country || null)
      .run();
  }

  // Email notification
  let emailed = false;
  if (env.RESEND_API_KEY) {
    const to = cfg.to === "careers" ? env.CAREERS_TO || "careers@emburc.com" : env.SALES_TO || "sales@emburc.com";
    const rows = Object.entries(fields)
      .filter(([, v]) => v !== "" && v !== null && v !== undefined && !(Array.isArray(v) && !v.length))
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px 6px 0;color:#5B6673;vertical-align:top;white-space:nowrap">${esc(pretty(k))}</td><td style="padding:6px 0;color:#232A34;white-space:pre-wrap">${esc(show(v))}</td></tr>`
      )
      .join("");
    const html = `<div style="font-family:Arial,sans-serif;font-size:14px">
      <h2 style="margin:0 0 4px;color:#232A34">${esc(cfg.label)}</h2>
      <p style="margin:0 0 16px;color:#5B6673">From emburc.com${esc(page)} · ${esc(createdAt)}</p>
      <table style="border-collapse:collapse">${rows}</table>
      ${fileKey ? `<p style="color:#5B6673">Attachment: ${esc(file.name)} (also saved in R2 as ${esc(fileKey)})</p>` : ""}
      <p style="color:#98A2B3;font-size:12px">Reply to this email to respond to ${esc(name || email)} directly.</p></div>`;

    const body = {
      from: env.LEAD_FROM || "Emburc Website <website@emburc.com>",
      to: [to],
      reply_to: email,
      subject: `${cfg.label}: ${name || email}${fields.company ? " — " + fields.company : ""}`,
      html,
    };
    if (fileBuf && fileBuf.byteLength <= MAX_FILE) {
      let bin = "";
      const bytes = new Uint8Array(fileBuf);
      for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
      body.attachments = [{ filename: file.name, content: btoa(bin) }];
    }
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      emailed = r.ok;
      if (!r.ok) console.error("Resend error", r.status, await r.text());
    } catch (err) {
      console.error("Resend failed", err);
    }
    if (emailed && env.LEADS_DB) {
      await env.LEADS_DB.prepare("UPDATE form_submissions SET emailed = 1 WHERE id = ?").bind(id).run();
    }
  }

  return json({ ok: true, id, emailed });
}

export const onRequest = () => json({ ok: false, error: "method not allowed" }, 405);

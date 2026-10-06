// Single seam for every form on the site.
//
// The designs only specify front-end behaviour (validation + success states). Every
// successful submit lands here, so connecting a backend is a one-place change:
// set NEXT_PUBLIC_FORM_ENDPOINT to a URL that accepts a JSON POST (a serverless
// function, Formspree, etc.), or replace the body of `submitForm`.

export type FormKind = "lets-talk" | "careers" | "scoping-call" | "contact";

export interface FormSubmission {
  form: FormKind;
  /** Path of the page the form was submitted from. */
  page: string;
  /** Field values as held by the page (file inputs carry only the file name). */
  fields: Record<string, unknown>;
  submittedAt: string;
}

const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export async function submitForm(submission: FormSubmission): Promise<void> {
  if (!ENDPOINT) {
    if (process.env.NODE_ENV !== "production") console.info("[forms] no NEXT_PUBLIC_FORM_ENDPOINT set", submission);
    return;
  }
  try {
    await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(submission),
    });
  } catch (err) {
    console.error("[forms] submit failed", err);
  }
}

// Each form keeps its fields in page state under a prefix and flips a "sent" flag once
// its validation passes. Maps the flag to the form and the fields to send.
const FORMS: { flag: string; form: FormKind; fields: (key: string) => boolean; defaults?: Record<string, unknown> }[] = [
  { flag: "tSent", form: "lets-talk", fields: (k) => /^t[A-Z]/.test(k) && !/^t(Sent|Tried)$/.test(k) },
  { flag: "crSent", form: "careers", fields: (k) => /^cr[A-Z]/.test(k) && !/^cr(Sent|Tried)$/.test(k), defaults: { crType: "Job application" } },
  { flag: "bSent", form: "scoping-call", fields: (k) => ["bName", "bEmail", "bNote", "bDate", "bTime"].includes(k) },
  { flag: "sent", form: "contact", fields: (k) => (/^[cf][A-Z]/.test(k) && k !== "cTried") || k === "need" || k === "when" },
];

/** Called by the page host on every state change; submits forms whose sent flag just turned on. */
export function submitCompletedForms(prev: Record<string, unknown>, next: Record<string, unknown>) {
  for (const f of FORMS) {
    if (next[f.flag] && !prev[f.flag]) {
      const fields = { ...f.defaults, ...Object.fromEntries(Object.entries(next).filter(([k]) => f.fields(k))) };
      void submitForm({
        form: f.form,
        page: typeof location !== "undefined" ? location.pathname : "",
        fields,
        submittedAt: new Date().toISOString(),
      });
    }
  }
}

# eMburc Technologies website

Next.js (App Router, TypeScript) implementation of the eMburc website designed in Claude Design.
The design hand-off bundle lives in [`../project`](../project) and [`../chats`](../chats).

## Pages

| Route                | Design file                       |
| -------------------- | --------------------------------- |
| `/`                  | `Emburc Homepage- Final.dc.html`  |
| `/about`             | `About Us.dc.html`                |
| `/talent-solutions`  | `Talent Solutions.dc.html`        |
| `/offerings`         | `Offerings.dc.html`               |
| `/industries`        | `Industries.dc.html`              |
| `/case-studies`      | `Case Studies.dc.html`            |
| `/privacy-policy`    | `Privacy Policy.dc.html`          |
| `/terms-of-use`      | `Terms of Use.dc.html`            |

All pages are statically prerendered. `npm run export` writes a plain static copy of the
site to `out/` that can be uploaded to any static host (Netlify Drop, S3, cPanel, …).

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run lint
```

## How the code is organised

```
src/app/<route>/page.tsx      route + metadata
src/site/<page>/template.tsx  page markup (JSX)
src/site/<page>/logic.ts      page behaviour: state, animations, popups, form validation
src/site/<page>/index.tsx     binds logic + template into a client component
src/lib/dc.tsx                tiny host that runs a logic class and renders its template
src/lib/forms.ts              single submit hook for every form
src/styles/pseudo.css         hover / focus styles
src/app/globals.css           fonts (Geist, self-hosted) + base styles
public/assets                 logos, favicon, logo animation, founder photo
public/images/stock           stock photos used by the design (self-hosted)
public/icons                  technology logos (devicon / simple-icons, self-hosted)
```

The pages were converted from the design prototypes with `scripts/convert-dc.mjs`, so they
match the design pixel for pixel: same markup, inline styles and Web Animations behaviour.
Each logic class is the prototype's behaviour code ported as-is (`@ts-nocheck`); everything
else is strictly typed. **Edit `template.tsx` / `logic.ts` directly from now on.** Re-running
the converter regenerates those files from the design bundle and overwrites hand edits.

`template.tsx` renders from the values that `logic.ts#renderVals()` returns (`v.*`). To change
copy, edit the template text or the data arrays at the top of the logic class (for example
`TESTIMONIALS`, `CASES` and `FAQ` on the homepage).

## Forms

Let's Talk, Careers, Book a Scoping Call and the on-page contact forms have the designed
validation and success states. Each successful submit calls `submitForm()` in
`src/lib/forms.ts` with `{ form, page, fields, submittedAt }`.

- Set `NEXT_PUBLIC_FORM_ENDPOINT` to any URL that accepts a JSON `POST` (serverless function,
  Formspree, etc.) and submissions are sent there.
- Without it, submissions are not sent anywhere (logged to the console in development).
- File inputs (CV, project brief) only carry the file name; uploading files needs a backend.
- "Book a Scoping Call" also opens a pre-filled Google Calendar event, as designed.

## Before launch

- Photos in `public/images/stock` are the stock images chosen during design; swap in real
  team and project photos where you have them (keep the file names, or update the references).
- The final design has no `[FILL]` / `[SAMPLE]` placeholder markers left, but the case-study
  figures and testimonials are shown exactly as supplied in the design chats.

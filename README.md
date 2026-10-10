# Emburc website — deploy build

Static site. One HTML file per page; desktop and mobile layouts are in the same file (responsive, switches at 860px).

| Page | File |
|---|---|
| Home | index.html |
| About Us | about-us.html |
| Talent Solutions | talent-solutions.html |
| Offerings | offerings.html |
| Industries | industries.html |
| Case Studies | case-studies.html |
| Privacy Policy | privacy-policy.html |
| Terms of Use | terms-of-use.html |

## Deploy with git

```bash
# copy these files into the repo root (or the folder your host serves)
git add .
git commit -m "Update Emburc site"
git push
```

Works on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, cPanel). No build step.

## Notes

- Logos, founder photo, logo animation and team avatars are embedded in each file.
- Stock photos load from images.unsplash.com, and fonts from Google Fonts — an internet connection is needed for those.
- Links between pages use the filenames above. If your host serves clean URLs (/about-us), keep the .html links or add redirects.
- Forms post to `/api/lead` (see below).

## How the site is built

The `*.html` files in the repo root are the design-tool exports. They are self-unpacking bundles (every image, font and video base64-encoded inside each page), which is slow and needs a loading screen. Cloudflare doesn't publish them as-is: on every push it runs

    Build command:  node scripts/build-site.mjs
    Build output:   site

which unpacks each export once, at build time: assets become separate cached files under `/_a/`, each page becomes a normal 90-230 KB page that renders straight away, and the forms get wired to `/api/lead`. To update the site, drop new exports into the root (same file names) and push.

## Forms

All forms (Let's Talk, Careers, Scoping Call, Contact) post to `/api/lead`, a Cloudflare Pages Function in `functions/api/lead.js`. Each submission is saved to the D1 database `emburc-leads` (table `form_submissions`), any attached CV/brief to the R2 bucket `emburc-leads-files`, and emailed to sales@emburc.com (careers to careers@emburc.com) when the `RESEND_API_KEY` secret is set. Watch the build log for "WARNING ... no form handlers found" — it means the design's form code changed and `scripts/build-site.mjs` needs updating.

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

## Forms

All forms (Let's Talk, Careers, Scoping Call, Contact) post to `/api/lead`, a Cloudflare Pages Function in `functions/api/lead.js`. Each submission is saved to the D1 database `emburc-leads` (table `form_submissions`), any attached CV/brief to the R2 bucket `emburc-leads-files`, and emailed to sales@emburc.com (careers to careers@emburc.com) when the `RESEND_API_KEY` secret is set.

The HTML exports don't send forms by themselves. `scripts/patch-forms.mjs` adds the wiring and Cloudflare runs it on every build:

    Build command:  node scripts/patch-forms.mjs . && mkdir -p site && cp *.html site/
    Build output:   site

So freshly exported HTML can be dropped into the repo and pushed as-is. If the build log shows "WARNING ... no form handlers found", the design's form code changed and the patch needs updating.

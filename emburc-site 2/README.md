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
- Forms are front-end only; connect them to your form handler or email service before launch.

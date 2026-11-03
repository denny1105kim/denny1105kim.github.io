# denny1105kim.github.io

Personal site of Jae Hyeon Kim, built with [Astro](https://astro.build) — minimal, light/dark, fast.

## Editing

| What | Where |
|---|---|
| Name, role, highlight numbers, experience, thesis, skills, education, training, contact | `src/site.ts` |
| Intro paragraphs on the home page | `src/pages/index.astro` |
| Profile photo | `public/avatar.jpg` (square) |
| Blog posts | `src/content/blog/*.md` |
| Projects | `src/content/projects/*.md` (`order` sets position; files starting with `_` are hidden) |
| Colors, fonts | `src/styles/global.css` |

## Local development

```bash
npm install
npm run dev   # http://localhost:4321
```

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.
Set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** once.

# Rapix Connect Website (Astro)

Static site built with Astro and deployed to GitHub Pages.

## Quick Start

```bash
pnpm install
pnpm run dev
```

## Build

```bash
pnpm run build
pnpm run preview
```

## Project Structure

- `src/layouts/BaseLayout.astro` — shared layout extracted from the original `index.html`
- `src/pages/index.astro` — homepage
- `src/pages/*.html.astro` — preserves `.html` URLs (e.g. `privacy-policy.html`)
- `public/assets` — static assets (CSS/JS/images)
- `public/CNAME` — custom domain for GitHub Pages

## GitHub Pages Deployment

Deployment is configured in `.github/workflows/deploy.yml` and builds on pushes to `main` using pnpm.
Make sure the repo’s Pages settings are set to **GitHub Actions**.

## pnpm Lockfile

CI uses `pnpm install --frozen-lockfile`, so commit `pnpm-lock.yaml` after installing locally.

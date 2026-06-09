# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing & lead-generation website for **Les Assureurs Experts**, a French (ORIAS-regulated)
insurance broker. Single-page React app (no backend, no database) where each insurance product
gets its own SEO-optimized landing page. All UI copy is in **French** — keep it French.

Generated from a Bolt template (`.bolt/`). Per `.bolt/prompt`: use Tailwind for styling, React
hooks, and `lucide-react` for icons/logos; do **not** add UI/icon/component libraries unless
strictly necessary.

## Workflow & scope

- **Development only.** Do **not** deploy, configure hosting, or run release steps — the user
  owns deployment and CI/CD.
- Work on the **`dev`** branch. The remote `origin` is the **private** repo
  `iaformaplus/Les-Assurreurs-Experts-website` (default branch `Master`; other branches: `main`,
  `Bolt-Rudy`). Local `dev` tracks `origin/dev`.
- Access is via the **`sitekept`** GitHub account (collaborator on the `iaformaplus` repo). `gh`
  has both `sitekept` and `Orhakerem` configured — ensure `sitekept` is active
  (`gh auth switch -u sitekept`) for git/`gh` operations, since the repo is invisible to
  `Orhakerem`.
- The **user manages PRs and merges** into other branches — don't open PRs, push, or merge
  unless explicitly asked. Make changes locally and verify with `npm run build` / `npm run lint`.

## Commands

```bash
npm install        # install deps
npm run dev        # Vite dev server (HMR)
npm run build      # production build → dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint over the repo
```

There is **no test framework** configured — do not assume `npm test` exists. The only
verification gates are `npm run build` (tsc via Vite) and `npm run lint`.

## Stack

- **Vite 5** + **React 18** + **TypeScript** (strict; `noUnusedLocals`/`noUnusedParameters` on)
- **react-router-dom v7** for client-side routing
- **react-helmet-async** for per-page `<head>` / SEO tags
- **framer-motion** for animation, **Tailwind CSS** for styling, **lucide-react** for icons
- `vite.config.ts` deliberately excludes `lucide-react` from `optimizeDeps` — leave that as is.

## Architecture

- **`src/main.tsx`** — entry; wraps `<App/>` in `StrictMode` + `HelmetProvider`.
- **`src/App.tsx`** — the hub. Holds the **entire route table** (`<Routes>`) and mounts every
  global/persistent UI element: `Header`, `Footer`, `WhatsAppButton`, `ExitIntentPopup`,
  `CookieConsent`, `ScrollToTop`, `InternalReviewBanner`, `SocialMediaBanner`. It also owns the
  exit-popup trigger logic (shows after 10s, at 50% scroll, or on mouse-leave; suppressed via
  `sessionStorage.popupClosed`).
- **`src/pages/`** (~24 files) — one component per route. Most are insurance-product landing
  pages with French URL slugs (e.g. `/mutuelle-sante`, `/assurance-auto`, `/per`) plus legal
  pages (`/mentions-legales`, etc.). Each page renders its own `<Helmet>` block (title /
  description / canonical).
- **`src/components/`** (~13 files) — shared building blocks (`Header`, `Footer`, hero,
  carousels, calculators, popups, banners).
- **`public/`** — static assets, plus `_redirects`, `robots.txt`, `sitemap.xml`, `site.webmanifest`.

### Conventions & gotchas (read before editing)

- **Lead forms → one hardcoded Formspree endpoint:** `https://formspree.io/f/mblnydqy` is
  duplicated as a `<form action=...>` (or `fetch`) across ~15 page/component files. There is no
  shared form util and no env var. To change the endpoint you must edit **every** occurrence
  (`grep -rn formspree src/`). Forms `POST` directly to Formspree; the `handleSubmit` handlers
  are mostly no-ops.
- **Adding a new page is a multi-file change.** A new route must be wired in **all** of:
  1. create `src/pages/XxxPage.tsx` (include a `<Helmet>` block),
  2. add the `<Route>` in `src/App.tsx`,
  3. add the nav entry in `src/components/Header.tsx` (`menuItems` / `staticLinks`),
  4. add the `<url>` entry in `public/sitemap.xml` (it is **static**, not generated).
- **SEO is split:** global defaults + Organization JSON-LD live in `index.html`; per-page
  overrides live in each page's `<Helmet>`. Keep canonical URLs pointing at
  `https://lesassureursexperts.fr/...`.
- **Deployment is out of scope** (the user handles it). FYI only: `public/_redirects`
  (`/*  /index.html  200`) is the SPA client-routing fallback — don't delete it, but don't
  manage hosting/deploy config.
- **Dismissable UI uses web storage:** `InternalReviewBanner`/popups persist dismissal via
  `localStorage`/`sessionStorage` (e.g. `reviewBannerHidden`, `popupClosed`).
- Header links to `/espace-assure`, which has **no matching route** in `App.tsx` — it's a
  placeholder; don't assume every nav link resolves.

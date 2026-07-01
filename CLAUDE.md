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

- **Development only.** Do **not** deploy or run release steps — the user owns deployment.
- **Hosting: Vercel.** The site is deployed on **Vercel** (framework preset Vite, output `dist`),
  building from the **`Master`** branch. SPA client-routing fallback is `vercel.json` (rewrites
  everything to `/index.html`). DNS is managed at Squarespace/Google Cloud DNS; the **apex
  (non-www) `lesassureursexperts.fr` is the primary domain** and `www` 308-redirects to it.
  (Historic note: the site was previously on Netlify/Bolt — that setup is retired.)
- Work on the **`dev`** branch. The active repo is the **private** repo
  `laxexpertsdev-bot/Website--LAE` (branches: `Master` (default/production), `main`, `dev`,
  `Bolt-Rudy`). The old `iaformaplus/Les-Assurreurs-Experts-website` repo is **deprecated**.
- **Git remote `origin`** points to `https://github.com/laxexpertsdev-bot/Website--LAE.git` —
  always use `git push origin <branch>`. The remotes `newrepo` and `lae-bot` exist but `origin`
  is canonical. Never push to the old `iaformaplus` remote.
- Access is via the **`sitekept`** GitHub account (collaborator on `laxexpertsdev-bot/Website--LAE`).
  `gh` has both `sitekept` and `Orhakerem` configured — ensure `sitekept` is active
  (`gh auth switch -u sitekept`) for git/`gh` operations.
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
  `sessionStorage.popupClosed`). All page components are **lazy-loaded** via `React.lazy()` and
  wrapped in a single `<Suspense>` boundary — follow the existing `const XxxPage = React.lazy(...)`
  pattern at the top of `App.tsx` when adding a new route.
- **`src/pages/`** (~24 files) — one component per route. Most are insurance-product landing
  pages with French URL slugs (e.g. `/mutuelle-sante`, `/assurance-auto`, `/per`) plus legal
  pages (`/mentions-legales`, etc.). Each page renders its own `<Helmet>` block (title /
  description / canonical).
- **`src/components/`** (~13 files) — shared building blocks (`Header`, `Footer`, hero,
  carousels, calculators, popups, banners).
- **`public/`** — static assets, plus `robots.txt`, `sitemap.xml`, `site.webmanifest`.

### Conventions & gotchas (read before editing)

- **Lead forms → one hardcoded Formspree endpoint:** `https://formspree.io/f/mblnydqy` is
  duplicated as a `<form action=...>` (or `fetch`) across ~15 page/component files. There is no
  shared form util and no env var. To change the endpoint you must edit **every** occurrence
  (`grep -rn formspree src/`). Forms `POST` directly to Formspree; the `handleSubmit` handlers
  are mostly no-ops.
- **Hardcoded contact details:** Phone `+33 1 62 17 11 11`, WhatsApp `wa.me/33651883151`,
  address `138 Boulevard Haussmann 75008 Paris`, and ORIAS `25002995` are duplicated across
  multiple page/component files with no shared constants. Use `grep -rn` to find all occurrences
  before changing any of these.
- **Adding a new page is a multi-file change.** A new route must be wired in **all** of:
  1. create `src/pages/XxxPage.tsx` (include a `<Helmet>` block),
  2. add the `<Route>` in `src/App.tsx`,
  3. add the nav entry in `src/components/Header.tsx` (`menuItems` / `staticLinks`),
  4. add the `<url>` entry in `public/sitemap.xml` (it is **static**, not generated).
- **SEO is split:** global defaults + Organization JSON-LD live in `index.html`; per-page
  overrides live in each page's `<Helmet>`. Keep canonical URLs pointing at the **non-www apex**
  `https://lesassureursexperts.fr/...` (this matches the primary domain on Vercel).
- **SPA routing fallback is `vercel.json`** (root): rewrites all paths to `/index.html` so deep
  routes (e.g. `/mutuelle-sante`) resolve on reload. Don't delete it. Deployment/hosting config
  itself is owned by the user.
- **Dismissable UI uses web storage:** `CookieConsent` persists via `localStorage` (13-month
  CNIL expiry); `ExitIntentPopup` uses `sessionStorage` key `popupClosed` (clears on tab close);
  `InternalReviewBanner` uses `localStorage` key `reviewBannerHidden`.
- Header links to `/espace-assure`, which has **no matching route** in `App.tsx` — it's a
  placeholder; don't assume every nav link resolves.

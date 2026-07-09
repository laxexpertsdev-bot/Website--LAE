# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing & lead-generation website for **Les Assureurs Experts**, a French (ORIAS-regulated)
insurance broker. Primarily a static React SPA (no database) where each insurance product gets
its own SEO-optimized landing page, plus a family of `noindex` campaign landing pages for paid
(Google Ads) traffic. All UI copy is in **French** — keep it French.

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
- **One Vercel serverless function**, `api/bilan-lead.ts` (uses `resend` + `@vercel/node`): handles
  the homepage "Bilan assurance offert" lead-magnet form (emails a PDF guide to the prospect,
  a report to admins, and forwards to Formspree). Reads `RESEND_API_KEY`, `LEAD_FROM_EMAIL`,
  `LEAD_ADMIN_EMAIL`, `PUBLIC_SITE_URL` from Vercel env vars. Everything else on the site is
  static/client-side — this is the one exception to "no backend".

## Architecture

- **`src/main.tsx`** — entry; wraps `<App/>` in `StrictMode` + `HelmetProvider`.
- **`src/App.tsx`** — the hub. Holds the **entire route table** (`<Routes>`) and mounts every
  global/persistent UI element: `Header`, `Footer`, `WhatsAppButton`, `ExitPopupController`
  (wrapped in `ExitPopupProvider`, see below), `CookieConsent`, `ScrollToTop`. All page components
  are **lazy-loaded** via `React.lazy()` and wrapped in a single `<Suspense>` boundary — follow the
  existing `const XxxPage = lazy(() => import(...))` pattern when adding a static route.
- **`src/pages/`** (~27 files) — one component per route. Most static product pages are one-line
  wrappers around `ProductPageLayout` (see below) plus legal/utility pages with their own markup
  and `<Helmet>` block.
- **`src/components/`** — shared building blocks (`Header`, `Footer`, hero, carousels, calculator,
  cookie/exit popups). **`src/components/product/`** is the shared templating system (below).
- **`public/`** — static assets, plus `robots.txt`, `sitemap.xml` (static, 24 URLs), `site.webmanifest`.

### The product / region template system (`src/components/product/` + `src/data/`)

This is the core architecture to understand before touching any product or campaign page — most
of the site's pages are generated from **data objects**, not hand-written JSX.

- **`ProductPageLayout.tsx`** renders every product page from a `ProductPageData` object
  (`src/components/product/types.ts`): hero, coverage, audience, pricing, steps, advantages, FAQ,
  related products, lead form, etc. Optional fields simply don't render. Every static product page
  in `src/pages/` (e.g. `MutuelleHealthPage.tsx`) is a one-liner:
  `const XxxPage = () => <ProductPageLayout data={xxx} />;`, importing its data from
  `src/data/products/<slug>.ts` (14 files, one per product).
- **`RegionPageLayout.tsx`** renders city/region "hub" pages (multi-product, e.g. `/paris`) from a
  `RegionPageData` object (`src/components/product/regionTypes.ts`).
- **Campaign geo pages** (Google Ads landing pages) are generated from two parallel registries,
  both `noindex, follow`, both excluded from nav and `sitemap.xml` by design (reachable only via
  the exact ad URL):
  - `src/data/product-regions/` — product **× city** pages (e.g. `/mutuelle-sante/nice`). The
    factory `buildProductRegion(baseProduct, cfg)` (`_build.ts`) takes an existing
    `ProductPageData` and overrides only Hero/SEO/section titles; everything else (coverage,
    pricing, FAQ, etc.) is inherited. Setting `region` on the result is what flips
    `ProductPageLayout` into `noindex` + drops JSON-LD. Registered in `index.ts` → `App.tsx` maps
    the array into `<Route>`s automatically.
  - `src/data/regions/` — region/city **hub** pages (e.g. `/nice`, multi-product, modeled on the
    original `paris.ts`). The factory `buildCityRegion(city)` (`_buildCity.ts`) generates one from
    a `GeoCity` entry. Registered the same way in `regions/index.ts`.
  - `src/data/geo/cities.ts` is the **single shared dataset** (`GeoCity[]`, currently 16 cities
    across two Google Ads zones) consumed by *both* factories above — add a city once, get both a
    product×city page and a region hub for it. `src/data/geo/images.ts` holds shared hero images
    keyed by zone (not one photo per city).
  - **Adding a city or a product×city variant never touches `App.tsx`, `sitemap.xml`, or
    `Header.tsx`** — routes are generated by mapping the registries. This is unlike adding a
    regular static product page (see gotcha below).
- **`src/context/ExitPopupContext.tsx`** — the exit-intent popup (see below) is suppressed on any
  page that renders `ProductPageLayout` via `useSuppressExitPopup()` (called unconditionally at
  the top of `ProductPageLayout`), read by `ExitPopupController` in `App.tsx`. This is the pattern
  to follow if another piece of global App-level UI needs to know "am I currently on a product
  page" without `App.tsx` maintaining a route list — the page template signals it, it isn't
  pattern-matched from the URL. Region hub pages (`RegionPageLayout`) are **not** suppressed.

### Conventions & gotchas (read before editing)

- **Lead submission is centralized** in `src/utils/lead.ts`: `FORMSPREE_ENDPOINT` (single
  definition, `https://formspree.io/f/mblnydqy`), `submitLead()`, `trackLeadConversion()` (pushes
  a GA4 `generate_lead` event via `gtag()` + `dataLayer`), and `submitBilanLead()` (posts to
  `/api/bilan-lead`). Every product-family form goes through `ProductLeadForm` → this util; 9
  files import it directly. `api/bilan-lead.ts` re-declares the Formspree endpoint as a literal
  because `api/` can't import from `src/` — keep both in sync if it ever changes.
- **Hardcoded contact details:** Phone `+33 1 62 17 11 11`, WhatsApp `wa.me/33651883151`, address
  `138 Boulevard Haussmann 75008 Paris`, and ORIAS `25002995` are still duplicated as string
  literals across ~10 files outside the product template. `src/components/product/constants.ts`
  centralizes them (`PHONE_DISPLAY`, `PHONE_TEL`, `ORIAS`, `SITE_ORIGIN`) **for the product/region
  template family only** — use `grep -rn` before changing any of these values anywhere else.
- **Adding a new static product page** is a multi-file change: 1) create the `ProductPageData` in
  `src/data/products/`, 2) create `src/pages/XxxPage.tsx` (one-liner around `ProductPageLayout`),
  3) add the `<Route>` in `src/App.tsx`, 4) add the nav entry in `src/components/Header.tsx`
  (`menuItems` / `staticLinks`), 5) add the `<url>` entry in `public/sitemap.xml` (static, not
  generated). Campaign geo pages (previous section) skip steps 3–5 entirely.
- **SEO is split:** global defaults + Organization JSON-LD live in `index.html`; per-page
  overrides live in each page's `<Helmet>` (or in `ProductPageLayout`/`RegionPageLayout` for
  data-driven pages). Keep canonical URLs pointing at the **non-www apex**
  `https://lesassureursexperts.fr/...`.
- **SPA routing fallback is `vercel.json`** (root): rewrites all paths to `/index.html` so deep
  routes resolve on reload. Don't delete it. Deployment/hosting config itself is owned by the user.
- **Dismissable UI uses web storage:** `CookieConsent` persists via `localStorage` (13-month CNIL
  expiry); `ExitIntentPopup` uses `sessionStorage` key `popupClosed` (24h re-arm, clears on tab
  close) **and** is suppressed entirely on product/product×region pages via `ExitPopupContext`
  (see above) regardless of session storage.

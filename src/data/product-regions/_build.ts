import type { ProductPageData, HeroImage } from '../../components/product/types';

/**
 * Config d'une page produit × région.
 * On repart d'une page produit existante (ProductPageData) et on n'override que le
 * strict nécessaire : slug/canonical (via regionSlug), Hero, SEO et titres de sections.
 * Tout le reste (couverture, tarifs, étapes, avantages, FAQ, partenaires, témoignages…)
 * est hérité du produit de base.
 */
export interface ProductRegionConfig {
  /** Slug de la région, sans slash (ex. 'paris'). URL finale : /<produit>/<regionSlug>. */
  regionSlug: string;
  /** Libellé humain de la région (ex. 'Paris'). Sert au tracking et à la copie. */
  region: string;
  seo: { title: string; description: string; ogImage?: string };
  hero: { eyebrow?: string; h1: string; intro: string; image?: HeroImage };
  /** Titres de sections adaptés à la région (optionnels — héritent du produit si absents). */
  titles?: {
    coverage?: string;
    audience?: string;
    pricing?: string;
    steps?: string;
    advantages?: string;
    faq?: string;
    form?: string;
  };
  ctaBand?: { title: string; text?: string };
}

/**
 * Fabrique un ProductPageData « géo » à partir d'un produit de base + une config région.
 * La page rendue est identique à la page produit mais avec Hero et titres adaptés,
 * en noindex (déclenché par `region` dans ProductPageLayout).
 */
export function buildProductRegion(
  base: ProductPageData,
  cfg: ProductRegionConfig,
): ProductPageData {
  const t = cfg.titles ?? {};
  return {
    ...base,
    slug: `${base.slug}/${cfg.regionSlug}`, // canonical + route
    insuranceType: base.slug, // tracking propre (sans slash)
    region: cfg.region,
    label: `${base.label} à ${cfg.region}`, // fil d'Ariane
    seo: { ...base.seo, ...cfg.seo },
    hero: {
      eyebrow: cfg.hero.eyebrow ?? base.hero.eyebrow,
      h1: cfg.hero.h1,
      intro: cfg.hero.intro,
      image: cfg.hero.image ?? base.hero.image,
    },
    coverage: { ...base.coverage, title: t.coverage ?? base.coverage.title },
    audience: base.audience && { ...base.audience, title: t.audience ?? base.audience.title },
    pricing: base.pricing && { ...base.pricing, title: t.pricing ?? base.pricing.title },
    steps: base.steps && { ...base.steps, title: t.steps ?? base.steps.title },
    advantages: { ...base.advantages, title: t.advantages ?? base.advantages.title },
    faq: { ...base.faq, title: t.faq ?? base.faq.title },
    ctaBand: cfg.ctaBand ?? base.ctaBand,
    form: { ...base.form, title: t.form ?? base.form.title },
  };
}

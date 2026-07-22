import type { FaqItem } from '../FaqSection';

/**
 * Modèle de données d'une page produit.
 * Toute la template « éditoriale premium » est pilotée par cet objet :
 * chaque page (src/pages/*Page.tsx) déclare un ProductPageData et rend <ProductPageLayout>.
 * Les sections optionnelles (undefined) ne sont tout simplement pas rendues.
 */
export interface ProductPageData {
  /** Slug sans slash, ex. 'mutuelle-sante'. Sert au canonical, au JSON-LD et aux ancres. */
  slug: string;
  /** Libellé lisible, ex. 'Mutuelle santé'. */
  label: string;

  seo: {
    title: string;
    description: string;
    /** URL absolue d'une image og. Fallback : logo (dans le layout). */
    ogImage?: string;
  };

  hero: {
    /** Sur-titre court au-dessus du H1, ex. 'Complémentaire santé'. */
    eyebrow: string;
    h1: string;
    intro: string;
    image: HeroImage;
  };

  /** Chiffres-clés (bande sous le hero). 2 à 4 éléments idéalement. */
  keyFigures?: KeyFigure[];

  coverage: {
    title: string;
    intro?: string;
    items: string[];
  };

  audience?: {
    title: string;
    intro?: string;
    rows: { public: string; specificity: string }[];
  };

  pricing?: {
    title: string;
    intro?: string;
    factors: string[];
    examples: { profile: string; price: string }[];
  };

  steps?: {
    title: string;
    steps: { title: string; text: string }[];
  };

  /** Bande CTA intermédiaire (fond navy). Optionnelle. */
  ctaBand?: {
    title: string;
    text?: string;
  };

  /** Liste « Pourquoi Les Assureurs Experts ». */
  advantages: {
    title: string;
    items: string[];
  };

  faq: {
    title: string;
    items: FaqItem[];
  };

  /** Maillage interne : autres produits liés. */
  related: { label: string; slug: string }[];

  form: {
    title: string;
    intro: string;
    submitLabel: string;
  };
}

export interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface KeyFigure {
  value: string;
  label: string;
}

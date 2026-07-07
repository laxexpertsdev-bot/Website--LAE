import type { FaqItem } from '../FaqSection';
import type { HeroImage, KeyFigure } from './types';

/**
 * Modèle de données d'une landing page régionale (campagne géo).
 * Accessible par URL uniquement (hors nav, hors sitemap, `noindex`), pilotée à 100 % par cet
 * objet : chaque région (src/data/regions/*.ts) déclare un RegionPageData rendu par
 * <RegionPageLayout>. Les sections optionnelles (undefined) ne sont pas rendues.
 *
 * Pour créer une nouvelle région : dupliquer src/data/regions/paris.ts, adapter le contenu,
 * puis l'ajouter au tableau `regions` de src/data/regions/index.ts. Rien d'autre à câbler.
 */
export interface RegionPageData {
  /** Slug sans slash, sert d'URL et de canonical, ex. 'paris' → /paris. */
  slug: string;
  /** Libellé lisible de la région/ville, ex. 'Paris'. Sert au tracking lead et au JSON-LD. */
  region: string;

  seo: {
    title: string;
    description: string;
    /** URL absolue d'une image og. Fallback : logo (dans le layout). */
    ogImage?: string;
  };

  hero: {
    /** Sur-titre court au-dessus du H1, ex. 'Courtier en assurance à Paris'. */
    eyebrow: string;
    h1: string;
    intro: string;
    image: HeroImage;
  };

  /** Chiffres-clés de réassurance (ORIAS, délai, nb clients…). 2 à 4 éléments. */
  keyFigures?: KeyFigure[];

  /** Bloc texte de contexte local UNIQUE (levier anti duplicate-content). */
  localContext?: {
    title: string;
    paragraphs: string[];
  };

  /** Assurances mises en avant pour la région : maillage vers les pages produit. */
  insurances: {
    title: string;
    intro?: string;
    items: { label: string; slug: string }[];
  };

  /** Liste « Pourquoi Les Assureurs Experts » (+ arguments de proximité locale). */
  advantages: {
    title: string;
    items: string[];
  };

  /** « Comment ça marche » (optionnel). */
  steps?: {
    title: string;
    steps: { title: string; text: string }[];
  };

  faq: {
    title: string;
    items: FaqItem[];
  };

  form: {
    title: string;
    intro: string;
    submitLabel: string;
  };
}

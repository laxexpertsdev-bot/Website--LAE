import type { FaqItem } from '../FaqSection';
import type { KeyFigure } from '../product/types';

/**
 * Modèle de données de la landing page de campagne `/lp/mutuelle-sante`.
 * Contrat entre le contenu (src/data/campaigns/*.ts) et l'assemblage de la page
 * (src/pages/LpMutuelleSantePage.tsx) — même logique que `ProductPageData`
 * (src/components/product/types.ts), en plus léger : pas de sections optionnelles,
 * cette landing page a une structure fixe pensée pour la conversion Ads.
 *
 * La copie légale (mention RGPD, consentement) N'EST PAS pilotée par ce type : elle
 * reste fixe dans StepLeadForm, comme ProductLeadForm le fait déjà, pour garantir un
 * wording juridique cohérent dans tout le site.
 */
export interface CampaignLpData {
  /** Chemin sans slash initial, ex. 'lp/mutuelle-sante'. Sert au canonical (SITE_ORIGIN + '/' + slug). */
  slug: string;
  /** Id « machine » du produit pour le tracking et Formspree, ex. 'mutuelle-sante'. */
  insuranceType: string;
  /** Libellé lisible, ex. 'Mutuelle santé'. */
  label: string;

  seo: {
    title: string;
    description: string;
  };

  hero: {
    /** Sur-titre court au-dessus du H1. */
    eyebrow: string;
    h1: string;
    subtitle: string;
    /** 3 bénéfices courts affichés en liste à puces sous le subtitle. */
    benefits: string[];
    /** Badges de réassurance courts (ORIAS, nombre de clients, etc.), affichés sous les bénéfices. */
    trustBadges: string[];
  };

  /** Bande de chiffres-clés (section dédiée sous le hero). 3 à 4 éléments. */
  keyFigures: KeyFigure[];

  form: {
    step1Title: string;
    step1Intro?: string;
    /** Cartes de profil cliquables. `value` = valeur machine envoyée à Formspree. */
    profiles: { value: string; label: string }[];
    /** Tranches d'âge cliquables. `value` = valeur machine envoyée à Formspree. */
    ageRanges: { value: string; label: string }[];
    /** Question « Avez-vous déjà une mutuelle santé ? » — réponses Oui/Non fixes côté composant. */
    hasMutuelleQuestion: string;
    continueLabel: string;
    step2Title: string;
    step2Intro?: string;
    submitLabel: string;
    successTitle: string;
    successText: string;
  };

  productContent: {
    coverage: { title: string; intro?: string; items: string[] };
    audience: { title: string; intro?: string; rows: { public: string; specificity: string }[] };
    steps: { title: string; steps: { title: string; text: string }[] };
  };

  /** Bande CTA intermédiaire (fond navy) — réutilise CtaBand. */
  ctaBand: { title: string; text?: string };

  faq: { title: string; items: FaqItem[] };

  /** CTA de fin de page, juste avant le footer légal. */
  finalCta: { title: string; text?: string };
}

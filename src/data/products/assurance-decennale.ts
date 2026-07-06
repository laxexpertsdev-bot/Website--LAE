import type { ProductPageData } from '../../components/product/types';

/**
 * Contenu de la page /assurance-decennale.
 * (Repris de l'ancienne AssuranceDecennalePage, restructuré pour la template éditoriale.)
 */
export const assuranceDecennale: ProductPageData = {
  slug: 'assurance-decennale',
  label: 'Assurance décennale',
  seo: {
    title: 'Assurance Décennale BTP | Devis Artisan & Construction | Les Assureurs Experts',
    description:
      'Assurance décennale obligatoire pour artisans et entreprises du BTP dès 60€/mois. Garantie 10 ans, couverture complète. Devis rapide et personnalisé.',
  },
  hero: {
    eyebrow: 'Garantie décennale BTP',
    h1: 'Assurance décennale : obligation et protection pour les professionnels du bâtiment',
    intro:
      "Artisan, auto-entrepreneur, entreprise de construction : l'assurance décennale est obligatoire pour tous les professionnels du BTP. Elle couvre les dommages pouvant survenir après réception des travaux, pendant 10 ans.",
    image: {
      src: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: "Signature d'un contrat de garantie décennale",
      width: 1000,
      height: 750,
    },
  },
  keyFigures: [
    { value: 'Obligation légale', label: 'Article 1792 du Code civil' },
    { value: 'Garantie 10 ans', label: 'Après réception des travaux' },
    { value: 'Dès 60 €/mois', label: 'Tarif de départ' },
  ],
  coverage: {
    title: "Que couvre l'assurance décennale ?",
    intro: 'L\'assurance décennale protège votre entreprise et vos clients contre :',
    items: [
      'Garantie décennale obligatoire pour le BTP',
      'Couverture des dommages après réception des travaux',
      'Protection sur 10 ans après livraison',
      "Solidité de l'ouvrage et malfaçons",
      'Responsabilité civile chantier',
      'Protection juridique construction',
    ],
  },
  audience: {
    title: 'Pour quels professionnels du BTP ?',
    rows: [
      { public: 'Artisans du bâtiment', specificity: 'Maçonnerie, plomberie, électricité' },
      { public: 'Auto-entrepreneurs BTP', specificity: 'Obligation décennale dès le 1er chantier' },
      { public: 'Entreprises de construction', specificity: "Couverture globale tous corps d'état" },
      { public: 'Architectes et maîtres d\'œuvre', specificity: 'RC + Décennale conception' },
      { public: 'Couvreurs et charpentiers', specificity: 'Garantie décennale renforcée' },
    ],
  },
  pricing: {
    title: 'Combien coûte une assurance décennale ?',
    factors: [
      'votre métier et spécialité',
      "votre chiffre d'affaires annuel",
      "vos années d'expérience",
      "la zone géographique d'intervention",
    ],
    examples: [
      { profile: 'Électricien auto-entrepreneur', price: 'à partir de 60 €/mois' },
      { profile: 'Maçon avec équipe', price: '120–250 €/mois' },
      { profile: 'Entreprise générale BTP', price: '300–800 €/mois selon CA' },
    ],
  },
  ctaBand: {
    title: 'Respectez votre obligation légale dès aujourd\'hui',
    text: 'Recevez un devis décennale adapté à votre métier, sans engagement.',
  },
  advantages: {
    title: 'Pourquoi choisir Les Assureurs Experts ?',
    items: [
      'Devis rapide adapté à votre métier du BTP',
      'Obligation légale respectée dès le démarrage',
      'Accompagnement pour auto-entrepreneurs',
      'Partenaires spécialisés construction',
      'Tarifs négociés pour artisans et PME',
    ],
  },
  faq: {
    title: 'Assurance décennale : vos questions fréquentes',
    items: [
      { q: 'La garantie décennale est-elle obligatoire ?', a: "Oui. Tout constructeur (artisan, entreprise du BTP, maître d'œuvre) doit souscrire une assurance décennale avant le début des travaux. C'est une obligation légale." },
      { q: 'Que couvre l\'assurance décennale ?', a: "Elle couvre pendant 10 ans les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination (fissures graves, infiltrations, effondrement…)." },
      { q: 'Quels métiers sont concernés ?', a: "Maçons, plombiers, électriciens, charpentiers, couvreurs, terrassiers… La plupart des métiers du bâtiment intervenant sur le gros œuvre ou le second œuvre sont concernés." },
      { q: 'Quand dois-je souscrire la décennale ?', a: "Avant l'ouverture du chantier. L'attestation est souvent exigée par le client ou le maître d'ouvrage avant le démarrage des travaux." },
      { q: 'Combien coûte une assurance décennale ?', a: "Le tarif dépend du métier, du chiffre d'affaires, de l'expérience et des techniques utilisées. Nous comparons les assureurs spécialisés BTP pour optimiser votre cotisation." },
    ],
  },
  related: [
    { label: 'RC Professionnelle', slug: 'assurance-professionnelle' },
    { label: 'Prévoyance', slug: 'prevoyance' },
    { label: 'Mutuelle santé', slug: 'mutuelle-sante' },
  ],
  form: {
    title: 'Devis décennale gratuit',
    intro: 'Obtenez votre tarif adapté à votre métier du BTP.',
    submitLabel: 'Obtenir mon devis',
  },
};

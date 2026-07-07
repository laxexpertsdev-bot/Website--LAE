import type { ProductPageData } from '../../components/product/types';

/**
 * Contenu de la page /assurance-emprunteur.
 * (Repris de l'ancienne AssuranceEmprunteurPage, restructuré pour la template éditoriale.)
 */
export const assuranceEmprunteur: ProductPageData = {
  slug: 'assurance-emprunteur',
  label: 'Assurance emprunteur',
  seo: {
    title: 'Assurance Emprunteur Loi Lemoine | Les Assureurs Experts',
    description:
      "Changez d'assurance de prêt immobilier grâce à la loi Lemoine et économisez jusqu'à 15 000 €. Garanties équivalentes, devis gratuit, courtier ORIAS agréé.",
  },
  hero: {
    eyebrow: 'Assurance de prêt',
    h1: 'Assurance emprunteur : économisez jusqu\'à 15 000 € sur votre crédit',
    intro:
      "Changez votre assurance de prêt immobilier et réalisez des économies substantielles. Grâce à la loi Lemoine, vous pouvez désormais changer d'assurance emprunteur à tout moment, sans frais ni pénalités.",
    image: {
      src: 'https://images.pexels.com/photos/7578966/pexels-photo-7578966.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Couple signant un contrat de prêt immobilier',
      width: 1000,
      height: 750,
    },
  },
  keyFigures: [
    { value: '8 000 à 15 000 €', label: "Économies moyennes constatées" },
    { value: 'À tout moment', label: 'Résiliation loi Lemoine' },
    { value: 'Sous 48h', label: 'Réponse rapide' },
  ],
  coverage: {
    title: "Que couvre l'assurance emprunteur ?",
    intro: "L'assurance emprunteur protège votre famille et vous-même en cas d'imprévu :",
    items: [
      'Décès (remboursement du capital restant dû)',
      'Invalidité permanente totale (IPT)',
      'Invalidité permanente partielle (IPP)',
      'Incapacité temporaire de travail (ITT)',
      "Perte d'emploi (selon contrats)",
      'Maladies non objectivables (dos, psy)',
    ],
  },
  steps: {
    title: 'Comment procéder au changement ?',
    steps: [
      { title: 'Demandez votre devis', text: 'Nous analysons votre situation et trouvons la meilleure offre.' },
      { title: 'Souscription simplifiée', text: 'Signature électronique et démarches 100% dématérialisées.' },
      { title: 'Résiliation automatique', text: 'Nous nous occupons de résilier votre ancien contrat.' },
    ],
  },
  ctaBand: {
    title: 'Prêt à réduire le coût de votre crédit ?',
    text: "Recevez une simulation personnalisée et sans engagement, sous 48h.",
  },
  advantages: {
    title: 'Pourquoi choisir Les Assureurs Experts ?',
    items: [
      "Expertise en délégation d'assurance",
      'Négociation avec les meilleures compagnies',
      'Accompagnement dans les démarches',
      'Suivi personnalisé de votre dossier',
      'Réponse rapide sous 48h',
    ],
  },
  faq: {
    title: 'Assurance emprunteur : vos questions fréquentes',
    items: [
      { q: "Suis-je obligé de prendre l'assurance de ma banque ?", a: "Non. La loi vous autorise à choisir librement votre assurance emprunteur (délégation d'assurance), dès lors que les garanties sont au moins équivalentes à celles exigées par la banque." },
      { q: 'Qu\'est-ce que la loi Lemoine change ?', a: "Depuis 2022, la loi Lemoine permet de changer d'assurance emprunteur à tout moment et sans frais, et supprime le questionnaire médical pour de nombreux prêts. C'est l'occasion d'économiser plusieurs milliers d'euros." },
      { q: "Combien puis-je économiser en changeant d'assurance de prêt ?", a: "Les économies dépendent de votre profil et du capital restant dû, mais atteignent fréquemment plusieurs milliers d'euros sur la durée du prêt, surtout pour les emprunteurs jeunes et non-fumeurs." },
      { q: 'Le changement va-t-il retarder mon crédit ?', a: "Non. Nous gérons les démarches avec votre banque et l'envoi de la demande de substitution. Votre prêt n'est pas impacté." },
      { q: 'Quelles garanties sont exigées (décès, PTIA, ITT…) ?', a: "La banque impose un niveau de garanties (décès, PTIA, et souvent ITT/IPT/IPP). Nous vérifions l'équivalence des garanties pour que votre dossier soit accepté." },
    ],
  },
  related: [
    { label: 'Mutuelle santé', slug: 'mutuelle-sante' },
    { label: 'Assurance auto', slug: 'assurance-auto' },
    { label: 'Prévoyance', slug: 'prevoyance' },
  ],
  form: {
    title: 'Calculez vos économies',
    intro: 'Obtenez votre simulation personnalisée en 2 minutes.',
    submitLabel: 'Calculer mes économies',
  },
};

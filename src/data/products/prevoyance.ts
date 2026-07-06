import type { ProductPageData } from '../../components/product/types';

/**
 * Contenu de la page /prevoyance.
 * (Repris de l'ancienne PrevoyancePage, restructuré pour la template éditoriale.)
 */
export const prevoyance: ProductPageData = {
  slug: 'prevoyance',
  label: 'Prévoyance',
  seo: {
    title: 'Prévoyance Individuelle TNS & Salariés | Les Assureurs Experts',
    description:
      'Protégez vos revenus et votre famille : capital décès, invalidité, arrêt de travail. Solutions prévoyance pour TNS, indépendants et cadres. Devis gratuit.',
  },
  hero: {
    eyebrow: 'Prévoyance individuelle',
    h1: 'Prévoyance : protégez vos revenus et votre famille',
    intro:
      "La prévoyance vous protège en cas d'accident, maladie ou décès. Indispensable pour les indépendants, chefs d'entreprise et tous ceux qui veulent sécuriser leurs revenus et l'avenir de leur famille. Déduction fiscale possible selon votre statut.",
    image: {
      src: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Personne sereine, protection de la famille',
      width: 1000,
      height: 750,
    },
  },
  keyFigures: [
    { value: 'Jusqu\'à 5 000 €/mois', label: 'Rente possible' },
    { value: 'Jusqu\'à 500 000 €', label: 'Capital décès' },
    { value: 'Dès le 1er jour', label: "Versement en cas d'arrêt" },
  ],
  coverage: {
    title: 'Que couvre la prévoyance ?',
    intro: 'Une assurance prévoyance complète peut inclure :',
    items: [
      'Incapacité temporaire de travail (ITT)',
      'Invalidité permanente partielle (IPP)',
      'Invalidité permanente totale (IPT)',
      'Capital décès',
      'Rente de conjoint survivant',
      'Capital éducation enfants',
    ],
  },
  audience: {
    title: 'Pour qui est-ce indispensable ?',
    rows: [
      { public: 'TNS / Indépendants', specificity: 'Déduction fiscale Madelin' },
      { public: "Chefs d'entreprise", specificity: 'Protection revenus et famille' },
      { public: 'Cadres', specificity: 'Complément aux garanties collectives' },
      { public: 'Freelances', specificity: "Sécurité en cas d'arrêt" },
      { public: 'Professions libérales', specificity: 'Adaptation aux revenus variables' },
    ],
  },
  pricing: {
    title: 'Combien coûte une prévoyance ?',
    factors: ['votre âge et état de santé', 'vos revenus à protéger', 'les garanties choisies', 'votre profession'],
    examples: [
      { profile: 'Freelance 35 ans', price: 'à partir de 25 €/mois' },
      { profile: "Chef d'entreprise", price: '60–120 €/mois' },
      { profile: 'Cadre dirigeant', price: '100–200 €/mois selon revenus' },
    ],
  },
  advantages: {
    title: 'Pourquoi choisir Les Assureurs Experts ?',
    items: [
      "Rente jusqu'à 5 000 €/mois",
      'Déduction fiscale possible (Madelin)',
      "Versement dès le 1er jour d'arrêt",
      'Prise en charge des maladies non objectivables',
      "Capital décès jusqu'à 500 000 €",
    ],
  },
  faq: {
    title: 'Prévoyance : vos questions fréquentes',
    items: [
      { q: 'À quoi sert un contrat de prévoyance ?', a: "La prévoyance protège vos revenus et vos proches face aux accidents de la vie : arrêt de travail, invalidité ou décès. Elle complète les prestations souvent insuffisantes de la Sécurité sociale." },
      { q: 'Quelle différence entre prévoyance et mutuelle santé ?', a: "La mutuelle rembourse vos frais de santé (consultations, optique…). La prévoyance verse des indemnités ou un capital en cas d'arrêt de travail, d'invalidité ou de décès." },
      { q: 'La prévoyance est-elle déductible pour un TNS ?', a: "Oui, dans le cadre de la loi Madelin, les cotisations de prévoyance d'un travailleur non salarié sont déductibles du revenu imposable, sous conditions." },
      { q: 'Que signifient ITT, IPT et IPP ?', a: "Ce sont les garanties d'incapacité et d'invalidité : ITT (incapacité temporaire de travail), IPT (invalidité permanente totale) et IPP (invalidité permanente partielle). Nous vous expliquons chaque niveau." },
      { q: 'Y a-t-il un délai de carence ou une sélection médicale ?', a: 'Selon le contrat, un questionnaire de santé et des délais de carence peuvent s\'appliquer. Nous vous orientons vers les solutions adaptées à votre profil.' },
    ],
  },
  related: [
    { label: 'Mutuelle santé', slug: 'mutuelle-sante' },
    { label: 'Assurance emprunteur', slug: 'assurance-emprunteur' },
    { label: 'Assurance auto', slug: 'assurance-auto' },
  ],
  form: {
    title: 'Devis prévoyance gratuit',
    intro: 'Évaluez vos besoins en 2 minutes.',
    submitLabel: 'Obtenir mon devis',
  },
};

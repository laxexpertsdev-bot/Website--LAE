import type { ProductPageData } from '../../components/product/types';

/**
 * Contenu de la page /per.
 * (Repris de l'ancienne PERPage, restructuré pour la template éditoriale.)
 */
export const per: ProductPageData = {
  slug: 'per',
  label: 'PER (Plan Épargne Retraite)',
  seo: {
    title: 'PER : Plan Épargne Retraite | Les Assureurs Experts',
    description:
      "Préparez votre retraite en réduisant vos impôts : déduction jusqu'à 10 % des revenus, sortie en capital ou rente. Comparez les meilleurs PER avec un expert.",
  },
  hero: {
    eyebrow: 'Plan Épargne Retraite',
    h1: 'PER : préparez votre retraite en réduisant vos impôts',
    intro:
      "Le Plan Épargne Retraite (PER) vous permet de constituer un complément de retraite tout en bénéficiant d'avantages fiscaux immédiats. Déductibilité des versements, capitalisation long terme et transmission optimisée : le PER est l'outil incontournable pour préparer sereinement votre avenir.",
    image: {
      src: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Personne préparant sereinement sa retraite',
      width: 1000,
      height: 750,
    },
  },
  keyFigures: [
    { value: 'Déduction jusqu\'à 10%', label: 'De vos revenus imposables' },
    { value: 'Capital ou rente', label: 'Sortie à la retraite' },
    { value: 'Sans frais cachés', label: 'Un devis transparent' },
  ],
  coverage: {
    title: 'Quels sont les avantages du PER ?',
    intro: 'Le Plan Épargne Retraite offre de nombreux avantages :',
    items: [
      "Déduction fiscale jusqu'à 10% des revenus",
      'Sortie en capital ou rente viagère',
      'Transfert possible vers un autre PER',
      'Déblocage anticipé (achat résidence principale)',
      'Transmission avantageuse aux héritiers',
      'Gestion libre ou pilotée',
    ],
  },
  audience: {
    title: 'Pour qui est-ce intéressant ?',
    rows: [
      { public: 'Salarié', specificity: 'Complément retraite obligatoire' },
      { public: 'Indépendant/TNS', specificity: 'Optimisation fiscale maximale' },
      { public: "Chef d'entreprise", specificity: 'Réduction IR + IS possible' },
      { public: 'Cadre dirigeant', specificity: 'Plafonds de déduction élevés' },
      { public: 'Jeune actif', specificity: 'Effet de capitalisation long terme' },
    ],
  },
  pricing: {
    title: 'Avantages fiscaux du PER',
    intro:
      "Vos versements sur un PER sont déductibles de vos revenus imposables, dans la limite de 10% de vos revenus professionnels (avec plafond). À la retraite, seule la part correspondant aux versements déductibles sera imposée ; les plus-values sont exonérées d'impôt sur le revenu (mais soumises aux prélèvements sociaux).",
    factors: ['vos revenus professionnels', 'votre tranche marginale d\'imposition', 'le montant de vos versements'],
    examples: [
      { profile: '30 000€ de revenus', price: "jusqu'à 1 020€ d'impôt économisé" },
      { profile: '50 000€ de revenus', price: "jusqu'à 1 700€ d'impôt économisé" },
      { profile: '80 000€ de revenus', price: "jusqu'à 2 720€ d'impôt économisé" },
    ],
  },
  steps: {
    title: 'Comment fonctionne le PER ?',
    steps: [
      { title: 'Versements libres', text: 'Versez quand vous voulez, le montant que vous voulez, dans la limite fiscale.' },
      { title: 'Gestion de votre épargne', text: 'Choisissez entre gestion libre (vous décidez) ou gestion pilotée (automatique).' },
      { title: 'Sortie à la retraite', text: 'Récupérez votre épargne en capital (en une fois) ou en rente viagère (mensuelle).' },
    ],
  },
  ctaBand: {
    title: 'Prêt à réduire vos impôts tout en préparant votre retraite ?',
    text: 'Recevez une simulation personnalisée de vos économies d\'impôt, sans engagement.',
  },
  advantages: {
    title: 'Pourquoi choisir Les Assureurs Experts ?',
    items: [
      'Déduction fiscale immédiate',
      'Capitalisation sur le long terme',
      'Souplesse de versements',
      'Transmission optimisée',
      'Déblocage anticipé possible',
    ],
  },
  faq: {
    title: 'PER : vos questions fréquentes',
    items: [
      { q: "Qu'est-ce que le PER et à quoi sert-il ?", a: "Le Plan d'Épargne Retraite est un produit d'épargne long terme qui permet de se constituer un complément de revenu pour la retraite, tout en réduisant son impôt sur le revenu pendant la phase d'épargne." },
      { q: 'Combien puis-je déduire de mes impôts avec un PER ?', a: "Les versements sont déductibles du revenu imposable dans la limite d'un plafond annuel lié à vos revenus. L'économie dépend de votre tranche marginale d'imposition ; nous réalisons une simulation personnalisée." },
      { q: 'Puis-je récupérer mon argent avant la retraite ?', a: "Le PER est en principe bloqué jusqu'à la retraite, sauf cas de déblocage anticipé prévus par la loi (achat de la résidence principale, accidents de la vie…)." },
      { q: 'Capital ou rente : que choisir à la sortie ?', a: 'À la retraite, vous pouvez choisir une sortie en capital, en rente viagère, ou un mix des deux. Le choix dépend de vos objectifs ; un conseiller vous accompagne.' },
      { q: 'Le PER est-il adapté si je suis indépendant (TNS) ?', a: 'Oui, le PER est particulièrement intéressant pour les TNS et les contribuables fortement imposés, grâce à la déductibilité des versements. Demandez une étude personnalisée.' },
    ],
  },
  related: [
    { label: 'Assurance vie', slug: 'assurance-vie' },
    { label: 'Prévoyance', slug: 'prevoyance' },
    { label: 'Mutuelle santé', slug: 'mutuelle-sante' },
  ],
  form: {
    title: 'Simulation PER gratuite',
    intro: "Calculez vos économies d'impôt en 2 minutes.",
    submitLabel: 'Soumettre',
  },
};

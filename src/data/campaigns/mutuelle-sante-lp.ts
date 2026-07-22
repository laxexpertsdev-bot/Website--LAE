import type { CampaignLpData } from '../../components/campaign/types';

/**
 * Contenu de la landing page de campagne Google Ads /lp/mutuelle-sante.
 * Noindex, hors sitemap/nav — page dédiée à la conversion du clic Ads en lead,
 * formulaire en premier. Reprend les faits produit de src/data/products/mutuelle-sante.ts
 * mais réécrit pour un contexte « clic → formulaire », pas un article éditorial.
 */
export const mutuelleSanteLp: CampaignLpData = {
  slug: 'lp/mutuelle-sante',
  insuranceType: 'mutuelle-sante',
  label: 'Mutuelle santé',

  seo: {
    title: 'Mutuelle Santé dès 18€/mois — Devis Gratuit sous 24h | Les Assureurs Experts',
    description:
      'Comparez plus de 20 assureurs et recevez votre devis mutuelle santé personnalisé sous 24h. Courtier agréé ORIAS, sans engagement.',
  },

  hero: {
    eyebrow: 'Devis gratuit en 2 minutes',
    h1: 'Une mutuelle santé mieux remboursée, dès 18€/mois',
    subtitle:
      'Nous comparons plus de 20 assureurs pour vous et vous proposons la formule la plus adaptée à votre budget. Réponse personnalisée sous 24h, sans engagement.',
    benefits: [
      'Comparatif de plus de 20 assureurs',
      'Devis personnalisé sous 24h',
      'Aucun engagement, aucun frais',
    ],
    trustBadges: [
      'Courtier agréé ORIAS 25002995',
      '+2 500 clients accompagnés',
      'Réponse sous 24h',
      'Conseiller dédié, pas un robot',
    ],
  },

  keyFigures: [
    { value: 'dès 18 €/mois', label: 'Pour un jeune actif' },
    { value: '20+ assureurs', label: 'Comparés pour vous' },
    { value: 'sous 24h', label: 'Devis personnalisé' },
    { value: '0 €', label: 'Comparatif sans engagement' },
  ],

  form: {
    step1Title: 'Trouvons votre mutuelle idéale',
    step1Intro: 'Deux étapes, moins de 2 minutes. Aucune donnée bancaire demandée.',
    profiles: [
      { value: 'etudiant', label: 'Étudiant' },
      { value: 'jeune-actif', label: 'Jeune actif' },
      { value: 'famille', label: 'Famille' },
      { value: 'senior', label: 'Senior' },
      { value: 'independant-tns', label: 'Indépendant / TNS' },
    ],
    ageRanges: [
      { value: '18-25', label: '18 à 25 ans' },
      { value: '26-39', label: '26 à 39 ans' },
      { value: '40-54', label: '40 à 54 ans' },
      { value: '55-64', label: '55 à 64 ans' },
      { value: '65+', label: '65 ans et plus' },
    ],
    hasMutuelleQuestion: 'Avez-vous déjà une mutuelle santé ?',
    continueLabel: 'Continuer',
    step2Title: 'Dernière étape : vos coordonnées',
    step2Intro: 'Pour vous envoyer votre comparatif personnalisé et vous seul.',
    submitLabel: 'Recevoir mon comparatif gratuit',
    successTitle: 'Votre demande est bien enregistrée',
    successText:
      'Un conseiller Les Assureurs Experts vous contacte sous 24h avec votre comparatif personnalisé.',
  },

  productContent: {
    coverage: {
      title: 'Ce que couvre votre mutuelle',
      intro: 'Selon la formule choisie, votre complémentaire santé peut prendre en charge :',
      items: [
        'Hospitalisation (chambre individuelle, frais de séjour)',
        'Soins courants (généralistes et spécialistes)',
        'Optique (lunettes, lentilles, chirurgie)',
        'Dentaire (soins, implants, prothèses)',
        'Médecines douces (ostéopathie, acupuncture…)',
        'Téléconsultation médicale incluse',
      ],
    },
    audience: {
      title: 'Une formule pour chaque profil',
      intro: 'Nous adaptons la sélection à votre situation, pas l\'inverse.',
      rows: [
        { public: 'Étudiants', specificity: 'Formules à petit prix' },
        { public: 'Jeunes actifs', specificity: 'Garanties modulables + prévoyance' },
        { public: 'Familles', specificity: 'Pack familial + forfaits enfants' },
        { public: 'Seniors', specificity: 'Renforts optique / dentaire / hospitalisation' },
        { public: 'Indépendants', specificity: 'Déductible Madelin (TNS)' },
      ],
    },
    steps: {
      title: 'Comment ça marche',
      steps: [
        { title: 'Vous répondez', text: 'Deux étapes, moins de 2 minutes, aucun document à fournir.' },
        { title: 'Nous comparons', text: 'Plus de 20 assureurs partenaires passés au crible pour votre profil.' },
        { title: 'Vous recevez votre devis', text: 'Comparatif clair et personnalisé, par téléphone ou email, sous 24h.' },
        { title: 'Vous décidez', text: 'Sans engagement ni pression. Vous choisissez, ou pas.' },
      ],
    },
  },

  ctaBand: {
    title: 'Une question avant de vous décider ?',
    text: 'Un conseiller répond directement, sans standard ni robot. Appel gratuit, sans engagement.',
  },

  faq: {
    title: 'Ce que nos visiteurs demandent avant de se lancer',
    items: [
      {
        q: 'Le comparatif est-il vraiment gratuit ?',
        a: "Oui, entièrement. Vous recevez votre comparatif personnalisé sans aucun frais et sans obligation de souscrire. Vous restez libre de donner suite ou non.",
      },
      {
        q: 'Y a-t-il un délai avant d\'être remboursé ?',
        a: "Cela dépend des garanties. Certains postes (optique, dentaire, maternité) peuvent avoir un délai d'attente selon le contrat. Nous vous l'indiquons clairement avant toute souscription, sans surprise.",
      },
      {
        q: 'Puis-je résilier ma mutuelle actuelle facilement ?',
        a: "Oui. Après un an de contrat, vous pouvez résilier à tout moment (résiliation infra-annuelle). Nous nous occupons des démarches à votre place, vous n'avez rien à gérer.",
      },
      {
        q: 'Suis-je engagé si je remplis ce formulaire ?',
        a: "Non, aucun engagement. Remplir le formulaire déclenche simplement l'envoi de votre comparatif personnalisé par un conseiller. La décision de souscrire vous appartient entièrement.",
      },
      {
        q: 'Qui êtes-vous exactement ?',
        a: "Les Assureurs Experts est un courtier en assurance agréé ORIAS (n°25002995), qui compare pour vous plus de 20 compagnies partenaires. Nous sommes rémunérés par les assureurs, jamais par vous.",
      },
    ],
  },

  finalCta: {
    title: 'Votre comparatif gratuit vous attend',
    text: 'Deux minutes suffisent pour recevoir une réponse personnalisée sous 24h, sans engagement.',
  },
};

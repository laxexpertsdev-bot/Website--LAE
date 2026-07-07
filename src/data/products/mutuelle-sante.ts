import type { ProductPageData } from '../../components/product/types';

/**
 * Contenu de la page /mutuelle-sante.
 * (Repris de l'ancienne MutuelleHealthPage, restructuré pour la template éditoriale.)
 */
export const mutuelleSante: ProductPageData = {
  slug: 'mutuelle-sante',
  label: 'Mutuelle santé',
  seo: {
    title: 'Mutuelle Santé Pas Chère | Comparateur Expert | Les Assureurs Experts',
    description:
      "Trouvez votre mutuelle santé idéale dès 18€/mois. Comparateur expert, devis gratuit, famille/senior/étudiant. Courtier ORIAS agréé.",
  },
  hero: {
    eyebrow: 'Complémentaire santé',
    h1: 'Comparez, économisez et soyez mieux remboursé',
    intro:
      "La mutuelle santé complète les remboursements souvent faibles de la Sécurité sociale. Nous vous aidons à trouver le contrat le plus adapté à vos besoins, votre budget et votre profil.",
    image: {
      src: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Professionnelle de santé accompagnant une patiente — complémentaire santé',
      width: 1000,
      height: 750,
    },
  },
  keyFigures: [
    { value: 'dès 18 €/mois', label: 'Pour un jeune actif' },
    { value: '20+ assureurs', label: 'Comparés pour vous' },
    { value: 'sous 24h', label: 'Devis personnalisé' },
  ],
  coverage: {
    title: 'Que couvre une mutuelle santé ?',
    intro: 'Une bonne complémentaire santé peut inclure :',
    items: [
      'Hospitalisation (chambre individuelle, frais de séjour)',
      'Soins courants (médecins généralistes et spécialistes)',
      'Optique (lunettes, lentilles, chirurgie)',
      'Dentaire (soins, implants, prothèses)',
      'Médecines douces (ostéopathie, acupuncture…)',
      'Téléconsultation médicale',
    ],
  },
  audience: {
    title: 'Pour qui ?',
    intro: 'Nous avons une solution claire et personnalisée pour chaque profil.',
    rows: [
      { public: 'Étudiants', specificity: 'Formules à petit prix' },
      { public: 'Jeunes actifs', specificity: 'Garanties modulables + prévoyance' },
      { public: 'Familles', specificity: 'Pack familial + forfaits enfants' },
      { public: 'Seniors', specificity: 'Renforts optique / dentaire / hospitalisation' },
      { public: 'Indépendants', specificity: 'Déductible Madelin (TNS)' },
    ],
  },
  pricing: {
    title: 'Combien coûte une mutuelle ?',
    factors: ['votre âge', 'votre lieu de résidence', 'votre niveau de couverture', 'votre situation familiale'],
    examples: [
      { profile: 'Jeune actif', price: 'à partir de 18 €/mois' },
      { profile: 'Famille', price: '65 – 120 €/mois' },
      { profile: 'Senior', price: '85 – 150 €/mois' },
    ],
  },
  steps: {
    title: 'Comment choisir sa mutuelle ?',
    steps: [
      { title: 'Priorisez vos besoins', text: 'Optique, dentaire, hospitalisation : identifiez vos postes de dépenses.' },
      { title: 'Lisez le tableau de garanties', text: 'Comparez les niveaux réels, pas seulement les pourcentages affichés.' },
      { title: 'Vérifiez les remboursements', text: 'Rapidité de gestion et délais de carence éventuels.' },
      { title: 'Demandez un devis comparatif', text: 'Nous comparons pour vous plus de 20 compagnies partenaires.' },
    ],
  },
  ctaBand: {
    title: 'Prêt à payer votre mutuelle au juste prix ?',
    text: 'Recevez un comparatif personnalisé et clair, sans engagement, sous 24h.',
  },
  advantages: {
    title: 'Pourquoi passer par Les Assureurs Experts ?',
    items: [
      'Accès à plus de 20 compagnies partenaires',
      'Prix négociés, gestion simplifiée',
      'Un conseiller humain qui vous suit',
      'Des contrats évolutifs',
      'Un devis clair en moins de 24h',
    ],
  },
  faq: {
    title: 'Mutuelle santé : vos questions fréquentes',
    items: [
      { q: 'Quelle différence entre mutuelle et complémentaire santé ?', a: "Dans le langage courant, les deux désignent la même chose : un contrat qui rembourse tout ou partie des frais de santé non pris en charge par la Sécurité sociale (optique, dentaire, hospitalisation…)." },
      { q: "Y a-t-il un délai de carence avant d'être remboursé ?", a: "Cela dépend du contrat. Certaines garanties (optique, dentaire, maternité) peuvent comporter un délai d'attente. Nous vous indiquons clairement ces délais avant toute souscription." },
      { q: 'Puis-je changer de mutuelle à tout moment ?', a: "Oui. Après un an d'engagement, vous pouvez résilier votre mutuelle à tout moment (résiliation infra-annuelle). Nous nous chargeons des démarches de résiliation." },
      { q: 'La mutuelle est-elle déductible pour un indépendant (TNS) ?', a: "Oui, dans le cadre de la loi Madelin, les cotisations d'une complémentaire santé peuvent être déduites du revenu imposable, sous conditions. Un conseiller vous accompagne." },
      { q: 'Comment sont calculés les remboursements ?', a: "Les remboursements s'expriment en pourcentage de la base de la Sécurité sociale ou en forfaits (€). Nous vous aidons à comparer les niveaux de garanties réels, pas seulement les pourcentages affichés." },
    ],
  },
  related: [
    { label: 'Assurance emprunteur', slug: 'assurance-emprunteur' },
    { label: 'Assurance auto', slug: 'assurance-auto' },
    { label: 'Prévoyance', slug: 'prevoyance' },
  ],
  form: {
    title: 'Demandez votre devis mutuelle gratuit',
    intro: 'Réponse personnalisée sous 24h, sans engagement.',
    submitLabel: 'Être rappelé sous 24h',
  },
};

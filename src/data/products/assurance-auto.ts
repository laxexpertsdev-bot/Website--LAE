import type { ProductPageData } from '../../components/product/types';

/**
 * Contenu de la page /assurance-auto.
 * (Repris de l'ancienne AssuranceAutoPage, restructuré pour la template éditoriale.)
 */
export const assuranceAuto: ProductPageData = {
  slug: 'assurance-auto',
  label: 'Assurance auto',
  seo: {
    title: 'Devis Assurance Auto Expert et Rapide | Les Assureurs Experts',
    description:
      "Obtenez votre devis assurance auto personnalisé en 2 minutes. Courtier ORIAS, tarifs négociés, jeunes conducteurs acceptés. Économisez jusqu'à 30% !",
  },
  hero: {
    eyebrow: 'Assurance auto',
    h1: 'Assurance auto : roulez protégé au meilleur prix',
    intro:
      "Trouvez l'assurance auto qui correspond à votre véhicule, votre usage et votre budget. Du tiers économique aux garanties tous risques, nous comparons les meilleures offres pour vous faire économiser jusqu'à 30% sur votre prime annuelle.",
    image: {
      src: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Conducteur au volant de sa voiture — assurance auto',
      width: 1000,
      height: 750,
    },
  },
  coverage: {
    title: 'Que couvre une assurance auto ?',
    intro: 'Selon vos besoins, votre assurance auto peut inclure :',
    items: [
      'Responsabilité civile (obligatoire)',
      'Dommages tous accidents',
      'Vol et tentative de vol',
      'Incendie et explosion',
      'Bris de glace',
      'Assistance 0 km',
    ],
  },
  audience: {
    title: 'Pour quel type de conducteur ?',
    rows: [
      { public: 'Jeune conducteur', specificity: 'Tarifs adaptés, formation incluse' },
      { public: 'Conducteur expérimenté', specificity: 'Bonus-malus avantageux' },
      { public: 'Senior', specificity: 'Réductions spéciales +50 ans' },
      { public: 'Conducteur occasionnel', specificity: 'Formules petit rouleur' },
      { public: "Flotte d'entreprise", specificity: 'Tarifs dégressifs' },
    ],
  },
  pricing: {
    title: 'Combien coûte une assurance auto ?',
    factors: ['votre âge et expérience', 'votre véhicule (puissance, valeur)', 'votre usage (km/an, garage)', 'votre historique (bonus-malus)'],
    examples: [
      { profile: 'Citadine au tiers', price: 'à partir de 25 €/mois' },
      { profile: 'Berline tous risques', price: '65–120 €/mois' },
      { profile: 'SUV premium', price: '120–200 €/mois selon garanties' },
    ],
  },
  advantages: {
    title: 'Pourquoi choisir Les Assureurs Experts ?',
    items: [
      'Comparaison de +15 assureurs partenaires',
      'Devis personnalisé en 5 minutes',
      'Assistance 24h/24 incluse',
      'Gestion des sinistres simplifiée',
      'Réduction famille nombreuse possible',
    ],
  },
  faq: {
    title: 'Assurance auto : vos questions fréquentes',
    items: [
      { q: 'Quels documents pour assurer ma voiture ?', a: "Votre permis de conduire, la carte grise du véhicule et votre relevé d'information (bonus-malus) de votre assureur précédent. Nous nous occupons du reste." },
      { q: 'Puis-je assurer un jeune conducteur sans surcoût excessif ?', a: 'Oui. Nous comparons les assureurs qui proposent des tarifs adaptés aux jeunes conducteurs et à la conduite accompagnée, pour limiter la surprime.' },
      { q: 'Quelle différence entre au tiers et tous risques ?', a: "L'assurance au tiers couvre les dommages causés à autrui (responsabilité civile, obligatoire). La formule tous risques couvre aussi vos propres dommages, même en cas d'accident responsable." },
      { q: 'Combien de temps pour être assuré et recevoir ma carte verte ?', a: "Une fois votre devis validé, l'attestation provisoire peut être émise le jour même. La carte verte définitive vous est ensuite transmise par l'assureur." },
      { q: "Puis-je changer d'assurance auto en cours d'année ?", a: "Oui. Grâce à la loi Hamon, vous pouvez résilier votre contrat à tout moment après un an d'engagement, et nous gérons les démarches de résiliation pour vous." },
    ],
  },
  related: [
    { label: 'Assurance 2 roues', slug: 'assurance-2-roues' },
    { label: 'Mutuelle santé', slug: 'mutuelle-sante' },
    { label: 'Assurance emprunteur', slug: 'assurance-emprunteur' },
  ],
  form: {
    title: 'Devis auto gratuit',
    intro: 'Obtenez votre tarif personnalisé en 2 minutes.',
    submitLabel: 'Obtenir mon devis',
  },
};

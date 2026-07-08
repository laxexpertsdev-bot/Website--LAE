import type { ProductPageData } from '../../components/product/types';

/**
 * Contenu de la page /assurance-2-roues.
 * (Repris de l'ancienne Assurance2RouesPage, restructuré pour la template éditoriale.)
 */
export const assurance2Roues: ProductPageData = {
  slug: 'assurance-2-roues',
  label: 'Assurance 2 roues',
  seo: {
    title: 'Assurance Moto & Scooter dès 12€/mois | Les Assureurs Experts',
    description:
      'Assurez votre moto, scooter ou 125 au meilleur prix : responsabilité civile, vol, équipements. Devis 2 roues gratuit sous 24h, courtier ORIAS agréé.',
  },
  hero: {
    eyebrow: 'Assurance 2 roues',
    h1: 'Assurance 2 roues : roulez libre et protégé',
    intro:
      "Scooter, moto, vélo électrique : trouvez l'assurance 2 roues adaptée à votre véhicule et votre usage. Protection complète, tarifs compétitifs et assistance spécialisée pour tous les passionnés de mobilité urbaine et de liberté.",
    image: {
      src: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Motard sur sa moto — assurance 2 roues',
      width: 1000,
      height: 750,
    },
  },
  coverage: {
    title: 'Que couvre une assurance 2 roues ?',
    intro: 'Votre assurance 2 roues peut inclure :',
    items: [
      'Responsabilité civile (obligatoire)',
      'Vol et tentative de vol',
      'Incendie et explosion',
      'Dommages tous accidents',
      'Équipements et accessoires',
      'Assistance dépannage',
    ],
  },
  audience: {
    title: 'Pour quel type de véhicule ?',
    rows: [
      { public: 'Scooter 50cc', specificity: 'Dès 12€/mois, sans permis' },
      { public: 'Moto 125cc', specificity: 'Formation A1 incluse' },
      { public: 'Moto grosse cylindrée', specificity: 'Garanties renforcées' },
      { public: 'Vélo électrique', specificity: 'Vol et assistance spécialisée' },
      { public: 'Quad/Tricycle', specificity: 'Usage loisir ou utilitaire' },
    ],
  },
  pricing: {
    title: 'Combien coûte une assurance 2 roues ?',
    factors: ['la cylindrée de votre véhicule', 'votre âge et expérience', 'votre lieu de stationnement', 'les garanties choisies'],
    examples: [
      { profile: 'Scooter 50cc au tiers', price: 'à partir de 12 €/mois' },
      { profile: 'Moto 125cc tous risques', price: '35–60 €/mois' },
      { profile: 'Grosse cylindrée', price: '80–150 €/mois selon puissance' },
    ],
  },
  advantages: {
    title: 'Pourquoi choisir Les Assureurs Experts ?',
    items: [
      'Spécialistes des 2 roues depuis 15 ans',
      'Équipements assurés en option',
      'Assistance 24h/24 spécialisée',
      'Réparation chez concessionnaire agréé',
      'Prêt de véhicule de remplacement',
    ],
  },
  faq: {
    title: 'Assurance 2 roues : vos questions fréquentes',
    items: [
      { q: "Le permis est-il obligatoire pour assurer un 2 roues ?", a: "Pour un scooter 50 cm³, le BSR / permis AM suffit. Au-delà, le permis correspondant (A1, A2 ou A) est requis. Nous adaptons l'offre à votre situation." },
      { q: 'Mon équipement (casque, blouson) est-il couvert ?', a: 'Certaines formules incluent une garantie « équipement du pilote ». Nous vous indiquons les contrats qui couvrent casque et vêtements de protection.' },
      { q: "Puis-je n'assurer ma moto qu'au tiers ?", a: "Oui, la responsabilité civile (au tiers) est le minimum légal. Vous pouvez ajouter vol, incendie et dommages selon la valeur de votre véhicule." },
      { q: 'Existe-t-il une formule hivernage / petit rouleur ?', a: "Oui. Des formules adaptées réduisent la cotisation lorsque la moto roule peu ou est remisée l'hiver. Demandez-nous une simulation." },
      { q: 'Les jeunes conducteurs 2 roues sont-ils acceptés ?', a: 'Oui. Nous comparons les assureurs acceptant les jeunes conducteurs et les profils récents, avec des tarifs adaptés.' },
    ],
  },
  related: [
    { label: 'Assurance auto', slug: 'assurance-auto' },
    { label: 'Mutuelle santé', slug: 'mutuelle-sante' },
    { label: 'Prévoyance', slug: 'prevoyance' },
  ],
  form: {
    title: 'Devis 2 roues gratuit',
    intro: 'Obtenez votre tarif en 2 minutes.',
    submitLabel: 'Soumettre',
  },
};

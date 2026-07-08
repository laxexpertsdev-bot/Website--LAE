import type { ProductPageData } from '../../components/product/types';

/**
 * Contenu de la page /assurance-habitation.
 * (Repris de l'ancienne AssuranceHabitationPage, restructuré pour la template éditoriale.)
 */
export const assuranceHabitation: ProductPageData = {
  slug: 'assurance-habitation',
  label: 'Assurance habitation',
  seo: {
    title: 'Assurance Habitation Pas Chère | Devis Gratuit | Les Assureurs Experts',
    description:
      'Assurance habitation dès 8€/mois. Devis gratuit en 5 minutes. Propriétaire ou locataire, trouvez la meilleure protection pour votre logement.',
  },
  hero: {
    eyebrow: 'Multirisque habitation',
    h1: 'Assurance habitation : protégez votre logement au meilleur prix',
    intro:
      "Propriétaire ou locataire, votre logement mérite une protection optimale. Nos assurances habitation couvrent tous les risques du quotidien : incendie, dégâts des eaux, vol, responsabilité civile. Trouvez la formule adaptée à votre situation et votre budget.",
    image: {
      src: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Maison à deux étages, façade illuminée au crépuscule',
      width: 1000,
      height: 750,
    },
  },
  keyFigures: [
    { value: 'Dès 8€/mois', label: 'Tarif de départ' },
    { value: 'Assistance 24h/24', label: 'Dépannage inclus' },
    { value: '5 minutes', label: 'Devis en ligne' },
  ],
  coverage: {
    title: "Que couvre l'assurance habitation ?",
    intro: 'Une assurance habitation complète protège votre logement contre :',
    items: [
      'Responsabilité civile vie privée',
      'Incendie, explosion, foudre',
      'Dégâts des eaux et gel',
      'Vol, tentative de vol, vandalisme',
      'Catastrophes naturelles',
      'Bris de glace et électroménager',
    ],
  },
  audience: {
    title: 'Pour quel type de logement ?',
    rows: [
      { public: 'Propriétaire occupant', specificity: 'Multirisque habitation complète' },
      { public: 'Locataire', specificity: 'Risques locatifs obligatoires' },
      { public: 'Propriétaire bailleur', specificity: 'Protection investissement locatif' },
      { public: 'Copropriétaire', specificity: 'Garanties adaptées à la copropriété' },
      { public: 'Résidence secondaire', specificity: 'Protection logement vacant' },
    ],
  },
  pricing: {
    title: 'Combien coûte une assurance habitation ?',
    factors: [
      'la superficie de votre logement',
      'votre situation (propriétaire/locataire)',
      'la valeur de vos biens',
      'votre localisation géographique',
    ],
    examples: [
      { profile: 'Studio locataire', price: 'à partir de 8 €/mois' },
      { profile: 'Maison propriétaire', price: '25–60 €/mois' },
      { profile: 'Résidence secondaire', price: '15–40 €/mois selon valeur' },
    ],
  },
  advantages: {
    title: 'Pourquoi choisir Les Assureurs Experts ?',
    items: [
      'Devis en ligne en 5 minutes',
      'Garanties étendues incluses',
      'Assistance 24h/24 dépannage',
      'Indemnisation rapide des sinistres',
      'Protection juridique incluse',
    ],
  },
  faq: {
    title: 'Assurance habitation : vos questions fréquentes',
    items: [
      { q: "L'assurance habitation est-elle obligatoire ?", a: "Elle est obligatoire pour les locataires et en copropriété. Pour un propriétaire occupant d'une maison individuelle, elle est fortement recommandée pour couvrir les sinistres majeurs." },
      { q: 'Que couvre une multirisque habitation (MRH) ?', a: 'Généralement : incendie, dégâts des eaux, vol, bris de glace, catastrophes naturelles et responsabilité civile vie privée. Les garanties et plafonds varient selon les contrats.' },
      { q: 'Locataire ou propriétaire : quelles différences ?', a: 'Le locataire doit a minima couvrir les risques locatifs. Le propriétaire (occupant ou bailleur) a intérêt à couvrir le bâti et, le cas échéant, les loyers impayés. Nous adaptons la formule.' },
      { q: 'Mes objets de valeur sont-ils couverts ?', a: 'Selon le contrat, les objets de valeur peuvent être couverts jusqu\'à un plafond, parfois avec une déclaration spécifique. Nous vérifions ces limites avec vous.' },
      { q: "Comment est calculée la prime d'assurance habitation ?", a: "Elle dépend de la surface, du nombre de pièces, de la localisation, du statut (locataire/propriétaire) et des garanties choisies. Nous comparons pour optimiser le rapport garanties/prix." },
    ],
  },
  related: [
    { label: 'Assurance auto', slug: 'assurance-auto' },
    { label: 'Mutuelle santé', slug: 'mutuelle-sante' },
    { label: 'Prévoyance', slug: 'prevoyance' },
  ],
  form: {
    title: 'Devis habitation gratuit',
    intro: 'Obtenez votre tarif personnalisé en 2 minutes.',
    submitLabel: 'Soumettre',
  },
};

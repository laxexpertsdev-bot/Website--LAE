import type { ProductPageData } from '../../components/product/types';

/**
 * Contenu de la page /expatries.
 * (Repris de l'ancienne ExpatriesPage, restructuré pour la template éditoriale.)
 * Note : la section « Zones géographiques couvertes » (Europe / Monde sans USA / Monde entier)
 * de l'original est reprise dans `pricing.examples` (zone → tarif), qui correspond exactement
 * à ces 3 mêmes tarifs par zone déjà présents dans l'original (zoneExamples).
 * La section « Pourquoi une assurance expatrié est-elle indispensable » est reprise dans
 * `advantages` avec les 4 raisons d'origine, en complément des 5 avantages "Pourquoi nous choisir".
 */
export const expatries: ProductPageData = {
  slug: 'expatries',
  label: 'Expatriés',
  seo: {
    title: 'Assurance Santé Expatriés : +150 Pays | Les Assureurs Experts',
    description:
      'Assurance santé internationale pour expatriés, étudiants et digital nomads : hospitalisation, maternité, évacuation. Couverture dans plus de 150 pays.',
  },
  hero: {
    eyebrow: 'Expatriés',
    h1: 'Assurance expatriés : votre santé protégée partout dans le monde',
    intro:
      "Vous vivez, travaillez ou étudiez à l'étranger ? Nos assurances santé internationales vous couvrent dans plus de 150 pays avec une assistance 24h/24 et un réseau médical de qualité. Solutions adaptées aux étudiants, expatriés, digital nomads et retraités.",
    image: {
      src: 'https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Personne expatriée — assurance santé internationale',
      width: 1000,
      height: 750,
    },
  },
  coverage: {
    title: 'Que couvre une assurance expatrié ?',
    intro: 'Votre assurance santé internationale peut inclure :',
    items: [
      'Soins médicaux et hospitalisation',
      'Maternité et pédiatrie',
      'Rapatriement sanitaire',
      'Évacuation médicale',
      'Assistance 24h/24 multilingue',
      'Responsabilité civile à l\'étranger',
    ],
  },
  audience: {
    title: "Pour quel profil d'expatrié ?",
    rows: [
      { public: 'Étudiant à l\'étranger', specificity: 'Tarifs étudiants, visa accepté' },
      { public: 'Expatrié salarié', specificity: 'Complément employeur possible' },
      { public: 'Digital nomad', specificity: 'Couverture mondiale flexible' },
      { public: 'Retraité expatrié', specificity: 'Garanties seniors renforcées' },
      { public: 'Famille expatriée', specificity: 'Pack famille avec enfants' },
    ],
  },
  pricing: {
    title: 'Combien coûte une assurance expatrié ?',
    intro: 'Exemples par zone géographique :',
    factors: ['votre âge', 'la zone géographique', 'le niveau de garanties', 'la durée du séjour'],
    examples: [
      { profile: 'Europe', price: 'à partir de 35 €/mois' },
      { profile: 'Monde sans USA', price: '60–120 €/mois' },
      { profile: 'Monde entier', price: '120–250 €/mois' },
    ],
  },
  ctaBand: {
    title: 'La Sécurité sociale française ne couvre pas ou très peu les soins à l\'étranger',
    text: 'Une hospitalisation aux États-Unis peut coûter plusieurs dizaines de milliers d\'euros. Obtenez votre devis d\'assurance expatrié sans engagement.',
  },
  advantages: {
    title: 'Pourquoi choisir Les Assureurs Experts ?',
    items: [
      'Couverture dans +150 pays',
      'Réseau médical international',
      'Assistance rapatriement incluse',
      'Téléconsultation depuis l\'étranger',
      'Prise en charge directe possible',
      'Obligation pour obtenir certains visas',
      'Rapatriement sanitaire (jusqu\'à 100 000€)',
      'Assistance en langue française 24h/24',
    ],
  },
  faq: {
    title: 'Assurance expatriés : vos questions fréquentes',
    items: [
      { q: "Qu'est-ce qu'une assurance santé expatrié ?", a: "C'est une couverture santé internationale adaptée aux personnes vivant ou travaillant à l'étranger, en complément ou en remplacement de la CFE, avec prise en charge des soins dans le pays de résidence." },
      { q: 'Quelle différence entre la CFE et une assurance privée ?', a: "La CFE (Caisse des Français de l'Étranger) maintient un socle de remboursements sur la base française. Une assurance privée complète ces remboursements au réel, souvent indispensable dans les pays à coûts médicaux élevés." },
      { q: 'Suis-je couvert dans le monde entier ?', a: "Selon le contrat, la couverture peut être mondiale ou exclure certains pays (USA/Canada souvent en option). Nous vérifions la zone de couverture selon votre pays d'expatriation." },
      { q: 'Puis-je être assuré sans questionnaire médical ?', a: 'Cela dépend du contrat et de l\'âge. Certaines offres limitent la sélection médicale. Nous vous orientons vers les solutions adaptées à votre profil.' },
      { q: 'L\'assurance couvre-t-elle le rapatriement ?', a: "La plupart des formules expatriés incluent l'assistance rapatriement. Nous vous indiquons les garanties d'assistance et leurs plafonds avant souscription." },
    ],
  },
  related: [
    { label: 'Mutuelle santé', slug: 'mutuelle-sante' },
    { label: 'Prévoyance', slug: 'prevoyance' },
    { label: 'Assurance auto', slug: 'assurance-auto' },
  ],
  form: {
    title: 'Devis expatrié gratuit',
    intro: 'Obtenez votre tarif en 2 minutes.',
    submitLabel: 'Soumettre',
  },
};

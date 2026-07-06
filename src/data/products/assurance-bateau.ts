import type { ProductPageData } from '../../components/product/types';

/**
 * Contenu de la page /assurance-bateau.
 * (Repris de l'ancienne AssuranceBateauPage, restructuré pour la template éditoriale.)
 * Note : la section « Zones de navigation couvertes » (côtière / hauturière) de l'original
 * n'a pas d'équivalent direct dans ProductPageData ; son contenu factuel est repris sous forme
 * de garanties dans `coverage` pour ne perdre aucune information (responsabilité civile navigation).
 */
export const assuranceBateau: ProductPageData = {
  slug: 'assurance-bateau',
  label: 'Assurance bateau',
  seo: {
    title: 'Assurance Bateau, Voilier & Jet-Ski | Les Assureurs Experts',
    description:
      'Assurez votre voilier, bateau à moteur ou jet-ski : responsabilité civile, avaries, vol, assistance marine. Devis bateau gratuit sous 24h, courtier ORIAS.',
  },
  hero: {
    eyebrow: 'Assurance bateau',
    h1: 'Assurance bateau : naviguez en toute sérénité',
    intro:
      "Voilier, bateau à moteur, jet-ski : protégez votre embarcation et naviguez l'esprit tranquille. Nos assurances bateau couvrent tous les risques de la navigation, du mouillage aux tempêtes, avec une assistance maritime spécialisée disponible 24h/24.",
    image: {
      src: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Bateau de plaisance — assurance bateau',
      width: 1000,
      height: 750,
    },
  },
  coverage: {
    title: 'Que couvre une assurance bateau ?',
    intro: 'Votre assurance bateau peut inclure :',
    items: [
      'Responsabilité civile navigation',
      'Corps de navire (coque, moteur)',
      'Vol et vandalisme',
      'Avaries particulières',
      'Assistance et remorquage',
      'Équipements et accessoires',
    ],
  },
  audience: {
    title: "Pour quel type d'embarcation ?",
    rows: [
      { public: 'Voilier', specificity: 'Navigation côtière ou hauturière' },
      { public: 'Bateau à moteur', specificity: 'Plaisance ou pêche' },
      { public: 'Jet-ski', specificity: 'Sports nautiques' },
      { public: 'Yacht', specificity: 'Navigation de luxe' },
      { public: 'Bateau de pêche', specificity: 'Usage professionnel ou loisir' },
    ],
  },
  pricing: {
    title: 'Combien coûte une assurance bateau ?',
    factors: ["la valeur et l'âge de votre bateau", 'la zone de navigation', 'votre expérience de skipper', 'les garanties choisies'],
    examples: [
      { profile: 'Voilier 8m côtier', price: 'à partir de 180 €/an' },
      { profile: 'Bateau moteur 10m', price: '300–600 €/an' },
      { profile: 'Yacht +15m', price: '800–2000 €/an selon valeur' },
    ],
  },
  advantages: {
    title: 'Pourquoi choisir Les Assureurs Experts ?',
    items: [
      'Spécialistes nautiques depuis 20 ans',
      'Couverture mondiale possible',
      'Assistance maritime 24h/24',
      'Réparation en chantier agréé',
      'Extension compétition et événements',
    ],
  },
  faq: {
    title: 'Assurance bateau : vos questions fréquentes',
    items: [
      { q: 'Quels bateaux peut-on assurer ?', a: 'Voiliers, bateaux à moteur, semi-rigides, jet-skis… Nous assurons la plupart des embarcations de plaisance, selon leur valeur, leur usage et leur zone de navigation.' },
      { q: "L'assurance bateau est-elle obligatoire ?", a: "La responsabilité civile n'est pas légalement obligatoire pour tous les bateaux, mais elle est fortement recommandée et souvent exigée (ports, locations). Nous vous conseillons la couverture adaptée." },
      { q: 'La zone de navigation influence-t-elle le tarif ?', a: 'Oui. La prime dépend de la zone (côtière, hauturière, eaux intérieures), de la puissance et de la valeur du bateau. Nous comparons les offres selon votre programme de navigation.' },
      { q: 'Mon matériel et mes équipements sont-ils couverts ?', a: "Selon la formule, l'électronique de bord, les voiles, le moteur et certains équipements peuvent être garantis. Nous détaillons les options avant souscription." },
      { q: 'Suis-je couvert pour le transport et l\'hivernage ?', a: "De nombreuses formules couvrent le bateau à terre, lors du transport sur remorque et pendant l'hivernage. Demandez-nous une simulation adaptée." },
    ],
  },
  related: [
    { label: 'Assurance auto', slug: 'assurance-auto' },
    { label: 'Assurance 2 roues', slug: 'assurance-2-roues' },
    { label: 'Prévoyance', slug: 'prevoyance' },
  ],
  form: {
    title: 'Devis bateau gratuit',
    intro: 'Obtenez votre tarif en 2 minutes.',
    submitLabel: 'Obtenir mon devis',
  },
};

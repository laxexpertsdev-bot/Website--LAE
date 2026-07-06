import type { ProductPageData } from '../../components/product/types';

/**
 * Contenu de la page /assurance-vie.
 * (Repris de l'ancienne AssuranceViePage, restructuré pour la template éditoriale.)
 */
export const assuranceVie: ProductPageData = {
  slug: 'assurance-vie',
  label: 'Assurance vie',
  seo: {
    title: 'Assurance Vie : Épargne & Transmission | Les Assureurs Experts',
    description:
      "Faites fructifier votre épargne avec l'assurance vie : fonds euros, unités de compte, fiscalité allégée après 8 ans, transmission facilitée. Devis gratuit.",
  },
  hero: {
    eyebrow: 'Épargne & transmission',
    h1: 'Assurance vie : le placement incontournable des Français',
    intro:
      "L'assurance vie reste le placement préféré des Français grâce à sa souplesse, sa fiscalité avantageuse et ses possibilités de transmission. Faites fructifier votre épargne avec des rendements supérieurs au Livret A tout en préparant l'avenir de vos proches.",
    image: {
      src: 'https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: "Conseiller présentant un contrat d'assurance vie",
      width: 1000,
      height: 750,
    },
  },
  keyFigures: [
    { value: 'Fonds euros + UC', label: 'Sécurité et rendement' },
    { value: 'Fiscalité allégée', label: 'Après 8 ans de détention' },
    { value: 'Transmission facilitée', label: 'Hors succession' },
  ],
  coverage: {
    title: 'Que propose une assurance vie ?',
    intro: "L'assurance vie moderne offre de nombreuses possibilités :",
    items: [
      'Fonds euros sécurisés (capital garanti)',
      'Unités de compte (potentiel de rendement)',
      'Gestion libre ou sous mandat',
      'Versements libres ou programmés',
      'Rachats partiels ou totaux possibles',
      'Transmission optimisée aux bénéficiaires',
    ],
  },
  audience: {
    title: 'Pour quel objectif ?',
    rows: [
      { public: 'Épargnant prudent', specificity: 'Fonds euros 100% sécurisés' },
      { public: 'Investisseur dynamique', specificity: 'Unités de compte diversifiées' },
      { public: 'Préparation retraite', specificity: 'Rente viagère possible' },
      { public: 'Transmission patrimoine', specificity: 'Abattement 152 500€ par bénéficiaire' },
      { public: 'Optimisation fiscale', specificity: 'Fiscalité douce après 8 ans' },
    ],
  },
  pricing: {
    title: "Fiscalité de l'assurance vie",
    intro:
      "La fiscalité dépend de la durée de détention. Après 8 ans, vous bénéficiez d'un abattement annuel de 4 600€ (9 200€ pour un couple) sur les gains, puis seulement 7,5% d'imposition au lieu de 30% !",
    factors: ['la durée de détention du contrat', 'le type de support (fonds euros ou unités de compte)', 'la date des versements'],
    examples: [
      { profile: 'Moins de 4 ans', price: 'Prélèvements sociaux + IR ou PFU 30%' },
      { profile: '4 à 8 ans', price: 'Prélèvements sociaux + IR ou PFU 30%' },
      { profile: 'Plus de 8 ans', price: 'Abattement 4 600€ (9 200€ couple) + 7,5%' },
    ],
  },
  ctaBand: {
    title: 'Prêt à faire fructifier votre épargne ?',
    text: 'Recevez une simulation personnalisée de votre placement, sans engagement.',
  },
  advantages: {
    title: 'Pourquoi choisir Les Assureurs Experts ?',
    items: [
      'Placement préféré des Français',
      'Liquidité : rachats à tout moment',
      'Fiscalité progressive avantageuse',
      'Transmission sans droits de succession',
      'Diversification fonds euros + UC',
    ],
  },
  faq: {
    title: 'Assurance vie : vos questions fréquentes',
    items: [
      { q: "L'assurance vie, est-ce risqué ?", a: 'Cela dépend des supports choisis. Le fonds en euros offre une garantie en capital, tandis que les unités de compte présentent un risque de perte mais un potentiel de rendement supérieur. Nous ajustons l\'allocation à votre profil.' },
      { q: 'Quelle fiscalité après 8 ans ?', a: "Après 8 ans de détention, vous bénéficiez d'un abattement annuel sur les gains (4 600 € pour une personne seule, 9 200 € pour un couple) lors des rachats. C'est l'un des grands avantages de l'assurance vie." },
      { q: 'Puis-je récupérer mon argent à tout moment ?', a: "Oui. Contrairement à une idée reçue, l'argent reste disponible : vous pouvez effectuer un rachat partiel ou total quand vous le souhaitez." },
      { q: 'Quelle différence entre fonds euros et unités de compte ?', a: 'Le fonds en euros sécurise votre capital avec un rendement modéré. Les unités de compte (actions, immobilier…) visent un rendement plus élevé mais sans garantie en capital. Une allocation mixte est souvent recommandée.' },
      { q: "L'assurance vie est-elle utile pour la succession ?", a: 'Oui. Elle permet de transmettre un capital dans un cadre fiscal avantageux, avec des abattements spécifiques par bénéficiaire désigné. Un conseiller vous accompagne.' },
    ],
  },
  related: [
    { label: 'Plan Épargne Retraite (PER)', slug: 'per' },
    { label: 'Prévoyance', slug: 'prevoyance' },
    { label: 'Mutuelle santé', slug: 'mutuelle-sante' },
  ],
  form: {
    title: 'Simulation assurance vie',
    intro: 'Découvrez le potentiel de votre épargne.',
    submitLabel: 'Simuler mon placement',
  },
};

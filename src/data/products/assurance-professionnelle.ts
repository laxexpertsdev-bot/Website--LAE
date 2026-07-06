import type { ProductPageData } from '../../components/product/types';

/**
 * Contenu de la page /assurance-professionnelle.
 * (Repris de l'ancienne AssuranceProfessionnellePage, restructuré pour la template éditoriale.)
 */
export const assuranceProfessionnelle: ProductPageData = {
  slug: 'assurance-professionnelle',
  label: 'Assurance professionnelle (RC Pro)',
  seo: {
    title: 'Assurance Professionnelle RC Pro | Devis Expert | Les Assureurs Experts',
    description:
      "Assurance professionnelle dès 15€/mois. RC Pro, cyber-risques, protection juridique. Devis adapté à votre métier. Courtier ORIAS spécialisé.",
  },
  hero: {
    eyebrow: 'RC Professionnelle',
    h1: 'Assurance professionnelle : protégez votre activité et votre responsabilité',
    intro:
      "Indépendant, chef d'entreprise, profession libérale : votre activité professionnelle mérite une protection sur mesure. Nos assurances professionnelles couvrent votre responsabilité civile, vos locaux, vos données et votre perte d'exploitation.",
    image: {
      src: 'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Balance de la justice sur un bureau — responsabilité civile professionnelle',
      width: 1000,
      height: 750,
    },
  },
  keyFigures: [
    { value: 'Dès 15€/mois', label: 'Tarif de départ' },
    { value: 'Cyber-risques inclus', label: 'Protection des données' },
    { value: 'RC Pro obligatoire', label: 'Professions réglementées' },
  ],
  coverage: {
    title: "Que couvre l'assurance professionnelle ?",
    intro: 'Une assurance professionnelle complète protège votre activité contre :',
    items: [
      'Responsabilité civile professionnelle',
      'Protection juridique professionnelle',
      'Cyber-risques et données',
      "Perte d'exploitation",
      'Multirisque bureaux et locaux',
      'Responsabilité civile dirigeant',
    ],
  },
  audience: {
    title: 'Pour quel type d\'activité ?',
    rows: [
      { public: 'Professions libérales', specificity: 'RC Pro adaptée à votre métier' },
      { public: 'Artisans et commerçants', specificity: 'Multirisque + RC Pro complète' },
      { public: 'Consultants et freelances', specificity: 'Protection cyber et RC Pro' },
      { public: "Dirigeants d'entreprise", specificity: 'RC Dirigeant + mandataires' },
      { public: 'Professions médicales', specificity: 'RC Pro médicale spécialisée' },
    ],
  },
  pricing: {
    title: 'Combien coûte une assurance professionnelle ?',
    factors: ["votre secteur d'activité", 'votre chiffre d\'affaires', 'vos risques spécifiques', 'vos garanties choisies'],
    examples: [
      { profile: 'Consultant indépendant', price: 'à partir de 15 €/mois' },
      { profile: 'Artisan avec local', price: '45–120 €/mois' },
      { profile: 'Cabinet médical', price: '80–200 €/mois selon spécialité' },
    ],
  },
  advantages: {
    title: 'Pourquoi choisir Les Assureurs Experts ?',
    items: [
      "Devis adapté à votre secteur d'activité",
      'Garanties modulables selon vos risques',
      'Assistance juridique 24h/24',
      'Gestion des sinistres dédiée',
      'Tarifs négociés pour les professionnels',
    ],
  },
  faq: {
    title: 'Assurance professionnelle : vos questions fréquentes',
    items: [
      { q: "Qu'est-ce que la RC Pro et est-elle obligatoire ?", a: "La responsabilité civile professionnelle couvre les dommages causés à des tiers dans le cadre de votre activité. Elle est obligatoire pour les professions réglementées (santé, droit, bâtiment…) et fortement conseillée pour les autres." },
      { q: 'Quelles activités pouvez-vous assurer ?', a: 'Professions libérales, artisans, commerçants, consultants, métiers du numérique… Nous comparons des offres adaptées à chaque activité et à ses risques spécifiques.' },
      { q: 'La RC Pro couvre-t-elle les dommages immatériels ?', a: "Selon le contrat, oui : erreurs, omissions et préjudices financiers causés à un client peuvent être couverts. Nous vérifions l'étendue des garanties selon votre activité." },
      { q: 'Puis-je ajouter une protection cyber ?', a: "Oui. Face à la hausse des cyberattaques, une garantie cyber-risques (données, rançongiciels, interruption d'activité) peut compléter votre contrat. Demandez-nous conseil." },
      { q: 'Combien coûte une assurance professionnelle ?', a: "Le tarif dépend de votre métier, de votre chiffre d'affaires et des garanties choisies. Nous négocions pour obtenir le meilleur rapport couverture/prix." },
    ],
  },
  related: [
    { label: 'Prévoyance', slug: 'prevoyance' },
    { label: 'Mutuelle santé', slug: 'mutuelle-sante' },
    { label: 'Assurance auto', slug: 'assurance-auto' },
  ],
  form: {
    title: 'Devis professionnel gratuit',
    intro: 'Obtenez votre tarif adapté à votre activité.',
    submitLabel: 'Obtenir mon devis',
  },
};

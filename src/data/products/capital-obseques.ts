import type { ProductPageData } from '../../components/product/types';

/**
 * Contenu de la page /capital-obseques.
 * (Repris de l'ancienne CapitalObsequesPage, restructuré pour la template éditoriale.)
 * Sujet sensible : ton sobre, factuel et bienveillant conservé partout.
 */
export const capitalObseques: ProductPageData = {
  slug: 'capital-obseques',
  label: 'Capital obsèques',
  seo: {
    title: 'Assurance Capital Obsèques | Protection Famille | Les Assureurs Experts',
    description:
      "Assurance obsèques dès 12€/mois. Capital garanti, versement rapide, souscription simplifiée. Protégez vos proches des frais d'obsèques.",
  },
  hero: {
    eyebrow: 'Prévoyance obsèques',
    h1: 'Capital Obsèques : anticipez sereinement et protégez vos proches',
    intro:
      "Préparer ses obsèques, c'est un acte d'amour envers ses proches. Notre assurance capital obsèques vous permet d'anticiper les frais funéraires et d'épargner à votre famille le poids financier d'un moment déjà difficile.",
    image: {
      src: 'https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Accompagnement bienveillant, mains tenues avec compassion',
      width: 1000,
      height: 750,
    },
  },
  keyFigures: [
    { value: 'Dès 12€/mois', label: 'Un budget maîtrisé' },
    { value: 'Sans questionnaire médical', label: 'Souscription simplifiée' },
    { value: 'Capital garanti', label: 'Versé sous 48h' },
  ],
  coverage: {
    title: "Garanties de l'assurance capital obsèques",
    items: [
      'Capital garanti de 3 000 € à 8 000 €',
      'Versement rapide aux bénéficiaires (sous 48h)',
      'Garanties décès toutes causes',
      'Assistance obsèques 24h/24',
      'Capital revalorisé chaque année',
      'Souscription simplifiée sans questionnaire médical',
    ],
  },
  audience: {
    title: 'Solutions adaptées à chaque profil',
    rows: [
      { public: 'Seniors (50-70 ans)', specificity: 'Protection adaptée à votre âge' },
      { public: 'Jeunes actifs', specificity: 'Tarifs avantageux et évolutifs' },
      { public: 'Familles', specificity: 'Protection de tous les membres' },
      { public: 'Personnes seules', specificity: 'Solution rassurante pour vos proches' },
    ],
  },
  pricing: {
    title: 'Exemples de tarifs indicatifs',
    intro: "Tarifs indicatifs pouvant varier selon l'âge de souscription et le capital choisi. Cotisations garanties sans augmentation liée à l'âge.",
    factors: ["l'âge à la souscription", 'le capital choisi'],
    examples: [
      { profile: '50 ans - Capital 4 000 €', price: 'à partir de 12 €/mois' },
      { profile: '60 ans - Capital 5 000 €', price: '20-30 €/mois' },
      { profile: '70 ans - Capital 6 000 €', price: '35-50 €/mois' },
    ],
  },
  ctaBand: {
    title: 'Protégez vos proches, en toute sérénité',
    text: 'Recevez un tarif personnalisé, sans engagement et sans examen médical.',
  },
  advantages: {
    title: 'Pourquoi choisir notre assurance capital obsèques ?',
    items: [
      "Protégez vos proches des frais d'obsèques",
      'Aucune avance de frais pour la famille',
      'Souscription sans examen médical',
      'Capital disponible rapidement',
      'Cotisations bloquées à vie',
    ],
  },
  faq: {
    title: 'Capital obsèques : vos questions fréquentes',
    items: [
      { q: 'À quoi sert un contrat obsèques ?', a: "Il permet de financer à l'avance vos funérailles et/ou d'en organiser les modalités, afin de soulager vos proches du poids financier et organisationnel au moment du décès." },
      { q: 'Quelle différence entre contrat en capital et en prestations ?', a: 'Le contrat en capital verse une somme à un bénéficiaire pour financer les obsèques. Le contrat en prestations organise concrètement les funérailles avec un opérateur funéraire. Nous vous expliquons les deux.' },
      { q: 'Y a-t-il une sélection médicale ?', a: 'La plupart des contrats obsèques sont accessibles sans questionnaire médical, parfois avec un délai de carence en cas de décès par maladie les premières années. Nous vous indiquons les conditions.' },
      { q: 'Le capital est-il revalorisé dans le temps ?', a: 'Selon le contrat, le capital peut être revalorisé pour suivre l\'évolution du coût des obsèques. Nous comparons les offres sur ce critère important.' },
      { q: "Que se passe-t-il si je déménage ou change d'avis ?", a: 'Le contrat vous suit. Vous pouvez faire évoluer les bénéficiaires ou vos volontés. Un conseiller vous accompagne pour toute modification.' },
    ],
  },
  related: [
    { label: 'Prévoyance', slug: 'prevoyance' },
    { label: 'Assurance vie', slug: 'assurance-vie' },
    { label: 'Mutuelle santé', slug: 'mutuelle-sante' },
  ],
  form: {
    title: 'Demander un tarif personnalisé',
    intro: 'Réponse rapide, accompagnement bienveillant.',
    submitLabel: 'Soumettre',
  },
};

import type { ProductPageData } from '../../components/product/types';

/**
 * Contenu de la page /sante-prevoyance-collective.
 * (Repris de l'ancienne SantePrevoyanceCollectivePage, restructuré pour la template éditoriale.)
 */
export const santePrevoyanceCollective: ProductPageData = {
  slug: 'sante-prevoyance-collective',
  label: 'Santé & Prévoyance collective',
  seo: {
    title: 'Santé & Prévoyance Collective Entreprise | Mutuelle Obligatoire | Les Assureurs Experts',
    description:
      'Mutuelle entreprise obligatoire et prévoyance collective. Protection des salariés, respect des obligations légales, avantages fiscaux. Devis personnalisé.',
  },
  hero: {
    eyebrow: 'Entreprise & collaborateurs',
    h1: 'Santé & Prévoyance Collective : protégez vos collaborateurs',
    intro:
      "Offrez à vos salariés une protection santé et prévoyance de qualité tout en respectant vos obligations légales. Nos solutions collectives s'adaptent à la taille et aux besoins spécifiques de votre entreprise.",
    image: {
      src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: "Équipe d'entreprise réunie, collaboration et confiance",
      width: 1000,
      height: 750,
    },
  },
  keyFigures: [
    { value: 'Obligatoire depuis 2016', label: 'Mutuelle d\'entreprise' },
    { value: '50% minimum', label: 'Participation employeur' },
    { value: 'Panier 100% Santé', label: 'Garanties minimales légales' },
  ],
  coverage: {
    title: 'Garanties santé & prévoyance collective',
    items: [
      "Mutuelle d'entreprise obligatoire",
      'Prévoyance collective (incapacité, invalidité, décès)',
      'Maintien de salaire',
      'Garanties modulables selon les catégories de salariés',
      'Protection sociale renforcée',
      'Avantages fiscaux et sociaux',
    ],
  },
  audience: {
    title: 'Solutions adaptées à votre structure',
    rows: [
      { public: 'TPE / PME', specificity: 'Solutions adaptées aux petites structures' },
      { public: 'Grandes entreprises', specificity: 'Couverture sur mesure multi-sites' },
      { public: 'Startups', specificity: 'Formules flexibles et évolutives' },
      { public: 'Associations', specificity: 'Tarifs adaptés au secteur associatif' },
      { public: 'Professions libérales', specificity: 'Protection groupe cabinet/étude' },
    ],
  },
  pricing: {
    title: 'Exemples de tarifs indicatifs',
    intro: "Tarifs indicatifs pouvant varier selon les garanties choisies, l'âge moyen des salariés et le secteur d'activité.",
    factors: ['les garanties choisies', "l'âge moyen des salariés", "le secteur d'activité"],
    examples: [
      { profile: 'TPE (5-10 salariés)', price: 'à partir de 80 €/mois/salarié' },
      { profile: 'PME (20-50 salariés)', price: '70-150 €/mois/salarié' },
      { profile: 'Grande entreprise (100+ salariés)', price: 'sur devis personnalisé' },
    ],
  },
  ctaBand: {
    title: 'Mettez votre entreprise en conformité',
    text: 'Devis personnalisé sous 24h et accompagnement dédié pour la mise en place de vos contrats collectifs.',
  },
  advantages: {
    title: 'Pourquoi choisir nos solutions collectives ?',
    items: [
      "Respect des obligations légales (mutuelle d'entreprise)",
      'Attractivité employeur renforcée',
      "Avantages fiscaux pour l'entreprise",
      'Protection sociale complète des collaborateurs',
      'Gestion simplifiée et digitale',
    ],
  },
  faq: {
    title: 'Santé & prévoyance collective : vos questions fréquentes',
    items: [
      { q: "Qu'est-ce qu'une mutuelle d'entreprise obligatoire ?", a: "Depuis 2016, tout employeur du secteur privé doit proposer une complémentaire santé collective à ses salariés et financer au moins 50 % de la cotisation. Nous vous aidons à choisir un contrat conforme et compétitif." },
      { q: 'Quelle différence entre santé et prévoyance collective ?', a: "La santé collective rembourse les frais de soins des salariés. La prévoyance collective les protège en cas d'arrêt de travail, d'invalidité ou de décès. Les deux peuvent être mises en place ensemble." },
      { q: 'La prévoyance est-elle obligatoire pour les salariés ?', a: 'La prévoyance est obligatoire pour les cadres (convention de 1947 / ANI). Pour les non-cadres, elle dépend de la convention collective applicable. Nous vérifions vos obligations.' },
      { q: "Quels avantages fiscaux et sociaux pour l'entreprise ?", a: "Les cotisations patronales bénéficient, sous conditions, d'exonérations sociales et fiscales. C'est un levier d'attractivité RH tout en optimisant les charges. Un conseiller vous accompagne." },
      { q: 'Comment mettre en place un contrat collectif ?', a: "Via une décision unilatérale de l'employeur (DUE), un accord de branche ou un accord d'entreprise. Nous gérons la conformité, la comparaison des assureurs et la mise en place." },
    ],
  },
  related: [
    { label: 'Prévoyance', slug: 'prevoyance' },
    { label: 'Mutuelle santé', slug: 'mutuelle-sante' },
    { label: 'Assurance professionnelle (RC Pro)', slug: 'assurance-professionnelle' },
  ],
  form: {
    title: 'Obtenir un devis personnalisé',
    intro: 'Analyse de vos besoins, comparaison multi-assureurs, mise en place simplifiée.',
    submitLabel: 'Être rappelé sous 24h',
  },
};

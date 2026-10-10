import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: 'prevoyance-independants-points-a-clarifier',
  title: 'Prévoyance des indépendants : les points à clarifier',
  seoTitle: 'Prévoyance des indépendants : points à clarifier',
  metaDescription:
    'Arrêt de travail, invalidité, délai de franchise : les questions utiles avant une prévoyance d’indépendant, sans montant promis.',
  excerpt:
    'Le régime obligatoire des indépendants laisse souvent un trou de revenu en cas d’arrêt. La prévoyance peut le réduire. Encore faut-il lire la franchise et le mode d’indemnisation.',
  category: 'Pro',
  publishedAt: '2026-09-03',
  image: '/blog/prevoyance.webp',
  imageAlt: 'Parent et deux jeunes enfants ensemble sur un canapé',
  imageCredit: 'Alexander Dummer, Unsplash',
  cta: {
    label: 'Faire le point sur ma prévoyance',
    href: '/devis',
    note: 'L’échange porte sur votre statut et vos charges. Il ne remplace pas l’avis de votre expert-comptable sur la fiscalité.',
  },
  relatedSlugs: [
    'mutuelle-lire-avant-de-changer',
    'rc-pro-perimetre',
    'preparer-son-bilan-assurance',
  ],
  faqs: [
    {
      question: 'La prévoyance est-elle la même chose que la mutuelle ?',
      answer:
        'Non. La mutuelle complète les remboursements de soins. La prévoyance vise le revenu, ou le foyer, en cas d’arrêt de travail, d’invalidité ou de décès. Les deux contrats répondent à des questions différentes.',
    },
    {
      question: 'Le cadre fiscal Madelin est-il automatique ?',
      answer:
        'Non. Il concerne certains travailleurs non salariés, sous conditions, et les règles peuvent évoluer. La déductibilité se vérifie avec votre expert-comptable. Un courtier ne donne pas un conseil fiscal personnalisé à la place de ce professionnel.',
    },
    {
      question: 'Une franchise courte est-elle toujours préférable ?',
      answer:
        'Elle indemnise plus tôt, et elle coûte en général plus cher. Une franchise plus longue peut suffire si vous avez une trésorerie pour tenir les premières semaines. Le bon délai dépend de vos charges, pas d’un modèle unique.',
    },
  ],
  blocks: [
    {
      type: 'p',
      text: 'Quand un salarié s’arrête, son employeur et le régime général prennent souvent le relais pendant un temps. Un indépendant — artisan, commerçant, profession libérale, dirigeant non salarié — n’a pas le même filet. Les indemnités de sa caisse existent, mais elles arrivent avec un délai et un montant souvent limités. La prévoyance individuelle est le contrat qui cherche à compléter ce revenu. Elle ne le garantit pas à hauteur de votre chiffre d’affaires.',
    },
    {
      type: 'h2',
      text: 'Trois risques, trois questions',
    },
    {
      type: 'p',
      text: 'L’incapacité temporaire concerne l’arrêt de travail. L’invalidité concerne une réduction durable de la capacité à exercer. Le décès concerne le capital ou la rente qui peuvent être versés aux personnes désignées. Vous n’êtes pas obligé de tout souscrire au même niveau. En revanche, il est utile de savoir lequel de ces trois risques laisserait le foyer, ou l’entreprise, le plus exposé.',
    },
    {
      type: 'ul',
      items: [
        'De quelles indemnités journalières votre régime obligatoire dispose-t-il déjà, et après combien de jours ?',
        'Quelles charges fixes continuent si vous ne facturez plus : loyer, échéances, cotisations, salaires ?',
        'Qui doit être protégé en cas de décès : conjoint, enfants, associé ?',
        'Exercez-vous seul, ou un collaborateur peut-il maintenir une partie de l’activité ?',
      ],
    },
    {
      type: 'h2',
      text: 'La franchise change tout',
    },
    {
      type: 'p',
      text: 'La franchise de la prévoyance est le nombre de jours d’arrêt pendant lesquels le contrat ne verse rien. Elle s’exprime souvent en jours : une franchise courte coûte plus cher, une franchise longue suppose que vous puissiez tenir financièrement au début. Elle se cumule avec le délai de votre régime obligatoire. Les additionner évite de croire que l’indemnisation commence le lendemain de l’arrêt.',
    },
    {
      type: 'p',
      text: 'Regardez aussi si l’indemnité est forfaitaire, ou si elle complète ce que verse déjà la caisse, sans dépasser votre revenu professionnel. Un barème trop haut par rapport aux revenus déclarés peut être réduit au moment du sinistre. Mieux vaut un montant tenable, mis à jour quand l’activité grandit ou ralentit.',
    },
    {
      type: 'callout',
      text: 'Aucun contrat ne « garantit votre train de vie ». Il indemnise selon une définition, un plafond et des pièces à fournir. Lisez ces trois éléments avant le taux de cotisation.',
    },
    {
      type: 'h2',
      text: 'Statut, fiscalité, et mise à jour',
    },
    {
      type: 'p',
      text: 'Le passage en société, un changement de caisse ou l’embauche d’un premier salarié modifient le besoin. Un contrat signé au début de l’activité peut devenir trop juste, ou mal calé, trois ans plus tard. Pour les travailleurs non salariés, un cadre fiscal spécifique peut exister. Il se confirme avec l’expert-comptable : les règles bougent, et un courtier n’a pas à s’y substituer.',
    },
    {
      type: 'p',
      text: 'Les Assureurs Experts proposent d’éclairer ces points à partir de votre statut et de vos charges, parmi des contrats de prévoyance partenaires. La décision reste la vôtre, après lecture des conditions.',
    },
  ],
};

export default post;

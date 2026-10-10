import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: 'assurance-emprunteur-avant-de-changer',
  title: 'Assurance emprunteur : les questions à poser avant de changer',
  seoTitle: 'Assurance emprunteur : questions avant de changer',
  metaDescription:
    'La loi Lemoine permet, sous conditions, de changer d’assurance de prêt. Voici les points à vérifier avant toute démarche.',
  excerpt:
    'Changer l’assurance d’un prêt immobilier est possible dans un cadre précis. Le coût n’est intéressant que si les garanties utiles restent au moins équivalentes.',
  category: 'Particuliers',
  publishedAt: '2026-10-01',
  image: '/blog/emprunteur.webp',
  imageAlt: 'Maison miniature et trousseau de clés posés sur une table',
  imageCredit: 'Tierra Mallorca, Unsplash',
  cta: {
    label: 'Parler de mon assurance de prêt',
    href: '/devis',
    note: 'Nous regardons votre contrat actuel et les exigences de la banque. Aucune économie n’est promise à l’avance.',
  },
  relatedSlugs: [
    'assurance-habitation-garanties-oubliees',
    'erreurs-a-eviter-avant-de-signer',
    'preparer-son-bilan-assurance',
  ],
  faqs: [
    {
      question: 'La banque peut-elle refuser un nouveau contrat ?',
      answer:
        'Elle peut refuser si le nouveau contrat n’offre pas une équivalence de garanties par rapport aux exigences du prêt. Le refus doit porter sur ce point. Un simple désaccord sur le prix ne suffit pas, dans le cadre prévu par les textes.',
    },
    {
      question: 'Le questionnaire de santé a-t-il disparu pour tout le monde ?',
      answer:
        'Non. La loi Lemoine le supprime seulement sous conditions de montant assuré et d’âge en fin de prêt. Au-delà, un questionnaire peut encore être demandé. Votre situation se vérifie sur l’offre de prêt, pas sur une règle unique.',
    },
    {
      question: 'Faut-il résilier l’ancien contrat avant d’avoir l’accord ?',
      answer:
        'Mieux vaut attendre l’accord de la banque et la prise d’effet du nouveau contrat. Une résiliation trop tôt peut laisser le prêt sans assurance, ce que le contrat de crédit n’autorise en général pas.',
    },
  ],
  blocks: [
    {
      type: 'p',
      text: 'L’assurance emprunteur couvre le remboursement du prêt si un aléa grave survient : décès, perte totale et irréversible d’autonomie, invalidité, incapacité, parfois perte d’emploi. Elle n’est pas un produit accessoire. Pour la banque, elle sécurise le crédit. Pour vous, elle protège le foyer si les mensualités ne peuvent plus être payées.',
    },
    {
      type: 'h2',
      text: 'Ce que la loi Lemoine a changé, sans tout simplifier',
    },
    {
      type: 'p',
      text: 'Depuis la loi du 28 février 2022, dite loi Lemoine, vous pouvez demander à remplacer l’assurance de votre prêt immobilier à tout moment, et non plus seulement à la date anniversaire. Cette liberté ne veut pas dire que n’importe quel contrat sera accepté. La banque vérifie l’équivalence des garanties. Si le nouveau contrat est moins protecteur sur un point qu’elle juge nécessaire, elle peut refuser la substitution.',
    },
    {
      type: 'p',
      text: 'La même loi a aussi réduit, dans certains cas, le questionnaire de santé. Ce n’est pas une dispense générale. Les conditions tiennent au montant assuré par emprunteur et à l’âge à la fin du prêt. Avant de compter sur cette dispense, faites relire l’offre et le capital restant dû.',
    },
    {
      type: 'callout',
      text: 'Un changement n’est intéressant que si les garanties dont vous avez besoin sont au moins équivalentes, et si le coût sur la durée restante du prêt vous convient. Un tarif plus bas ne suffit pas.',
    },
    {
      type: 'h2',
      text: 'Les lignes à comparer, au-delà du prix',
    },
    {
      type: 'ul',
      items: [
        'Les garanties exigées par la banque : décès, PTIA, IPT, ITT, IPP, et parfois la perte d’emploi.',
        'Les quotités : quelle part du prêt est couverte pour chaque emprunteur.',
        'La définition de l’incapacité : indemnisation forfaitaire ou basée sur la perte de revenu.',
        'Les exclusions, les sports ou professions à risque, et les délais de carence ou de franchise.',
        'Le mode de calcul de la cotisation : sur le capital initial ou sur le capital restant dû.',
      ],
    },
    {
      type: 'p',
      text: 'Deux contrats au même prix mensuel peuvent diverger fortement le jour d’un arrêt de travail. C’est souvent là, et non sur la cotisation de la première année, que se joue l’écart. Demandez une mise en parallèle écrite, garantie par garantie, plutôt qu’un seul chiffre « d’économie ».',
    },
    {
      type: 'h2',
      text: 'L’ordre des démarches compte',
    },
    {
      type: 'p',
      text: 'Le parcours habituel consiste à obtenir une proposition, à la transmettre à la banque avec le contrat actuel, puis à attendre sa réponse dans le délai prévu par les textes. Tant que la banque n’a pas accepté et que le nouveau contrat n’a pas pris effet, l’assurance en cours doit rester active. Résilier trop tôt expose à une période sans couverture, ce que l’établissement prêteur peut refuser.',
    },
    {
      type: 'p',
      text: 'Les Assureurs Experts accompagnent cette lecture : exigences de la banque, quotité, franchise, coût sur la durée restante. Le cabinet ne promet pas une baisse de cotisation. Il éclaire la comparaison pour que vous décidiez en connaissance de cause.',
    },
  ],
};

export default post;

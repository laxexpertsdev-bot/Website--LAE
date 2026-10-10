import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: 'rc-pro-perimetre',
  title: 'RC Pro : ce qu’elle couvre, et ce qu’elle ne couvre pas',
  seoTitle: 'RC Pro : ce qu’elle couvre vraiment',
  metaDescription:
    'La responsabilité civile professionnelle n’est pas un contrat fourre-tout. Comprendre son périmètre avant de signer, sans obligation inventée.',
  excerpt:
    'La RC Pro intervient quand votre activité cause un dommage à un client ou à un tiers. Elle ne remplace ni la décennale, ni une mutuelle, ni une assurance de vos propres biens.',
  category: 'Pro',
  publishedAt: '2026-09-10',
  image: '/blog/rc-pro.webp',
  imageAlt: 'Poignée de main entre deux personnes en contexte professionnel',
  imageCredit: 'Cytonn Photography, Unsplash',
  cta: {
    label: 'Décrire mon activité',
    href: '/devis',
    note: 'Le contrat dépend du métier déclaré. Une activité mal décrite peut laisser un dommage hors garantie.',
  },
  relatedSlugs: [
    'prevoyance-independants-points-a-clarifier',
    'erreurs-a-eviter-avant-de-signer',
    'preparer-son-bilan-assurance',
  ],
  faqs: [
    {
      question: 'La RC Pro est-elle obligatoire pour toutes les entreprises ?',
      answer:
        'Non. Certaines professions réglementées ont une obligation d’assurance. Pour beaucoup d’autres activités, rien ne l’impose par la loi, mais un client, une plateforme ou un bail professionnel peut l’exiger avant de travailler avec vous.',
    },
    {
      question: 'La RC Pro remplace-t-elle l’assurance décennale ?',
      answer:
        'Non. Les métiers du bâtiment soumis à la responsabilité décennale ont besoin d’une assurance spécifique. Une RC Pro générale ne couvre pas, à elle seule, cette obligation.',
    },
    {
      question: 'Un plafond élevé suffit-il ?',
      answer:
        'Le plafond compte, mais aussi la franchise, les activités nommément garanties et les exclusions. Un plafond haut sur une activité qui n’est pas la vôtre ne vous protège pas.',
    },
  ],
  blocks: [
    {
      type: 'p',
      text: 'La responsabilité civile professionnelle, ou RC Pro, est faite pour les dommages que vous causez à d’autres personnes dans le cadre de votre métier : un client, un partenaire, un visiteur. Elle peut prendre en charge les conséquences d’une erreur, d’une négligence ou d’un oubli, dans la limite du contrat. Elle ne fait pas de vous quelqu’un d’assuré « contre tout ».',
    },
    {
      type: 'h2',
      text: 'Ce que l’on peut raisonnablement en attendre',
    },
    {
      type: 'p',
      text: 'Selon les métiers, la garantie vise les dommages corporels, matériels et immatériels causés aux tiers. Un consultant qui remet un livrable erroné, un commerçant dont un client se blesse dans la boutique, un prestataire qui endommage le matériel qu’on lui confie : ce sont des exemples de situations où la RC Pro est faite pour être lue. Chaque exemple reste soumis aux définitions du contrat signé.',
    },
    {
      type: 'p',
      text: 'Le point de départ, c’est la description de l’activité. Si vous ajoutez une nouvelle prestation, vendez en ligne, sous-traitez ou exercez à l’étranger, le contrat initial ne suit pas forcément. Une activité absente de la liste peut rester hors garantie, même si la cotisation a été payée.',
    },
    {
      type: 'h2',
      text: 'Ce qu’elle ne remplace pas',
    },
    {
      type: 'ul',
      items: [
        'L’assurance décennale des constructeurs et artisans soumis à cette obligation.',
        'La complémentaire santé et la prévoyance, qui concernent votre personne, pas vos clients.',
        'L’assurance des locaux, du stock et du matériel qui vous appartiennent.',
        'La protection juridique, parfois proposée à part, qui n’indemnise pas le dommage lui-même.',
        'Les fautes intentionnelles, en général exclues, comme dans la plupart des assurances de responsabilité.',
      ],
    },
    {
      type: 'callout',
      text: 'Certaines professions réglementées doivent être assurées. Pour les autres, l’obligation vient souvent du client. Dans les deux cas, le contrat doit décrire le métier réel, pas un intitulé approximatif.',
    },
    {
      type: 'h2',
      text: 'Plafond, franchise, réclamation',
    },
    {
      type: 'p',
      text: 'Le plafond est le maximum que l’assureur peut verser. La franchise est la part qui reste à votre charge. Regardez aussi comment le contrat se déclenche : au moment du fait, ou au moment où le tiers vous réclame quelque chose. Cette différence, dite base de garantie, change la façon de déclarer un dossier ancien. Ce n’est pas un détail réservé aux juristes. C’est une ligne du devis.',
    },
    {
      type: 'p',
      text: 'Les Assureurs Experts partent de votre activité réelle, de vos clients et de vos lieux d’exercice pour chercher une RC Pro adaptée parmi les contrats partenaires. Le cabinet ne décrète pas qu’une profession est ou non obligée de s’assurer : ce point se vérifie selon le métier et, en cas de doute, avec votre conseil habituel.',
    },
  ],
};

export default post;

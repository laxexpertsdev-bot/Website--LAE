import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: 'assurance-auto-franchise-bonus-usage',
  title: 'Assurance auto : franchise, bonus et usage du véhicule',
  seoTitle: 'Assurance auto : franchise, bonus et usage',
  metaDescription:
    'Le prix ne résume pas une assurance auto. Franchise, usage déclaré et assistance changent le contrat le jour d’un sinistre.',
  excerpt:
    'Deux cotisations proches peuvent cacher une franchise élevée ou un usage du véhicule mal déclaré. Voici ce qu’il est utile de relire.',
  category: 'Particuliers',
  publishedAt: '2026-09-17',
  image: '/blog/auto.webp',
  imageAlt: 'Conducteur au volant, vu de l’habitacle, sur une route',
  imageCredit: 'why kei, Unsplash',
  cta: {
    label: 'Demander un devis auto',
    href: '/devis',
    note: 'Le tarif dépend du véhicule, des conducteurs et de l’usage déclaré. Il n’est pas figé à l’avance.',
  },
  relatedSlugs: [
    'assurance-habitation-garanties-oubliees',
    'erreurs-a-eviter-avant-de-signer',
    'preparer-son-bilan-assurance',
  ],
  faqs: [
    {
      question: 'Le bonus-malus est-il le même chez tous les assureurs ?',
      answer:
        'Le coefficient de réduction-majoration suit des règles communes. En revanche, la façon dont l’assureur l’applique à son tarif, et les surprimes éventuelles, lui appartiennent. Un même coefficient ne produit donc pas le même prix partout.',
    },
    {
      question: 'Dois-je déclarer un conducteur secondaire ?',
      answer:
        'Oui, si une autre personne conduit le véhicule de façon régulière. Un conducteur non déclaré peut compliquer l’indemnisation, voire remettre en cause la garantie selon le contrat. Un prêt occasionnel n’est pas toujours traité de la même façon : lisez la clause.',
    },
    {
      question: 'Une franchise à zéro euro existe-t-elle vraiment ?',
      answer:
        'Certaines garanties, comme le bris de glace, peuvent être sans franchise. D’autres, notamment les dommages au véhicule, en ont presque toujours une. « Sans franchise » sur une ligne ne veut pas dire sans franchise sur tout le contrat.',
    },
  ],
  blocks: [
    {
      type: 'p',
      text: 'L’assurance auto obligatoire couvre au minimum la responsabilité civile : les dommages que le véhicule cause aux autres. Le reste — vol, incendie, bris de glace, dommages à votre propre voiture, assistance — est contractuel. Comparer seulement la cotisation mensuelle laisse de côté ce que vous paierez, ou non, le jour d’un accrochage.',
    },
    {
      type: 'h2',
      text: 'La franchise, c’est la part qui reste pour vous',
    },
    {
      type: 'p',
      text: 'La franchise est la somme qui n’est pas indemnisée. Elle peut être fixe, ou proportionnelle au montant du sinistre, avec parfois un plancher et un plafond. Une cotisation plus basse va souvent de pair avec une franchise plus haute. Ce n’est pas un mauvais choix en soi, si vous l’avez vu et si vous pouvez assumer cette somme.',
    },
    {
      type: 'p',
      text: 'Regardez aussi à quelles garanties elle s’applique. Le bris de glace, le vol et les dommages tous accidents n’ont pas forcément la même règle. L’assistance peut, de son côté, être limitée à un certain kilométrage de votre domicile, ou disponible dès le garage. Le détail change le quotidien, surtout si la voiture sert pour le travail.',
    },
    {
      type: 'h2',
      text: 'L’usage déclaré doit coller à la réalité',
    },
    {
      type: 'p',
      text: 'Les contrats distinguent en général un usage privé, les trajets domicile-travail, et un usage professionnel. Le kilométrage annoncé compte aussi. Déclarer un usage plus étroit que la réalité pour faire baisser la cotisation est une mauvaise économie : en cas de sinistre, l’assureur peut réduire l’indemnisation ou opposer la déclaration inexacte, dans les conditions du code des assurances.',
    },
    {
      type: 'ul',
      items: [
        'Qui conduit vraiment, y compris un enfant majeur ou un conjoint, de façon habituelle.',
        'Où le véhicule dort : garage clos, parking, voie publique.',
        'S’il sert à des tournées, à transporter du matériel, ou seulement aux courses et aux loisirs.',
        'Le coefficient bonus-malus, et les sinistres responsables des dernières années.',
      ],
    },
    {
      type: 'callout',
      text: 'Le bonus n’est pas une récompense commerciale libre. C’est un coefficient réglementé, qui évolue avec les sinistres responsables. Il ne garantit pas, à lui seul, un tarif.',
    },
    {
      type: 'h2',
      text: 'Au moment de changer',
    },
    {
      type: 'p',
      text: 'La résiliation de l’assurance auto obéit à des règles (échéance, loi Hamon après un an, ou changement de situation). Avant de quitter un contrat, vérifiez la date d’effet du suivant pour ne pas rouler sans assurance, ce qui est interdit. Le relevé d’information, demandé à l’assureur actuel, récapitule le coefficient et les sinistres : il sert de base au nouveau devis.',
    },
    {
      type: 'p',
      text: 'Les Assureurs Experts établissent le devis à partir de ces éléments, pas d’un prix affiché pour tout le monde. Si votre usage ou la liste des conducteurs change en cours d’année, dites-le : le contrat se met à jour, il ne se devine pas.',
    },
  ],
};

export default post;

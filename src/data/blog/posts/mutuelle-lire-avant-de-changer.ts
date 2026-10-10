import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: 'mutuelle-lire-avant-de-changer',
  title: 'Mutuelle santé : ce qu’il faut lire avant de changer de contrat',
  seoTitle: 'Mutuelle santé : lire avant de changer de contrat',
  metaDescription:
    'Avant de changer de mutuelle, relisez les postes de soins, les délais et les exclusions. Un guide clair, sans promesse de tarif.',
  excerpt:
    'Changer de complémentaire santé peut être utile. Encore faut-il comparer les bonnes lignes du tableau de garanties, pas seulement la cotisation affichée.',
  category: 'Particuliers',
  publishedAt: '2026-10-06',
  image: '/blog/mutuelle.webp',
  imageAlt: 'Consultation médicale : un soignant et une patiente échangent autour d’un ordinateur',
  imageCredit: 'National Cancer Institute, Unsplash',
  cta: {
    label: 'Demander un devis mutuelle',
    href: '/devis',
    note: 'Un conseiller compare vos besoins avec des contrats partenaires. Sans engagement, et sans garantie d’un reste à charge nul.',
  },
  relatedSlugs: [
    'prevoyance-independants-points-a-clarifier',
    'erreurs-a-eviter-avant-de-signer',
    'preparer-son-bilan-assurance',
  ],
  faqs: [
    {
      question: 'Le 100 % santé veut-il dire que tout est gratuit ?',
      answer:
        'Non. Il concerne un panier d’équipements en optique, en dentaire et en audiologie, si vous le choisissez et si la complémentaire est responsable. En dehors de ce panier, un reste à charge reste possible.',
    },
    {
      question: 'Puis-je garder la mutuelle de mon entreprise et en prendre une autre ?',
      answer:
        'La mutuelle d’entreprise est souvent obligatoire pour le salarié. Une autre formule ne se justifie que dans les cas où la loi ou le contrat permet d’en sortir, ou pour une personne du foyer qui n’est pas couverte. Cela se vérifie au cas par cas.',
    },
    {
      question: 'Un pourcentage élevé garantit-il un meilleur remboursement ?',
      answer:
        'Non. Il faut savoir sur quelle base le pourcentage est calculé : base de remboursement, forfait en euros ou frais réels. Deux contrats à « 200 % » peuvent laisser des sommes très différentes à votre charge.',
    },
  ],
  blocks: [
    {
      type: 'p',
      text: 'Une mutuelle, ou complémentaire santé, vient en plus des remboursements de l’Assurance maladie. Elle ne remplace pas le régime obligatoire. Avant d’en changer, le bon réflexe n’est pas de chercher une formule « meilleure » dans l’absolu : elle n’existe pas. Le contrat utile est celui qui colle à vos soins, à votre budget et à ce que vous avez déjà.',
    },
    {
      type: 'h2',
      text: 'Commencer par les soins que vous avez vraiment',
    },
    {
      type: 'p',
      text: 'Sur les douze derniers mois, notez ce que le foyer a dépensé : consultations, optique, dentaire, hospitalisation, séances d’ostéopathie ou d’autres soins non remboursés. Une personne qui ne porte pas de lunettes n’a pas le même besoin qu’un foyer qui renouvelle deux paires par an. Cette liste évite de payer un renfort inutile, ou d’oublier un poste qui revient souvent.',
    },
    {
      type: 'p',
      text: 'Ouvrez ensuite le tableau de garanties, ligne par ligne. Un pourcentage élevé ne dit pas tout. Le remboursement est tantôt calculé sur la base de remboursement de la Sécurité sociale, tantôt versé sous forme de forfait en euros, tantôt limité aux frais réels. Trois façons d’écrire une garantie, trois résultats possibles. Demandez un exemple chiffré sur un soin que vous connaissez, comme une paire de lunettes ou une couronne.',
    },
    {
      type: 'h2',
      text: 'Le 100 % santé ne couvre pas tous les soins',
    },
    {
      type: 'p',
      text: 'Depuis la réforme du 100 % santé, certains équipements d’optique, de prothèses dentaires et d’aides auditives peuvent être pris en charge sans reste à charge. Encore faut-il choisir l’équipement du panier prévu, et disposer d’une complémentaire dite responsable. Ce n’est pas une gratuité générale. Un équipement hors panier, un dépassement d’honoraires ou un acte mal remboursé par l’Assurance maladie peut laisser une somme à payer. Le tableau doit le montrer sans détour.',
    },
    {
      type: 'callout',
      text: 'Méfiez-vous des formules qui annoncent un remboursement « complet » sans préciser le poste, le plafond et la durée. Une garantie se lit avec ses limites.',
    },
    {
      type: 'h2',
      text: 'Délais, exclusions et contrat déjà en cours',
    },
    {
      type: 'p',
      text: 'Avant de signer, repérez ce qui peut retarder ou réduire la prise en charge. Ces points figurent dans les conditions, pas seulement sur la première page du devis.',
    },
    {
      type: 'ul',
      items: [
        'Le délai de carence, s’il existe : période pendant laquelle une garantie ne joue pas encore.',
        'Les exclusions : soins, séjours ou situations que le contrat ne prend pas en charge.',
        'Les plafonds annuels, surtout en dentaire, en optique et en médecines douces.',
        'La date et les conditions pour quitter le contrat actuel, afin d’éviter un trou ou deux cotisations qui se chevauchent.',
      ],
    },
    {
      type: 'p',
      text: 'Si vous êtes salarié, l’entreprise propose souvent une mutuelle obligatoire. La comparer à une formule individuelle n’a de sens que si vous pouvez en sortir, ou pour un proche qui n’y est pas rattaché. Un courtier aide à lire ces situations. Il ne peut pas promettre un reste à charge à zéro, ni un accord automatique de l’assureur.',
    },
    {
      type: 'p',
      text: 'Les Assureurs Experts peuvent mettre plusieurs contrats partenaires en regard de votre tableau actuel. L’échange sert à voir ce qui changerait pour vous, pas à vous orienter vers une seule formule.',
    },
  ],
};

export default post;

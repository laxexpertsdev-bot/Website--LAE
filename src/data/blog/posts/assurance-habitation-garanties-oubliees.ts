import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: 'assurance-habitation-garanties-oubliees',
  title: 'Assurance habitation : les garanties que l’on oublie souvent',
  seoTitle: 'Assurance habitation : garanties souvent oubliées',
  metaDescription:
    'Dégât des eaux, vol, responsabilité civile : les points à relire dans un contrat habitation avant un sinistre, sans langue de bois.',
  excerpt:
    'Le contrat habitation est souvent signé le jour de l’emménagement, puis oublié. Quelques lignes méritent pourtant d’être relues avant un dégât des eaux ou un vol.',
  category: 'Particuliers',
  publishedAt: '2026-09-24',
  image: '/blog/habitation.webp',
  imageAlt: 'Cuisine lumineuse d’un logement, avec îlot et chaises',
  imageCredit: 'Unsplash, photo 1600210492486',
  cta: {
    label: 'Revoir mon contrat habitation',
    href: '/devis',
    note: 'Nous partons de votre logement réel : pièces, dépendances, statut d’occupant. Le devis ne vaut pas acceptation.',
  },
  relatedSlugs: [
    'assurance-emprunteur-avant-de-changer',
    'assurance-auto-franchise-bonus-usage',
    'erreurs-a-eviter-avant-de-signer',
  ],
  faqs: [
    {
      question: 'L’assurance habitation est-elle obligatoire ?',
      answer:
        'Pour un locataire, le bail l’exige en pratique, au titre de la loi du 6 juillet 1989. Pour un propriétaire qui occupe son logement, elle n’est pas toujours imposée par la loi, mais la banque ou le syndic peuvent la demander. Le copropriétaire doit en outre être couvert en responsabilité civile.',
    },
    {
      question: 'La garantie catastrophes naturelles joue-t-elle toute seule ?',
      answer:
        'Elle est liée aux contrats qui couvrent l’incendie, mais elle ne s’applique qu’après un arrêté reconnaissant l’état de catastrophe naturelle. Sans cet arrêté, le sinistre est examiné au titre des autres garanties, s’il y en a.',
    },
    {
      question: 'Mon matériel de télétravail est-il couvert ?',
      answer:
        'Pas toujours, ou pas pour le montant réel. Ordinateur, écran et mobilier professionnel doivent être déclarés si le contrat le prévoit. En cas de doute, faites ajouter une ligne plutôt que de supposer.',
    },
  ],
  blocks: [
    {
      type: 'p',
      text: 'L’assurance habitation, souvent appelée multirisque habitation, protège le logement et, dans la plupart des formules, la responsabilité civile de la vie privée. Elle est signée vite, parfois le jour des clés. Le jour d’un sinistre, ce sont les définitions, les franchises et les biens déclarés qui comptent.',
    },
    {
      type: 'h2',
      text: 'Déclarer le logement tel qu’il est',
    },
    {
      type: 'p',
      text: 'Le nombre de pièces, la surface, la qualité d’occupant (locataire, propriétaire occupant, propriétaire non occupant) et l’adresse exacte servent de base au contrat. Une véranda, une cave, un garage détaché ou une dépendance oubliée peuvent rester en dehors de la garantie. Il en va de même pour un local professionnel utilisé à la maison si rien n’a été dit.',
    },
    {
      type: 'p',
      text: 'Les biens eux-mêmes ont souvent un plafond. Bijoux, instruments, vélo entreposé dans la cour, matériel informatique : au-delà d’un montant, il faut parfois une déclaration particulière. Sans elle, l’indemnisation peut être limitée au plafond standard, même si la facture est plus élevée.',
    },
    {
      type: 'h2',
      text: 'Ce que le contrat ne fait pas automatiquement',
    },
    {
      type: 'ul',
      items: [
        'Le dégât des eaux a presque toujours une franchise, et parfois une recherche de fuite encadrée.',
        'Le vol suppose en général des traces d’effraction et des moyens de protection annoncés (porte, volets, alarme).',
        'Les catastrophes naturelles dépendent d’un arrêté officiel, pas seulement de l’ampleur des dégâts chez vous.',
        'La responsabilité civile du contrat habitation ne remplace pas une assurance professionnelle si vous recevez des clients.',
      ],
    },
    {
      type: 'p',
      text: 'Relire ces lignes prend peu de temps et évite une mauvaise surprise. Ce n’est pas une liste de tout ce qui peut arriver : chaque contrat a ses définitions. L’attestation remise au propriétaire ou au syndic prouve que vous êtes assuré. Elle ne détaille pas les plafonds.',
    },
    {
      type: 'callout',
      text: 'Après un déménagement, une naissance, des travaux ou l’achat d’un équipement cher, le contrat doit être mis à jour. L’ancienne déclaration ne suit pas toute seule.',
    },
    {
      type: 'h2',
      text: 'Locataire, propriétaire : les besoins ne sont pas les mêmes',
    },
    {
      type: 'p',
      text: 'Le locataire assure surtout sa responsabilité envers le bailleur, ses biens et souvent ceux qu’il améliore. Le propriétaire occupant ajoute la protection du bâti. Le propriétaire qui loue a besoin d’une formule adaptée à un logement occupé par un tiers, parfois en complément de l’assurance du locataire. Confondre ces trois situations est une source classique de mauvaise couverture.',
    },
    {
      type: 'p',
      text: 'Les Assureurs Experts relisent avec vous l’occupation réelle du logement, les dépendances et les franchises. L’objectif est un contrat lisible, pas une accumulation de garanties dont vous n’avez pas l’usage.',
    },
  ],
};

export default post;

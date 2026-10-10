import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: 'erreurs-a-eviter-avant-de-signer',
  title: 'Cinq erreurs fréquentes avant de signer un contrat d’assurance',
  seoTitle: 'Cinq erreurs avant de signer une assurance',
  metaDescription:
    'Déclaration inexacte, franchise ignorée, garanties en double : cinq réflexes pour lire un contrat d’assurance plus sereinement.',
  excerpt:
    'La plupart des mauvaises surprises ne viennent pas d’un piège caché. Elles viennent d’une ligne non lue, ou d’une situation qui a changé sans que le contrat suive.',
  category: 'Particuliers',
  publishedAt: '2026-08-27',
  image: '/blog/erreurs.webp',
  imageAlt: 'Personne en train de signer un document avec un stylo',
  imageCredit: 'Scott Graham, Unsplash',
  cta: {
    label: 'Préparer un échange',
    href: '/#bilan',
    note: 'Le bilan sert à poser vos contrats côte à côte. Il n’oblige à rien et ne promet pas d’économie.',
  },
  relatedSlugs: [
    'preparer-son-bilan-assurance',
    'mutuelle-lire-avant-de-changer',
    'assurance-habitation-garanties-oubliees',
  ],
  faqs: [
    {
      question: 'Une fausse déclaration est-elle toujours sanctionnée ?',
      answer:
        'Le code des assurances distingue l’oubli de bonne foi et la fausse déclaration intentionnelle. Les conséquences ne sont pas les mêmes, mais dans les deux cas l’indemnisation peut être réduite, voire refusée. Déclarer juste dès le départ est plus simple que de se justifier après un sinistre.',
    },
    {
      question: 'Avoir deux contrats sur le même risque est-il plus sûr ?',
      answer:
        'Pas forcément. En assurance de biens, les indemnités ne se cumulent en général pas au-delà du préjudice. Vous pouvez payer deux fois pour une réparation qui ne sera versée qu’une fois. En responsabilité, les règles sont spécifiques : faites-les expliquer avant de doubler.',
    },
    {
      question: 'Le devis vaut-il contrat ?',
      answer:
        'Non. Le devis éclaire un prix et des garanties résumées. Le contrat, les conditions générales et le tableau de garanties font foi. Lisez-les avant la signature, ou dans le délai de renonciation quand il existe.',
    },
  ],
  blocks: [
    {
      type: 'p',
      text: 'Signer une assurance est un acte banal, et c’est justement pour cela qu’on le bâcle. Les cinq situations qui suivent reviennent souvent en cabinet. Les éviter ne rend pas un contrat « parfait ». Cela le rend simplement plus proche de votre vie réelle.',
    },
    {
      type: 'h2',
      text: '1. Déclarer un risque plus petit que la réalité',
    },
    {
      type: 'p',
      text: 'Surface du logement arrondie vers le bas, kilométrage minoré, activité professionnelle résumée en un mot trop vague, conducteur habituel passé sous silence : ces raccourcis font baisser le devis. Ils fragilisent le contrat. En cas de sinistre, l’assureur compare la déclaration à ce qui s’est passé. Mieux vaut un tarif juste qu’une indemnisation discutée.',
    },
    {
      type: 'h2',
      text: '2. Ne regarder que la cotisation',
    },
    {
      type: 'p',
      text: 'La cotisation est la partie visible. La franchise, les plafonds, les délais de carence et les exclusions décident de ce qui sera versé. Un contrat moins cher peut être très bien choisi, à condition que vous ayez vu ce que vous gardez à votre charge. Demandez un exemple sur un sinistre crédible pour vous, plutôt qu’une moyenne nationale.',
    },
    {
      type: 'h2',
      text: '3. Ignorer ce qui n’est pas couvert',
    },
    {
      type: 'p',
      text: 'Toute assurance a des exclusions. Certaines sont évidentes, d’autres tiennent à une définition : un dégât des eaux « soudain », un vol « avec effraction », une incapacité « totale ». Si le mot ne correspond pas à votre situation, la garantie ne joue pas, même si le titre de la formule semblait large.',
    },
    {
      type: 'h2',
      text: '4. Doubler des garanties qui ne s’additionnent pas',
    },
    {
      type: 'p',
      text: 'Deux mutuelles, deux assurances habitation ou une carte bancaire qui couvre déjà un voyage : les indemnités de biens ne dépassent en principe pas le préjudice. Vous financez alors une seconde cotisation sans second remboursement. Avant d’ajouter un contrat, demandez ce qui est déjà en place, y compris via l’employeur ou une carte.',
    },
    {
      type: 'h2',
      text: '5. Oublier de mettre à jour après un changement de vie',
    },
    {
      type: 'ul',
      items: [
        'Déménagement, mariage, naissance, départ d’un enfant du foyer.',
        'Nouveau prêt, nouveau véhicule, télétravail installé à la maison.',
        'Création d’entreprise, changement de statut, premier salarié.',
        'Départ à la retraite, qui modifie souvent la mutuelle et la prévoyance.',
      ],
    },
    {
      type: 'callout',
      text: 'Un contrat à jour vaut mieux qu’un contrat « premium » qui décrit une vie que vous n’avez plus.',
    },
    {
      type: 'p',
      text: 'Les Assureurs Experts utilisent ces cinq points comme trame d’un bilan. Ce n’est pas un audit juridique de toutes vos clauses. C’est un échange pour repérer les écarts les plus visibles, puis décider s’il faut demander un devis, modifier une ligne, ou ne rien changer.',
    },
  ],
};

export default post;

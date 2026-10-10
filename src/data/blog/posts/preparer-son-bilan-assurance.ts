import type { BlogPost } from '../types';

const post: BlogPost = {
  slug: 'preparer-son-bilan-assurance',
  title: 'Préparer son bilan assurance : documents et bonnes questions',
  seoTitle: 'Préparer son bilan assurance',
  metaDescription:
    'Un bilan d’assurance sert à faire le point sur vos contrats. Voici les documents utiles et les questions à poser, sans engagement.',
  excerpt:
    'Le bilan n’est pas une vente déguisée. C’est un temps pour aligner vos contrats sur votre vie actuelle : famille, logement, prêts, activité.',
  category: 'Patrimoine',
  publishedAt: '2026-10-08',
  image: '/blog/bilan.webp',
  imageAlt: 'Main qui coche une liste dans un carnet, sur un bureau',
  imageCredit: 'Glenn Carstens-Peters, Unsplash',
  featured: true,
  cta: {
    label: 'Réserver mon bilan',
    href: '/#bilan',
    note: 'Le formulaire de la page d’accueil permet de demander cet échange et le guide associé. Aucune souscription n’est imposée.',
  },
  relatedSlugs: [
    'erreurs-a-eviter-avant-de-signer',
    'mutuelle-lire-avant-de-changer',
    'assurance-emprunteur-avant-de-changer',
  ],
  faqs: [
    {
      question: 'Faut-il tout apporter, même les vieux contrats ?',
      answer:
        'Apportez ceux qui sont encore en cours, et les tableaux de garanties. Un contrat résilié n’est utile que s’il éclaire un sinistre récent ou un délai encore en cours. Mieux vaut cinq documents à jour qu’une pile incomplète.',
    },
    {
      question: 'Le bilan engage-t-il à changer d’assureur ?',
      answer:
        'Non. Il peut conclure que vos contrats sont cohérents. Changer n’a d’intérêt que si une garantie manque, si une franchise vous pose problème, ou si un doublon est inutile. Rester est parfois la bonne décision.',
    },
    {
      question: 'Parle-t-on aussi d’épargne et d’assurance vie ?',
      answer:
        'On peut noter les contrats déjà ouverts, pour voir s’ils répondent encore à un projet du foyer. Le bilan d’assurance n’est pas un conseil en investissement, ni une promesse de rendement. Pour la partie financière, votre conseiller habituel reste la référence.',
    },
  ],
  blocks: [
    {
      type: 'p',
      text: 'Un bilan d’assurance est un rendez-vous pour regarder ce que vous avez déjà, ce qui se recoupe, et ce qui manquerait si quelque chose arrivait. Ce n’est ni un contrôle, ni une obligation de souscrire. Bien préparé, il dure moins longtemps et il évite les oublis. Mal préparé, il se limite à des généralités.',
    },
    {
      type: 'h2',
      text: 'Les documents qui font gagner du temps',
    },
    {
      type: 'p',
      text: 'Rassemblez les pièces des contrats en cours, pas seulement les attestations. L’attestation prouve que vous êtes assuré. Le tableau de garanties et les conditions particulières disent jusqu’où.',
    },
    {
      type: 'ul',
      items: [
        'Mutuelle : tableau de garanties et mention du contrat d’entreprise, s’il y en a un.',
        'Habitation et auto : conditions particulières, franchises, liste des conducteurs.',
        'Emprunteur : offre de prêt ou avenant, quotités, garanties exigées par la banque.',
        'Prévoyance : délai de franchise et montant indemnisé, en face de votre revenu.',
        'Activité professionnelle : extrait décrivant le métier assuré, plafond et franchise.',
        'Échéances : pour savoir ce qui se renouvelle dans les trois prochains mois.',
      ],
    },
    {
      type: 'h2',
      text: 'Les questions qui structurent l’échange',
    },
    {
      type: 'p',
      text: 'Avant le rendez-vous, notez ce qui a changé depuis la signature : déménagement, enfant, prêt, création d’activité, départ à la retraite, aidant familial. Puis posez des questions simples. Elles valent mieux qu’une demande de « la meilleure couverture », qui ne veut rien dire sans un risque précis.',
    },
    {
      type: 'ul',
      items: [
        'Qu’est-ce qui est déjà pris en charge par le régime obligatoire ou par l’employeur ?',
        'Où un sinistre courant laisserait-il une somme importante à ma charge ?',
        'Quelles garanties se recouvrent, au point que je paie deux fois ?',
        'Qui appeler, et dans quel délai, si un dégât ou un arrêt de travail arrive demain ?',
        'Quel contrat arrive à échéance bientôt, et que faut-il préparer pour le relire à temps ?',
      ],
    },
    {
      type: 'callout',
      text: 'Un bilan sérieux peut conclure : « ne changez rien pour l’instant ». C’est une réponse utile, pas un échec commercial.',
    },
    {
      type: 'h2',
      text: 'Ce que le bilan n’est pas',
    },
    {
      type: 'p',
      text: 'Il ne remplace pas la lecture des conditions générales, ni l’avis de votre expert-comptable sur la fiscalité, ni celui de votre banquier sur le crédit. Il ne promet pas une baisse de cotisation. Si une piste de devis apparaît, elle sera chiffrée ensuite, à partir des informations que vous aurez confirmées. Tant que ces informations manquent, un prix annoncé trop tôt est fragile.',
    },
    {
      type: 'p',
      text: 'Les Assureurs Experts proposent ce bilan aux particuliers, aux familles et aux indépendants. Vous pouvez le demander depuis la page d’accueil. Venez avec vos tableaux, même incomplets : le premier travail consiste souvent à lister ce qui manque, pour ne pas décider dans le flou.',
    },
  ],
};

export default post;

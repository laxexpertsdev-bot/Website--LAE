import type { RegionPageData } from '../../components/product/regionTypes';

/**
 * Landing page de campagne — Paris / Île-de-France.
 * Fichier de référence : dupliquer et adapter pour chaque nouvelle région,
 * puis l'ajouter au tableau `regions` de ./index.ts.
 */
export const paris: RegionPageData = {
  slug: 'paris',
  region: 'Paris',
  seo: {
    title: 'Assurance à Paris : votre courtier expert | Les Assureurs Experts',
    description:
      "Courtier en assurance à Paris (agence 138 Bd Haussmann). Auto, santé, habitation, pro : nous comparons plus de 20 assureurs pour vous faire économiser. Devis gratuit sous 24h.",
  },
  hero: {
    eyebrow: 'Courtier en assurance à Paris',
    h1: 'Assurance à Paris : le meilleur contrat au meilleur prix',
    intro:
      "Basés au cœur de Paris, nous comparons pour vous plus de 20 assureurs afin de trouver la couverture la mieux adaptée à votre vie parisienne — auto, santé, habitation ou professionnelle. Un conseiller dédié vous répond sous 24h.",
    image: {
      src: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Vue de Paris — courtier en assurance à Paris',
      width: 1000,
      height: 563,
    },
  },
  keyFigures: [
    { value: 'ORIAS 25002995', label: 'Courtier agréé et réglementé' },
    { value: '+20', label: 'assureurs comparés' },
    { value: '< 24h', label: 'réponse d’un conseiller' },
  ],
  localContext: {
    title: 'Votre courtier en assurance à Paris',
    paragraphs: [
      "Notre agence est située au 138 Boulevard Haussmann, dans le 8e arrondissement de Paris. Nous accompagnons particuliers, indépendants et entreprises de toute l'Île-de-France, en rendez-vous sur place comme à distance.",
      "La vie parisienne a ses spécificités : stationnement tendu et vols plus fréquents pour l'assurance auto, appartements anciens et copropriétés pour l'assurance habitation, forte densité de professions libérales et de TPE pour la responsabilité civile professionnelle. Nous ajustons chaque contrat à cette réalité locale.",
      "Notre rôle de courtier : négocier pour vous auprès de nos partenaires assureurs, comparer objectivement les garanties et le prix, et vous faire gagner du temps comme de l'argent — gratuitement et sans engagement.",
    ],
  },
  insurances: {
    title: 'Nos assurances à Paris',
    intro: 'Quel que soit votre besoin, nous trouvons le contrat adapté :',
    items: [
      { label: 'Assurance auto', slug: 'assurance-auto' },
      { label: 'Mutuelle santé', slug: 'mutuelle-sante' },
      { label: 'Assurance habitation', slug: 'assurance-habitation' },
      { label: 'Assurance professionnelle', slug: 'assurance-professionnelle' },
      { label: 'Prévoyance', slug: 'prevoyance' },
      { label: 'Assurance emprunteur', slug: 'assurance-emprunteur' },
    ],
  },
  advantages: {
    title: 'Pourquoi choisir Les Assureurs Experts à Paris ?',
    items: [
      'Agence à Paris (138 Bd Haussmann), rendez-vous sur place ou à distance',
      'Comparaison de plus de 20 assureurs partenaires',
      'Conseiller dédié qui connaît le marché francilien',
      'Devis personnalisé gratuit et sans engagement',
      'Accompagnement complet, y compris la résiliation de votre ancien contrat',
      'Réponse sous 24h',
    ],
  },
  steps: {
    title: 'Comment ça marche ?',
    steps: [
      { title: 'Vous nous contactez', text: 'Remplissez le formulaire ou appelez-nous : décrivez votre besoin en 2 minutes.' },
      { title: 'Nous comparons', text: 'Nous interrogeons nos assureurs partenaires et négocions les meilleures conditions.' },
      { title: 'Vous recevez votre devis', text: 'Un conseiller vous présente les offres adaptées sous 24h, sans engagement.' },
      { title: 'Vous êtes couvert', text: 'Nous gérons la souscription et la résiliation de votre ancien contrat pour vous.' },
    ],
  },
  faq: {
    title: 'Assurance à Paris : vos questions fréquentes',
    items: [
      {
        q: 'Avez-vous une agence à Paris ?',
        a: "Oui, notre agence se situe au 138 Boulevard Haussmann, dans le 8e arrondissement. Vous pouvez nous rencontrer sur place ou être accompagné entièrement à distance, par téléphone et par e-mail.",
      },
      {
        q: 'Puis-je être conseillé sans me déplacer ?',
        a: "Absolument. La grande majorité de nos clients parisiens sont accompagnés à distance : envoi du devis par e-mail, échanges téléphoniques et signature électronique. Le rendez-vous en agence reste possible si vous le souhaitez.",
      },
      {
        q: 'Combien coûte votre service de courtage ?',
        a: "Notre accompagnement est gratuit et sans engagement. Nous sommes rémunérés par les assureurs, pas par vous : notre intérêt est de vous trouver le meilleur rapport garanties/prix.",
      },
      {
        q: 'Quels types d’assurance couvrez-vous à Paris ?',
        a: "Auto, deux-roues, santé, habitation, prévoyance, assurance emprunteur, ainsi que les besoins professionnels (RC pro, décennale, santé collective). Nous couvrons les particuliers comme les entreprises franciliennes.",
      },
      {
        q: 'Sous combien de temps puis-je être assuré ?',
        a: "Après validation de votre devis, l'attestation peut souvent être émise le jour même. Un conseiller vous recontacte sous 24h dès réception de votre demande.",
      },
    ],
  },
  form: {
    title: 'Devis assurance à Paris — gratuit',
    intro: 'Recevez votre tarif personnalisé sous 24h. Un conseiller parisien vous rappelle.',
    submitLabel: 'Obtenir mon devis',
  },
};

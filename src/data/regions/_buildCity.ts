import type { RegionPageData } from '../../components/product/regionTypes';
import type { GeoCity } from '../geo/cities';
import { zoneHeroImages } from '../geo/images';

/**
 * Fabrique un hub régional générique (RegionPageData) pour une ville de `campaignCities`.
 * Calqué sur ./paris.ts, avec une règle d'honnêteté stricte : LAE n'a PAS d'agence physique
 * dans ces villes (siège réel unique : 138 Bd Haussmann, Paris 8e). La copie ne doit donc
 * jamais affirmer une agence locale ni un rendez-vous sur place — uniquement un
 * accompagnement à distance par un conseiller dédié, spécialiste de la zone.
 */
export function buildCityRegion(city: GeoCity): RegionPageData {
  const { name, dept, deptNum, area, slug } = city;

  return {
    slug: city.slug,
    region: name,
    seo: {
      title: `Assurance à ${name} : votre courtier expert | Les Assureurs Experts`,
      description: `Courtier en assurance à ${name} : nous comparons plus de 20 assureurs pour vous faire économiser. Devis gratuit sous 24h, accompagnement à distance.`,
    },
    hero: {
      eyebrow: `Courtier en assurance à ${name}`,
      h1: `Assurance à ${name} : le meilleur contrat au meilleur prix`,
      intro: `Nous comparons pour vous plus de 20 assureurs afin de trouver la couverture la mieux adaptée à votre situation à ${name} — auto, santé, habitation ou professionnelle. Spécialiste de ${area}, un conseiller dédié vous répond sous 24h et vous accompagne entièrement à distance.`,
      image: zoneHeroImages[city.zone],
    },
    keyFigures: [
      { value: 'ORIAS 25002995', label: 'Courtier agréé et réglementé' },
      { value: '+20', label: 'assureurs comparés' },
      { value: '< 24h', label: 'réponse d’un conseiller' },
    ],
    localContext: {
      title: `Votre courtier en assurance à ${name}`,
      paragraphs: [
        `Nous accompagnons particuliers, indépendants et entreprises à ${name} et dans ${dept} (${deptNum}). Un conseiller dédié, spécialiste de ${area}, vous suit du premier devis à la souscription — à distance : appel, e-mail, signature électronique, sans déplacement nécessaire.`,
        `${city.localFlavor} Nous ajustons chaque contrat à cette réalité locale, avec la même exigence de comparaison objective qu'en agence.`,
        "Notre rôle de courtier : négocier pour vous auprès de nos partenaires assureurs, comparer objectivement les garanties et le prix, et vous faire gagner du temps comme de l'argent — gratuitement et sans engagement.",
      ],
    },
    insurances: {
      title: `Nos assurances à ${name}`,
      intro: 'Quel que soit votre besoin, nous trouvons le contrat adapté :',
      items: [
        { label: 'Assurance auto', slug: 'assurance-auto' },
        { label: 'Mutuelle santé', slug: `mutuelle-sante/${slug}` },
        { label: 'Assurance habitation', slug: 'assurance-habitation' },
        { label: 'Assurance professionnelle', slug: 'assurance-professionnelle' },
        { label: 'Prévoyance', slug: 'prevoyance' },
        { label: 'Assurance emprunteur', slug: 'assurance-emprunteur' },
      ],
    },
    advantages: {
      title: `Pourquoi choisir Les Assureurs Experts à ${name} ?`,
      items: [
        `Conseiller dédié qui connaît ${area}, joignable par téléphone, e-mail ou visio`,
        'Comparaison de plus de 20 assureurs partenaires',
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
      title: `Assurance à ${name} : vos questions fréquentes`,
      items: [
        {
          q: `Avez-vous une agence à ${name} ?`,
          a: `Non, nous n'avons pas de bureau local à ${name} : notre siège se situe au 138 Boulevard Haussmann à Paris (8e). Un conseiller dédié, spécialiste de ${area}, vous accompagne intégralement à distance — par téléphone, e-mail et signature électronique — avec le même niveau de service qu'un rendez-vous en agence.`,
        },
        {
          q: 'Puis-je être conseillé sans me déplacer ?',
          a: `Absolument, c'est le mode d'accompagnement proposé à ${name} : envoi du devis par e-mail, échanges téléphoniques et signature électronique, sans aucun déplacement nécessaire de votre part.`,
        },
        {
          q: 'Combien coûte votre service de courtage ?',
          a: "Notre accompagnement est gratuit et sans engagement. Nous sommes rémunérés par les assureurs, pas par vous : notre intérêt est de vous trouver le meilleur rapport garanties/prix.",
        },
        {
          q: `Quels types d’assurance couvrez-vous à ${name} ?`,
          a: `Auto, deux-roues, santé, habitation, prévoyance, assurance emprunteur, ainsi que les besoins professionnels (RC pro, décennale, santé collective). Nous couvrons les particuliers comme les entreprises de ${area}.`,
        },
        {
          q: 'Sous combien de temps puis-je être assuré ?',
          a: "Après validation de votre devis, l'attestation peut souvent être émise le jour même. Un conseiller vous recontacte sous 24h dès réception de votre demande.",
        },
      ],
    },
    form: {
      title: `Devis assurance à ${name} — gratuit`,
      intro: `Recevez votre tarif personnalisé sous 24h. Un conseiller spécialiste de ${area} vous rappelle.`,
      submitLabel: 'Soumettre',
    },
  };
}

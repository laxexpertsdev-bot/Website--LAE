import { buildProductRegion } from './_build';
import { mutuelleSante } from '../products/mutuelle-sante';
import { campaignCities } from '../geo/cities';

/**
 * Pages produit × ville « Mutuelle santé » pour les campagnes Google Ads
 * (Alpes / Côte d'Azur et Nouvelle-Aquitaine). Générées en mappant `campaignCities`
 * sur le produit de base `mutuelleSante` via buildProductRegion : seuls le Hero, le SEO
 * et quelques titres sont localisés ; tout le reste (couverture, tarifs, étapes, FAQ,
 * partenaires, témoignages) est hérité de la page /mutuelle-sante.
 *
 * ⚠️ Ces pages sont noindex (déclenché par `region`) et ne revendiquent AUCUNE agence
 *    locale : LAE accompagne à distance depuis Paris. Ne pas y ajouter d'adresse locale.
 */
export const mutuelleSanteCities = campaignCities.map((c) =>
  buildProductRegion(mutuelleSante, {
    regionSlug: c.slug,
    region: c.name,
    seo: {
      title: `Mutuelle Santé à ${c.name} (${c.deptNum}) | Devis Gratuit | Les Assureurs Experts`,
      description: `Votre mutuelle santé à ${c.name} : comparatif expert de 20+ assureurs, devis gratuit sous 24h. Courtier ORIAS 25002995, conseiller dédié à distance pour ${c.area}.`,
    },
    hero: {
      eyebrow: `Complémentaire santé · ${c.name}`,
      h1: `Votre mutuelle santé à ${c.name}, au juste prix`,
      intro: `À ${c.name} et dans ${c.dept} (${c.deptNum}), nous comparons pour vous plus de 20 assureurs afin de trouver la complémentaire santé la mieux adaptée à votre profil, votre budget et vos besoins. Un conseiller dédié qui connaît ${c.area} vous accompagne à distance — devis personnalisé sous 24h.`,
    },
    titles: {
      coverage: `Que couvre votre mutuelle santé à ${c.name} ?`,
      pricing: `Combien coûte une mutuelle à ${c.name} ?`,
      steps: `Comment choisir votre mutuelle à ${c.name} ?`,
      faq: `Mutuelle santé à ${c.name} : vos questions fréquentes`,
      form: `Votre devis mutuelle à ${c.name}, gratuit`,
    },
  }),
);

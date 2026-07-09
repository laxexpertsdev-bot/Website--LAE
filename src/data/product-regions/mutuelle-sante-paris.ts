import { buildProductRegion } from './_build';
import { mutuelleSante } from '../products/mutuelle-sante';

/**
 * Page produit × région : /mutuelle-sante/paris (campagne géo, noindex).
 * Hérite tout le contenu de la page /mutuelle-sante ; seuls le Hero, le SEO et
 * quelques titres sont déclinés pour Paris.
 */
export const mutuelleSanteParis = buildProductRegion(mutuelleSante, {
  regionSlug: 'paris',
  region: 'Paris',
  seo: {
    title: 'Mutuelle Santé à Paris | Devis Gratuit | Les Assureurs Experts',
    description:
      'Votre mutuelle santé à Paris (75) : comparatif expert de 20+ assureurs, devis gratuit sous 24h. Courtier ORIAS au 138 Bd Haussmann, Paris 8e.',
  },
  hero: {
    eyebrow: 'Complémentaire santé · Paris',
    h1: 'Votre mutuelle santé à Paris, au juste prix',
    intro:
      "À Paris, nous comparons pour vous plus de 20 assureurs pour trouver la complémentaire santé la mieux adaptée à votre profil, votre budget et vos besoins. Un conseiller basé au 138 Bd Haussmann (Paris 8e) vous accompagne.",
  },
  titles: {
    coverage: 'Que couvre votre mutuelle santé à Paris ?',
    pricing: 'Combien coûte une mutuelle à Paris ?',
    steps: 'Comment choisir votre mutuelle à Paris ?',
    faq: 'Mutuelle santé à Paris : vos questions fréquentes',
    form: 'Votre devis mutuelle à Paris, gratuit',
  },
});

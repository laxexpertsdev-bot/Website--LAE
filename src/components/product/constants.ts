/**
 * Constantes partagées par la template produit.
 * (Le reste du site duplique ces valeurs page par page ; on centralise ici
 * pour les nouveaux composants produit.)
 */
import { PARTNERS } from '../../data/partners';

export const PHONE_DISPLAY = '+33 1 62 17 11 11';
export const PHONE_TEL = '+33162171111';
export const ORIAS = '25002995';
export const SITE_ORIGIN = 'https://lesassureursexperts.fr';

/**
 * Logos partenaires pour le bandeau statique `TrustStrip` (forme { src, alt }).
 * Dérivés de la source unique `PARTNERS` (src/data/partners.ts) pour éviter la duplication.
 */
export const PARTNER_LOGOS = PARTNERS.map((p) => ({
  src: p.logo,
  alt: `Logo assureur partenaire ${p.name}`,
}));

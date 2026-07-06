/**
 * Constantes partagées par la template produit.
 * (Le reste du site duplique ces valeurs page par page ; on centralise ici
 * pour les nouveaux composants produit.)
 */
export const PHONE_DISPLAY = '+33 1 62 17 11 11';
export const PHONE_TEL = '+33162171111';
export const ORIAS = '25002995';
export const SITE_ORIGIN = 'https://lesassureursexperts.fr';

/** Logos partenaires (public/partners/). Affichés dans TrustStrip. */
export const PARTNER_LOGOS: { src: string; alt: string }[] = [
  { src: '/partners/logo_de_la_startup_acheel.png', alt: 'Acheel' },
  { src: '/partners/images.png', alt: 'April' },
  { src: '/partners/kereis-france-logo-rvb-unboxed-860x484.png.webp', alt: 'Kereis' },
  { src: '/partners/images_(1).png', alt: 'Apicil' },
  { src: '/partners/images_(2).png', alt: 'AMI 3F' },
  { src: '/partners/images_(3).png', alt: 'QBE' },
  { src: '/partners/images_(4).png', alt: 'Cegema' },
];

/**
 * Partenaires assureurs affichés dans PartnerCarousel.
 *
 * Les fichiers de public/partners/ sont des assets NORMALISÉS (canvas uniforme
 * 320×120, marks détourés et égalisés à surface visuelle équivalente), générés
 * par `node scripts/normalize-partner-logos.mjs` depuis scripts/partners-src/.
 * Pour ajouter un partenaire : déposer le fichier source dans partners-src/,
 * l'ajouter à LOGOS dans le script, relancer, puis l'ajouter ici.
 */
export interface Partner {
  name: string;
  logo: string;
}

export const PARTNERS: Partner[] = [
  { name: 'Acheel', logo: '/partners/acheel.webp' },
  { name: 'April', logo: '/partners/april.webp' },
  { name: 'Assurema', logo: '/partners/assurema.webp' },
  { name: 'Kereis', logo: '/partners/kereis.webp' },
  { name: 'Cegema', logo: '/partners/cegema.webp' },
  { name: 'QBE', logo: '/partners/qbe.webp' },
  { name: 'AMI 3F', logo: '/partners/ami-3f.webp' },
  { name: 'Apicil', logo: '/partners/apicil.webp' },
  { name: 'Abeille Vie', logo: '/partners/abeille-vie.webp' },
  { name: 'Veralti', logo: '/partners/veralti.webp' },
  { name: 'Assurmax', logo: '/partners/assurmax.webp' },
  { name: 'Orus', logo: '/partners/orus.webp' },
  { name: 'Axece', logo: '/partners/axece.webp' },
  { name: 'Welfaire', logo: '/partners/welfaire.webp' },
  { name: 'Utwin', logo: '/partners/utwin.webp' },
  { name: 'Alptis', logo: '/partners/alptis.webp' },
];

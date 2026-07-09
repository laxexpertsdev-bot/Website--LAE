import type { HeroImage } from '../../components/product/types';
import type { GeoCity } from './cities';

/**
 * Images hero partagées par zone pour les hubs régionaux générés depuis `campaignCities`
 * (voir ../regions/_buildCity.ts). Une seule image par zone plutôt qu'une par ville : les
 * IDs Pexels ci-dessous ont été vérifiés (page photo Pexels chargée et description
 * confirmée) avant intégration.
 */
export const zoneHeroImages: Record<GeoCity['zone'], HeroImage> = {
  'cote-azur-alpes': {
    src: 'https://images.pexels.com/photos/32486469/pexels-photo-32486469.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: "Littoral de Nice, Côte d'Azur — courtier en assurance dans les Alpes et la Côte d'Azur",
    width: 1000,
    height: 563,
  },
  'nouvelle-aquitaine': {
    src: 'https://images.pexels.com/photos/7420251/pexels-photo-7420251.jpeg?auto=compress&cs=tinysrgb&w=1000',
    alt: 'Vue aérienne du vignoble et de la Gironde à Bordeaux — courtier en assurance en Nouvelle-Aquitaine',
    width: 1000,
    height: 563,
  },
};

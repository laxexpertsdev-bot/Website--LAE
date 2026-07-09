import { campaignCities } from '../geo/cities';
import { buildCityRegion } from './_buildCity';

/**
 * Hubs régionaux génériques (16 villes de campagne), générés depuis `campaignCities`.
 * Voir ./_buildCity.ts pour la logique de génération et ../geo/cities.ts pour le dataset.
 */
export const campaignCityRegions = campaignCities.map(buildCityRegion);

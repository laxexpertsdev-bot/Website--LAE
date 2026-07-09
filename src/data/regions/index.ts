import type { RegionPageData } from '../../components/product/regionTypes';
import { paris } from './paris';
import { campaignCityRegions } from './cities';

/**
 * Registre des landing pages régionales de campagne.
 * App.tsx mappe ce tableau pour générer une route /<slug> par région.
 *
 * ➕ Ajouter une région : créer src/data/regions/<slug>.ts (dupliquer paris.ts),
 *    puis l'importer et l'ajouter ci-dessous. Aucun autre fichier à modifier.
 * Les 16 hubs villes de campagne (voir ../geo/cities.ts) sont générés automatiquement
 * via ./cities.ts + ./_buildCity.ts.
 */
export const regions: RegionPageData[] = [paris, ...campaignCityRegions];

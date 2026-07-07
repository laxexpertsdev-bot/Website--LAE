import type { RegionPageData } from '../../components/product/regionTypes';
import { paris } from './paris';

/**
 * Registre des landing pages régionales de campagne.
 * App.tsx mappe ce tableau pour générer une route /<slug> par région.
 *
 * ➕ Ajouter une région : créer src/data/regions/<slug>.ts (dupliquer paris.ts),
 *    puis l'importer et l'ajouter ci-dessous. Aucun autre fichier à modifier.
 */
export const regions: RegionPageData[] = [paris];

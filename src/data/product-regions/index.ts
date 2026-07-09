import type { ProductPageData } from '../../components/product/types';
import { mutuelleSanteParis } from './mutuelle-sante-paris';
import { mutuelleSanteCities } from './mutuelle-sante-cities';

/**
 * Registre des pages produit × région (campagnes géo, noindex).
 * App.tsx mappe ce tableau pour générer une route /<produit>/<ville> par entrée.
 *
 * ➕ Ajouter un couple : créer src/data/product-regions/<produit>-<ville>.ts
 *    via buildProductRegion(produitDeBase, { regionSlug, region, seo, hero, titles }),
 *    puis l'importer et l'ajouter ci-dessous. Aucun autre fichier à modifier.
 *
 * Les villes de campagne (Alpes/Côte d'Azur + Nouvelle-Aquitaine) sont générées en lot
 * depuis src/data/geo/cities.ts → voir ./mutuelle-sante-cities.ts. Paris reste à part
 * (copie « vraie agence 138 Bd Haussmann »).
 */
export const productRegions: ProductPageData[] = [mutuelleSanteParis, ...mutuelleSanteCities];

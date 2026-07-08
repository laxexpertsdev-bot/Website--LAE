import type { ProductPageData } from '../../components/product/types';
import { mutuelleSanteParis } from './mutuelle-sante-paris';

/**
 * Registre des pages produit × région (campagnes géo, noindex).
 * App.tsx mappe ce tableau pour générer une route /<produit>/<ville> par entrée.
 *
 * ➕ Ajouter un couple : créer src/data/product-regions/<produit>-<ville>.ts
 *    via buildProductRegion(produitDeBase, { regionSlug, region, seo, hero, titles }),
 *    puis l'importer et l'ajouter ci-dessous. Aucun autre fichier à modifier.
 */
export const productRegions: ProductPageData[] = [mutuelleSanteParis];

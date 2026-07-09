import React from 'react';
import ProductPageLayout from '../components/product/ProductPageLayout';
import type { ProductPageData } from '../components/product/types';

/**
 * Wrapper des pages produit × région (campagnes géo). Reçoit son `data` en prop
 * (généré via buildProductRegion) et rend la template produit, qui bascule en
 * noindex + tracking région dès que `data.region` est défini.
 */
const ProductRegionPage: React.FC<{ data: ProductPageData }> = ({ data }) => (
  <ProductPageLayout data={data} />
);

export default ProductRegionPage;

import React from 'react';
import ProductPageLayout from '../components/product/ProductPageLayout';
import { assuranceBateau } from '../data/products/assurance-bateau';

const AssuranceBateauPage: React.FC = () => <ProductPageLayout data={assuranceBateau} />;

export default AssuranceBateauPage;

import React from 'react';
import ProductPageLayout from '../components/product/ProductPageLayout';
import { mutuelleSante } from '../data/products/mutuelle-sante';

const MutuelleHealthPage: React.FC = () => <ProductPageLayout data={mutuelleSante} />;

export default MutuelleHealthPage;

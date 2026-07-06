import React from 'react';
import ProductPageLayout from '../components/product/ProductPageLayout';
import { assuranceEmprunteur } from '../data/products/assurance-emprunteur';

const AssuranceEmprunteurPage: React.FC = () => <ProductPageLayout data={assuranceEmprunteur} />;

export default AssuranceEmprunteurPage;

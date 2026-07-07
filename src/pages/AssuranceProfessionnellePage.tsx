import React from 'react';
import ProductPageLayout from '../components/product/ProductPageLayout';
import { assuranceProfessionnelle } from '../data/products/assurance-professionnelle';

const AssuranceProfessionnellePage: React.FC = () => <ProductPageLayout data={assuranceProfessionnelle} />;

export default AssuranceProfessionnellePage;

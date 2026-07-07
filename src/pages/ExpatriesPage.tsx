import React from 'react';
import ProductPageLayout from '../components/product/ProductPageLayout';
import { expatries } from '../data/products/expatries';

const ExpatriesPage: React.FC = () => <ProductPageLayout data={expatries} />;

export default ExpatriesPage;

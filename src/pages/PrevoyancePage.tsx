import React from 'react';
import ProductPageLayout from '../components/product/ProductPageLayout';
import { prevoyance } from '../data/products/prevoyance';

const PrevoyancePage: React.FC = () => <ProductPageLayout data={prevoyance} />;

export default PrevoyancePage;

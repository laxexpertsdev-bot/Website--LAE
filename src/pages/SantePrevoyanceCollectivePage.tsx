import React from 'react';
import ProductPageLayout from '../components/product/ProductPageLayout';
import { santePrevoyanceCollective } from '../data/products/sante-prevoyance-collective';

const SantePrevoyanceCollectivePage: React.FC = () => <ProductPageLayout data={santePrevoyanceCollective} />;

export default SantePrevoyanceCollectivePage;

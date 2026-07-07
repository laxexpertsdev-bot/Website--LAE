import React from 'react';
import RegionPageLayout from '../components/product/RegionPageLayout';
import type { RegionPageData } from '../components/product/regionTypes';

interface RegionLandingPageProps {
  data: RegionPageData;
}

/** Page d'atterrissage régionale : simple wrapper autour de la template data-driven. */
const RegionLandingPage: React.FC<RegionLandingPageProps> = ({ data }) => <RegionPageLayout data={data} />;

export default RegionLandingPage;

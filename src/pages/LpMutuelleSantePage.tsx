import React from 'react';
import { Helmet } from 'react-helmet-async';
import CampaignHeader from '../components/campaign/CampaignHeader';
import CampaignHero from '../components/campaign/CampaignHero';
import CampaignFooter from '../components/campaign/CampaignFooter';
import CampaignStickyCta from '../components/campaign/CampaignStickyCta';
import KeyFiguresBand from '../components/product/KeyFiguresBand';
import CoverageSection from '../components/product/CoverageSection';
import AudienceSection from '../components/product/AudienceSection';
import StepsSection from '../components/product/StepsSection';
import CtaBand from '../components/product/CtaBand';
import PartnerCarousel from '../components/PartnerCarousel';
import TestimonialsSection from '../components/product/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import { SITE_ORIGIN } from '../components/product/constants';
import { mutuelleSanteLp } from '../data/campaigns/mutuelle-sante-lp';
import { useSuppressExitPopup } from '../context/ExitPopupContext';

/**
 * Landing page de campagne Google Ads `/lp/mutuelle-sante` : noindex, formulaire d'abord,
 * pensée pour maximiser la conversion du clic Ads en lead. Entièrement pilotée par
 * `mutuelleSanteLp` (contrat CampaignLpData) — aucun JSON-LD, hors nav et sitemap.
 */
const LpMutuelleSantePage: React.FC = () => {
  useSuppressExitPopup();

  const data = mutuelleSanteLp;
  const canonical = `${SITE_ORIGIN}/${data.slug}`;

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={data.seo.title} />
        <meta property="og:description" content={data.seo.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
      </Helmet>

      <CampaignHeader />
      <CampaignHero data={data} />

      <KeyFiguresBand figures={data.keyFigures} />

      <div className="mx-auto max-w-5xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        <CoverageSection {...data.productContent.coverage} />
        <AudienceSection {...data.productContent.audience} />
        <StepsSection {...data.productContent.steps} />
      </div>

      <CtaBand {...data.ctaBand} />

      <PartnerCarousel
        title="Nos partenaires assureurs"
        subtitle="Ils nous font confiance pour protéger nos clients au quotidien."
      />

      <TestimonialsSection />

      <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <FaqSection id="faq" items={data.faq.items} title={data.faq.title} structuredData={false} />
      </div>

      <CtaBand {...data.finalCta} />

      <CampaignFooter />
      <CampaignStickyCta />
    </div>
  );
};

export default LpMutuelleSantePage;

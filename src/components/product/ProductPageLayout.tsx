import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbJsonLd from '../BreadcrumbJsonLd';
import FaqSection from '../FaqSection';
import ProductServiceJsonLd from './ProductServiceJsonLd';
import ProductHero from './ProductHero';
import CoverageSection from './CoverageSection';
import AudienceSection from './AudienceSection';
import PricingSection from './PricingSection';
import StepsSection from './StepsSection';
import AdvantagesSection from './AdvantagesSection';
import CtaBand from './CtaBand';
import PartnerCarousel from '../PartnerCarousel';
import TestimonialsSection from './TestimonialsSection';
import RelatedProducts from './RelatedProducts';
import LeadFormCard from './LeadFormCard';
import MobileStickyCta from './MobileStickyCta';
import { SITE_ORIGIN } from './constants';
import type { ProductPageData } from './types';
import { useSuppressExitPopup } from '../../context/ExitPopupContext';

interface ProductPageLayoutProps {
  data: ProductPageData;
}

/**
 * Template partagée « éditoriale premium » des pages produit.
 * Entièrement pilotée par `data` (voir types.ts). Toute page produit se réduit à :
 *   export default () => <ProductPageLayout data={xxx} />;
 */
const ProductPageLayout: React.FC<ProductPageLayoutProps> = ({ data }) => {
  useSuppressExitPopup();

  const canonical = `${SITE_ORIGIN}/${data.slug}`;
  const ogImage = data.seo.ogImage ?? `${SITE_ORIGIN}/les-assureurs-experts-logo.png`;

  return (
    <>
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        {data.region && <meta name="robots" content="noindex, follow" />}
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={data.seo.title} />
        <meta property="og:description" content={data.seo.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      {/* Variante géo (data.region) : page noindex de campagne → pas de JSON-LD. */}
      {!data.region && (
        <>
          <BreadcrumbJsonLd name={data.label} slug={data.slug} />
          <ProductServiceJsonLd name={data.label} slug={data.slug} description={data.seo.description} />
        </>
      )}

      <div className="min-h-screen bg-white pb-20 md:pb-0">
        {/* Fil d'Ariane — flotte sous la navbar principale au scroll */}
        <div className="sticky top-20 z-40 border-b border-hairline bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="flex items-center gap-1 transition-colors hover:text-brand-navy">
                <Home className="h-4 w-4" />
                Accueil
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium text-brand-navy">{data.label}</span>
            </nav>
          </div>
        </div>

        {/* Hero texte (gauche) + formulaire flottant (haut droite, sticky) + contenu (gauche) */}
        <div className="bg-gradient-to-b from-paper to-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="grid gap-x-12 gap-y-10 lg:grid-cols-3 lg:grid-rows-[auto_1fr]">
              {/* Colonne gauche — hero texte */}
              <div className="lg:col-span-2 lg:row-start-1">
                <ProductHero
                  eyebrow={data.hero.eyebrow}
                  h1={data.hero.h1}
                  intro={data.hero.intro}
                  keyFigures={data.keyFigures}
                />
              </div>

              {/* Colonne droite — formulaire flottant, sticky sur toute la hauteur */}
              <aside className="lg:col-start-3 lg:row-span-2 lg:row-start-1">
                <div className="lg:sticky lg:top-40">
                  <LeadFormCard
                    slug={data.insuranceType ?? data.slug}
                    label={data.label}
                    title={data.form.title}
                    intro={data.form.intro}
                    submitLabel={data.form.submitLabel}
                    region={data.region}
                  />
                </div>
              </aside>

              {/* Colonne gauche — contenu (avec la photo déplacée en tête) */}
              <div className="space-y-14 lg:col-span-2 lg:row-start-2">
                {data.hero.image && (
                  <figure className="overflow-hidden rounded-2xl ring-1 ring-black/5">
                    <img
                      src={data.hero.image.src}
                      alt={data.hero.image.alt}
                      width={data.hero.image.width}
                      height={data.hero.image.height}
                      loading="eager"
                      decoding="async"
                      className="aspect-[16/9] w-full object-cover"
                    />
                  </figure>
                )}
                <CoverageSection {...data.coverage} />
                {data.audience && <AudienceSection {...data.audience} />}
                {data.pricing && <PricingSection {...data.pricing} />}
                {data.steps && <StepsSection {...data.steps} />}
                <AdvantagesSection {...data.advantages} />
                <FaqSection id="faq" items={data.faq.items} title={data.faq.title} />
              </div>
            </div>
          </div>
        </div>

        {data.ctaBand && <CtaBand {...data.ctaBand} />}
        <PartnerCarousel
          title="Nos partenaires assureurs"
          subtitle="Ils nous font confiance pour protéger nos clients au quotidien."
        />
        <TestimonialsSection />
        <RelatedProducts related={data.related} />
      </div>

      <MobileStickyCta />
    </>
  );
};

export default ProductPageLayout;

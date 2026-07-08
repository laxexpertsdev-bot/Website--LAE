import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import FaqSection from '../FaqSection';
import ProductStickyNav from './ProductStickyNav';
import ProductHero from './ProductHero';
import Section from './Section';
import AdvantagesSection from './AdvantagesSection';
import StepsSection from './StepsSection';
import PartnerCarousel from '../PartnerCarousel';
import TestimonialsSection from './TestimonialsSection';
import LeadFormCard from './LeadFormCard';
import MobileStickyCta from './MobileStickyCta';
import { SITE_ORIGIN } from './constants';
import type { RegionPageData } from './regionTypes';
import type { NavAnchor } from './ProductStickyNav';

interface RegionPageLayoutProps {
  data: RegionPageData;
}

/**
 * Template partagée des landing pages régionales (campagne géo).
 * Entièrement pilotée par `data` (voir regionTypes.ts). Toute page région se réduit à :
 *   <RegionPageLayout data={xxx} />
 * `noindex` + hors sitemap + hors nav : ces pages ne sont atteignables que par l'URL de campagne.
 */
const RegionPageLayout: React.FC<RegionPageLayoutProps> = ({ data }) => {
  const canonical = `${SITE_ORIGIN}/${data.slug}`;
  const ogImage = data.seo.ogImage ?? `${SITE_ORIGIN}/les-assureurs-experts-logo.png`;

  // Ancres de la sous-nav sticky : uniquement celles réellement présentes dans le DOM.
  const anchors: NavAnchor[] = [
    { id: 'nos-assurances', label: 'Nos assurances' },
    ...(data.localContext ? [{ id: 'contexte', label: `À ${data.region}` }] : []),
    { id: 'avantages', label: 'Pourquoi nous' },
    ...(data.steps ? [{ id: 'etapes', label: 'Comment ça marche' }] : []),
    { id: 'faq', label: 'FAQ' },
    { id: 'devis', label: 'Devis gratuit' },
  ];

  return (
    <>
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        {/* Landing de campagne : hors index Google (évite les pénalités doorway/duplicate). */}
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={data.seo.title} />
        <meta property="og:description" content={data.seo.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
      </Helmet>

      <div className="min-h-screen bg-white pb-20 md:pb-0">
        <ProductStickyNav anchors={anchors} />

        {/* Hero texte (gauche) + formulaire flottant sticky (droite) + contenu (gauche) */}
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

              {/* Colonne droite — formulaire de lead, sticky, avec attribution région */}
              <aside className="lg:col-start-3 lg:row-span-2 lg:row-start-1">
                <div className="lg:sticky lg:top-40">
                  <LeadFormCard
                    slug={data.slug}
                    label={`Assurance à ${data.region}`}
                    title={data.form.title}
                    intro={data.form.intro}
                    submitLabel={data.form.submitLabel}
                    region={data.region}
                  />
                </div>
              </aside>

              {/* Colonne gauche — contenu */}
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

                {/* Nos assurances dans la région — maillage interne vers les pages produit */}
                <Section id="nos-assurances" title={data.insurances.title} intro={data.insurances.intro}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {data.insurances.items.map((it) => (
                      <Link
                        key={it.slug}
                        to={`/${it.slug}`}
                        className="group flex items-center justify-between gap-3 rounded-xl border border-hairline p-5 transition-colors hover:border-brand-navy"
                      >
                        <span className="font-medium text-brand-navy">{it.label}</span>
                        <ArrowRight className="h-5 w-5 flex-shrink-0 text-brand-accent transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </Section>

                {/* Contexte local unique (SEO + anti duplicate-content) */}
                {data.localContext && (
                  <Section id="contexte" title={data.localContext.title}>
                    <div className="space-y-4 max-w-prose text-lg leading-relaxed text-gray-600">
                      {data.localContext.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </Section>
                )}

                <div id="avantages" className="scroll-mt-28">
                  <AdvantagesSection {...data.advantages} />
                </div>

                {data.steps && <StepsSection {...data.steps} />}

                <FaqSection id="faq" items={data.faq.items} title={data.faq.title} />
              </div>
            </div>
          </div>
        </div>

        <PartnerCarousel
          title="Nos partenaires assureurs"
          subtitle="Ils nous font confiance pour protéger nos clients au quotidien."
        />
        <TestimonialsSection />
      </div>

      <MobileStickyCta />
    </>
  );
};

export default RegionPageLayout;

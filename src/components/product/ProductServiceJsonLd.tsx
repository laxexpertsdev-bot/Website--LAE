import React from 'react';
import { Helmet } from 'react-helmet-async';
import { reviews } from '../../data/reviews';
import { ORIAS, SITE_ORIGIN } from './constants';

interface ProductServiceJsonLdProps {
  /** Nom du service, ex. 'Mutuelle santé'. */
  name: string;
  /** Slug sans slash. */
  slug: string;
  /** Description courte (reprend souvent la meta description). */
  description: string;
}

/**
 * Données structurées schema.org `Service` pour une page produit.
 * Le prestataire est l'Organization déjà déclarée dans index.html.
 * AggregateRating calculé HONNÊTEMENT à partir des avis réels (data/reviews.ts) —
 * omis si aucun avis n'est disponible.
 */
const ProductServiceJsonLd: React.FC<ProductServiceJsonLdProps> = ({ name, slug, description }) => {
  const ratingValue =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.note, 0) / reviews.length).toFixed(1)
      : null;

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: name,
    description,
    url: `${SITE_ORIGIN}/${slug}`,
    areaServed: { '@type': 'Country', name: 'France' },
    provider: {
      '@type': 'InsuranceAgency',
      name: 'Les Assureurs Experts',
      url: SITE_ORIGIN,
      telephone: '+33162171111',
      identifier: `ORIAS ${ORIAS}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '138 Boulevard Haussmann',
        addressLocality: 'Paris',
        postalCode: '75008',
        addressCountry: 'FR',
      },
      ...(ratingValue
        ? {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue,
              reviewCount: reviews.length,
              bestRating: '5',
              worstRating: '1',
            },
          }
        : {}),
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

export default ProductServiceJsonLd;

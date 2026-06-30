import React from 'react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbJsonLdProps {
  /** Nom de la page produit (ex: 'Assurance auto'). */
  name: string;
  /** Slug sans slash (ex: 'assurance-auto'). */
  slug: string;
}

/**
 * Données structurées schema.org BreadcrumbList pour une page produit
 * (Accueil › {name}). Améliore l'affichage du fil d'Ariane dans Google.
 */
const BreadcrumbJsonLd: React.FC<BreadcrumbJsonLdProps> = ({ name, slug }) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lesassureursexperts.fr/' },
      { '@type': 'ListItem', position: 2, name, item: `https://lesassureursexperts.fr/${slug}` },
    ],
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

export default BreadcrumbJsonLd;

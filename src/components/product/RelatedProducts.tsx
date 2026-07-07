import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedProductsProps {
  related: { label: string; slug: string }[];
}

/** Maillage interne : cartes vers d'autres pages produit. */
const RelatedProducts: React.FC<RelatedProductsProps> = ({ related }) => {
  if (related.length === 0) return null;
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">
          Autres assurances qui pourraient vous intéresser
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to={`/${r.slug}`}
              className="group flex items-center justify-between gap-3 rounded-xl border border-hairline p-5 transition-colors hover:border-brand-navy"
            >
              <span className="font-medium text-brand-navy">{r.label}</span>
              <ArrowRight className="h-5 w-5 flex-shrink-0 text-brand-accent transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;

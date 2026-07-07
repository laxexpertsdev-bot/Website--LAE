import React from 'react';

export interface NavAnchor {
  id: string;
  label: string;
}

interface ProductStickyNavProps {
  anchors: NavAnchor[];
}

/**
 * Barre d'ancres sticky sous le hero : navigation intra-page (UX + dwell time + SEO).
 * Sticky sous le header global (top-16). Masquée si moins de 2 ancres.
 */
const ProductStickyNav: React.FC<ProductStickyNavProps> = ({ anchors }) => {
  if (anchors.length < 2) return null;
  return (
    <nav className="sticky top-16 z-30 hidden border-y border-hairline bg-white/90 backdrop-blur md:block">
      <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto px-4 sm:px-6 lg:px-8">
        {anchors.map((a) => (
          <a
            key={a.id}
            href={`#${a.id}`}
            className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-gray-600 transition-colors hover:border-brand-accent hover:text-brand-navy"
          >
            {a.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default ProductStickyNav;

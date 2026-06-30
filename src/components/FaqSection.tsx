import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
}

/**
 * Section FAQ en accordéon + données structurées schema.org FAQPage (rich snippets Google).
 * Le JSON-LD est injecté via react-helmet-async, donc utilisable depuis n'importe quelle page.
 */
const FaqSection: React.FC<FaqSectionProps> = ({ items, title = 'Questions fréquentes' }) => {
  const [open, setOpen] = useState<number | null>(0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="divide-y divide-gray-200">
        {items.map((it, i) => (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-4 text-left"
              aria-expanded={open === i}
            >
              <span className="font-semibold text-gray-900">{it.q}</span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 text-blue-600 transition-transform duration-200 ${
                  open === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            {open === i && <p className="pb-4 -mt-1 text-gray-700 leading-relaxed">{it.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;

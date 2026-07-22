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
  /** Ancre optionnelle (ex. 'faq') pour la sous-nav intra-page. */
  id?: string;
  /** Injecte le JSON-LD FAQPage. Défaut true (comportement existant inchangé) — à mettre
   * à false sur les pages `noindex` qui ne doivent émettre aucune donnée structurée. */
  structuredData?: boolean;
}

/**
 * Section FAQ en accordéon + données structurées schema.org FAQPage (rich snippets Google).
 * Le JSON-LD est injecté via react-helmet-async, donc utilisable depuis n'importe quelle page.
 */
const FaqSection: React.FC<FaqSectionProps> = ({
  items,
  title = 'Questions fréquentes',
  id,
  structuredData = true,
}) => {
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
    <section id={id} className="scroll-mt-28">
      {structuredData && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
      )}
      <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl mb-4">{title}</h2>
      <div className="divide-y divide-hairline border-t border-hairline">
        {items.map((it, i) => (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-4 text-left"
              aria-expanded={open === i}
            >
              <span className="font-semibold text-brand-navy">{it.q}</span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 text-brand-accent transition-transform duration-200 ${
                  open === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            {open === i && <p className="pb-5 -mt-1 text-gray-600 leading-relaxed">{it.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;

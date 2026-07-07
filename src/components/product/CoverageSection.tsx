import React from 'react';
import { Check } from 'lucide-react';
import Section from './Section';

interface CoverageSectionProps {
  title: string;
  intro?: string;
  items: string[];
}

/** Garanties couvertes : grille sobre 2 colonnes, coche monochrome (pas d'aplats pastel). */
const CoverageSection: React.FC<CoverageSectionProps> = ({ title, intro, items }) => (
  <Section id="garanties" title={title} intro={intro}>
    <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 border-b border-hairline pb-4">
          <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy/5">
            <Check className="h-4 w-4 text-brand-navy" />
          </span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </Section>
);

export default CoverageSection;

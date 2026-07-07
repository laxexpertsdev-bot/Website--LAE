import React from 'react';
import Section from './Section';

interface PricingSectionProps {
  title: string;
  intro?: string;
  factors: string[];
  examples: { profile: string; price: string }[];
}

/** Tarifs : facteurs de prix + exemples en cartes sobres bordées. */
const PricingSection: React.FC<PricingSectionProps> = ({ title, intro, factors, examples }) => (
  <Section id="tarifs" title={title} intro={intro}>
    <div className="rounded-xl border border-hairline bg-paper/50 p-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-navy">
        Le tarif dépend de&nbsp;:
      </p>
      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-gray-700">
        {factors.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            {f}
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      {examples.map((ex) => (
        <div key={ex.profile} className="rounded-xl border border-hairline p-5 text-center">
          <p className="font-medium text-gray-500">{ex.profile}</p>
          <p className="mt-1 font-serif text-xl font-semibold text-brand-navy">{ex.price}</p>
        </div>
      ))}
    </div>
  </Section>
);

export default PricingSection;

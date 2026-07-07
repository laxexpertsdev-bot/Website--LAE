import React from 'react';
import { Check } from 'lucide-react';
import Section from './Section';

interface AdvantagesSectionProps {
  title: string;
  items: string[];
}

/** « Pourquoi Les Assureurs Experts » : bloc fort sur fond navy. */
const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ title, items }) => (
  <Section>
    <div className="rounded-2xl bg-brand-navy p-8 text-white sm:p-10">
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-accent" />
            <span className="text-white/90">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default AdvantagesSection;

import React from 'react';
import Section from './Section';

interface StepsSectionProps {
  title: string;
  steps: { title: string; text: string }[];
}

/** « Comment ça marche » : étapes numérotées sobres. */
const StepsSection: React.FC<StepsSectionProps> = ({ title, steps }) => (
  <Section id="etapes" title={title}>
    <ol className="grid gap-6 sm:grid-cols-2">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-brand-navy font-serif font-semibold text-brand-navy">
            {i + 1}
          </span>
          <div>
            <h3 className="font-semibold text-brand-navy">{step.title}</h3>
            <p className="mt-1 text-gray-600">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default StepsSection;

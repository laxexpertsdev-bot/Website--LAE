import React from 'react';
import { Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL } from './constants';

interface CtaBandProps {
  title: string;
  text?: string;
}

/** Bande CTA intermédiaire (fond navy) : 2e point de conversion. */
const CtaBand: React.FC<CtaBandProps> = ({ title, text }) => (
  <section className="bg-brand-navy">
    <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        {text && <p className="mt-2 max-w-2xl text-white/80">{text}</p>}
      </div>
      <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
        <a href="#devis" className="btn-primary text-base">
          Obtenir mon devis gratuit
        </a>
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
        >
          <Phone className="h-5 w-5" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  </section>
);

export default CtaBand;

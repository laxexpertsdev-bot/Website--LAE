import React from 'react';
import type { KeyFigure } from './types';

interface KeyFiguresBandProps {
  figures: KeyFigure[];
}

/** Bande de chiffres-clés sous le hero (fond paper, valeurs en serif). */
const KeyFiguresBand: React.FC<KeyFiguresBandProps> = ({ figures }) => (
  <section className="border-y border-hairline bg-paper">
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
      {figures.map((f) => (
        <div key={f.label} className="text-center sm:text-left">
          <p className="font-serif text-3xl font-semibold text-brand-navy">{f.value}</p>
          <p className="mt-1 text-sm text-gray-600">{f.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default KeyFiguresBand;

import React from 'react';
import { PARTNER_LOGOS } from './constants';

/** Bandeau de logos partenaires (réassurance). Grayscale → couleur au survol, lazy-load. */
const TrustStrip: React.FC = () => (
  <section className="border-y border-hairline bg-white">
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <p className="text-center text-sm font-medium uppercase tracking-wide text-gray-500">
        Nous comparons plus de 20 assureurs partenaires
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
        {PARTNER_LOGOS.map((logo) => (
          <img
            key={logo.src}
            src={logo.src}
            alt={logo.alt}
            loading="lazy"
            decoding="async"
            className="h-8 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-9"
          />
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;

import React from 'react';
import { PARTNERS } from '../data/partners';

interface PartnerCarouselProps {
  title?: string;
  subtitle?: string;
}

/** Bandeau de logos partenaires en défilement continu (marquee). Pause au survol, statique si prefers-reduced-motion. */
const PartnerCarousel: React.FC<PartnerCarouselProps> = ({ title, subtitle }) => (
  <section className="border-y border-hairline bg-white py-10" aria-label="Nos partenaires assureurs">
    {(title || subtitle) && (
      <div className="mx-auto mb-6 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {title && <h3 className="text-xl font-bold text-slate-900">{title}</h3>}
        {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
      </div>
    )}

    <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-10 motion-reduce:gap-y-6">
        {/* Assets normalisés (canvas 320×120 uniforme) : le rendu est identique pour tous. */}
        {[...PARTNERS, ...PARTNERS].map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            className="flex h-10 w-24 shrink-0 items-center justify-center sm:h-12 sm:w-32"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              width={320}
              height={120}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerCarousel;

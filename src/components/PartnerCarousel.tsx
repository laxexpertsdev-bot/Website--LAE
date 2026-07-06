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
        {[...PARTNERS, ...PARTNERS].map((partner, i) => (
          <div key={`${partner.name}-${i}`} className="flex h-9 w-auto shrink-0 items-center">
            <img
              src={partner.logo}
              alt={partner.name}
              loading="lazy"
              decoding="async"
              className="h-8 w-auto object-contain sm:h-9"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnerCarousel;

import React from 'react';
import { Star } from 'lucide-react';
import { reviews } from '../../data/reviews';

/** Avis clients réels (data/reviews.ts) : 3 cartes sobres avec étoiles. */
const TestimonialsSection: React.FC = () => {
  if (reviews.length === 0) return null;
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-brand-navy sm:text-3xl">
          Ils nous ont fait confiance
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <figure
              key={`${r.prenom}-${r.date}`}
              className="flex flex-col rounded-xl border border-hairline bg-white p-6"
            >
              <div className="flex gap-0.5" aria-label={`Note ${r.note} sur 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < r.note ? 'fill-brand-accent text-brand-accent' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-gray-700">“{r.texte}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-brand-navy">
                {r.prenom} {r.nomInitiale}
                {r.lieu && <span className="font-normal text-gray-500"> — {r.lieu}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

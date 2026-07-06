import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ShieldCheck, Users, Clock } from 'lucide-react';
import type { KeyFigure } from './types';
import { PHONE_DISPLAY, PHONE_TEL, ORIAS } from './constants';

interface ProductHeroProps {
  eyebrow: string;
  h1: string;
  intro: string;
  keyFigures?: KeyFigure[];
}

/**
 * Bloc texte du hero (colonne de gauche). Le formulaire flottant occupe la droite
 * (géré par ProductPageLayout). Pas de CTA orange ici : la conversion se fait via le
 * formulaire ; on conserve un CTA téléphone secondaire.
 */
const ProductHero: React.FC<ProductHeroProps> = ({ eyebrow, h1, intro, keyFigures }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-accent">{eyebrow}</p>
    <h1 className="text-4xl font-semibold leading-tight text-brand-navy sm:text-5xl">{h1}</h1>
    <p className="mt-6 max-w-prose text-lg leading-relaxed text-gray-600">{intro}</p>

    <div className="mt-8">
      <a href={`tel:${PHONE_TEL}`} className="btn-secondary text-base">
        <Phone className="h-5 w-5" />
        Parler à un conseiller {PHONE_DISPLAY}
      </a>
    </div>

    <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600">
      <li className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-brand-navy" />
        Courtier agréé ORIAS {ORIAS}
      </li>
      <li className="flex items-center gap-2">
        <Users className="h-4 w-4 text-brand-navy" />
        +2 500 clients accompagnés
      </li>
      <li className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-brand-navy" />
        Réponse sous 24h
      </li>
    </ul>

    {keyFigures && keyFigures.length > 0 && (
      <dl className="mt-8 grid max-w-lg grid-cols-3 gap-6 border-t border-hairline pt-6">
        {keyFigures.map((f) => (
          <div key={f.label}>
            <dt className="font-serif text-2xl font-semibold text-brand-navy">{f.value}</dt>
            <dd className="mt-1 text-xs text-gray-500">{f.label}</dd>
          </div>
        ))}
      </dl>
    )}
  </motion.div>
);

export default ProductHero;

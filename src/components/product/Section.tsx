import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Bloc de contenu standard de la colonne principale : ancre + titre serif + intro,
 * avec une entrée framer-motion discrète au scroll. Filet de séparation sobre.
 */
const Section: React.FC<SectionProps> = ({ id, title, intro, children, className = '' }) => (
  <motion.section
    id={id}
    className={`scroll-mt-28 ${className}`}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    {title && <h2 className="text-2xl font-semibold text-brand-navy sm:text-3xl">{title}</h2>}
    {intro && <p className="mt-3 max-w-prose text-lg leading-relaxed text-gray-600">{intro}</p>}
    <div className={title ? 'mt-6' : ''}>{children}</div>
  </motion.section>
);

export default Section;

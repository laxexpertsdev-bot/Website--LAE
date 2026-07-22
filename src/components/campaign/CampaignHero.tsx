import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Clock, Users, BadgeCheck } from 'lucide-react';
import StepLeadForm from './StepLeadForm';
import type { CampaignLpData } from './types';

interface CampaignHeroProps {
  data: CampaignLpData;
}

/** Icônes de réassurance affectées aux trustBadges, dans l'ordre, en boucle. */
const TRUST_ICONS = [ShieldCheck, Users, Clock, BadgeCheck];

/**
 * Hero « formulaire d'abord » de la landing page de campagne : promesse à gauche,
 * formulaire en 2 étapes à droite (mis en valeur sur 3/5 colonnes en desktop). Sur mobile,
 * le formulaire suit immédiatement le H1/subtitle — les bénéfices et badges de réassurance
 * passent après, pour que le formulaire reste visible sans scroller sur un petit écran.
 */
const CampaignHero: React.FC<CampaignHeroProps> = ({ data }) => (
  <section className="bg-gradient-to-b from-paper to-white">
    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-16">
      <div className="grid gap-3 lg:grid-cols-5 lg:gap-12">
        {/* Colonne promesse */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="lg:col-span-2"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-accentDark">
            {data.hero.eyebrow}
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
            {data.hero.h1}
          </h1>
          {/* Sous-titre masqué sur mobile (< sm) pour que le formulaire suive immédiatement
              le H1 sans scroll — il revient après le formulaire, voir le bloc lg:hidden plus bas. */}
          <p className="mt-5 hidden max-w-prose text-lg leading-relaxed text-gray-600 sm:block">
            {data.hero.subtitle}
          </p>

          {/* Bénéfices + badges — masqués sur mobile, réapparaissent après le formulaire */}
          <ul className="mt-8 hidden space-y-3 lg:block">
            {data.hero.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy/5">
                  <Check className="h-4 w-4 text-brand-navy" />
                </span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-8 hidden flex-wrap gap-x-6 gap-y-3 border-t border-hairline pt-6 text-sm text-gray-600 lg:flex">
            {data.hero.trustBadges.map((badge, i) => {
              const Icon = TRUST_ICONS[i % TRUST_ICONS.length];
              return (
                <li key={badge} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-brand-navy" />
                  {badge}
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Formulaire — mis en valeur, visible sans scroll sur mobile */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="lg:col-span-3"
        >
          {/* pb-24 mobile : réserve la hauteur de la barre CTA sticky (voir CampaignStickyCta)
              pour que celle-ci ne recouvre jamais le bas du formulaire pendant la lecture. */}
          <div className="rounded-2xl border border-hairline bg-white px-6 pb-24 pt-5 shadow-soft sm:p-8 sm:pb-24 md:pb-8">
            <StepLeadForm insuranceType={data.insuranceType} insuranceLabel={data.label} form={data.form} />
          </div>
        </motion.div>

        {/* Sous-titre (repris pour < sm uniquement, déjà visible dès sm dans la colonne promesse)
            + bénéfices/badges — visibles uniquement sur mobile, après le formulaire */}
        <div className="space-y-8 lg:hidden">
          <p className="text-base leading-relaxed text-gray-600 sm:hidden">{data.hero.subtitle}</p>
          <ul className="space-y-3">
            {data.hero.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy/5">
                  <Check className="h-4 w-4 text-brand-navy" />
                </span>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 border-t border-hairline pt-6 text-sm text-gray-600">
            {data.hero.trustBadges.map((badge, i) => {
              const Icon = TRUST_ICONS[i % TRUST_ICONS.length];
              return (
                <li key={badge} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-brand-navy" />
                  {badge}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default CampaignHero;

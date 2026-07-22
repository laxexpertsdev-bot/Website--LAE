import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { ORIAS } from '../product/constants';

/**
 * Header allégé pour les landing pages de campagne (Google Ads) : logo non cliquable
 * (aucune sortie possible depuis la LP), pas de navigation ni de bouton téléphone.
 * Sticky, fond blanc, ombre légère comme le Header principal.
 */
const CampaignHeader: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white shadow-sm">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 sm:py-3 lg:px-8">
      <img
        src="/logo-assureurs-experts.png"
        alt="LES ASSUREURS EXPERTS"
        width="121"
        height="128"
        className="h-10 w-auto object-contain sm:h-14"
      />
      <div className="flex items-center gap-1.5 rounded-full bg-brand-navy/5 px-3 py-1.5 text-xs font-medium text-brand-navy sm:text-sm">
        <ShieldCheck className="h-4 w-4 flex-shrink-0" />
        <span className="whitespace-nowrap">Courtier agréé ORIAS {ORIAS}</span>
      </div>
    </div>
  </header>
);

export default CampaignHeader;

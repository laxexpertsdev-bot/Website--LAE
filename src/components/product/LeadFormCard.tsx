import React from 'react';
import { ShieldCheck, Clock, BadgeCheck } from 'lucide-react';
import ProductLeadForm from '../ProductLeadForm';
import { ORIAS } from './constants';

interface LeadFormCardProps {
  slug: string;
  label: string;
  title: string;
  intro: string;
  submitLabel: string;
}

/**
 * Carte de conversion (ancre #devis) : réassurance + ProductLeadForm réutilisé tel quel
 * (tracking GA4 `generate_lead` préservé). Sticky sur desktop via le layout.
 */
const LeadFormCard: React.FC<LeadFormCardProps> = ({ slug, label, title, intro, submitLabel }) => (
  <div
    id="devis"
    className="scroll-mt-28 rounded-2xl border border-hairline bg-white p-6 shadow-soft sm:p-8"
  >
    <h2 className="text-xl font-semibold text-brand-navy">{title}</h2>
    <p className="mt-2 text-sm text-gray-600">{intro}</p>

    <div className="mt-5">
      <ProductLeadForm insuranceType={slug} insuranceLabel={label} submitLabel={submitLabel} />
    </div>

    <ul className="mt-5 space-y-2 border-t border-hairline pt-5 text-xs text-gray-500">
      <li className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-brand-navy" /> Courtier agréé ORIAS {ORIAS}
      </li>
      <li className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-brand-navy" /> Réponse personnalisée sous 24h
      </li>
      <li className="flex items-center gap-2">
        <BadgeCheck className="h-4 w-4 text-brand-navy" /> Gratuit et sans engagement
      </li>
    </ul>
  </div>
);

export default LeadFormCard;

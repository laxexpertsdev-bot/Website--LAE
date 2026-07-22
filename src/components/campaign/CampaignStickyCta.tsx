import React from 'react';
import { Phone } from 'lucide-react';
import { PHONE_TEL } from '../product/constants';

/**
 * Barre CTA fixe en bas d'écran (mobile uniquement), variante campagne : accès permanent
 * au formulaire + appel direct. Contrat visuel proche de MobileStickyCta, avec une marge
 * élargie (pr-24) pour ne jamais toucher le bouton WhatsApp flottant global, et un libellé
 * volontairement court (une seule ligne même avec le bouton téléphone à côté).
 */
const CampaignStickyCta: React.FC = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-hairline bg-white/95 p-3 pr-24 backdrop-blur md:hidden">
    <a href="#devis" className="btn-primary flex-1 text-sm">
      Comparer
    </a>
    <a
      href={`tel:${PHONE_TEL}`}
      aria-label="Appeler Les Assureurs Experts"
      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-brand-navy text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
    >
      <Phone className="h-5 w-5" />
    </a>
  </div>
);

export default CampaignStickyCta;

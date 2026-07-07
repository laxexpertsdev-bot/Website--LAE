import React from 'react';

/**
 * Barre CTA fixe en bas d'écran (mobile uniquement) : accès permanent au devis.
 * Masquée dès `md` (le formulaire sticky prend le relais sur desktop).
 * Marge à droite (pr-20) pour ne pas passer sous le bouton WhatsApp flottant global.
 */
const MobileStickyCta: React.FC = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-white/95 p-3 pr-20 backdrop-blur md:hidden">
    <a href="#devis" className="btn-primary w-full text-base">
      Obtenir mon devis gratuit
    </a>
  </div>
);

export default MobileStickyCta;

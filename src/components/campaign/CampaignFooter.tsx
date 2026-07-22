import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer minimal pour les landing pages de campagne : uniquement les mentions légales
 * obligatoires, aucun lien vers la home ni vers d'autres pages produit (pas de sortie
 * hors du tunnel de conversion).
 */
const CampaignFooter: React.FC = () => (
  <footer className="border-t border-hairline bg-white">
    <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-gray-500">
        <span className="whitespace-nowrap">ORIAS : 25002995</span>
        <span className="hidden text-gray-300 sm:inline">|</span>
        <span className="whitespace-nowrap">RCS Paris : 940 148 802</span>
        <span className="hidden text-gray-300 sm:inline">|</span>
        <span className="whitespace-nowrap">Courtier en assurance agréé</span>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
        <Link to="/mentions-legales" className="text-gray-500 underline hover:text-brand-navy">
          Mentions légales
        </Link>
        <Link to="/politique-confidentialite" className="text-gray-500 underline hover:text-brand-navy">
          Politique de confidentialité
        </Link>
        <Link to="/conditions-generales" className="text-gray-500 underline hover:text-brand-navy">
          Conditions générales
        </Link>
        <Link to="/gestion-cookies" className="text-gray-500 underline hover:text-brand-navy">
          Gestion des cookies
        </Link>
      </div>

      <p className="mt-4 text-xs text-gray-400">
        © {new Date().getFullYear()} LES ASSUREURS EXPERTS. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default CampaignFooter;

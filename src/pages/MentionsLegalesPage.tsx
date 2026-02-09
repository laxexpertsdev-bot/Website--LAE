import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const MentionsLegalesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Mentions légales</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions légales</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Éditeur du site</h2>
            <p className="mb-6">
              Le présent site web est édité par :
            </p>
            <ul className="mb-6">
              <li><strong>Raison sociale :</strong> LES ASSUREURS EXPERTS</li>
              <li><strong>Forme juridique :</strong> SAS au capital de 1 000€</li>
              <li><strong>Siège social :</strong> 138 Boulevard Haussmann, 75008 Paris</li>
              <li><strong>RCS :</strong> Paris 940 148 802</li>
              <li><strong>ORIAS :</strong> 25002995</li>
              <li><strong>Présidente :</strong> Rebecca ATIA</li>
              <li><strong>Email :</strong> contact@lesassureursexperts.fr</li>
              <li><strong>Téléphone :</strong> 01 62 17 11 11</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hébergement</h2>
            <p className="mb-6">
              Le site est hébergé par un prestataire technique professionnel garantissant 
              la sécurité et la disponibilité des données.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
            <p className="mb-6">
              L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, 
              vidéos, etc.) sont protégés par le droit d'auteur et appartiennent à LES ASSUREURS EXPERTS 
              ou à leurs propriétaires respectifs. Toute reproduction, représentation, modification, 
              publication, adaptation de tout ou partie des éléments du site est interdite, 
              sauf autorisation écrite préalable.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Responsabilité éditoriale</h2>
            <p className="mb-6">
              LES ASSUREURS EXPERTS s'efforce de fournir des informations aussi précises que possible. 
              Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et 
              des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers 
              partenaires qui lui fournissent ces informations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Liens hypertextes</h2>
            <p className="mb-6">
              Le site peut contenir des liens vers d'autres sites web. LES ASSUREURS EXPERTS 
              n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à 
              leur contenu ou à leur politique de confidentialité.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Droit applicable</h2>
            <p className="mb-6">
              Les présentes mentions légales sont régies par le droit français. 
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact</h2>
            <p className="mb-6">
              Pour toute question relative aux présentes mentions légales, 
              vous pouvez nous contacter à l'adresse : contact@lesassureursexperts.fr
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Dernière mise à jour : Janvier 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegalesPage;
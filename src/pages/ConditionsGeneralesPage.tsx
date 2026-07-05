import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ConditionsGeneralesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Conditions Générales | Les Assureurs Experts</title>
        <meta name="description" content="Conditions générales d'utilisation du site Les Assureurs Experts, courtier en assurance agréé ORIAS. Droits, obligations et modalités d'utilisation." />
        <link rel="canonical" href="https://lesassureursexperts.fr/conditions-generales" />
      </Helmet>

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
            <span className="text-gray-900 font-medium">Conditions générales d'utilisation</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions générales d'utilisation</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Objet</h2>
            <p className="mb-6">
              Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation 
              du site web de LES ASSUREURS EXPERTS et définissent les droits et obligations 
              des utilisateurs et de la société.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Acceptation des conditions</h2>
            <p className="mb-6">
              L'utilisation du site implique l'acceptation pleine et entière des présentes CGU. 
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Accès au site</h2>
            <p className="mb-6">
              Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. 
              Tous les frais supportés par l'utilisateur pour accéder au service (matériel informatique, 
              logiciels, connexion Internet, etc.) sont à sa charge.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Utilisation du site</h2>
            <p className="mb-4">L'utilisateur s'engage à :</p>
            <ul className="mb-6">
              <li>Utiliser le site conformément à sa destination et de manière loyale</li>
              <li>Ne pas porter atteinte aux droits de propriété intellectuelle</li>
              <li>Ne pas diffuser de contenu illicite, offensant ou contraire aux bonnes mœurs</li>
              <li>Fournir des informations exactes lors des demandes de devis</li>
              <li>Respecter la confidentialité des informations obtenues</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contenu du site</h2>
            <p className="mb-6">
              LES ASSUREURS EXPERTS s'efforce de fournir des informations précises et à jour. 
              Cependant, elle ne peut garantir l'exactitude, la complétude ou l'actualité 
              des informations diffusées sur le site. Les informations sont données à titre 
              indicatif et ne constituent pas un conseil personnalisé.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation de responsabilité</h2>
            <p className="mb-6">
              LES ASSUREURS EXPERTS ne pourra être tenue responsable des dommages directs 
              ou indirects causés au matériel de l'utilisateur lors de l'accès au site, 
              ou résultant de l'utilisation du site ou de l'impossibilité d'y accéder.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Liens externes</h2>
            <p className="mb-6">
              Le site peut contenir des liens vers d'autres sites web. LES ASSUREURS EXPERTS 
              n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant 
              à leur contenu ou à leur disponibilité.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Propriété intellectuelle</h2>
            <p className="mb-6">
              Tous les éléments du site (textes, images, vidéos, logos, etc.) sont protégés 
              par le droit d'auteur. Toute reproduction ou utilisation sans autorisation 
              préalable est interdite.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Données personnelles</h2>
            <p className="mb-6">
              Le traitement des données personnelles est régi par notre politique de confidentialité, 
              accessible sur le site et conforme au Règlement Général sur la Protection des Données (RGPD).
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Modification des CGU</h2>
            <p className="mb-6">
              LES ASSUREURS EXPERTS se réserve le droit de modifier les présentes CGU à tout moment. 
              Les modifications prennent effet dès leur publication sur le site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Droit applicable et juridiction</h2>
            <p className="mb-6">
              Les présentes CGU sont régies par le droit français. En cas de litige, 
              les tribunaux français seront seuls compétents.
            </p>

            <h2 className="text-2xl font-semibent text-gray-900 mb-4">12. Contact</h2>
            <p className="mb-6">
              Pour toute question relative aux présentes CGU, contactez-nous à : 
              contact@lesassureursexperts.fr
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Dernière mise à jour : Janvier 2025
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ConditionsGeneralesPage;
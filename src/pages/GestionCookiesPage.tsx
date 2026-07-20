import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Cookie, Settings } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { saveCookieConsent } from '../utils/cookieConsent';

const GestionCookiesPage: React.FC = () => {
  const handleAcceptAll = () => {
    saveCookieConsent({
      necessary: true,
      analytics: true,
      marketing: true
    });
    alert('Préférences enregistrées : tous les cookies acceptés');
  };

  const handleRejectAll = () => {
    saveCookieConsent({
      necessary: true,
      analytics: false,
      marketing: false
    });
    alert('Préférences enregistrées : seuls les cookies nécessaires sont acceptés');
  };

  return (
    <>
      <Helmet>
        <title>Gestion des Cookies | Les Assureurs Experts</title>
        <meta name="description" content="Gérez vos préférences de cookies sur le site Les Assureurs Experts : cookies nécessaires, analytiques et marketing. Modifiez vos choix à tout moment." />
        <link rel="canonical" href="https://lesassureursexperts.fr/gestion-cookies" />
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
            <span className="text-gray-900 font-medium">Gestion des cookies</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <Cookie className="w-8 h-8 text-orange-500" />
            <h1 className="text-3xl font-bold text-gray-900">Gestion des cookies</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Qu'est-ce qu'un cookie ?</h2>
            <p className="mb-6">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) 
              lors de la visite d'un site web. Il permet de reconnaître votre navigateur et de mémoriser 
              certaines informations vous concernant ou concernant vos préférences.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Types de cookies utilisés</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-md p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">Cookies nécessaires</h3>
                <p className="text-green-800 mb-3">
                  Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés.
                </p>
                <ul className="text-green-700 text-sm">
                  <li>• Gestion de session et authentification</li>
                  <li>• Mémorisation des préférences de cookies</li>
                  <li>• Sécurité et prévention des fraudes</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-md p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Cookies analytiques</h3>
                <p className="text-blue-800 mb-3">
                  Ces cookies nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                </p>
                <ul className="text-blue-700 text-sm">
                  <li>• Google Analytics (statistiques de visite)</li>
                  <li>• Microsoft Clarity (analyse des parcours et interactions)</li>
                  <li>• Mesure d'audience et de performance</li>
                  <li>• Analyse du comportement utilisateur</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-md p-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">Cookies marketing</h3>
                <p className="text-purple-800 mb-3">
                  Ces cookies permettent de personnaliser les publicités et de mesurer l'efficacité des campagnes.
                </p>
                <ul className="text-purple-700 text-sm">
                  <li>• Publicités ciblées et personnalisées</li>
                  <li>• Suivi des conversions</li>
                  <li>• Réseaux sociaux et partage</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Gérer vos préférences</h2>
            <p className="mb-6">
              Vous pouvez à tout moment modifier vos préférences concernant les cookies. 
              Les cookies nécessaires ne peuvent pas être désactivés car ils sont indispensables 
              au fonctionnement du site.
            </p>

            <div className="bg-gray-50 rounded-md p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Actions rapides</h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAcceptAll}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Accepter tous les cookies
                </button>
                <button
                  onClick={handleRejectAll}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
                >
                  Refuser les cookies non nécessaires
                </button>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Paramètres du navigateur</h2>
            <p className="mb-4">
              Vous pouvez également gérer les cookies directement dans votre navigateur :
            </p>
            <ul className="mb-6">
              <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
              <li><strong>Firefox :</strong> Préférences → Vie privée et sécurité → Cookies</li>
              <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
              <li><strong>Edge :</strong> Paramètres → Cookies et autorisations de site</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Durée de conservation</h2>
            <ul className="mb-6">
              <li><strong>Cookies de session :</strong> supprimés à la fermeture du navigateur</li>
              <li><strong>Cookies persistants :</strong> conservés jusqu'à 13 mois maximum</li>
              <li><strong>Cookies analytiques :</strong> conservés 26 mois (Google Analytics)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="mb-6">
              Pour toute question concernant notre politique de cookies, contactez-nous à : 
              contact@lesassureursexperts.fr
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mt-8">
              <p className="text-yellow-800 text-sm">
                <strong>Note :</strong> La désactivation de certains cookies peut affecter 
                le fonctionnement optimal du site et votre expérience utilisateur.
              </p>
            </div>

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

export default GestionCookiesPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const MentionsLegalesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales | Les Assureurs Experts</title>
        <meta name="description" content="Mentions légales du site Les Assureurs Experts : éditeur, hébergement, immatriculation ORIAS 25002995, contrôle ACPR, médiateur de la consommation, RCS Paris 940 148 802." />
        <link rel="canonical" href="https://lesassureursexperts.fr/mentions-legales" />
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
            <span className="text-gray-900 font-medium">Mentions légales</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
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
              <li><strong>Téléphone :</strong> +33 1 62 17 11 11</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Activité de courtage et autorité de contrôle</h2>
            <p className="mb-6">
              LES ASSUREURS EXPERTS exerce une activité de courtage en assurance. La société est
              immatriculée à l'ORIAS (Organisme pour le registre unique des intermédiaires en
              assurance, banque et finance) sous le numéro <strong>25002995</strong>. Cette
              immatriculation peut être vérifiée sur{' '}
              <a
                href="https://www.orias.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline"
              >
                www.orias.fr
              </a>.
            </p>
            <p className="mb-6">
              L'activité de distribution d'assurances est placée sous le contrôle de l'Autorité
              de contrôle prudentiel et de résolution (ACPR)&nbsp;:
            </p>
            <ul className="mb-6">
              <li><strong>Autorité :</strong> ACPR</li>
              <li><strong>Adresse :</strong> 4 place de Budapest, CS 92459, 75436 Paris Cedex 09</li>
              <li>
                <strong>Site :</strong>{' '}
                <a
                  href="https://acpr.banque-france.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  acpr.banque-france.fr
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Médiateur de la consommation</h2>
            <p className="mb-6">
              Conformément aux articles L. 611-1 et suivants du Code de la consommation, le
              consommateur peut recourir gratuitement à un médiateur de la consommation en vue
              de la résolution amiable d'un litige. Ce recours est possible après une réclamation
              écrite préalable auprès de LES ASSUREURS EXPERTS, restée sans réponse satisfaisante
              dans un délai de deux mois.
            </p>
            <p className="mb-6">
              Coordonnées du médiateur compétent (à compléter par le cabinet — aucun nom n'est
              indiqué tant que ces informations n'ont pas été confirmées)&nbsp;:
            </p>
            <ul className="mb-6">
              <li><strong>Nom du médiateur :</strong> [À COMPLÉTER]</li>
              <li><strong>Adresse postale :</strong> [À COMPLÉTER]</li>
              <li><strong>Site internet :</strong> [À COMPLÉTER]</li>
              <li><strong>E-mail :</strong> [À COMPLÉTER]</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Hébergement</h2>
            <p className="mb-6">
              Le site est hébergé par :
            </p>
            <ul className="mb-6">
              <li><strong>Raison sociale :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Propriété intellectuelle</h2>
            <p className="mb-6">
              L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, 
              vidéos, etc.) sont protégés par le droit d'auteur et appartiennent à LES ASSUREURS EXPERTS 
              ou à leurs propriétaires respectifs. Toute reproduction, représentation, modification, 
              publication, adaptation de tout ou partie des éléments du site est interdite, 
              sauf autorisation écrite préalable.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Responsabilité éditoriale</h2>
            <p className="mb-6">
              LES ASSUREURS EXPERTS s'efforce de fournir des informations aussi précises que possible. 
              Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et 
              des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers 
              partenaires qui lui fournissent ces informations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Liens hypertextes</h2>
            <p className="mb-6">
              Le site peut contenir des liens vers d'autres sites web. LES ASSUREURS EXPERTS 
              n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à 
              leur contenu ou à leur politique de confidentialité.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Droit applicable</h2>
            <p className="mb-6">
              Les présentes mentions légales sont régies par le droit français. 
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact</h2>
            <p className="mb-6">
              Pour toute question relative aux présentes mentions légales, 
              vous pouvez nous contacter à l'adresse : contact@lesassureursexperts.fr
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Dernière mise à jour : Octobre 2026
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MentionsLegalesPage;
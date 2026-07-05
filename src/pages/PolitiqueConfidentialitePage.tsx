import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PolitiqueConfidentialitePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | Les Assureurs Experts</title>
        <meta name="description" content="Politique de confidentialité de Les Assureurs Experts : collecte, traitement et protection de vos données personnelles conformément au RGPD." />
        <link rel="canonical" href="https://lesassureursexperts.fr/politique-confidentialite" />
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
            <span className="text-gray-900 font-medium">Politique de confidentialité</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Responsable du traitement</h2>
            <p className="mb-6">
              LES ASSUREURS EXPERTS, SAS au capital de 1 000€, dont le siège social est situé 
              138 Boulevard Haussmann, 75008 Paris, RCS Paris 940 148 802, est responsable 
              du traitement de vos données personnelles.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Données collectées</h2>
            <p className="mb-4">Nous collectons les données suivantes :</p>
            <ul className="mb-6">
              <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
              <li><strong>Données de navigation :</strong> adresse IP, cookies, pages visitées</li>
              <li><strong>Données contractuelles :</strong> informations relatives à vos demandes de devis et contrats</li>
              <li><strong>Données de communication :</strong> échanges par email, téléphone ou formulaires</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Finalités du traitement</h2>
            <p className="mb-4">Vos données sont traitées pour :</p>
            <ul className="mb-6">
              <li>Répondre à vos demandes de devis et vous proposer des solutions d'assurance</li>
              <li>Gérer la relation client et le suivi des contrats</li>
              <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
              <li>Améliorer nos services et notre site web</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Base légale</h2>
            <p className="mb-6">
              Le traitement de vos données repose sur votre consentement, l'exécution d'un contrat, 
              le respect d'une obligation légale ou notre intérêt légitime à développer notre activité.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Destinataires</h2>
            <p className="mb-6">
              Vos données peuvent être transmises à nos partenaires assureurs dans le cadre de 
              l'établissement de devis, ainsi qu'à nos prestataires techniques (hébergement, 
              maintenance) dans le strict respect de la confidentialité.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Durée de conservation</h2>
            <ul className="mb-6">
              <li><strong>Prospects :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Clients :</strong> 10 ans à compter de la fin du contrat</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Vos droits</h2>
            <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="mb-6">
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> supprimer vos données dans certains cas</li>
              <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement pour motif légitime</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Exercice de vos droits</h2>
            <p className="mb-6">
              Pour exercer vos droits, contactez-nous à : contact@lesassureursexperts.fr 
              en précisant votre demande et en joignant une copie de votre pièce d'identité.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Réclamation</h2>
            <p className="mb-6">
              Vous avez le droit d'introduire une réclamation auprès de la CNIL 
              (Commission Nationale de l'Informatique et des Libertés) si vous estimez 
              que le traitement de vos données ne respecte pas la réglementation.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Sécurité</h2>
            <p className="mb-6">
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles 
              appropriées pour protéger vos données contre la perte, l'utilisation abusive, 
              l'accès non autorisé, la divulgation, l'altération ou la destruction.
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

export default PolitiqueConfidentialitePage;
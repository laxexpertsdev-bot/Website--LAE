import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, CheckCircle, Calculator, Phone, ArrowRight, Home, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ProductLeadForm from '../components/ProductLeadForm';
import FaqSection, { FaqItem } from '../components/FaqSection';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';

const faqItems: FaqItem[] = [
  { q: "Le permis est-il obligatoire pour assurer un 2 roues ?", a: "Pour un scooter 50 cm³, le BSR / permis AM suffit. Au-delà, le permis correspondant (A1, A2 ou A) est requis. Nous adaptons l'offre à votre situation." },
  { q: "Mon équipement (casque, blouson) est-il couvert ?", a: "Certaines formules incluent une garantie « équipement du pilote ». Nous vous indiquons les contrats qui couvrent casque et vêtements de protection." },
  { q: "Puis-je n'assurer ma moto qu'au tiers ?", a: "Oui, la responsabilité civile (au tiers) est le minimum légal. Vous pouvez ajouter vol, incendie et dommages selon la valeur de votre véhicule." },
  { q: "Existe-t-il une formule hivernage / petit rouleur ?", a: "Oui. Des formules adaptées réduisent la cotisation lorsque la moto roule peu ou est remisée l'hiver. Demandez-nous une simulation." },
  { q: "Les jeunes conducteurs 2 roues sont-ils acceptés ?", a: "Oui. Nous comparons les assureurs acceptant les jeunes conducteurs et les profils récents, avec des tarifs adaptés." },
];

const Assurance2RouesPage: React.FC = () => {
  const coverageItems = [
    "Responsabilité civile (obligatoire)",
    "Vol et tentative de vol",
    "Incendie et explosion",
    "Dommages tous accidents",
    "Équipements et accessoires",
    "Assistance dépannage"
  ];

  const vehicleTypes = [
    { type: "Scooter 50cc", specificity: "Dès 12€/mois, sans permis" },
    { type: "Moto 125cc", specificity: "Formation A1 incluse" },
    { type: "Moto grosse cylindrée", specificity: "Garanties renforcées" },
    { type: "Vélo électrique", specificity: "Vol et assistance spécialisée" },
    { type: "Quad/Tricycle", specificity: "Usage loisir ou utilitaire" }
  ];

  const priceExamples = [
    { profile: "Scooter 50cc au tiers", price: "à partir de 12 €/mois" },
    { profile: "Moto 125cc tous risques", price: "35–60 €/mois" },
    { profile: "Grosse cylindrée", price: "80–150 €/mois selon puissance" }
  ];

  const advantages = [
    "Spécialistes des 2 roues depuis 15 ans",
    "Équipements assurés en option",
    "Assistance 24h/24 spécialisée",
    "Réparation chez concessionnaire agréé",
    "Prêt de véhicule de remplacement"
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Moto & Scooter dès 12€/mois | Les Assureurs Experts</title>
        <meta name="description" content="Assurez votre moto, scooter ou 125 au meilleur prix : responsabilité civile, vol, équipements. Devis 2 roues gratuit sous 24h, courtier ORIAS agréé." />
        <link rel="canonical" href="https://lesassureursexperts.fr/assurance-2-roues" />
      </Helmet>
      <BreadcrumbJsonLd name="Assurance 2 roues" slug="assurance-2-roues" />
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Assurance 2 roues</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Bike className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Assurance 2 roues : roulez libre et protégé
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Scooter, moto, vélo électrique : trouvez l'assurance 2 roues adaptée à votre véhicule 
              et votre usage. Protection complète, tarifs compétitifs et assistance spécialisée 
              pour tous les passionnés de mobilité urbaine et de liberté.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">Dès 12€/mois</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="font-semibold">Sans frais de dossier</span>
              </div>
              <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-purple-600" />
                <span className="font-semibold">Équipements assurés</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Coverage Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Bike className="w-8 h-8 text-green-600" />
                Que couvre une assurance 2 roues ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Votre assurance 2 roues peut inclure :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-md">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Vehicle Types Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pour quel type de véhicule ?
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Véhicule</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Spécificité</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vehicleTypes.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-gray-900 border-b">{item.type}</td>
                        <td className="p-4 text-gray-700 border-b">{item.specificity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                Combien coûte une assurance 2 roues ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">Le tarif dépend de :</p>
              
              <ul className="space-y-2 mb-8">
                {["la cylindrée de votre véhicule", "votre âge et expérience", "votre lieu de stationnement", "les garanties choisies"].map((factor, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{factor}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exemples de tarifs :</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                {priceExamples.map((example, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-md text-center">
                    <p className="font-semibold text-gray-900">{example.profile}</p>
                    <p className="text-green-700 font-bold">{example.price}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">
                Pourquoi choisir Les Assureurs Experts ?
              </h2>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-200 mt-0.5" />
                    <span className="text-green-50 font-medium">{advantage}</span>
                  </div>
                ))}
              </div>
            </section>
            {/* FAQ */}
            <FaqSection items={faqItems} title="Assurance 2 roues : vos questions fréquentes" />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 text-green-600" />
                Devis 2 roues gratuit
              </h3>
              
              <p className="text-gray-600 mb-6">
                Obtenez votre tarif en 2 minutes.
              </p>
              
              <ProductLeadForm insuranceType="assurance-2-roues" insuranceLabel="Assurance 2 roues" />
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Autres assurances</h4>
              <div className="space-y-3">
                <Link to="/assurance-auto" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Assurance auto
                </Link>
                <Link to="/mutuelle-sante" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Mutuelle santé
                </Link>
                <Link to="/prevoyance" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Prévoyance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Assurance2RouesPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { Car, CheckCircle, Calculator, Phone, ArrowRight, Home, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ProductLeadForm from '../components/ProductLeadForm';
import FaqSection, { FaqItem } from '../components/FaqSection';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';

const AssuranceAutoPage: React.FC = () => {
  const faqItems: FaqItem[] = [
    { q: "Quels documents pour assurer ma voiture ?", a: "Votre permis de conduire, la carte grise du véhicule et votre relevé d'information (bonus-malus) de votre assureur précédent. Nous nous occupons du reste." },
    { q: "Puis-je assurer un jeune conducteur sans surcoût excessif ?", a: "Oui. Nous comparons les assureurs qui proposent des tarifs adaptés aux jeunes conducteurs et à la conduite accompagnée, pour limiter la surprime." },
    { q: "Quelle différence entre au tiers et tous risques ?", a: "L'assurance au tiers couvre les dommages causés à autrui (responsabilité civile, obligatoire). La formule tous risques couvre aussi vos propres dommages, même en cas d'accident responsable." },
    { q: "Combien de temps pour être assuré et recevoir ma carte verte ?", a: "Une fois votre devis validé, l'attestation provisoire peut être émise le jour même. La carte verte définitive vous est ensuite transmise par l'assureur." },
    { q: "Puis-je changer d'assurance auto en cours d'année ?", a: "Oui. Grâce à la loi Hamon, vous pouvez résilier votre contrat à tout moment après un an d'engagement, et nous gérons les démarches de résiliation pour vous." },
  ];
  const coverageItems = [
    "Responsabilité civile (obligatoire)",
    "Dommages tous accidents",
    "Vol et tentative de vol",
    "Incendie et explosion",
    "Bris de glace",
    "Assistance 0 km"
  ];

  const driverTypes = [
    { type: "Jeune conducteur", specificity: "Tarifs adaptés, formation incluse" },
    { type: "Conducteur expérimenté", specificity: "Bonus-malus avantageux" },
    { type: "Senior", specificity: "Réductions spéciales +50 ans" },
    { type: "Conducteur occasionnel", specificity: "Formules petit rouleur" },
    { type: "Flotte d'entreprise", specificity: "Tarifs dégressifs" }
  ];

  const priceExamples = [
    { profile: "Citadine au tiers", price: "à partir de 25 €/mois" },
    { profile: "Berline tous risques", price: "65–120 €/mois" },
    { profile: "SUV premium", price: "120–200 €/mois selon garanties" }
  ];

  const advantages = [
    "Comparaison de +15 assureurs partenaires",
    "Devis personnalisé en 5 minutes",
    "Assistance 24h/24 incluse",
    "Gestion des sinistres simplifiée",
    "Réduction famille nombreuse possible"
  ];

  return (
    <>
      <Helmet>
        <title>Devis Assurance Auto Expert et Rapide | Les Assureurs Experts</title>
        <meta name="description" content="Obtenez votre devis assurance auto personnalisé en 2 minutes. Courtier ORIAS, tarifs négociés, jeunes conducteurs acceptés. Économisez jusqu'à 30% !" />
        <link rel="canonical" href="https://lesassureursexperts.fr/assurance-auto" />
      </Helmet>
      <BreadcrumbJsonLd name="Assurance auto" slug="assurance-auto" />

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
            <span className="text-gray-900 font-medium">Assurance auto</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Car className="w-16 h-16 text-orange-500" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Assurance auto : roulez protégé au meilleur prix
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Trouvez l'assurance auto qui correspond à votre véhicule, votre usage et votre budget. 
              Du tiers économique aux garanties tous risques, nous comparons les meilleures offres 
              pour vous faire économiser jusqu'à 30% sur votre prime annuelle.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-orange-600" />
                <span className="font-semibold">Jeunes conducteurs acceptés</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">Véhicules électriques</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="font-semibold">Assistance 0 km</span>
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
                <Car className="w-8 h-8 text-orange-500" />
                Que couvre une assurance auto ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Selon vos besoins, votre assurance auto peut inclure :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-md">
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Driver Types Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pour quel type de conducteur ?
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Profil</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Avantages</th>
                    </tr>
                  </thead>
                  <tbody>
                    {driverTypes.map((item, index) => (
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
                Combien coûte une assurance auto ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">Le tarif dépend de :</p>
              
              <ul className="space-y-2 mb-8">
                {["votre âge et expérience", "votre véhicule (puissance, valeur)", "votre usage (km/an, garage)", "votre historique (bonus-malus)"].map((factor, index) => (
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
            <section className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">
                Pourquoi choisir Les Assureurs Experts ?
              </h2>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-200 mt-0.5" />
                    <span className="text-orange-50 font-medium">{advantage}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <FaqSection items={faqItems} title="Assurance auto : vos questions fréquentes" />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 text-orange-500" />
                Devis auto gratuit
              </h3>
              
              <p className="text-gray-600 mb-6">
                Obtenez votre tarif personnalisé en 2 minutes.
              </p>
              
              <ProductLeadForm insuranceType="assurance-auto" insuranceLabel="Assurance auto" />
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Autres assurances</h4>
              <div className="space-y-3">
                <Link to="/assurance-2-roues" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Assurance 2 roues
                </Link>
                <Link to="/mutuelle-sante" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Mutuelle santé
                </Link>
                <Link to="/assurance-emprunteur" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Assurance emprunteur
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

export default AssuranceAutoPage;
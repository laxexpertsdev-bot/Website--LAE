import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, CheckCircle, Calculator, Phone, ArrowRight, Home, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ExpatriesPage: React.FC = () => {
  const coverageItems = [
    "Soins médicaux et hospitalisation",
    "Maternité et pédiatrie",
    "Rapatriement sanitaire",
    "Évacuation médicale",
    "Assistance 24h/24 multilingue",
    "Responsabilité civile à l'étranger"
  ];

  const expatProfiles = [
    { profile: "Étudiant à l'étranger", specificity: "Tarifs étudiants, visa accepté" },
    { profile: "Expatrié salarié", specificity: "Complément employeur possible" },
    { profile: "Digital nomad", specificity: "Couverture mondiale flexible" },
    { profile: "Retraité expatrié", specificity: "Garanties seniors renforcées" },
    { profile: "Famille expatriée", specificity: "Pack famille avec enfants" }
  ];

  const zoneExamples = [
    { zone: "Europe", price: "à partir de 35 €/mois" },
    { zone: "Monde sans USA", price: "60–120 €/mois" },
    { zone: "Monde entier", price: "120–250 €/mois" }
  ];

  const advantages = [
    "Couverture dans +150 pays",
    "Réseau médical international",
    "Assistance rapatriement incluse",
    "Téléconsultation depuis l'étranger",
    "Prise en charge directe possible"
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Santé Expatriés : +150 Pays | Les Assureurs Experts</title>
        <meta name="description" content="Assurance santé internationale pour expatriés, étudiants et digital nomads : hospitalisation, maternité, évacuation. Couverture dans plus de 150 pays." />
        <link rel="canonical" href="https://lesassureursexperts.fr/expatries" />
      </Helmet>
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
            <span className="text-gray-900 font-medium">Expatriés</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Plane className="w-16 h-16 text-purple-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Assurance expatriés : votre santé protégée partout dans le monde
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Vous vivez, travaillez ou étudiez à l'étranger ? Nos assurances santé internationales 
              vous couvrent dans plus de 150 pays avec une assistance 24h/24 et un réseau médical 
              de qualité. Solutions adaptées aux étudiants, expatriés, digital nomads et retraités.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-purple-600" />
                <span className="font-semibold">Valable pour visa</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="font-semibold">Tarifs selon zones</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">Réseau médical direct</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Coverage Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Plane className="w-8 h-8 text-purple-600" />
                Que couvre une assurance expatrié ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Votre assurance santé internationale peut inclure :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Expat Profiles Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pour quel profil d'expatrié ?
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Profil</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Spécificité</th>
                    </tr>
                  </thead>
                  <tbody>
                    {expatProfiles.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-gray-900 border-b">{item.profile}</td>
                        <td className="p-4 text-gray-700 border-b">{item.specificity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Zones Coverage Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Zones géographiques couvertes
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">🇪🇺 Zone Europe</h3>
                  <p className="text-blue-800 text-sm mb-3">
                    Union européenne + Suisse, Norvège, Islande. 
                    Idéal pour études ou travail en Europe.
                  </p>
                  <p className="text-blue-700 font-bold">Dès 35€/mois</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">🌍 Monde sans USA</h3>
                  <p className="text-green-800 text-sm mb-3">
                    Couverture mondiale excepté États-Unis et Canada. 
                    Parfait pour l'Asie, Afrique, Amérique du Sud.
                  </p>
                  <p className="text-green-700 font-bold">60-120€/mois</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">🌎 Monde entier</h3>
                  <p className="text-purple-800 text-sm mb-3">
                    Couverture complète incluant États-Unis et Canada. 
                    Pour les grands voyageurs et expatriés USA.
                  </p>
                  <p className="text-purple-700 font-bold">120-250€/mois</p>
                </div>
              </div>
            </section>

            {/* Why Important Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi une assurance expatrié est-elle indispensable ?
              </h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                <h3 className="font-semibold text-red-900 mb-3">⚠️ Attention !</h3>
                <p className="text-red-800">
                  La Sécurité sociale française ne couvre pas ou très peu les soins à l'étranger. 
                  Une hospitalisation aux États-Unis peut coûter plusieurs dizaines de milliers d'euros.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Obligation pour obtenir certains visas",
                  "Coûts médicaux très élevés à l'étranger",
                  "Rapatriement sanitaire (jusqu'à 100 000€)",
                  "Assistance en langue française 24h/24"
                ].map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-purple-600 mt-0.5" />
                    <span className="text-gray-800 font-medium">{reason}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                Combien coûte une assurance expatrié ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">Le tarif dépend de :</p>
              
              <ul className="space-y-2 mb-8">
                {["votre âge", "la zone géographique", "le niveau de garanties", "la durée du séjour"].map((factor, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{factor}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📌 Exemples par zone :</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                {zoneExamples.map((example, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="font-semibold text-gray-900">{example.zone}</p>
                    <p className="text-green-700 font-bold">{example.price}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">
                Pourquoi choisir Les Assureurs Experts ?
              </h2>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-200 mt-0.5" />
                    <span className="text-purple-50 font-medium">{advantage}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 text-purple-600" />
                Devis expatrié gratuit
              </h3>
              
              <p className="text-gray-600 mb-6">
                Obtenez votre tarif en 2 minutes.
              </p>
              
              <form
                action="https://formspree.io/f/mblnydqy"
                method="POST"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="fullName"
                  placeholder="Prénom et Nom"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  required
                />
                <select 
                  name="insuranceType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  <option value="expatries">Assurance expatriés</option>
                </select>
                
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    name="consent"
                    className="w-5 h-5 text-purple-500 mt-0.5" 
                    required 
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    J'accepte d'être contacté par Les Assureurs Experts.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Obtenir mon devis
                </button>
              </form>
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Autres assurances</h4>
              <div className="space-y-3">
                <Link to="/mutuelle-sante" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Mutuelle santé
                </Link>
                <Link to="/prevoyance" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Prévoyance
                </Link>
                <Link to="/assurance-auto" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Assurance auto
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

export default ExpatriesPage;
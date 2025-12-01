import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, CheckCircle, Calculator, Phone, ArrowRight, Home, ChevronRight } from 'lucide-react';

const AssuranceBateauPage: React.FC = () => {
  const coverageItems = [
    "Responsabilité civile navigation",
    "Corps de navire (coque, moteur)",
    "Vol et vandalisme",
    "Avaries particulières",
    "Assistance et remorquage",
    "Équipements et accessoires"
  ];

  const boatTypes = [
    { type: "Voilier", specificity: "Navigation côtière ou hauturière" },
    { type: "Bateau à moteur", specificity: "Plaisance ou pêche" },
    { type: "Jet-ski", specificity: "Sports nautiques" },
    { type: "Yacht", specificity: "Navigation de luxe" },
    { type: "Bateau de pêche", specificity: "Usage professionnel ou loisir" }
  ];

  const priceExamples = [
    { profile: "Voilier 8m côtier", price: "à partir de 180 €/an" },
    { profile: "Bateau moteur 10m", price: "300–600 €/an" },
    { profile: "Yacht +15m", price: "800–2000 €/an selon valeur" }
  ];

  const advantages = [
    "Spécialistes nautiques depuis 20 ans",
    "Couverture mondiale possible",
    "Assistance maritime 24h/24",
    "Réparation en chantier agréé",
    "Extension compétition et événements"
  ];

  return (
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
            <span className="text-gray-900 font-medium">Assurance bateau</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Anchor className="w-16 h-16 text-indigo-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Assurance bateau : naviguez en toute sérénité
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Voilier, bateau à moteur, jet-ski : protégez votre embarcation et naviguez l'esprit tranquille. 
              Nos assurances bateau couvrent tous les risques de la navigation, du mouillage aux tempêtes, 
              avec une assistance maritime spécialisée disponible 24h/24.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-indigo-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
                <span className="font-semibold">Skipper pro ou plaisancier</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="font-semibold">Extension compétitions</span>
              </div>
              <div className="flex items-center gap-3 bg-cyan-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-cyan-600" />
                <span className="font-semibold">Déclaration en ligne</span>
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
                <Anchor className="w-8 h-8 text-indigo-600" />
                Que couvre une assurance bateau ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Votre assurance bateau peut inclure :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Boat Types Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pour quel type d'embarcation ?
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Type de bateau</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {boatTypes.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-gray-900 border-b">{item.type}</td>
                        <td className="p-4 text-gray-700 border-b">{item.specificity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Navigation Zones Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Zones de navigation couvertes
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">🏖️ Navigation côtière</h3>
                  <p className="text-blue-800 text-sm">
                    Jusqu'à 6 milles des côtes françaises et européennes. 
                    Idéal pour la plaisance familiale et les sorties journalières.
                  </p>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-indigo-900 mb-3">🌊 Navigation hauturière</h3>
                  <p className="text-indigo-800 text-sm">
                    Navigation sans limite de distance. Pour les grands voyages 
                    et la navigation océanique avec extension mondiale possible.
                  </p>
                </div>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                Combien coûte une assurance bateau ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">Le tarif dépend de :</p>
              
              <ul className="space-y-2 mb-8">
                {["la valeur et l'âge de votre bateau", "la zone de navigation", "votre expérience de skipper", "les garanties choisies"].map((factor, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{factor}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📌 Exemples de tarifs :</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                {priceExamples.map((example, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="font-semibold text-gray-900">{example.profile}</p>
                    <p className="text-green-700 font-bold">{example.price}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">
                Pourquoi choisir Les Assureurs Experts ?
              </h2>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-indigo-200 mt-0.5" />
                    <span className="text-indigo-50 font-medium">{advantage}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 text-indigo-600" />
                Devis bateau gratuit
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
                <select 
                  name="insuranceType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="assurance-bateau">Assurance bateau</option>
                </select>
                
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    name="consent"
                    className="w-5 h-5 text-indigo-500 mt-0.5" 
                    required 
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    J'accepte d'être contacté par Les Assureurs Experts.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
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
                <Link to="/assurance-auto" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Assurance auto
                </Link>
                <Link to="/assurance-2-roues" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Assurance 2 roues
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
  );
};

export default AssuranceBateauPage;
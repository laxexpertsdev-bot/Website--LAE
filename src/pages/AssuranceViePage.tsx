import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Calculator, Phone, ArrowRight, Home, ChevronRight } from 'lucide-react';

const AssuranceViePage: React.FC = () => {
  const coverageItems = [
    "Fonds euros sécurisés (capital garanti)",
    "Unités de compte (potentiel de rendement)",
    "Gestion libre ou sous mandat",
    "Versements libres ou programmés",
    "Rachats partiels ou totaux possibles",
    "Transmission optimisée aux bénéficiaires"
  ];

  const targetProfiles = [
    { profile: "Épargnant prudent", specificity: "Fonds euros 100% sécurisés" },
    { profile: "Investisseur dynamique", specificity: "Unités de compte diversifiées" },
    { profile: "Préparation retraite", specificity: "Rente viagère possible" },
    { profile: "Transmission patrimoine", specificity: "Abattement 152 500€ par bénéficiaire" },
    { profile: "Optimisation fiscale", specificity: "Fiscalité douce après 8 ans" }
  ];

  const fiscalExamples = [
    { duration: "Moins de 4 ans", taxation: "Prélèvements sociaux + IR ou PFU 30%" },
    { duration: "4 à 8 ans", taxation: "Prélèvements sociaux + IR ou PFU 30%" },
    { duration: "Plus de 8 ans", taxation: "Abattement 4 600€ (9 200€ couple) + 7,5%" }
  ];

  const advantages = [
    "Placement préféré des Français",
    "Liquidité : rachats à tout moment",
    "Fiscalité progressive avantageuse",
    "Transmission sans droits de succession",
    "Diversification fonds euros + UC"
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
            <span className="text-gray-900 font-medium">Assurance vie</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-rose-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Assurance vie : le placement incontournable des Français
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              L'assurance vie reste le placement préféré des Français grâce à sa souplesse, 
              sa fiscalité avantageuse et ses possibilités de transmission. Faites fructifier 
              votre épargne avec des rendements supérieurs au Livret A tout en préparant 
              l'avenir de vos proches.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-rose-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-rose-600" />
                <span className="font-semibold">Fonds euros + UC</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">Fiscalité allégée après 8 ans</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="font-semibold">Transmission facilitée</span>
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
                <Shield className="w-8 h-8 text-rose-600" />
                Que propose une assurance vie ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                L'assurance vie moderne offre de nombreuses possibilités :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-rose-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Target Profiles Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pour quel objectif ?
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Profil</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Solution adaptée</th>
                    </tr>
                  </thead>
                  <tbody>
                    {targetProfiles.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-gray-900 border-b">{item.profile}</td>
                        <td className="p-4 text-gray-700 border-b">{item.specificity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Fonds Types Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Fonds euros vs Unités de compte
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">💰 Fonds euros</h3>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Capital 100% garanti</li>
                    <li>• Rendement annuel (1,5% à 3%)</li>
                    <li>• Aucun risque de perte</li>
                    <li>• Idéal pour sécuriser une partie</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">📈 Unités de compte</h3>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>• Potentiel de rendement élevé</li>
                    <li>• Diversification (actions, obligations, immobilier)</li>
                    <li>• Risque de perte en capital</li>
                    <li>• Horizon de placement long terme</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Fiscal Advantages Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                Fiscalité de l'assurance vie
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                La fiscalité dépend de la durée de détention :
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Durée</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Fiscalité sur les gains</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fiscalExamples.map((example, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-gray-900 border-b">{example.duration}</td>
                        <td className="p-4 text-gray-700 border-b">{example.taxation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mt-6">
                <h3 className="font-semibold text-green-900 mb-3">🎯 Avantage après 8 ans</h3>
                <p className="text-green-800">
                  Après 8 ans, vous bénéficiez d'un abattement annuel de 4 600€ (9 200€ pour un couple) 
                  sur les gains, puis seulement 7,5% d'imposition au lieu de 30% !
                </p>
              </div>
            </section>

            {/* Transmission Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transmission et succession
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="font-semibold text-blue-900 mb-3">🏛️ Hors succession</h3>
                <p className="text-blue-800">
                  L'assurance vie est transmise directement aux bénéficiaires désignés, 
                  hors succession, avec des abattements fiscaux très avantageux.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-800">
                    <strong>152 500€ d'abattement</strong> par bénéficiaire (versements avant 70 ans)
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-800">
                    <strong>Clause bénéficiaire modifiable</strong> à tout moment
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-800">
                    <strong>Protection du conjoint</strong> avec clause au dernier vivant
                  </span>
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">
                Pourquoi choisir Les Assureurs Experts ?
              </h2>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-rose-200 mt-0.5" />
                    <span className="text-rose-50 font-medium">{advantage}</span>
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
                <Phone className="w-6 h-6 text-rose-600" />
                Simulation assurance vie
              </h3>
              
              <p className="text-gray-600 mb-6">
                Découvrez le potentiel de votre épargne.
              </p>
              
              <form className="space-y-4">
              <form
                action="https://formspree.io/f/mblnydqy"
                method="POST"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="fullName"
                  placeholder="Prénom et Nom"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                  required
                />
                <input
                  type="number"
                  name="investmentAmount"
                  placeholder="Montant à placer (€)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                />
                <select 
                  name="insuranceType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500"
                >
                  <option value="assurance-vie">Assurance vie</option>
                </select>
                
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    name="consent"
                    className="w-5 h-5 text-rose-500 mt-0.5" 
                    required 
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    J'accepte d'être contacté par Les Assureurs Experts.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Simuler mon placement
                </button>
              </form>
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Autres placements</h4>
              <div className="space-y-3">
                <Link to="/per" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Plan Épargne Retraite (PER)
                </Link>
                <Link to="/prevoyance" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Prévoyance
                </Link>
                <Link to="/mutuelle-sante" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Mutuelle santé
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssuranceViePage;
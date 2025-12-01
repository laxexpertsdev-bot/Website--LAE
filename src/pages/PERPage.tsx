import React from 'react';
import { Link } from 'react-router-dom';
import { PiggyBank, CheckCircle, Calculator, Phone, ArrowRight, Home, ChevronRight } from 'lucide-react';

const PERPage: React.FC = () => {
  const coverageItems = [
    "Déduction fiscale jusqu'à 10% des revenus",
    "Sortie en capital ou rente viagère",
    "Transfert possible vers un autre PER",
    "Déblocage anticipé (achat résidence principale)",
    "Transmission avantageuse aux héritiers",
    "Gestion libre ou pilotée"
  ];

  const targetProfiles = [
    { profile: "Salarié", specificity: "Complément retraite obligatoire" },
    { profile: "Indépendant/TNS", specificity: "Optimisation fiscale maximale" },
    { profile: "Chef d'entreprise", specificity: "Réduction IR + IS possible" },
    { profile: "Cadre dirigeant", specificity: "Plafonds de déduction élevés" },
    { profile: "Jeune actif", specificity: "Effet de capitalisation long terme" }
  ];

  const fiscalExamples = [
    { income: "30 000€ de revenus", saving: "jusqu'à 1 020€ d'impôt économisé" },
    { income: "50 000€ de revenus", saving: "jusqu'à 1 700€ d'impôt économisé" },
    { income: "80 000€ de revenus", saving: "jusqu'à 2 720€ d'impôt économisé" }
  ];

  const advantages = [
    "Déduction fiscale immédiate",
    "Capitalisation sur le long terme",
    "Souplesse de versements",
    "Transmission optimisée",
    "Déblocage anticipé possible"
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
            <span className="text-gray-900 font-medium">Plan Épargne Retraite (PER)</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <PiggyBank className="w-16 h-16 text-amber-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            PER : préparez votre retraite en réduisant vos impôts
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Le Plan Épargne Retraite (PER) vous permet de constituer un complément de retraite 
              tout en bénéficiant d'avantages fiscaux immédiats. Déductibilité des versements, 
              capitalisation long terme et transmission optimisée : le PER est l'outil incontournable 
              pour préparer sereinement votre avenir.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-amber-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-amber-600" />
                <span className="font-semibold">Déduction jusqu'à 10%</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">Sortie capital ou rente</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="font-semibold">Sans frais cachés</span>
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
                <PiggyBank className="w-8 h-8 text-amber-600" />
                Quels sont les avantages du PER ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Le Plan Épargne Retraite offre de nombreux avantages :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Target Profiles Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pour qui est-ce intéressant ?
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Profil</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Avantage spécifique</th>
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

            {/* Fiscal Advantages Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Avantages fiscaux du PER
              </h2>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
                <h3 className="font-semibold text-green-900 mb-3">💰 Déduction fiscale immédiate</h3>
                <p className="text-green-800">
                  Vos versements sur un PER sont déductibles de vos revenus imposables, 
                  dans la limite de 10% de vos revenus professionnels (avec plafond).
                </p>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📌 Exemples d'économies d'impôt :</h3>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {fiscalExamples.map((example, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="font-semibold text-gray-900">{example.income}</p>
                    <p className="text-green-700 font-bold text-sm">{example.saving}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">🔄 Fiscalité à la sortie</h4>
                <p className="text-blue-800 text-sm">
                  À la retraite, seule la part correspondant aux versements déductibles sera imposée. 
                  Les plus-values sont exonérées d'impôt sur le revenu (mais soumises aux prélèvements sociaux).
                </p>
              </div>
            </section>

            {/* How it Works Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Comment fonctionne le PER ?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Versements libres</h3>
                    <p className="text-gray-700">Versez quand vous voulez, le montant que vous voulez, dans la limite fiscale.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Gestion de votre épargne</h3>
                    <p className="text-gray-700">Choisissez entre gestion libre (vous décidez) ou gestion pilotée (automatique).</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Sortie à la retraite</h3>
                    <p className="text-gray-700">Récupérez votre épargne en capital (en une fois) ou en rente viagère (mensuelle).</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">
                Pourquoi choisir Les Assureurs Experts ?
              </h2>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-200 mt-0.5" />
                    <span className="text-amber-50 font-medium">{advantage}</span>
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
                <Phone className="w-6 h-6 text-amber-600" />
                Simulation PER gratuite
              </h3>
              
              <p className="text-gray-600 mb-6">
                Calculez vos économies d'impôt en 2 minutes.
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                  required
                />
                <input
                  type="number"
                  name="annualIncome"
                  placeholder="Revenus annuels (€)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                />
                <select 
                  name="insuranceType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                >
                  <option value="per">Plan Épargne Retraite (PER)</option>
                </select>
                
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    name="consent"
                    className="w-5 h-5 text-amber-500 mt-0.5" 
                    required 
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    J'accepte d'être contacté par Les Assureurs Experts.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculer mes économies
                </button>
              </form>
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Autres placements</h4>
              <div className="space-y-3">
                <Link to="/assurance-vie" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Assurance vie
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

export default PERPage;
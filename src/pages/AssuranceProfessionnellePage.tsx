import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, CheckCircle, Calculator, Phone, ArrowRight, Home, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AssuranceProfessionnellePage: React.FC = () => {
  const coverageItems = [
    "Responsabilité civile professionnelle",
    "Protection juridique professionnelle",
    "Cyber-risques et données",
    "Perte d'exploitation",
    "Multirisque bureaux et locaux",
    "Responsabilité civile dirigeant"
  ];

  const professionalTypes = [
    { type: "Professions libérales", specificity: "RC Pro adaptée à votre métier" },
    { type: "Artisans et commerçants", specificity: "Multirisque + RC Pro complète" },
    { type: "Consultants et freelances", specificity: "Protection cyber et RC Pro" },
    { type: "Dirigeants d'entreprise", specificity: "RC Dirigeant + mandataires" },
    { type: "Professions médicales", specificity: "RC Pro médicale spécialisée" }
  ];

  const priceExamples = [
    { profile: "Consultant indépendant", price: "à partir de 15 €/mois" },
    { profile: "Artisan avec local", price: "45–120 €/mois" },
    { profile: "Cabinet médical", price: "80–200 €/mois selon spécialité" }
  ];

  const advantages = [
    "Devis adapté à votre secteur d'activité",
    "Garanties modulables selon vos risques",
    "Assistance juridique 24h/24",
    "Gestion des sinistres dédiée",
    "Tarifs négociés pour les professionnels"
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Professionnelle RC Pro | Devis Expert | Les Assureurs Experts</title>
        <meta name="description" content="Assurance professionnelle dès 15€/mois. RC Pro, cyber-risques, protection juridique. Devis adapté à votre métier. Courtier ORIAS spécialisé." />
        <meta name="keywords" content="assurance professionnelle, RC pro, responsabilité civile professionnelle, assurance métier, cyber risques" />
        <link rel="canonical" href="https://lesassureursexperts.fr/assurance-professionnelle" />
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
            <span className="text-gray-900 font-medium">Assurance professionnelle</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Briefcase className="w-16 h-16 text-indigo-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Assurance professionnelle : protégez votre activité et votre responsabilité
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Indépendant, chef d'entreprise, profession libérale : votre activité professionnelle 
              mérite une protection sur mesure. Nos assurances professionnelles couvrent votre 
              responsabilité civile, vos locaux, vos données et votre perte d'exploitation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-indigo-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-indigo-600" />
                <span className="font-semibold">RC Pro obligatoire</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">Cyber-risques inclus</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="font-semibold">Dès 15€/mois</span>
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
                <Briefcase className="w-8 h-8 text-indigo-600" />
                Que couvre l'assurance professionnelle ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Une assurance professionnelle complète protège votre activité contre :
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

            {/* Professional Types Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pour quel type d'activité ?
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Profession</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Protection adaptée</th>
                    </tr>
                  </thead>
                  <tbody>
                    {professionalTypes.map((item, index) => (
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
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                Combien coûte une assurance professionnelle ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">Le tarif dépend de :</p>
              
              <ul className="space-y-2 mb-8">
                {["votre secteur d'activité", "votre chiffre d'affaires", "vos risques spécifiques", "vos garanties choisies"].map((factor, index) => (
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
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white">
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
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 text-indigo-600" />
                Devis professionnel gratuit
              </h3>
              
              <p className="text-gray-600 mb-6">
                Obtenez votre tarif adapté à votre activité.
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
                <input
                  type="text"
                  name="activity"
                  placeholder="Votre activité"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <select 
                  name="insuranceType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="assurance-professionnelle">Assurance professionnelle</option>
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
                <Link to="/prevoyance" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Prévoyance
                </Link>
                <Link to="/mutuelle-sante" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Mutuelle santé
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

export default AssuranceProfessionnellePage;
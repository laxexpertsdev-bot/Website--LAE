import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, CheckCircle, Calculator, Phone, ArrowRight, Home, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AssuranceDecennalePage: React.FC = () => {
  const coverageItems = [
    "Garantie décennale obligatoire pour le BTP",
    "Couverture des dommages après réception des travaux",
    "Protection sur 10 ans après livraison",
    "Solidité de l'ouvrage et malfaçons",
    "Responsabilité civile chantier",
    "Protection juridique construction"
  ];

  const professionalTypes = [
    { type: "Artisans du bâtiment", specificity: "Maçonnerie, plomberie, électricité" },
    { type: "Auto-entrepreneurs BTP", specificity: "Obligation décennale dès le 1er chantier" },
    { type: "Entreprises de construction", specificity: "Couverture globale tous corps d'état" },
    { type: "Architectes et maîtres d'œuvre", specificity: "RC + Décennale conception" },
    { type: "Couvreurs et charpentiers", specificity: "Garantie décennale renforcée" }
  ];

  const priceExamples = [
    { profile: "Électricien auto-entrepreneur", price: "à partir de 60 €/mois" },
    { profile: "Maçon avec équipe", price: "120–250 €/mois" },
    { profile: "Entreprise générale BTP", price: "300–800 €/mois selon CA" }
  ];

  const advantages = [
    "Devis rapide adapté à votre métier du BTP",
    "Obligation légale respectée dès le démarrage",
    "Accompagnement pour auto-entrepreneurs",
    "Partenaires spécialisés construction",
    "Tarifs négociés pour artisans et PME"
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Décennale BTP | Devis Artisan & Construction | Les Assureurs Experts</title>
        <meta name="description" content="Assurance décennale obligatoire pour artisans et entreprises du BTP dès 60€/mois. Garantie 10 ans, couverture complète. Devis rapide et personnalisé." />
        <meta name="keywords" content="assurance décennale, garantie décennale, assurance BTP, responsabilité construction, artisan bâtiment" />
        <link rel="canonical" href="https://lesassureursexperts.fr/assurance-decennale" />
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
            <span className="text-gray-900 font-medium">Assurance décennale</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <HardHat className="w-16 h-16 text-orange-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Assurance décennale : obligation et protection pour les professionnels du bâtiment
          </h1>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Artisan, auto-entrepreneur, entreprise de construction : l'assurance décennale est
              obligatoire pour tous les professionnels du BTP. Elle couvre les dommages pouvant
              survenir après réception des travaux, pendant 10 ans.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-orange-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-orange-600" />
                <span className="font-semibold">Obligation légale</span>
              </div>
              <div className="flex items-center gap-3 bg-red-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-red-600" />
                <span className="font-semibold">Garantie 10 ans</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="font-semibold">Dès 60€/mois</span>
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
                <HardHat className="w-8 h-8 text-orange-600" />
                Que couvre l'assurance décennale ?
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                L'assurance décennale protège votre entreprise et vos clients contre :
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-gray-800 font-semibold mb-2">Obligation légale</p>
                <p className="text-gray-700 text-sm">
                  Selon l'article 1792 du Code civil, tout professionnel du bâtiment réalisant des
                  travaux de construction doit souscrire une assurance décennale avant le début du
                  premier chantier. Le défaut d'assurance est sanctionné pénalement.
                </p>
              </div>
            </section>

            {/* Professional Types Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pour quels professionnels du BTP ?
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
                Combien coûte une assurance décennale ?
              </h2>

              <p className="text-lg text-gray-700 mb-6">Le tarif dépend de :</p>

              <ul className="space-y-2 mb-8">
                {["votre métier et spécialité", "votre chiffre d'affaires annuel", "vos années d'expérience", "la zone géographique d'intervention"].map((factor, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{factor}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exemples de tarifs :</h3>

              <div className="grid md:grid-cols-3 gap-4">
                {priceExamples.map((example, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="font-semibold text-gray-900">{example.profile}</p>
                    <p className="text-green-700 font-bold">{example.price}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  💡 <strong>Astuce :</strong> Les tarifs peuvent être réduits si vous regroupez votre
                  décennale avec votre RC Pro et votre multirisque professionnelle.
                </p>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-lg p-8 text-white">
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
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 text-orange-600" />
                Devis décennale gratuit
              </h3>

              <p className="text-gray-600 mb-6">
                Obtenez votre tarif adapté à votre métier du BTP.
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  required
                />
                <input
                  type="text"
                  name="activity"
                  placeholder="Votre métier (ex: plombier, maçon)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                />
                <select
                  name="insuranceType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                >
                  <option value="assurance-decennale">Assurance décennale</option>
                </select>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="w-5 h-5 text-orange-500 mt-0.5"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    J'accepte d'être contacté par Les Assureurs Experts.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Obtenir mon devis
                </button>
              </form>
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Autres assurances pro</h4>
              <div className="space-y-3">
                <Link to="/assurance-professionnelle" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  RC Professionnelle
                </Link>
                <Link to="/prevoyance" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Prévoyance TNS
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
    </>
  );
};

export default AssuranceDecennalePage;

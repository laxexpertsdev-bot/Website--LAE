import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CheckCircle, Calculator, Phone, ArrowRight, ChevronRight, Shield } from 'lucide-react';

const AssuranceEmprunteurPage: React.FC = () => {
  const coverageItems = [
    "Décès (remboursement du capital restant dû)",
    "Invalidité permanente totale (IPT)",
    "Invalidité permanente partielle (IPP)",
    "Incapacité temporaire de travail (ITT)",
    "Perte d'emploi (selon contrats)",
    "Maladies non objectivables (dos, psy)"
  ];

  const advantages = [
    "Économies moyennes de 8 000 à 15 000 €",
    "Délégation d'assurance simplifiée",
    "Questionnaire médical allégé selon l'âge",
    "Garanties équivalentes ou supérieures",
    "Résiliation possible à tout moment"
  ];

  const whyChooseUs = [
    "Expertise en délégation d'assurance",
    "Négociation avec les meilleures compagnies",
    "Accompagnement dans les démarches",
    "Suivi personnalisé de votre dossier",
    "Réponse rapide sous 48h"
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
            <span className="text-gray-900 font-medium">Assurance emprunteur</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Assurance emprunteur : économisez jusqu'à 15 000 € sur votre crédit
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Changez votre assurance de prêt immobilier et réalisez des économies substantielles. 
              Grâce à la loi Lemoine, vous pouvez désormais changer d'assurance emprunteur à tout moment, 
              sans frais ni pénalités.
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                💰 Économies garanties
              </h3>
              <p className="text-green-800">
                Nos clients économisent en moyenne <strong>8 000 à 15 000 €</strong> sur la durée totale de leur prêt 
                en changeant d'assurance emprunteur.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Coverage Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                Que couvre l'assurance emprunteur ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                L'assurance emprunteur protège votre famille et vous-même en cas d'imprévu :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Law Lemoine Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Loi Lemoine : vos nouveaux droits
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">
                    ✅ Résiliation à tout moment
                  </h3>
                  <p className="text-blue-800">
                    Plus besoin d'attendre la date anniversaire ! Changez quand vous voulez.
                  </p>
                </div>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="font-semibold text-green-900 mb-3">
                    ✅ Questionnaire médical allégé
                  </h3>
                  <p className="text-green-800">
                    Supprimé pour les prêts de moins de 200 000 € et les emprunteurs de moins de 60 ans.
                  </p>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">
                    ✅ Droit à l'oubli renforcé
                  </h3>
                  <p className="text-purple-800">
                    Délai réduit à 5 ans après la fin des traitements pour les anciens malades du cancer.
                  </p>
                </div>
              </div>
            </section>

            {/* Advantages Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                Pourquoi changer d'assurance emprunteur ?
              </h2>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-0.5" />
                    <span className="text-gray-800 font-medium">{advantage}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">💡 Exemple concret</h3>
                <p className="text-gray-700">
                  Pour un prêt de 300 000 € sur 20 ans, passer d'un taux de 0,36 % à 0,20 % 
                  représente une économie de <strong>9 600 €</strong> !
                </p>
              </div>
            </section>

            {/* Process Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Comment procéder au changement ?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Demandez votre devis</h3>
                    <p className="text-gray-700">Nous analysons votre situation et trouvons la meilleure offre.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Souscription simplifiée</h3>
                    <p className="text-gray-700">Signature électronique et démarches 100% dématérialisées.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Résiliation automatique</h3>
                    <p className="text-gray-700">Nous nous occupons de résilier votre ancien contrat.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">
                Pourquoi choisir Les Assureurs Experts ?
              </h2>
              
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-200 mt-0.5" />
                    <span className="text-blue-50 font-medium">{reason}</span>
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
                <Phone className="w-6 h-6 text-blue-600" />
                Calculez vos économies
              </h3>
              
              <p className="text-gray-600 mb-6">
                Obtenez votre simulation personnalisée en 2 minutes.
              </p>
              
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Prénom et Nom"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="number"
                  placeholder="Montant du prêt (€)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option value="assurance-emprunteur">Assurance emprunteur</option>
                </select>
                
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" className="w-5 h-5 text-blue-600 mt-0.5" required />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    J'accepte d'être contacté par Les Assureurs Experts. Mes données restent confidentielles.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculer mes économies
                </button>
                
                <p className="text-center text-sm text-gray-500">
                  100% gratuit et sans engagement
                </p>
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
                <Link to="/assurance-auto" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Assurance auto
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

export default AssuranceEmprunteurPage;
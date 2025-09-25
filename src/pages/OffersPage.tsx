import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Home, Car, Briefcase, Download, ArrowRight } from 'lucide-react';

const OffersPage: React.FC = () => {
  const offers = [
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Assurance Santé",
      subtitle: "Solo / Famille / Senior",
      description: "Mutuelle santé adaptée à tous les profils. Remboursements optimaux, réseau de soins étendu.",
      features: ["Optique & dentaire", "Médecines douces", "Hospitalisation", "Téléconsultation"],
      price: "À partir de 29€/mois",
      color: "red"
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Prévoyance",
      subtitle: "Dépendance / Décès / Obsèques",
      description: "Protégez vos proches avec nos solutions de prévoyance complètes et accessibles.",
      features: ["Capital décès", "Rente dépendance", "Assistance 24h/24", "Frais obsèques"],
      price: "À partir de 15€/mois",
      color: "blue"
    },
    {
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: "Assurance Emprunteur",
      subtitle: "Crédit immobilier",
      description: "Économisez jusqu'à 70% sur votre assurance de prêt avec notre délégation d'assurance.",
      features: ["Substitution possible", "Garanties équivalentes", "Économies importantes", "Démarches simplifiées"],
      price: "Économies moyennes: 8 000€",
      color: "green"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-purple-600" />,
      title: "Assurance Professionnelle",
      subtitle: "TNS / RC Pro / Multirisque",
      description: "Protection complète pour votre activité professionnelle et votre responsabilité.",
      features: ["RC Professionnelle", "Protection juridique", "Cyber-risques", "Perte d'exploitation"],
      price: "À partir de 25€/mois",
      color: "purple"
    },
    {
      icon: <Car className="w-12 h-12 text-orange-500" />,
      title: "Habitation & Auto",
      subtitle: "Multirisque & Véhicules",
      description: "Couverture optimale pour votre logement et vos véhicules avec garanties étendues.",
      features: ["Vol & vandalisme", "Dégâts des eaux", "Assistance 0km", "Véhicule de remplacement"],
      price: "À partir de 12€/mois",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'border-red-200 hover:border-red-400',
      blue: 'border-blue-200 hover:border-blue-400',
      green: 'border-green-200 hover:border-green-400',
      purple: 'border-purple-200 hover:border-purple-400',
      orange: 'border-orange-200 hover:border-orange-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getButtonClasses = (color: string) => {
    const colors = {
      red: 'bg-red-500 hover:bg-red-600',
      blue: 'bg-blue-500 hover:bg-blue-600',
      green: 'bg-green-500 hover:bg-green-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
      orange: 'bg-orange-500 hover:bg-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Nos Solutions Assurance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos offres d'assurance adaptées à chaque besoin. 
            Comparez, choisissez et souscrivez en quelques clics.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {offers.map((offer, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 border-2 ${getColorClasses(offer.color)} transition-all duration-300 hover:shadow-xl group`}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform duration-200">
                  {offer.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{offer.subtitle}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {offer.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Inclus :</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {offer.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-gray-900">
                      {offer.price}
                    </p>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                        <Download className="w-4 h-4" />
                        PDF
                      </button>
                      <Link
                        to="/devis"
                        className={`${getButtonClasses(offer.color)} text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:transform hover:scale-105 flex items-center gap-2`}
                      >
                        Obtenir un devis
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Besoin d'aide pour choisir ?
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Nos experts vous conseillent gratuitement et sans engagement.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Parler à un expert maintenant
          </Link>
        </div>
      </div>

      {/* Sticky Form */}
      <div className="fixed bottom-20 right-4 bg-white rounded-lg shadow-2xl p-4 border border-gray-200 z-30 max-w-xs">
        <h3 className="font-semibold text-gray-900 mb-3">Devis rapide</h3>
        <form className="space-y-2">
          <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm">
            <option>Choisissez un type d'assurance...</option>
            <option>Mutuelle santé</option>
            <option>Assurance emprunteur</option>
            <option>Assurance auto</option>
            <option>Assurance 2 roues</option>
            <option>Prévoyance</option>
            <option>Expatriés</option>
            <option>Assurance bateau</option>
            <option>Plan Épargne Retraite (PER)</option>
            <option>Assurance vie</option>
          </select>
          <input
            type="tel"
            placeholder="Téléphone"
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded text-sm font-semibold hover:bg-blue-700 transition-colors"
          >
            Être rappelé
          </button>
        </form>
      </div>
    </div>
  );
};

export default OffersPage;
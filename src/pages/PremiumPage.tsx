import React, { useState } from 'react';
import { Check, Crown, Phone, Calendar, Users, Gift, CreditCard, CheckCircle } from 'lucide-react';

const PremiumPage: React.FC = () => {
  const [billingType, setBillingType] = useState<'monthly' | 'yearly'>('monthly');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    paymentMethod: 'card'
  });

  const features = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Conseiller dédié",
      description: "Un expert personnel disponible 6j/7 pour tous vos besoins"
    },
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      title: "RDV prioritaires",
      description: "Créneaux réservés et délais de réponse accélérés"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Avantages famille",
      description: "Tarifs négociés pour tous les membres de votre famille"
    },
    {
      icon: <Gift className="w-6 h-6 text-blue-600" />,
      title: "Offres négociées",
      description: "Accès exclusif à nos meilleurs tarifs partenaires"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Premium subscription:', formData);
    alert('Inscription en cours... Redirection vers le paiement sécurisé.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Crown className="w-16 h-16 text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Abonnement Premium
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rejoignez notre club exclusif et bénéficiez d'un accompagnement VIP 
            pour toutes vos assurances.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Features */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Crown className="w-8 h-8 text-yellow-400" />
                Avantages Premium
              </h2>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-blue-100 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="mt-8 pt-8 border-t border-blue-500">
                <div className="flex items-center gap-4 mb-4">
                  <button
                    onClick={() => setBillingType('monthly')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      billingType === 'monthly'
                        ? 'bg-white text-blue-700'
                        : 'bg-blue-500 text-white hover:bg-blue-400'
                    }`}
                  >
                    Mensuel
                  </button>
                  <button
                    onClick={() => setBillingType('yearly')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      billingType === 'yearly'
                        ? 'bg-white text-blue-700'
                        : 'bg-blue-500 text-white hover:bg-blue-400'
                    }`}
                  >
                    Annuel (-20%)
                  </button>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-bold">
                    {billingType === 'monthly' ? '7€' : '67€'}
                  </span>
                  <span className="text-lg text-blue-200 ml-2">
                    /{billingType === 'monthly' ? 'mois' : 'an'}
                  </span>
                  {billingType === 'yearly' && (
                    <p className="text-sm text-yellow-300 mt-2">
                      Soit 5,60€/mois - Économisez 17€ !
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-green-800">
                  2 847 membres actifs
                </span>
              </div>
              <p className="text-green-700 text-sm">
                "J'économise plus de 200€/an grâce aux tarifs négociés du club !" 
                - Christine L., membre depuis 2022
              </p>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Rejoindre le Club Premium
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Mode de paiement
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    />
                    <CreditCard className="w-5 h-5 text-gray-600" />
                    <span>Carte bancaire (Stripe sécurisé)</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="sepa"
                      checked={formData.paymentMethod === 'sepa'}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    />
                    <span className="text-xl">🏦</span>
                    <span>Prélèvement SEPA</span>
                  </label>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <input type="checkbox" id="terms" required className="w-4 h-4" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    J'accepte les{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                      conditions générales
                    </a>{' '}
                    et la{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                      politique de confidentialité
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                >
                  <Crown className="w-6 h-6" />
                  Rejoindre le Club Premium
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                Résiliable à tout moment • Premier mois d'essai offert
              </p>
            </form>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center">
          <div className="bg-green-100 border border-green-300 rounded-lg p-6 max-w-md mx-auto">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-green-800 mb-2">
              Garantie satisfait ou remboursé
            </h3>
            <p className="text-sm text-green-700">
              30 jours pour tester sans engagement
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;
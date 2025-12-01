import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

const QuotePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    insuranceType: '',
    currentlyInsured: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    wantCallback: false
  });

  const totalSteps = 4;

  const insuranceTypes = [
    { value: 'mutuelle-sante', label: 'Mutuelle santé', emoji: '🏥' },
    { value: 'assurance-emprunteur', label: 'Assurance emprunteur', emoji: '🏠' },
    { value: 'assurance-auto', label: 'Assurance auto', emoji: '🚗' },
    { value: 'assurance-2-roues', label: 'Assurance 2 roues', emoji: '🛵' },
    { value: 'prevoyance', label: 'Prévoyance', emoji: '🛡️' },
    { value: 'expatries', label: 'Expatriés', emoji: '✈️' },
    { value: 'assurance-bateau', label: 'Assurance bateau', emoji: '⛵' },
    { value: 'per', label: 'Plan Épargne Retraite (PER)', emoji: '💰' },
    { value: 'assurance-vie', label: 'Assurance vie', emoji: '🛡️' }
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Form will be handled by Formspree POST
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.insuranceType !== '';
      case 2:
        return formData.currentlyInsured !== '';
      case 3:
        return formData.firstName && formData.lastName && formData.phone && formData.email;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Quel type d'assurance vous intéresse ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {insuranceTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setFormData({ ...formData, insuranceType: type.value })}
                  className={`p-6 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-lg ${
                    formData.insuranceType === type.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="text-3xl mb-2">{type.emoji}</div>
                  <h3 className="font-semibold text-gray-900">{type.label}</h3>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Êtes-vous actuellement assuré ?
            </h2>
            <div className="space-y-4">
              {[
                { value: 'oui', label: 'Oui, je souhaite optimiser ma couverture' },
                { value: 'non', label: 'Non, je recherche une première assurance' },
                { value: 'partiellement', label: 'Partiellement, je veux compléter' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setFormData({ ...formData, currentlyInsured: option.value })}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-lg ${
                    formData.currentlyInsured === option.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Vos coordonnées
            </h2>
            <form
              action="https://formspree.io/f/mblnydqy"
              method="POST"
            >
              <input type="hidden" name="insuranceType" value={formData.insuranceType} />
              <input type="hidden" name="currentlyInsured" value={formData.currentlyInsured} />
              <input type="hidden" name="wantCallback" value={formData.wantCallback.toString()} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Valider ma demande
                </button>
              </div>
            </form>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Souhaitez-vous être rappelé ?
            </h2>
            <div className="text-center space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Récapitulatif de votre demande
                </h3>
                <p className="text-gray-700">
                  Type : {insuranceTypes.find(t => t.value === formData.insuranceType)?.label}
                </p>
                <p className="text-gray-700">
                  Contact : {formData.firstName} {formData.lastName}
                </p>
              </div>
              
              <div className="space-y-4">
                <label className="flex items-center justify-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.wantCallback}
                    onChange={(e) => setFormData({ ...formData, wantCallback: e.target.checked })}
                    className="w-5 h-5 text-blue-600"
                  />
                  <span className="text-lg">
                    ✔️ Oui, je souhaite être rappelé par un expert
                  </span>
                </label>
                <p className="text-sm text-gray-600">
                  Nous vous contacterons sous 2h ouvrées pour établir votre devis personnalisé.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Devis Express</h1>
            <span className="text-sm text-gray-500">
              Étape {currentStep} sur {totalSteps}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              currentStep === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Précédent
          </button>

          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
              !isStepValid()
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : currentStep === totalSteps
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {currentStep === totalSteps ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Valider ma demande
              </>
            ) : (
              <>
                Suivant
                <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600 mb-4">
            🔒 Vos données sont protégées et ne seront jamais revendues
          </p>
          <div className="flex justify-center items-center gap-8 text-xs text-gray-500">
            <span>ORIAS 25002995</span>
            <span>RCS Paris 940 148 802</span>
            <span>Conformité RGPD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
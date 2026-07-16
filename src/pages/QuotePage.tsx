import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { submitLead, trackLeadConversion } from '../utils/lead';

const TRANSITION_DELAY = 180;

const insuranceTypes = [
  { value: 'mutuelle-sante', label: 'Mutuelle santé', emoji: '🩺' },
  { value: 'assurance-emprunteur', label: 'Assurance emprunteur', emoji: '🏦' },
  { value: 'assurance-auto', label: 'Assurance auto', emoji: '🚗' },
  { value: 'assurance-2-roues', label: 'Assurance 2 roues', emoji: '🏍️' },
  { value: 'prevoyance', label: 'Prévoyance', emoji: '🛡️' },
  { value: 'expatries', label: 'Expatriés', emoji: '✈️' },
  { value: 'assurance-bateau', label: 'Assurance bateau', emoji: '⛵' },
  { value: 'per', label: 'Plan Épargne Retraite (PER)', emoji: '📈' },
  { value: 'assurance-vie', label: 'Assurance vie', emoji: '💰' },
  { value: 'assurance-habitation', label: 'Assurance habitation', emoji: '🏠' },
  { value: 'assurance-professionnelle', label: 'Assurance professionnelle', emoji: '💼' },
  { value: 'assurance-decennale', label: 'Assurance décennale', emoji: '🏗️' },
  { value: 'sante-prevoyance-collective', label: 'Santé & Prévoyance Collective', emoji: '👥' },
  { value: 'capital-obseques', label: 'Capital Obsèques', emoji: '🕊️' },
];

const coverageOptions = [
  { value: 'oui', label: 'Oui, je souhaite optimiser ma couverture' },
  { value: 'non', label: 'Non, je recherche une première assurance' },
  { value: 'partiellement', label: 'Partiellement, je veux compléter' },
];

interface FormData {
  insuranceType: string;
  currentlyInsured: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  consent: boolean;
}

const QuotePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    insuranceType: '',
    currentlyInsured: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    consent: false,
  });

  const totalSteps = 4;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const goToStep = (step: number, direction: 'left' | 'right' = 'left') => {
    if (animating) return;
    setAnimating(true);
    setSlideDirection(direction);
    setVisible(false);

    timerRef.current = setTimeout(() => {
      setCurrentStep(step);
      setVisible(true);
      setAnimating(false);
    }, 220);
  };

  const autoAdvance = (nextStep: number) => {
    timerRef.current = setTimeout(() => {
      goToStep(nextStep, 'left');
    }, TRANSITION_DELAY);
  };

  const handleSelectSingle = (field: keyof FormData, value: string, nextStep?: number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (nextStep !== undefined) {
      autoAdvance(nextStep);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      goToStep(currentStep + 1, 'left');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      goToStep(currentStep - 1, 'right');
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.insuranceType !== '';
      case 2: return formData.currentlyInsured !== '';
      case 3: return !!(formData.firstName && formData.lastName && formData.phone && formData.email);
      case 4: return formData.consent;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    if (isLoading || !formData.consent) return;
    setSubmitError(false);
    setIsLoading(true);
    const selectedType = insuranceTypes.find((t) => t.value === formData.insuranceType)?.label;
    const ok = await submitLead({
      ...formData,
      wantCallback: true,
      typeLabel: selectedType,
      _subject: `Nouveau devis — ${selectedType ?? formData.insuranceType}`,
    });
    setIsLoading(false);
    if (ok) {
      trackLeadConversion({ formLocation: 'devis', insuranceType: formData.insuranceType });
      setIsSubmitted(true);
    } else {
      setSubmitError(true);
    }
  };

  const stepNeedsNextButton = () => {
    // Steps with text inputs or checkboxes need the Next button
    return currentStep === 3 || currentStep === 4;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Étape 1 sur {totalSteps}
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                Quel type d'assurance vous intéresse ?
              </h2>
              <p className="text-gray-500 text-sm mt-2">Cliquez sur une carte pour continuer</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {insuranceTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => handleSelectSingle('insuranceType', type.value, 2)}
                  className={`p-5 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md group ${
                    formData.insuranceType === type.value
                      ? 'border-blue-500 bg-blue-50 shadow-md scale-[1.01]'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl leading-none" aria-hidden="true">{type.emoji}</span>
                    <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {type.label}
                    </span>
                    {formData.insuranceType === type.value && (
                      <CheckCircle className="w-5 h-5 text-blue-500 ml-auto" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Étape 2 sur {totalSteps}
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                Êtes-vous actuellement assuré ?
              </h2>
              <p className="text-gray-500 text-sm mt-2">Cliquez sur votre situation pour continuer</p>
            </div>
            <div className="space-y-3 max-w-xl mx-auto">
              {coverageOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelectSingle('currentlyInsured', option.value, 3)}
                  className={`w-full p-5 rounded-lg border-2 transition-all duration-200 text-left hover:shadow-md group flex items-center gap-4 ${
                    formData.currentlyInsured === option.value
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 transition-all duration-150 ${
                      formData.currentlyInsured === option.value
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300 group-hover:border-blue-400'
                    }`}
                  >
                    {formData.currentlyInsured === option.value && (
                      <span className="flex items-center justify-center w-full h-full">
                        <span className="w-2 h-2 rounded-full bg-white block" />
                      </span>
                    )}
                  </span>
                  <span className={`font-medium transition-colors ${
                    formData.currentlyInsured === option.value ? 'text-blue-800' : 'text-gray-800 group-hover:text-blue-700'
                  }`}>
                    {option.label}
                  </span>
                  {formData.currentlyInsured === option.value && (
                    <CheckCircle className="w-5 h-5 text-blue-500 ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                Étape 3 sur {totalSteps}
              </span>
              <h2 className="text-2xl font-bold text-gray-900">Vos coordonnées</h2>
              <p className="text-gray-500 text-sm mt-2">Remplissez le formulaire puis cliquez sur Suivant</p>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                    required
                    autoComplete="given-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                    required
                    autoComplete="family-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                    required
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              {!(formData.firstName && formData.lastName && formData.phone && formData.email) && (
                <p className="text-center text-xs text-gray-400 mt-6">Remplissez tous les champs, puis cliquez sur « Suivant ».</p>
              )}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Dernière étape</h2>
              <p className="text-gray-500 text-sm mt-2">Vérifiez vos informations avant de valider</p>
            </div>

            <div className="max-w-xl mx-auto space-y-6">
              {/* Consentement RGPD (obligatoire) */}
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData((prev) => ({ ...prev, consent: e.target.checked }))}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  required
                />
                <span className="text-sm text-gray-600 leading-relaxed">
                  J'accepte d'être recontacté par Les Assureurs Experts au sujet de ma demande. Mes données
                  restent confidentielles et ne sont jamais revendues.{' '}
                  <Link to="/politique-confidentialite" className="text-blue-600 underline hover:text-blue-700">
                    Politique de confidentialité
                  </Link>
                  .
                </span>
              </label>

              <div>
                {renderSubmitButton()}
                <p className="text-center text-xs text-gray-400 mt-3">
                  Gratuit et sans engagement · Réponse d'un expert sous 2h ouvrées
                </p>
              </div>

              {submitError && (
                <p className="text-center text-sm text-red-600 bg-red-50 border border-red-200 rounded-md py-3 px-4">
                  Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous appeler au{' '}
                  <a href="tel:+33162171111" className="font-semibold underline">+33 1 62 17 11 11</a>.
                </p>
              )}

              <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  Votre demande
                </h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Type d'assurance</dt>
                    <dd className="font-medium text-gray-900">
                      {insuranceTypes.find((t) => t.value === formData.insuranceType)?.label}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Situation actuelle</dt>
                    <dd className="font-medium text-gray-900 text-right max-w-[55%]">
                      {coverageOptions.find((o) => o.value === formData.currentlyInsured)?.label}
                    </dd>
                  </div>
                  <div className="flex justify-between border-t border-blue-100 pt-2 mt-2">
                    <dt className="text-gray-500">Contact</dt>
                    <dd className="font-medium text-gray-900">
                      {formData.firstName} {formData.lastName}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Téléphone</dt>
                    <dd className="font-medium text-gray-900">{formData.phone}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Email</dt>
                    <dd className="font-medium text-gray-900">{formData.email}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderSubmitButton = () => (
    <button
      type="button"
      onClick={handleSubmit}
      disabled={!formData.consent || isLoading}
      className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-colors shadow-md ${
        !formData.consent
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-green-600 text-white hover:bg-green-700'
      }`}
    >
      {isLoading ? (
        <>
          <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          Envoi en cours...
        </>
      ) : (
        <>
          <CheckCircle className="w-5 h-5" />
          Valider ma demande
        </>
      )}
    </button>
  );

  const slideClass = visible
    ? 'opacity-100 translate-x-0'
    : slideDirection === 'left'
    ? 'opacity-0 translate-x-6'
    : 'opacity-0 -translate-x-6';

  return (
    <>
      <Helmet>
        <title>Devis Assurance Gratuit en 1 Minute | Les Assureurs Experts</title>
        <meta name="description" content="Obtenez votre devis d'assurance personnalisé en 4 étapes : santé, auto, emprunteur, prévoyance… Réponse d'un expert sous 24h, gratuit et sans engagement." />
        <link rel="canonical" href="https://lesassureursexperts.fr/devis" />
      </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {isSubmitted ? (
          <div className="bg-white rounded-lg shadow-xl p-10 text-center max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-9 h-9 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Demande envoyée avec succès !</h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              Merci {formData.firstName}. Un conseiller expert vous recontacte sous 24h ouvrées pour
              établir votre devis personnalisé. Besoin d'une réponse immédiate ?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+33162171111"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Appeler le +33 1 62 17 11 11
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        ) : (
        <>
        {/* Header & Progress */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Devis Express</h1>
            <span className="text-sm text-gray-500 font-medium">
              {currentStep} / {totalSteps}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          {/* Step dots */}
          <div className="flex justify-between mt-3 px-0.5">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    step < currentStep
                      ? 'bg-blue-600'
                      : step === currentStep
                      ? 'bg-blue-600 ring-4 ring-blue-100'
                      : 'bg-gray-300'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Form Content with transition */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8 overflow-hidden">
          <div
            className={`transition-all duration-200 ease-out ${slideClass}`}
          >
            {renderStep()}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1 || animating}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              currentStep === 1 || animating
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 shadow-sm'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Précédent
          </button>

          {/* Next button — primary for text steps, secondary hint for choice steps.
              Step 4's submit CTA lives inside renderStep(), not here. */}
          {currentStep < totalSteps && (
            <button
              onClick={handleNext}
              disabled={!isStepValid() || animating}
              className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-sm ${
                !isStepValid() || animating
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : stepNeedsNextButton()
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200 text-sm'
              }`}
            >
              Suivant
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Trust */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-3">
            Vos données sont protégées et ne seront jamais revendues
          </p>
          <div className="flex justify-center items-center gap-8 text-xs text-gray-400">
            <span>ORIAS 25002995</span>
            <span>RCS Paris 940 148 802</span>
            <span>Conformité RGPD</span>
          </div>
        </div>
        </>
        )}
      </div>
    </div>
    </>
  );
};

export default QuotePage;

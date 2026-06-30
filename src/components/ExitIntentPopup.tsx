import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, Phone, CheckCircle } from 'lucide-react';
import { submitLead, trackLeadConversion } from '../utils/lead';

interface ExitIntentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    insuranceType: '',
    fullName: '',
    phone: '',
    email: '',
    rgpdConsent: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLHeadingElement>(null);

  // Gestion de la fermeture avec sessionStorage 24h
  const handleClose = useCallback(() => {
    sessionStorage.setItem('popupClosed', 'true');
    sessionStorage.setItem('popupClosedTime', Date.now().toString());
    onClose();
  }, [onClose]);

  // Vérifier si le popup doit être affiché (24h)
  const shouldShowPopup = () => {
    const popupClosed = sessionStorage.getItem('popupClosed');
    const closedTime = sessionStorage.getItem('popupClosedTime');
    
    if (popupClosed && closedTime) {
      const timeDiff = Date.now() - parseInt(closedTime);
      const twentyFourHours = 24 * 60 * 60 * 1000;
      return timeDiff > twentyFourHours;
    }
    
    return true;
  };

  // Gestion des événements clavier
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Fermeture avec ESC
      if (e.key === 'Escape') {
        handleClose();
        return;
      }

      // Focus trap
      if (e.key === 'Tab') {
        const focusableElements = dialogRef.current?.querySelectorAll(
          'button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (!focusableElements || focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Focus initial sur le titre
    if (firstFocusableRef.current) {
      firstFocusableRef.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  // Fermeture sur clic overlay
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading || !formData.rgpdConsent) return;
    setSubmitError(false);
    setIsLoading(true);
    const ok = await submitLead({ ...formData, _subject: `Rappel demandé — ${formData.insuranceType || 'non précisé'}` });
    setIsLoading(false);
    if (ok) {
      trackLeadConversion({ formLocation: 'exit_popup', insuranceType: formData.insuranceType });
      setIsSubmitted(true);
    } else {
      setSubmitError(true);
    }
  };

  // Ne pas afficher si récemment fermé
  if (!shouldShowPopup()) {
    return null;
  }

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/30 z-40"
        onClick={handleOverlayClick}
      />
      
      {/* Popup positioned at bottom-center */}
      <div 
        ref={dialogRef}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-2xl w-[92%] max-w-[420px] z-50 animate-slide-up"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton fermeture */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors z-10 p-1.5 rounded-full hover:bg-gray-100"
          aria-label="Fermer la popup"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-5">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="mb-3">
              <Phone className="w-8 h-8 text-blue-600 mx-auto" />
            </div>
            <h2 
              ref={firstFocusableRef}
              id="popup-title"
              className="text-lg font-bold text-gray-900 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              tabIndex={-1}
            >
              Obtenez un tarif personnalisé en 1 minute !
            </h2>
          </div>

          {/* Formulaire simplifié */}
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">Demande envoyée !</h3>
              <p className="text-sm text-gray-600">Un conseiller vous rappelle sous 24h.</p>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Type d'assurance */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Type d'assurance souhaitée *
              </label>
              <select
                name="insuranceType"
                value={formData.insuranceType}
                onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              >
                <option value="">Choisissez un type d'assurance...</option>
                <option value="mutuelle-sante">Mutuelle santé</option>
                <option value="assurance-auto">Assurance auto</option>
                <option value="assurance-emprunteur">Assurance emprunteur</option>
                <option value="prevoyance">Prévoyance</option>
                <option value="assurance-habitation">Assurance habitation</option>
                <option value="assurance-2-roues">Assurance 2 roues</option>
                <option value="assurance-bateau">Assurance bateau</option>
                <option value="assurance-pro">Assurance professionnelle</option>
                <option value="expatries">Expatriés</option>
                <option value="per">Plan Épargne Retraite (PER)</option>
                <option value="assurance-vie">Assurance vie</option>
                <option value="assurance-decennale">Assurance décennale</option>
                <option value="sante-prevoyance-collective">Santé & Prévoyance Collective</option>
                <option value="capital-obseques">Capital Obsèques</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {/* Prénom + Nom */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Prénom et Nom *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
                placeholder="Jean Dupont"
              />
            </div>

            {/* Téléphone */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Téléphone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
                placeholder="06 12 34 56 78"
              />
            </div>

            {/* Email optionnel */}
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Email (optionnel)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="jean.dupont@email.com"
              />
            </div>

            {/* Consentement RGPD */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="rgpd-consent"
                name="rgpdConsent"
                checked={formData.rgpdConsent}
                onChange={(e) => setFormData({ ...formData, rgpdConsent: e.target.checked })}
                className="w-4 h-4 text-blue-600 mt-0.5"
                required
              />
              <label htmlFor="rgpd-consent" className="text-xs text-gray-600 leading-relaxed">
                J'accepte d'être contacté par Les Assureurs Experts. Mes données restent confidentielles.
              </label>
            </div>

            {/* Bouton CTA */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-sm transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Envoi...
                  </>
                ) : (
                  <>
                    <Phone className="w-4 h-4" />
                    Être rappelé sous 24h
                  </>
                )}
              </button>

              {submitError && (
                <p className="text-center text-xs text-red-600 mt-2">
                  Erreur lors de l'envoi. Réessayez ou appelez le 01 62 17 11 11.
                </p>
              )}

              <p className="text-center text-xs text-gray-500 mt-2">
                100% gratuit et sans engagement
              </p>
            </div>
          </form>
          )}

          <p className="text-xs text-gray-500 text-center mt-3">
            🔒 Vos données sont protégées et ne seront jamais revendues
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translate(-50%, 100%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 250ms ease-out;
        }
      `}</style>
    </>
  );
};

export default ExitIntentPopup;
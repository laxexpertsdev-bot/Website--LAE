import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const InsuredCookieIllustration: React.FC = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <ellipse cx="60" cy="105" rx="35" ry="8" fill="#D1D5DB" opacity="0.3" />

    <circle cx="60" cy="60" r="38" fill="#DEB887" />
    <circle cx="60" cy="60" r="38" fill="url(#cookieGradient)" />

    <circle cx="45" cy="45" r="5" fill="#8B4513" />
    <circle cx="75" cy="48" r="6" fill="#8B4513" />
    <circle cx="50" cy="70" r="4.5" fill="#8B4513" />
    <circle cx="70" cy="70" r="5.5" fill="#8B4513" />
    <circle cx="60" cy="55" r="4" fill="#8B4513" />
    <circle cx="38" cy="65" r="5" fill="#8B4513" />
    <circle cx="78" cy="62" r="4.5" fill="#8B4513" />

    <circle cx="52" cy="52" r="4.5" fill="#1F2937" />
    <circle cx="68" cy="52" r="4.5" fill="#1F2937" />
    <circle cx="50" cy="51" r="1.5" fill="#FFFFFF" />
    <circle cx="66" cy="51" r="1.5" fill="#FFFFFF" />

    <ellipse cx="52" cy="66" ry="2" rx="1.2" fill="#FFB6C1" opacity="0.6" />
    <ellipse cx="68" cy="66" ry="2" rx="1.2" fill="#FFB6C1" opacity="0.6" />

    <path
      d="M 52 60 Q 60 65 68 60"
      stroke="#1F2937"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />

    <path
      d="M 55 78 L 60 95 L 65 78 Z"
      fill="#2563EB"
    />
    <rect x="58" y="78" width="4" height="8" fill="#1D4ED8" rx="0.5" />
    <ellipse cx="60" cy="86" rx="6" ry="2" fill="#1E40AF" opacity="0.3" />

    <g transform="translate(80, 35)">
      <rect x="0" y="0" width="28" height="32" rx="4" fill="#3B82F6" />
      <path
        d="M 14 8 L 8 16 L 12 16 L 12 24 L 16 24 L 16 16 L 20 16 Z"
        fill="#FFFFFF"
      />
      <rect x="1" y="1" width="26" height="30" rx="3" fill="none" stroke="#2563EB" strokeWidth="1" />
    </g>

    <defs>
      <radialGradient id="cookieGradient" cx="0.3" cy="0.3" r="1">
        <stop offset="0%" stopColor="#F4E4C1" />
        <stop offset="100%" stopColor="#DEB887" />
      </radialGradient>
    </defs>
  </svg>
);

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 500);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <InsuredCookieIllustration />

          <h2
            id="cookie-title"
            className="text-2xl md:text-3xl font-bold text-gray-900 text-center mt-6 mb-4"
          >
            On protège aussi vos cookies 🍪🛡️
          </h2>

          <p className="text-gray-700 text-center text-base md:text-lg leading-relaxed mb-8">
            Pour vous garantir une expérience optimale et sécurisée, nous utilisons quelques cookies
            (pas ceux du goûter 😉). Vous choisissez ce qu'on garde ?
          </p>

          {!showCustomize ? (
            <div className="space-y-4">
              <div className="grid sm:grid-cols-3 gap-3">
                <button
                  onClick={acceptAll}
                  className="px-6 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold text-base shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                  aria-label="Accepter tous les cookies"
                >
                  Accepter
                </button>

                <button
                  onClick={rejectAll}
                  className="px-6 py-3.5 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-all font-semibold text-base shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-gray-300"
                  aria-label="Refuser les cookies non essentiels"
                >
                  Refuser
                </button>

                <button
                  onClick={() => setShowCustomize(true)}
                  className="px-6 py-3.5 bg-white text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-all font-semibold text-base shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                  aria-label="Personnaliser les préférences de cookies"
                >
                  Personnaliser
                </button>
              </div>

              <div className="text-center pt-4">
                <Link
                  to="/gestion-cookies"
                  className="text-sm text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-2 py-1"
                >
                  Politique de cookies
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Personnalisez vos préférences
                </h3>
                <button
                  onClick={() => setShowCustomize(false)}
                  className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded p-1"
                  aria-label="Fermer la personnalisation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-green-50 border-2 border-green-200 rounded-xl">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900">Cookies nécessaires</h4>
                        <Check className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Cookies analytiques</h4>
                      <p className="text-sm text-gray-600">
                        Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                        className="sr-only peer"
                        aria-label="Activer les cookies analytiques"
                      />
                      <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600 shadow-inner"></div>
                    </label>
                  </div>
                </div>

                <div className="p-5 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">Cookies marketing</h4>
                      <p className="text-sm text-gray-600">
                        Permettent de personnaliser les publicités selon vos centres d'intérêt.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                        className="sr-only peer"
                        aria-label="Activer les cookies marketing"
                      />
                      <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600 shadow-inner"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={savePreferences}
                  className="flex-1 bg-blue-600 text-white py-3.5 rounded-xl hover:bg-blue-700 transition-all font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Enregistrer mes préférences
                </button>
              </div>

              <div className="text-center">
                <Link
                  to="/gestion-cookies"
                  className="text-sm text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-2 py-1"
                >
                  Politique de cookies
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
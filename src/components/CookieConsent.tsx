import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Cookie, X } from 'lucide-react';
import {
  applyCookieConsent,
  getCookieConsent,
  isCookieConsentExpired,
  saveCookieConsent,
  type CookieConsentPreferences,
} from '../utils/cookieConsent';

const defaultPreferences: CookieConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsentPreferences>(defaultPreferences);

  useEffect(() => {
    const storedConsent = getCookieConsent();

    if (storedConsent && !isCookieConsentExpired(storedConsent)) {
      applyCookieConsent(storedConsent);
      return undefined;
    }

    const timer = window.setTimeout(() => setIsVisible(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  const acceptAll = () => {
    saveCookieConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    setIsVisible(false);
  };

  const rejectAll = () => {
    saveCookieConsent(defaultPreferences);
    setIsVisible(false);
  };

  const savePreferences = () => {
    saveCookieConsent(preferences);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <section
      className="pointer-events-none fixed bottom-24 left-4 right-4 z-30 sm:bottom-6 sm:left-6 sm:right-auto sm:w-[min(440px,calc(100vw-3rem))] animate-fade-in"
      role="region"
      aria-labelledby="cookie-title"
      aria-live="polite"
    >
      <div className="pointer-events-auto max-h-[calc(100vh-7.5rem)] overflow-y-auto rounded-lg border border-gray-200 bg-white p-4 shadow-2xl sm:max-h-[calc(100vh-3rem)] sm:p-5">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Cookie className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h2 id="cookie-title" className="text-base font-semibold text-gray-900">
              Gestion des cookies
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">
              Nous utilisons quelques cookies pour sécuriser le site, mesurer l'audience et
              améliorer votre expérience. Vous gardez la main sur vos préférences.
            </p>
          </div>
        </div>

        {!showCustomize ? (
          <div className="mt-4 space-y-3">
            <button
              onClick={acceptAll}
              className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Accepter tous les cookies"
            >
              Accepter tous les cookies
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={rejectAll}
                className="rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
                aria-label="Refuser les cookies non essentiels"
              >
                Refuser
              </button>

              <button
                onClick={() => setShowCustomize(true)}
                className="rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300"
                aria-label="Personnaliser les préférences de cookies"
              >
                Personnaliser
              </button>
            </div>

            <Link
              to="/gestion-cookies"
              className="inline-flex rounded px-1 text-xs font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Politique de cookies
            </Link>
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-gray-900">
                Personnalisez vos préférences
              </h3>
              <button
                onClick={() => setShowCustomize(false)}
                className="rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Fermer la personnalisation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="rounded-lg border border-green-200 bg-green-50 p-3">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-gray-900">Cookies nécessaires</h4>
                <Check className="h-4 w-4 text-green-600" aria-hidden="true" />
              </div>
              <p className="mt-1 text-xs leading-relaxed text-gray-600">
                Essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-lg border border-gray-200 bg-white p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Cookies analytiques</h4>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600">
                      Nous aident à comprendre l'utilisation du site pour l'améliorer.
                    </p>
                  </div>
                  <label className="relative inline-flex flex-shrink-0 cursor-pointer items-center">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="peer sr-only"
                      aria-label="Activer les cookies analytiques"
                    />
                    <span className="h-6 w-11 rounded-full bg-gray-300 shadow-inner transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-5 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300" />
                  </label>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Cookies marketing</h4>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600">
                      Permettent de personnaliser les publicités selon vos centres d'intérêt.
                    </p>
                  </div>
                  <label className="relative inline-flex flex-shrink-0 cursor-pointer items-center">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="peer sr-only"
                      aria-label="Activer les cookies marketing"
                    />
                    <span className="h-6 w-11 rounded-full bg-gray-300 shadow-inner transition-colors after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-5 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300" />
                  </label>
                </div>
              </div>
            </div>

            <button
              onClick={savePreferences}
              className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Enregistrer mes préférences
            </button>

            <Link
              to="/gestion-cookies"
              className="inline-flex rounded px-1 text-xs font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Politique de cookies
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CookieConsent;

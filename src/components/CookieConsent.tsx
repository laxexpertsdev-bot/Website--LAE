import React, { useState, useEffect } from 'react';
import { Cookie, Settings, Check } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true
    }));
    setIsVisible(false);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false
    }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto p-6">
        {!showSettings ? (
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-start gap-4">
              <Cookie className="w-6 h-6 text-orange-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Gestion des cookies
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic 
                  et personnaliser le contenu. Vous pouvez gérer vos préférences à tout moment.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Settings className="w-4 h-4" />
                Paramètres
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Refuser
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Tout accepter
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                Préférences des cookies
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Cookies nécessaires</h4>
                  <p className="text-sm text-gray-600">
                    Requis pour le fonctionnement du site
                  </p>
                </div>
                <Check className="w-5 h-5 text-green-600" />
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Cookies analytiques</h4>
                  <p className="text-sm text-gray-600">
                    Nous aident à améliorer nos services
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Cookies marketing</h4>
                  <p className="text-sm text-gray-600">
                    Pour personnaliser les publicités
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={acceptSelected}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Enregistrer les préférences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
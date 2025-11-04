import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ReviewBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Charger après le onload pour éviter tout CLS
    const checkVisibility = () => {
      const hiddenUntil = localStorage.getItem('reviewBannerHidden');
      if (hiddenUntil) {
        const hiddenDate = new Date(hiddenUntil);
        const now = new Date();
        if (now < hiddenDate) {
          return; // Encore caché
        }
      }
      setIsVisible(true);
    };

    // Attendre que la page soit complètement chargée
    if (document.readyState === 'complete') {
      checkVisibility();
    } else {
      window.addEventListener('load', checkVisibility);
      return () => window.removeEventListener('load', checkVisibility);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Cacher pendant 7 jours
    const hideUntil = new Date();
    hideUntil.setDate(hideUntil.getDate() + 7);
    localStorage.setItem('reviewBannerHidden', hideUntil.toISOString());
  };

  const handleReviewClick = () => {
    // Ouvrir dans un nouvel onglet
    window.open('https://g.page/r/XXXXXXXX/review', '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-[#F7F9FC] border-t border-gray-200 py-3 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Texte principal */}
        <div className="flex-1 flex items-center justify-center pr-8">
          <p className="text-gray-800 font-medium text-sm sm:text-base text-center">
            Vous aimez notre service ? Notez-nous ⭐⭐⭐⭐⭐ (30 s)
          </p>
        </div>

        {/* Bouton CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleReviewClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Laisser un avis sur notre service"
          >
            Laisser un avis
          </button>

          {/* Bouton fermeture */}
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            aria-label="Fermer le bandeau d'avis"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewBanner;
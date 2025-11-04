import React, { useState, useEffect } from 'react';
import { X, Star } from 'lucide-react';

const InternalReviewBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    comment: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setRating(0);
    setHoverRating(0);
    setFormData({ name: '', comment: '' });
    setIsSubmitted(false);
  };

  const handleStarClick = (starValue: number) => {
    setRating(starValue);
  };

  const handleStarHover = (starValue: number) => {
    setHoverRating(starValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      alert('Veuillez sélectionner une note');
      return;
    }

    // Enregistrer temporairement dans localStorage (en attendant l'endpoint)
    const review = {
      rating,
      name: formData.name || 'Anonyme',
      comment: formData.comment,
      date: new Date().toISOString()
    };
    
    const existingReviews = JSON.parse(localStorage.getItem('internalReviews') || '[]');
    existingReviews.push(review);
    localStorage.setItem('internalReviews', JSON.stringify(existingReviews));
    
    setIsSubmitted(true);
    
    // Fermer automatiquement après 3 secondes
    setTimeout(() => {
      handleCloseModal();
      handleClose(); // Cacher le bandeau aussi
    }, 3000);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Bandeau */}
      <div className="w-full bg-[#F7F9FC] border-t border-gray-200 py-4 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Texte principal */}
          <div className="flex-1 pr-8">
            <p className="text-gray-800 font-medium text-sm sm:text-base">
              Donnez votre avis sur votre expérience avec Les Assureurs Experts ⭐⭐⭐⭐⭐
            </p>
          </div>

          {/* Boutons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleOpenModal}
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

      {/* Modale */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">
                Votre avis compte pour nous ⭐
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
                aria-label="Fermer la modale"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Contenu */}
            <div className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Étoiles */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Note *
                    </label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleStarClick(star)}
                          onMouseEnter={() => handleStarHover(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                          aria-label={`Noter ${star} étoile${star > 1 ? 's' : ''}`}
                        >
                          <Star
                            className={`w-8 h-8 transition-colors ${
                              star <= (hoverRating || rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Nom */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom (facultatif)
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>

                  {/* Commentaire */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Commentaire
                    </label>
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                      placeholder="Partagez votre expérience avec nous..."
                    />
                  </div>

                  {/* Bouton */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Envoyer mon avis
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">❤️</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Merci pour votre avis !
                  </h3>
                  <p className="text-gray-600">
                    Il sera pris en compte dans notre amélioration continue.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InternalReviewBanner;
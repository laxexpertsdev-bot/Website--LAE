import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle } from 'lucide-react';
import { submitLead, trackLeadConversion } from '../utils/lead';

// Adresse recevant une copie du rapport d'avis (en plus du compte Formspree).
const REVIEW_CC = 'laxexpertsdev@gmail.com';

interface ReviewFormData {
  prenom: string;
  nom: string;
  email: string;
  texte: string;
  consent: boolean;
}

const INITIAL_FORM: ReviewFormData = {
  prenom: '',
  nom: '',
  email: '',
  texte: '',
  consent: false,
};

interface FormErrors {
  note?: string;
  prenom?: string;
  nom?: string;
  email?: string;
  texte?: string;
  consent?: string;
}

const ReviewForm: React.FC = () => {
  const [note, setNote] = useState(0);
  const [hoverNote, setHoverNote] = useState(0);
  const [formData, setFormData] = useState<ReviewFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (note < 1) next.note = 'Veuillez attribuer une note.';
    if (!formData.prenom.trim()) next.prenom = 'Ce champ est obligatoire.';
    if (!formData.nom.trim()) next.nom = 'Ce champ est obligatoire.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = 'Adresse email invalide.';
    if (formData.texte.trim().length < 10)
      next.texte = 'Merci de détailler votre avis (10 caractères minimum).';
    if (!formData.consent) next.consent = 'Veuillez accepter la publication de votre avis.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    if (!validate()) return;
    setSubmitError(false);
    setIsLoading(true);
    const ok = await submitLead({
      _subject: `Nouvel avis client — ${note}★`,
      _cc: REVIEW_CC,
      type: 'avis',
      note,
      prenom: formData.prenom,
      nom: formData.nom,
      email: formData.email,
      avis: formData.texte,
    });
    setIsLoading(false);
    if (ok) {
      trackLeadConversion({ formLocation: 'avis' });
      setIsSubmitted(true);
    } else {
      setSubmitError(true);
    }
  };

  const inputBase =
    'w-full px-4 py-3 rounded-md border text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#002D62]/30 focus:border-[#002D62] transition-colors bg-white';

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-2xl border border-gray-100 px-7 py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h4 className="text-xl font-bold mb-3" style={{ color: '#002D62' }}>
          Merci pour votre avis !
        </h4>
        <p className="text-gray-600 text-base leading-relaxed">
          Votre avis a bien été envoyé. Il sera publié sur le site après vérification par notre
          équipe.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden">
      <div className="px-6 py-4" style={{ backgroundColor: '#002D62' }}>
        <h3 className="text-lg font-bold text-white leading-snug">
          Laissez un avis sur notre site
        </h3>
        <p className="text-blue-200 text-sm mt-0.5">
          Votre retour est précieux — il sera publié après modération.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="p-5">
        <div className="flex flex-col lg:flex-row lg:items-start gap-4">
          {/* Note */}
          <div className="lg:shrink-0">
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
              Note <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-0.5 h-[46px]" role="radiogroup" aria-label="Note sur 5">
              {[1, 2, 3, 4, 5].map((value) => {
                const active = (hoverNote || note) >= value;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setNote(value);
                      setErrors((prev) => ({ ...prev, note: undefined }));
                    }}
                    onMouseEnter={() => setHoverNote(value)}
                    onMouseLeave={() => setHoverNote(0)}
                    className="p-0.5 rounded focus:outline-none focus:ring-2 focus:ring-[#002D62]/30"
                    role="radio"
                    aria-checked={note === value}
                    aria-label={`${value} étoile${value > 1 ? 's' : ''}`}
                  >
                    <Star
                      className={`w-6 h-6 transition-colors ${
                        active ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
            {errors.note && <p className="text-red-500 text-xs mt-1">{errors.note}</p>}
          </div>

          {/* Prénom */}
          <div className="lg:w-32 lg:shrink-0">
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
              Prénom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              placeholder="Jean"
              autoComplete="given-name"
              className={`${inputBase} ${errors.prenom ? 'border-red-400' : 'border-gray-300'}`}
            />
            {errors.prenom && <p className="text-red-500 text-xs mt-1">{errors.prenom}</p>}
          </div>

          {/* Nom */}
          <div className="lg:w-32 lg:shrink-0">
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
              Nom <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Dupont"
              autoComplete="family-name"
              className={`${inputBase} ${errors.nom ? 'border-red-400' : 'border-gray-300'}`}
            />
            {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom}</p>}
          </div>

          {/* Email */}
          <div className="lg:w-48 lg:shrink-0">
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="vous@email.fr"
              autoComplete="email"
              className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Avis */}
          <div className="flex-1 lg:min-w-0">
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
              Votre avis <span className="text-red-500">*</span>
            </label>
            <textarea
              name="texte"
              value={formData.texte}
              onChange={handleChange}
              placeholder="Partagez votre expérience avec Les Assureurs Experts..."
              rows={1}
              className={`${inputBase} resize-none h-[46px] lg:h-auto ${
                errors.texte ? 'border-red-400' : 'border-gray-300'
              }`}
            />
            {errors.texte && <p className="text-red-500 text-xs mt-1">{errors.texte}</p>}
          </div>

          {/* Bouton d'envoi */}
          <div className="lg:shrink-0 lg:self-end">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full lg:w-auto lg:min-w-[180px] h-[46px] px-6 rounded-md text-white text-sm font-bold tracking-wide transition-all duration-200 hover:brightness-110 active:scale-[0.98] shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ backgroundColor: '#c85000' }}
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Envoi...
                </>
              ) : (
                'Envoyer mon avis'
              )}
            </button>
          </div>
        </div>

        {/* Consentement + email + erreurs, pleine largeur */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-gray-500 text-xs mb-2">
            Votre email ne sera jamais affiché publiquement — il nous sert uniquement à vérifier
            votre avis.
          </p>
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, consent: e.target.checked }));
                setErrors((prev) => ({ ...prev, consent: undefined }));
              }}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[#002D62] focus:ring-[#002D62]"
            />
            <span className="text-xs text-gray-600 leading-relaxed">
              J'accepte que mon avis (prénom, initiale du nom et note) soit publié sur le site
              après modération.{' '}
              <Link to="/politique-confidentialite" className="underline hover:text-[#002D62]">
                Politique de confidentialité
              </Link>
              .
            </span>
          </label>
          {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
          {submitError && (
            <p className="text-sm text-red-600 mt-2">
              Une erreur est survenue lors de l'envoi. Merci de réessayer.
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;

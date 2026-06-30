import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle } from 'lucide-react';
import { submitLead, trackLeadConversion } from '../utils/lead';

interface ProductLeadFormProps {
  /** Valeur machine du type d'assurance (ex: 'assurance-auto'). */
  insuranceType: string;
  /** Libellé lisible (ex: 'Assurance auto'). */
  insuranceLabel: string;
  /** Texte du bouton de soumission. */
  submitLabel?: string;
}

/**
 * Formulaire de lead partagé pour les pages produits.
 * Soumet via fetch (utils/lead), affiche un écran de succès, pousse l'event GA4,
 * et impose un consentement RGPD avec lien vers la politique de confidentialité.
 */
const ProductLeadForm: React.FC<ProductLeadFormProps> = ({
  insuranceType,
  insuranceLabel,
  submitLabel = 'Obtenir mon devis',
}) => {
  const [data, setData] = useState({ fullName: '', phone: '', email: '', consent: false });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading || !data.consent) return;
    setSubmitError(false);
    setIsLoading(true);
    const ok = await submitLead({
      ...data,
      insuranceType,
      typeLabel: insuranceLabel,
      _subject: `Devis ${insuranceLabel}`,
    });
    setIsLoading(false);
    if (ok) {
      trackLeadConversion({ formLocation: `product_${insuranceType}`, insuranceType });
      setIsSubmitted(true);
    } else {
      setSubmitError(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
          <CheckCircle className="w-7 h-7 text-green-600" />
        </div>
        <h4 className="text-lg font-bold text-gray-900 mb-1">Demande envoyée !</h4>
        <p className="text-gray-600 text-sm">
          Un conseiller vous recontacte sous 24h pour votre devis {insuranceLabel.toLowerCase()}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="fullName"
        placeholder="Prénom et Nom"
        value={data.fullName}
        onChange={(e) => setData({ ...data, fullName: e.target.value })}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
        autoComplete="name"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Téléphone"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
        autoComplete="tel"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        required
        autoComplete="email"
      />

      <label className="flex items-start gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={data.consent}
          onChange={(e) => setData({ ...data, consent: e.target.checked })}
          required
          className="mt-0.5 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <span className="text-xs text-gray-600 leading-relaxed">
          J'accepte d'être recontacté par Les Assureurs Experts au sujet de ma demande.{' '}
          <Link to="/politique-confidentialite" className="text-blue-600 underline hover:text-blue-700">
            Politique de confidentialité
          </Link>
          .
        </span>
      </label>

      {submitError && (
        <p className="text-sm text-red-600">
          Une erreur est survenue. Réessayez ou appelez le 01 62 17 11 11.
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Phone className="w-5 h-5" />
            {submitLabel}
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        🔒 Réponse sous 24h • Gratuit et sans engagement
      </p>
    </form>
  );
};

export default ProductLeadForm;

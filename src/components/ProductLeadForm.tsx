import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { submitLead, trackLeadConversion } from '../utils/lead';

interface ProductLeadFormProps {
  /** Valeur machine du type d'assurance (ex: 'assurance-auto'). */
  insuranceType: string;
  /** Libellé lisible (ex: 'Assurance auto'). */
  insuranceLabel: string;
  /** Texte du bouton de soumission. */
  submitLabel?: string;
  /**
   * Région ciblée pour les landing pages de campagne géo (ex: 'Paris').
   * Quand fournie, elle est jointe au lead Formspree et à l'event GA4,
   * et le `form_location` bascule sur `region_<insuranceType>`.
   */
  region?: string;
}

/**
 * Formulaire de lead partagé pour les pages produits.
 * Soumet via fetch (utils/lead), affiche un écran de succès, pousse l'event GA4.
 * Le consentement RGPD est informatif (implicite à la soumission), pas une case à cocher.
 */
const ProductLeadForm: React.FC<ProductLeadFormProps> = ({
  insuranceType,
  insuranceLabel,
  submitLabel = 'Soumettre',
  region,
}) => {
  const [data, setData] = useState({ fullName: '', phone: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    setSubmitError(false);
    setIsLoading(true);
    const ok = await submitLead({
      ...data,
      insuranceType,
      typeLabel: insuranceLabel,
      ...(region ? { region } : {}),
      _subject: region ? `Devis ${insuranceLabel} — ${region}` : `Devis ${insuranceLabel}`,
    });
    setIsLoading(false);
    if (ok) {
      trackLeadConversion({
        formLocation: region ? `region_${insuranceType}` : `product_${insuranceType}`,
        insuranceType,
        region,
      });
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
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
        required
        autoComplete="name"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Téléphone"
        value={data.phone}
        onChange={(e) => setData({ ...data, phone: e.target.value })}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
        required
        autoComplete="tel"
        maxLength={20}
        pattern="^(?:(?:\+33|0033)[\s.\-]?[1-9]|0[1-9])(?:[\s.\-]?\d{2}){4}$"
        title="Numéro de téléphone français valide (ex: 06 12 34 56 78 ou +33 6 12 34 56 78)"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
        required
        autoComplete="email"
        pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
        title="Adresse email valide (ex: nom@domaine.fr)"
      />

      <p className="text-xs text-gray-500 leading-relaxed">
        En soumettant ce formulaire, j'accepte d'être recontacté(e) par Les Assureurs Experts au
        sujet de ma demande.{' '}
        <Link to="/politique-confidentialite" className="text-brand-navy underline hover:text-brand-accent">
          Politique de confidentialité
        </Link>
        .
      </p>

      {submitError && (
        <p className="text-sm text-red-600">
          Une erreur est survenue. Réessayez ou appelez le +33 1 62 17 11 11.
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-brand-accent hover:bg-brand-accentDark text-white py-4 rounded-md font-semibold text-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Envoi en cours...
          </>
        ) : (
          submitLabel
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Réponse sous 24h • Gratuit et sans engagement
      </p>
    </form>
  );
};

export default ProductLeadForm;

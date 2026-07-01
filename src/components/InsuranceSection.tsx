import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Car, Bike, Plane, Anchor, ArrowRight, PiggyBank, Briefcase, HardHat, Users, Flower2, CheckCircle, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { submitLead, trackLeadConversion } from '../utils/lead';

const insuranceTypes = [
  { name: 'Mutuelle santé', icon: <Heart className="w-8 h-8" />, color: 'from-red-400 to-pink-500', bgColor: 'bg-red-50', hoverColor: 'hover:bg-red-100', path: '/mutuelle-sante' },
  { name: 'Assurance emprunteur', icon: <Shield className="w-8 h-8" />, color: 'from-blue-400 to-blue-600', bgColor: 'bg-blue-50', hoverColor: 'hover:bg-blue-100', path: '/assurance-emprunteur' },
  { name: 'Assurance 2 roues', icon: <Bike className="w-8 h-8" />, color: 'from-green-400 to-emerald-500', bgColor: 'bg-green-50', hoverColor: 'hover:bg-green-100', path: '/assurance-2-roues' },
  { name: 'Expatriés', icon: <Plane className="w-8 h-8" />, color: 'from-sky-400 to-cyan-500', bgColor: 'bg-sky-50', hoverColor: 'hover:bg-sky-100', path: '/expatries' },
  { name: 'Assurance auto', icon: <Car className="w-8 h-8" />, color: 'from-orange-400 to-red-500', bgColor: 'bg-orange-50', hoverColor: 'hover:bg-orange-100', path: '/assurance-auto' },
  { name: 'Prévoyance', icon: <Shield className="w-8 h-8" />, color: 'from-teal-400 to-cyan-500', bgColor: 'bg-teal-50', hoverColor: 'hover:bg-teal-100', path: '/prevoyance' },
  { name: 'Bateau', icon: <Anchor className="w-8 h-8" />, color: 'from-blue-500 to-blue-700', bgColor: 'bg-blue-50', hoverColor: 'hover:bg-blue-100', path: '/assurance-bateau' },
  { name: 'Assurance patrimoine', icon: <PiggyBank className="w-8 h-8" />, color: 'from-amber-400 to-yellow-500', bgColor: 'bg-amber-50', hoverColor: 'hover:bg-amber-100', path: '/per' },
  { name: 'Assurance professionnelle', icon: <Briefcase className="w-8 h-8" />, color: 'from-slate-400 to-slate-600', bgColor: 'bg-slate-50', hoverColor: 'hover:bg-slate-100', path: '/assurance-professionnelle' },
  { name: 'Assurance décennale', icon: <HardHat className="w-8 h-8" />, color: 'from-zinc-400 to-gray-600', bgColor: 'bg-zinc-50', hoverColor: 'hover:bg-zinc-100', path: '/assurance-decennale' },
  { name: 'Santé & Prévoyance Collective', icon: <Users className="w-8 h-8" />, color: 'from-emerald-400 to-teal-600', bgColor: 'bg-emerald-50', hoverColor: 'hover:bg-emerald-100', path: '/sante-prevoyance-collective' },
  { name: 'Capital Obsèques', icon: <Flower2 className="w-8 h-8" />, color: 'from-rose-400 to-pink-600', bgColor: 'bg-rose-50', hoverColor: 'hover:bg-rose-100', path: '/capital-obseques' },
];

interface LeadFormData {
  besoin: string;
  contrat_actuel: string;
  cotisation_actuelle: string;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  code_postal: string;
  date_naissance: string;
  message: string;
  consent: boolean;
}

const INITIAL_FORM: LeadFormData = {
  besoin: '',
  contrat_actuel: '',
  cotisation_actuelle: '',
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  code_postal: '',
  date_naissance: '',
  message: '',
  consent: false,
};

interface FormErrors {
  besoin?: string;
  nom?: string;
  prenom?: string;
  email?: string;
  telephone?: string;
  consent?: string;
}

const InsuranceSection: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>(INITIAL_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!formData.besoin) next.besoin = 'Veuillez sélectionner un type.';
    if (!formData.nom.trim()) next.nom = 'Ce champ est obligatoire.';
    if (!formData.prenom.trim()) next.prenom = 'Ce champ est obligatoire.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = 'Adresse email invalide.';
    if (!formData.telephone.trim() || !/^(\+33|0033|0)[1-9](\d{8})$/.test(formData.telephone.replace(/\s/g, '')))
      next.telephone = 'Format France invalide (ex: 06 12 34 56 78).';
    if (!formData.consent) next.consent = "Veuillez accepter d'être recontacté.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    const ok = await submitLead({ ...formData, _subject: `Nouvelle demande — ${formData.besoin}` });
    setIsLoading(false);
    if (ok) {
      trackLeadConversion({ formLocation: 'home_section', insuranceType: formData.besoin });
      setIsSubmitted(true);
    } else {
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    }
  };

  const inputBase =
    'w-full px-4 py-3 rounded-lg border text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#002D62]/30 focus:border-[#002D62] transition-colors bg-white';

  const LeadForm = (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      {/* Form header */}
      <div className="px-7 py-5" style={{ backgroundColor: '#002D62' }}>
        <h3 className="text-xl font-bold text-white leading-snug">
          Comparez les offres adaptées à votre situation
        </h3>
        <p className="text-blue-200 text-sm mt-1">Réponse personnalisée sous 24h par un expert</p>
      </div>

      {isSubmitted ? (
        <div className="px-7 py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="text-xl font-bold mb-3" style={{ color: '#002D62' }}>
            Demande bien envoyée !
          </h4>
          <p className="text-gray-600 text-base leading-relaxed">
            Merci, votre demande a bien été envoyée.<br />
            Un conseiller vous rappelle rapidement.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="px-7 py-6 space-y-4">
          {/* besoin */}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
              Type d'assurance <span className="text-red-500">*</span>
            </label>
            <select
              name="besoin"
              value={formData.besoin}
              onChange={handleChange}
              className={`${inputBase} ${errors.besoin ? 'border-red-400' : 'border-gray-300'}`}
              required
            >
              <option value="">Sélectionnez un type...</option>
              <option value="Mutuelle santé">Mutuelle santé</option>
              <option value="Assurance emprunteur">Assurance emprunteur</option>
              <option value="Prévoyance">Prévoyance</option>
              <option value="Expatriés">Expatriés</option>
              <option value="Assurance auto">Assurance auto</option>
              <option value="Assurance 2 roues">Assurance 2 roues</option>
              <option value="Assurance bateau">Assurance bateau</option>
              <option value="Assurance habitation">Assurance habitation</option>
              <option value="Plan Épargne Retraite (PER)">Plan Épargne Retraite (PER)</option>
              <option value="Assurance vie">Assurance vie</option>
              <option value="Assurance professionnelle">Assurance professionnelle</option>
              <option value="Assurance décennale">Assurance décennale</option>
              <option value="Santé & Prévoyance Collective">Santé & Prévoyance Collective</option>
              <option value="Capital Obsèques">Capital Obsèques</option>
              <option value="Autre">Autre</option>
            </select>
            {errors.besoin && <p className="text-red-500 text-xs mt-1">{errors.besoin}</p>}
          </div>

          {/* contrat_actuel */}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
              Contrat ou formule actuelle
            </label>
            <input
              type="text"
              name="contrat_actuel"
              value={formData.contrat_actuel}
              onChange={handleChange}
              placeholder="Ex : Mutuelle Senior, Allianz..."
              className={`${inputBase} border-gray-300`}
            />
            <p className="text-gray-400 text-xs mt-1">Laissez vide si vous n'avez pas de contrat.</p>
          </div>

          {/* cotisation_actuelle */}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
              Cotisation actuelle
            </label>
            <input
              type="text"
              name="cotisation_actuelle"
              value={formData.cotisation_actuelle}
              onChange={handleChange}
              placeholder="Ex : 50€/mois"
              className={`${inputBase} border-gray-300`}
            />
          </div>

          {/* nom + prenom côte à côte */}
          <div className="grid grid-cols-2 gap-3">
            <div>
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
            <div>
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
          </div>

          {/* email */}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
              Adresse email <span className="text-red-500">*</span>
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

          {/* telephone */}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
              Téléphone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="06 12 34 56 78"
              autoComplete="tel"
              className={`${inputBase} ${errors.telephone ? 'border-red-400' : 'border-gray-300'}`}
            />
            {errors.telephone && <p className="text-red-500 text-xs mt-1">{errors.telephone}</p>}
          </div>

          {/* code_postal + date_naissance côte à côte */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
                Code postal
              </label>
              <input
                type="text"
                name="code_postal"
                value={formData.code_postal}
                onChange={handleChange}
                placeholder="75001"
                autoComplete="postal-code"
                maxLength={5}
                className={`${inputBase} border-gray-300`}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
                Date de naissance
              </label>
              <input
                type="date"
                name="date_naissance"
                value={formData.date_naissance}
                onChange={handleChange}
                className={`${inputBase} border-gray-300`}
              />
            </div>
          </div>

          {/* message */}
          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
              Message (optionnel)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Précisez votre situation ou votre demande..."
              rows={3}
              className={`${inputBase} border-gray-300 resize-none`}
            />
          </div>

          {/* Consentement RGPD */}
          <div>
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
                J'accepte d'être recontacté par Les Assureurs Experts au sujet de ma demande.{' '}
                <Link to="/politique-confidentialite" className="underline hover:text-[#002D62]">
                  Politique de confidentialité
                </Link>
                .
              </span>
            </label>
            {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
          </div>

          {/* CTA */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-xl text-white text-base font-bold tracking-wide transition-all duration-200 hover:brightness-110 active:scale-[0.98] shadow-lg disabled:opacity-60 disabled:cursor-not-allowed min-h-[56px] flex items-center justify-center gap-2"
            style={{ backgroundColor: '#ff6600' }}
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Envoi en cours...
              </>
            ) : (
              'Comparer les offres'
            )}
          </button>

          <p className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
            <Lock className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-400" />
            Vos informations restent strictement confidentielles. Réponse sous 24h.
          </p>
        </form>
      )}
    </div>
  );

  return (
    <section className="py-10 xl:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 xl:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 xl:mb-6" style={{ color: '#002D62' }}>
            Découvrez toutes nos assurances
          </h2>
          <p className="text-lg xl:text-xl text-slate-600 max-w-3xl mx-auto">
            Solutions personnalisées avec accompagnement expert pour tous vos besoins
          </p>
        </motion.div>

        {/* MOBILE : form first, then cards */}
        <div className="xl:hidden mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {LeadForm}
          </motion.div>
        </div>

        {/* DESKTOP two-column layout */}
        <div className="flex flex-col xl:flex-row gap-12 items-start">
          {/* Insurance Cards Grid */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {insuranceTypes.map((insurance, index) => (
                <motion.div
                  key={index}
                  className={`group ${insurance.bgColor} ${insurance.hoverColor} rounded-2xl p-5 transition-all duration-300 hover:shadow-xl border border-gray-100`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <motion.div
                    className={`relative bg-gradient-to-br ${insurance.color} p-3 rounded-xl mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 w-fit`}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
                  >
                    <motion.div
                      className="text-white drop-shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      {insurance.icon}
                    </motion.div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-slate-900 text-base leading-tight">{insurance.name}</h3>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to="/devis"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        Devis gratuit
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-base text-slate-600 mb-4">
                Besoin d'aide pour choisir ? Nos experts vous conseillent.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl text-base font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#002D62' }}
              >
                Parler à un expert
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* DESKTOP form — hidden on mobile (shown above instead) */}
          <motion.div
            className="hidden xl:block w-[420px] flex-shrink-0 xl:sticky xl:top-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {LeadForm}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;

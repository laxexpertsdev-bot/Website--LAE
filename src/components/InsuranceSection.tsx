import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Home, Car, Bike, Plane, Anchor, ArrowRight, PiggyBank, Briefcase, HardHat, Users, Flower2, CheckCircle, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const insuranceTypes = [
  { name: 'Mutuelle santé', icon: <Heart className="w-8 h-8" />, cta: 'Obtenir un tarif', color: 'from-red-400 to-pink-500', bgColor: 'bg-red-50', hoverColor: 'hover:bg-red-100', path: '/mutuelle-sante' },
  { name: 'Assurance emprunteur', icon: <Shield className="w-8 h-8" />, cta: 'Obtenir un tarif', color: 'from-blue-400 to-blue-600', bgColor: 'bg-blue-50', hoverColor: 'hover:bg-blue-100', path: '/assurance-emprunteur' },
  { name: 'Assurance 2 roues', icon: <Bike className="w-8 h-8" />, cta: 'Obtenir un tarif', color: 'from-green-400 to-emerald-500', bgColor: 'bg-green-50', hoverColor: 'hover:bg-green-100', path: '/assurance-2-roues' },
  { name: 'Expatriés', icon: <Plane className="w-8 h-8" />, cta: 'Obtenir un tarif', color: 'from-sky-400 to-cyan-500', bgColor: 'bg-sky-50', hoverColor: 'hover:bg-sky-100', path: '/expatries' },
  { name: 'Assurance auto', icon: <Car className="w-8 h-8" />, cta: 'Demander un devis', color: 'from-orange-400 to-red-500', bgColor: 'bg-orange-50', hoverColor: 'hover:bg-orange-100', path: '/assurance-auto' },
  { name: 'Prévoyance', icon: <Shield className="w-8 h-8" />, cta: 'Demander un devis', color: 'from-teal-400 to-cyan-500', bgColor: 'bg-teal-50', hoverColor: 'hover:bg-teal-100', path: '/prevoyance' },
  { name: 'Bateau', icon: <Anchor className="w-8 h-8" />, cta: 'Obtenir un tarif', color: 'from-blue-500 to-blue-700', bgColor: 'bg-blue-50', hoverColor: 'hover:bg-blue-100', path: '/assurance-bateau' },
  { name: 'Assurance patrimoine', subtitle: 'PER & Assurance vie sur-mesure', icon: <PiggyBank className="w-8 h-8" />, cta: 'Obtenir un tarif', color: 'from-amber-400 to-yellow-500', bgColor: 'bg-amber-50', hoverColor: 'hover:bg-amber-100', path: '/per' },
  { name: 'Assurance professionnelle', subtitle: 'RC Pro, multirisque professionnelle', icon: <Briefcase className="w-8 h-8" />, cta: 'Obtenir un tarif', color: 'from-slate-400 to-slate-600', bgColor: 'bg-slate-50', hoverColor: 'hover:bg-slate-100', path: '/assurance-professionnelle' },
  { name: 'Assurance décennale', subtitle: 'Garantie décennale, responsabilité construction', icon: <HardHat className="w-8 h-8" />, cta: 'Obtenir un tarif', color: 'from-zinc-400 to-gray-600', bgColor: 'bg-zinc-50', hoverColor: 'hover:bg-zinc-100', path: '/assurance-decennale' },
  { name: 'Santé & Prévoyance Collective', subtitle: "Mutuelle d'entreprise, prévoyance collective", icon: <Users className="w-8 h-8" />, cta: 'Obtenir un tarif', color: 'from-emerald-400 to-teal-600', bgColor: 'bg-emerald-50', hoverColor: 'hover:bg-emerald-100', path: '/sante-prevoyance-collective' },
  { name: 'Capital Obsèques', subtitle: 'Anticiper les frais, protéger ses proches', icon: <Flower2 className="w-8 h-8" />, cta: 'Demander un tarif', color: 'from-rose-400 to-pink-600', bgColor: 'bg-rose-50', hoverColor: 'hover:bg-rose-100', path: '/capital-obseques' },
];

interface LeadFormData {
  insuranceType: string;
  currentContract: string;
  currentPremium: string;
  fullName: string;
  email: string;
  phone: string;
}

const INITIAL_FORM: LeadFormData = {
  insuranceType: '',
  currentContract: '',
  currentPremium: '',
  fullName: '',
  email: '',
  phone: '',
};

const InsuranceSection: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>(INITIAL_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<LeadFormData>>({});

  const validate = (): boolean => {
    const next: Partial<LeadFormData> = {};
    if (!formData.insuranceType) next.insuranceType = 'Veuillez sélectionner un type.';
    if (!formData.fullName.trim()) next.fullName = 'Ce champ est obligatoire.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      next.email = 'Adresse email invalide.';
    if (!formData.phone.trim() || !/^(\+33|0033|0)[1-9](\d{8})$/.test(formData.phone.replace(/\s/g, '')))
      next.phone = 'Format France invalide (ex: 06 12 34 56 78).';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof LeadFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/mblnydqy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch {
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputBase =
    'w-full px-4 py-3 rounded-lg border text-gray-900 text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#002D62]/30 focus:border-[#002D62] transition-colors';

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#002D62' }}>
            Découvrez toutes nos assurances
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Solutions personnalisées avec accompagnement expert pour tous vos besoins
          </p>
        </motion.div>

        {/* Two-column layout: cards + form */}
        <div className="flex flex-col xl:flex-row gap-12 items-start">
          {/* Insurance Cards Grid */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {insuranceTypes.map((insurance, index) => (
                <motion.div
                  key={index}
                  className={`group ${insurance.bgColor} ${insurance.hoverColor} rounded-2xl p-5 transition-all duration-300 hover:shadow-xl border border-gray-100 cursor-pointer`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  onClick={() => (window.location.href = insurance.path)}
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
                    {insurance.subtitle && (
                      <p className="text-xs text-slate-500 leading-snug">{insurance.subtitle}</p>
                    )}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to="/devis"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        {insurance.cta}
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

          {/* Lead Capture Form */}
          <motion.div
            className="w-full xl:w-[420px] flex-shrink-0 xl:sticky xl:top-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Form header */}
              <div className="px-8 py-6" style={{ backgroundColor: '#002D62' }}>
                <h3 className="text-xl font-bold text-white leading-snug">
                  Comparez les offres adaptées à votre situation
                </h3>
                <p className="text-blue-200 text-sm mt-1">
                  Réponse personnalisée sous 24h par un expert
                </p>
              </div>

              {isSubmitted ? (
                <div className="px-8 py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: '#002D62' }}>
                    Demande enregistrée
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Un expert vous contactera sous 24h pour vous présenter les meilleures offres.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="px-8 py-7 space-y-5">
                  {/* 1. Type d'assurance */}
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
                      Type d'assurance <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="insuranceType"
                      value={formData.insuranceType}
                      onChange={handleChange}
                      className={`${inputBase} bg-white ${errors.insuranceType ? 'border-red-400' : 'border-gray-300'}`}
                      required
                    >
                      <option value="">Sélectionnez un type...</option>
                      <option value="Santé">Santé</option>
                      <option value="Santé TNS">Santé TNS</option>
                      <option value="Décennale">Décennale</option>
                      <option value="Patrimoine">Patrimoine</option>
                      <option value="Autre">Autre</option>
                    </select>
                    {errors.insuranceType && (
                      <p className="text-red-500 text-xs mt-1">{errors.insuranceType}</p>
                    )}
                  </div>

                  {/* 2. Contrat actuel */}
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
                      Votre contrat ou formule actuelle
                    </label>
                    <input
                      type="text"
                      name="currentContract"
                      value={formData.currentContract}
                      onChange={handleChange}
                      placeholder="Ex : Mutuelle Senior, Allianz..."
                      className={`${inputBase} border-gray-300`}
                    />
                    <p className="text-gray-400 text-xs mt-1">Laissez vide si vous n'avez pas de contrat.</p>
                  </div>

                  {/* 3. Montant actuel */}
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
                      Combien payez-vous actuellement ?
                    </label>
                    <input
                      type="text"
                      name="currentPremium"
                      value={formData.currentPremium}
                      onChange={handleChange}
                      placeholder="Ex : 50€/mois"
                      className={`${inputBase} border-gray-300`}
                    />
                  </div>

                  {/* 4. Nom & Prénom */}
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
                      Nom et Prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ex : Jean Dupont"
                      autoComplete="name"
                      className={`${inputBase} ${errors.fullName ? 'border-red-400' : 'border-gray-300'}`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* 5. Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
                      Adresse email professionnelle <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vous@entreprise.fr"
                      autoComplete="email"
                      className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* 6. Téléphone */}
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#002D62' }}>
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 12 34 56 78"
                      autoComplete="tel"
                      className={`${inputBase} ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
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

                  {/* Reassurance */}
                  <p className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
                    <Lock className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-gray-400" />
                    Vos informations restent strictement confidentielles. Réponse sous 24h.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;

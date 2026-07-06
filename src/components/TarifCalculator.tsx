import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, TrendingDown, CheckCircle, Info, Phone } from 'lucide-react';
import { submitLead, trackLeadConversion } from '../utils/lead';

const TarifCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    type: '',
    age: '',
    statut: '',
    cotisation: ''
  });
  const [result, setResult] = useState<{
    message: string;
    type: 'success' | 'warning' | 'info';
    show: boolean;
  }>({
    message: '',
    type: 'info',
    show: false
  });
  const [leadForm, setLeadForm] = useState({
    prenom: '',
    telephone: '',
    email: '',
    consent: false
  });
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadError, setLeadError] = useState(false);
  // Valeurs provisoires (€/mois) à valider/ajuster avec de vraies données marché.
  const moyennes = {
    sante: { salarie: 45, tns: 55, retraite: 80, etudiant: 22 },
    emprunteur: { salarie: 28, tns: 34, retraite: 40, etudiant: 24 },
    auto: { salarie: 52, tns: 58, retraite: 48, etudiant: 72 },
    deuxRoues: { salarie: 26, tns: 30, retraite: 25, etudiant: 28 },
    prevoyance: { salarie: 30, tns: 38, retraite: 42, etudiant: 20 },
    expatries: { salarie: 120, tns: 150, retraite: 180, etudiant: 90 },
    bateau: { salarie: 40, tns: 45, retraite: 40, etudiant: 35 },
    habitation: { salarie: 18, tns: 22, retraite: 20, etudiant: 15 },
    per: { salarie: 100, tns: 150, retraite: 120, etudiant: 50 },
    assuranceVie: { salarie: 100, tns: 150, retraite: 120, etudiant: 50 },
    professionnelle: { salarie: 45, tns: 60, retraite: 45, etudiant: 30 },
    decennale: { salarie: 150, tns: 200, retraite: 150, etudiant: 120 },
    collective: { salarie: 40, tns: 45, retraite: 40, etudiant: 35 },
    obseques: { salarie: 20, tns: 25, retraite: 30, etudiant: 15 }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLeadInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLeadForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (leadLoading || !leadForm.consent) return;
    setLeadError(false);
    setLeadLoading(true);
    const ok = await submitLead({
      firstName: leadForm.prenom,
      phone: leadForm.telephone,
      email: leadForm.email,
      type: formData.type,
      age: formData.age,
      statut: formData.statut,
      cotisation: formData.cotisation,
      _subject: `Simulation tarif — ${formData.type}`,
      message: `Demande simulation - Type: ${formData.type}, Âge: ${formData.age}, Statut: ${formData.statut}, Cotisation: ${formData.cotisation}€/mois`,
    });
    setLeadLoading(false);
    if (ok) {
      trackLeadConversion({ formLocation: 'tarif_calculator', insuranceType: formData.type });
      setLeadSubmitted(true);
    } else {
      setLeadError(true);
    }
  };

  const calcTarif = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { type, statut, cotisation } = formData;
    const cotisationNum = parseFloat(cotisation);
    
    if (!moyennes[type as keyof typeof moyennes] || !moyennes[type as keyof typeof moyennes][statut as keyof typeof moyennes.sante]) {
      alert("Profil non reconnu.");
      return;
    }

    const moyenne = moyennes[type as keyof typeof moyennes][statut as keyof typeof moyennes.sante];
    const ecart = cotisationNum - moyenne;
    let message = "";
    let resultType: 'success' | 'warning' | 'info' = 'info';

    if (ecart > 10) {
      message = `Vous payez environ ${ecart.toFixed(0)} € de plus que la moyenne pour votre profil.`;
      resultType = 'warning';
    } else if (ecart < -10) {
      message = `Votre cotisation est inférieure à la moyenne. Bravo !`;
      resultType = 'success';
    } else {
      message = `ℹVous êtes dans la moyenne pour votre profil.`;
      resultType = 'info';
    }

    setResult({
      message,
      type: resultType,
      show: true
    });

    // Scroll to result
    setTimeout(() => {
      document.getElementById('ae-result')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const getResultIcon = () => {
    switch (result.type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'warning':
        return <TrendingDown className="w-5 h-5 text-orange-600" />;
      default:
        return <Info className="w-5 h-5 text-blue-600" />;
    }
  };

  const getResultBgColor = () => {
    switch (result.type) {
      case 'success':
        return 'bg-green-50 border-green-200';
      case 'warning':
        return 'bg-orange-50 border-orange-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Calculator className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Calculez si vous payez trop cher
          </h2>
          <p className="text-lg text-gray-600">
            Comparez votre cotisation actuelle à la moyenne observée selon votre profil. 
            Recevez une simulation gratuite sans engagement.
          </p>
        </div>

        <form onSubmit={calcTarif} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="tarif-type" className="block text-sm font-medium text-gray-700 mb-2">
                Type d'assurance *
              </label>
              <select
                id="tarif-type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">— Sélectionnez —</option>
                <option value="sante">Mutuelle santé</option>
                <option value="emprunteur">Assurance emprunteur</option>
                <option value="auto">Assurance auto</option>
                <option value="deuxRoues">Assurance 2 roues</option>
                <option value="prevoyance">Prévoyance</option>
                <option value="expatries">Expatriés</option>
                <option value="bateau">Assurance bateau</option>
                <option value="habitation">Assurance habitation</option>
                <option value="per">Plan Épargne Retraite (PER)</option>
                <option value="assuranceVie">Assurance vie</option>
                <option value="professionnelle">Assurance professionnelle</option>
                <option value="decennale">Assurance décennale</option>
                <option value="collective">Santé & Prévoyance Collective</option>
                <option value="obseques">Capital Obsèques</option>
              </select>
            </div>

            <div>
              <label htmlFor="tarif-age" className="block text-sm font-medium text-gray-700 mb-2">
                Âge *
              </label>
              <input
                id="tarif-age"
                type="number"
                name="age"
                min="16"
                placeholder="Ex : 42"
                value={formData.age}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="tarif-statut" className="block text-sm font-medium text-gray-700 mb-2">
                Statut *
              </label>
              <select
                id="tarif-statut"
                name="statut"
                value={formData.statut}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">— Sélectionnez —</option>
                <option value="salarie">Salarié</option>
                <option value="tns">Indépendant / TNS</option>
                <option value="retraite">Retraité</option>
                <option value="etudiant">Étudiant</option>
              </select>
            </div>

            <div>
              <label htmlFor="tarif-cotisation" className="block text-sm font-medium text-gray-700 mb-2">
                Cotisation actuelle (€/mois) *
              </label>
              <input
                id="tarif-cotisation"
                type="number"
                name="cotisation"
                placeholder="Ex : 75"
                value={formData.cotisation}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-md transition-colors duration-200 flex items-center gap-2 mx-auto"
            >
              <Calculator className="w-5 h-5" />
              Calculer
            </button>
          </div>
        </form>

        {result.show && (
          <div id="ae-result" className="mt-8 pt-8 border-t border-gray-200">
            <div className={`${getResultBgColor()} border rounded-md p-6 mb-6`}>
              <div className="flex items-center gap-3 mb-2">
                {getResultIcon()}
                <p className="font-semibold text-lg text-gray-900">
                  {result.message}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-md p-6">
              <p className="text-gray-700 mb-6">
                Souhaitez-vous recevoir une étude personnalisée gratuite ? Laissez-nous vos coordonnées :
              </p>

              {leadSubmitted ? (
                <div className="text-center py-6 bg-green-50 border border-green-200 rounded-md">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <p className="font-semibold text-gray-900">Demande envoyée !</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Un conseiller vous recontacte sous 24h avec votre étude personnalisée.
                  </p>
                </div>
              ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-md">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Prénom"
                  value={leadForm.prenom}
                  onChange={handleLeadInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Téléphone"
                  value={leadForm.telephone}
                  onChange={handleLeadInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={leadForm.email}
                  onChange={handleLeadInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={leadForm.consent}
                    onChange={(e) => setLeadForm((prev) => ({ ...prev, consent: e.target.checked }))}
                    required
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    J'accepte d'être recontacté par Les Assureurs Experts.{' '}
                    <Link to="/politique-confidentialite" className="underline hover:text-green-700">
                      Politique de confidentialité
                    </Link>
                    .
                  </span>
                </label>
                {leadError && (
                  <p className="text-sm text-red-600">
                    Erreur lors de l'envoi. Réessayez ou appelez le +33 1 62 17 11 11.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={leadLoading}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {leadLoading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Phone className="w-5 h-5" />
                      Recevoir ma simulation gratuite
                    </>
                  )}
                </button>
              </form>
              )}

              <p className="text-xs text-gray-500 mt-4">
                Vos données sont protégées et ne seront jamais revendues
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TarifCalculator;
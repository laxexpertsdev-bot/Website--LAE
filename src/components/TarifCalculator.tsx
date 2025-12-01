import React, { useState } from 'react';
import { Calculator, TrendingDown, CheckCircle, Info, Phone } from 'lucide-react';

// Endpoint pour envoi des données (à configurer)
const ENDPOINT = "https://script.google.com/macros/s/XXXXXXXX/exec"; // NE PAS CHANGER, je remplacerai l'URL

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
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const moyennes = {
    sante: { salarie: 45, tns: 55, retraite: 80, etudiant: 22 },
    emprunteur: { salarie: 28, tns: 34, retraite: 40, etudiant: 24 },
    auto: { salarie: 52, tns: 58, retraite: 48, etudiant: 72 },
    deuxRoues: { salarie: 26, tns: 30, retraite: 25, etudiant: 28 },
    prevoyance: { salarie: 30, tns: 38, retraite: 42, etudiant: 20 }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLeadInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLeadForm(prev => ({ ...prev, [name]: value }));
  };

  const calcTarif = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { type, age, statut, cotisation } = formData;
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
      message = `📉 Vous payez environ ${ecart.toFixed(0)} € de plus que la moyenne pour votre profil.`;
      resultType = 'warning';
    } else if (ecart < -10) {
      message = `✅ Votre cotisation est inférieure à la moyenne. Bravo !`;
      resultType = 'success';
    } else {
      message = `ℹ️ Vous êtes dans la moyenne pour votre profil.`;
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

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mblnydqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          nom: leadForm.prenom,
          telephone: leadForm.telephone,
          email: leadForm.email,
          message: `Demande simulation - Type: ${formData.type}, Âge: ${formData.age}, Statut: ${formData.statut}, Cotisation: ${formData.cotisation}€/mois`,
          source: "site"
        })
      });
      
      if (response.ok) {
        alert('Votre demande a été envoyée avec succès ! Nous vous contacterons sous 24h.');
        setLeadForm({ prenom: '', telephone: '', email: '' });
      } else {
        alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
      }
    } catch (error) {
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsSubmitting(false);
    }
  };

        nom: leadForm.prenom,
        telephone: leadForm.telephone,
        email: leadForm.email,
        message: `Demande simulation - Type: ${formData.type}, Âge: ${formData.age}, Statut: ${formData.statut}, Cotisation: ${formData.cotisation}€/mois`,
        source: "site"
      };
      
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });
      
      if (response.ok) {
        alert('Votre demande a été envoyée avec succès ! Nous vous contacterons sous 24h.');
        setLeadForm({ prenom: '', telephone: '', email: '' });
      } else {
        throw new Error('Erreur serveur');
      }
    } catch (error) {
      console.error('Erreur envoi formulaire:', error);
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type d'assurance *
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">— Sélectionnez —</option>
                <option value="sante">Mutuelle santé</option>
                <option value="emprunteur">Assurance emprunteur</option>
                <option value="auto">Assurance auto</option>
                <option value="deuxRoues">Assurance 2 roues</option>
                <option value="prevoyance">Prévoyance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Âge *
              </label>
              <input
                type="number"
                name="age"
                min="16"
                placeholder="Ex : 42"
                value={formData.age}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Statut *
              </label>
              <select
                name="statut"
                value={formData.statut}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">— Sélectionnez —</option>
                <option value="salarie">Salarié</option>
                <option value="tns">Indépendant / TNS</option>
                <option value="retraite">Retraité</option>
                <option value="etudiant">Étudiant</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cotisation actuelle (€/mois) *
              </label>
              <input
                type="number"
                name="cotisation"
                placeholder="Ex : 75"
                value={formData.cotisation}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
            >
              <Calculator className="w-5 h-5" />
              Calculer
            </button>
          </div>
        </form>

        {result.show && (
          <div id="ae-result" className="mt-8 pt-8 border-t border-gray-200">
            <div className={`${getResultBgColor()} border rounded-lg p-6 mb-6`}>
              <div className="flex items-center gap-3 mb-2">
                {getResultIcon()}
                <p className="font-semibold text-lg text-gray-900">
                  {result.message}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-6">
                Souhaitez-vous recevoir une étude personnalisée gratuite ? Laissez-nous vos coordonnées :
              </p>

              <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-md">
                <input
                  type="text"
                  name="prenom"
                  placeholder="Prénom"
                  value={leadForm.prenom}
                  onChange={handleLeadInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Téléphone"
                  value={leadForm.telephone}
                  onChange={handleLeadInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={leadForm.email}
                  onChange={handleLeadInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} text-white font-bold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2`}
                >
                  <Phone className="w-5 h-5" />
                  {isSubmitting ? 'Envoi...' : 'Recevoir ma simulation gratuite'}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                🔒 Vos données sont protégées et ne seront jamais revendues
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TarifCalculator;
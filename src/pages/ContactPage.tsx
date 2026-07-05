import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { submitLead, trackLeadConversion } from '../utils/lead';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading || !formData.consent) return;
    setSubmitError(false);
    setIsLoading(true);
    const ok = await submitLead({ ...formData, _subject: `Contact — ${formData.subject || 'message'}` });
    setIsLoading(false);
    if (ok) {
      trackLeadConversion({ formLocation: 'contact', insuranceType: formData.subject });
      setIsSubmitted(true);
    } else {
      setSubmitError(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact : Courtier en Assurance à Paris | Les Assureurs Experts</title>
        <meta name="description" content="Contactez nos experts en assurance par téléphone, email, WhatsApp ou formulaire. 138 Boulevard Haussmann, 75008 Paris. Réponse rapide du lundi au samedi." />
        <link rel="canonical" href="https://lesassureursexperts.fr/contact" />
      </Helmet>
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Adresse</h3>
                    <p className="text-gray-600">
                      138 Boulevard Haussmann<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Téléphone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+33162171111" className="hover:text-blue-600 transition-colors">
                        +33 1 62 17 11 11
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@lesassureursexperts.fr" className="hover:text-blue-600 transition-colors">
                        contact@lesassureursexperts.fr
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Horaires</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Lundi - Vendredi : 9h00 - 18h00</p>
                      <p>Samedi : 9h00 - 13h00</p>
                      <p>Dimanche : Fermé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Informations légales</h3>
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>Raison sociale :</strong> LES ASSUREURS EXPERTS</p>
                <p><strong>Forme juridique :</strong> SAS au capital de 1 000€</p>
                <p><strong>RCS :</strong> Paris 940 148 802</p>
                <p><strong>ORIAS :</strong> 25002995</p>
                <p><strong>Présidente :</strong> Rebecca ATIA</p>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-4">
              <a
                href="https://wa.me/33651883151"
                className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-md transition-colors duration-200"
              >
                <MessageCircle className="w-6 h-6" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-green-100">Réponse immédiate</p>
                </div>
              </a>
              
              <a
                href="tel:+33162171111"
                className="flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-md transition-colors duration-200"
              >
                <Phone className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Appel direct</p>
                  <p className="text-sm text-blue-100">+33 1 62 17 11 11</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h2>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                <p className="text-gray-600">
                  Merci {formData.firstName}. Notre équipe vous répond dans les meilleurs délais.
                </p>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    id="contact-firstName"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    id="contact-lastName"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Type d'assurance ou sujet *
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Choisissez un sujet</option>
                  <option value="devis">Demande de devis</option>
                  <option value="info">Demande d'information</option>
                  <option value="reclamation">Réclamation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Décrivez votre demande..."
                  required
                ></textarea>
              </div>

              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  required
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600 leading-relaxed">
                  J'accepte que mes données soient utilisées pour traiter ma demande.{' '}
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
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-md font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
            )}

            <p className="text-sm text-gray-500 text-center mt-6">
              Vos données personnelles sont protégées conformément au RGPD
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Notre bureau parisien
            </h3>
            <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="font-semibold">138 Boulevard Haussmann</p>
                <p>75008 Paris</p>
                <p className="text-sm mt-2">Métro : Miromesnil ou Saint-Philippe du Roule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
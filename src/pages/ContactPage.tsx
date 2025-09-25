import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form:', formData);
    alert('Message envoyé ! Nous vous répondrons sous 24h.');
  };

  return (
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
            <div className="bg-white rounded-2xl shadow-lg p-8">
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
                      <a href="tel:0162171111" className="hover:text-blue-600 transition-colors">
                        01 62 17 11 11
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
            <div className="bg-blue-50 rounded-2xl p-6">
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
                className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-lg transition-colors duration-200"
              >
                <MessageCircle className="w-6 h-6" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-sm text-green-100">Réponse immédiate</p>
                </div>
              </a>
              
              <a
                href="tel:0162171111"
                className="flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-colors duration-200"
              >
                <Phone className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Appel direct</p>
                  <p className="text-sm text-blue-100">01 62 17 11 11</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type d'assurance ou sujet *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Choisissez un sujet</option>
                  <option value="devis">Demande de devis</option>
                  <option value="info">Demande d'information</option>
                  <option value="reclamation">Réclamation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Décrivez votre demande..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>

            <p className="text-sm text-gray-500 text-center mt-6">
              🔒 Vos données personnelles sont protégées conformément au RGPD
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Notre bureau parisien
            </h3>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
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
  );
};

export default ContactPage;
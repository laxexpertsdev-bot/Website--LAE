import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <>
      {/* Barre de séparation */}
      <div className="w-full h-px bg-gray-200" style={{ backgroundColor: '#E5E5E5' }}></div>
      
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Logo et description */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center">
                <img
                  src="/chatgpt_image_21_janv._2026,_14_24_38.png"
                  alt="LES ASSUREURS EXPERTS"
                  className="h-80 w-auto object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Votre partenaire de confiance pour toutes vos assurances.
                Une nouvelle vision du courtage, centrée sur vos besoins.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Navigation</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/offres" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Nos assurances
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Informations légales */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Informations légales</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/mentions-legales" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link to="/politique-confidentialite" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link to="/conditions-generales" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Conditions générales
                  </Link>
                </li>
                <li>
                  <Link to="/gestion-cookies" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    Gestion des cookies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a 
                    href="mailto:contact@lesassureursexperts.fr" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    contact@lesassureursexperts.fr
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <a 
                    href="tel:0162177770" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    01 62 17 77 70
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-gray-500" />
                  <a 
                    href="https://wa.me/33651883151" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    WhatsApp
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600 text-sm">
                    138 Boulevard Haussmann, 75008 Paris
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Barre de séparation */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-500 text-sm">
                © 2025 LES ASSUREURS EXPERTS. Tous droits réservés.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/les_assureurs_experts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-pink-500 hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/ContactAtia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-slate-900 transition-all duration-300"
                  aria-label="X"
                >
                  <img
                    src="/x-logo-official.svg"
                    alt="X Logo"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61585792499102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-xs text-gray-500">ORIAS : 25002995</span>
                <span className="text-xs text-gray-500">RCS Paris : 940 148 802</span>
                <span className="text-xs text-gray-500">Courtier en assurance agréé</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
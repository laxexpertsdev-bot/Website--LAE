import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <>
      {/* Barre de séparation */}
      <div className="w-full h-px bg-gray-200"></div>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">

          {/* Contenu principal - 3 colonnes équilibrées */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">

            {/* Navigation */}
            <div>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-5 tracking-tight">
                Navigation
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <Link
                    to="/"
                    className="text-[15px] text-gray-600 hover:text-blue-700 transition-colors duration-200 inline-block"
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/offres"
                    className="text-[15px] text-gray-600 hover:text-blue-700 transition-colors duration-200 inline-block"
                  >
                    Nos assurances
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-[15px] text-gray-600 hover:text-blue-700 transition-colors duration-200 inline-block"
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[15px] text-gray-600 hover:text-blue-700 transition-colors duration-200 inline-block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Informations légales */}
            <div>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-5 tracking-tight">
                Informations légales
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <Link
                    to="/mentions-legales"
                    className="text-[15px] text-gray-600 hover:text-blue-700 transition-colors duration-200 inline-block"
                  >
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/politique-confidentialite"
                    className="text-[15px] text-gray-600 hover:text-blue-700 transition-colors duration-200 inline-block"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link
                    to="/conditions-generales"
                    className="text-[15px] text-gray-600 hover:text-blue-700 transition-colors duration-200 inline-block"
                  >
                    Conditions générales
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gestion-cookies"
                    className="text-[15px] text-gray-600 hover:text-blue-700 transition-colors duration-200 inline-block"
                  >
                    Gestion des cookies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-[17px] font-semibold text-gray-900 mb-5 tracking-tight">
                Contact
              </h3>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <Mail className="w-[18px] h-[18px] text-blue-700 mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:contact@lesassureursexperts.fr"
                    className="text-[15px] text-gray-600 hover:text-blue-700 transition-colors duration-200 break-all"
                  >
                    contact@lesassureursexperts.fr
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-[18px] h-[18px] text-blue-700 mt-0.5 flex-shrink-0" />
                  <a
                    href="tel:+33162171111"
                    className="text-[15px] text-gray-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    +33 1 62 17 11 11
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-[18px] h-[18px] text-blue-700 mt-0.5 flex-shrink-0" />
                  <a
                    href="https://wa.me/33651883151"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] text-gray-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    WhatsApp
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-[18px] h-[18px] text-blue-700 mt-0.5 flex-shrink-0" />
                  <span className="text-[15px] text-gray-600 leading-relaxed">
                    138 Boulevard Haussmann,<br />75008 Paris
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-[18px] h-[18px] text-blue-700 mt-0.5 flex-shrink-0" />
                  <span className="text-[15px] text-gray-600 leading-relaxed">
                    Couverture en France métropolitaine et dans les DOM-TOM :
                    Île de la Réunion, Guadeloupe, Guyane, Martinique et Mayotte.
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Ligne de séparation */}
          <div className="border-t border-gray-200 pt-8">

            {/* Section copyright + réseaux sociaux + infos légales */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

              {/* Copyright */}
              <p className="text-sm text-gray-500 text-center lg:text-left order-2 lg:order-1">
                © {new Date().getFullYear()} LES ASSUREURS EXPERTS. Tous droits réservés.
              </p>

              {/* Réseaux sociaux */}
              <div className="flex items-center gap-3 order-1 lg:order-2">
                <a
                  href="https://www.instagram.com/les_assureurs_experts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-pink-500 hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-[18px] h-[18px]" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61577561022616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-[18px] h-[18px]" />
                </a>
              </div>

              {/* Informations légales compactes */}
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 lg:gap-5 text-xs text-gray-500 order-3">
                <span className="whitespace-nowrap">ORIAS : 25002995</span>
                <span className="hidden lg:inline text-gray-300">|</span>
                <span className="whitespace-nowrap">RCS Paris : 940 148 802</span>
                <span className="hidden lg:inline text-gray-300">|</span>
                <span className="whitespace-nowrap">Courtier en assurance agréé</span>
              </div>

            </div>

          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;

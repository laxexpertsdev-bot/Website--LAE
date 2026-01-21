import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const SocialMediaBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-slate-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-10 lg:p-12">

            {/* Texte à gauche */}
            <div className="text-center lg:text-left flex-1">
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                Suivez Les Assureurs Experts sur nos réseaux
              </h2>
              <p className="text-[16px] text-slate-600 leading-relaxed">
                Conseils, pédagogie et expertise assurance au quotidien.
              </p>
            </div>

            {/* Icônes + CTA à droite */}
            <div className="flex flex-col items-center gap-6">

              {/* Icônes réseaux sociaux */}
              <div className="flex items-center gap-4 flex-wrap justify-center">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/les_assureurs_experts/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61585792499102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>

                {/* LinkedIn */}
                <a
                  href="#linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-blue-800 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>

                {/* YouTube */}
                <a
                  href="#youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6 relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/33651883151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6 relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/ContactAtia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-black text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                  aria-label="X (Twitter)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current relative z-10"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>

              </div>

              {/* CTA Bouton (optionnel) */}
              <a
                href="https://www.instagram.com/les_assureurs_experts/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Nous suivre
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialMediaBanner;

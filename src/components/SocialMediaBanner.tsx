import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const SocialMediaBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-slate-50 via-white to-slate-50 py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Retrouvez Les Assureurs Experts sur nos réseaux
          </h3>
          <p className="text-slate-600 mb-6 text-sm max-w-2xl mx-auto">
            Conseils, pédagogie et expertise assurance au quotidien.
          </p>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/les_assureurs_experts/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-700 hover:border-pink-500 hover:text-pink-500 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://x.com/ContactAtia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61585792499102"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaBanner;

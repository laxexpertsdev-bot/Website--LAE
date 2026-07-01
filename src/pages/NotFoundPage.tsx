import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, FileText } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page introuvable (404) | Les Assureurs Experts</title>
        <meta name="robots" content="noindex, follow" />
        <meta
          name="description"
          content="La page que vous recherchez n'existe pas ou a été déplacée."
        />
      </Helmet>

      <section className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-gray-50">
        <div className="max-w-xl text-center">
          <p className="text-7xl sm:text-8xl font-extrabold" style={{ color: '#002D62' }}>
            404
          </p>
          <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
            Cette page est introuvable
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Le lien est peut-être erroné ou la page a été déplacée. Pas d'inquiétude : nos experts
            restent à votre disposition pour vous accompagner.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-colors hover:opacity-90"
              style={{ backgroundColor: '#002D62' }}
            >
              <Home className="w-5 h-5" /> Retour à l'accueil
            </Link>
            <Link
              to="/devis"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 transition-colors hover:bg-gray-50"
              style={{ borderColor: '#002D62', color: '#002D62' }}
            >
              <FileText className="w-5 h-5" /> Devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

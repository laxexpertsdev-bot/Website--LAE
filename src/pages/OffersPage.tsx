import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Home, Car, Briefcase, Check, ArrowRight, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';

const offers = [
  {
    icon: <Heart className="w-6 h-6 text-brand-navy" />,
    title: "Assurance Santé",
    subtitle: "Solo / Famille / Senior",
    description: "Mutuelle santé adaptée à tous les profils. Remboursements optimaux, réseau de soins étendu.",
    features: ["Optique & dentaire", "Médecines douces", "Hospitalisation", "Téléconsultation"],
    price: "À partir de 29€/mois",
  },
  {
    icon: <Shield className="w-6 h-6 text-brand-navy" />,
    title: "Prévoyance",
    subtitle: "Dépendance / Décès / Obsèques",
    description: "Protégez vos proches avec nos solutions de prévoyance complètes et accessibles.",
    features: ["Capital décès", "Rente dépendance", "Assistance 24h/24", "Frais obsèques"],
    price: "À partir de 15€/mois",
  },
  {
    icon: <Home className="w-6 h-6 text-brand-navy" />,
    title: "Assurance Emprunteur",
    subtitle: "Crédit immobilier",
    description: "Économisez jusqu'à 70% sur votre assurance de prêt avec notre délégation d'assurance.",
    features: ["Substitution possible", "Garanties équivalentes", "Économies importantes", "Démarches simplifiées"],
    price: "Économies moyennes: 8 000€",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-brand-navy" />,
    title: "Assurance Professionnelle",
    subtitle: "TNS / RC Pro / Multirisque",
    description: "Protection complète pour votre activité professionnelle et votre responsabilité.",
    features: ["RC Professionnelle", "Protection juridique", "Cyber-risques", "Perte d'exploitation"],
    price: "À partir de 25€/mois",
  },
  {
    icon: <Car className="w-6 h-6 text-brand-navy" />,
    title: "Habitation & Auto",
    subtitle: "Multirisque & Véhicules",
    description: "Couverture optimale pour votre logement et vos véhicules avec garanties étendues.",
    features: ["Vol & vandalisme", "Dégâts des eaux", "Assistance 0km", "Véhicule de remplacement"],
    price: "À partir de 12€/mois",
  },
];

const OffersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Nos Solutions d'Assurance | Les Assureurs Experts</title>
        <meta name="description" content="Découvrez nos offres d'assurance : santé, prévoyance, emprunteur, professionnelle, auto et habitation. Comparez et obtenez un devis gratuit sous 24h." />
        <link rel="canonical" href="https://lesassureursexperts.fr/offres" />
      </Helmet>
      <BreadcrumbJsonLd name="Nos assurances" slug="offres" />

      <div className="min-h-screen bg-white">
        {/* Fil d'Ariane — flotte sous la navbar principale au scroll */}
        <div className="sticky top-20 z-40 border-b border-hairline bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="flex items-center gap-1 transition-colors hover:text-brand-navy">
                <Home className="h-4 w-4" />
                Accueil
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium text-brand-navy">Nos assurances</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-accent">
              Nos assurances
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-brand-navy sm:text-5xl">
              Nos solutions d'assurance
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-gray-600">
              Découvrez nos offres d'assurance adaptées à chaque besoin. Comparez, choisissez et
              souscrivez en quelques clics.
            </p>
            <p className="mt-3 max-w-prose text-gray-500">
              Nos solutions vous couvrent en France métropolitaine comme dans les DOM-TOM
              (Île de la Réunion, Guadeloupe, Guyane, Martinique, Mayotte).
            </p>
          </div>

          {/* Offers Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="rounded-2xl border border-hairline bg-white p-8 transition-shadow hover:shadow-soft"
              >
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy/5">
                    {offer.icon}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl font-semibold text-brand-navy">
                      {offer.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">{offer.subtitle}</p>
                    <p className="mt-3 leading-relaxed text-gray-600">{offer.description}</p>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">
                        Inclus
                      </h3>
                      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {offer.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy/5">
                              <Check className="h-3 w-3 text-brand-navy" />
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-hairline pt-6">
                      <p className="font-serif text-lg font-semibold text-brand-navy">
                        {offer.price}
                      </p>
                      <Link to="/devis" className="btn-primary text-sm">
                        Obtenir un devis
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-14 rounded-2xl bg-brand-navy p-8 text-center sm:p-10">
            <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
              Besoin d'aide pour choisir ?
            </h2>
            <p className="mt-3 text-lg text-white/80">
              Nos experts vous conseillent gratuitement et sans engagement.
            </p>
            <Link to="/contact" className="btn-primary mt-6 inline-flex text-base">
              Parler à un expert maintenant
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffersPage;

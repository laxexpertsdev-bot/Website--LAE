import React from 'react';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, Calculator, Phone, ArrowRight, Home, ChevronRight, Shield, Building2, HeartPulse } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const SantePrevoyanceCollectivePage: React.FC = () => {
  const coverageItems = [
    "Mutuelle d'entreprise obligatoire",
    "Prévoyance collective (incapacité, invalidité, décès)",
    "Maintien de salaire",
    "Garanties modulables selon les catégories de salariés",
    "Protection sociale renforcée",
    "Avantages fiscaux et sociaux"
  ];

  const companyTypes = [
    { type: "TPE / PME", specificity: "Solutions adaptées aux petites structures" },
    { type: "Grandes entreprises", specificity: "Couverture sur mesure multi-sites" },
    { type: "Startups", specificity: "Formules flexibles et évolutives" },
    { type: "Associations", specificity: "Tarifs adaptés au secteur associatif" },
    { type: "Professions libérales", specificity: "Protection groupe cabinet/étude" }
  ];

  const priceExamples = [
    { profile: "TPE (5-10 salariés)", price: "à partir de 80 €/mois/salarié" },
    { profile: "PME (20-50 salariés)", price: "70-150 €/mois/salarié" },
    { profile: "Grande entreprise (100+ salariés)", price: "sur devis personnalisé" }
  ];

  const advantages = [
    "Respect des obligations légales (mutuelle d'entreprise)",
    "Attractivité employeur renforcée",
    "Avantages fiscaux pour l'entreprise",
    "Protection sociale complète des collaborateurs",
    "Gestion simplifiée et digitale"
  ];

  const legalObligations = [
    "Depuis 2016, toute entreprise doit proposer une mutuelle santé collective à ses salariés",
    "Participation minimale de l'employeur : 50% de la cotisation",
    "Panier de soins minimum obligatoire (100% Santé)",
    "Adhésion obligatoire pour tous les salariés (sauf cas de dispense)"
  ];

  return (
    <>
      <Helmet>
        <title>Santé & Prévoyance Collective Entreprise | Mutuelle Obligatoire | Les Assureurs Experts</title>
        <meta name="description" content="Mutuelle entreprise obligatoire et prévoyance collective. Protection des salariés, respect des obligations légales, avantages fiscaux. Devis personnalisé." />
        <meta name="keywords" content="mutuelle entreprise, prévoyance collective, santé collective, assurance groupe, mutuelle obligatoire, prévoyance salariés" />
        <link rel="canonical" href="https://lesassureursexperts.fr/sante-prevoyance-collective" />
      </Helmet>

    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Santé & Prévoyance Collective</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Users className="w-16 h-16 text-emerald-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Santé & Prévoyance Collective : protégez vos collaborateurs
          </h1>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Offrez à vos salariés une protection santé et prévoyance de qualité tout en respectant
              vos obligations légales. Nos solutions collectives s'adaptent à la taille et aux besoins
              spécifiques de votre entreprise.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-emerald-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
                <span className="font-semibold">Obligatoire depuis 2016</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">Avantages fiscaux</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="font-semibold">Gestion simplifiée</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-emerald-600" />
                Garanties santé & prévoyance collective
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-blue-600" />
                Obligations légales de l'employeur
              </h2>
              <div className="space-y-4">
                {legalObligations.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                <p className="text-sm text-yellow-900">
                  <strong>Important :</strong> Le non-respect de l'obligation de proposer une mutuelle d'entreprise
                  peut entraîner des sanctions financières et sociales. Nous vous accompagnons pour être en conformité.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Solutions adaptées à votre structure
              </h2>
              <div className="space-y-4">
                {companyTypes.map((item, index) => (
                  <div key={index} className="p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{item.type}</h3>
                        <p className="text-gray-600">{item.specificity}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                Exemples de tarifs indicatifs
              </h2>
              <div className="space-y-4">
                {priceExamples.map((example, index) => (
                  <div key={index} className="flex justify-between items-center p-5 bg-green-50 rounded-lg border border-green-200">
                    <span className="font-medium text-gray-900">{example.profile}</span>
                    <span className="text-green-700 font-bold text-lg">{example.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4 italic">
                Tarifs indicatifs pouvant varier selon les garanties choisies, l'âge moyen des salariés et le secteur d'activité.
              </p>
            </section>

            <section className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <HeartPulse className="w-8 h-8" />
                Pourquoi choisir nos solutions collectives ?
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-emerald-50 text-lg">{advantage}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-8 text-white sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Obtenir un devis personnalisé</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span>Analyse de vos besoins</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span>Comparaison multi-assureurs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span>Tarifs négociés</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span>Mise en place simplifiée</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  to="/devis"
                  className="block w-full bg-white text-emerald-700 text-center py-4 px-6 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Obtenir un devis
                </Link>
                <a
                  href="tel:0162171111"
                  className="flex items-center justify-center gap-3 w-full bg-emerald-800 text-white py-4 px-6 rounded-xl font-bold hover:bg-emerald-900 transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  01 62 17 11 11
                </a>
              </div>

              <p className="text-sm text-emerald-100 mt-6 text-center">
                Réponse sous 24h - Conseiller dédié
              </p>
            </div>
          </div>
        </div>

        <section className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Santé & Prévoyance Collective : ce qu'il faut savoir
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Qu'est-ce que la mutuelle d'entreprise obligatoire ?
            </h3>
            <p>
              Depuis le 1er janvier 2016, toutes les entreprises du secteur privé ont l'obligation de proposer
              une complémentaire santé collective à leurs salariés. Cette mutuelle d'entreprise doit respecter
              un panier de soins minimum défini par la loi (contrat responsable et solidaire).
            </p>

            <h3 className="text-2xl font-semibold text-gray-900">
              Prévoyance collective : protéger vos salariés en cas de coup dur
            </h3>
            <p>
              La prévoyance collective complète la mutuelle santé en couvrant les risques lourds : incapacité
              de travail, invalidité et décès. Elle garantit le maintien de salaire en cas d'arrêt de travail
              et verse un capital ou une rente aux bénéficiaires en cas de décès du salarié.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900">
              Les avantages pour l'entreprise
            </h3>
            <p>
              Au-delà de l'obligation légale, proposer une bonne couverture santé et prévoyance présente
              de nombreux avantages : attractivité employeur, fidélisation des talents, avantages fiscaux
              et sociaux (exonération de charges dans certaines limites), et amélioration du climat social.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900">
              Comment choisir sa mutuelle d'entreprise ?
            </h3>
            <p>
              Le choix doit prendre en compte plusieurs critères : la composition de vos effectifs (âge,
              situation familiale), votre budget, les besoins spécifiques de vos salariés et votre secteur
              d'activité. Nos experts analysent ces paramètres pour vous proposer la solution optimale.
            </p>

            <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
              <h4 className="font-semibold text-emerald-900 mb-3">
                Notre accompagnement sur mesure
              </h4>
              <p className="text-emerald-800">
                De l'analyse de vos besoins à la mise en place effective des contrats, en passant par
                la négociation des tarifs et la gestion administrative, nous vous accompagnons à chaque
                étape pour vous garantir une solution performante et conforme.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default SantePrevoyanceCollectivePage;

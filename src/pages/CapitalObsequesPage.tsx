import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2, CheckCircle, Calculator, Phone, ArrowRight, Home, ChevronRight, Heart, Shield, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import FaqSection, { FaqItem } from '../components/FaqSection';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';

const faqItems: FaqItem[] = [
  { q: "À quoi sert un contrat obsèques ?", a: "Il permet de financer à l'avance vos funérailles et/ou d'en organiser les modalités, afin de soulager vos proches du poids financier et organisationnel au moment du décès." },
  { q: "Quelle différence entre contrat en capital et en prestations ?", a: "Le contrat en capital verse une somme à un bénéficiaire pour financer les obsèques. Le contrat en prestations organise concrètement les funérailles avec un opérateur funéraire. Nous vous expliquons les deux." },
  { q: "Y a-t-il une sélection médicale ?", a: "La plupart des contrats obsèques sont accessibles sans questionnaire médical, parfois avec un délai de carence en cas de décès par maladie les premières années. Nous vous indiquons les conditions." },
  { q: "Le capital est-il revalorisé dans le temps ?", a: "Selon le contrat, le capital peut être revalorisé pour suivre l'évolution du coût des obsèques. Nous comparons les offres sur ce critère important." },
  { q: "Que se passe-t-il si je déménage ou change d'avis ?", a: "Le contrat vous suit. Vous pouvez faire évoluer les bénéficiaires ou vos volontés. Un conseiller vous accompagne pour toute modification." },
];

const CapitalObsequesPage: React.FC = () => {
  const coverageItems = [
    "Capital garanti de 3 000 € à 8 000 €",
    "Versement rapide aux bénéficiaires (sous 48h)",
    "Garanties décès toutes causes",
    "Assistance obsèques 24h/24",
    "Capital revalorisé chaque année",
    "Souscription simplifiée sans questionnaire médical"
  ];

  const profileTypes = [
    { type: "Seniors (50-70 ans)", specificity: "Protection adaptée à votre âge" },
    { type: "Jeunes actifs", specificity: "Tarifs avantageux et évolutifs" },
    { type: "Familles", specificity: "Protection de tous les membres" },
    { type: "Personnes seules", specificity: "Solution rassurante pour vos proches" }
  ];

  const priceExamples = [
    { profile: "50 ans - Capital 4 000 €", price: "à partir de 12 €/mois" },
    { profile: "60 ans - Capital 5 000 €", price: "20-30 €/mois" },
    { profile: "70 ans - Capital 6 000 €", price: "35-50 €/mois" }
  ];

  const advantages = [
    "Protégez vos proches des frais d'obsèques",
    "Aucune avance de frais pour la famille",
    "Souscription sans examen médical",
    "Capital disponible rapidement",
    "Cotisations bloquées à vie"
  ];

  const whatIsCovered = [
    "Frais d'obsèques (cercueil, cérémonie, inhumation ou crémation)",
    "Frais administratifs (actes d'état civil, démarches)",
    "Transport du défunt",
    "Organisation de la cérémonie religieuse ou civile",
    "Fleurs, plaques funéraires, faire-part",
    "Assistance 24h/24 pour accompagner la famille"
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Capital Obsèques | Protection Famille | Les Assureurs Experts</title>
        <meta name="description" content="Assurance obsèques dès 12€/mois. Capital garanti, versement rapide, souscription simplifiée. Protégez vos proches des frais d'obsèques." />
        <link rel="canonical" href="https://lesassureursexperts.fr/capital-obseques" />
      </Helmet>
      <BreadcrumbJsonLd name="Capital Obsèques" slug="capital-obseques" />

    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Capital Obsèques</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Flower2 className="w-16 h-16 text-rose-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Capital Obsèques : anticipez sereinement et protégez vos proches
          </h1>

          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Préparer ses obsèques, c'est un acte d'amour envers ses proches. Notre assurance capital
              obsèques vous permet d'anticiper les frais funéraires et d'épargner à votre famille le
              poids financier d'un moment déjà difficile.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-rose-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-rose-600" />
                <span className="font-semibold">Dès 12€/mois</span>
              </div>
              <div className="flex items-center gap-3 bg-pink-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-pink-600" />
                <span className="font-semibold">Sans questionnaire médical</span>
              </div>
              <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-purple-600" />
                <span className="font-semibold">Capital garanti</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-rose-600" />
                Garanties de l'assurance capital obsèques
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-rose-50 rounded-md hover:bg-rose-100 transition-colors">
                    <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-pink-600" />
                Ce qui est pris en charge
              </h2>
              <div className="space-y-4">
                {whatIsCovered.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-pink-50 rounded-md border-l-4 border-pink-600">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                <p className="text-sm text-blue-900">
                  <strong>Bon à savoir :</strong> Le coût moyen d'obsèques en France est de 3 500 à 5 000 €.
                  Une assurance capital obsèques vous permet de couvrir ces frais sans impacter le budget familial.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-purple-600" />
                Solutions adaptées à chaque profil
              </h2>
              <div className="space-y-4">
                {profileTypes.map((item, index) => (
                  <div key={index} className="p-5 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors border border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{item.type}</h3>
                        <p className="text-gray-600">{item.specificity}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-rose-600 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                Exemples de tarifs indicatifs
              </h2>
              <div className="space-y-4">
                {priceExamples.map((example, index) => (
                  <div key={index} className="flex justify-between items-center p-5 bg-green-50 rounded-md border border-green-200">
                    <span className="font-medium text-gray-900">{example.profile}</span>
                    <span className="text-green-700 font-bold text-lg">{example.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4 italic">
                Tarifs indicatifs pouvant varier selon l'âge de souscription et le capital choisi.
                Cotisations garanties sans augmentation liée à l'âge.
              </p>
            </section>

            <section className="bg-gradient-to-br from-rose-600 to-pink-700 rounded-lg shadow-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8" />
                Pourquoi choisir notre assurance capital obsèques ?
              </h2>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-rose-50 text-lg">{advantage}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <FaqSection items={faqItems} title="Capital obsèques : vos questions fréquentes" />
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-rose-600 to-pink-700 rounded-lg shadow-xl p-8 text-white sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Demander un tarif personnalisé</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span>Souscription simplifiée</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span>Sans examen médical</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span>Tarif adapté à votre âge</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span>Capital personnalisable</span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  to="/devis"
                  className="block w-full bg-white text-rose-700 text-center py-4 px-6 rounded-lg font-bold text-lg hover:bg-rose-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Demander un tarif
                </Link>
                <a
                  href="tel:+33162171111"
                  className="flex items-center justify-center gap-3 w-full bg-rose-800 text-white py-4 px-6 rounded-lg font-bold hover:bg-rose-900 transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  +33 1 62 17 11 11
                </a>
              </div>

              <p className="text-sm text-rose-100 mt-6 text-center">
                Réponse rapide - Accompagnement bienveillant
              </p>
            </div>
          </div>
        </div>

        <section className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Capital Obsèques : tout ce qu'il faut savoir
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Qu'est-ce qu'une assurance capital obsèques ?
            </h3>
            <p>
              L'assurance capital obsèques est un contrat de prévoyance qui garantit le versement d'un capital
              à vos bénéficiaires en cas de décès. Ce capital est destiné à couvrir les frais d'obsèques
              (cercueil, cérémonie, inhumation ou crémation) afin d'éviter à votre famille d'avoir à avancer
              ces sommes dans un moment déjà difficile.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900">
              Pourquoi souscrire une assurance obsèques ?
            </h3>
            <p>
              Les frais d'obsèques représentent en moyenne 3 500 à 5 000 €, une somme importante que peu
              de familles ont immédiatement disponible. Anticiper ces frais permet de soulager vos proches
              du poids financier et de leur garantir des obsèques dignes, conformes à vos souhaits.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900">
              Comment fonctionne le versement du capital ?
            </h3>
            <p>
              En cas de décès, vos bénéficiaires contactent simplement votre assureur avec le certificat
              de décès. Le capital garanti est alors versé sous 48 à 72h, permettant de régler rapidement
              les pompes funèbres et d'organiser la cérémonie sans attendre.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900">
              Souscription simplifiée : quels avantages ?
            </h3>
            <p>
              La plupart des contrats obsèques ne nécessitent aucun questionnaire médical ni examen de santé.
              Vous pouvez souscrire rapidement, quels que soient votre âge et votre état de santé. Les
              cotisations sont généralement bloquées : elles n'augmentent pas avec l'âge.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900">
              Puis-je choisir mes bénéficiaires ?
            </h3>
            <p>
              Oui, vous désignez librement les bénéficiaires du capital obsèques lors de la souscription.
              Il peut s'agir de votre conjoint, de vos enfants, d'un proche ou d'une personne de confiance.
              Vous pouvez également confier le capital directement à une entreprise de pompes funèbres.
            </p>

            <div className="bg-rose-50 border-l-4 border-rose-600 p-6 rounded-r-lg">
              <h4 className="font-semibold text-rose-900 mb-3">
                Un geste d'amour pour vos proches
              </h4>
              <p className="text-rose-800">
                Souscrire une assurance obsèques, c'est offrir à vos proches la sérénité de pouvoir vous
                rendre un dernier hommage sans contrainte financière. C'est aussi l'assurance que vos
                volontés seront respectées dans un moment où les décisions sont difficiles à prendre.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default CapitalObsequesPage;

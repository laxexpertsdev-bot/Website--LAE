import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Calculator, Phone, ArrowRight, Home, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ProductLeadForm from '../components/ProductLeadForm';
import FaqSection, { FaqItem } from '../components/FaqSection';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';

const faqItems: FaqItem[] = [
  { q: "À quoi sert un contrat de prévoyance ?", a: "La prévoyance protège vos revenus et vos proches face aux accidents de la vie : arrêt de travail, invalidité ou décès. Elle complète les prestations souvent insuffisantes de la Sécurité sociale." },
  { q: "Quelle différence entre prévoyance et mutuelle santé ?", a: "La mutuelle rembourse vos frais de santé (consultations, optique…). La prévoyance verse des indemnités ou un capital en cas d'arrêt de travail, d'invalidité ou de décès." },
  { q: "La prévoyance est-elle déductible pour un TNS ?", a: "Oui, dans le cadre de la loi Madelin, les cotisations de prévoyance d'un travailleur non salarié sont déductibles du revenu imposable, sous conditions." },
  { q: "Que signifient ITT, IPT et IPP ?", a: "Ce sont les garanties d'incapacité et d'invalidité : ITT (incapacité temporaire de travail), IPT (invalidité permanente totale) et IPP (invalidité permanente partielle). Nous vous expliquons chaque niveau." },
  { q: "Y a-t-il un délai de carence ou une sélection médicale ?", a: "Selon le contrat, un questionnaire de santé et des délais de carence peuvent s'appliquer. Nous vous orientons vers les solutions adaptées à votre profil." },
];

const PrevoyancePage: React.FC = () => {
  const coverageItems = [
    "Incapacité temporaire de travail (ITT)",
    "Invalidité permanente partielle (IPP)",
    "Invalidité permanente totale (IPT)",
    "Capital décès",
    "Rente de conjoint survivant",
    "Capital éducation enfants"
  ];

  const targetProfiles = [
    { profile: "TNS / Indépendants", specificity: "Déduction fiscale Madelin" },
    { profile: "Chefs d'entreprise", specificity: "Protection revenus et famille" },
    { profile: "Cadres", specificity: "Complément aux garanties collectives" },
    { profile: "Freelances", specificity: "Sécurité en cas d'arrêt" },
    { profile: "Professions libérales", specificity: "Adaptation aux revenus variables" }
  ];

  const priceExamples = [
    { profile: "Freelance 35 ans", price: "à partir de 25 €/mois" },
    { profile: "Chef d'entreprise", price: "60–120 €/mois" },
    { profile: "Cadre dirigeant", price: "100–200 €/mois selon revenus" }
  ];

  const advantages = [
    "Rente jusqu'à 5 000 €/mois",
    "Déduction fiscale possible (Madelin)",
    "Versement dès le 1er jour d'arrêt",
    "Prise en charge des maladies non objectivables",
    "Capital décès jusqu'à 500 000 €"
  ];

  return (
    <>
      <Helmet>
        <title>Prévoyance Individuelle TNS & Salariés | Les Assureurs Experts</title>
        <meta name="description" content="Protégez vos revenus et votre famille : capital décès, invalidité, arrêt de travail. Solutions prévoyance pour TNS, indépendants et cadres. Devis gratuit." />
        <link rel="canonical" href="https://lesassureursexperts.fr/prevoyance" />
      </Helmet>
      <BreadcrumbJsonLd name="Prévoyance" slug="prevoyance" />
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Prévoyance</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Shield className="w-16 h-16 text-teal-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Prévoyance : protégez vos revenus et votre famille
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              La prévoyance vous protège en cas d'accident, maladie ou décès. Indispensable pour 
              les indépendants, chefs d'entreprise et tous ceux qui veulent sécuriser leurs revenus 
              et l'avenir de leur famille. Déduction fiscale possible selon votre statut.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-teal-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-teal-600" />
                <span className="font-semibold">Protection complémentaire</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">Rente jusqu'à 5 000€/mois</span>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="font-semibold">Déduction fiscale</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Coverage Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Shield className="w-8 h-8 text-teal-600" />
                Que couvre la prévoyance ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Une assurance prévoyance complète peut inclure :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-teal-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Target Profiles Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pour qui est-ce indispensable ?
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Profil</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Avantage spécifique</th>
                    </tr>
                  </thead>
                  <tbody>
                    {targetProfiles.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-gray-900 border-b">{item.profile}</td>
                        <td className="p-4 text-gray-700 border-b">{item.specificity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Why Important Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pourquoi la prévoyance est-elle essentielle ?
              </h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
                <h3 className="font-semibold text-red-900 mb-3">⚠️ Le saviez-vous ?</h3>
                <p className="text-red-800">
                  Les indépendants et TNS ne bénéficient que de faibles indemnités journalières 
                  de la Sécurité sociale. Sans prévoyance, un arrêt de travail peut mettre 
                  en péril votre activité et vos finances personnelles.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Maintien de votre niveau de vie en cas d'arrêt",
                  "Protection de votre famille en cas de décès",
                  "Continuité de votre activité professionnelle",
                  "Sérénité face aux aléas de la vie"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-teal-600 mt-0.5" />
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                Combien coûte une prévoyance ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">Le tarif dépend de :</p>
              
              <ul className="space-y-2 mb-8">
                {["votre âge et état de santé", "vos revenus à protéger", "les garanties choisies", "votre profession"].map((factor, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{factor}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📌 Exemples de tarifs :</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                {priceExamples.map((example, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
                    <p className="font-semibold text-gray-900">{example.profile}</p>
                    <p className="text-green-700 font-bold">{example.price}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">
                Pourquoi choisir Les Assureurs Experts ?
              </h2>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-teal-200 mt-0.5" />
                    <span className="text-teal-50 font-medium">{advantage}</span>
                  </div>
                ))}
              </div>
            </section>
            {/* FAQ */}
            <FaqSection items={faqItems} title="Prévoyance : vos questions fréquentes" />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 text-teal-600" />
                Devis prévoyance gratuit
              </h3>
              
              <p className="text-gray-600 mb-6">
                Évaluez vos besoins en 2 minutes.
              </p>
              
              <ProductLeadForm insuranceType="prevoyance" insuranceLabel="Prévoyance" />
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Autres assurances</h4>
              <div className="space-y-3">
                <Link to="/mutuelle-sante" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Mutuelle santé
                </Link>
                <Link to="/assurance-emprunteur" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Assurance emprunteur
                </Link>
                <Link to="/assurance-auto" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Assurance auto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PrevoyancePage;
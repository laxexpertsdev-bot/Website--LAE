import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CheckCircle, Calculator, Phone, ArrowRight, ChevronRight, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ProductLeadForm from '../components/ProductLeadForm';
import FaqSection, { FaqItem } from '../components/FaqSection';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';

const faqItems: FaqItem[] = [
  { q: "L'assurance habitation est-elle obligatoire ?", a: "Elle est obligatoire pour les locataires et en copropriété. Pour un propriétaire occupant d'une maison individuelle, elle est fortement recommandée pour couvrir les sinistres majeurs." },
  { q: "Que couvre une multirisque habitation (MRH) ?", a: "Généralement : incendie, dégâts des eaux, vol, bris de glace, catastrophes naturelles et responsabilité civile vie privée. Les garanties et plafonds varient selon les contrats." },
  { q: "Locataire ou propriétaire : quelles différences ?", a: "Le locataire doit a minima couvrir les risques locatifs. Le propriétaire (occupant ou bailleur) a intérêt à couvrir le bâti et, le cas échéant, les loyers impayés. Nous adaptons la formule." },
  { q: "Mes objets de valeur sont-ils couverts ?", a: "Selon le contrat, les objets de valeur peuvent être couverts jusqu'à un plafond, parfois avec une déclaration spécifique. Nous vérifions ces limites avec vous." },
  { q: "Comment est calculée la prime d'assurance habitation ?", a: "Elle dépend de la surface, du nombre de pièces, de la localisation, du statut (locataire/propriétaire) et des garanties choisies. Nous comparons pour optimiser le rapport garanties/prix." },
];

const AssuranceHabitationPage: React.FC = () => {
  const coverageItems = [
    "Responsabilité civile vie privée",
    "Incendie, explosion, foudre",
    "Dégâts des eaux et gel",
    "Vol, tentative de vol, vandalisme",
    "Catastrophes naturelles",
    "Bris de glace et électroménager"
  ];

  const housingTypes = [
    { type: "Propriétaire occupant", specificity: "Multirisque habitation complète" },
    { type: "Locataire", specificity: "Risques locatifs obligatoires" },
    { type: "Propriétaire bailleur", specificity: "Protection investissement locatif" },
    { type: "Copropriétaire", specificity: "Garanties adaptées à la copropriété" },
    { type: "Résidence secondaire", specificity: "Protection logement vacant" }
  ];

  const priceExamples = [
    { profile: "Studio locataire", price: "à partir de 8 €/mois" },
    { profile: "Maison propriétaire", price: "25–60 €/mois" },
    { profile: "Résidence secondaire", price: "15–40 €/mois selon valeur" }
  ];

  const advantages = [
    "Devis en ligne en 5 minutes",
    "Garanties étendues incluses",
    "Assistance 24h/24 dépannage",
    "Indemnisation rapide des sinistres",
    "Protection juridique incluse"
  ];

  return (
    <>
      <Helmet>
        <title>Assurance Habitation Pas Chère | Devis Gratuit | Les Assureurs Experts</title>
        <meta name="description" content="Assurance habitation dès 8€/mois. Devis gratuit en 5 minutes. Propriétaire ou locataire, trouvez la meilleure protection pour votre logement." />
        <link rel="canonical" href="https://lesassureursexperts.fr/assurance-habitation" />
      </Helmet>
      <BreadcrumbJsonLd name="Assurance habitation" slug="assurance-habitation" />
      
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
            <span className="text-gray-900 font-medium">Assurance habitation</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Home className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Assurance habitation : protégez votre logement au meilleur prix
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Propriétaire ou locataire, votre logement mérite une protection optimale. 
              Nos assurances habitation couvrent tous les risques du quotidien : incendie, 
              dégâts des eaux, vol, responsabilité civile. Trouvez la formule adaptée à 
              votre situation et votre budget.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="font-semibold">Dès 8€/mois</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">Assistance 24h/24</span>
              </div>
              <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-purple-600" />
                <span className="font-semibold">Devis en 5 minutes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Coverage Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                Que couvre l'assurance habitation ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Une assurance habitation complète protège votre logement contre :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-md">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Housing Types Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Pour quel type de logement ?
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Situation</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Couverture</th>
                    </tr>
                  </thead>
                  <tbody>
                    {housingTypes.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-gray-900 border-b">{item.type}</td>
                        <td className="p-4 text-gray-700 border-b">{item.specificity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Pricing Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-green-600" />
                Combien coûte une assurance habitation ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">Le tarif dépend de :</p>
              
              <ul className="space-y-2 mb-8">
                {["la superficie de votre logement", "votre situation (propriétaire/locataire)", "la valeur de vos biens", "votre localisation géographique"].map((factor, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{factor}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exemples de tarifs :</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                {priceExamples.map((example, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-md text-center">
                    <p className="font-semibold text-gray-900">{example.profile}</p>
                    <p className="text-green-700 font-bold">{example.price}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-blue-700 rounded-lg shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">
                Pourquoi choisir Les Assureurs Experts ?
              </h2>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-200 mt-0.5" />
                    <span className="text-blue-50 font-medium">{advantage}</span>
                  </div>
                ))}
              </div>
            </section>
            {/* FAQ */}
            <FaqSection items={faqItems} title="Assurance habitation : vos questions fréquentes" />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-600" />
                Devis habitation gratuit
              </h3>
              
              <p className="text-gray-600 mb-6">
                Obtenez votre tarif personnalisé en 2 minutes.
              </p>
              
              <ProductLeadForm insuranceType="assurance-habitation" insuranceLabel="Assurance habitation" />
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Autres assurances</h4>
              <div className="space-y-3">
                <Link to="/assurance-auto" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Assurance auto
                </Link>
                <Link to="/mutuelle-sante" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Mutuelle santé
                </Link>
                <Link to="/prevoyance" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Prévoyance
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

export default AssuranceHabitationPage;
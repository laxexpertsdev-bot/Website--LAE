import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, CheckCircle, Users, Calculator, Phone, ArrowRight, Home, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ProductLeadForm from '../components/ProductLeadForm';
import FaqSection, { FaqItem } from '../components/FaqSection';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';

const coverageItems = [
  "Hospitalisation (chambre individuelle, frais de séjour)",
  "Soins courants (médecins généralistes et spécialistes)",
  "Optique (lunettes, lentilles, chirurgie)",
  "Dentaire (soins, implants, prothèses)",
  "Médecines douces (ostéopathie, acupuncture…)",
  "Téléconsultation médicale"
];

const publicTypes = [
  { public: "Étudiants", specificity: "Formules à petit prix" },
  { public: "Jeunes actifs", specificity: "Garanties modulables + prévoyance" },
  { public: "Familles", specificity: "Pack familial + forfaits enfants" },
  { public: "Seniors", specificity: "Renforts optique/dentaire/hospital." },
  { public: "Indépendants", specificity: "Déductible Madelin (TNS)" }
];

const priceExamples = [
  { profile: "Jeune actif", price: "à partir de 18 €/mois" },
  { profile: "Famille", price: "65–120 €/mois" },
  { profile: "Senior", price: "85–150 €/mois selon les renforts" }
];

const advantages = [
  "Accès à plus de 20 compagnies partenaires",
  "Prix négociés, gestion simplifiée",
  "Un conseiller humain qui vous suit",
  "Des contrats évolutifs",
  "Un devis clair en moins de 24h"
];

const MutuelleHealthPage: React.FC = () => {
  const faqItems: FaqItem[] = [
    { q: "Quelle différence entre mutuelle et complémentaire santé ?", a: "Dans le langage courant, les deux désignent la même chose : un contrat qui rembourse tout ou partie des frais de santé non pris en charge par la Sécurité sociale (optique, dentaire, hospitalisation…)." },
    { q: "Y a-t-il un délai de carence avant d'être remboursé ?", a: "Cela dépend du contrat. Certaines garanties (optique, dentaire, maternité) peuvent comporter un délai d'attente. Nous vous indiquons clairement ces délais avant toute souscription." },
    { q: "Puis-je changer de mutuelle à tout moment ?", a: "Oui. Après un an d'engagement, vous pouvez résilier votre mutuelle à tout moment (résiliation infra-annuelle). Nous nous chargeons des démarches de résiliation." },
    { q: "La mutuelle est-elle déductible pour un indépendant (TNS) ?", a: "Oui, dans le cadre de la loi Madelin, les cotisations d'une complémentaire santé peuvent être déduites du revenu imposable, sous conditions. Un conseiller vous accompagne." },
    { q: "Comment sont calculés les remboursements ?", a: "Les remboursements s'expriment en pourcentage de la base de la Sécurité sociale ou en forfaits (€). Nous vous aidons à comparer les niveaux de garanties réels, pas seulement les pourcentages affichés." },
  ];

  return (
    <>
      <Helmet>
        <title>Mutuelle Santé Pas Chère | Comparateur Expert | Les Assureurs Experts</title>
        <meta name="description" content="Trouvez votre mutuelle santé idéale dès 18€/mois. Comparateur expert, devis gratuit, famille/senior/étudiant. Courtier ORIAS agréé." />
        <link rel="canonical" href="https://lesassureursexperts.fr/mutuelle-sante" />
      </Helmet>
      <BreadcrumbJsonLd name="Mutuelle santé" slug="mutuelle-sante" />

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
            <span className="text-gray-900 font-medium">Mutuelle santé</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-red-500" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mutuelle santé : comparez, économisez, soyez mieux remboursé
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              La mutuelle santé vous permet de compléter les remboursements parfois faibles de la Sécurité sociale. 
              Chez Les Assureurs Experts, nous vous aidons à trouver le contrat le plus adapté à vos besoins, 
              votre budget et votre profil.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="font-semibold">Jeune actif ?</span>
              </div>
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="font-semibold">Famille nombreuse ?</span>
              </div>
              <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-md">
                <CheckCircle className="w-6 h-6 text-purple-600" />
                <span className="font-semibold">Senior avec besoins renforcés ?</span>
              </div>
            </div>
            
            <p className="text-xl font-semibold text-blue-700 mt-8">
              Nous avons une solution claire et personnalisée pour chacun.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Coverage Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Heart className="w-8 h-8 text-red-500" />
                Que couvre une mutuelle santé ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Une bonne mutuelle santé peut inclure :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {coverageItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-md">
                    <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Difference Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Quelle est la différence entre mutuelle et assurance santé ?
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  Le saviez-vous ?
                </h3>
                <p className="text-blue-800">
                  Une mutuelle est souvent gérée à but non lucratif, une assurance santé est gérée par un assureur. 
                  Les prestations peuvent être identiques, mais le mode de gestion diffère.
                </p>
              </div>
            </section>

            {/* Target Audience Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-600" />
                Pour qui ?
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Public</th>
                      <th className="text-left p-4 font-semibold text-gray-900 border-b">Spécificité</th>
                    </tr>
                  </thead>
                  <tbody>
                    {publicTypes.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-medium text-gray-900 border-b">{item.public}</td>
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
                Combien coûte une mutuelle ?
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">Le tarif dépend :</p>
              
              <ul className="space-y-2 mb-8">
                {["de votre âge", "de votre lieu de résidence", "de votre niveau de couverture", "de votre situation familiale"].map((factor, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{factor}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Exemples :</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                {priceExamples.map((example, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-md text-center">
                    <p className="font-semibold text-gray-900">{example.profile}</p>
                    <p className="text-green-700 font-bold">{example.price}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Choose Section */}
            <section className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Comment choisir sa mutuelle ?
              </h2>
              
              <div className="space-y-4">
                {[
                  "Priorisez vos besoins (optique, dentaire, hospitalisation)",
                  "Lisez le tableau de garanties",
                  "Vérifiez la rapidité de remboursement",
                  "Demandez un devis comparatif"
                ].map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-md">
                    <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5" />
                    <span className="text-gray-800 font-medium">{tip}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-blue-700 rounded-lg shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">
                Pourquoi passer par Les Assureurs Experts ?
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
            <FaqSection items={faqItems} title="Mutuelle santé : vos questions fréquentes" />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 text-blue-600" />
                Demandez votre devis mutuelle gratuit
              </h3>
              
              <p className="text-gray-600 mb-6">
                Remplissez notre formulaire rapide : réponse personnalisée sous 24h.
              </p>
              
              <ProductLeadForm insuranceType="mutuelle-sante" insuranceLabel="Mutuelle santé" submitLabel="Être rappelé sous 24h" />
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Autres assurances</h4>
              <div className="space-y-3">
                <Link to="/assurance-emprunteur" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Assurance emprunteur
                </Link>
                <Link to="/assurance-auto" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                  Assurance auto
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

export default MutuelleHealthPage;
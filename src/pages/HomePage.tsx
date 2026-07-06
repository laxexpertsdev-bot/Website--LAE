import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, Headphones as HeadphonesIcon, TrendingUp, Phone } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import InsuranceSection from '../components/InsuranceSection';
import ComprehensiveInsuranceSection from '../components/ComprehensiveInsuranceSection';
import InsuranceCarousel from '../components/InsuranceCarousel';
import PartnerCarousel from '../components/PartnerCarousel';
import TarifCalculator from '../components/TarifCalculator';
import ReviewForm from '../components/ReviewForm';
import { reviews } from '../data/reviews';
import { Helmet } from 'react-helmet-async';
import { submitBilanLead, trackLeadConversion } from '../utils/lead';

const HomePage: React.FC = () => {
  // Lead magnet form state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading || !formData.consent) return;
    if (honeypot) return; // bot détecté
    setSubmitError(false);
    setIsLoading(true);
    const ok = await submitBilanLead({ ...formData, website: honeypot });
    setIsLoading(false);
    if (ok) {
      trackLeadConversion({ formLocation: 'lead_magnet_home' });
      setIsSubmitted(true);
    } else {
      setSubmitError(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Les Assureurs Experts | Courtier en Assurance Agréé ORIAS</title>
        <meta name="description" content="Courtier en assurance agréé ORIAS. Comparez et économisez sur votre mutuelle santé, assurance auto, emprunteur, prévoyance. Devis gratuit sous 24h." />
        <link rel="canonical" href="https://lesassureursexperts.fr/" />
      </Helmet>
    <div className="overflow-hidden">
      {/* Modern Hero Banner */}
      <HeroBanner />
      
      {/* Insurance Section */}
      <InsuranceSection />

      {/* Insurance Carousel */}
      <InsuranceCarousel />

      {/* Advantages Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Pourquoi choisir Les Assureurs Experts ?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une nouvelle approche du courtage, alliant expertise humaine et innovation digitale
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-blue-50 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">100% en ligne</h3>
              <p className="text-slate-600 leading-relaxed">
                Souscrivez vos assurances depuis chez vous, 24h/24, 7j/7. Processus simplifié et sécurisé.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-green-50 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <HeadphonesIcon className="w-10 h-10 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Conseiller dédié</h3>
              <p className="text-slate-600 leading-relaxed">
                Un expert personnel vous accompagne dans tous vos projets d'assurance.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-amber-50 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Tarifs compétitifs</h3>
              <p className="text-slate-600 leading-relaxed">
                Négociation permanente avec nos partenaires pour vous offrir les meilleurs prix.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Vos retours comptent pour nous
            </h2>
            <p className="text-xl text-slate-600 mb-2">
              Les avis de nos clients, vérifiés et publiés après modération
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.note ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic text-lg leading-relaxed">
                  "{review.texte}"
                </p>
                <div>
                  <p className="font-bold text-slate-900 text-lg">
                    {review.prenom} {review.nomInitiale}
                  </p>
                  {review.lieu && <p className="text-sm text-blue-600">{review.lieu}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Formulaire : laisser un avis */}
          <div className="mt-8">
            <ReviewForm />
          </div>

          {/* Mention légale */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 italic">
              Les avis sont vérifiés et publiés après modération. Chaque situation étant unique, ils ne constituent pas une promesse de résultat.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <PartnerCarousel
        title="Nos partenaires assureurs"
        subtitle="Ils nous font confiance pour protéger nos clients au quotidien."
      />
      <div className="bg-slate-50 py-8 text-center">
        <p className="text-sm text-slate-500">
          Et bien d'autres partenaires pour vous offrir les meilleures solutions
        </p>
      </div>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Bilan assurance offert
            </h2>
            <div className="text-xl mb-8 text-blue-100 leading-relaxed space-y-2">
              <p>Recevez gratuitement notre mini-guide exclusif :</p>
              <p className="font-semibold text-white">"Les 10 erreurs à éviter en assurance"</p>
              <p className="text-lg">Réservez votre bilan et recevez le guide par email en avant-première.</p>
            </div>
            {!isSubmitted ? (
              <form onSubmit={handleLeadSubmit} className="max-w-md mx-auto">
                {/* Honeypot field for spam protection */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Prénom *"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-white/20 bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-white/20 bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-start gap-3 text-sm text-blue-100 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 text-blue-600 bg-white/20 border-white/30 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span>
                      J'accepte de recevoir le guide et des informations utiles de la part des Assureurs Experts (désinscription possible à tout moment).
                    </span>
                  </label>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white text-blue-700 px-8 py-4 rounded-md text-lg font-bold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-700"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    'Recevoir le guide'
                  )}
                </button>
                {submitError && (
                  <p className="text-sm text-red-100 bg-red-500/20 border border-red-400/30 rounded-md py-2 px-3 mt-3">
                    Une erreur est survenue. Merci de réessayer.
                  </p>
                )}
              </form>
            ) : (
              <div className="max-w-md mx-auto text-center">
                <div className="bg-green-500/20 border border-green-400/30 rounded-md p-6 backdrop-blur-sm">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Merci !</h3>
                  <p className="text-green-100">
                    Vous recevrez votre guide par email sous peu.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Comprehensive Insurance Section */}
      <ComprehensiveInsuranceSection />

      {/* Tarif Calculator */}
      <TarifCalculator />
      
      {/* Contenu d'Autorité SEO - Section Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Les Assureurs Experts : votre courtier ORIAS de confiance
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Courtier agréé ORIAS 25002995
                </h3>
                <p className="text-blue-800">
                  Courtier en assurance indépendant agréé par l'ORIAS sous le numéro 25002995, nous
                  respectons un code de déontologie strict garantissant la transparence de nos conseils.
                  Notre rémunération provient exclusivement des commissions des assureurs : nos services
                  de conseil et de comparaison vous sont offerts gratuitement.
                </p>
              </div>

              <p>
                Contrairement aux assureurs directs, nous comparons les offres de plus de 20 compagnies
                partenaires pour vous trouver la meilleure couverture au meilleur prix. Au-delà de la
                souscription, nous vous accompagnons humainement tout au long de la vie de vos contrats :
                gestion des sinistres, évolution de vos besoins et renégociation de vos garanties.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Pourquoi choisir Les Assureurs Experts ?
              </h3>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 p-6 rounded-md">
                  <h4 className="font-semibold text-blue-900 mb-3">Accompagnement Personnalisé</h4>
                  <p className="text-blue-800 text-sm">
                    Chaque client bénéficie d'un conseiller dédié qui comprend ses besoins spécifiques et
                    l'accompagne tout au long de sa relation avec nous.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-md">
                  <h4 className="font-semibold text-green-900 mb-3">Tarifs Négociés</h4>
                  <p className="text-green-800 text-sm">
                    Grâce à notre volume d'affaires et nos partenariats privilégiés, nous obtenons
                    des tarifs préférentiels que nous répercutons directement à nos clients.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-md">
                  <h4 className="font-semibold text-purple-900 mb-3">Processus Simplifié</h4>
                  <p className="text-purple-800 text-sm">
                    Fini les démarches complexes ! Notre plateforme digitale vous permet de souscrire
                    en quelques clics, avec un suivi en temps réel de votre dossier.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-md">
                  <h4 className="font-semibold text-orange-900 mb-3">Expertise Certifiée</h4>
                  <p className="text-orange-800 text-sm">
                    Nos conseillers sont formés en permanence aux évolutions réglementaires et
                    aux nouveaux produits du marché de l'assurance.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Nos domaines d'expertise
              </h3>

              <ul className="space-y-3">
                <li>
                  <strong>Santé :</strong> une mutuelle adaptée à votre profil et à votre budget, que
                  vous soyez salarié, indépendant, retraité ou étudiant.
                </li>
                <li>
                  <strong>Emprunteur :</strong> grâce à la loi Lemoine, changez d'assurance à tout
                  moment et économisez sur la durée de votre prêt immobilier.
                </li>
                <li>
                  <strong>Auto & 2-roues :</strong> une couverture complète pour tous vos véhicules,
                  négociée au meilleur tarif avec nos partenaires.
                </li>
                <li>
                  <strong>Prévoyance :</strong> protégez l'avenir de votre famille face aux aléas de la
                  vie (capital décès, invalidité, arrêt de travail).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Prêt à économiser sur vos assurances ?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Rejoignez nos clients qui ont fait confiance à notre expertise digitale et humaine.
          </p>
          <Link
            to="/devis"
            className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-12 py-5 rounded-lg text-xl font-bold transition-all duration-200 transform hover:scale-105 shadow-2xl"
          >
            <Phone className="w-6 h-6" />
            Obtenir mon devis gratuit
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Star, Download, CheckCircle, Clock, Headphones as HeadphonesIcon, TrendingUp, Phone } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import InsuranceSection from '../components/InsuranceSection';
import ComprehensiveInsuranceSection from '../components/ComprehensiveInsuranceSection';
import InsuranceCarousel from '../components/InsuranceCarousel';
import TarifCalculator from '../components/TarifCalculator';

const HomePage: React.FC = () => {
  // Lead magnet form state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check honeypot for spam protection
    if (honeypot) {
      return; // Likely spam, do nothing
    }

    setIsLoading(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mblnydqy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        // Track conversion if Google Analytics is available
        if (typeof gtag !== 'undefined') {
          gtag('event', 'lead_magnet_download', {
            event_category: 'engagement',
            event_label: 'insurance_guide'
          });
        }
        
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          email: '',
          consent: false
        });
      } else {
        alert("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      alert("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const partners = [
    { name: 'APRIL', description: 'Spécialiste assurance santé' },
    { name: 'ASSUREMA', description: 'Courtier grossiste' },
    { name: 'ALPTIS', description: 'Mutuelle et prévoyance' },
    { name: 'QBE', description: 'Assureur international' },
    { name: 'ACHEEL', description: 'Solutions d\'assurance' }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      rating: 5,
      text: "Service exceptionnel ! Rebecca et son équipe ont trouvé la meilleure couverture pour ma famille en moins de 24h.",
      insurance: "Assurance Santé Famille"
    },
    {
      name: "Jean-Pierre Martin",
      rating: 5,
      text: "Enfin un assureur qui comprend les besoins des entrepreneurs. Ma RC Pro est parfaitement adaptée.",
      insurance: "Assurance Professionnelle"
    },
    {
      name: "Sophie Leroux",
      rating: 5,
      text: "Économies de 300€/an sur mon assurance emprunteur. Je recommande vivement !",
      insurance: "Assurance Emprunteur"
    }
  ];

  const reasons = [
    {
      icon: <Shield className="w-12 h-12 text-blue-700" />,
      title: "Expertise Reconnue",
      description: "Expertise certifiée ORIAS, une approche moderne du courtage"
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Accompagnement Personnalisé", 
      description: "Un conseiller dédié pour chaque client, disponible 6j/7"
    },
    {
      icon: <Award className="w-12 h-12 text-orange-500" />,
      title: "Offres Négociées",
      description: "Tarifs privilégiés négociés avec nos partenaires assureurs"
    }
  ];

  return (
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
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">100% en ligne</h3>
              <p className="text-slate-600 leading-relaxed">
                Souscrivez vos assurances depuis chez vous, 24h/24, 7j/7. Processus simplifié et sécurisé.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <HeadphonesIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Conseiller dédié</h3>
              <p className="text-slate-600 leading-relaxed">
                Un expert personnel vous accompagne dans tous vos projets d'assurance.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
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
              💬 Vos retours comptent pour nous
            </h2>
            <p className="text-xl text-slate-600 mb-2">
              Exemples anonymisés de messages reçus après souscription ou accompagnement
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic text-lg leading-relaxed">
                "Service fluide et très rapide. On m'a aidée à comprendre toutes les garanties avant de signer."
              </p>
              <div>
                <p className="font-bold text-slate-900 text-lg">Assurée santé – famille</p>
                <p className="text-sm text-blue-600">Région PACA</p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic text-lg leading-relaxed">
                "Ma RC Pro est sur mesure. Je recommande le service, surtout pour les indépendants comme moi."
              </p>
              <div>
                <p className="font-bold text-slate-900 text-lg">Profession libérale</p>
                <p className="text-sm text-blue-600">Paris</p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic text-lg leading-relaxed">
                "J'ai pu économiser 300 € par an sur mon assurance emprunteur. Je ne savais pas que c'était possible avant de comparer."
              </p>
              <div>
                <p className="font-bold text-slate-900 text-lg">Jeune propriétaire</p>
                <p className="text-sm text-blue-600">Lyon</p>
              </div>
            </div>
          </div>
          
          {/* Mention légale */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 italic">
              🔒 Ces témoignages sont anonymisés et illustratifs. Ils ne constituent pas une promesse de résultat, chaque situation étant unique.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-xl font-bold text-slate-900 mb-12">
            Nos partenaires assureurs
          </h3>
          <p className="text-center text-slate-600 mb-8">
            Ils nous font confiance pour protéger nos clients au quotidien.
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center">
              {/* ACHEEL */}
              <div className="flex items-center justify-center h-16" data-partner="acheel">
                <img
                  src="/partners/logo_de_la_startup_acheel.png"
                  alt="ACHEEL"
                  className="h-[55px] w-auto object-contain"
                />
              </div>

              {/* APRIL */}
              <div className="flex items-center justify-center h-16" data-partner="april">
                <img
                  src="/partners/images.png"
                  alt="APRIL"
                  className="h-[55px] w-auto object-contain"
                />
              </div>

              {/* ASSUREMA */}
              <div className="flex items-center justify-center h-16" data-partner="assurema">
                <img
                  src="/partners/images.jfif"
                  alt="ASSUREMA"
                  className="h-[55px] w-auto object-contain"
                />
              </div>

              {/* KEREIS */}
              <div className="flex items-center justify-center h-16" data-partner="kereis">
                <img
                  src="/partners/kereis-france-logo-rvb-unboxed-860x484.png.webp"
                  alt="KEREIS"
                  className="h-[55px] w-auto object-contain"
                />
              </div>

              {/* CEGEMA */}
              <div className="flex items-center justify-center h-16" data-partner="cegema">
                <img
                  src="/partners/images_(4).png"
                  alt="CEGEMA"
                  className="h-[55px] w-auto object-contain"
                />
              </div>

              {/* QBE */}
              <div className="flex items-center justify-center h-16" data-partner="qbe">
                <img
                  src="/partners/images_(3).png"
                  alt="QBE"
                  className="h-[55px] w-auto object-contain"
                />
              </div>

              {/* AMI 3F */}
              <div className="flex items-center justify-center h-16" data-partner="ami3f">
                <img
                  src="/partners/images_(2).png"
                  alt="AMI 3F"
                  className="h-[55px] w-auto object-contain"
                />
              </div>

              {/* APICIL */}
              <div className="flex items-center justify-center h-16" data-partner="apicil">
                <img
                  src="/partners/images_(1).png"
                  alt="APICIL"
                  className="h-[55px] w-auto object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-slate-500">
              Et bien d'autres partenaires pour vous offrir les meilleures solutions
            </p>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              🎁 Bilan assurance offert
            </h2>
            <div className="text-xl mb-8 text-blue-100 leading-relaxed space-y-2">
              <p>Recevez gratuitement notre mini-guide exclusif :</p>
              <p className="font-semibold text-white">"Les 10 erreurs à éviter en assurance"</p>
              <p className="text-lg">👉 Réservez votre bilan et recevez le guide par email en avant-première.</p>
            </div>
            {!isSubmitted ? (
              <form
                action="https://formspree.io/f/mblnydqy"
                method="POST"
                className="max-w-md mx-auto"
              >
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
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
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
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
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
                  className="w-full bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
              </form>
            ) : (
              <div className="max-w-md mx-auto text-center">
                <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-6 backdrop-blur-sm">
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
              Les Assureurs Experts : Votre Courtier ORIAS de Confiance
            </h2>
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  🏛️ Courtier Agréé ORIAS 25002995 - Votre Garantie d'Expertise
                </h3>
                <p className="text-blue-800">
                  En tant que courtier en assurance agréé par l'ORIAS (Organisme pour le Registre des 
                  Intermédiaires en Assurance), nous respectons un code de déontologie strict qui garantit 
                  la transparence de nos conseils et la protection de vos intérêts. Notre enregistrement 
                  sous le numéro 25002995 atteste de notre compétence professionnelle et de notre 
                  conformité réglementaire.
                </p>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Pourquoi Choisir un Courtier Expert pour Vos Assurances ?
              </h3>
              
              <p>
                Dans un marché de l'assurance de plus en plus complexe, faire appel à un courtier expert 
                présente de nombreux avantages. Contrairement aux assureurs directs qui ne proposent que 
                leurs propres produits, nous comparons les offres de plus de 20 compagnies partenaires 
                pour vous trouver la solution la plus adaptée à votre situation et votre budget.
              </p>
              
              <p>
                Notre expertise nous permet de décrypter les garanties, d'identifier les exclusions 
                importantes et de négocier les meilleurs tarifs. Nous vous accompagnons également dans 
                la gestion de vos sinistres et l'évolution de vos contrats selon vos besoins.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Choisir le Bon Contrat d'Assurance Auto : Notre Expertise à Votre Service
              </h3>
              
              <p>
                L'assurance automobile est obligatoire mais choisir la bonne couverture peut s'avérer 
                complexe. Entre l'assurance au tiers, l'assurance tous risques, les garanties optionnelles 
                et les franchises, il est facile de se perdre. Notre équipe d'experts analyse votre profil 
                de conducteur, votre véhicule et votre usage pour vous proposer la formule optimale.
              </p>
              
              <p>
                Nous prenons en compte tous les critères : votre âge, votre expérience de conduite, 
                votre coefficient bonus-malus, la valeur de votre véhicule, votre lieu de résidence 
                et vos habitudes de conduite. Cette analyse approfondie nous permet de vous faire 
                économiser jusqu'à 30% sur votre prime annuelle tout en bénéficiant d'une couverture 
                adaptée.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Assurance Habitation : Protégez Votre Patrimoine Efficacement
              </h3>
              
              <p>
                Votre logement représente souvent votre bien le plus précieux. Qu'il s'agisse d'une 
                résidence principale, secondaire, ou d'un investissement locatif, chaque situation 
                nécessite une approche spécifique. Nos experts en assurance habitation évaluent 
                précisément vos besoins pour vous proposer une couverture optimale.
              </p>
              
              <p>
                Nous analysons les risques spécifiques à votre logement : zone géographique, type 
                de construction, valeur des biens mobiliers, présence d'équipements particuliers. 
                Cette expertise nous permet de vous proposer des garanties adaptées au juste prix, 
                sans sur-assurance ni sous-assurance.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Assurance Santé : Trouvez la Mutuelle Qui Vous Correspond
              </h3>
              
              <p>
                Le système de santé français, bien que performant, laisse de nombreux frais à votre 
                charge. Une bonne mutuelle santé est indispensable pour compléter les remboursements 
                de la Sécurité sociale. Nos conseillers spécialisés analysent vos besoins de santé 
                et votre budget pour vous proposer la formule la plus avantageuse.
              </p>
              
              <p>
                Que vous soyez jeune actif, famille nombreuse, senior ou travailleur indépendant, 
                nous avons des solutions adaptées. Nous comparons les niveaux de remboursement en 
                optique, dentaire, hospitalisation et médecines douces pour vous garantir la meilleure 
                prise en charge possible.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Assurance Professionnelle : Sécurisez Votre Activité
              </h3>
              
              <p>
                Exercer une activité professionnelle expose à de nombreux risques : responsabilité 
                civile, cyber-attaques, perte d'exploitation, protection juridique. Nos experts en 
                assurance professionnelle connaissent les spécificités de chaque secteur d'activité 
                et vous proposent une couverture sur mesure.
              </p>
              
              <p>
                Que vous soyez artisan, commerçant, profession libérale, consultant ou dirigeant 
                d'entreprise, nous analysons vos risques métier pour vous proposer les garanties 
                indispensables à la pérennité de votre activité. Notre approche personnalisée 
                vous permet de vous concentrer sur votre cœur de métier en toute sérénité.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Notre Méthode : Analyse, Comparaison, Négociation
              </h3>
              
              <p>
                Notre processus d'accompagnement repose sur trois piliers fondamentaux. D'abord, 
                nous analysons en détail votre situation personnelle ou professionnelle pour 
                identifier précisément vos besoins de couverture. Ensuite, nous comparons les 
                offres de nos partenaires assureurs en tenant compte du rapport qualité-prix. 
                Enfin, nous négocions les conditions et tarifs pour obtenir les meilleures 
                conditions possibles.
              </p>
              
              <p>
                Cette méthode éprouvée nous permet de vous faire bénéficier d'économies substantielles 
                tout en améliorant votre niveau de protection. Nos clients économisent en moyenne 
                25% sur leurs primes d'assurance tout en bénéficiant de garanties souvent supérieures 
                à leurs anciens contrats.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Un Accompagnement Personnalisé et Durable
              </h3>
              
              <p>
                Notre relation ne s'arrête pas à la souscription de vos contrats. Nous vous 
                accompagnons tout au long de la vie de vos assurances : gestion des sinistres, 
                évolution de vos besoins, renégociation des tarifs, optimisation de vos garanties. 
                Votre conseiller dédié reste votre interlocuteur privilégié pour toutes vos questions.
              </p>
              
              <p>
                Cette approche relationnelle nous distingue des comparateurs en ligne et des 
                assureurs directs. Nous croyons qu'une bonne assurance nécessite un conseil humain 
                et personnalisé, adapté à l'évolution de votre situation personnelle et professionnelle.
              </p>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mt-8">
                <h4 className="font-semibold text-green-900 mb-3">
                  🎯 Votre Satisfaction, Notre Priorité
                </h4>
                <p className="text-green-800">
                  Avec plus de 95% de clients satisfaits et un taux de fidélisation exceptionnel, 
                  Les Assureurs Experts s'impose comme le partenaire de référence pour tous vos 
                  besoins d'assurance. Rejoignez nos milliers de clients qui nous font confiance 
                  pour protéger ce qui compte le plus pour eux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SEO Content Section - Added below conversion elements */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Les Assureurs Experts : Votre Partenaire de Confiance pour Toutes Vos Assurances
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                <strong>Les Assureurs Experts</strong> révolutionne le monde du courtage en assurance en combinant 
                l'expertise humaine traditionnelle avec les avantages du digital. Notre cabinet, enregistré à l\'ORIAS 
                sous le numéro 25002995, vous accompagne dans tous vos projets d'assurance avec une approche 
                personnalisée et transparente.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Notre Expertise au Service de Votre Protection
              </h3>
              
              <p>
                Depuis notre création, nous avons développé une expertise reconnue dans tous les domaines de l'assurance. 
                Que vous soyez un particulier à la recherche d'une mutuelle santé adaptée à votre budget, un chef 
                d'entreprise souhaitant optimiser sa couverture prévoyance, ou un jeune couple désirant économiser 
                sur son assurance emprunteur, nous avons la solution qui vous correspond.
              </p>
              
              <p>
                Notre équipe d'experts certifiés analyse quotidiennement le marché de l'assurance pour vous proposer 
                les meilleures offres. Nous travaillons avec plus de 20 compagnies partenaires, ce qui nous permet 
                de comparer et négocier les tarifs les plus avantageux pour nos clients.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Pourquoi Choisir Les Assureurs Experts ?
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">🎯 Accompagnement Personnalisé</h4>
                  <p className="text-blue-800 text-sm">
                    Chaque client bénéficie d'un conseiller dédié qui comprend ses besoins spécifiques et 
                    l'accompagne tout au long de sa relation avec nous.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-3">💰 Tarifs Négociés</h4>
                  <p className="text-green-800 text-sm">
                    Grâce à notre volume d'affaires et nos partenariats privilégiés, nous obtenons 
                    des tarifs préférentiels que nous répercutons directement à nos clients.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-3">⚡ Processus Simplifié</h4>
                  <p className="text-purple-800 text-sm">
                    Fini les démarches complexes ! Notre plateforme digitale vous permet de souscrire 
                    en quelques clics, avec un suivi en temps réel de votre dossier.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-3">🛡️ Expertise Certifiée</h4>
                  <p className="text-orange-800 text-sm">
                    Nos conseillers sont formés en permanence aux évolutions réglementaires et 
                    aux nouveaux produits du marché de l'assurance.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Nos Domaines d'Expertise
              </h3>
              
              <p>
                <strong>Assurance Santé :</strong> Nous vous aidons à trouver la mutuelle santé qui correspond 
                parfaitement à vos besoins et à votre budget. Que vous soyez salarié, indépendant, retraité 
                ou étudiant, nous analysons votre situation pour vous proposer les meilleures garanties au 
                meilleur prix.
              </p>
              
              <p>
                <strong>Assurance Emprunteur :</strong> Grâce à la loi Lemoine, vous pouvez désormais changer 
                d'assurance emprunteur à tout moment. Nos experts vous accompagnent dans cette démarche pour 
                vous faire économiser jusqu'à 15 000 € sur la durée de votre prêt immobilier.
              </p>
              
              <p>
                <strong>Assurance Auto et 2 Roues :</strong> Protection optimale pour tous vos véhicules, 
                du scooter 50cc à la voiture de luxe. Nous négocions les meilleurs tarifs avec nos partenaires 
                assureurs pour vous offrir une couverture complète à prix compétitif.
              </p>
              
              <p>
                <strong>Prévoyance et Protection :</strong> Sécurisez l'avenir de votre famille avec nos 
                solutions de prévoyance adaptées. Capital décès, rente d'invalidité, arrêt de travail : 
                nous vous protégeons contre tous les aléas de la vie.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Notre Engagement Qualité
              </h3>
              
              <p>
                En tant que courtier en assurance agréé ORIAS, nous respectons un code de déontologie strict 
                qui garantit la transparence de nos conseils et la protection de vos intérêts. Notre rémunération 
                provient exclusivement des commissions versées par les compagnies d'assurance, ce qui signifie 
                que nos services de conseil et de comparaison vous sont offerts gratuitement.
              </p>
              
              <p>
                Nous nous engageons à vous fournir une information claire et complète sur les produits que nous 
                vous proposons, à respecter vos données personnelles conformément au RGPD, et à vous accompagner 
                dans la gestion de vos contrats tout au long de votre relation avec nous.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h4 className="font-semibold text-gray-900 mb-3">📞 Un Service Client d'Excellence</h4>
                <p className="text-gray-700">
                  Notre équipe est disponible du lundi au vendredi de 9h à 18h et le samedi de 9h à 13h 
                  pour répondre à toutes vos questions. Vous pouvez nous joindre par téléphone au 
                  01 62 17 77 70, par email à contact@lesassureursexperts.fr, ou via notre chat WhatsApp 
                  pour une réponse immédiate.
                </p>
              </div>
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
            className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-12 py-5 rounded-xl text-xl font-bold transition-all duration-200 transform hover:scale-105 shadow-2xl"
          >
            <Phone className="w-6 h-6" />
            Commencer mon devis maintenant
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
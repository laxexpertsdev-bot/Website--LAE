import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InsuranceCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const insuranceCards = [
    {
      id: 1,
      title: "Mutuelle santé",
      image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Famille souriante chez le médecin - Mutuelle santé",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      content: {
        description: "Nos mutuelles santé s'adaptent à votre situation : famille, étudiant, indépendant ou senior. Comparez les niveaux de garanties (hospitalisation, optique, dentaire, médecine douce), avec ou sans tiers payant.",
        benefits: [
          "Compatible 100 % santé",
          "Prise en charge rapide", 
          "Dès 18€/mois"
        ],
        details: "Bénéficiez de contrats personnalisables, avec assistance, téléconsultation et carte digitale."
      }
    },
    {
      id: 2,
      title: "Assurance emprunteur",
      image: "https://images.pexels.com/photos/7578966/pexels-photo-7578966.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Couple recevant les clés de leur appartement - Assurance emprunteur",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      content: {
        description: "Changez votre assurance de prêt immobilier et économisez jusqu'à 15 000 €. Nos contrats sont compatibles Loi Lemoine et offrent une couverture complète : décès, invalidité, ITT.",
        benefits: [
          "Sans questionnaire médical selon l'âge et le prêt",
          "Délai d'adhésion rapide",
          "Taux parmi les plus bas du marché"
        ],
        details: "Profitez de la délégation d'assurance pour réduire significativement le coût de votre crédit immobilier."
      }
    },
    {
      id: 3,
      title: "Assurance auto",
      image: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Jeune conducteur souriant dans sa voiture - Assurance auto",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      content: {
        description: "Assurance au tiers, tous risques, bris de glace, dépannage 0 km : nous vous aidons à choisir la couverture idéale selon votre véhicule, usage et budget.",
        benefits: [
          "Jeunes conducteurs acceptés",
          "Réduction jusqu'à -30 % selon votre bonus",
          "Voitures électriques & hybrides incluses"
        ],
        details: "Protection adaptée à tous les profils de conducteurs avec assistance 24h/24."
      }
    },
    {
      id: 4,
      title: "Assurance 2 roues",
      image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Scooter moderne en ville - Assurance 2 roues",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      content: {
        description: "Des formules pour scooter, moto, 125 cc ou grosses cylindrées. Responsabilité civile, équipement, passager, vol : vous composez votre protection à la carte.",
        benefits: [
          "Dès 12€/mois",
          "Sans frais de dossier",
          "Équipements assurés en option"
        ],
        details: "Couverture flexible pour tous types de deux-roues, du scooter urbain à la moto de collection."
      }
    },
    {
      id: 5,
      title: "Prévoyance individuelle",
      image: "https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Chef d'entreprise confiant - Prévoyance individuelle",
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      content: {
        description: "En cas d'accident ou d'incapacité, la prévoyance protège votre famille et vos revenus : rente, capital décès, invalidité, arrêt de travail. Indispensable pour TNS, freelances et cadres.",
        benefits: [
          "Protection complémentaire à la Sécu",
          "Rente jusqu'à 5 000 €/mois",
          "Exonération fiscale possible"
        ],
        details: "Sécurisez l'avenir de votre famille avec des garanties adaptées à votre situation professionnelle."
      }
    },
    {
      id: 6,
      title: "Expatriés & santé internationale",
      image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Couple d'expatriés à l'étranger - Assurance internationale",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      content: {
        description: "Vivez ou travaillez à l'étranger ? Nos assurances santé expat couvrent vos soins dans +150 pays, avec assistance, hospitalisation, maternité et évacuation.",
        benefits: [
          "Valable pour visa, études, télétravail",
          "Tarifs adaptés selon zones (Europe, USA, Asie)",
          "Réseau médical direct"
        ],
        details: "Protection santé mondiale pour expatriés, étudiants et digital nomads."
      }
    },
    {
      id: 7,
      title: "Assurance bateau",
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Voilier naviguant en mer - Assurance bateau",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      content: {
        description: "Voiliers, bateaux à moteur, jet-ski : naviguez sereinement. Nos offres couvrent les avaries, responsabilité civile, vol, tempêtes, et assistance marine.",
        benefits: [
          "Skipper pro ou plaisancier",
          "Extension événements ou compétitions",
          "Déclaration en ligne simplifiée"
        ],
        details: "Protection complète pour tous types d'embarcations avec assistance maritime 24h/24."
      }
    },
    {
      id: 8,
      title: "PER – Plan Épargne Retraite",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Senior consultant son plan retraite - PER",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      content: {
        description: "Préparez votre retraite tout en réduisant vos impôts. Le PER vous permet d'épargner à votre rythme avec une fiscalité avantageuse à l'entrée ou à la sortie.",
        benefits: [
          "Déduction jusqu'à 10 % des revenus imposables",
          "Sortie en capital ou rente",
          "Contrats transférables et sans frais cachés"
        ],
        details: "Optimisez votre fiscalité tout en préparant sereinement votre retraite."
      }
    },
    {
      id: 9,
      title: "Assurance vie",
      image: "https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Couple souriant consultant leur placement - Assurance vie",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-50",
      content: {
        description: "L'assurance vie reste le placement préféré des Français : souplesse, fiscalité douce, rendement supérieur au Livret A. Transmettez un capital ou faites fructifier votre épargne.",
        benefits: [
          "Fonds euros + unités de compte",
          "Fiscalité allégée après 8 ans",
          "Transmission facilitée sans droits de succession"
        ],
        details: "Le placement incontournable pour faire fructifier votre épargne et optimiser votre succession."
      }
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % insuranceCards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, insuranceCards.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % insuranceCards.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + insuranceCards.length) % insuranceCards.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            🎯 Découvrez nos solutions d'assurance en détail
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chaque assurance mérite une attention particulière. Explorez nos offres complètes 
            avec garanties, tarifs et avantages détaillés.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <div className="grid lg:grid-cols-2 min-h-[600px]">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={insuranceCards[currentSlide].image}
                      alt={insuranceCards[currentSlide].alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${insuranceCards[currentSlide].color} opacity-20`}></div>
                  </div>

                  {/* Content Section */}
                  <div className={`${insuranceCards[currentSlide].bgColor} p-8 lg:p-12 flex flex-col justify-center`}>
                    <div className="space-y-6">
                      {/* Title */}
                      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        {insuranceCards[currentSlide].title}
                      </h3>

                      {/* Description */}
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {insuranceCards[currentSlide].content.description}
                      </p>

                      {/* Benefits */}
                      <div className="space-y-3">
                        {insuranceCards[currentSlide].content.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-800 font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Details */}
                      <p className="text-gray-600 italic">
                        {insuranceCards[currentSlide].content.details}
                      </p>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                          to="/devis"
                          className={`inline-flex items-center gap-3 bg-gradient-to-r ${insuranceCards[currentSlide].color} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg`}
                        >
                          Devis gratuit
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                          to={
                            currentSlide === 0 ? "/mutuelle-sante" :
                            currentSlide === 1 ? "/assurance-emprunteur" :
                            currentSlide === 2 ? "/assurance-auto" :
                            currentSlide === 3 ? "/assurance-2-roues" :
                            currentSlide === 4 ? "/prevoyance" :
                            currentSlide === 5 ? "/expatries" :
                            currentSlide === 6 ? "/assurance-bateau" :
                            currentSlide === 7 ? "/per" :
                            currentSlide === 8 ? "/assurance-vie" :
                            "/offres"
                          }
                          className="inline-flex items-center gap-3 bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                        >
                          Voir plus
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
            aria-label="Slide suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {insuranceCards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            {isAutoPlaying ? '⏸️ Pause' : '▶️ Lecture automatique'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCarousel;
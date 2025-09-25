import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Home, Car, Bike, Plane, Anchor, PiggyBank, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ComprehensiveInsuranceSection: React.FC = () => {
  const insuranceTypes = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Mutuelle santé",
      description: "Comparez nos formules santé adaptées à chaque profil : jeunes actifs, familles, seniors ou indépendants. Garanties personnalisées, remboursements rapides, téléconsultation incluse.",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: <Home className="w-8 h-8 text-blue-600" />,
      title: "Assurance emprunteur",
      description: "Obtenez une protection optimale pour votre prêt immobilier. Nous trouvons pour vous un contrat conforme à la loi Lemoine, souvent jusqu'à 50 % moins cher que celui de votre banque.",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Car className="w-8 h-8 text-orange-500" />,
      title: "Assurance auto",
      description: "Roulez l'esprit tranquille avec nos contrats auto. Responsabilité civile, tous risques, assistance : vous choisissez le niveau de protection idéal, sans surpayer.",
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      icon: <Bike className="w-8 h-8 text-green-600" />,
      title: "Assurance 2 roues",
      description: "Protection complète pour vos deux-roues : motos, scooters, vélos électriques. Responsabilité, vol, assistance : roulez en toute sérénité.",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: <Plane className="w-8 h-8 text-purple-600" />,
      title: "Expatriés",
      description: "Vous vivez ou travaillez à l'étranger ? Nos assurances santé internationales couvrent vos besoins médicaux, hospitaliers et administratifs partout dans le monde.",
      color: "from-purple-400 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: "Prévoyance",
      description: "Invalidité, arrêt de travail, décès : protégez vos revenus et ceux de votre famille avec nos solutions prévoyance personnalisées. Indispensable pour les indépendants et chefs d'entreprise.",
      color: "from-teal-400 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200"
    },
    {
      icon: <Anchor className="w-8 h-8 text-indigo-600" />,
      title: "Assurance bateau",
      description: "Une offre pensée pour les navigateurs d'aujourd'hui : voiliers, bateaux à moteur ou jetskis, avec ou sans skipper. Responsabilité, vol, avarie… on s'occupe de tout.",
      color: "from-indigo-400 to-blue-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200"
    },
    {
      icon: <PiggyBank className="w-8 h-8 text-amber-600" />,
      title: "Épargne & patrimoine",
      description: "Optimisez votre avenir avec nos solutions de Plan Épargne Retraite (PER) et assurance vie. Souplesse, rendement, fiscalité avantageuse : construisez votre indépendance financière dès maintenant.",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    }
  ];

  const advantages = [
    "Des tarifs ultra-compétitifs",
    "Un conseiller dédié et disponible",
    "Des démarches simples et rapides",
    "Un cabinet 100 % digital, 100 % humain",
    "Des solutions flexibles, même en cas de changement de situation"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
            🔍 Nos solutions d'assurance : adaptées à chaque situation, pensées pour vous
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              Chez Les Assureurs Experts, nous vous accompagnons dans tous les moments clés de votre vie, 
              en vous proposant une offre complète et sur mesure d'assurances. Que vous soyez un particulier, 
              un professionnel, un expatrié ou un futur retraité, nous avons une solution claire, humaine et 
              avantageuse pour vous protéger, vous et vos proches.
            </p>
          </div>
        </motion.div>

        {/* Expertise Coverage */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-12 text-center">
            🔐 Nos expertises couvrent tous les domaines clés
          </h3>
          
          {/* Insurance Types Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {insuranceTypes.map((insurance, index) => (
              <motion.div
                key={index}
                className={`${insurance.bgColor} ${insurance.borderColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div className={`bg-gradient-to-br ${insurance.color} p-4 rounded-xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <div className="text-white drop-shadow-lg">
                    {insurance.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {insurance.title}
                </h4>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {insurance.description}
                </p>
                
                {/* CTA Button */}
                <Link
                  to="/devis"
                  className="inline-flex items-center gap-2 text-slate-900 hover:text-blue-700 font-medium transition-colors group"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div 
          className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
            🔎 Pourquoi choisir Les Assureurs Experts ?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-200"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-slate-800 font-medium">{advantage}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-3xl p-8 lg:p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-6">
            Un doute ? Une question ?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nos experts vous conseillent gratuitement et vous rappellent sous 24h pour trouver 
            la solution d'assurance parfaitement adaptée à votre situation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/devis"
              className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Être rappelé gratuitement
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <p className="text-sm text-blue-200 mt-6">
            ✅ Gratuit et sans engagement • ✅ Réponse sous 24h • ✅ Conseils personnalisés
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensiveInsuranceSection;
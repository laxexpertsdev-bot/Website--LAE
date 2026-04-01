import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Home, Car, Bike, Plane, Anchor, ArrowRight, PiggyBank, Briefcase, HardHat, Users, Flower2 } from 'lucide-react';
import { motion } from 'framer-motion';

const InsuranceSection: React.FC = () => {
  const insuranceTypes = [
    {
      name: 'Mutuelle santé',
      icon: <Heart className="w-8 h-8" />,
      cta: 'Obtenir un tarif',
      color: 'from-red-400 to-pink-500',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100',
      path: '/mutuelle-sante'
    },
    {
      name: 'Assurance emprunteur',
      icon: <Shield className="w-8 h-8" />,
      cta: 'Obtenir un tarif',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      path: '/assurance-emprunteur'
    },
    {
      name: 'Assurance 2 roues',
      icon: <Bike className="w-8 h-8" />,
      cta: 'Obtenir un tarif',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      path: '/assurance-2-roues'
    },
    {
      name: 'Expatriés',
      icon: <Plane className="w-8 h-8" />,
      cta: 'Obtenir un tarif',
      color: 'from-purple-400 to-violet-500',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      path: '/expatries'
    },
    {
      name: 'Assurance auto',
      icon: <Car className="w-8 h-8" />,
      cta: 'Demander un devis',
      color: 'from-orange-400 to-red-500',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      path: '/assurance-auto'
    },
    {
      name: 'Prévoyance',
      icon: <Shield className="w-8 h-8" />,
      cta: 'Demander un devis',
      color: 'from-teal-400 to-cyan-500',
      bgColor: 'bg-teal-50',
      hoverColor: 'hover:bg-teal-100',
      path: '/prevoyance'
    },
    {
      name: 'Bateau',
      icon: <Anchor className="w-8 h-8" />,
      cta: 'Obtenir un tarif',
      color: 'from-indigo-400 to-blue-500',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:bg-indigo-100',
      path: '/assurance-bateau'
    },
    {
      name: 'Assurance patrimoine',
      subtitle: 'PER & Assurance vie sur-mesure',
      icon: <PiggyBank className="w-8 h-8" />,
      cta: 'Obtenir un tarif',
      color: 'from-amber-400 to-yellow-500',
      bgColor: 'bg-amber-50',
      hoverColor: 'hover:bg-amber-100',
      path: '/per'
    },
    {
      name: 'Assurance professionnelle',
      subtitle: 'RC Pro, multirisque professionnelle',
      icon: <Briefcase className="w-8 h-8" />,
      cta: 'Obtenir un tarif',
      color: 'from-slate-400 to-slate-600',
      bgColor: 'bg-slate-50',
      hoverColor: 'hover:bg-slate-100',
      path: '/assurance-professionnelle'
    },
    {
      name: 'Assurance décennale',
      subtitle: 'Garantie décennale, responsabilité construction',
      icon: <HardHat className="w-8 h-8" />,
      cta: 'Obtenir un tarif',
      color: 'from-zinc-400 to-gray-600',
      bgColor: 'bg-zinc-50',
      hoverColor: 'hover:bg-zinc-100',
      path: '/assurance-decennale'
    },
    {
      name: 'Santé & Prévoyance Collective',
      subtitle: 'Mutuelle d\'entreprise, prévoyance collective, protection des salariés',
      icon: <Users className="w-8 h-8" />,
      cta: 'Obtenir un tarif',
      color: 'from-emerald-400 to-teal-600',
      bgColor: 'bg-emerald-50',
      hoverColor: 'hover:bg-emerald-100',
      path: '/sante-prevoyance-collective'
    },
    {
      name: 'Capital Obsèques',
      subtitle: 'Anticiper les frais, protéger ses proches, solution simple et rapide',
      icon: <Flower2 className="w-8 h-8" />,
      cta: 'Demander un tarif',
      color: 'from-rose-400 to-pink-600',
      bgColor: 'bg-rose-50',
      hoverColor: 'hover:bg-rose-100',
      path: '/capital-obseques'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            📌 Découvrez toutes nos assurances
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Solutions personnalisées avec accompagnement expert pour tous vos besoins
          </p>
        </motion.div>

        {/* Insurance Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {insuranceTypes.map((insurance, index) => (
            <motion.div
              key={index}
              className={`group ${insurance.bgColor} ${insurance.hoverColor} rounded-2xl p-6 transition-all duration-300 hover:shadow-xl border border-gray-100 cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => window.location.href = insurance.path}
            >
              {/* Animated Icon */}
              <motion.div 
                className={`relative bg-gradient-to-br ${insurance.color} p-4 rounded-xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                style={{
                  boxShadow: '0 8px 25px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }
                }}
              >
                <motion.div
                  className="text-white drop-shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {insurance.icon}
                </motion.div>
                
                {/* 3D Shine Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Bottom Shadow for 3D Effect */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-black/20 rounded-full blur-sm group-hover:w-12 group-hover:bg-black/30 transition-all duration-300"></div>
              </motion.div>
              
              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900 text-lg leading-tight">
                  {insurance.name}
                </h3>
                {insurance.subtitle && (
                  <p className="text-sm text-slate-600">{insurance.subtitle}</p>
                )}
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/devis"
                    className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg group"
                  >
                    {insurance.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-slate-600 mb-6">
            Besoin d'aide pour choisir ? Nos experts vous conseillent gratuitement.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-xl"
          >
            Parler à un expert
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default InsuranceSection;
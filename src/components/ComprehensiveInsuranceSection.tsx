import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ComprehensiveInsuranceSection: React.FC = () => {
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
            Nos solutions d'assurance : adaptées à chaque situation, pensées pour vous
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

        {/* Why Choose Us Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-xl p-8 lg:p-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
            Pourquoi choisir Les Assureurs Experts ?
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border border-green-200"
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
          className="bg-blue-800 rounded-xl p-8 lg:p-12 text-center text-white"
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
              className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Être rappelé gratuitement
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <p className="text-sm text-blue-200 mt-6">
            Gratuit et sans engagement • Réponse sous 24h • Conseils personnalisés
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComprehensiveInsuranceSection;
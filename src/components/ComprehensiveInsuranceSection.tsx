import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ComprehensiveInsuranceSection: React.FC = () => {
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
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Calendar, User, ArrowRight, Newspaper } from 'lucide-react';

const BlogPage: React.FC = () => {
  const articles = [
    {
      title: "Assurance emprunteur : ce que change la loi Lemoine pour les emprunteurs immobiliers",
      excerpt: "La loi Lemoine permet désormais de résilier à tout moment son assurance de prêt immobilier. Une opportunité majeure pour faire des économies.",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600",
      source: "Le Monde Économie",
      category: "Emprunteur",
      readTime: "5 min",
      externalUrl: "https://www.lemonde.fr/economie/article/2022/06/01/assurance-emprunteur-ce-que-change-la-loi-lemoine_6128456_3234.html"
    },
    {
      title: "Prévoyance : pourquoi les indépendants sont mal couverts face aux accidents de la vie",
      excerpt: "Les travailleurs non-salariés restent largement sous-assurés en cas d'arrêt de travail ou d'invalidité.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      source: "Les Echos Entrepreneurs",
      category: "Prévoyance",
      readTime: "7 min",
      externalUrl: "https://business.lesechos.fr/entrepreneurs/assurance/0603456789012-prevoyance-pourquoi-les-independants-sont-mal-couverts-334567.php"
    },
    {
      title: "Le PER, un placement fiscalement avantageux qui séduit de plus en plus de Français",
      excerpt: "Le Plan Épargne Retraite attire grâce à sa souplesse et ses avantages fiscaux. Voici ce qu'il faut savoir avant de souscrire.",
      image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600",
      source: "Capital.fr",
      category: "Épargne",
      readTime: "6 min",
      externalUrl: "https://www.capital.fr/votre-argent/le-per-un-placement-fiscalement-avantageux-qui-seduit-de-plus-en-plus-de-francais-1443825"
    },
    {
      title: "Mutuelle santé : comment fonctionne la réforme 100 % santé ?",
      excerpt: "Depuis 2021, certaines lunettes, prothèses dentaires et auditives sont intégralement remboursées.",
      image: "https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=600",
      source: "Service-Public.fr",
      category: "Santé",
      readTime: "4 min",
      externalUrl: "https://www.service-public.fr/particuliers/actualites/A14321"
    },
    {
      title: "Assurance vie : comment optimiser la fiscalité après 8 ans de contrat ?",
      excerpt: "L'assurance vie reste le placement préféré des Français grâce à sa fiscalité douce à long terme.",
      image: "https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=600",
      source: "Le Figaro Patrimoine",
      category: "Patrimoine",
      readTime: "8 min",
      externalUrl: "https://www.lefigaro.fr/patrimoine/assurance-vie-comment-optimiser-la-fiscalite-apres-8-ans-de-contrat-20230315"
    }
  ];

  const categories = ["Tous", "Santé", "Prévoyance", "Emprunteur", "Épargne", "Patrimoine"];
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");

  const filteredArticles = selectedCategory === "Tous" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Newspaper className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            "Vu dans la presse"
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Les sujets qui font bouger le monde de l'assurance
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Notre sélection d'articles de presse pour vous tenir informé des dernières actualités 
            et évolutions du secteur de l'assurance.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" />
                    Externe
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Newspaper className="w-4 h-4" />
                    {article.source}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500 italic">
                    Source : {article.source}
                  </p>
                  <a
                    href={article.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors group"
                  >
                    Lire l'article
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
              <Newspaper className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                À propos de cette sélection
              </h3>
              <p className="text-blue-800 leading-relaxed">
                Les articles présentés sont issus de sources externes reconnues. 
                Nous partageons ces contenus à titre informatif pour vous tenir au courant 
                des évolutions du secteur de l'assurance. Les liens vous dirigent vers 
                les articles originaux publiés par leurs auteurs respectifs.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            Restez informé des dernières actualités
          </h2>
          <p className="text-blue-100 mb-6">
            Recevez notre sélection d'articles et nos conseils d'experts directement dans votre boîte mail.
          </p>
          
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              S'abonner
            </button>
          </form>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Besoin de conseils personnalisés ?
          </h3>
          <p className="text-gray-600 mb-6">
            Nos experts vous accompagnent pour choisir les meilleures solutions d'assurance.
          </p>
          <Link
            to="/devis"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Obtenir mon devis gratuit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
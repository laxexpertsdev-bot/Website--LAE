import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Calendar, Newspaper, Home, ChevronRight, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';

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

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");

  const filteredArticles = selectedCategory === "Tous"
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Actualités Assurance : Vu dans la Presse | Les Assureurs Experts</title>
        <meta name="description" content="Notre sélection d'articles de presse sur l'assurance : loi Lemoine, PER, mutuelle santé, prévoyance. Restez informé des évolutions du secteur." />
        <link rel="canonical" href="https://lesassureursexperts.fr/blog" />
      </Helmet>
      <BreadcrumbJsonLd name="Blog" slug="blog" />

      <div className="min-h-screen bg-white">
        {/* Fil d'Ariane — flotte sous la navbar principale au scroll */}
        <div className="sticky top-20 z-40 border-b border-hairline bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="flex items-center gap-1 transition-colors hover:text-brand-navy">
                <Home className="h-4 w-4" />
                Accueil
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="font-medium text-brand-navy">Blog</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-accent">
              Actualités assurance
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-brand-navy sm:text-5xl">
              "Vu dans la presse"
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-gray-600">
              Les sujets qui font bouger le monde de l'assurance
            </p>
            <p className="mt-3 max-w-prose text-gray-500">
              Notre sélection d'articles de presse pour vous tenir informé des dernières actualités
              et évolutions du secteur de l'assurance.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-brand-navy text-white'
                    : 'border border-hairline bg-white text-gray-700 hover:border-brand-navy'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {filteredArticles.map((article) => (
              <article
                key={article.title}
                className="group overflow-hidden rounded-2xl border border-hairline bg-white transition-shadow hover:shadow-soft"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-brand-navy px-3 py-1 text-xs font-medium text-white">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute right-4 top-4">
                    <span className="flex items-center gap-1 rounded bg-black/70 px-2 py-1 text-xs text-white">
                      <ExternalLink className="h-3 w-3" />
                      Externe
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Newspaper className="h-4 w-4" />
                      {article.source}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <h2 className="font-serif text-xl font-semibold leading-tight text-brand-navy transition-colors group-hover:text-brand-accent">
                    {article.title}
                  </h2>

                  <p className="mt-3 leading-relaxed text-gray-600">
                    {article.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4">
                    <p className="text-sm italic text-gray-500">
                      Source : {article.source}
                    </p>
                    <a
                      href={article.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 font-medium text-brand-navy transition-colors hover:text-brand-accent"
                    >
                      Lire l'article
                      <ArrowRight className="h-4 w-4 text-brand-accent transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 rounded-2xl border border-hairline bg-paper p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-navy/5">
                <Newspaper className="h-5 w-5 text-brand-navy" />
              </span>
              <div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-brand-navy">
                  À propos de cette sélection
                </h3>
                <p className="leading-relaxed text-gray-600">
                  Les articles présentés sont issus de sources externes reconnues.
                  Nous partageons ces contenus à titre informatif pour vous tenir au courant
                  des évolutions du secteur de l'assurance. Les liens vous dirigent vers
                  les articles originaux publiés par leurs auteurs respectifs.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-14 rounded-2xl bg-brand-navy p-8 text-center sm:p-10">
            <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
              Besoin de conseils personnalisés ?
            </h2>
            <p className="mt-3 text-lg text-white/80">
              Nos experts vous accompagnent pour choisir les meilleures solutions d'assurance.
            </p>
            <Link to="/devis" className="btn-primary mt-6 inline-flex text-base">
              Obtenir mon devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

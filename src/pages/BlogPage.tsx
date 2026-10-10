import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Home, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';
import { ORIAS, SITE_ORIGIN } from '../components/product/constants';
import {
  BLOG_CATEGORIES,
  blogPosts,
  formatBlogDate,
  getFeaturedPost,
  readingMinutes,
} from '../data/blog';

const filters = ['Tous', ...BLOG_CATEGORIES] as const;

const BlogPage: React.FC = () => {
  const [selected, setSelected] = React.useState<(typeof filters)[number]>('Tous');

  const filtered =
    selected === 'Tous' ? blogPosts : blogPosts.filter((post) => post.category === selected);
  const featured = selected === 'Tous' ? getFeaturedPost(filtered) : undefined;
  const grid = featured ? filtered.filter((post) => post.slug !== featured.slug) : filtered;

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Conseils assurance — Les Assureurs Experts',
    description:
      'Guides pratiques sur la mutuelle, l’emprunt, l’habitation, l’auto, la RC Pro et la prévoyance.',
    url: `${SITE_ORIGIN}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'Les Assureurs Experts',
      url: SITE_ORIGIN,
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      datePublished: post.publishedAt,
      url: `${SITE_ORIGIN}/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>Blog assurance : conseils pratiques | Les Assureurs Experts</title>
        <meta
          name="description"
          content="Guides clairs sur la mutuelle, l’assurance emprunteur, l’habitation, l’auto, la RC Pro et la prévoyance. Courtier ORIAS, sans promesse de résultat."
        />
        <link rel="canonical" href={`${SITE_ORIGIN}/blog`} />
        <meta property="og:title" content="Blog assurance : conseils pratiques | Les Assureurs Experts" />
        <meta
          property="og:description"
          content="Des articles pour comprendre vos contrats avant de les signer ou de les changer."
        />
        <meta property="og:url" content={`${SITE_ORIGIN}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <script type="application/ld+json">{JSON.stringify(itemList).replace(/</g, '\\u003c')}</script>
      </Helmet>
      <BreadcrumbJsonLd name="Blog" slug="blog" />

      <div className="min-h-screen bg-white">
        <div className="sticky top-20 z-40 border-b border-hairline bg-white">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-500" aria-label="Fil d'Ariane">
              <Link to="/" className="flex items-center gap-1 transition-colors hover:text-brand-navy">
                <Home className="h-4 w-4" />
                Accueil
              </Link>
              <ChevronRight className="h-4 w-4" aria-hidden />
              <span className="font-medium text-brand-navy">Blog</span>
            </nav>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-accent">
              Conseils du cabinet
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-brand-navy sm:text-5xl">
              Comprendre avant de signer
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-gray-600">
              Des guides écrits par Les Assureurs Experts pour les particuliers, le patrimoine et
              les professionnels. Ils expliquent les contrats. Ils ne promettent ni économie, ni
              accord d’un assureur.
            </p>
          </div>

          <div className="mb-10 flex flex-wrap gap-3" role="group" aria-label="Filtrer par univers">
            {filters.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelected(category)}
                aria-pressed={selected === category}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  selected === category
                    ? 'bg-brand-navy text-white'
                    : 'border border-hairline bg-white text-gray-700 hover:border-brand-navy'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {featured && (
            <Link
              to={`/blog/${featured.slug}`}
              className="group mb-10 grid overflow-hidden rounded-2xl border border-hairline bg-white shadow-soft lg:grid-cols-2"
            >
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="h-64 w-full object-cover lg:h-full lg:min-h-[22rem]"
              />
              <div className="flex flex-col p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="rounded-full bg-brand-accent px-3 py-1 text-xs font-semibold text-white">
                    À la une
                  </span>
                  <span className="rounded-full bg-brand-navy/5 px-3 py-1 text-xs font-medium text-brand-navy">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-gray-500">
                    <Clock className="h-4 w-4" aria-hidden />
                    {readingMinutes(featured)} min
                  </span>
                </div>
                <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight text-brand-navy transition-colors group-hover:text-brand-accent sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 leading-relaxed text-gray-600">{featured.excerpt}</p>
                <p className="mt-4 text-sm text-gray-500">{formatBlogDate(featured.publishedAt)}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-navy">
                  Lire le guide
                  <ArrowRight className="h-4 w-4 text-brand-accent transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          )}

          {grid.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {grid.map((article) => (
                <article
                  key={article.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-white transition-shadow hover:shadow-soft"
                >
                  <Link to={`/blog/${article.slug}`} className="relative block">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      loading="lazy"
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-brand-navy px-3 py-1 text-xs font-medium text-white">
                      {article.category}
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-3 text-sm text-gray-500">
                      <span>{formatBlogDate(article.publishedAt)}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-4 w-4" aria-hidden />
                        {readingMinutes(article)} min
                      </span>
                    </div>
                    <h2 className="font-serif text-xl font-semibold leading-tight text-brand-navy">
                      <Link to={`/blog/${article.slug}`} className="transition-colors hover:text-brand-accent">
                        {article.title}
                      </Link>
                    </h2>
                    <p className="mt-3 flex-1 leading-relaxed text-gray-600">{article.excerpt}</p>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-medium text-brand-navy"
                    >
                      Lire l’article
                      <ArrowRight className="h-4 w-4 text-brand-accent" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-hairline bg-paper p-8 text-gray-600">
              Aucun article dans cette catégorie pour le moment.
            </p>
          )}

          <div className="mt-12 rounded-2xl border border-hairline bg-paper p-8">
            <h2 className="font-serif text-lg font-semibold text-brand-navy">À propos de ces guides</h2>
            <p className="mt-3 max-w-prose leading-relaxed text-gray-600">
              Les textes sont rédigés par le cabinet Les Assureurs Experts, courtier en assurances
              inscrit à l’ORIAS sous le numéro {ORIAS}. Ils ont une visée pédagogique. Chaque
              contrat dépend de votre situation et des conditions de l’assureur.
            </p>
          </div>

          <div className="mt-14 rounded-2xl bg-brand-navy p-8 text-center sm:p-10">
            <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl">
              Envie de faire le point sur vos contrats ?
            </h2>
            <p className="mx-auto mt-3 max-w-prose text-lg text-white/80">
              Un devis ou un bilan permet de partir de vos documents, sans obligation de souscrire.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/devis" className="btn-primary text-base">
                Demander un devis
              </Link>
              <Link
                to="/#bilan"
                className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-brand-navy"
              >
                Préparer mon bilan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

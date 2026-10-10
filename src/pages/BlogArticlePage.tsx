import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight, Clock, Home, Link2, Mail, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import FaqSection from '../components/FaqSection';
import { ORIAS, SITE_ORIGIN } from '../components/product/constants';
import {
  formatBlogDate,
  getBlogPost,
  getRelatedPosts,
  readingMinutes,
} from '../data/blog';
import type { BlogPost } from '../data/blog/types';

const ArticleBody: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="max-w-prose space-y-5 text-lg leading-relaxed text-gray-700">
    {post.blocks.map((block, index) => {
      if (block.type === 'h2') {
        return (
          <h2 key={index} className="pt-4 text-2xl font-semibold text-brand-navy sm:text-3xl">
            {block.text}
          </h2>
        );
      }
      if (block.type === 'ul') {
        return (
          <ul key={index} className="list-disc space-y-2 pl-5">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      }
      if (block.type === 'callout') {
        return (
          <p key={index} className="rounded-r-xl border-l-4 border-brand-accent bg-paper px-5 py-4 text-base text-brand-navy">
            {block.text}
          </p>
        );
      }
      return <p key={index}>{block.text}</p>;
    })}
  </div>
);

const ShareBar: React.FC<{ post: BlogPost; url: string }> = ({ post, url }) => {
  const [copied, setCopied] = React.useState(false);
  const shareText = `${post.title} — ${url}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm font-medium text-gray-500">Partager</span>
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1.5 text-sm font-medium text-brand-navy hover:border-brand-navy"
      >
        {copied ? <Check className="h-4 w-4" aria-hidden /> : <Link2 className="h-4 w-4" aria-hidden />}
        {copied ? 'Lien copié' : 'Copier le lien'}
      </button>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(shareText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1.5 text-sm font-medium text-brand-navy hover:border-brand-navy"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        WhatsApp
      </a>
      <a
        href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`${post.excerpt}\n\n${url}`)}`}
        className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1.5 text-sm font-medium text-brand-navy hover:border-brand-navy"
      >
        <Mail className="h-4 w-4" aria-hidden />
        E-mail
      </a>
    </div>
  );
};

const BlogArticlePage: React.FC = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Article introuvable | Les Assureurs Experts</title>
          <meta name="robots" content="noindex, follow" />
          <meta name="description" content="Cet article n’existe pas ou a été déplacé." />
        </Helmet>
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="text-3xl font-semibold text-brand-navy">Cet article est introuvable</h1>
          <p className="mt-4 text-gray-600">Le lien est peut-être incomplet. Les guides publiés sont sur le blog.</p>
          <Link to="/blog" className="btn-primary mt-8">
            Retour au blog
          </Link>
        </div>
      </>
    );
  }

  const url = `${SITE_ORIGIN}/blog/${post.slug}`;
  const minutes = readingMinutes(post);
  const related = getRelatedPosts(post);
  const imageUrl = `${SITE_ORIGIN}${post.image}`;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: [imageUrl],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: 'fr-FR',
    mainEntityOfPage: url,
    author: {
      '@type': 'Organization',
      name: 'Les Assureurs Experts',
      url: SITE_ORIGIN,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Les Assureurs Experts',
      url: SITE_ORIGIN,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/logo-assureurs-experts.png`,
      },
    },
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_ORIGIN}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_ORIGIN}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{`${post.seoTitle} | Les Assureurs Experts`}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={`${post.seoTitle} | Les Assureurs Experts`} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content={imageUrl} />
        <meta property="article:published_time" content={post.publishedAt} />
        <script type="application/ld+json">{JSON.stringify(articleLd).replace(/</g, '\\u003c')}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd).replace(/</g, '\\u003c')}</script>
      </Helmet>

      <article className="min-h-screen bg-white">
        <div className="border-b border-hairline bg-white">
          <div className="mx-auto max-w-3xl px-4 py-3 sm:px-6">
            <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500" aria-label="Fil d'Ariane">
              <Link to="/" className="inline-flex items-center gap-1 hover:text-brand-navy">
                <Home className="h-4 w-4" />
                Accueil
              </Link>
              <ChevronRight className="h-4 w-4" aria-hidden />
              <Link to="/blog" className="hover:text-brand-navy">
                Blog
              </Link>
              <ChevronRight className="h-4 w-4" aria-hidden />
              <span className="font-medium text-brand-navy">{post.category}</span>
            </nav>
          </div>
        </div>

        <header className="mx-auto max-w-3xl px-4 pt-10 sm:px-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-brand-navy px-3 py-1 text-xs font-medium text-white">
              {post.category}
            </span>
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" aria-hidden />
              {minutes} min de lecture
            </span>
          </div>
          <h1 className="mt-5 text-3xl font-semibold leading-tight text-brand-navy sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-xl leading-relaxed text-gray-600">{post.excerpt}</p>
          <p className="mt-4 text-sm text-gray-500">
            Par Les Assureurs Experts, courtier en assurances — ORIAS {ORIAS}
          </p>
        </header>

        <figure className="mx-auto mt-8 max-w-5xl px-4 sm:px-6">
          <img src={post.image} alt={post.imageAlt} className="aspect-[16/9] w-full rounded-2xl object-cover" />
          <figcaption className="mt-2 text-xs text-gray-500">Photo : {post.imageCredit}</figcaption>
        </figure>

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <ArticleBody post={post} />

          <div className="mt-10 border-t border-hairline pt-6">
            <ShareBar post={post} url={url} />
          </div>

          <div className="mt-12">
            <FaqSection items={post.faqs.map((faq) => ({ q: faq.question, a: faq.answer }))} />
          </div>

          <p className="mt-10 text-sm leading-relaxed text-gray-500">
            Article informatif rédigé par Les Assureurs Experts (ORIAS {ORIAS}). Il ne constitue
            ni un conseil personnalisé, ni une offre contractuelle, ni une garantie de résultat.
            Les garanties, franchises et exclusions figurent dans les conditions de chaque assureur.
          </p>

          <div className="mt-10 rounded-2xl bg-brand-navy p-8 text-white">
            <h2 className="text-2xl font-semibold text-white">Et pour votre situation ?</h2>
            <p className="mt-3 text-white/80">{post.cta.note}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to={post.cta.href} className="btn-primary">
                {post.cta.label}
              </Link>
              <Link
                to={post.cta.href === '/devis' ? '/#bilan' : '/devis'}
                className="inline-flex items-center justify-center rounded-lg border border-white px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white hover:text-brand-navy"
              >
                {post.cta.href === '/devis' ? 'Préparer un bilan' : 'Demander un devis'}
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="border-t border-hairline bg-paper py-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-semibold text-brand-navy">À lire ensuite</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/blog/${item.slug}`}
                    className="group overflow-hidden rounded-2xl border border-hairline bg-white"
                  >
                    <img src={item.image} alt="" className="h-40 w-full object-cover" />
                    <div className="p-5">
                      <p className="text-xs font-medium uppercase tracking-wide text-brand-accent">{item.category}</p>
                      <h3 className="mt-2 font-serif text-lg font-semibold text-brand-navy group-hover:text-brand-accent">
                        {item.title}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-navy">
                        Lire
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
};

export default BlogArticlePage;

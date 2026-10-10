/**
 * Forme d'un article du blog.
 * Pour en ajouter un : dupliquer un fichier de `posts/`, puis suivre le commentaire
 * en tête de `src/data/blog/index.ts`.
 */

export type BlogCategory = 'Particuliers' | 'Patrimoine' | 'Pro';

export const BLOG_CATEGORIES: BlogCategory[] = ['Particuliers', 'Patrimoine', 'Pro'];

export interface BlogParagraph {
  type: 'p' | 'h2' | 'callout';
  text: string;
}

export interface BlogList {
  type: 'ul';
  items: string[];
}

export type BlogBlock = BlogParagraph | BlogList;

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogCta {
  /** Libellé du bouton principal. */
  label: string;
  /** Chemin interne (`/devis`, `/#bilan`, etc.). */
  href: string;
  /** Phrase courte sous le bouton. Pas de promesse de résultat. */
  note: string;
}

export interface BlogPost {
  /** URL : /blog/{slug}. Minuscules, chiffres et tirets. Unique. */
  slug: string;
  title: string;
  /** Titre SEO, sans le nom du cabinet (il est ajouté dans la page). */
  seoTitle: string;
  /** Environ 140 à 160 caractères. */
  metaDescription: string;
  excerpt: string;
  category: BlogCategory;
  /** AAAA-MM-JJ */
  publishedAt: string;
  /** Chemin dans public/, par exemple /blog/mutuelle.webp */
  image: string;
  imageAlt: string;
  /** Mention visible sous la photo. */
  imageCredit: string;
  /** Un seul article « à la une » suffit. Le plus récent l'emporte. */
  featured?: boolean;
  cta: BlogCta;
  /** Slugs d'articles déjà publiés. */
  relatedSlugs: string[];
  faqs: BlogFaq[];
  blocks: BlogBlock[];
}

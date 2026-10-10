import type { BlogPost } from './types';
import { BLOG_CATEGORIES } from './types';

/**
 * Ajouter un article sans toucher aux pages :
 * 1. Dupliquer un fichier de ce dossier `posts/` et changer le `slug`.
 * 2. Déposer la photo dans `public/blog/` et une ligne dans `public/blog/CREDITS.md`.
 * 3. Ajouter l'adresse dans `public/sitemap.xml`.
 * Le fichier est pris en compte tout seul. `npm run build` échoue si le slug
 * est en double ou si un article lié n'existe pas.
 */
const modules = import.meta.glob<{ default: BlogPost }>('./posts/*.ts', { eager: true });

function validate(posts: BlogPost[]): void {
  const slugs = new Set<string>();
  for (const post of posts) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) {
      throw new Error(`Blog : slug invalide « ${post.slug} ». Utilisez des minuscules et des tirets.`);
    }
    if (slugs.has(post.slug)) {
      throw new Error(`Blog : slug en double « ${post.slug} ».`);
    }
    slugs.add(post.slug);
    if (!post.image.startsWith('/blog/')) {
      throw new Error(`Blog : l'image de « ${post.slug} » doit être dans /blog/.`);
    }
  }
  for (const post of posts) {
    for (const related of post.relatedSlugs) {
      if (!slugs.has(related)) {
        throw new Error(`Blog : « ${post.slug} » renvoie vers un article inconnu « ${related} ».`);
      }
    }
  }
}

export const blogPosts: BlogPost[] = Object.values(modules)
  .map((mod) => mod.default)
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

validate(blogPosts);

export { BLOG_CATEGORIES };

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPost(posts: BlogPost[] = blogPosts): BlogPost | undefined {
  const flagged = posts.filter((post) => post.featured);
  return flagged[0] ?? posts[0];
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => getBlogPost(slug))
    .filter((item): item is BlogPost => Boolean(item))
    .slice(0, 3);
}

/** Compte les mots du corps, du chapô et de la FAQ. */
export function articleWordCount(post: BlogPost): number {
  const parts: string[] = [post.excerpt];
  for (const block of post.blocks) {
    if (block.type === 'ul') parts.push(...block.items);
    else parts.push(block.text);
  }
  for (const faq of post.faqs) parts.push(faq.question, faq.answer);
  return parts.join(' ').trim().split(/\s+/).filter(Boolean).length;
}

/** Vitesse de lecture confortable en français. */
export function readingMinutes(post: BlogPost): number {
  return Math.max(1, Math.round(articleWordCount(post) / 220));
}

export function formatBlogDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(year, month - 1, day));
}

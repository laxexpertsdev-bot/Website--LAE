import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import type { IncomingMessage, ServerResponse } from 'node:http';

/**
 * Chemins réels de l'application (src/App.tsx), hors route « * ».
 * vercel.json réécrit ces chemins vers index.html (HTTP 200). Les autres
 * URLs HTML reçoivent le shell avec un statut 404, pour que NotFoundPage
 * soit aussi un vrai 404 côté Vite (dev/preview) et Vercel (dist/404.html).
 */
const KNOWN_SPA_PATHS = new Set([
  '/',
  '/offres',
  '/devis',
  '/premium',
  '/blog',
  '/contact',
  '/mutuelle-sante',
  '/assurance-emprunteur',
  '/assurance-auto',
  '/assurance-2-roues',
  '/prevoyance',
  '/assurance-bateau',
  '/expatries',
  '/per',
  '/assurance-vie',
  '/assurance-habitation',
  '/assurance-professionnelle',
  '/assurance-decennale',
  '/sante-prevoyance-collective',
  '/capital-obseques',
  '/lp/mutuelle-sante',
  '/mentions-legales',
  '/politique-confidentialite',
  '/conditions-generales',
  '/gestion-cookies',
]);

function requestPathname(url: string | undefined): string {
  const raw = (url ?? '/').split('?')[0]?.split('#')[0] ?? '/';
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

function isKnownSpaPath(pathname: string): boolean {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  // Les articles vivent sous /blog/:slug. Le slug inconnu affiche la page
  // « article introuvable » (noindex) ; le statut HTTP reste 200, comme sur
  // Vercel (rewrite /blog/:slug), pour que les vrais articles soient indexables.
  if (normalized.startsWith('/blog/')) return true;
  return KNOWN_SPA_PATHS.has(normalized);
}

function spaShellNotFound(): Plugin {
  const markUnknownHtml = (
    req: IncomingMessage,
    res: ServerResponse,
    next: (err?: unknown) => void,
  ) => {
    const current = requestPathname(req.url);
    const original = requestPathname(
      (req as IncomingMessage & { originalUrl?: string }).originalUrl ?? req.url,
    );
    const rewrittenToShell = current === '/index.html';
    const hasExtension = path.posix.extname(original) !== '';
    // Vite's HTML sender forces status 200 just before res.end(). Flip it
    // back to 404 for unknown routes once the shell is about to be sent.
    if (
      rewrittenToShell &&
      !hasExtension &&
      !original.startsWith('/api') &&
      !isKnownSpaPath(original)
    ) {
      const origEnd = res.end;
      res.end = function (this: ServerResponse, ...args: unknown[]) {
        if (this.statusCode === 200) this.statusCode = 404;
        return origEnd.apply(this, args as never);
      } as ServerResponse['end'];
    }
    next();
  };

  return {
    name: 'spa-shell-not-found',
    configureServer(server) {
      return () => {
        server.middlewares.use(markUnknownHtml);
      };
    },
    configurePreviewServer(server) {
      return () => {
        server.middlewares.use(markUnknownHtml);
      };
    },
    closeBundle() {
      const distDir = path.resolve('dist');
      const indexPath = path.join(distDir, 'index.html');
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, path.join(distDir, '404.html'));
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), spaShellNotFound()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: true,
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: true,
  },
});

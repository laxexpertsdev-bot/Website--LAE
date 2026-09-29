<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# LAE — migration Lovable

- Ce dépôt contient le site existant Les Assureurs Experts, importé de
  `laxexpertsdev-bot/Website--LAE` en conservant son historique.
- Le code actif utilise React 18, Vite 5, TypeScript et Tailwind 3, avec
  React Router. Le starter TanStack initial a été remplacé volontairement.
  `.lovable/project.json` conserve les métadonnées du projet d'accueil ;
  ne pas en déduire le framework actif.
- Conserver les pages, les URLs, les contenus français, le design, le SEO,
  le consentement et les intégrations existants. Ne pas convertir le framework
  ni ajouter Supabase/Lovable Cloud sans demande explicite.
- Dépôt connecté à Lovable : `laxexpertsdev-bot/connect-your-code`, branche `main`.
  Les commits de cette branche doivent conserver l'historique du starter et de LAE.
- Le site de production reste sur Vercel et sur le dépôt d'origine.
  Ce dépôt Lovable ne met pas à jour automatiquement cette production.
- `api/bilan-lead.ts` est une fonction Vercel utilisant des secrets serveur.
  Vite seul ne l'exécute pas : l'aperçu Lovable ne valide pas l'envoi du guide.
  Ne pas remplacer cette fonction par une simulation de succès, exposer les secrets
  dans le navigateur, ni envoyer de demandes réelles pendant les tests.
- Vérifier `npm run build`, `npm run build:dev` et `npm run lint`.
  Le serveur de développement écoute sur le port 8080.

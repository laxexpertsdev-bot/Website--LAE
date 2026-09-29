# Les Assureurs Experts — édition avec Lovable

Site LAE existant : React 18, TypeScript, Vite 5, Tailwind 3 et React Router.

[Ouvrir le projet Lovable](https://lovable.dev/projects/324b50dc-9193-4d92-9778-a6ce4d767c06).

## Synchronisation

Le dépôt connecté à Lovable est `laxexpertsdev-bot/connect-your-code`,
branche `main`. Les modifications réalisées dans Lovable et les commits poussés
sur cette branche se synchronisent dans les deux sens. Ne pas réécrire l'historique.

L'import conserve les historiques de LAE et du starter Lovable. Le starter
TanStack a été remplacé par l'application React/Vite existante afin de conserver
son comportement. Les métadonnées `.lovable/project.json` proviennent du starter.
La compatibilité de l'aperçu doit être validée dans l'éditeur après synchronisation.

## Développement

```sh
npm ci
npm run dev
```

Le serveur écoute sur le port 8080.

```sh
npm run build
npm run build:dev
npm run lint
```

## Production et formulaires

Le site de production reste hébergé sur Vercel à partir du dépôt
`laxexpertsdev-bot/Website--LAE` (branche `Master`). Aucun changement de domaine
ou d'hébergement ne fait partie de cet import. Les modifications du dépôt Lovable
devront être intégrées explicitement dans le dépôt de production pour y être déployées.

Les formulaires standards utilisent Formspree. Le formulaire « Bilan assurance
offert » appelle `/api/bilan-lead`, une fonction Vercel qui envoie le guide PDF
via Resend et transmet le lead à Formspree. Vite et son aperçu ne lancent pas
cette fonction. Ne pas considérer un aperçu visuel comme un test d'envoi.

Variables attendues exclusivement côté serveur sur Vercel :
`RESEND_API_KEY`, `LEAD_FROM_EMAIL`, `LEAD_ADMIN_EMAIL`, `PUBLIC_SITE_URL`.
Les valeurs ne sont pas incluses dans Git. Ne jamais les exposer en variables `VITE_*`.

## Vérifications après synchronisation

- Vérifier dans Lovable que le commit d'import est visible et que l'aperçu démarre.
- Vérifier l'accueil, une page produit, `/lp/mutuelle-sante` et une route inconnue.
- Conserver les intégrations des formulaires ; tester les envois uniquement dans
  un environnement autorisé et configuré, avec des destinataires de test.
- Si l'environnement impose TanStack, arrêter la conversion automatique et
  organiser une adaptation séparée avant toute publication.

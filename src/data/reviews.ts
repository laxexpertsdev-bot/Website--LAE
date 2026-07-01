// Source unique des avis clients APPROUVÉS affichés sur le site (page d'accueil).
//
// Le site est statique (aucun backend/BDD) : les avis déposés via le formulaire
// « Laissez un avis » ne s'affichent PAS automatiquement. Ils sont envoyés par mail
// (rapport Formspree) puis publiés après modération.
//
// ▶ POUR PUBLIER UN NOUVEL AVIS reçu par mail :
//   1. Ajouter une entrée dans le tableau `reviews` ci-dessous (du plus récent au plus ancien).
//   2. N'y mettre JAMAIS l'email du client — uniquement prénom + initiale du nom.
//   3. Commit puis redéploiement Vercel (branche Master) pour mise en ligne.

export interface Review {
  /** Prénom affiché tel quel. */
  prenom: string;
  /** Initiale du nom, ex. "D." — jamais le nom complet, jamais l'email. */
  nomInitiale: string;
  /** Note de 1 à 5. */
  note: number;
  /** Texte de l'avis. */
  texte: string;
  /** Lieu optionnel, ex. "Paris". */
  lieu?: string;
  /** Date de publication au format ISO "AAAA-MM-JJ". */
  date: string;
}

export const reviews: Review[] = [
  {
    prenom: 'Assurée santé',
    nomInitiale: 'famille',
    note: 5,
    texte:
      "Service fluide et très rapide. On m'a aidée à comprendre toutes les garanties avant de signer.",
    lieu: 'Région PACA',
    date: '2025-05-12',
  },
  {
    prenom: 'Profession',
    nomInitiale: 'libérale',
    note: 5,
    texte:
      'Ma RC Pro est sur mesure. Je recommande le service, surtout pour les indépendants comme moi.',
    lieu: 'Paris',
    date: '2025-04-03',
  },
  {
    prenom: 'Jeune',
    nomInitiale: 'propriétaire',
    note: 5,
    texte:
      "J'ai pu économiser 300 € par an sur mon assurance emprunteur. Je ne savais pas que c'était possible avant de comparer.",
    lieu: 'Lyon',
    date: '2025-02-18',
  },
];

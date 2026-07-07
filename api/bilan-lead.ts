// Fonction serverless Vercel — traite le formulaire « Bilan assurance offert » de la homepage.
//
// À chaque soumission valide :
//   1. envoie le guide PDF au prospect (pièce jointe récupérée par Resend via son URL publique) ;
//   2. envoie un rapport aux adresses admin (LEAD_ADMIN_EMAIL, séparées par des virgules) ;
//   3. transmet aussi le lead à Formspree (journal du dashboard existant), de façon non bloquante.
//
// Variables d'environnement attendues (configurées sur Vercel) :
//   RESEND_API_KEY   — clé API Resend
//   LEAD_FROM_EMAIL  — expéditeur, ex. « Les Assureurs Experts <bilan@lesassureursexperts.fr> »
//   LEAD_ADMIN_EMAIL — destinataires du rapport, séparés par une virgule
//   PUBLIC_SITE_URL  — origine du site, ex. « https://lesassureursexperts.fr » (pour l'URL du PDF)

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Même endpoint que src/utils/lead.ts (redéfini ici car src/ n'est pas importable depuis api/).
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mblnydqy';

const PDF_FILENAME = 'guide-10-erreurs-assurance.pdf';

// Validation email simple (suffisante pour filtrer les saisies manifestement invalides).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  // req.body est déjà parsé par Vercel quand Content-Type est application/json ;
  // on gère aussi le cas d'une string brute par sécurité.
  let body: Record<string, unknown> = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body ?? {});
  } catch {
    return res.status(400).json({ ok: false, error: 'invalid_json' });
  }

  const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const consent = body.consent === true;
  const honeypot = typeof body.website === 'string' ? body.website.trim() : '';

  // Anti-bot : le champ honeypot doit rester vide. On répond 400 sans rien envoyer.
  if (honeypot) {
    return res.status(400).json({ ok: false, error: 'spam_detected' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false, error: 'invalid_email' });
  }
  if (!consent) {
    return res.status(400).json({ ok: false, error: 'consent_required' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.LEAD_FROM_EMAIL;
  const adminEmail = process.env.LEAD_ADMIN_EMAIL;
  const siteUrl = (process.env.PUBLIC_SITE_URL || '').replace(/\/$/, '');

  if (!apiKey || !fromEmail || !adminEmail || !siteUrl) {
    console.error('bilan-lead: variables d\'environnement manquantes', {
      hasApiKey: Boolean(apiKey),
      hasFrom: Boolean(fromEmail),
      hasAdmin: Boolean(adminEmail),
      hasSiteUrl: Boolean(siteUrl),
    });
    return res.status(500).json({ ok: false, error: 'server_misconfigured' });
  }

  const resend = new Resend(apiKey);
  const adminRecipients = adminEmail
    .split(',')
    .map((addr) => addr.trim())
    .filter(Boolean);
  const pdfUrl = `${siteUrl}/guides/${PDF_FILENAME}`;
  const safeFirstName = firstName ? escapeHtml(firstName) : '';
  const safeEmail = escapeHtml(email);
  const submittedAt = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });

  // 1. Email au prospect avec le guide en pièce jointe.
  const prospectHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1e293b;line-height:1.6;">
      <p>Bonjour${safeFirstName ? ' ' + safeFirstName : ''},</p>
      <p>Merci pour votre intérêt ! Comme promis, vous trouverez en pièce jointe notre mini-guide
      exclusif : <strong>« Les 10 erreurs à éviter en assurance »</strong>.</p>
      <p>Un conseiller des Assureurs Experts peut également réaliser gratuitement votre bilan
      d'assurance personnalisé. Répondez simplement à cet email ou appelez-nous au
      <strong>+33 1 62 17 11 11</strong>.</p>
      <p>Bonne lecture,<br/>L'équipe Les Assureurs Experts</p>
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:20px 0;"/>
      <p style="font-size:12px;color:#64748b;">Les Assureurs Experts — Courtier en assurance agréé ORIAS 25002995
      — 138 Boulevard Haussmann, 75008 Paris.</p>
    </div>`;

  try {
    const { error: prospectError } = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: 'Votre guide : Les 10 erreurs à éviter en assurance',
      html: prospectHtml,
      attachments: [{ filename: PDF_FILENAME, path: pdfUrl }],
    });

    if (prospectError) {
      console.error('bilan-lead: échec envoi prospect', prospectError);
      return res.status(500).json({ ok: false, error: 'email_failed' });
    }
  } catch (err) {
    console.error('bilan-lead: exception envoi prospect', err);
    return res.status(500).json({ ok: false, error: 'email_failed' });
  }

  // 2. Rapport admin (non bloquant : un échec ici n'invalide pas la soumission du prospect).
  const adminHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1e293b;line-height:1.6;">
      <h2 style="margin:0 0 12px;">Nouveau lead — Bilan assurance offert</h2>
      <table style="border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Prénom</td><td><strong>${safeFirstName || '—'}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Email</td><td><strong>${safeEmail}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Date</td><td>${escapeHtml(submittedAt)} (Europe/Paris)</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#64748b;">Source</td><td>lead_magnet_home</td></tr>
      </table>
      <p style="font-size:13px;color:#64748b;margin-top:16px;">Le guide PDF a été envoyé automatiquement au prospect.</p>
    </div>`;

  try {
    const { error: adminError } = await resend.emails.send({
      from: fromEmail,
      to: adminRecipients,
      replyTo: email,
      subject: `Nouveau lead Bilan — ${firstName || 'Sans prénom'} (${email})`,
      html: adminHtml,
    });
    if (adminError) {
      console.error('bilan-lead: échec rapport admin', adminError);
    }
  } catch (err) {
    console.error('bilan-lead: exception rapport admin', err);
  }

  // 3. Formspree conservé comme journal (non bloquant).
  try {
    await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        firstName,
        email,
        consent,
        _subject: 'Lead magnet — Guide « 10 erreurs à éviter »',
      }),
    });
  } catch (err) {
    console.error('bilan-lead: échec transfert Formspree', err);
  }

  return res.status(200).json({ ok: true });
}

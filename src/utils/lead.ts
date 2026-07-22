// Utilitaire partagé pour la soumission des formulaires de lead.
// Centralise l'endpoint Formspree, l'envoi via fetch et le tracking de conversion
// (event GA4/GTM `generate_lead` poussé dans le dataLayer).

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mblnydqy';

interface DataLayerWindow {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
}

export interface LeadTrackPayload {
  /** Où le formulaire est situé (ex: 'devis', 'home_section', 'contact', 'product_mutuelle-sante'). */
  formLocation: string;
  /** Type d'assurance sélectionné, si disponible. */
  insuranceType?: string;
}

/**
 * Envoie l'event de conversion `generate_lead` :
 * - directement à GA4 via `gtag()` (déjà chargé dans index.html avec G-7B368ES2C5),
 *   ce qui ne nécessite aucune configuration Google Tag Manager ;
 * - et dans le dataLayer pour un éventuel conteneur GTM configuré plus tard.
 * Sans effet côté SSR / si window indisponible.
 */
export function trackLeadConversion(payload: LeadTrackPayload): void {
  if (typeof window === 'undefined') return;
  const w = window as unknown as DataLayerWindow;
  const eventParams = {
    form_location: payload.formLocation,
    insurance_type: payload.insuranceType ?? null,
  };
  w.gtag?.('event', 'generate_lead', eventParams);
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: 'generate_lead', ...eventParams });
}

/**
 * Envoie les données du lead à Formspree en JSON.
 * Retourne true si Formspree a accepté la soumission.
 */
export async function submitLead(data: Record<string, unknown>): Promise<boolean> {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Soumission spécifique au formulaire « Bilan assurance offert » de la homepage.
 * Poste vers la fonction serverless Vercel `/api/bilan-lead`, qui envoie le guide PDF
 * au prospect, un rapport aux adresses admin, et conserve le lead dans Formspree.
 * Retourne true si la route a répondu OK (email prospect parti).
 */
export async function submitBilanLead(data: Record<string, unknown>): Promise<boolean> {
  try {
    const response = await fetch('/api/bilan-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    return response.ok;
  } catch {
    return false;
  }
}

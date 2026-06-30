// Utilitaire partagé pour la soumission des formulaires de lead.
// Centralise l'endpoint Formspree, l'envoi via fetch et le tracking de conversion
// (event GA4/GTM `generate_lead` poussé dans le dataLayer).

export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mblnydqy';

interface DataLayerWindow {
  dataLayer?: Record<string, unknown>[];
}

export interface LeadTrackPayload {
  /** Où le formulaire est situé (ex: 'devis', 'home_section', 'contact', 'product_mutuelle-sante'). */
  formLocation: string;
  /** Type d'assurance sélectionné, si disponible. */
  insuranceType?: string;
}

/**
 * Pousse un event de conversion `generate_lead` dans le dataLayer (GA4 via GTM).
 * Sans effet côté SSR / si window indisponible.
 */
export function trackLeadConversion(payload: LeadTrackPayload): void {
  if (typeof window === 'undefined') return;
  const w = window as unknown as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: 'generate_lead',
    form_location: payload.formLocation,
    insurance_type: payload.insuranceType ?? null,
  });
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

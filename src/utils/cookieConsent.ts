export interface CookieConsentValue {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export type CookieConsentPreferences = Omit<CookieConsentValue, 'timestamp'>;

const COOKIE_CONSENT_STORAGE_KEY = 'cookieConsent';
const THIRTEEN_MONTHS_MS = 13 * 30 * 24 * 60 * 60 * 1000;

function parseCookieConsent(value: string): CookieConsentValue | null {
  try {
    const parsed = JSON.parse(value) as Partial<CookieConsentValue>;
    const timestampMs = parsed.timestamp ? new Date(parsed.timestamp).getTime() : NaN;

    if (
      parsed.necessary !== true ||
      typeof parsed.analytics !== 'boolean' ||
      typeof parsed.marketing !== 'boolean' ||
      typeof parsed.timestamp !== 'string' ||
      Number.isNaN(timestampMs)
    ) {
      return null;
    }

    return {
      necessary: true,
      analytics: parsed.analytics,
      marketing: parsed.marketing,
      timestamp: parsed.timestamp,
    };
  } catch {
    return null;
  }
}

export function getCookieConsent(): CookieConsentValue | null {
  const stored = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  return stored ? parseCookieConsent(stored) : null;
}

export function isCookieConsentExpired(consent: CookieConsentValue): boolean {
  return Date.now() - new Date(consent.timestamp).getTime() > THIRTEEN_MONTHS_MS;
}

export function updateGtagConsent(analytics: boolean, marketing: boolean): void {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: marketing ? 'granted' : 'denied',
    });
  }
}

export function applyCookieConsent(consent: CookieConsentPreferences): void {
  updateGtagConsent(consent.analytics, consent.marketing);
}

export function saveCookieConsent(consent: CookieConsentPreferences): CookieConsentValue {
  const value: CookieConsentValue = {
    necessary: true,
    analytics: consent.analytics,
    marketing: consent.marketing,
    timestamp: new Date().toISOString(),
  };

  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(value));
  applyCookieConsent(value);

  return value;
}

export interface CookieConsentValue {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export type CookieConsentPreferences = Omit<CookieConsentValue, 'timestamp'>;

const COOKIE_CONSENT_STORAGE_KEY = 'cookieConsent';
const THIRTEEN_MONTHS_MS = 13 * 30 * 24 * 60 * 60 * 1000;
const CLARITY_PROJECT_ID = 'xphddgzqro';
const CLARITY_SCRIPT_SRC = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;

type ClarityCommand = ((...args: unknown[]) => void) & {
  q?: unknown[][];
};

interface ClarityWindow extends Window {
  clarity?: ClarityCommand;
}

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

/**
 * Charge Microsoft Clarity une seule fois, après l'accord aux cookies analytiques.
 * Le script est ajouté au <head> afin de conserver le comportement du snippet Clarity.
 */
export function loadClarity(marketing: boolean): void {
  if (typeof window === 'undefined') return;

  const clarityWindow = window as ClarityWindow;
  if (!clarityWindow.clarity) {
    const clarity: ClarityCommand = (...args) => {
      clarity.q = clarity.q || [];
      clarity.q.push(args);
    };
    clarityWindow.clarity = clarity;
  }

  clarityWindow.clarity('consentv2', {
    analytics_Storage: 'granted',
    ad_Storage: marketing ? 'granted' : 'denied',
  });

  if (document.querySelector(`script[src="${CLARITY_SCRIPT_SRC}"]`)) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = CLARITY_SCRIPT_SRC;
  script.dataset.clarityProject = CLARITY_PROJECT_ID;
  document.head.appendChild(script);
}

export function applyCookieConsent(consent: CookieConsentPreferences): void {
  updateGtagConsent(consent.analytics, consent.marketing);
  if (consent.analytics) {
    loadClarity(consent.marketing);
    return;
  }

  const clarityWindow = window as ClarityWindow;
  clarityWindow.clarity?.('consentv2', {
    analytics_Storage: 'denied',
    ad_Storage: 'denied',
  });
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

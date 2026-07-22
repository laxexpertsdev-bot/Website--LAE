import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone } from 'lucide-react';
import { submitLead, trackLeadConversion, trackFormStep } from '../../utils/lead';
import { PHONE_DISPLAY, PHONE_TEL } from '../product/constants';
import type { CampaignLpData } from './types';

interface StepLeadFormProps {
  /** Valeur machine du type d'assurance (ex: 'mutuelle-sante'). */
  insuranceType: string;
  /** Libellé lisible (ex: 'Mutuelle santé'). */
  insuranceLabel: string;
  form: CampaignLpData['form'];
}

const OPTION_BUTTON_BASE =
  'rounded-full border px-2.5 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2';
const OPTION_BUTTON_ACTIVE = 'border-brand-navy bg-brand-navy text-white';
const OPTION_BUTTON_INACTIVE = 'border-hairline bg-white text-gray-700 hover:border-brand-navy';

/** Écran (`phase`) affiché à l'utilisateur. `phase` 1 et 2 correspondent tous deux aux
 * données « step1 » du contrat (`form.step1Title`/`step1Intro`) — la qualification y est
 * simplement répartie sur 2 écrans courts (profil+âge, puis mutuelle actuelle) au lieu d'un
 * seul long écran, pour que chaque écran reste visible sans scroll sur mobile. `phase` 3 est
 * les coordonnées (données « step2 » du contrat). Le tracking de micro-conversion
 * (`trackFormStep`) reste déclenché exactement au même moment qu'avant ce découpage :
 * au passage vers les coordonnées, pas entre les deux écrans de qualification. */
type Phase = 1 | 2 | 3;

/**
 * Formulaire de lead en plusieurs écrans courts pour les landing pages de campagne :
 * qualification rapide par cartes cliquables (profil + âge, puis mutuelle actuelle) répartie
 * sur 2 écrans pour tenir sans scroll sur mobile, puis coordonnées. Une micro-conversion est
 * trackée (trackFormStep) au passage vers l'écran coordonnées ; la conversion finale
 * (trackLeadConversion) est trackée comme ProductLeadForm, au succès de l'envoi Formspree
 * (submitLead). Le consentement RGPD reste un texte fixe (wording légal en dur), pas piloté
 * par les données, comme dans ProductLeadForm.
 */
const StepLeadForm: React.FC<StepLeadFormProps> = ({ insuranceType, insuranceLabel, form }) => {
  const [phase, setPhase] = useState<Phase>(1);
  const [profil, setProfil] = useState<string | null>(null);
  const [trancheAge, setTrancheAge] = useState<string | null>(null);
  const [dejaMutuelle, setDejaMutuelle] = useState<'oui' | 'non' | null>(null);

  const [contact, setContact] = useState({ firstName: '', lastName: '', phone: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const canLeaveProfile = profil !== null && trancheAge !== null;
  const canLeaveQuestion = dejaMutuelle !== null;

  const handleGoToQuestion = () => {
    if (!canLeaveProfile) return;
    setPhase(2);
  };

  const handleGoToContact = () => {
    if (!canLeaveQuestion) return;
    trackFormStep(2, `lp_${insuranceType}`);
    setPhase(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    setSubmitError(false);
    setIsLoading(true);
    const ok = await submitLead({
      firstName: contact.firstName,
      lastName: contact.lastName,
      fullName: `${contact.firstName} ${contact.lastName}`.trim(),
      phone: contact.phone,
      email: contact.email,
      insuranceType,
      typeLabel: insuranceLabel,
      profil,
      trancheAge,
      dejaMutuelle,
      source: 'lp-mutuelle-sante',
      _subject: `Devis ${insuranceLabel} — LP Ads`,
    });
    setIsLoading(false);
    if (ok) {
      trackLeadConversion({ formLocation: `lp_${insuranceType}`, insuranceType });
      setIsSubmitted(true);
    } else {
      setSubmitError(true);
    }
  };

  return (
    <div id="devis" className="scroll-mt-28">
      {isSubmitted ? (
        <div className="py-8 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-7 w-7 text-green-600" />
          </div>
          <h3 className="mb-1 text-lg font-bold text-brand-navy">{form.successTitle}</h3>
          <p className="text-sm text-gray-600">{form.successText}</p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-brand-navy underline hover:text-brand-accent"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      ) : (
        <>
          {/* Progression */}
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-brand-accentDark">
            Étape {phase} sur 3
          </p>
          <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-hairline">
            <div
              className="h-full rounded-full bg-brand-accent transition-all duration-300"
              style={{ width: `${(phase / 3) * 100}%` }}
            />
          </div>

          {phase === 1 && (
            <div className="space-y-2 sm:space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-brand-navy">{form.step1Title}</h2>
                {form.step1Intro && <p className="mt-1 text-sm text-gray-600">{form.step1Intro}</p>}
              </div>

              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-brand-navy">Vous êtes</legend>
                <div className="flex flex-wrap gap-1.5">
                  {form.profiles.map((p) => (
                    <button
                      key={p.value}
                      type="button"
                      onClick={() => setProfil(p.value)}
                      aria-pressed={profil === p.value}
                      className={`${OPTION_BUTTON_BASE} ${
                        profil === p.value ? OPTION_BUTTON_ACTIVE : OPTION_BUTTON_INACTIVE
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="mb-2 text-sm font-semibold text-brand-navy">Votre âge</legend>
                <div className="flex flex-wrap gap-1.5">
                  {form.ageRanges.map((a) => (
                    <button
                      key={a.value}
                      type="button"
                      onClick={() => setTrancheAge(a.value)}
                      aria-pressed={trancheAge === a.value}
                      className={`${OPTION_BUTTON_BASE} ${
                        trancheAge === a.value ? OPTION_BUTTON_ACTIVE : OPTION_BUTTON_INACTIVE
                      }`}
                    >
                      {a.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <button
                type="button"
                onClick={handleGoToQuestion}
                disabled={!canLeaveProfile}
                className="btn-primary w-full text-base"
              >
                {form.continueLabel}
              </button>
            </div>
          )}

          {phase === 2 && (
            <div className="space-y-4 sm:space-y-6">
              <fieldset>
                <legend className="text-lg font-semibold text-brand-navy">
                  {form.hasMutuelleQuestion}
                </legend>
                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setDejaMutuelle('oui')}
                    aria-pressed={dejaMutuelle === 'oui'}
                    className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 ${
                      dejaMutuelle === 'oui' ? OPTION_BUTTON_ACTIVE : OPTION_BUTTON_INACTIVE
                    }`}
                  >
                    Oui
                  </button>
                  <button
                    type="button"
                    onClick={() => setDejaMutuelle('non')}
                    aria-pressed={dejaMutuelle === 'non'}
                    className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 ${
                      dejaMutuelle === 'non' ? OPTION_BUTTON_ACTIVE : OPTION_BUTTON_INACTIVE
                    }`}
                  >
                    Non
                  </button>
                </div>
              </fieldset>

              <div className="flex gap-3">
                <button type="button" onClick={() => setPhase(1)} className="btn-secondary text-base">
                  Retour
                </button>
                <button
                  type="button"
                  onClick={handleGoToContact}
                  disabled={!canLeaveQuestion}
                  className="btn-primary flex-1 text-base"
                >
                  {form.continueLabel}
                </button>
              </div>
            </div>
          )}

          {phase === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-brand-navy">{form.step2Title}</h2>
                {form.step2Intro && <p className="mt-1 text-sm text-gray-600">{form.step2Intro}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Prénom"
                  value={contact.firstName}
                  onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy"
                  required
                  autoComplete="given-name"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Nom"
                  value={contact.lastName}
                  onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy"
                  required
                  autoComplete="family-name"
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Téléphone"
                value={contact.phone}
                onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy"
                required
                autoComplete="tel"
                maxLength={20}
                pattern="^(?:(?:\+33|0033)[\s.\-]?[1-9]|0[1-9])(?:[\s.\-]?\d{2}){4}$"
                title="Numéro de téléphone français valide (ex: 06 12 34 56 78 ou +33 6 12 34 56 78)"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={contact.email}
                onChange={(e) => setContact({ ...contact, email: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy"
                required
                autoComplete="email"
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                title="Adresse email valide (ex: nom@domaine.fr)"
              />

              <p className="text-xs leading-relaxed text-gray-500">
                En soumettant ce formulaire, j'accepte d'être recontacté(e) par Les Assureurs Experts
                au sujet de ma demande.{' '}
                <Link
                  to="/politique-confidentialite"
                  className="text-brand-navy underline hover:text-brand-accent"
                >
                  Politique de confidentialité
                </Link>
                .
              </p>

              {submitError && (
                <p className="text-sm text-red-600">
                  Une erreur est survenue. Réessayez ou appelez le {PHONE_DISPLAY}.
                </p>
              )}

              <div className="flex gap-3">
                <button type="button" onClick={() => setPhase(2)} className="btn-secondary text-base">
                  Retour
                </button>
                <button type="submit" disabled={isLoading} className="btn-primary flex-1 text-base">
                  {isLoading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Envoi en cours...
                    </>
                  ) : (
                    form.submitLabel
                  )}
                </button>
              </div>

              <p className="text-center text-xs text-gray-500">
                Réponse sous 24h • Gratuit et sans engagement
              </p>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default StepLeadForm;

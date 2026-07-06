import React from 'react';
import Section from './Section';

interface AudienceSectionProps {
  title: string;
  intro?: string;
  rows: { public: string; specificity: string }[];
}

/** Tableau « Pour qui ? » restylé : filets fins, hover discret, pas d'ombre. */
const AudienceSection: React.FC<AudienceSectionProps> = ({ title, intro, rows }) => (
  <Section id="pour-qui" title={title} intro={intro}>
    <div className="overflow-hidden rounded-xl border border-hairline">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-paper text-sm uppercase tracking-wide text-brand-navy">
            <th className="px-5 py-3 font-semibold">Profil</th>
            <th className="px-5 py-3 font-semibold">Spécificité</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-hairline">
          {rows.map((row) => (
            <tr key={row.public} className="transition-colors hover:bg-paper/60">
              <td className="px-5 py-4 font-medium text-brand-navy">{row.public}</td>
              <td className="px-5 py-4 text-gray-700">{row.specificity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Section>
);

export default AudienceSection;

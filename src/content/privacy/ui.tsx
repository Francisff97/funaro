// src/content/privacy/ui.tsx — Dimora del Funaro
// Blocchi grafici e impostazioni condivisi dalla privacy policy IT ed EN.
import type { ReactNode } from 'react';

/**
 * Il sito usa Google Analytics?
 * false (predefinito): non compare la sezione su Google Analytics.
 * Se un giorno lo aggiungi, servono anche il banner e il consenso.
 */
export const HAS_GOOGLE_ANALYTICS = true;

/**
 * La pagina Contatti incorpora una mappa di Google Maps (iframe)?
 * true: la policy dichiara i cookie di terze parti di Google Maps.
 * Se togli la mappa incorporata e lasci solo il link "Mappa", metti false:
 * a quel punto il sito usa solo cookie tecnici.
 */
export const HAS_GOOGLE_MAPS_EMBED = true;

export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="mt-14 font-display text-2xl text-espresso md:text-3xl">{children}</h2>
);

export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="mt-8 font-display text-xl text-espresso">{children}</h3>
);

export const P = ({ children }: { children: ReactNode }) => (
  <p className="mt-4 leading-relaxed text-ink-muted">{children}</p>
);

export const OL = ({ children }: { children: ReactNode }) => (
  <ol className="mt-4 list-decimal space-y-3 pl-6 leading-relaxed text-ink-muted">{children}</ol>
);

export const UL = ({ children }: { children: ReactNode }) => (
  <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-ink-muted">{children}</ul>
);

export const A = ({ href, children }: { href: string; children: ReactNode }) => {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      className="underline underline-offset-2 hover:text-espresso"
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
};

export const NAME = 'Dimora del Funaro';
export const ADDRESS_IT = 'Via Ripa Serancia n. 31, 05018 Orvieto (TR)';
export const ADDRESS_EN = 'Via Ripa Serancia 31, 05018 Orvieto (TR), Italy';
export const EMAIL = 'info@dimoradelfunaro.it';
export const SITE = 'www.dimoradelfunaro.it';

export const BROWSER_LINKS = [
  { name: 'Google Chrome', href: 'https://support.google.com/chrome/answer/95647' },
  { name: 'Mozilla Firefox', href: 'https://support.mozilla.org/kb/enhanced-tracking-protection-firefox-desktop' },
  { name: 'Apple Safari', href: 'https://support.apple.com/guide/safari/sfri11471/mac' },
  { name: 'Microsoft Edge', href: 'https://support.microsoft.com/microsoft-edge' },
  { name: 'Opera', href: 'https://help.opera.com/en/latest/web-preferences/#cookies' },
];
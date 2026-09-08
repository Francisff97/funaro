import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { SITE } from '@/lib/site';

export default async function Footer() {
  const t = await getTranslations('footer');
  const nav = await getTranslations('nav');

  return (
    <footer className="bg-carbone text-cream">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-lg tracking-[0.15em] uppercase mb-4">{SITE.name}</p>
          <p className="text-cream-muted text-sm">{SITE.address.street}<br />{SITE.address.city} ({SITE.address.province})</p>
          <p className="text-cream-muted text-sm mt-4">Tel: {SITE.phone}<br />{SITE.email}</p>
        </div>
        <div>
          <p className="eyebrow mb-4">{t('explore')}</p>
          <ul className="space-y-2 text-cream-muted text-sm">
            <li><Link href="/appartamenti" className="hover:text-gold">{nav('apartment')}</Link></li>
            <li><Link href="/chi-siamo" className="hover:text-gold">{nav('about')}</Link></li>
            <li><Link href="/offerte" className="hover:text-gold">{nav('offers')}</Link></li>
            <li><Link href="/contatti" className="hover:text-gold">{nav('contact')}</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">{t('alsoCatia')}</p>
          <a href={SITE.sister.url} className="italic text-cream-muted hover:text-gold text-sm">
            {SITE.sister.name} →
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-cream-muted">
          <span>{SITE.name} · Orvieto · {t('ownedBy')}</span>
          <span>Privacy Policy · Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}
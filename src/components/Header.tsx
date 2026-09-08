import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { SITE } from '@/lib/site';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

export default async function Header() {
  const t = await getTranslations('nav');
  const items = [
    { href: '/appartamenti', label: t('apartment') },
    { href: '/chi-siamo', label: t('about') },
    { href: '/offerte', label: t('offers') },
    { href: '/contatti', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-xl tracking-[0.15em] uppercase text-ink">
          {SITE.name.split(' ').slice(-1)}
          <span className="block text-[0.55rem] tracking-[0.35em] text-ink-muted -mt-1">
            Dimora del
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {items.map((i) => (
            <Link key={i.href} href={i.href} className="nav-link text-ink hover:text-gold transition-colors">
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <LanguageSwitcher />
          <Link href="/contatti" className="btn btn-dark hidden sm:inline-flex">
            {t('book')}
          </Link>
          <MobileMenu items={items} bookLabel={t('book')} />
        </div>
      </div>
    </header>
  );
}
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
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
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="flex items-center font-display text-sm uppercase tracking-[0.15em] text-ink md:text-base lg:text-xl"
        >
          <Image src="/logo.png" alt={SITE.name} width={48} height={48} className="pr-[10px]" />
          <div className="flex flex-col">
            Dimora del
            <span className="-mt-1 block text-[0.875rem] tracking-[0.35em] text-ink-muted">
              {SITE.name.split(' ').slice(-1)}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 md:flex lg:gap-9">
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="nav-link text-[0.875rem] text-ink transition-colors hover:text-gold md:text-[1rem]"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <LanguageSwitcher />

          {/* Solo da tablet in su. Il contenitore serve perché la classe .btn
              imposta il display e annullerebbe "hidden" se messo sul link. */}
          <div className="hidden md:block">
            <Link href="/contatti" className="btn btn-dark">
              {t('book')}
            </Link>
          </div>

          <MobileMenu items={items} bookLabel={t('book')} />
        </div>
      </div>
    </header>
  );
}

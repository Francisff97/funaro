'use client';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (l: 'it' | 'en') => router.replace(pathname, { locale: l });

  return (
    <div className="flex items-center gap-1 font-label text-xs uppercase tracking-widest">
      {(['it', 'en'] as const).map((l) => (
  <button key={l} onClick={() => switchTo(l)}
    className={l === locale ? 'text-gold font-medium' : 'text-ink-muted hover:text-ink'}>
    {l.toUpperCase()}
  </button>
)).reduce((acc: React.ReactNode[], el, i) =>
        i === 0 ? [el] : [...acc, <span key={`s${i}`} className="text-ink-muted">/</span>, el], [])}
    </div>
  );
}
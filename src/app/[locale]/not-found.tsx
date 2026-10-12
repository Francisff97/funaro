import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-paper px-6 py-24 text-center">
      <title>{`${t('title')} · Dimora del Funaro`}</title>

      <p className="text-xs uppercase tracking-[0.35em] text-gold">{t('eyebrow')}</p>
      <h1 className="mt-4 font-display text-5xl text-ink md:text-6xl">{t('title')}</h1>
      <p className="mt-6 max-w-md text-ink-muted">{t('text')}</p>

      <div className="mt-10 flex flex-col items-center gap-5">
        <div>
          <Link href="/" className="btn btn-dark">
            {t('home')}
          </Link>
        </div>
        <Link
          href="/appartamenti"
          className="text-sm text-ink underline underline-offset-4 transition-colors hover:text-gold"
        >
          {t('apartment')}
        </Link>
      </div>
    </section>
  );
}

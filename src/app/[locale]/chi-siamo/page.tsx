import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';
import { type Locale } from '@/lib/site';
import { Section, Container } from '@/components/Section';
import JsonLd from '@/components/JsonLd';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return buildMetadata({ locale, path: '/chi-siamo', ns: 'about' });
}

export default async function About({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const nearby = t.raw('nearby') as string[];
  const around = t.raw('around') as string[];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(locale, [{ name: 'Home', path: '' }, { name: t('crumb'), path: '/chi-siamo' }])} />

      <section className="relative min-h-[70vh] flex items-end bg-carbone text-cream">
        <div className="absolute inset-0 bg-[url('/images/room2.jpg')] bg-cover bg-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbone to-transparent" />
        <Container className="relative z-10 pb-16">
          <p className="eyebrow mb-4">{t('heroEyebrow')}</p>
          <h1 className="text-4xl md:text-5xl max-w-2xl">
            {t('heroTitle')} <span className="italic text-gold-2">{t('heroTitleAccent')}</span>
          </h1>
          <p className="mt-5 max-w-lg text-cream-muted">{t('heroText')}</p>
        </Container>
      </section>

      <Section>
        <Container className="grid md:grid-cols-2 gap-12 py-20 items-center">
          <div>
            <p className="eyebrow mb-4">{t('storyEyebrow')}</p>
            <h2 className="text-3xl mb-6">{t('storyTitle')} <span className="italic text-gold">{t('storyTitleAccent')}</span>.</h2>
            <p className="text-ink-muted whitespace-pre-line">{t('storyText')}</p>
          </div>
          <div className="aspect-[4/3] bg-[url('/images/detail.jpg')] bg-cover bg-center" />
        </Container>
      </Section>

      <Section tint>
        <Container className="py-20">
          <p className="eyebrow mb-3">{t('locationEyebrow')}</p>
          <h2 className="text-3xl mb-8">{t('locationTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-ink-muted mb-4">{t('locationText1')}</p>
              <ul className="space-y-1">{nearby.map((n) => <li key={n} className="flex gap-2"><span className="text-gold">•</span>{n}</li>)}</ul>
            </div>
            <div>
              <p className="text-ink-muted mb-4">{t('locationText2')}</p>
              <ul className="space-y-1">{around.map((n) => <li key={n} className="flex gap-2"><span className="text-gold">•</span>{n}</li>)}</ul>
            </div>
          </div>
          <Link href="/contatti" className="mt-10 inline-flex nav-link text-gold border-b border-gold pb-1">{t('cta')} →</Link>
        </Container>
      </Section>
    </>
  );
}
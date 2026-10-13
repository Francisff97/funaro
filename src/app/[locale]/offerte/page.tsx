import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { buildMetadata } from '@/lib/seo';
import { offerJsonLd, breadcrumbJsonLd } from '@/lib/jsonld';
import { type Locale } from '@/lib/site';
import { Section, Container } from '@/components/Section';
import JsonLd from '@/components/JsonLd';
import Reveal from '@/components/Reveal';
import Image from 'next/image';
import { IMG } from '@/lib/images';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return buildMetadata({ locale, path: '/offerte', ns: 'offers' });
}

export default async function Offers({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('offers');
  const list = t.raw('list') as { min: string; badge: string; title: string; text: string }[];
  const steps = t.raw('steps') as { n: string; title: string; text: string }[];

  return (
    <>
      <JsonLd data={[
        offerJsonLd(list.map((o) => ({ name: o.title, desc: o.text }))),
        breadcrumbJsonLd(locale, [{ name: 'Home', path: '' }, { name: t('crumb'), path: '/offerte' }]),
      ]} />

      <section className="relative min-h-[60vh] flex items-end bg-carbone text-cream">
       <div className="absolute inset-0 bg-[url('/images/offerte-hero.jpg')] bg-cover bg-center opacity-40" />
<div className="absolute inset-0 bg-gradient-to-t from-carbone via-carbone/75 via-45% to-carbone/30" />
        <Container className="relative z-10 pb-16">
          <p className="eyebrow mb-4">{t('heroEyebrow')}</p>
          <h1 className="text-4xl md:text-5xl max-w-xl">
            {t('heroTitle')} <span className="italic text-gold-2">{t('heroTitleAccent')}</span>
          </h1>
        </Container>
      </section>
      <h2 className="sr-only">{t('cardsTitle')}</h2>

      <Section>
        <Container className="py-20">
          <div className="grid md:grid-cols-2 border border-ink/15">
            {list.map((o, i) => (
              <div key={o.title} className={`p-10 ${i === 0 ? 'bg-carbone text-cream' : ''}`}>
                <p className="eyebrow mb-4">{o.min}</p>
                <span className="inline-block bg-gold text-white text-sm px-4 py-1 mb-5">{o.badge}</span>
                <h3 className="text-2xl italic mb-3">{o.title}</h3>
                <p className={`text-[1rem] mb-6 ${i === 0 ? 'text-cream-muted' : 'text-ink-muted'}`}>{o.text}</p>
                <Link href="/contatti" className="btn btn-gold">{t('getOffer')}</Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tint>
        <Container className="py-20">
          <p className="eyebrow mb-3">{t('howEyebrow')}</p>
          <h2 className="text-3xl mb-10">{t('howTitle')}</h2>
          <div className="grid md:grid-cols-3 border-t border-ink/15">
            {steps.map((s) => (
              <div key={s.n} className="p-8 border-b md:border-b-0 md:border-r last:border-r-0 border-ink/15">
                <p className="font-display text-4xl text-ink-muted mb-3">{s.n}</p>
                <h3 className="text-xl mb-2">{s.title}</h3>
                <p className="text-ink-muted text-[1rem]">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
  <Container className="grid md:grid-cols-2 gap-12 py-20 md:py-28 items-center">
    <Reveal>
      <p className="eyebrow mb-4">{t('whyEyebrow')}</p>
      <h2 className="text-3xl md:text-4xl mb-6">
        {t('whyTitle')} <span className="italic text-gold">{t('whyTitleAccent')}</span>
      </h2>
      <p className="text-ink-muted mb-8 whitespace-pre-line">{t('whyText')}</p>
      <Link href="/contatti" className="btn btn-gold">{t('whyCta')}</Link>
    </Reveal>
    <Reveal delay={0.1}>
      <div className="relative aspect-[4/3] bg-carbone">
        <Image src={IMG.mappaOrvieto} alt={t('whyImgAlt')} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
      </div>
    </Reveal>
  </Container>
</Section>
    </>
  );
}

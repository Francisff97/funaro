import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { buildMetadata } from '@/lib/seo';
import { lodgingJsonLd, breadcrumbJsonLd } from '@/lib/jsonld';
import { SITE, type Locale } from '@/lib/site';
import { Section, Container } from '@/components/Section';
import JsonLd from '@/components/JsonLd';
import Reveal from '@/components/Reveal';
import Slider from '@/components/Slider';
import HeroVideo from '@/components/HeroVideo';
import { IMG, HOME_CAMERE_SRC } from '@/lib/images';
import BookingWidget from '@/components/BookingWidget';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return buildMetadata({ locale, ns: 'home' });
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');
  const to = await getTranslations('offers');
  const amenities = t.raw('amenities') as string[];
  const directions = t.raw('directionsList') as string[];
  const offers = to.raw('list') as { min: string; badge: string; title: string; text: string }[];

  const roomAlts = t.raw('gallery') as string[];
  const roomImages = HOME_CAMERE_SRC.map((src, i) => ({ src, alt: roomAlts[i] ?? SITE.name }));

  return (
    <>
      <JsonLd data={[lodgingJsonLd(locale), breadcrumbJsonLd(locale, [{ name: 'Home', path: '' }])]} />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-end bg-carbone text-cream">
<div className="absolute inset-0 overflow-hidden">
  <HeroVideo poster="/images/foto/hero-drone.jpg" />
</div>
<div className="absolute inset-0 bg-gradient-to-t from-carbone/95 via-carbone/50 via-40% to-carbone/10" />
        <Container className="relative z-10 pb-20">
          <p className="eyebrow mb-4">{t('heroEyebrow')}</p>
          <h1 className="text-4xl md:text-6xl max-w-3xl">
            {t('heroTitle')} <span className="italic text-gold-2">{t('heroTitleAccent')}</span> {t('heroTitleEnd')}
          </h1>
          <p className="mt-6 max-w-xl text-cream-muted">{t('heroText')}</p>
          <Link href="/appartamenti" className="mt-8 inline-flex nav-link text-gold-2 border-b border-gold-2 pb-1">
            {t('heroCta')} →
          </Link>
        </Container>
      </section>

      {/* INTRO + IMG */}
      <Section>
        <Container className="grid md:grid-cols-2 gap-12 py-20 md:py-28 items-center">
          <Reveal>
            <p className="eyebrow mb-5">{t('introEyebrow')}</p>
            <h2 className="text-3xl md:text-4xl mb-6">
              {t('introTitle')} <span className="italic text-gold">{t('introTitleAccent')}</span>.
            </h2>
            <p className="text-ink-muted mb-8 whitespace-pre-line">{t('introText')}</p>
            <Link href="/appartamenti" className="nav-link text-gold border-b border-gold pb-1">
              {t('introCta')} →
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3]">
              <Image src={IMG.cucina} alt={t('introImgAlt')} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* AMENITIES BAR */}
      <Section dark>
        <Container className="py-5 flex flex-wrap gap-x-6 gap-y-2 justify-center text-[1rem] text-cream-muted font-label">
          {amenities.map((a) => (
            <span key={a} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold" /> {a}
            </span>
          ))}
        </Container>
      </Section>

      {/* CAMERA + SLIDER */}
      <Section>
        <Container className="grid md:grid-cols-2 gap-12 py-20 md:py-28 items-center">
          <Reveal>
            <Slider images={roomImages} />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-4">{t('roomEyebrow')}</p>
            <h2 className="text-3xl md:text-4xl mb-6">
              {t('roomTitle')} <span className="italic text-gold">{t('roomTitleAccent')}</span>
            </h2>
            <p className="text-ink-muted mb-6 whitespace-pre-line">{t('roomText')}</p>
            <p className="text-gold text-xl mb-6">{t('price')}</p>
            <Link href="/contatti" className="btn btn-dark">{t('checkAvailability')}</Link>
          </Reveal>
        </Container>
      </Section>

      {/* DAL CENTRO STORICO ALLA CAMPAGNA */}
      <Section tint>
        <Container className="grid md:grid-cols-2 gap-12 py-20 md:py-28 items-center">
          <Reveal>
            <p className="eyebrow mb-4">{t('directionsEyebrow')}</p>
            <h2 className="text-3xl md:text-4xl mb-6">{t('directionsTitle')}</h2>
            <p className="text-ink-muted mb-6">{t('directionsText')}</p>
            <ul className="space-y-1 mb-8">
              {directions.map((d) => (
                <li key={d} className="flex gap-2"><span className="text-gold">•</span>{d}</li>
              ))}
            </ul>
            <Link href="/appartamenti" className="nav-link text-gold border-b border-gold pb-1">
              {t('directionsCta')} →
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3]">
              <Image src="/images/foto/drone-cupola-valle.jpg" alt={`Dintorni di ${SITE.name} — campagna umbra`} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* OSPITALITÀ VERA — CATIA (scura) */}
      <Section dark>
        <Container className="grid md:grid-cols-2 gap-12 py-20 md:py-28 items-center">
          <Reveal>
            <div className="relative aspect-[4/3]">
              <Image src="/images/catia.jpg" alt={t('catiaAlt')} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow mb-4">{t('catiaEyebrow')}</p>
            <h2 className="text-3xl md:text-4xl mb-6">
              {t('catiaTitle')} <span className="italic text-gold-2">{t('catiaTitleAccent')}</span>
            </h2>
            <p className="text-cream-muted mb-8 whitespace-pre-line">{t('catiaText')}</p>
            <Link href="/chi-siamo" className="nav-link text-gold-2 border-b border-gold-2 pb-1">
              {t('catiaCta')} →
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* OFFERTE (anteprima) */}
      <Section>
        <Container className="py-20 md:py-28">
          <Reveal>
            <p className="eyebrow mb-3">{t('offersEyebrow')}</p>
            <h2 className="text-3xl md:text-4xl mb-10">{t('offersTitle')}</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 border border-ink/15">
            {offers.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.1}>
                <div className={`p-10 h-full ${i === 0 ? 'bg-carbone text-cream' : ''}`}>
                  <p className="eyebrow mb-4">{o.min}</p>
                  <span className="inline-block bg-gold text-white text-[1rem] px-4 py-1 mb-5">{o.badge}</span>
                  <h3 className="text-2xl italic mb-3">{o.title}</h3>
                  <p className={`text-[1rem] mb-6 ${i === 0 ? 'text-cream-muted' : 'text-ink-muted'}`}>{o.text}</p>
                  <Link href="/contatti" className="btn btn-gold">{to('getOffer')}</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
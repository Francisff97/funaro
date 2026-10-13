import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { buildMetadata } from '@/lib/seo';
import { faqJsonLd, breadcrumbJsonLd } from '@/lib/jsonld';
import { SITE, type Locale } from '@/lib/site';
import { Section, Container } from '@/components/Section';
import JsonLd from '@/components/JsonLd';
import Image from 'next/image';
import { IMG, CAMERE_SRC } from '@/lib/images';
import Reveal from '@/components/motion/Reveal';
import Gallery from '@/components/Gallery';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return buildMetadata({ locale, path: '/appartamenti', ns: 'apartment' });
}

export default async function Apartment({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('apartment');
  const faqs = t.raw('faqs') as { q: string; a: string }[];

  const galleryAlts = t.raw('gallery') as string[];
const camere = CAMERE_SRC.map((src, idx) => ({ src, alt: galleryAlts[idx] ?? '' }));
const services = t.raw('services') as string[];

  return (
    <>
      <JsonLd data={[
        faqJsonLd(faqs),
        breadcrumbJsonLd(locale, [{ name: 'Home', path: '' }, { name: t('crumb'), path: '/appartamenti' }]),
      ]} />

      <section className="relative min-h-[70vh] flex items-end bg-carbone text-cream">
        <div className="absolute inset-0 bg-[url('/images/cucina2.jpg')] bg-cover bg-center opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbone to-transparent" />
        <Container className="relative z-10 pb-16">
          <p className="eyebrow mb-4">{t('heroEyebrow')}</p>
          <h1 className="text-4xl md:text-5xl max-w-2xl">
            {t('heroTitle')} <span className="italic text-gold-2">{t('heroTitleAccent')}</span>.
          </h1>
        </Container>
      </section>

      <Section>
        <Container className="grid md:grid-cols-2 gap-12 py-20 items-center">
          <Gallery slides={camere} className="aspect-[3/4] w-full" />
          <div>
            <p className="eyebrow mb-4">{t('detailEyebrow')}</p>
            <h2 className="text-3xl mb-6">{t('detailTitle')}</h2>
            <p className="text-ink-muted mb-6 whitespace-pre-line">{t('detailText')}</p>
            <p className="text-gold text-xl mb-6">{t('price')}</p>
            <Link href="/contatti" className="btn btn-dark">{t('checkAvailability')}</Link>
          </div>
        </Container>
      </Section>
      {/* SERVIZI BAR */}
<Section dark>
  <Container className="py-5 flex flex-wrap gap-x-5 gap-y-2 justify-center text-[1rem] text-cream-muted font-label">
    <span className="text-gold mr-2">{t('servicesLabel')}:</span>
    {services.map((s) => <span key={s}>· {s}</span>)}
  </Container>
</Section>

{/* TERRAZZO */}
<Section>
  <Container className="grid md:grid-cols-2 gap-12 py-20 md:py-28 items-center">
    <Reveal>
      <p className="eyebrow mb-4">{t('terraceEyebrow')}</p>
      <h2 className="text-3xl md:text-4xl mb-6">
        {t('terraceTitle')} <span className="italic text-gold">{t('terraceTitleAccent')}</span>
      </h2>
      <p className="text-ink-muted whitespace-pre-line">{t('terraceText')}</p>
    </Reveal>
    <Reveal delay={0.1}>
      <div className="relative aspect-[4/3]">
        <Image src={IMG.colazione} alt={t('terraceImgAlt')} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
      </div>
    </Reveal>
  </Container>
</Section>

{/* CTA FONDO con immagine */}
<section className="relative py-28 text-cream">
  <Image src={IMG.dettaglioDiffusore} alt={t('ctaImgAlt')} fill sizes="100vw" className="object-cover" />
  <div className="absolute inset-0 bg-carbone/70" />
  <Container className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div>
      <p className="eyebrow mb-3">{t('ctaEyebrow')}</p>
      <h2 className="text-3xl md:text-4xl">{t('ctaTitle')} <span className="italic text-gold-2">{t('ctaTitleAccent')}</span></h2>
      <p className="mt-3 text-cream-muted">{t('ctaText')}</p>
    </div>
    <Link href="/contatti" className="btn btn-gold shrink-0">{t('checkAvailability')}</Link>
  </Container>
</section>

      {/* FAQ */}
      <Section tint>
        <Container className="py-20">
          <p className="eyebrow mb-3">{t('faqEyebrow')}</p>
          <h2 className="text-3xl mb-10">{t('faqTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-ink/15 pb-6">
                <h3 className="text-xl mb-2">{f.q}</h3>
                <p className="text-ink-muted text-[1.125rem]">{f.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
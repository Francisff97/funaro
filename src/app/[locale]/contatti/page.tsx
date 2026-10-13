import { getTranslations, setRequestLocale } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbJsonLd } from '@/lib/jsonld';
import { SITE, type Locale } from '@/lib/site';
import { Section, Container } from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import MapEmbed from '@/components/MapEmbed';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return buildMetadata({ locale, path: '/contatti', ns: 'contact' });
}

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(locale, [{ name: 'Home', path: '' }, { name: t('crumb'), path: '/contatti' }])} />

      <Section dark>
        <Container className="grid md:grid-cols-2 gap-12 py-24">
          <div>
            <p className="eyebrow mb-4">{t('heroEyebrow')}</p>
            <h1 className="text-4xl md:text-5xl">
              {t('heroTitle')} <span className="italic text-gold-2">{t('heroTitleAccent')}</span>
            </h1>
            <p className="mt-6 text-cream-muted max-w-md">{t('heroText')}</p>
          </div>
          <div className="space-y-8">
            <div><p className="eyebrow mb-1">{t('phoneLabel')}</p><p className="border-b border-white/20 pb-2"><a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-gold">{SITE.phone}</a></p></div>
            <div><p className="eyebrow mb-1">Email</p><p className="border-b border-white/20 pb-2"><a href={`mailto:${SITE.email}`} className="hover:text-gold">{SITE.email}</a></p></div>
            <div><p className="eyebrow mb-1">{t('addressLabel')}</p><p className="border-b border-white/20 pb-2">{SITE.address.street}, {SITE.address.city} ({SITE.address.province})</p></div>
          </div>
        </Container>
      </Section>

      <Section tint>
        <Container className="grid md:grid-cols-2 gap-16 py-20">
          <div>
            <p className="eyebrow mb-2">{t('formEyebrow')}</p>
            <h2 className="text-3xl italic mb-8">{t('formTitle')}</h2>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-4">{t('reachEyebrow')}</p>
              <p className="whitespace-pre-line text-ink-muted">{t('reachText')}</p>
            </div>
            <div>
              <p className="eyebrow mb-4">{t('checkinEyebrow')}</p>
              <p className="whitespace-pre-line text-ink-muted">{t('checkinText')}</p>
            </div>
          <MapEmbed
            src="https://www.google.com/maps?q=Via+Ripa+Serancia+31+Orvieto&output=embed"
            title={t('map.title')}
            note={t('map.note')}
            loadLabel={t('map.load')}
            openLabel={t('map.open')}
            openHref="https://maps.google.com/?q=Via+Ripa+Serancia+31+Orvieto+TR"
          />
          </div>
        </Container>
      </Section>
    </>
  );
}

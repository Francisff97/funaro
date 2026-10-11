// src/app/[locale]/privacy-policy/page.tsx — Dimora del Funaro
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PrivacyIt } from '@/content/privacy/it';
import { PrivacyEn } from '@/content/privacy/en';

const SITE_URL = 'https://www.dimoradelfunaro.it';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy.meta' });
  const itUrl = `${SITE_URL}/it/privacy-policy`;
  const enUrl = `${SITE_URL}/en/privacy-policy`;

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === 'en' ? enUrl : itUrl,
      languages: { it: itUrl, en: enUrl, 'x-default': itUrl },
    },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'privacy' });

  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-36 md:pt-44">
        <p className="eyebrow">{t('eyebrow')}</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl">{t('title')}</h1>
        <div className="mt-10">{locale === 'en' ? <PrivacyEn /> : <PrivacyIt />}</div>
      </div>
    </section>
  );
}
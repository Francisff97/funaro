import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SITE, LOCALES, type Locale } from './site';

type Args = {
  locale: Locale;
  /** path SENZA prefisso lingua, es: '/appartamenti'. '' = home */
  path?: string;
  /** namespace in messages -> seo.<ns> con {title, description} */
  ns: string;
};

export async function buildMetadata({ locale, path = '', ns }: Args): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `seo.${ns}` });

  const canonical = `${SITE.url}/${locale}${path}`;
  const languages = Object.fromEntries(
    LOCALES.map((l) => [l, `${SITE.url}/${l}${path}`]),
  );

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: { ...languages, 'x-default': `${SITE.url}/it${path}` },
    },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      title: t('title'),
      description: t('description'),
      url: canonical,
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      images: [{ url: `${SITE.url}/images/og.jpg`, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image' },
  };
}
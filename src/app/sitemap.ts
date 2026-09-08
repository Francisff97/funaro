import type { MetadataRoute } from 'next';
import { SITE, LOCALES } from '@/lib/site';

const PATHS = ['', '/appartamenti', '/chi-siamo', '/offerte', '/contatti'];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE.url}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${SITE.url}/${l}${path}`]),
        ),
      },
    })),
  );
}
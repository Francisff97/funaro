import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(); // auto-trova src/i18n/request.ts

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
  return [
    { source: '/struttura', destination: '/la-storia', permanent: true },
    { source: '/prezzi', destination: '/offerte', permanent: true },
    { source: '/eventi', destination: '/', permanent: true },
    { source: '/contatti-2', destination: '/contatti', permanent: true },
    { source: '/booking', destination: '/camere', permanent: true },
    { source: '/privacy', destination: '/privacy-policy', permanent: true },
    { source: '/periodo-maggio-novembre', destination: '/offerte', permanent: true },
    { source: '/home/:slug*', destination: '/camere', permanent: true },
    { source: '/rooms-list/:slug*', destination: '/camere', permanent: true },
    { source: '/wp-sitemap.xml', destination: '/sitemap.xml', permanent: true },
  ];
},
};

export default withNextIntl(nextConfig);
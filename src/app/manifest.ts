import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: 'Funaro',
    description: 'Appartamento privato nel centro medievale di Orvieto',
    start_url: '/it',
    display: 'standalone',
    background_color: '#f4eee2',
    theme_color: '#191512',
    icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
  };
}
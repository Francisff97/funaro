// Foto del sito. Le nuove (servizio ottobre 2026) sono in /images/foto/.
export const IMG = {
  cucina:             '/images/foto/cucina-mobili.jpg',        // intro home
  terrazzo:           '/images/terrazzo.jpg',                  // balcone (foto vecchia)
  colazione:          '/images/foto/colazione-balcone.jpg',    // colazione sul balcone
  dettaglioDiffusore: '/images/foto/dettaglio-cuscino.jpg',    // sfondo CTA appartamento
  offerteHero:        '/images/foto/vista-chiesa.jpg',
  mappaOrvieto:       '/images/mappa-orvieto.jpg',
  og:                 '/images/og.jpg',
} as const;

// Gallery pagina Appartamento: stesso ordine di apartment.gallery nei messages.
// Prima le foto nuove, poi le vecchie ancora valide.
export const CAMERE_SRC = [
  '/images/foto/cucina-ambiente.jpg',
  '/images/foto/matrimoniale.jpg',
  '/images/foto/camera-castello.jpg',
  '/images/foto/matrimoniale-frontale.jpg',
  '/images/foto/cucina-verticale.jpg',
  '/images/foto/porta-finestra-chiesa.jpg',
  '/images/foto/bagno.jpg',
  '/images/foto/colazione-balcone-verticale.jpg',
  '/images/foto/dettaglio-orchidea.jpg',
  '/images/foto/dettaglio-mensola.jpg',
  '/images/foto/dettaglio-asciugamani.jpg',
  '/images/bedroom-2.jpg',
  '/images/letti-singoli-funaro.jpg',
  '/images/camera-castello.jpg',
  '/images/bagno.jpg',
  '/images/terrazzo.jpg',
] as const;

// Slider sezione Balcone (apartment.balconyGallery)
export const BALCONE_SRC = [
  '/images/foto/colazione-balcone.jpg',
  '/images/terrazzo.jpg',
  '/images/hero.jpg',
] as const;

// Slider camere in home (home.gallery)
export const HOME_CAMERE_SRC = [
  '/images/foto/matrimoniale.jpg',
  '/images/foto/matrimoniale-como.jpg',
  '/images/foto/camera-castello.jpg',
  '/images/bedroom-2.jpg',
  '/images/letti-singoli-funaro.jpg',
] as const;

// Dettaglio pagina Chi siamo (about.detailAlts)
export const DETTAGLIO_SRC = [
  '/images/foto/dettaglio-cactus.jpg',
  '/images/detail.jpg',
] as const;

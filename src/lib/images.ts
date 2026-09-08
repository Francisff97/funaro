// Metti questi file in /public/images/ con questi nomi ESATTI.
export const IMG = {
  heroOrvieto:        '/images/hero-orvieto.jpg',        // vista Orvieto/campagna dalla finestra (hero home)
  cucina:             '/images/cucina.jpg',              // cucina attrezzata (intro home + hero appartamenti)
  terrazzo:           '/images/terrazzo.jpg',            // terrazzo su Piazza San Giovanni
  colazione:          '/images/colazione.jpg',           // caffè/colazione (sezione terrazzo appartamenti)
  ospitalitaCuscino:  '/images/ospitalita-cuscino.jpg',  // dettaglio cuscino/letto (sezione Catia)
  dettaglioPianta:    '/images/dettaglio-pianta.jpg',    // pianta su sfondo scuro (sezione mille direzioni)
  dettaglioMensola:   '/images/dettaglio-mensola.jpg',   // mensola con piante (chi-siamo)
  dettaglioDiffusore: '/images/dettaglio-diffusore.jpg', // diffusore/bastoncini (CTA fondo appartamenti)
  offerteHero:        '/images/offerte-hero.jpg',        // farfalle/fiori (hero offerte)
  mappaOrvieto:       '/images/mappa-orvieto.jpg',       // brochure/mappa Orvieto (sezione offerte)
  og:                 '/images/og.jpg',                  // 1200x630 per social/AI preview
} as const;

// Slider camere (usato in home + appartamenti). Aggiungi qui altre foto quando le hai.
export const CAMERE_SRC = [
  '/images/camera-matrimoniale.jpg', // camera matrimoniale
  '/images/camera-castello.jpg',     // camera con letti a castello
  '/images/terrazzo.jpg',            // terrazzo
  '/images/bagno.jpg',               // bagno
] as const;
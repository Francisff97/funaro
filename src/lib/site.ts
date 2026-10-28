/**
 * Dati della struttura. I VALORI STANNO IN content/site.json
 * (modificabili dal pannello "Testi siti" del gestionale):
 * qui vengono solo preparati nei formati che servono al codice.
 */
import site from '../../content/site.json';

/** "+39 349 426 2518" → "+393494262518" (per tel:) */
const toTel = (n: string) => n.replace(/[^\d+]/g, '');
/** "+39 349 426 2518" → "393494262518" (per wa.me) */
const toWa = (n: string) => n.replace(/\D/g, '');

const addressLine = `${site.address.street} ${site.address.city} ${site.address.province}`;
const mapsQuery = encodeURIComponent(addressLine).replace(/%20/g, '+');

export const SITE = {
  name: site.name,
  url: site.url.replace(/\/$/, ''),
  /** Come va mostrato, es. "+39 349 426 2518" */
  phone: site.contacts.phone,
  phoneRaw: toTel(site.contacts.phone),
  whatsapp: toWa(site.contacts.whatsapp),
  email: site.contacts.email,
  address: site.address,
  /** Link e mappa di Google calcolati dall'indirizzo */
  mapsUrl: `https://maps.google.com/?q=${mapsQuery}`,
  mapsEmbed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  priceFrom: site.priceFrom,
  currency: site.currency,
  sister: site.sister,
};

export const LOCALES = ['it', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

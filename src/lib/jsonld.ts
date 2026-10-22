import { SITE } from './site';

const address = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.province,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
};

export function lodgingJsonLd(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    '@id': `${SITE.url}/#lodging`,
    name: SITE.name,
    url: `${SITE.url}/${locale}`,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/images/og.jpg`,
    priceRange: '€€',
    address,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.address.lat,
      longitude: SITE.address.lng,
    },
    amenityFeature: [
      'Wi-Fi', 'Cucina attrezzata', 'Balcone privato', 'Parcheggio riservato',
      'Aria condizionata', 'Self check-in', 'TV 50"', 'Animali ammessi',
    ].map((n) => ({ '@type': 'LocationFeatureSpecification', name: n, value: true })),
    checkinTime: '14:00',
    checkoutTime: '10:00',
    petsAllowed: true,
    numberOfRooms: 2,
    starRating: undefined,
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  };
}

export function offerJsonLd(offers: { name: string; desc: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: offers.map((o, i) => ({
      '@type': 'Offer',
      position: i + 1,
      name: o.name,
      description: o.desc,
      priceCurrency: SITE.currency,
    })),
  };
}

export function breadcrumbJsonLd(locale: string, trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `${SITE.url}/${locale}${t.path}`,
    })),
  };
}
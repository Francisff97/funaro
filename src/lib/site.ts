export const SITE = {
  name: 'Dimora del Funaro',
  url: 'https://www.dimoradelfunaro.it', // <-- cambia con dominio reale
  phone: '+39 349 426 2518',
  phoneRaw: '+393494262518',
  whatsapp: '393494262518',
  email: 'info@dimoradelfunaro.it',
  address: {
    street: 'Via Ripa Serancia, 31',
    city: 'Orvieto',
    province: 'TR',
    postalCode: '05018',
    country: 'IT',
    lat: 42.7185,
    lng: 12.1077, // <-- metti coordinate esatte
  },
  priceFrom: 150,
  currency: 'EUR',
  sister: { name: 'Torre Polidori', url: 'https://www.torrepolidoriorvieto.it' },
} as const;

export const LOCALES = ['it', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
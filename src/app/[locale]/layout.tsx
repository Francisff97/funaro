import type { Metadata } from 'next';
import { Cormorant_Garamond, EB_Garamond, Jost } from 'next/font/google';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { SITE } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ClickTracking from '@/components/ClickTracking';
import '../globals.css';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const IUBENDA_WIDGET = 'https://embeds.iubenda.com/widgets/3b05437a-3e98-4a75-a756-bbb5985b921b.js';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-cormorant', display: 'swap' });
const garamond = EB_Garamond({ subsets: ['latin'], weight: ['400', '500'], style: ['normal', 'italic'], variable: '--font-garamond', display: 'swap' });
const jost = Jost({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-jost', display: 'swap' });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${cormorant.variable} ${garamond.variable} ${jost.variable}`}>
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>

        <ClickTracking />

        {/* 1. Consent Mode: tutto negato finché l'utente non sceglie */}
        <Script id="consent-default" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            functionality_storage: 'granted',
            security_storage: 'granted',
            wait_for_update: 500
          });
        `}</Script>

        {/* 2. Solo la callback: il resto della configurazione arriva dal pannello iubenda */}
        <Script id="iubenda-callback" strategy="beforeInteractive">{`
          var _iub = _iub || [];
          _iub.csConfiguration = _iub.csConfiguration || {};
          _iub.csConfiguration.callback = {
            onPreferenceExpressedOrNotNeeded: function (pref) {
              if (pref && pref.purposes && pref.purposes[4]) {
                window.dataLayer.push({ event: 'consent_measurement' });
              }
            }
          };
        `}</Script>

        {/* 3. Widget iubenda: banner, policy e Consent Mode */}
        <Script src={IUBENDA_WIDGET} strategy="afterInteractive" />
      </body>
    </html>
  );
}
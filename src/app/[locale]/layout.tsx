import type { Metadata } from 'next';
import { Cormorant_Garamond, EB_Garamond, Jost } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale, getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { SITE } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import '../globals.css';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400','500','600'], variable: '--font-cormorant', display: 'swap' });
const garamond = EB_Garamond({ subsets: ['latin'], weight: ['400','500'], style: ['normal','italic'], variable: '--font-garamond', display: 'swap' });
const jost = Jost({ subsets: ['latin'], weight: ['400','500'], variable: '--font-jost', display: 'swap' });

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

  setRequestLocale(locale); // abilita rendering statico
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${cormorant.variable} ${garamond.variable} ${jost.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
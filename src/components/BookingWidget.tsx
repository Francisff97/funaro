'use client';
import Script from 'next/script';

export default function BookingWidget() {
  return (
    <>
      {/* contenitore dove il widget si aggancia — controlla la doc Riservia per l'id/attributo esatto */}
      <div id="riservia-widget" data-hotel="hotel-demo" data-lang="it" />
      <Script
        src="https://riservia.it/book/hotel-demo/embed.js?lang=it"
        strategy="afterInteractive"
      />
    </>
  );
}
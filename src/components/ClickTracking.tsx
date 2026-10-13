'use client';
import { useEffect } from 'react';



function eventFor(href: string): string | null {
  if (href.startsWith('tel:')) return 'click_call';
  if (href.includes('wa.me')) return 'click_whatsapp';
  if (href.startsWith('mailto:')) return 'click_email';
  if (href.includes('maps.google') || href.includes('google.com/maps')) return 'click_map';
  if (href.includes('torrepolidoriorvieto.it')) return 'click_polidori';
  return null;
}

export default function ClickTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const event = eventFor(href);
      if (!event) return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event,
        link_url: href,
        link_text: (a.textContent || a.getAttribute('aria-label') || '').trim().slice(0, 100),
      });
    };
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);
  return null;
}
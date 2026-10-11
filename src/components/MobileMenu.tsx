'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, usePathname } from '@/i18n/navigation';

export default function MobileMenu({
  items,
  bookLabel,
}: {
  items: { href: string; label: string }[];
  bookLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  // Chiude il menu quando si cambia pagina
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Blocca lo scroll della pagina e chiude con Esc
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Il pannello viene montato direttamente nel <body> (portal):
  // l'header ha backdrop-blur, che "rinchiude" i figli position:fixed
  // nella sua altezza e faceva sparire lo sfondo del menu.
  const panel = (
    <div
      id="mobile-menu"
      className={`fixed inset-x-0 bottom-0 top-20 z-[60] overflow-y-auto bg-paper transition-opacity duration-300 md:hidden ${
        open ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <nav className="flex flex-col px-8 pb-12 pt-4">
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            onClick={() => setOpen(false)}
            className="nav-link border-b border-black/10 py-5 font-display text-2xl text-ink"
          >
            {i.label}
          </Link>
        ))}
        <div className="mt-10">
          <Link href="/contatti" onClick={() => setOpen(false)} className="btn btn-dark w-full justify-center">
            {bookLabel}
          </Link>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Chiudi il menu' : 'Apri il menu'}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
        className="relative flex h-10 w-10 items-center justify-center text-ink"
      >
        <span
          className={`absolute h-px w-6 bg-current transition-transform duration-300 ${open ? 'rotate-45' : '-translate-y-1.5'}`}
        />
        <span className={`absolute h-px w-6 bg-current transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
        <span
          className={`absolute h-px w-6 bg-current transition-transform duration-300 ${open ? '-rotate-45' : 'translate-y-1.5'}`}
        />
      </button>

      {mounted && createPortal(panel, document.body)}
    </div>
  );
}

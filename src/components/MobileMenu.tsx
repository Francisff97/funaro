'use client';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';

export default function MobileMenu({
  items, bookLabel,
}: { items: { href: string; label: string }[]; bookLabel: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button aria-label="Menu" onClick={() => setOpen(!open)} className="p-2">
        <span className="block w-6 h-px bg-ink mb-1.5" />
        <span className="block w-6 h-px bg-ink mb-1.5" />
        <span className="block w-6 h-px bg-ink" />
      </button>
      {open && (
        <div className="fixed inset-0 top-20 bg-paper z-40 flex flex-col gap-6 p-8">
          {items.map((i) => (
            <Link key={i.href} href={i.href} onClick={() => setOpen(false)}
              className="nav-link text-ink text-lg">{i.label}</Link>
          ))}
          <Link href="/contatti" onClick={() => setOpen(false)} className="btn btn-dark mt-4">
            {bookLabel}
          </Link>
        </div>
      )}
    </div>
  );
}
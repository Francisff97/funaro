'use client';
import { useState } from 'react';

export default function MapEmbed({
  src,
  title,
  note,
  loadLabel,
  openLabel,
  openHref,
}: {
  src: string;
  title: string;
  note: string;
  loadLabel: string;
  openLabel: string;
  openHref: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-64 w-full border border-ink/15"
      />
    );
  }

  return (
    <div className="flex h-64 w-full flex-col items-center justify-center gap-5 border border-ink/15 bg-paper px-6 text-center">
      <p className="max-w-sm text-sm text-ink-muted">{note}</p>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <div>
          <button type="button" onClick={() => setLoaded(true)} className="btn btn-dark">
            {loadLabel}
          </button>
        </div>
        <a
          href={openHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-ink underline underline-offset-4 transition-colors hover:text-gold"
        >
          {openLabel}
        </a>
      </div>
    </div>
  );
}

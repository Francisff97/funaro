'use client';
import { useEffect, useRef, useState } from 'react';

/** Video di sfondo per la hero: non viene caricato su mobile, con "risparmio dati" o con "riduci movimento". */
export default function HeroVideo({ poster }: { poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const small = window.matchMedia('(max-width: 767px)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (small || reduced || saveData) return;
    setSrc(window.matchMedia('(max-width: 1279px)').matches ? '/videos/hero-720.mp4' : '/videos/hero.mp4');
  }, []);

  useEffect(() => {
    if (src) ref.current?.play().catch(() => {});
  }, [src]);

  return (
    <>
      {/* Foto sempre presente: è quella che vedono mobile e prima del caricamento */}
      <div
        className="absolute inset-0 bg-cover bg-[position:38%_center] md:bg-center"
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden
      />
      {src && (
        <video
          ref={ref}
          src={src}
          poster="/images/foto/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </>
  );
}
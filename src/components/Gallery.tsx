'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

type Slide = { src: string; alt: string };

export default function Gallery({
  slides, className = '', interval = 5000, priority = false,
}: { slides: Slide[]; className?: string; interval?: number; priority?: boolean }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  const go = useCallback((n: number) => setI((p) => (n + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (reduce || slides.length < 2) return;
    const t = setInterval(() => go(i + 1), interval);
    return () => clearInterval(t);
  }, [i, go, interval, reduce, slides.length]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* TUTTE le immagini nel DOM: alt indicizzati, crossfade sull'attiva */}
      {slides.map((s, idx) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority && idx === 0}
          className="object-cover transition-opacity duration-700 ease-out"
          style={{ opacity: idx === i ? 1 : 0 }}
        />
      ))}

      {slides.length > 1 && (
        <>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
            onClick={() => go(i - 1)} aria-label="Immagine precedente"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/85 text-carbone flex items-center justify-center shadow">
            ‹
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.92 }}
            onClick={() => go(i + 1)} aria-label="Immagine successiva"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/85 text-carbone flex items-center justify-center shadow">
            ›
          </motion.button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {slides.map((_, idx) => (
              <button key={idx} onClick={() => go(idx)} aria-label={`Vai all'immagine ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
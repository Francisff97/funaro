'use client';
import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

type Img = { src: string; alt: string };

export default function Slider({
  images, className = '', aspect = 'aspect-[4/5]',
}: { images: Img[]; className?: string; aspect?: string }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const paginate = (dir: number) => setIndex((i) => (i + dir + images.length) % images.length);

  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      <button aria-label="Immagine precedente" onClick={() => paginate(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-paper/85 text-ink flex items-center justify-center hover:bg-paper transition text-lg">‹</button>
      <button aria-label="Immagine successiva" onClick={() => paginate(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-paper/85 text-ink flex items-center justify-center hover:bg-paper transition text-lg">›</button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button key={i} aria-label={`Vai all'immagine ${i + 1}`} onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition ${i === index ? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
}
'use client';
import { motion, useReducedMotion, type HTMLMotionProps } from 'motion/react';

type Props = { children: React.ReactNode; delay?: number; className?: string; y?: number };

export default function Reveal({ children, delay = 0, className, y = 24 }: Props) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
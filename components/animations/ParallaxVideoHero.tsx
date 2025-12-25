"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';

interface ParallaxVideoHeroProps {
  videoSrc: string;
  children: React.ReactNode;
  height?: string;
  overlayOpacity?: number;
}

const ParallaxVideoHero = ({
  videoSrc,
  children,
  height = '100vh',
  overlayOpacity = 0.5,
}: ParallaxVideoHeroProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ height }}
    >
      {/* Background Video with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[130%] pointer-events-none"
        style={{ y: prefersReducedMotion ? 0 : y }}
      >
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70"
        style={{ opacity: overlayOpacity + 0.2 }}
      />

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default ParallaxVideoHero;

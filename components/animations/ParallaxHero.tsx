"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';
import { StaticImageData } from 'next/image';

interface ParallaxHeroProps {
  image: string | StaticImageData;
  children: React.ReactNode;
  height?: string;
  overlayOpacity?: number;
}

const ParallaxHero = ({ 
  image, 
  children, 
  height = '100vh',
  overlayOpacity = 0.5 
}: ParallaxHeroProps) => {
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
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[130%]"
        style={{ y: prefersReducedMotion ? 0 : y }}
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          loading="eager"
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

export default ParallaxHero;

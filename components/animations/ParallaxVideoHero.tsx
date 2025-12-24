"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';

interface ParallaxVideoHeroProps {
  youtubeUrl: string;
  children: React.ReactNode;
  height?: string;
  overlayOpacity?: number;
}

function getYouTubeEmbedUrl(url: string) {
  // Accepts full YouTube URL or just the video ID
  const match = url.match(/(?:youtu.be\/|youtube.com\/(?:embed\/|v\/|watch\?v=|shorts\/)?)([\w-]{11})/);
  const id = match ? match[1] : url;
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&modestbranding=1&rel=0`;
}

const ParallaxVideoHero = ({
  youtubeUrl,
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
  const embedUrl = getYouTubeEmbedUrl(youtubeUrl);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ height }}
    >
      {/* Background YouTube Video with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-[130%] pointer-events-none"
        style={{ y: prefersReducedMotion ? 0 : y }}
      >
        <iframe
          src={embedUrl}
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          frameBorder={0}
          className="object-cover w-full h-full"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          tabIndex={-1}
          title="YouTube Video Background"
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

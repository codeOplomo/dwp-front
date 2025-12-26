"use client";

import { useCounter, useInView } from '@/hooks/useAnimations';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = '', label, duration = 2000 }: AnimatedCounterProps) => {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const count = useCounter(end, duration, 0, isInView);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-5xl md:text-6xl lg:text-7xl font-light tracking-wider text-white mb-2">
        {count}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="text-white/70 text-sm tracking-wider uppercase">
        {label}
      </p>
    </div>
  );
};

export default AnimatedCounter;

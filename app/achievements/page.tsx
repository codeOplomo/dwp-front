"use client";
import { useState } from "react";
import achievementsData from "@/data/achievements.json";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function AchievementsPage() {
  const prefersReducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState<string | null>(null);

  // layout pattern to create an editorial/masonry feel
  const layoutMap = [
    "col-span-12 md:col-span-6 lg:col-span-6",
    "col-span-12 md:col-span-6 lg:col-span-4",
    "col-span-12 md:col-span-6 lg:col-span-8",
    "col-span-12 md:col-span-6 lg:col-span-4",
    "col-span-12 md:col-span-6 lg:col-span-3",
    "col-span-12 md:col-span-6 lg:col-span-5",
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Abstract background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Large subtle rotated rectangle */}
        <svg className="absolute -left-20 -top-40 opacity-10" width="720" height="720" viewBox="0 0 720 720" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="720" height="720" rx="36" fill="#d2de2b"/>
        </svg>

        {/* Soft circular gradient accent */}
        <svg className="absolute right-0 top-20 opacity-8" width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="g" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#d2de2b" stopOpacity="0.9" />
              <stop offset="1" stopColor="#d2de2b" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="210" cy="210" r="210" fill="url(#g)" />
        </svg>
      </div>

      <header className="max-w-7xl mx-auto px-6 pt-32 pb-8">
        <h1 className="font-serif font-[100] text-5xl md:text-6xl text-center tracking-[0.35em]" style={{ color: "#5e5654" }}>
          RÉALISATIONS
        </h1>
        <p className="mt-6 text-center max-w-2xl mx-auto text-[#5e5654] text-sm md:text-base">
          A curated selection of projects — editorially composed, crafted with materiality and light.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-12 gap-8 auto-rows-fr">
          {achievementsData.map((item, idx) => {
            const cols = layoutMap[idx % layoutMap.length];
            const isLarge = cols.includes("lg:col-span-8") || cols.includes("lg:col-span-6");
            const motionProps = prefersReducedMotion
              ? {}
              : { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.7, delay: idx * 0.06 } };

            return (
              <motion.article
                key={item.slug}
                {...motionProps}
                className={`${cols} group relative`}
                onMouseEnter={() => setHovered(item.slug)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link href={`/achievements/${item.slug}`} aria-label={`Voir ${item.title}`} className="block">
                  <div
                    className={`relative w-full h-full rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-500 will-change-transform
                      ${isLarge ? "md:h-[520px]" : "md:h-[360px]"} bg-[#F9F9F9]`}
                  >
                    {/* Image */}
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(min-width:1024px) 40vw, (min-width:768px) 48vw, 100vw"
                      priority={idx < 3} // prefetch first items
                    />

                    {/* soft dark gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                    {/* glass info panel - only on hover */}
                    <div className="absolute left-6 bottom-6 right-6 md:left-8 md:right-8 md:bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="backdrop-blur-sm bg-white/6 border border-white/10 rounded-lg px-6 py-5">
                        <h3 className="font-serif text-xl md:text-2xl font-[100] tracking-[0.18em] text-[#d2de2b]">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* subtle focus ring for keyboard users */}
                    <span className="absolute inset-0 rounded-2xl ring-2 ring-transparent focus-within:ring-[#d2de2b] pointer-events-none" />
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* small stats strip */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gray-100/90 backdrop-blur-sm rounded-xl p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h4 className="font-serif text-2xl font-[100] tracking-[0.18em]" style={{ color: "#5e5654" }}>Notre portée</h4>
            <p className="mt-2 text-sm text-[#5e5654] max-w-xl">Des réalisations nationales et internationales, traduites par la matière, la lumière et le détail.</p>
          </div>
          <div className="flex gap-6 justify-center md:justify-end w-full md:w-auto">
            <Stat number="550+" label="Projets" />
            <Stat number="23+" label="Années" />
            <Stat number="25+" label="Bureaux" />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- small helper components ---------- */

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-serif font-[100] text-2xl tracking-[0.18em]" style={{ color: "#5e5654" }}>{number}</div>
      <div className="text-xs text-[#5e5654] mt-1">{label}</div>
    </div>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AchievementHeroGalleryProps {
  images: string[];
  title: string;
  subtitle?: string;
  client: string;
  surface: string;
  location: string;
  status: string;
}

export default function AchievementHeroGallery({
  images,
  title,
  subtitle,
  client,
  surface,
  location,
  status,
}: AchievementHeroGalleryProps) {
  const [mainIdx, setMainIdx] = useState(0);
  const [fade, setFade] = useState(false);

  function handleThumbClick(idx: number) {
    if (idx !== mainIdx) {
      setFade(true);
      setTimeout(() => {
        setMainIdx(idx);
        setFade(false);
      }, 200);
    }
  }

  // Keyboard accessibility
  function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, idx: number) {
    if (e.key === "Enter" || e.key === " ") {
      handleThumbClick(idx);
    }
    if (e.key === "ArrowRight") {
      handleThumbClick((mainIdx + 1) % images.length);
    }
    if (e.key === "ArrowLeft") {
      handleThumbClick((mainIdx - 1 + images.length) % images.length);
    }
  }

  return (
    <section className="relative w-full">
      <div className="relative aspect-[16/7] w-full overflow-hidden">
        <Image
          src={images[mainIdx]}
          alt={title}
          fill
          priority
          className={cn(
            "object-cover w-full h-full transition-opacity duration-500",
            fade ? "opacity-0" : "opacity-100"
          )}
          style={{ filter: "brightness(0.6)" }}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <h1 className="font-serif font-thin text-5xl md:text-6xl text-white mb-2 drop-shadow-lg" style={{ letterSpacing: "-0.04em" }}>{title}</h1>
          {subtitle && <h2 className="text-xl md:text-2xl text-white/80 mb-2 font-light">{subtitle}</h2>}
          <div className="flex flex-wrap gap-4 text-white/90 text-base font-medium mb-2">
            <span>{client}</span>
            <span className="opacity-60">|</span>
            <span>{surface}</span>
            <span className="opacity-60">|</span>
            <span>{location}</span>
            <span className="opacity-60">|</span>
            <span>{status}</span>
          </div>
        </div>
      </div>
      {/* Thumbnails carousel */}
      <div className="flex gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm overflow-x-auto" role="list">
        {images.map((img, idx) => (
          <button
            key={img}
            className={cn(
              "relative w-24 h-16 rounded overflow-hidden border-2 transition-all duration-200 focus:outline-none",
              idx === mainIdx ? "border-[#d2de2b]" : "border-transparent hover:border-[#d2de2b]"
            )}
            aria-label={`Voir l'image ${idx + 1}`}
            aria-current={idx === mainIdx}
            tabIndex={0}
            onClick={() => handleThumbClick(idx)}
            onKeyDown={e => handleKeyDown(e, idx)}
            style={{ outline: idx === mainIdx ? "2px solid #d2de2b" : undefined }}
          >
            <Image
              src={img}
              alt={title + " thumbnail " + (idx + 1)}
              fill
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              sizes="96px"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

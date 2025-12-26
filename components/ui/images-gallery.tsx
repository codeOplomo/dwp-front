"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

const allImages = [
  "/guy.webp",
  "/guy-1.webp",
  "/guy-2.webp",
  "/guy-3.webp",
  "/guy.webp",
  "/guy-1.webp",
]

// Create 4 vertical columns with images
const columns = [
  [allImages[0], allImages[3], allImages[1], allImages[4], allImages[2], allImages[5]],
  [allImages[1], allImages[4], allImages[2], allImages[5], allImages[0], allImages[3]],
  [allImages[2], allImages[5], allImages[0], allImages[3], allImages[1], allImages[4]],
  [allImages[3], allImages[0], allImages[4], allImages[1], allImages[5], allImages[2]],
]

export function ProductShowcase() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top
      const sectionHeight = rect.height
      const windowHeight = window.innerHeight

      // Calculate scroll progress when section is in view
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const progress = (windowHeight - sectionTop) / (windowHeight + sectionHeight)
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
      <div ref={sectionRef} className="container mx-auto px-6">
        {/* Card Container */}
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[40px] bg-[#1f3630] shadow-2xl min-h-[600px] md:min-h-[700px]">
          {/* 4 Vertical Sliding Columns */}
          <div className="absolute inset-0 flex gap-4 p-4 overflow-hidden">
            {columns.map((column, columnIndex) => {
              // Different speeds and directions for each column
              const speeds = [1.5, -1.8, 1.2, -1.4]
              // Initial offsets to stagger columns and fill space
              const initialOffsets = [-100, 50, -150, 100]
              const translateY = initialOffsets[columnIndex] + (scrollProgress * 800 * speeds[columnIndex])

              return (
                <div
                  key={columnIndex}
                  className="flex-1 flex flex-col gap-4"
                  style={{
                    transform: `translateY(${translateY}px)`,
                    transition: "none", // Remove transition for instant response
                  }}
                >
                  {/* Repeat images 5 times for continuous scroll */}
                  {[...column, ...column, ...column, ...column, ...column].map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative aspect-[3/4] rounded-3xl overflow-hidden flex-shrink-0"
                    >
                      <Image
                        src={image}
                        alt={`Gallery ${imageIndex}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )
            })}
          </div>

          {/* Light Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/30 pointer-events-none" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center max-w-3xl z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Get inspired by our
                <br />
                <span className="text-white">1000+ project images</span>
              </h2>

              <Link href="/gallery">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-[#1f3630] px-8 py-7 text-lg font-semibold rounded-full group shadow-2xl inline-flex items-center gap-3"
                >
                  Explore Gallery
                  <div className="w-12 h-12 bg-[#f3ac85] rounded-full flex items-center justify-center group-hover:bg-[#ff7738] transition-colors">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}
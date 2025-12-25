import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AchievementCardProps {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  client: string;
  surface: string;
  location: string;
  status: string;
  year: string;
}

export default function AchievementCard({
  slug,
  title,
  image,
  excerpt,
  client,
  surface,
  location,
  status,
  year,
}: AchievementCardProps) {
  return (
    <div
      className={cn(
        "group bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-500 fade-in-on-scroll",
        "hover:shadow-xl focus-within:shadow-xl"
      )}
      tabIndex={0}
      style={{ color: "#5e5654" }}
    >
      <Link href={`/achievements/${slug}`} tabIndex={-1} className="block focus:outline-none">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
          <span className="sr-only">Voir le projet {title}</span>
        </div>
      </Link>
      <div className="flex-1 flex flex-col p-4">
        <h3 className="font-serif font-thin text-2xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>{title}</h3>
        <div className="text-sm opacity-80 mb-2">
          <span>{client}</span> | <span>{surface}</span> | <span>{location}</span> | <span>{status}</span>
        </div>
        <p className="text-base flex-1 mb-4 line-clamp-3">{excerpt}</p>
        <div className="mt-auto">
          <Link
            href={`/achievements/${slug}`}
            className="inline-block px-4 py-2 rounded bg-[#d2de2b] text-[#5e5654] font-semibold transition-colors duration-200 hover:bg-[#c0cc1a] focus:bg-[#c0cc1a] focus:outline-none"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}

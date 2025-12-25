import AchievementHeroGallery from "@/components/achievements/AchievementHeroGallery";
import AchievementCard from "@/components/achievements/AchievementCard";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import FadeIn from "@/components/animations/FadeIn";
import achievementsData from "@/data/achievements.json";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function AchievementDetailPage({ params }: Props) {
  const { slug } = await params;
  const achievement = achievementsData.find(a => a.slug === slug);
  if (!achievement) return notFound();

  const otherAchievements = achievementsData.filter(a => a.slug !== slug);

  // Example stats (replace with real if available)
  const stats = [
    { end: 2024, label: "Année" },
    { end: parseInt(achievement.surface), label: "Surface", suffix: " m²" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-10 pt-24">
      <FadeIn duration={0.7}>
        <AchievementHeroGallery
          images={achievement.images}
          title={achievement.title}
          client={achievement.client}
          surface={achievement.surface}
          location={achievement.location}
          status={achievement.status}
        />
      </FadeIn>
      <div className="flex flex-col md:flex-row gap-10 mt-16">
        <div className="flex-1">
          <FadeIn duration={0.5}>
            <div className="prose prose-lg max-w-none text-[#5e5654] font-serif">
              {achievement.description.split("\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-8">
              {stats.map((stat, i) => (
                <AnimatedCounter key={i} {...stat} />
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded bg-[#d2de2b] text-[#5e5654] font-semibold text-lg transition-colors duration-200 hover:bg-[#c0cc1a] focus:bg-[#c0cc1a] focus:outline-none shadow-lg"
              >
                Contactez-nous
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
      {otherAchievements.length > 0 && (
        <FadeIn duration={0.5} className="mt-16">
          <h2 className="text-3xl font-serif font-thin mb-8 text-center" style={{ color: "#5e5654" }}>
            Autres projets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherAchievements.map((item) => (
              <AchievementCard
                key={item.slug}
                slug={item.slug}
                title={item.title}
                image={item.images[0]}
                excerpt={item.description.split("\n")[0].slice(0, 160) + "..."}
                client={item.client}
                surface={item.surface}
                location={item.location}
                status={item.status}
                year={item.year}
              />
            ))}
          </div>
        </FadeIn>
      )}
    </main>
  );
}

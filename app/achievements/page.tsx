"use client";
import AchievementCard from "@/components/achievements/AchievementCard";
import achievementsData from "@/data/achievements.json";
import FadeIn from "@/components/animations/FadeIn";

function getExcerpt(description: string) {
  // Use first paragraph or first 160 chars
  const firstPara = description.split("\n")[0];
  return firstPara.length > 160 ? firstPara.slice(0, 157) + "..." : firstPara;
}

export default function AchievementsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-serif font-thin text-4xl mb-10 text-center" style={{ color: "#5e5654" }}>
        Réalisations
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievementsData.map((item) => (
          <FadeIn key={item.slug} duration={0.5}>
            <AchievementCard
              slug={item.slug}
              title={item.title}
              image={item.images[0]}
              excerpt={getExcerpt(item.description)}
              client={item.client}
              surface={item.surface}
              location={item.location}
              status={item.status}
              year={item.year}
            />
          </FadeIn>
        ))}
      </div>
    </main>
  );
}

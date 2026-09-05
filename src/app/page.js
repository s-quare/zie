import HeroAlternative from "@/components/home/HeroAlternative";
import MetricsStrip from "@/components/home/MetricsStrip";
import AboutSection from "@/components/home/AboutSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import VersatilityMatrix from "@/components/home/VersatilityMatrix";
import ExperienceTimeline from "@/components/home/ExperienceTimeline";
import HomeContactCTA from "@/components/home/HomeContactCTA";

export default function HomePage() {
  return (
    <div className="">
      <HeroAlternative />
      <MetricsStrip />
      <AboutSection />
      <FeaturedProjects />
      <VersatilityMatrix />
      <ExperienceTimeline />
      <HomeContactCTA />
    </div>
  );
}
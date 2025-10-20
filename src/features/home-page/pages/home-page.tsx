import { HeroSection } from "../components/hero-section";
import { AboutSection } from "../components/about-section";
import { FeaturesSection } from "../components/features-section";
import { ProjectsSection } from "../components/projects-section";
import { CTASection } from "../components/cta-section";

export const HomePage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProjectsSection />
      <CTASection />
    </main>
  );
};

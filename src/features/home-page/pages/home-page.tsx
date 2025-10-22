import { HeroSection } from "../sections/hero-section";
import { AboutSection } from "../sections/about-section";
import { FeaturesSection } from "../sections/features-section";
import { ProjectsSection } from "../sections/projects-section";
import { ContactSection } from "../sections/contact-section";

export const HomePage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

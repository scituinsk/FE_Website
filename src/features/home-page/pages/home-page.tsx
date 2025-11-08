import { HeroSection } from "../sections/hero-section";
// import { AboutSection } from "../sections/about-section";
import { FeaturesSection } from "../sections/features-section";
import { ProjectsSection } from "../sections/projects-section";
import { ContactSection } from "../sections/contact-section";
import { DivisionSection } from "../sections/division-section";

export const HomePage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* <AboutSection /> */}
      <DivisionSection />
      <FeaturesSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

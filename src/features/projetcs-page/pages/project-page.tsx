import { HeroSection } from "../sections/hero-section";
import { ProjectGridSection } from "../sections/project-grid-section";

export const ProjectPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectGridSection />
    </div>
  );
};

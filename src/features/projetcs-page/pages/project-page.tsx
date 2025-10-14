import { HeroSection } from "../components/hero-section";
import { FilterAndSearchSection } from "../components/filter-and-search-section";
import { ProjectGridSection } from "../components/project-grid-section";
import { CTAActionSection } from "../components/cta-action-section";

export const ProjectPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FilterAndSearchSection />
      <ProjectGridSection />
      <CTAActionSection />
    </div>
  );
};

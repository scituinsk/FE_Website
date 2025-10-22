import { HeroSection } from "../sections/hero-section";
import { FilterAndSearchSection } from "../sections/filter-and-search-section";
import { ProjectGridSection } from "../sections/project-grid-section";

export const ProjectPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FilterAndSearchSection />
      <ProjectGridSection />
      {/* <CTAActionSection /> */}
    </div>
  );
};

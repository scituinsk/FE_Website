import { connection } from "next/server";

import { HeroSection } from "../sections/hero-section";
import { ProjectGridSection } from "../sections/project-grid-section";

export const ProjectPage = async () => {
  await connection();
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectGridSection />
    </div>
  );
};

import { connection } from "next/server";

import { ProjectGridSection } from "../sections/project-grid-section";

export const ProjectPage = async () => {
  await connection();
  return (
    <div className="min-h-screen">
      <ProjectGridSection />
    </div>
  );
};

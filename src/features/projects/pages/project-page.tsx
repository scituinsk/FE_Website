import { connection } from "next/server";
import { Suspense } from "react";

import { ProjectGridSection, ProjectGridSkeleton } from "../sections/project-grid-section";
import { ProjectFilterSection } from "../sections/project-filter-section";

interface ProjectPageProps {
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
}

export const ProjectPage = async ({ searchParams }: ProjectPageProps) => {
  await connection();
  const params = await searchParams;

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ProjectFilterSection searchParams={params} />

            <Suspense fallback={<ProjectGridSkeleton />}>
              <ProjectGridSection searchParams={params} />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
};

import { PROJECTS } from "@/constants/projects";

import { ProjectCard } from "../components/project-card";
import { ProjectPagination } from "../components/project-pagination";
import { ProjectCardSkeleton } from "../components/project-card-skeleton";

const ITEMS_PER_PAGE = 9;

interface ProjectGridSectionProps {
  searchParams: {
    search?: string;
    page?: string;
  };
}

export const ProjectGridSection = async ({ searchParams }: ProjectGridSectionProps) => {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate loading delay
  const search = searchParams.search || "";
  const currentPage = parseInt(searchParams.page || "1") || 1;

  // Filter projects based on search
  let filteredProjects = PROJECTS;
  if (search) {
    filteredProjects = filteredProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.tech?.some((technology) => technology.toLowerCase().includes(search.toLowerCase()))
    );
  }

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(start, end);

  return (
    <>
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-foreground mb-2">No projects found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your search criteria</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedProjects.map((project) => (
              <ProjectCard
                project={project}
                key={project.href}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <ProjectPagination
              currentPage={currentPage}
              totalPages={totalPages}
            />
          )}
        </>
      )}
    </>
  );
};

export const ProjectGridSkeleton = () => {
  return (
    <>
      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
};

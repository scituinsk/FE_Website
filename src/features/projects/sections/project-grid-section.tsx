import { ProjectCard } from "../components/project-card";
import { ProjectCardSkeleton } from "../components/project-card-skeleton";
import { getProjects } from "../api/get-projects";
import { tryCatchAsync } from "@/utils/try-catch";

const ITEMS_PER_PAGE = 9;

interface ProjectGridSectionProps {
  searchParams: {
    search?: string;
    page?: string;
  };
}

export const ProjectGridSection = async ({ searchParams }: ProjectGridSectionProps) => {
  const search = searchParams.search || "";

  const [response, err] = await tryCatchAsync(getProjects(search));

  if (err) {
    throw new Error("Failed to fetch projects");
  }

  const projects = response.data;

  return (
    <>
      {projects.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-foreground mb-2">No projects found</h3>
          <p className="text-muted-foreground mb-4">Try adjusting your search criteria</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

          {/* TODO: Impelement Pagination */}
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

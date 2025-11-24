"use client";
import Image from "next/image";
import Link from "next/link";
import { FolderKanban } from "lucide-react";
import { useGetProjects } from "../queries/useGetProjects";
import { Spinner } from "@/components/ui/spinner";
import { SimpleTechStack } from "@/features/projects/components/simple-tech-stack";

export const ProjectGrid = () => {
  const { data: projects, isLoading: isLoadingFetchProjects } = useGetProjects();

  if (isLoadingFetchProjects) {
    return (
      <div className="h-[30dvh] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-5">
      {projects?.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <FolderKanban className="h-12 w-12 text-muted-foreground/50 mb-4" />
          <p className="text-sm text-muted-foreground">No projects found</p>
        </div>
      ) : (
        projects?.map((project, index) => (
          <Link
            key={index}
            href={`/admin/manage-projects/${project.id}`}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 rounded-lg border p-4 hover:bg-accent/50 transition-colors">
              {/* Project Image */}
              <div className="relative w-full sm:w-32 h-32 rounded-md overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={"https://placehold.co/400x300/png?text=No+Image"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/400x300/png?text=No+Image";
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-lg line-clamp-1">{project.title}</h3>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.length == 0 ? (
                    <span className="text-xs text-muted-foreground italic">No technologies added</span>
                  ) : (
                    <SimpleTechStack technologies={project.technologies} />
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

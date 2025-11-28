"use client";
import Link from "next/link";
import { FolderKanban } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { SimpleTechStack } from "@/features/projects/components/simple-tech-stack";
import { Project } from "@/types/project";
import { ImageWrapper } from "@/components/ui/image-wrapper";
import { Badge } from "@/components/ui/badge";

interface ProjectGridProps {
  projects?: Project[];
  isLoading?: boolean;
}

export const ProjectGrid = ({ projects, isLoading }: ProjectGridProps) => {
  if (isLoading) {
    return (
      <div className="h-[30dvh] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {!projects || projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <FolderKanban className="h-12 w-12 text-muted-foreground/50 mb-4" />
          <p className="text-sm text-muted-foreground">No projects found</p>
        </div>
      ) : (
        projects.map((project) => {
          const primaryImage = project.images.find((img) => img.isPrimary) || project.images[0];

          return (
            <Link
              key={project.id}
              href={`/admin/manage-projects/${project.id}`}
              className="group"
            >
              <div className="flex flex-col sm:flex-row gap-4 rounded-lg border bg-card p-4 transition-all hover:shadow-md hover:border-primary/50">
                {/* Project Image */}
                <div className="relative w-full sm:w-40 md:w-48 lg:w-56 aspect-video rounded-md overflow-hidden bg-muted shrink-0 ring-1 ring-border">
                  <ImageWrapper
                    src={primaryImage?.imageUrl || ""}
                    alt={project.title}
                  />
                </div>

                {/* Project Info */}
                <div className="flex-1 min-w-0 space-y-3">
                  {/* Title and Status */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">{project.title}</h3>
                    <Badge
                      variant={project.status === "PRODUCTION" ? "default" : "secondary"}
                      className="shrink-0"
                    >
                      {project.status === "PRODUCTION" ? "Production" : "Beta"}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{project.description}</p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                    {project.duration && (
                      <span className="flex items-center gap-1">
                        <span className="font-medium">Duration:</span> {project.duration}
                      </span>
                    )}
                    {project.launchYear && (
                      <span className="flex items-center gap-1">
                        <span className="font-medium">Launch:</span> {project.launchYear}
                      </span>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.length === 0 ? (
                      <span className="text-xs text-muted-foreground italic">No technologies added</span>
                    ) : (
                      <SimpleTechStack technologies={project.technologies} />
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

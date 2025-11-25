"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import { ProjectGallery } from "@/features/management/projects/components/project-gallery";
import { ProjectDetails } from "@/features/management/projects/components/project-details";
import { DangerousSettings } from "@/features/management/projects/components/dangerous-settings";
import { ProjectBasicInfo } from "@/features/management/projects/components/project-basic-info";
import { ProjectTechStack } from "@/features/management/projects/components/project-tech-stack";
import { ProjectTestimonials } from "@/features/management/projects/components/project-testimonials";
import { ProjectBasicInfoSkeleton, ProjectCardSkeleton } from "@/features/management/projects/components/project-loading-skeleton";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useGetProjectById } from "../queries/use-get-project-by-id";

interface ManagementDetailProjectsPageProps {
  projectId: string;
}

export const ManagementDetailProjectsPage = ({ projectId }: ManagementDetailProjectsPageProps) => {
  const { data: project, isLoading } = useGetProjectById({
    params: { projectId },
  });

  const projectBasicData = project
    ? {
        title: project.title,
        slug: project.slug,
        demoUrl: project.demoUrl || "",
        description: project.description || "",
        duration: project.duration || "",
        launchYear: project.launchYear || "",
        status: project.status || "",
      }
    : null;

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-10 border-b border-border bg-card">
        <div className="container py-6">
          <Link href="/admin/manage-projects">
            <Button
              variant="outline"
              size="sm"
              className="mb-4"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Manage Project</h1>
            <p className="mt-1 text-muted-foreground">{isLoading ? "Loading project..." : "Edit project details, gallery, and testimonials"}</p>
          </div>
        </div>
      </div>

      <div className="container space-y-8 py-8">
        {isLoading ? (
          <ProjectBasicInfoSkeleton />
        ) : (
          projectBasicData && (
            <ProjectBasicInfo
              project={projectBasicData}
              projectId={projectId}
            />
          )
        )}

        {isLoading ? <ProjectCardSkeleton /> : <ProjectTechStack projectId={projectId} />}
        {isLoading ? <ProjectCardSkeleton /> : <ProjectDetails projectId={projectId} />}
        {isLoading ? <ProjectCardSkeleton /> : <ProjectGallery projectId={projectId} />}
        {isLoading ? <ProjectCardSkeleton /> : <ProjectTestimonials projectId={projectId} />}

        <Separator className="my-12" />

        {project && (
          <DangerousSettings
            projectId={projectId}
            currentSlug={project.slug}
          />
        )}
      </div>
    </div>
  );
};

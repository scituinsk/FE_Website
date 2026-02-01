"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ProjectGallery } from "@/features/management/projects/components/project-gallery";
import { ProjectDetails } from "@/features/management/projects/components/project-details";
import { DangerousSettings } from "@/features/management/projects/components/dangerous-settings";
import { ProjectBasicInfo } from "@/features/management/projects/components/project-basic-info";
import { ProjectTechStack } from "@/features/management/projects/components/project-tech-stack";
import { ProjectTestimonials } from "@/features/management/projects/components/project-testimonials";
import { ProjectBasicInfoSkeleton, ProjectCardSkeleton } from "@/features/management/projects/components/project-loading-skeleton";

import { Separator } from "@/components/ui/separator";
import { useGetProjectById } from "../queries/use-get-project-by-id";
import { Skeleton } from "@/components/ui/skeleton";

interface ManagementDetailProjectsPageProps {
  projectId: string;
}

export const ManagementDetailProjectsPage = ({ projectId }: ManagementDetailProjectsPageProps) => {
  const { data: project, isLoading } = useGetProjectById({
    params: { projectId },
  });

  return (
    <div className="min-h-screen bg-background">
      <div className=" top-0 z-10 border-b border-border bg-card">
        <div className="container py-6">
          <Link
            href="/admin/manage-projects"
            className="flex text-sky-600 dark:text-sky-500 items-center text-sm underline mb-5"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke list proyek
          </Link>
          <div>{isLoading ? <Skeleton className="w-1/3 h-7 mt-2" /> : <h1 className="text-3xl font-bold text-foreground">{project?.title}</h1>}</div>
        </div>
      </div>

      <div className="container space-y-8 py-8">
        {isLoading ? <ProjectBasicInfoSkeleton /> : project && <ProjectBasicInfo project={project} />}

        {isLoading ? <ProjectCardSkeleton /> : project && <ProjectTechStack project={project} />}
        {isLoading ? <ProjectCardSkeleton /> : project && <ProjectDetails project={project} />}
        {isLoading ? <ProjectCardSkeleton /> : project && <ProjectGallery project={project} />}
        {isLoading ? <ProjectCardSkeleton /> : project && <ProjectTestimonials project={project} />}

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

import { ProjectBasicInfo } from "@/features/dashboard/manage-projects/components/project-basic-info";
import { ProjectTechStack } from "@/features/dashboard/manage-projects/components/project-tech-stack";
import { ProjectDetails } from "@/features/dashboard/manage-projects/components/project-details";
import { ProjectGallery } from "@/features/dashboard/manage-projects/components/project-gallery";
import { ProjectTestimonials } from "@/features/dashboard/manage-projects/components/project-testimonials";
import { DangerousSettings } from "@/features/dashboard/manage-projects/components/dangerous-settings";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface ManageProjectsIdPageProps {
  params: Promise<{ projectId: string }>;
}

const ManageProjectsIdPage = async ({ params }: ManageProjectsIdPageProps) => {
  const { projectId } = await params;

  // TODO: Fetch project data from API using projectId
  const projectSlug = "smart-campus-system"; // This should come from the API

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card sticky top-0 z-10">
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
            <p className="text-muted-foreground mt-1">Edit project details, gallery, and testimonials</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8 space-y-8">
        {/* Basic Information */}
        <ProjectBasicInfo projectId={projectId} />

        {/* Tech Stack */}
        <ProjectTechStack projectId={projectId} />

        {/* Project Details */}
        <ProjectDetails projectId={projectId} />

        {/* Gallery */}
        <ProjectGallery projectId={projectId} />

        {/* Testimonials */}
        <ProjectTestimonials projectId={projectId} />

        {/* Separator before dangerous settings */}
        <Separator className="my-12" />

        {/* Dangerous Settings */}
        <DangerousSettings
          projectId={projectId}
          currentSlug={projectSlug}
        />
      </div>
    </div>
  );
};

export default ManageProjectsIdPage;

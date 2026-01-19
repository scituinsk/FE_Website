import { getQueryClient } from "@/lib/query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getRecentProjectsQueryOptions } from "@/features/projects/api/get-projects";
import { FeaturedProject } from "./projects-section";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { ProjectCardSkeleton } from "@/features/projects/components/project-card-skeleton";
import { connection } from "next/server";

const ErrorUi = () => {
  return (
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>Gagal mengambil data proyek terbaru kami..</AlertTitle>
      <AlertDescription>
        <p>Coba lagi nanti.</p>
      </AlertDescription>
    </Alert>
  );
};

const ProjectsSectionSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-16">
      {[...Array(3)].map((_, index) => (
        <ProjectCardSkeleton key={index} />
      ))}
    </div>
  );
};

export const ProjectsSectionWrapper = async () => {
  await connection();
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(getRecentProjectsQueryOptions);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ErrorBoundary fallback={<ErrorUi />}>
        <Suspense fallback={<ProjectsSectionSkeleton />}>
          <FeaturedProject />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
};

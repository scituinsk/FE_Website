import { getQueryClient } from "@/lib/query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getRecentProjectsQueryOptions } from "@/features/projects/api/get-projects";
import { FeaturedProject } from "./projects-section";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ProjectCardSkeleton } from "@/features/projects/components/project-card-skeleton";
import { connection } from "next/server";
import ErrorStateUi from "@/components/error-state-ui";

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
      <ErrorBoundary fallback={<ErrorStateUi />}>
        <Suspense fallback={<ProjectsSectionSkeleton />}>
          <FeaturedProject />
        </Suspense>
      </ErrorBoundary>
    </HydrationBoundary>
  );
};

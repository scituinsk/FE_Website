"use client";

import { ProjectCard } from "../components/project-card";
import { ProjectCardSkeleton } from "../components/project-card-skeleton";
import { getProjectsQueryOptions } from "../api/get-projects";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useProjectsFilters } from "../hooks/use-projects-filters";
import { EmptyState } from "@/components/empty-state";

const ITEMS_PER_PAGE = 9;

export const ProjectGridSection = () => {
  const [filters] = useProjectsFilters();

  const { data: response } = useSuspenseQuery(
    getProjectsQueryOptions({
      search: filters.search,
    }),
  );

  const projects = response.data;

  return (
    <>
      {projects.length === 0 ? (
        <EmptyState />
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

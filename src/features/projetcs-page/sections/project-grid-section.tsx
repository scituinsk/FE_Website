"use client";

import { useMemo } from "react";
import { useQueryState } from "nuqs";
import { PROJECTS } from "@/constants/projects";

import { ProjectCard } from "../components/project-card";
import { ProjectFilters } from "../components/project-filters";
import { ProjectPagination } from "../components/project-pagination";

const ITEMS_PER_PAGE = 9;

export const ProjectGridSection = () => {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [tech, setTech] = useQueryState("tech", { defaultValue: "all" });
  const [page, setPage] = useQueryState("page", { defaultValue: "1" });

  const filteredProjects = useMemo(() => {
    let filtered = PROJECTS;

    // Filter by search
    if (search) {
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(search.toLowerCase()) ||
          project.description.toLowerCase().includes(search.toLowerCase()) ||
          project.tech?.some((technology) => technology.toLowerCase().includes(search.toLowerCase()))
      );
    }

    // Filter by technology
    if (tech && tech !== "all") {
      filtered = filtered.filter((project) => project.tech?.some((technology) => technology.toLowerCase() === tech.toLowerCase()));
    }

    return filtered;
  }, [search, tech]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const currentPage = parseInt(page) || 1;

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredProjects.slice(start, end);
  }, [filteredProjects, currentPage]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage.toString());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleResetFilters = () => {
    setSearch("");
    setTech("all");
    setPage("1");
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <ProjectFilters
            search={search}
            setSearch={setSearch}
            tech={tech}
            setTech={setTech}
            totalResults={filteredProjects.length}
            onResetFilters={handleResetFilters}
          />

          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
              <button
                onClick={handleResetFilters}
                className="text-primary hover:underline"
              >
                Reset all filters
              </button>
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
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

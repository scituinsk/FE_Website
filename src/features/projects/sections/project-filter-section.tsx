import { PROJECTS } from "@/constants/projects";
import { ProjectFiltersClient } from "../components/project-filters-client";

interface ProjectFilterSectionProps {
  searchParams: {
    search?: string;
    page?: string;
  };
}

export const ProjectFilterSection = ({ searchParams }: ProjectFilterSectionProps) => {
  const search = searchParams.search || "";

  // Calculate total results based on search
  let filteredProjects = PROJECTS;
  if (search) {
    filteredProjects = filteredProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.tech?.some((technology) => technology.toLowerCase().includes(search.toLowerCase()))
    );
  }

  return (
    <ProjectFiltersClient
      initialSearch={search}
      totalResults={filteredProjects.length}
    />
  );
};

import { ProjectFiltersClient } from "../components/project-filters-client";

interface ProjectFilterSectionProps {
  searchParams: {
    search?: string;
    page?: string;
  };
}

export const ProjectFilterSection = ({ searchParams }: ProjectFilterSectionProps) => {
  const search = searchParams.search || "";

  return <ProjectFiltersClient initialSearch={search} />;
};

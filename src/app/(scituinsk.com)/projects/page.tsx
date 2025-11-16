import { ProjectPage } from "@/features/projects/pages/project-page";

export const metadata = {
  title: "Our Projects",
  description: "Explore the innovative projects and solutions developed by SCIT UIN Sunan Kalijaga members.",
};

interface PageProps {
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
}

export default function Page({ searchParams }: PageProps) {
  return <ProjectPage searchParams={searchParams} />;
}

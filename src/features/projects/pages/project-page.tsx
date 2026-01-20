import { Metadata } from "next";
import { Suspense } from "react";
import { connection } from "next/server";

import { ProjectFilterSection } from "../sections/project-filter-section";
import { ProjectGridSection, ProjectGridSkeleton } from "../sections/project-grid-section";
import { getQueryClient } from "@/lib/query-client";
import { getProjectsQueryOptions } from "../api/get-projects";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { loadSearchParams } from "../params";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";

interface ProjectPageProps {
  searchParams: Promise<{
    search?: string;
    page?: string;
  }>;
}

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Jelajahi berbagai proyek inovatif yang dikembangkan oleh anggota SCIT UIN Sunan Kalijaga. Mulai dari aplikasi web, mobile, hingga solusi digital kreatif yang berdampak.",
  keywords: [
    "SCIT projects",
    "projek SCIT",
    "project IT mahasiswa",
    "proyek teknologi kampus",
    "portfolio SCIT",
    "karya digital mahasiswa",
    "inovasi teknologi mahasiswa",
    "projek web development",
    "projek mobile development",
    "komunitas IT UIN Sunan Kalijaga",
    "student developer projects",
    "software engineering student projects",
    "digital solutions",
    "projek aplikasi mahasiswa",
  ],
  alternates: {
    canonical: "https://scituinsk.com/projects",
  },
  openGraph: {
    title: "Our Projects | Study Club Information Technology UIN Sunan Kalijaga",
    description:
      "Kumpulan proyek inovatif karya anggota SCIT UIN Sunan Kalijaga, mencakup pengembangan aplikasi, sistem informasi, dan solusi digital berdampak.",
    url: "https://scituinsk.com/projects",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SCIT Projects | Kumpulan Proyek Inovatif",
    description:
      "Lihat berbagai proyek digital yang dibuat oleh anggota SCIT UIN Sunan Kalijaga, mulai dari aplikasi web, mobile, hingga solusi teknologi kreatif.",
  },
};

const ProjectPage = async ({ searchParams }: ProjectPageProps) => {
  await connection();
  const filters = await loadSearchParams(searchParams);
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(
    getProjectsQueryOptions({
      search: filters.search,
    }),
  );

  return (
    <>
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <ProjectFilterSection />
            <HydrationBoundary state={dehydrate(queryClient)}>
              <Suspense fallback={<ProjectGridSkeleton />}>
                <ErrorBoundary
                  fallback={
                    <Alert variant="destructive">
                      <AlertCircleIcon />
                      <AlertTitle>Gagal mengambil data proyek kami..</AlertTitle>
                      <AlertDescription>
                        <p>Coba lagi nanti.</p>
                      </AlertDescription>
                    </Alert>
                  }
                >
                  <ProjectGridSection />
                </ErrorBoundary>
              </Suspense>
            </HydrationBoundary>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;

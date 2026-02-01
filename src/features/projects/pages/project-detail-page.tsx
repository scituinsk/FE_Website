import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Activity } from "react";
import { AxiosError } from "axios";
import { notFound } from "next/navigation";
import { ExternalLink, Calendar, Clock, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/empty-state";
import { Card, CardContent } from "@/components/ui/card";
import { ImageWrapper } from "@/components/ui/image-wrapper";

import { cn } from "@/lib/utils";
import { tryCatchAsync } from "@/utils/try-catch";

import { TestimonialMarquee } from "@/features/projects/components/testimonial-marquee";
import { ProjectGalleryCarousel } from "@/features/projects/components/project-gallery-carousel";

import { getProjectBySlug } from "../api/get-project-by-slug";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const slug = (await params).slug;

  const post = await getProjectBySlug(slug);

  const siteName = "Study Club Information Technology UIN Sunan Kalijaga";
  const url = `https://scituinsk.com/projects/${slug}`;

  return {
    title: `${post.title}`,
    description: post.description || `Detail proyek berjudul ${post.title} yang dikembangkan oleh anggota SCIT UIN Sunan Kalijaga.`,
    keywords: [post.title, "SCIT project", "projek teknologi mahasiswa", "portfolio SCIT", "software engineering project"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | ${siteName}`,
      description: post.description || `Detail proyek ${post.title} dari komunitas SCIT UIN Sunan Kalijaga.`,
      type: "article",
      url,
      images: post.thumbnail ? [{ url: post.thumbnail.url }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description || `Detail proyek ${post.title} dari komunitas SCIT.`,
      images: post.thumbnail ? [post.thumbnail.url] : [],
    },
  };
}

const ProjectDetailPage = async ({ params }: ProjectDetailPageProps) => {
  const { slug } = await params;
  const [project, error] = await tryCatchAsync(getProjectBySlug(slug));

  if (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 404) {
        return notFound();
      }
    }
    throw new Error("Failed to fetch project details");
  }

  return (
    <>
      <div className="border-b border-border bg-card">
        <div className="container py-8">
          <Link
            href="/projects"
            className="flex text-sky-600 dark:text-sky-500 items-center text-sm underline mb-5"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke list proyek
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">{project?.title ?? "TITLE"}</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">{project?.description ?? "DESCRIPTION"}</p>
            </div>

            <div className="flex gap-3 shrink-0">
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                >
                  <Button>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{project?.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Launched&nbsp;{project?.launchYear}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - 2 Column Layout */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Thumbnail */}
            <Card className="overflow-hidden">
              <div className="relative w-full aspect-video">
                <ImageWrapper
                  alt={project?.title}
                  src={project.thumbnail?.url || "https://placehold.co/600x400"}
                />
              </div>
            </Card>

            {/* Description */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">About Project</h2>
                {project.about ? <p className="text-muted-foreground leading-relaxed">{project.about}</p> : <EmptyState />}
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Key Features</h2>
                <ul className={cn(project.keyFeatures.length > 0 && "grid grid-cols-1 md:grid-cols-2 gap-3")}>
                  {project.keyFeatures.length > 0 ? (
                    project.keyFeatures.map(({ feature, id }) => (
                      <li
                        key={id}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))
                  ) : (
                    <EmptyState />
                  )}
                </ul>
              </CardContent>
            </Card>

            {/* Challenges & Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Challenges</h3>
                  <ul className="space-y-2">
                    {project.challenges.length > 0 ? (
                      project.challenges.map(({ challenge, id }) => (
                        <li
                          key={id}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-0.5">•</span>
                          <span>{challenge}</span>
                        </li>
                      ))
                    ) : (
                      <EmptyState />
                    )}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Results</h3>
                  <ul className="space-y-2">
                    {project.results.length > 0 ? (
                      project.results.map(({ result, id }) => (
                        <li
                          key={id}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-green-500 mt-0.5">→</span>
                          <span>{result}</span>
                        </li>
                      ))
                    ) : (
                      <EmptyState />
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Supporting Images Carousel */}
            <Activity mode={project.images.length > 0 ? "visible" : "hidden"}>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">Gallery</h2>
                  <ProjectGalleryCarousel images={project.images} />
                </CardContent>
              </Card>
            </Activity>
          </div>

          {/* Right Column - Sidebar (1/3) */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <div className="sticky top-20">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.length > 0 ? (
                      project.technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="relative aspect-square w-10"
                          title={tech.name}
                        >
                          <Image
                            src={tech.logoUrl}
                            alt={tech.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ))
                    ) : (
                      <EmptyState />
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-primary text-primary-foreground mt-5">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Tertarik bekerjasama dengan kami?</h3>
                  <p className="text-sm opacity-90">Bangun aplikasi anda, kami siap membantu.</p>
                  <Button
                    variant="secondary"
                    className="w-full"
                    asChild
                  >
                    <Link href="/#contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Marquee Section */}
      <Activity mode={project.testimonials.length > 0 ? "visible" : "hidden"}>
        <div className="bg-muted/30 py-16 overflow-hidden">
          <div className="container mb-8">
            <h2 className="text-3xl font-bold text-center text-foreground">What Client Say</h2>
          </div>

          <TestimonialMarquee testimonials={project.testimonials} />
        </div>
      </Activity>
    </>
  );
};

export default ProjectDetailPage;

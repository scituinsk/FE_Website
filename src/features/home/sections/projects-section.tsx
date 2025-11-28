import { Suspense } from "react";
import * as motion from "framer-motion/client";

import { animationConfig, fadeIn, staggerContainer } from "@/utils/animations";

import { ProjectCard } from "@/features/projects/components/project-card";
import { ProjectCardSkeleton } from "@/features/projects/components/project-card-skeleton";
import { tryCatchAsync } from "@/utils/try-catch";
import { getProjects } from "@/features/projects/api/get-projects";

export const ProjectsSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
          {...animationConfig}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Proyek Unggulan Kami</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Beragam inovasi dan karya teknologi yang dikembangkan oleh tim kami sebagai kontribusi untuk kemajuan dunia digital.
          </p>
        </motion.div>

        <Suspense fallback={<ProjectsSectionSkeleton />}>
          <FeaturedProject />
        </Suspense>
      </div>
    </section>
  );
};

const FeaturedProject = async () => {
  const [response, err] = await tryCatchAsync(getProjects(undefined, "3"));

  if (err) {
    throw new Error("Failed to fetch projects");
  }

  const projects = response.data;

  return (
    <motion.div
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-16"
      {...animationConfig}
    >
      {projects.slice(-3).map((project) => (
        <ProjectCard
          project={project}
          key={project.title}
        />
      ))}
    </motion.div>
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

"use client";

import { getRecentProjectsQueryOptions } from "@/features/projects/api/get-projects";
import { ProjectCard } from "@/features/projects/components/project-card";
import { animationConfig, staggerContainer } from "@/utils/animations";
import { useSuspenseQuery } from "@tanstack/react-query";
import * as motion from "framer-motion/client";

export const FeaturedProject = () => {
  const { data: response } = useSuspenseQuery(getRecentProjectsQueryOptions);

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

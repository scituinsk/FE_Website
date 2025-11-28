import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SimpleTechStack } from "@/features/projects/components/simple-tech-stack";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { ProjectMinimalInfo } from "../types";

interface ProjectCardProps {
  project: ProjectMinimalInfo;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block h-full"
    >
      <Card className="group hover:shadow-xl w-full h-full transition-all duration-300 overflow-hidden flex flex-col cursor-pointer">
        <div className="relative w-full aspect-video flex-shrink-0">
          <Image
            src={project.images[0]?.imageUrl || "https://placehold.co/600x400"}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </div>

        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-1">{project.title}</CardTitle>
              <CardDescription className="leading-relaxed line-clamp-2 mt-2">{project.description}</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 flex-1 flex flex-col">
          <SimpleTechStack
            technologies={project.technologies}
            size="sm"
            className="mb-4 flex-shrink-0"
            maxDisplay={6}
          />

          <div className="flex flex-col sm:flex-row gap-2 pt-2 mt-auto">
            <Button
              size="sm"
              className="flex-1 min-w-0 py-2 pointer-events-none"
              variant="default"
            >
              <span className="truncate">Lihat Selengkapnya</span>
              <ArrowRight className="h-4 w-4 ml-2 flex-shrink-0" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ExternalLink, Github, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";

import { allProjects } from "@/constants/projects";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ProjectGridSection = () => {
  const { ref: gridRef, controls: gridControls } = useScrollAnimation();

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {allProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <motion.div
              ref={gridRef}
              initial="hidden"
              animate={gridControls}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {allProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Project image placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/30" />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-surface text-foreground text-xs font-medium rounded-lg">{project.category}</span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === "Production"
                              ? "bg-primary/10 text-primary"
                              : project.status === "Beta Testing"
                              ? "bg-primary/10 text-primary"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-lg">+{project.tech.length - 4} more</span>
                        )}
                      </div>

                      {/* Project stats */}
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {project.teamSize} members
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {project.duration}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Key Features:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <Link
                            href={project.github}
                            target="_blank"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1"
                          asChild
                        >
                          <Link
                            href={project.demo}
                            target="_blank"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Link>
                        </Button>
                      </div>

                      {/* Testimonial */}
                      {project.testimonial && (
                        <div className="border-t pt-4">
                          <blockquote className="text-sm italic text-muted-foreground">&quot;{project.testimonial}&quot;</blockquote>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

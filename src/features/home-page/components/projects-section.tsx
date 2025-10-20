import Link from "next/link";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { ArrowRight, ExternalLink, Star } from "lucide-react";

import { PROJECT_CATEGORIES, PROJECTS } from "@/constants/projects";
import { animationConfig, fadeIn, staggerContainer, staggerItem } from "@/utils/animations";

import { Button } from "@/components/ui/button";
import { TechStackList } from "@/components/tech-stack-list";
import { AnimatedNumber } from "@/components/animated-number";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ProjectsSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
          {...animationConfig}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Featured Projects</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Showcase proyek-proyek unggulan yang telah dikembangkan oleh tim SCIT UIN Suka sebagai bentuk kontribusi nyata dalam dunia teknologi
          </p>
        </motion.div>

        {/* Featured projects */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-16"
          {...animationConfig}
        >
          {PROJECTS.slice(-3).map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
            >
              <Card className="group hover:shadow-xl w-full h-full transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative w-full aspect-video flex-shrink-0">
                  <Image
                    src={"https://placehold.co/600x400"}
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
                  {/* === Tech Stack === */}
                  <TechStackList
                    techNames={project.tech}
                    size="sm"
                    className="mb-4 flex-shrink-0"
                  />
                  {/* === Action Buttons === */}
                  <div className="flex flex-col sm:flex-row gap-2 pt-2 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 min-w-0 py-2"
                      asChild
                    >
                      <Link
                        href={project.demo}
                        target="_blank"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="truncate">Demo</span>
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 min-w-0 py-2"
                      variant="default"
                      asChild
                    >
                      <Link href={project.href}>
                        <span className="truncate">Lihat Selengkapnya</span>
                        <ArrowRight className="h-4 w-4 ml-2 flex-shrink-0" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project categories */}
        <motion.div
          variants={fadeIn}
          className="bg-surface rounded-3xl p-8 md:p-12 mb-12"
          {...animationConfig}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Project Categories</h3>
            <p className="text-muted-foreground">Berbagai kategori proyek yang telah dikembangkan oleh SCIT</p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {PROJECT_CATEGORIES.map((category, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-card rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  <AnimatedNumber
                    value={category.count}
                    duration={1}
                  />
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">{category.category}</div>
                <div className="text-sm text-muted-foreground">{category.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA section */}
        <motion.div
          variants={fadeIn}
          className="text-center"
          {...animationConfig}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Star className="h-4 w-4" />
            Explore More Projects
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Driving Change Through Technology.</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Di SCIT, kami percaya setiap baris kode dapat membawa perubahan. Kami adalah komunitas mahasiswa yang berfokus pada pengembangan
            teknologi, kolaborasi, dan pembelajaran bersama untuk menciptakan inovasi yang bermanfaat dan berdampak luas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
            >
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

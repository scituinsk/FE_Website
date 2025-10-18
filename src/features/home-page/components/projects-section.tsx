"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github, Users, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";

export const ProjectsSection = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: projectsRef, controls: projectsControls } = useScrollAnimation();
  const { ref: categoriesRef, controls: categoriesControls } = useScrollAnimation();
  const { ref: ctaRef, controls: ctaControls } = useScrollAnimation();

  const featuredProjects = [
    {
      title: "Smart Campus System",
      description:
        "Sistem informasi terintegrasi untuk mengelola aktivitas kampus dengan fitur presensi digital, manajemen kelas, dan dashboard analytics.",
      image: "/projects/smart-campus.jpg",
      tech: ["React", "Node.js", "PostgreSQL", "IoT"],
      status: "Production",
      teamSize: 8,
      duration: "6 months",
      github: "https://github.com/scit-uinsuka/smart-campus",
      demo: "https://smartcampus.uin-suka.ac.id",
    },
    {
      title: "Mental Health Tracker",
      description: "Aplikasi mobile untuk monitoring kesehatan mental mahasiswa dengan fitur mood tracking, konseling online, dan community support.",
      image: "/projects/mental-health.jpg",
      tech: ["React Native", "Firebase", "Python", "AI/ML"],
      status: "Beta Testing",
      teamSize: 6,
      duration: "4 months",
      github: "https://github.com/scit-uinsuka/mental-health-tracker",
      demo: "https://mentalhealth.scit-uinsuka.id",
    },
    {
      title: "Islamic Finance API",
      description: "RESTful API untuk sistem keuangan syariah dengan fitur perhitungan zakat, investasi halal, dan compliance monitoring.",
      image: "/projects/islamic-finance.jpg",
      tech: ["Node.js", "Express", "MongoDB", "Docker"],
      status: "Development",
      teamSize: 5,
      duration: "8 months",
      github: "https://github.com/scit-uinsuka/islamic-finance-api",
      demo: "https://api.islamicfinance.id",
    },
  ];

  const projectCategories = [
    {
      category: "Web Applications",
      count: 15,
      description: "Full-stack web applications dengan teknologi modern",
    },
    {
      category: "Mobile Apps",
      count: 12,
      description: "Cross-platform mobile applications",
    },
    {
      category: "AI/ML Projects",
      count: 8,
      description: "Machine learning dan artificial intelligence solutions",
    },
    {
      category: "IoT Solutions",
      count: 6,
      description: "Internet of Things dan embedded systems",
    },
    {
      category: "Open Source",
      count: 20,
      description: "Kontribusi ke open source community",
    },
    {
      category: "Research",
      count: 10,
      description: "Penelitian dan pengembangan teknologi",
    },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Featured Projects</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Showcase proyek-proyek unggulan yang telah dikembangkan oleh tim SCIT UIN Suka sebagai bentuk kontribusi nyata dalam dunia teknologi
          </p>
        </motion.div>

        {/* Featured projects */}
        <motion.div
          ref={projectsRef}
          initial="hidden"
          animate={projectsControls}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Project image placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/30" />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Production"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : project.status === "Beta Testing"
                          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
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
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project categories */}
        <motion.div
          ref={categoriesRef}
          initial="hidden"
          animate={categoriesControls}
          variants={fadeInUp}
          className="bg-surface rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Project Categories</h3>
            <p className="text-muted-foreground">Berbagai kategori proyek yang telah dikembangkan oleh SCIT</p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projectCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="bg-card rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">{category.count}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{category.category}</div>
                <div className="text-sm text-muted-foreground">{category.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA section */}
        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
          className="text-center"
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

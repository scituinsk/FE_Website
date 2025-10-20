"use client";
import * as motion from "framer-motion/client";
import { useEffect, useRef, useState } from "react";

import { animationConfig, fadeIn } from "@/utils/animations";

import { Card } from "@/components/ui/card";

const milestones = [
  {
    year: "2024",
    title: "Pendirian SCIT",
    description: "Didirikan oleh mahasiswa TI UIN Suka yang passionate dengan teknologi",
  },
  {
    year: "Early 2024",
    title: "Tim Pertama",
    description: "Pembentukan tim inti dan perekrutan anggota perdana",
  },
  {
    year: "Mid 2024",
    title: "Workshop Pertama",
    description: "Mengadakan workshop programming dan pengembangan web untuk mahasiswa",
  },
  {
    year: "Late 2024",
    title: "Proyek Kolaborasi",
    description: "Memulai proyek-proyek nyata dan membangun portofolio bersama",
  },
  {
    year: "2025",
    title: "Ekspansi & Inovasi",
    description: "Memperluas jangkauan dan mengembangkan program-program inovatif",
  },
];

export const TimelineSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineElement = timelineRef.current;
      const rect = timelineElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the timeline is visible
      const visibleTop = Math.max(0, windowHeight - rect.top);
      const visibleHeight = Math.min(visibleTop, rect.height);
      const percentage = Math.max(0, Math.min(1, visibleHeight / rect.height));

      setFillHeight(percentage * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
          {...animationConfig}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Perjalanan Kami</h2>
          <p className="text-lg text-muted-foreground">
            Dari awal berdiri hingga kini, SCIT UIN Suka terus tumbuh sebagai pionir inovasi dan kolaborasi teknologi di kampus.
          </p>
        </motion.div>

        <div
          className="max-w-4xl mx-auto"
          ref={timelineRef}
        >
          <div className="relative">
            {/* Timeline background line - centered */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-primary/15 rounded-full"></div>

            {/* Timeline filled line with animation - centered */}
            <motion.div
              className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary via-primary/90 to-primary/70 rounded-full origin-top"
              style={{ height: `${fillHeight}%` }}
              initial={{ height: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
            />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: index % 2 === 0 ? -50 : 50,
                      scale: 0.9,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        delay: index * 0.2,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    },
                  }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  {...animationConfig}
                >
                  {/* Timeline dot with glow effect */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                      <div className="absolute inset-0 w-6 h-6 bg-primary/30 rounded-full animate-pulse"></div>
                      <div className="absolute -inset-2 w-10 h-10 bg-primary/10 rounded-full blur-sm"></div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary bg-gradient-to-br from-background to-muted/30">
                        <div className="flex items-center mb-4">
                          <div>
                            <span className="text-lg font-bold text-primary block">{milestone.year}</span>
                            <h3 className="text-xl font-semibold text-foreground">{milestone.title}</h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

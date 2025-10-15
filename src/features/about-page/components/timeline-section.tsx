"use client";

import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";
import { Card } from "@/components/ui/card";

const milestones = [
  {
    year: "2020",
    title: "Foundation",
    description: "SCIT UIN Suka was founded by passionate CS students",
  },
  {
    year: "2021",
    title: "First Major Project",
    description: "Launched our first campus-wide digital solution",
  },
  {
    year: "2022",
    title: "Community Growth",
    description: "Reached 100+ active members and expanded programs",
  },
  {
    year: "2023",
    title: "Industry Recognition",
    description: "Won national competition and established industry partnerships",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Became the leading tech community in UIN Suka",
  },
];

export const TimelineSection = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: timelineRef, controls: timelineControls } = useScrollAnimation();

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Journey</h2>
          <p className="text-lg text-muted-foreground">
            Perjalanan SCIT UIN Suka dari awal terbentuk hingga menjadi komunitas teknologi terdepan di kampus
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-primary/20"></div>

            <motion.div
              ref={timelineRef}
              initial="hidden"
              animate={timelineControls}
              variants={staggerContainer}
              className="space-y-12"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-surface shadow-lg"></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                        <h3 className="text-xl font-semibold text-foreground">{milestone.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

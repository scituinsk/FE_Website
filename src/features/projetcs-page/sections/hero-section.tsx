"use client";

import React from "react";
import * as motion from "framer-motion/client";
import { Rocket, Code2, Lightbulb, Target } from "lucide-react";

import { animationConfig, fadeIn, staggerContainer } from "@/utils/animations";

import { AnimatedNumber } from "@/components/animated-number";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background tint */}
      <div className="absolute inset-0 bg-primary/5" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <motion.div
            variants={staggerContainer}
            className="space-y-6 mb-8"
            {...animationConfig}
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Rocket className="h-4 w-4" />
              Innovation Showcase
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              Our Projects
              <span className="block text-primary">Portfolio</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Showcase proyek-proyek inovatif yang telah dikembangkan oleh tim kami sebagai kontribusi nyata dalam dunia teknologi dan masyarakat.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            {...animationConfig}
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                <AnimatedNumber
                  duration={2}
                  value={100}
                />
                +
              </div>
              <div className="text-muted-foreground">Total Projects</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                <AnimatedNumber
                  duration={2}
                  value={90}
                />
              </div>
              <div className="text-muted-foreground">Live Projects</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                <AnimatedNumber
                  duration={2}
                  value={50}
                />
                +
              </div>
              <div className="text-muted-foreground">Contributors</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">
                <AnimatedNumber
                  duration={2}
                  value={15}
                />
                +
              </div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/15 rounded-full blur-xl" />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/25 rounded-full blur-xl" />
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";
import { allProjects } from "@/constants/projects";

export const HeroSection = () => {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();
  const { ref: statsRef, controls: statsControls } = useScrollAnimation();

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroControls}
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={staggerItem}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            Our Projects Portfolio
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8"
          >
            Showcase proyek-proyek inovatif yang telah dikembangkan oleh tim SCIT UIN Suka sebagai kontribusi nyata dalam dunia teknologi dan
            masyarakat.
          </motion.p>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            initial="hidden"
            animate={statsControls}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            <motion.div
              variants={staggerItem}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{allProjects.length}+</div>
              <div className="text-slate-600">Total Projects</div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="text-center"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">{allProjects.filter((p) => p.status === "Production").length}</div>
              <div className="text-slate-600">Live Projects</div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="text-center"
            >
              <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-slate-600">Contributors</div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-slate-600">Technologies</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

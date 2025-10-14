"use client";

import React from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";

export const HeroSection = () => {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();

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
            SCIT Tech Blog
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8"
          >
            Artikel terbaru seputar teknologi, tutorial programming, dan insights dari komunitas SCIT UIN Suka untuk berbagi pengetahuan dengan
            developer Indonesia.
          </motion.p>

          {/* Search */}
          <motion.div
            variants={staggerItem}
            className="relative max-w-md mx-auto"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles, topics..."
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

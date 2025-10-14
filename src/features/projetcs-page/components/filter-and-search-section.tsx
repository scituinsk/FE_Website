"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";
import { categories } from "@/constants/projects";
import { Filter, Search } from "lucide-react";

export const FilterAndSearchSection = () => {
  const { ref: filterRef, controls: filterControls } = useScrollAnimation();

  return (
    <section className="py-12 bg-white border-b">
      <div className="container mx-auto px-4">
        <motion.div
          ref={filterRef}
          initial="hidden"
          animate={filterControls}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Search */}
          <motion.div
            variants={staggerItem}
            className="mb-8"
          >
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects, technologies..."
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={staggerItem}>
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-slate-600" />
              <span className="text-sm font-medium text-slate-600">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button key={category}>{category}</button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

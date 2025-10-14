"use client";

import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";

import { Button } from "@/components/ui/button";

export const CTAActionSection = () => {
  const { ref: ctaRef, controls: ctaControls } = useScrollAnimation();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
          >
            <Star className="h-4 w-4" />
            Join Our Development Team
          </motion.div>
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            Have an Innovative Project Idea?
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-lg text-slate-600 mb-8"
          >
            Bergabunglah dengan SCIT dan wujudkan ide teknologi Anda menjadi solusi nyata yang berdampak bagi masyarakat. Tim kami siap mendukung
            perjalanan development Anda dari ide hingga implementasi.
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              asChild
            >
              <Link href="/join">Join Development Team</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link href="/contact">Propose a Project</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

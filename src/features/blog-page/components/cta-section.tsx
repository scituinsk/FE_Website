"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";

import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const { ref: ctaRef, controls: ctaControls } = useScrollAnimation();

  return (
    <section className="py-24 bg-surface border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Want to Share Your Knowledge?
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-lg text-muted-foreground mb-8"
          >
            Bergabunglah sebagai kontributor blog SCIT dan bagikan pengalaman, tutorial, atau insights teknologi Anda kepada komunitas developer
            Indonesia.
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              asChild
            >
              <Link href="/contribute">
                Become a Contributor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

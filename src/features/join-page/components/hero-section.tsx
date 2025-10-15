"use client";

import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, fadeInUp, fadeInDown } from "@/lib/hooks/use-scroll-animation";
import { Users } from "lucide-react";

const stats = [
  { number: "200+", label: "Active Members" },
  { number: "50+", label: "Projects Completed" },
  { number: "15+", label: "Partner Companies" },
  { number: "3", label: "Learning Tracks" },
];

export const HeroSection = () => {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();
  const { ref: statsRef, controls: statsControls } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />

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
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroControls}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInDown}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Users className="h-4 w-4" />
              Join Our Community
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              Be Part of
              <span className="block text-primary-gradient">SCIT UIN Suka</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Bergabunglah dengan komunitas mahasiswa teknologi terdepan di UIN Sunan Kalijaga. Kembangkan skill, bangun network, dan wujudkan inovasi
              bersama kami.
            </motion.p>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial="hidden"
              animate={statsControls}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
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

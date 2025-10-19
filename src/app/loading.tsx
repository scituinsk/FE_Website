"use client";

import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, fadeInUp, fadeInDown } from "@/lib/hooks/use-scroll-animation";
import { Loader2, Code2 } from "lucide-react";

export default function Loading() {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
        <div className="text-center max-w-xl mx-auto">
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroControls}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Loading spinner */}
            <motion.div
              variants={fadeInDown}
              className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto"
            >
              <Loader2 className="h-10 w-10 text-primary animate-spin" />
            </motion.div>

            {/* Badge */}
            <motion.div
              variants={fadeInDown}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              <Code2 className="h-4 w-4" />
              Loading
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              Loading
              <span className="block text-primary">Memuat</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Harap tunggu sebentar, kami sedang menyiapkan halaman untuk Anda...
            </motion.p>

            {/* Progress indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center space-x-2 pt-4"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-primary/30 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/15 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-primary/25 rounded-full blur-xl" />
    </div>
  );
}

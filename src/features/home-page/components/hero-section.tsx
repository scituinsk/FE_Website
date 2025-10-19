"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInDown, staggerContainer } from "@/lib/hooks/use-scroll-animation";
import { getFeaturedPartners } from "@/constants/partners";
import { PartnerCard } from "@/components/partner-card";

export const HeroSection = () => {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();
  // const { ref: statsRef, controls: statsControls } = useScrollAnimation();
  const featuredPartners = getFeaturedPartners();

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

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto safe-container">
          {/* Main headline */}
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroControls}
            variants={staggerContainer}
            className="space-y-6 mb-8"
          >
            <motion.div
              variants={fadeInDown}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Users className="h-4 w-4" />
              Study Club Informatika UIN Sunan Kalijaga
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight safe-text"
            >
              Innovating the Future of
              <span className="block text-primary">Technology</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed safe-text"
            >
              SCIT UIN Sunan Kalijaga adalah komunitas mahasiswa yang berdedikasi untuk mengembangkan inovasi teknologi dan menciptakan solusi digital
              yang berdampak.
            </motion.p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial="hidden"
            animate={heroControls}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              className="text-lg px-8"
              asChild
            >
              <Link href="/about">
                About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8"
              asChild
            >
              <Link href="/projects">Explore Projects</Link>
            </Button>
          </motion.div>

          {/* Partners & Collaborators */}
          <motion.div
            initial="hidden"
            animate={heroControls}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <motion.h3
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground text-center mb-8 font-medium"
            >
              Telah Dipercaya oleh
            </motion.h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={heroControls}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-center"
            >
              {featuredPartners.map((partner) => (
                <PartnerCard
                  key={partner.name}
                  partner={partner}
                  showBadge={true}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            ref={statsRef}
            initial="hidden"
            animate={statsControls}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={staggerItem}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">150+</div>
              <div className="text-muted-foreground">Member Aktif</div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground">Proyek</div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">25+</div>
              <div className="text-muted-foreground">Inovasi</div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">3</div>
              <div className="text-muted-foreground">Divisi</div>
            </motion.div>
          </motion.div> */}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/15 rounded-full blur-xl" />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-primary/25 rounded-full blur-xl" />
    </section>
  );
};

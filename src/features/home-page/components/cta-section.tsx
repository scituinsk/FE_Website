"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Rocket, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";

export const CTASection = () => {
  const { ref: leftRef, controls: leftControls } = useScrollAnimation();
  const { ref: rightRef, controls: rightControls } = useScrollAnimation();

  const benefits = [
    "Akses ke workshop dan training teknologi terbaru",
    "Networking dengan profesional industri dan alumni",
    "Pengalaman hands-on melalui proyek nyata",
    "Mentorship dari senior developer berpengalaman",
    "Pengembangan sertifikat dan portfolio",
    "Bantuan penempatan kerja dan guidance karir",
  ];

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-surface/5"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-surface/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-surface/5 rounded-full blur-xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            ref={leftRef}
            initial="hidden"
            animate={leftControls}
            variants={fadeInLeft}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-white text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Explore SCIT Community
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Ready to Collaborate & Innovate in
              <span className="block text-yellow-400">Technology?</span>
            </h2>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Jelajahi dunia teknologi bersama SCIT UIN Sunan Kalijaga. Berkolaborasi dalam proyek inovatif, akses resources berkualitas, dan
              kembangkan skill melalui komunitas yang supportif dan dinamis!
            </p>

            {/* Benefits list */}
            <motion.div
              variants={staggerContainer}
              className="space-y-3 mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="ghost"
                className="bg-surface text-primary hover:bg-surface/90 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/projects">
                  <Rocket className="mr-2 h-5 w-5" />
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right content - Interactive card */}
          <motion.div
            ref={rightRef}
            initial="hidden"
            animate={rightControls}
            variants={fadeInRight}
            className="lg:flex lg:justify-end"
          >
            <div className="bg-surface/10 backdrop-blur-sm rounded-3xl p-8 max-w-md w-full border border-surface/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 ">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Start Your Journey Today</h3>
                <p className="text-primary/10">Simple steps to collaborate with SCIT community</p>
              </div>

              <motion.div
                variants={staggerContainer}
                className="space-y-4"
              >
                <motion.div
                  variants={staggerItem}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-surface/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Explore Projects</h4>
                    <p className="text-primary-foreground/80 text-sm">Browse our ongoing projects and activities</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-surface/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Connect with Team</h4>
                    <p className="text-blue-100 text-sm">Reach out and discuss collaboration opportunities</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-surface/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Join Activities</h4>
                    <p className="text-blue-100 text-sm">Participate in workshops, events, and projects</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Start Contributing!</h4>
                    <p className="text-primary-foreground/80 text-sm">Begin your collaborative journey with us</p>
                  </div>
                </motion.div>
              </motion.div>

              <div className="mt-6 pt-6 border-t border-surface/20">
                <Button
                  variant="ghost"
                  className="w-full bg-orange-500 text-white 
             hover:bg-orange-600 shadow-lg hover:shadow-xl 
             transition-all duration-300 hover:text-white"
                  size="lg"
                  asChild
                >
                  <Link href="/projects">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

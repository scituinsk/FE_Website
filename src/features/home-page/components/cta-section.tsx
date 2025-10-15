"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Sparkles, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";

export const CTASection = () => {
  const { ref: leftRef, controls: leftControls } = useScrollAnimation();
  const { ref: rightRef, controls: rightControls } = useScrollAnimation();

  const benefits = [
    "Access to latest technology training and workshops",
    "Networking with industry professionals and alumni",
    "Hands-on experience through real projects",
    "Mentorship from senior developers",
    "Certificate and portfolio development",
    "Job placement assistance and career guidance",
  ];

  return (
    <section className="py-24 bg-gradient-to-br bg-blue-gradient relative overflow-hidden">
      {/* Background elements */}
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
              Join SCIT Community
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Ready to Shape the Future of
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Technology?</span>
            </h2>

            <p className="text-xl text-primary/10 mb-8 leading-relaxed">
              Bergabunglah dengan SCIT UIN Sunan Kalijaga dan kembangkan potensi teknologi Anda bersama komunitas yang supportif dan inovatif. Mari
              wujudkan impian menjadi tech professional yang berdampak!
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

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              <motion.div
                variants={staggerItem}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">150+</div>
                <div className="text-white text-sm">Active Members</div>
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-white text-sm">Projects</div>
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">95%</div>
                <div className="text-white text-sm">Job Placement</div>
              </motion.div>
            </motion.div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="ghost"
                className="bg-surface text-primary hover:bg-surface/50 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link href="/join">
                  <Users className="mr-2 h-5 w-5" />
                  Join SCIT Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                asChild
              >
                <Link href="/contact">Learn More</Link>
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
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 ">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Start Your Journey Today</h3>
                <p className="text-primary/10">Simple steps to become part of SCIT community</p>
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
                    <h4 className="font-semibold text-white mb-1">Register Online</h4>
                    <p className="text-primary-foreground/80 text-sm">Fill out our simple registration form</p>
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
                    <h4 className="font-semibold text-white mb-1">Attend Orientation</h4>
                    <p className="text-blue-100 text-sm">Join our welcome session and meet the team</p>
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
                    <h4 className="font-semibold text-white mb-1">Choose Your Track</h4>
                    <p className="text-blue-100 text-sm">Select specialization based on your interest</p>
                  </div>
                </motion.div>

                <motion.div
                  variants={staggerItem}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Start Learning!</h4>
                    <p className="text-primary-foreground/80 text-sm">Begin your tech journey with us</p>
                  </div>
                </motion.div>
              </motion.div>

              <div className="mt-6 pt-6 border-t border-surface/20">
                <Button
                  variant="ghost"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white 
             hover:from-yellow-500 hover:to-orange-600 shadow-lg hover:shadow-xl 
             transition-all duration-300 hover:text-white"
                  size="lg"
                  asChild
                >
                  <Link href="/join">
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

"use client";

import Link from "next/link";
import { Calendar, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export const ContactInfoSection = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: contactRef, controls: contactControls } = useScrollAnimation();
  const { ref: ctaRef, controls: ctaControls } = useScrollAnimation();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
          <p className="text-lg text-slate-600">Ingin tahu lebih lanjut tentang SCIT atau tertarik bergabung? Jangan ragu untuk menghubungi kami!</p>
        </motion.div>

        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={contactControls}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div variants={staggerItem}>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl mb-4">Visit Us</CardTitle>
              <CardDescription>
                Fakultas Sains dan Teknologi
                <br />
                UIN Sunan Kalijaga
                <br />
                Jl. Marsda Adisucipto No 1<br />
                Yogyakarta 55281
              </CardDescription>
            </Card>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl mb-4">Email Us</CardTitle>
              <CardDescription>
                scit@uin-suka.ac.id
                <br />
                info@scit-uinsuka.id
                <br />
                partnership@scit-uinsuka.id
              </CardDescription>
            </Card>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl mb-4">Join Events</CardTitle>
              <CardDescription>
                Weekly meetups every Friday
                <br />
                Monthly workshops
                <br />
                Annual tech conference
                <br />
                Open for everyone!
              </CardDescription>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            asChild
          >
            <Link href="/join">Join SCIT Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

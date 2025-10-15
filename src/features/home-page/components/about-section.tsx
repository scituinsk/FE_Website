"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Code2, Lightbulb, Target, BookOpen, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, fadeInLeft, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";

export const AboutSection = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: contentRef, controls: contentControls } = useScrollAnimation();
  const { ref: cardsRef, controls: cardsControls } = useScrollAnimation();
  const { ref: valuesRef, controls: valuesControls } = useScrollAnimation();

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About SCIT UIN Suka</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Student Community of Information Technology UIN Sunan Kalijaga adalah wadah bagi mahasiswa untuk mengembangkan kemampuan teknologi
            informasi dan berkontribusi dalam inovasi digital.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <motion.div
            ref={contentRef}
            initial="hidden"
            animate={contentControls}
            variants={fadeInLeft}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Membangun Masa Depan Digital Indonesia</h3>
              <p className="text-muted-foreground leading-relaxed">
                SCIT UIN Suka didirikan dengan visi menjadi komunitas teknologi terdepan yang menggabungkan nilai-nilai Islam dengan inovasi teknologi
                modern. Kami berkomitmen untuk menghasilkan lulusan yang tidak hanya kompeten dalam bidang teknologi, tetapi juga memiliki karakter
                yang kuat.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">Misi Kami:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Mengembangkan kompetensi teknologi informasi mahasiswa</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Memfasilitasi penelitian dan pengembangan inovasi teknologi</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Membangun jejaring komunitas teknologi yang solid</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Mengintegrasikan nilai-nilai Islam dalam pengembangan teknologi</span>
                </li>
              </ul>
            </div>

            <Button asChild>
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right content - Feature cards */}
          <motion.div
            ref={cardsRef}
            initial="hidden"
            animate={cardsControls}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6"
          >
            <motion.div variants={staggerItem}>
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12  bg-primary/10  rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20  transition-colors">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Web, mobile, dan desktop development dengan teknologi terkini</CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Penelitian dan pengembangan solusi teknologi inovatif</CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Workshop, seminar, dan program pelatihan teknologi</CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Achievement</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Prestasi kompetisi dan penghargaan di bidang teknologi</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Values section */}
        <motion.div
          ref={valuesRef}
          initial="hidden"
          animate={valuesControls}
          variants={fadeInUp}
          className="bg-background rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Core Values</h3>
            <p className="text-muted-foreground">Nilai-nilai fundamental yang menjadi landasan setiap aktivitas SCIT</p>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={staggerItem}
              className="text-center"
            >
              <div className="w-16 h-16  bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-surface" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Collaboration</h4>
              <p className="text-muted-foreground">Bekerja sama dalam tim untuk mencapai tujuan bersama dan saling mendukung</p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-surface" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Excellence</h4>
              <p className="text-muted-foreground">Selalu berusaha memberikan yang terbaik dalam setiap karya dan prestasi</p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-surface" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Innovation</h4>
              <p className="text-muted-foreground">Menciptakan solusi kreatif dan inovatif untuk tantangan masa depan</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

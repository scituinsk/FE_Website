"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Lightbulb, BookOpen, Award, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation, fadeInUp, fadeInLeft, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";
import { SCIT_DIVISIONS } from "@/constants/division";

export const AboutSection = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: contentRef, controls: contentControls } = useScrollAnimation();
  const { ref: cardsRef, controls: cardsControls } = useScrollAnimation();

  const { ref: divisonsRef, controls: divisionControls } = useScrollAnimation();

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
                  <CardDescription className="h-[60px]">Web, mobile, dan desktop development dengan teknologi terkini</CardDescription>
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
                  <CardDescription className="h-[60px]">Penelitian dan pengembangan solusi teknologi inovatif</CardDescription>
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
                  <CardDescription className="h-[60px]">Workshop, seminar, dan program pelatihan teknologi</CardDescription>
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
                  <CardDescription className="h-[60px]">Prestasi kompetisi dan penghargaan di bidang teknologi</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
        {/* Divisions */}
        <motion.div
          ref={divisonsRef}
          initial="hidden"
          animate={divisionControls}
          variants={fadeInUp}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Division</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Setiap divisi berperan penting dalam mendukung pengembangan anggota dan keberlangsungan organisasi.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 min-[1303px]:grid-cols-3 gap-6">
            {SCIT_DIVISIONS.map((division) => (
              <Link
                key={division.link}
                href={division.link}
              >
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300  cursor-pointer group">
                  {/* Background Image */}
                  <img
                    src={division.bannerContainer}
                    alt={division.name}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-cyan-800/40 to-cyan-600/20 group-hover:from-cyan-900/95 group-hover:via-cyan-800/50 group-hover:to-cyan-600/30 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <h1 className="text-white text-2xl sm:text-3xl font-bold text-center leading-tight drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">
                      {division.name}
                    </h1>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 origin-left scale-x-0  transition-transform duration-500" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

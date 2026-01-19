import { Metadata } from "next";

import { HeroSection } from "../sections/hero-section";
import { ContactSection } from "../sections/contact-section";
import { FeaturesSection } from "../sections/features-section";
import { ProjectsSectionWrapper } from "../sections/projects-section-wrapper";
import { DivisionSection } from "../sections/division-section";

import * as motion from "framer-motion/client";

import { animationConfig, fadeIn } from "@/utils/animations";

export const metadata: Metadata = {
  title: "Study Club Information Technology UIN Sunan Kalijaga",
  description:
    "Kami adalah komunitas mahasiswa yang berdedikasi untuk mengembangkan inovasi teknologi dan menciptakan solusi digital yang berdampak.",
  keywords: [
    // Identitas Utama
    "scit",
    "student community",
    "uin sunan kalijaga",
    "uin suka",
    "uin yogyakarta",
    "uin",
    "informatika uin sunan kalijaga",
    "komunitas mahasiswa",
    "komunitas IT",
    "student developer community",
    "organisasi teknologi mahasiswa",

    // Aktivitas & Fokus
    "inovasi teknologi",
    "pengembangan software",
    "solusi digital",
    "software engineering",
    "tech innovation",

    // Hasil & Dampak
    "aplikasi berdampak",
    "karya digital mahasiswa",
    "kolaborasi teknologi",
    "digitalisasi",

    // Variasi Pencarian (Natural Language)
    "belajar coding bersama",
    "proyek teknologi mahasiswa",
    "pembuatan aplikasi web dan mobile",
  ],
  alternates: {
    canonical: "https://scituinsk.com",
  },
  openGraph: {
    title: "Study Club Information Technology UIN Sunan Kalijaga",
    description:
      "Kami adalah komunitas mahasiswa yang berdedikasi untuk mengembangkan inovasi teknologi dan menciptakan solusi digital yang berdampak.",
    url: "https://scituinsk.com",
    type: "website",
    siteName: "SCIT UIN Sunan Kalijaga",
    images: [
      {
        url: "https://scituinsk.com/scit-logo/light.png",
        width: 1200,
        height: 630,
        alt: "Study Club Information Technology UIN Sunan Kalijaga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Club Information Technology UIN Sunan Kalijaga",
    description: "Komunitas mahasiswa yang fokus pada inovasi teknologi, kolaborasi, dan pengembangan solusi digital.",
    images: ["https://scituinsk.com/scit-logo/light.png"],
  },
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <DivisionSection />
      <FeaturesSection />
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
            {...animationConfig}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Proyek Terbaru</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beragam inovasi dan karya teknologi yang dikembangkan oleh tim kami sebagai kontribusi untuk kemajuan dunia digital.
            </p>
          </motion.div>
          <ProjectsSectionWrapper />
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default HomePage;

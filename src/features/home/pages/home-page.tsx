import { Metadata } from "next";

import { HeroSection } from "../sections/hero-section";
import { ContactSection } from "../sections/contact-section";
import { FeaturesSection } from "../sections/features-section";
import { ProjectsSection } from "../sections/projects-section";
import { DivisionSection } from "../sections/division-section";

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
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default HomePage;

import { Metadata } from "next";

import { HeroSection } from "../sections/hero-section";
import { TeamSection } from "../sections/team-section";
import { ValuesSection } from "../sections/values-section";
import { TimelineSection } from "../sections/timeline-section";
import { VisiMisiSection } from "../sections/visi-misi-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Pelajari lebih dalam tentang SCIT UIN Sunan Kalijaga, visi, misi, nilai, dan perjalanan komunitas teknologi yang berfokus pada inovasi digital dan pengembangan talenta mahasiswa.",
  keywords: [
    "about SCIT",
    "tentang SCIT",
    "SCIT UIN Sunan Kalijaga",
    "komunitas IT UIN",
    "student developer community",
    "komunitas teknologi mahasiswa",
    "visi misi SCIT",
    "profil komunitas IT",
    "organisasi teknologi kampus",
    "komunitas informatika UIN",
    "study club IT",
    "komunitas pengembang mahasiswa",
  ],
  alternates: {
    canonical: "https://scituinsk.com/about",
  },
  openGraph: {
    title: "About Us | Study Club Information Technology UIN Sunan Kalijaga",
    description:
      "Kenali SCIT UIN Sunan Kalijaga: visi, misi, tujuan, dan perjalanan komunitas teknologi yang berkomitmen menciptakan inovasi digital dan mengembangkan talenta mahasiswa.",
    url: "https://scituinsk.com/about",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About SCIT UIN Sunan Kalijaga",
    description:
      "Pelajari lebih lanjut tentang komunitas SCIT: visi, misi, dan perjalanan kami dalam membangun ekosistem teknologi yang kolaboratif dan inovatif.",
  },
};

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <VisiMisiSection />
      <TimelineSection />
      <ValuesSection />
      <TeamSection />
    </>
  );
};

export default AboutPage;

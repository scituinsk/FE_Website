import { Metadata } from "next";
import { connection } from "next/server";

import { GalleryGridSection } from "../sections/gallery-grid-section";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Lihat dokumentasi kegiatan, acara, dan momen berharga bersama Study Club Information Technology UIN Sunan Kalijaga. Koleksi foto aktivitas komunitas teknologi kampus.",
  keywords: [
    "galeri SCIT",
    "dokumentasi SCIT",
    "kegiatan SCIT",
    "acara komunitas IT",
    "dokumentasi organisasi mahasiswa",
    "SCIT UIN Sunan Kalijaga",
    "komunitas teknologi kampus",
    "foto kegiatan mahasiswa",
    "galeri komunitas teknologi",
    "dokumentasi event teknologi",
    "momen SCIT",
  ],
  alternates: {
    canonical: "https://scituinsk.com/gallery",
  },
  openGraph: {
    title: "Galeri | Study Club Information Technology UIN Sunan Kalijaga",
    description: "Kumpulan dokumentasi kegiatan, event, dan momen berharga bersama komunitas SCIT UIN Sunan Kalijaga.",
    url: "https://scituinsk.com/gallery",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Galeri SCIT UIN Sunan Kalijaga",
    description: "Dokumentasi kegiatan, acara, dan aktivitas komunitas SCIT UIN Sunan Kalijaga.",
  },
};

const GalleryPage = async () => {
  await connection();
  return (
    <>
      <GalleryGridSection />
    </>
  );
};

export default GalleryPage;

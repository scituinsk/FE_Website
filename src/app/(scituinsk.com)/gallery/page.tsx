import { GalleryPage } from "@/features/gallery-page/pages/gallery-page";
import type { Metadata } from "next";
import { connection } from "next/server";

export const metadata: Metadata = {
  title: "Galeri - SCIT",
  description: "Dokumentasi kegiatan, acara, dan momen berharga bersama Student Center of Information Technology",
};

export default async function Gallery() {
  await connection();
  return <GalleryPage />;
}

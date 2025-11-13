"use client";

import { GalleryImage } from "@/constants/gallery";
import { GalleryCard } from "../components/gallery-card";

interface MasonryGridProps {
  images: GalleryImage[];
}

export const MasonryGrid = ({ images }: MasonryGridProps) => {
  if (images.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-lg text-muted-foreground">Tidak ada gambar yang ditemukan.</p>
        <p className="text-sm text-muted-foreground mt-2">Coba ubah filter untuk melihat hasil lainnya.</p>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-5 md:gap-6 space-y-4 sm:space-y-5 md:space-y-6">
      {images.map((image) => (
        <div
          key={image.id}
          className="break-inside-avoid mb-4 sm:mb-5 md:mb-6"
        >
          <GalleryCard image={image} />
        </div>
      ))}
    </div>
  );
};

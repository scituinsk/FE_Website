"use client";

import { GALLERY_IMAGES } from "@/constants/gallery";
import { MasonryGrid } from "../components/masonry-grid";

export const GalleryGridSection = () => {
  return (
    <section className=" py-5 bg-background">
      <div className="container mx-auto px-4">
        <div>
          <MasonryGrid images={GALLERY_IMAGES} />
        </div>
      </div>
    </section>
  );
};

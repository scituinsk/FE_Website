import { HeroSection } from "../sections/hero-section";
import { GalleryGridSection } from "../sections/gallery-grid-section";

export const GalleryPage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GalleryGridSection />
    </main>
  );
};

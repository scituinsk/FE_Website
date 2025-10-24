"use client";

import { useMemo } from "react";
import { useQueryStates, parseAsString } from "nuqs";
import { GALLERY_IMAGES, GalleryImage } from "@/constants/gallery";
import { GalleryFilters } from "../components/gallery-filters";
import { MasonryGrid } from "../components/masonry-grid";

export const GalleryGridSection = () => {
  const [filters, setFilters] = useQueryStates(
    {
      year: parseAsString.withDefault(""),
      month: parseAsString.withDefault(""),
    },
    {
      history: "push",
      shallow: true,
    }
  );

  const selectedYear = filters.year || null;
  const selectedMonth = filters.month || null;

  const handleYearChange = (year: string | null) => {
    setFilters({ year: year || "" });
  };

  const handleMonthChange = (month: string | null) => {
    setFilters({ month: month || "" });
  };

  const filteredImages = useMemo(() => {
    return GALLERY_IMAGES.filter((image: GalleryImage) => {
      const yearMatch = !selectedYear || image.date.getFullYear().toString() === selectedYear;
      const monthMatch = !selectedMonth || image.date.getMonth().toString() === selectedMonth;

      return yearMatch && monthMatch;
    });
  }, [selectedYear, selectedMonth]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div>
          {/* Filters */}
          <div className="mb-8 sm:mb-10">
            <GalleryFilters
              selectedYear={selectedYear}
              selectedMonth={selectedMonth}
              onYearChange={handleYearChange}
              onMonthChange={handleMonthChange}
            />
          </div>

          {/* Results Count */}
          <div className="mb-6 text-sm text-muted-foreground">
            Menampilkan {filteredImages.length} dari {GALLERY_IMAGES.length} foto
          </div>

          {/* Gallery Grid */}
          <MasonryGrid images={filteredImages} />
        </div>
      </div>
    </section>
  );
};

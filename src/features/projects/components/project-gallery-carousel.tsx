"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { ProjectFullInformation } from "../types";

interface ProjectGalleryCarouselProps {
  images: ProjectFullInformation["images"];
  autoplayDelay?: number;
}

export function ProjectGalleryCarousel({ images, autoplayDelay = 3000 }: ProjectGalleryCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Autoplay functionality
  useEffect(() => {
    if (!api || isHovered) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, autoplayDelay);

    return () => clearInterval(intervalId);
  }, [api, isHovered, autoplayDelay]);

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src={image.imageUrl}
                  alt={image.fileName}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              current === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

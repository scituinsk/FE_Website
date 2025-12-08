"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { cn } from "@/lib/utils";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { ProjectFullInformation } from "../types";

interface ProjectGalleryCarouselProps {
  images: ProjectFullInformation["images"];
  autoplayDelay?: number;
}

export function ProjectGalleryCarousel({ images, autoplayDelay = 3000 }: ProjectGalleryCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  // Gunakan useRef untuk plugin agar tidak memicu re-render saat inisialisasi
  const plugin = React.useRef(Autoplay({ delay: autoplayDelay, playOnInit: true, stopOnInteraction: true, stopOnMouseEnter: true }));

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div
      className="relative w-full"
      onMouseLeave={() => plugin.current.play()}
    >
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "center",
          loop: false,
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

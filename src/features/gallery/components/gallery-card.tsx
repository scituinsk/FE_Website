"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/constants/gallery";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Calendar, X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface GalleryCardProps {
  image: GalleryImage;
}

export const GalleryCard = ({ image }: GalleryCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formattedDate = new Intl.DateTimeFormat("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(image.date);

  // Determine if image is portrait (taller than wide)
  const isPortrait = image.aspectRatio < 1;

  return (
    <>
      {/* Card */}
      <div
        className="group relative overflow-hidden rounded-lg bg-muted cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
        onClick={() => setIsOpen(true)}
        style={{
          aspectRatio: image.aspectRatio,
        }}
      >
        <Image
          src={image.imageUrl}
          alt={image.title}
          fill
          className={`object-cover transition-all duration-300 group-hover:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
            <h3 className="text-sm sm:text-base font-semibold mb-1 line-clamp-2">{image.title}</h3>
            <div className="flex items-center gap-2 text-xs text-gray-200">
              <Calendar className="size-3" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <DialogContent
          className={`p-0 overflow-hidden bg-background/95 backdrop-blur border-none ${isPortrait ? "max-w-2xl w-[90vw]" : "max-w-5xl w-[95vw]"}`}
        >
          <VisuallyHidden>
            <DialogTitle>{image.title}</DialogTitle>
          </VisuallyHidden>

          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 z-50 rounded-full bg-background/80 p-2 hover:bg-background transition-colors"
          >
            <X className="size-5" />
          </button>

          <div className="relative w-full bg-black/50 flex items-center justify-center">
            <div
              className={`relative w-full ${isPortrait ? "max-h-[70vh]" : "max-h-[75vh]"}`}
              style={{
                aspectRatio: image.aspectRatio,
              }}
            >
              <Image
                src={image.imageUrl}
                alt={image.title}
                fill
                className="object-contain"
                sizes={isPortrait ? "90vw" : "95vw"}
                priority
              />
            </div>
          </div>

          <div className="p-4 sm:p-6 bg-background">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 line-clamp-2">{image.title}</h2>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageWrapperProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

export const ImageWrapper = ({
  src,
  alt,
  className = "",
  fill = true,
  width,
  height,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
}: ImageWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Don't render if src is empty
  if (!src || src.trim() === "") {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
          <ImageIcon className="h-8 w-8 text-muted-foreground/50 mb-2" />
          <span className="text-xs text-muted-foreground">No Image</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="w-full h-full" />
        </div>
      )}

      {/* Error State */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
          <ImageIcon className="h-8 w-8 text-muted-foreground/50 mb-2" />
          <span className="text-xs text-muted-foreground">No Image</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          className="object-cover"
          onLoad={handleLoadingComplete}
          onError={handleError}
          sizes={sizes}
          priority={priority}
        />
      )}
    </div>
  );
};

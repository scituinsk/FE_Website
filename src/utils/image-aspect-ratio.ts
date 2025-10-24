/**
 * Calculate aspect ratio from image dimensions
 * @param width - Image width in pixels
 * @param height - Image height in pixels
 * @returns Aspect ratio as a number (width/height)
 */
export function calculateAspectRatio(width: number, height: number): number {
  if (height === 0) return 1;
  return width / height;
}

/**
 * Get aspect ratio from an image file (client-side)
 * @param file - Image file object
 * @returns Promise resolving to aspect ratio
 */
export async function getImageAspectRatio(file: File): Promise<number> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      const aspectRatio = calculateAspectRatio(img.width, img.height);
      URL.revokeObjectURL(objectUrl);
      resolve(aspectRatio);
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Failed to load image"));
    };

    img.src = objectUrl;
  });
}

/**
 * Get aspect ratio from an image URL
 * @param url - Image URL
 * @returns Promise resolving to aspect ratio
 */
export async function getImageAspectRatioFromUrl(url: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const aspectRatio = calculateAspectRatio(img.width, img.height);
      resolve(aspectRatio);
    };

    img.onerror = () => {
      reject(new Error("Failed to load image from URL"));
    };

    img.crossOrigin = "anonymous";
    img.src = url;
  });
}

/**
 * Classify aspect ratio into common categories
 * @param aspectRatio - Aspect ratio number
 * @returns Classification string
 */
export function classifyAspectRatio(aspectRatio: number): string {
  if (aspectRatio < 0.75) return "Portrait Tall";
  if (aspectRatio < 0.95) return "Portrait";
  if (aspectRatio < 1.05) return "Square";
  if (aspectRatio < 1.5) return "Landscape";
  if (aspectRatio < 2) return "Wide";
  return "Ultra Wide";
}

/**
 * Format aspect ratio to readable string (e.g., "16:9", "4:3")
 * @param aspectRatio - Aspect ratio number
 * @returns Formatted ratio string
 */
export function formatAspectRatio(aspectRatio: number): string {
  // Common ratios
  const commonRatios = [
    { ratio: 16 / 9, label: "16:9" },
    { ratio: 4 / 3, label: "4:3" },
    { ratio: 3 / 2, label: "3:2" },
    { ratio: 2 / 3, label: "2:3" },
    { ratio: 3 / 4, label: "3:4" },
    { ratio: 1 / 1, label: "1:1" },
    { ratio: 21 / 9, label: "21:9" },
  ];

  // Find closest common ratio
  const closest = commonRatios.reduce((prev, curr) => {
    return Math.abs(curr.ratio - aspectRatio) < Math.abs(prev.ratio - aspectRatio) ? curr : prev;
  });

  // If very close to common ratio, use it
  if (Math.abs(closest.ratio - aspectRatio) < 0.01) {
    return closest.label;
  }

  // Otherwise, return approximate ratio
  return `${aspectRatio.toFixed(2)}:1`;
}

/**
 * Example usage in upload form:
 *
 * const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
 *   const file = e.target.files?.[0];
 *   if (!file) return;
 *
 *   const aspectRatio = await getImageAspectRatio(file);
 *   console.log('Aspect Ratio:', aspectRatio);
 *   console.log('Classification:', classifyAspectRatio(aspectRatio));
 *   console.log('Formatted:', formatAspectRatio(aspectRatio));
 *
 *   // Use this aspectRatio when creating the gallery image object
 * };
 */

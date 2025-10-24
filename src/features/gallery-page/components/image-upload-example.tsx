"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getImageAspectRatio, formatAspectRatio, classifyAspectRatio } from "@/utils/image-aspect-ratio";
import { Upload, X } from "lucide-react";

/**
 * Example component for uploading images with automatic aspect ratio detection
 * This component demonstrates how to handle image uploads and calculate aspect ratios
 *
 * To use this in production:
 * 1. Integrate with your backend API for image upload
 * 2. Add form validation
 * 3. Add loading states and error handling
 * 4. Store the image data with aspect ratio in your database
 */

interface ImagePreview {
  file: File;
  url: string;
  aspectRatio: number;
  width: number;
  height: number;
}

export const ImageUploadExample = () => {
  const [preview, setPreview] = useState<ImagePreview | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      alert("File size must be less than 5MB");
      return;
    }

    try {
      // Get aspect ratio
      const aspectRatio = await getImageAspectRatio(file);

      // Create preview URL
      const url = URL.createObjectURL(file);

      // Get dimensions
      const dimensions = await new Promise<{ width: number; height: number }>((resolve) => {
        const img = document.createElement("img");
        img.onload = () => {
          resolve({ width: img.width, height: img.height });
        };
        img.src = url;
      });

      setPreview({
        file,
        url,
        aspectRatio,
        width: dimensions.width,
        height: dimensions.height,
      });
    } catch (error) {
      console.error("Error processing image:", error);
      alert("Failed to process image");
    }
  };

  const handleUpload = async () => {
    if (!preview) return;

    setUploading(true);

    try {
      // Create form data
      const formData = new FormData();
      formData.append("image", preview.file);
      formData.append("aspectRatio", preview.aspectRatio.toString());
      formData.append("title", ""); // Add title input if needed
      formData.append("category", ""); // Add category select if needed

      // Send to your API endpoint
      // const response = await fetch('/api/gallery/upload', {
      //   method: 'POST',
      //   body: formData,
      // });

      // const data = await response.json();

      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Upload data:", {
        filename: preview.file.name,
        aspectRatio: preview.aspectRatio,
        dimensions: `${preview.width}x${preview.height}`,
        classification: classifyAspectRatio(preview.aspectRatio),
        formattedRatio: formatAspectRatio(preview.aspectRatio),
      });

      alert("Image uploaded successfully! (This is a demo)");
      handleClear();
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleClear = () => {
    if (preview) {
      URL.revokeObjectURL(preview.url);
    }
    setPreview(null);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Upload Image (Example)</h2>
        <p className="text-sm text-muted-foreground">This component automatically detects the aspect ratio of uploaded images</p>
      </div>

      {!preview ? (
        <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center hover:border-muted-foreground/50 transition-colors">
          <Upload className="size-12 mx-auto mb-4 text-muted-foreground" />
          <label
            htmlFor="image-upload"
            className="cursor-pointer"
          >
            <span className="text-sm text-muted-foreground">Click to upload or drag and drop</span>
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </label>
          <p className="text-xs text-muted-foreground mt-2">PNG, JPG, WEBP up to 5MB</p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Preview */}
          <div className="relative rounded-lg overflow-hidden bg-muted">
            <div
              className="relative w-full"
              style={{
                aspectRatio: preview.aspectRatio,
                maxHeight: "500px",
              }}
            >
              <Image
                src={preview.url}
                alt="Preview"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={handleClear}
              className="absolute top-2 right-2 bg-background/80 p-2 rounded-full hover:bg-background transition-colors"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Image Info */}
          <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Filename:</span>
              <span className="font-medium">{preview.file.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Dimensions:</span>
              <span className="font-medium">
                {preview.width} × {preview.height}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Aspect Ratio:</span>
              <span className="font-medium">
                {formatAspectRatio(preview.aspectRatio)} ({preview.aspectRatio.toFixed(3)})
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Classification:</span>
              <span className="font-medium">{classifyAspectRatio(preview.aspectRatio)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">File Size:</span>
              <span className="font-medium">{(preview.file.size / 1024 / 1024).toFixed(2)} MB</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              onClick={handleUpload}
              disabled={uploading}
              className="flex-1"
            >
              {uploading ? "Uploading..." : "Upload Image"}
            </Button>
            <Button
              onClick={handleClear}
              variant="outline"
              disabled={uploading}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="bg-muted/50 p-4 rounded-lg text-sm space-y-2">
        <h3 className="font-semibold">How it works:</h3>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Select an image file (PNG, JPG, WEBP)</li>
          <li>The component automatically calculates the aspect ratio</li>
          <li>Preview shows the image with its natural proportions</li>
          <li>Aspect ratio is preserved when displaying in gallery</li>
          <li>Upload includes aspect ratio data for storage</li>
        </ul>
      </div>
    </div>
  );
};

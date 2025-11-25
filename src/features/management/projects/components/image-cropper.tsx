"use client";

import { useState, useRef } from "react";
import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface ImageCropperProps {
  imageSrc: string;
  isOpen: boolean;
  onClose: () => void;
  onCropComplete: (croppedImageBlob: Blob, croppedImageUrl: string) => void;
  aspectRatio?: number;
}

export function ImageCropper({ imageSrc, isOpen, onClose, onCropComplete, aspectRatio = 16 / 9 }: ImageCropperProps) {
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    width: 90,
    height: 50.625, // 90 * 9/16 for 16:9 ratio
    x: 5,
    y: 24.6875,
  });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [isProcessing, setIsProcessing] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;

    // Calculate crop to fit 16:9 aspect ratio
    const imageAspectRatio = width / height;
    let cropWidth, cropHeight, cropX, cropY;

    if (imageAspectRatio > aspectRatio) {
      // Image is wider than 16:9
      cropHeight = 100;
      cropWidth = ((height * aspectRatio) / width) * 100;
      cropX = (100 - cropWidth) / 2;
      cropY = 0;
    } else {
      // Image is taller than 16:9
      cropWidth = 100;
      cropHeight = (width / aspectRatio / height) * 100;
      cropX = 0;
      cropY = (100 - cropHeight) / 2;
    }

    setCrop({
      unit: "%",
      width: cropWidth,
      height: cropHeight,
      x: cropX,
      y: cropY,
    });
  };

  const getCroppedImg = async (): Promise<{ blob: Blob; url: string } | null> => {
    if (!completedCrop || !imgRef.current) {
      return null;
    }

    const image = imgRef.current;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return null;
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    // Set canvas size to desired output size
    canvas.width = completedCrop.width * scaleX;
    canvas.height = completedCrop.height * scaleY;

    ctx.drawImage(
      image,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      canvas.width,
      canvas.height
    );

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            resolve(null);
            return;
          }
          const url = URL.createObjectURL(blob);
          resolve({ blob, url });
        },
        "image/jpeg",
        0.95
      );
    });
  };

  const handleCropConfirm = async () => {
    setIsProcessing(true);
    const result = await getCroppedImg();
    setIsProcessing(false);

    if (result) {
      onCropComplete(result.blob, result.url);
      onClose();
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => !open && onClose()}
    >
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>Crop Image</DialogTitle>
          <DialogDescription>Adjust the crop area to fit your image. The aspect ratio is locked to 16:9.</DialogDescription>
        </DialogHeader>

        <div className="flex justify-center items-center bg-muted/30 rounded-lg p-4">
          <ReactCrop
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={aspectRatio}
            className="max-w-full"
          >
            <img
              ref={imgRef}
              src={imageSrc}
              alt="Crop preview"
              onLoad={onImageLoad}
              className="max-w-full h-auto"
            />
          </ReactCrop>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            disabled={isProcessing}
          >
            Cancel
          </Button>
          <Button
            onClick={handleCropConfirm}
            disabled={isProcessing || !completedCrop}
          >
            {isProcessing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isProcessing ? "Processing..." : "Apply Crop"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

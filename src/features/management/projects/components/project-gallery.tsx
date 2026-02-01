"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Save, X, Upload, Star } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { ImageCropper } from "./image-cropper";
import { DetailProject } from "../queries/use-get-project-by-id";
import { useUpdateProjectImage } from "../mutations/use-update-project-image";
import { useDeleteProjectImage } from "../mutations/use-delete-project-image";
import { cn } from "@/lib/utils";
import apiClient from "@/lib/axios";

interface ProjectGalleryProps {
  project: DetailProject;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const images = project.images || [];

  const [newImage, setNewImage] = useState<{ file?: File; previewUrl?: string }>({});
  const [isAdding, setIsAdding] = useState(false);
  const [uploadingFile, setUploadingFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cropper states
  const [cropperOpen, setCropperOpen] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string>("");

  // Mutations

  const { mutate: updateImage, isPending: isPendingUpdate } = useUpdateProjectImage();
  const { mutate: deleteImage, isPending: isPendingDelete } = useDeleteProjectImage();

  const handleDelete = (id: number) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    deleteImage(
      {
        projectId: project.id.toString(),
        imageId: id.toString(),
      },
      {
        onSuccess: () => {
          toast.success("Image deleted successfully");
        },
        onError: () => {
          toast.error("Failed to delete image");
        },
      },
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadingFile(file);
      // Create preview URL and open cropper
      const previewUrl = URL.createObjectURL(file);
      setImageToCrop(previewUrl);
      setCropperOpen(true);
    }
  };

  // Drag and drop handlers for new image
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0]; // Only take the first file
      if (file.type.startsWith("image/")) {
        setUploadingFile(file);
        const previewUrl = URL.createObjectURL(file);
        setImageToCrop(previewUrl);
        setCropperOpen(true);
      }
    }
  };

  const handleSetPrimary = (id: number) => {
    updateImage(
      {
        projectId: project.id.toString(),
        imageId: id.toString(),
        data: { isPrimary: true },
      },
      {
        onSuccess: () => {
          toast.success("Primary image updated");
        },
        onError: () => {
          toast.error("Failed to update primary image");
        },
      },
    );
  };

  const handleCropComplete = (croppedBlob: Blob, croppedUrl: string) => {
    const croppedFile = new File([croppedBlob], uploadingFile?.name || "image.jpg", {
      type: "image/jpeg",
    });

    setNewImage({ file: croppedFile, previewUrl: croppedUrl });
  };

  const handleCropperClose = () => {
    if (imageToCrop) {
      URL.revokeObjectURL(imageToCrop);
    }
    setImageToCrop("");
    setCropperOpen(false);
  };

  const uploadImage = async (file: File): Promise<void> => {
    const formData = new FormData();

    formData.append("image", file);

    await apiClient.post(`/admin/projects/${project.id}/images/upload`, formData, {
      headers: {
        "Content-Type": file.type,
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total) {
          const percentComplete = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(percentComplete);
        }
      },
    });
  };

  const handleAddImage = async () => {
    if (!newImage.file) return;

    setUploadProgress(0);

    try {
      await uploadImage(newImage.file);

      // Success handling
      toast.success("Image uploaded successfully");

      // Reset form state
      setIsAdding(false);
      setNewImage({});
      setUploadingFile(null);
      setUploadProgress(0);

      // Clean up preview URL
      if (newImage.previewUrl) {
        URL.revokeObjectURL(newImage.previewUrl);
      }
    } catch (error) {
      toast.error("Failed to upload image");
      setUploadProgress(0);
      return;
    }
  };

  return (
    <>
      <ImageCropper
        imageSrc={imageToCrop}
        isOpen={cropperOpen}
        onClose={handleCropperClose}
        onCropComplete={handleCropComplete}
        aspectRatio={16 / 9}
      />

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">Gallery</CardTitle>
              <CardDescription>Project screenshots and images</CardDescription>
            </div>
            {!isAdding && (
              <Button
                size="sm"
                onClick={() => setIsAdding(true)}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Image
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add New Image Form */}
          {isAdding && (
            <div className="border border-dashed border-border rounded-lg p-4 space-y-4 bg-muted/30">
              <h4 className="font-semibold">Add New Image</h4>
              <div className="space-y-4">
                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="new-file">Upload Image</Label>
                  <div
                    className="flex items-center gap-3 border-2 border-dashed border-border rounded-lg p-4 transition-colors hover:border-primary"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="new-file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex-1"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      {uploadingFile ? uploadingFile.name : "Choose Image or Drag & Drop"}
                    </Button>
                    {uploadingFile && <Badge variant="secondary">{(uploadingFile.size / 1024 / 1024).toFixed(2)} MB</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground">Upload an image file or drag and drop. Only one image at a time.</p>
                </div>

                {/* Preview */}
                {newImage.previewUrl && (
                  <div className="space-y-2">
                    <Label>Preview</Label>
                    <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden border border-border shadow-sm">
                      <Image
                        src={newImage.previewUrl}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}

                {/* Upload Progress */}
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Uploading...</span>
                      <span className="font-medium">{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-primary h-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Alt Text - removed since API doesn't have alt field */}
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={handleAddImage}
                  disabled={!newImage.file || uploadProgress > 0}
                >
                  <Save className="mr-2 h-4 w-4" />
                  {uploadProgress > 0 ? "Uploading..." : "Add Image"}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setIsAdding(false);
                    setNewImage({});
                    setUploadingFile(null);
                    setUploadProgress(0);
                    if (newImage.previewUrl) {
                      URL.revokeObjectURL(newImage.previewUrl);
                    }
                  }}
                  disabled={uploadProgress > 0}
                >
                  <X className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={image.url}
                    alt={`Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  {image.isPrimary && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-yellow-500">
                        <Star className="h-3 w-3 mr-1 fill-white" />
                        Primary
                      </Badge>
                    </div>
                  )}
                </div>
                <div className="p-3 space-y-2">
                  <p className="text-sm font-medium truncate">Image {index + 1}</p>
                  <div className="flex gap-2 ">
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(image.id)}
                      className={cn(image.isPrimary ? "basis-full" : "basis-1/2")}
                      disabled={isPendingDelete}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                    {!image.isPrimary && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleSetPrimary(image.id)}
                        disabled={isPendingUpdate}
                        className="basis-1/2"
                      >
                        <Star className="mr-2 h-3 w-3" />
                        Set Primary
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {images.length === 0 && !isAdding && (
            <div className="text-center py-12 text-muted-foreground">
              <p>No images yet. Click "Add Image" to get started.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}

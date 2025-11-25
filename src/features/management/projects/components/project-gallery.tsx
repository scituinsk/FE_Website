"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Pencil, Save, X, Upload, Star } from "lucide-react";
import Image from "next/image";
import { ImageCropper } from "./image-cropper";
import { DetailProject } from "../queries/use-get-project-by-id";

interface ProjectGalleryProps {
  project: DetailProject;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  // Extend API type with optional file for upload
  type GalleryImageWithFile = DetailProject["images"][0] & { file?: File };

  const [images, setImages] = useState<GalleryImageWithFile[]>(
    project.images?.map((img) => ({
      ...img,
      file: undefined,
    })) || []
  );

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedImage, setEditedImage] = useState<GalleryImageWithFile | null>(null);
  const [newImage, setNewImage] = useState<Partial<GalleryImageWithFile>>({
    imageUrl: "",
    isPrimary: false,
    isUsed: true,
  });
  const [isAdding, setIsAdding] = useState(false);
  const [uploadingFile, setUploadingFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editFileInputRef = useRef<HTMLInputElement>(null);

  // Cropper states
  const [cropperOpen, setCropperOpen] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string>("");
  const [cropMode, setCropMode] = useState<"new" | "edit">("new");

  const handleEdit = (image: GalleryImageWithFile) => {
    setEditingId(image.id);
    setEditedImage(image);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedImage(null);
  };

  const handleSaveEdit = () => {
    if (editedImage) {
      setImages(images.map((img) => (img.id === editedImage.id ? editedImage : img)));
      setEditingId(null);
      setEditedImage(null);
    }
  };

  const handleDelete = (id: number) => {
    setImages(images.filter((img) => img.id !== id));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadingFile(file);
      // Create preview URL and open cropper
      const previewUrl = URL.createObjectURL(file);
      setImageToCrop(previewUrl);
      setCropMode("new");
      setCropperOpen(true);
    }
  };

  const handleEditFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editedImage) {
      // Create preview URL and open cropper
      const previewUrl = URL.createObjectURL(file);
      setImageToCrop(previewUrl);
      setCropMode("edit");
      setCropperOpen(true);
    }
  };

  const handleSetPrimary = (id: number) => {
    setImages(images.map((img) => ({ ...img, isPrimary: img.id === id })));
  };

  const handleCropComplete = (croppedBlob: Blob, croppedUrl: string) => {
    // Convert blob to file
    const croppedFile = new File([croppedBlob], uploadingFile?.name || "image.jpg", {
      type: "image/jpeg",
    });

    if (cropMode === "new") {
      setNewImage({ ...newImage, imageUrl: croppedUrl, file: croppedFile });
    } else if (cropMode === "edit" && editedImage) {
      setEditedImage({ ...editedImage, imageUrl: croppedUrl, file: croppedFile });
    }
  };

  const handleAddImage = async () => {
    if (newImage.imageUrl && (newImage.file || newImage.imageUrl)) {
      // TODO: If file exists, get presigned URL and upload
      // const presignedUrl = await getPresignedUrl(newImage.file);
      // await uploadToPresignedUrl(presignedUrl, newImage.file);
      // const finalUrl = presignedUrl.split('?')[0]; // Get URL without query params

      const newId = Date.now();
      // If this is the first image, make it primary
      const isPrimary = images.length === 0;
      setImages([
        ...images,
        {
          id: newId,
          projectId: project.id,
          imageUrl: newImage.imageUrl,
          isPrimary,
          isUsed: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          file: newImage.file,
        },
      ]);
      setNewImage({ imageUrl: "", isPrimary: false, isUsed: true });
      setUploadingFile(null);
      setIsAdding(false);
    }
  };

  return (
    <>
      <ImageCropper
        imageSrc={imageToCrop}
        isOpen={cropperOpen}
        onClose={() => setCropperOpen(false)}
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
                  <div className="flex items-center gap-3">
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
                      {uploadingFile ? uploadingFile.name : "Choose Image"}
                    </Button>
                    {uploadingFile && <Badge variant="secondary">{(uploadingFile.size / 1024 / 1024).toFixed(2)} MB</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground">Upload an image file. The file will be uploaded using presigned URL.</p>
                </div>

                {/* Preview */}
                {newImage.imageUrl && (
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
                    <Image
                      src={newImage.imageUrl}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Alt Text - removed since API doesn't have alt field */}
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={handleAddImage}
                  disabled={!newImage.imageUrl}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Add Image
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setIsAdding(false);
                    setNewImage({ imageUrl: "", isPrimary: false, isUsed: true });
                    setUploadingFile(null);
                  }}
                >
                  <X className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => (
              <div
                key={image.id}
                className="space-y-3"
              >
                {editingId === image.id && editedImage ? (
                  <div className="border border-border rounded-lg p-4 space-y-3 bg-muted/30">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={editedImage.imageUrl}
                        alt={`Image ${editedImage.id}`}
                        fill
                        className="object-cover"
                      />
                      {editedImage.isPrimary && (
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-yellow-500">
                            <Star className="h-3 w-3 mr-1 fill-white" />
                            Primary
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs">Upload New Image (Optional)</Label>
                      <input
                        ref={editFileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleEditFileChange}
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => editFileInputRef.current?.click()}
                        className="w-full"
                      >
                        <Upload className="mr-2 h-3 w-3" />
                        Change Image
                      </Button>
                    </div>
                    {/* Removed alt text field since API doesn't have it */}
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={handleSaveEdit}
                      >
                        <Save className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleCancelEdit}
                      >
                        <X className="mr-2 h-4 w-4" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="group relative border border-border rounded-lg overflow-hidden hover:border-primary transition-colors">
                    <div className="relative w-full aspect-video">
                      <Image
                        src={image.imageUrl}
                        alt={`Image ${image.id}`}
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
                      <p className="text-sm font-medium truncate">Image {image.id}</p>
                      <div className="flex gap-2">
                        {!image.isPrimary && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleSetPrimary(image.id)}
                            className="flex-1"
                          >
                            <Star className="mr-2 h-3 w-3" />
                            Set Primary
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(image)}
                        >
                          <Pencil className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(image.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
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

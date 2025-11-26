"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Pencil, Save, X, Upload, Star } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { toast } from "sonner";
import { ImageCropper } from "./image-cropper";
import { DetailProject } from "../queries/use-get-project-by-id";
import { useGetPresignedUrl } from "../mutations/use-get-presigned-url";
import { useConfirmImageUpload } from "../mutations/use-confirm-image-upload";
import { useUpdateProjectImage } from "../mutations/use-update-project-image";
import { useDeleteProjectImage } from "../mutations/use-delete-project-image";

interface ProjectGalleryProps {
  project: DetailProject;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  // Use data from project prop (React Query cache)
  const images = project.images || [];

  const [editingId, setEditingId] = useState<number | null>(null);
  const [newImage, setNewImage] = useState<{ file?: File; previewUrl?: string }>({});
  const [isAdding, setIsAdding] = useState(false);
  const [uploadingFile, setUploadingFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editFileInputRef = useRef<HTMLInputElement>(null);

  // Cropper states
  const [cropperOpen, setCropperOpen] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string>("");
  const [cropMode, setCropMode] = useState<"new" | "edit">("new");

  // Mutations
  const { mutate: getPresignedUrl, isPending: isPendingPresigned } = useGetPresignedUrl();
  const { mutate: confirmUpload, isPending: isPendingConfirm } = useConfirmImageUpload();
  const { mutate: updateImage, isPending: isPendingUpdate } = useUpdateProjectImage();
  const { mutate: deleteImage, isPending: isPendingDelete } = useDeleteProjectImage();

  const handleEdit = (imageId: number) => {
    setEditingId(imageId);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    if (editFileInputRef.current) {
      editFileInputRef.current.value = "";
    }
  };

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
      }
    );
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
    if (file && editingId) {
      // Create preview URL and open cropper
      const previewUrl = URL.createObjectURL(file);
      setImageToCrop(previewUrl);
      setCropMode("edit");
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
        setCropMode("new");
        setCropperOpen(true);
      }
    }
  };

  // Drag and drop handlers for edit image
  const handleEditDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleEditDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files.length > 0 && editingId) {
      const file = files[0]; // Only take the first file
      if (file.type.startsWith("image/")) {
        const previewUrl = URL.createObjectURL(file);
        setImageToCrop(previewUrl);
        setCropMode("edit");
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
      }
    );
  };

  const handleCropComplete = (croppedBlob: Blob, croppedUrl: string) => {
    const croppedFile = new File([croppedBlob], uploadingFile?.name || "image.jpg", {
      type: "image/jpeg",
    });

    if (cropMode === "new") {
      setNewImage({ file: croppedFile, previewUrl: croppedUrl });
    } else if (cropMode === "edit") {
      // For edit mode, immediately upload
      handleEditImageUpload(croppedFile);
    }
  };

  const handleCropperClose = () => {
    if (imageToCrop) {
      URL.revokeObjectURL(imageToCrop);
    }
    setImageToCrop("");
    setCropperOpen(false);
  };

  const uploadToS3 = async (file: File, uploadUrl: string): Promise<void> => {
    try {
      await axios.put(uploadUrl, file, {
        headers: {
          "Content-Type": file.type,
          "x-amz-acl": "public-read",
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percentComplete = Math.round((progressEvent.loaded / progressEvent.total) * 100);
            setUploadProgress(percentComplete);
          }
        },
      });
    } catch (error) {
      throw new Error("Upload failed");
    }
  };

  const handleAddImage = async () => {
    if (!newImage.file) return;

    setUploadProgress(0);

    getPresignedUrl(
      {
        projectId: project.id.toString(),
        data: {
          fileName: newImage.file.name,
          fileType: newImage.file.type,
          fileSize: newImage.file.size,
        },
      },
      {
        onSuccess: async (presignedData) => {
          try {
            // Upload to S3 with progress tracking
            await uploadToS3(newImage.file!, presignedData.uploadUrl);

            // Confirm upload
            confirmUpload(
              {
                projectId: project.id.toString(),
                imageId: presignedData.id.toString(),
              },
              {
                onSuccess: () => {
                  toast.success("Image uploaded successfully");
                  setIsAdding(false);
                  setNewImage({});
                  setUploadingFile(null);
                  setUploadProgress(0);
                  if (newImage.previewUrl) {
                    URL.revokeObjectURL(newImage.previewUrl);
                  }
                },
                onError: () => {
                  toast.error("Failed to confirm image upload");
                  setUploadProgress(0);
                },
              }
            );
          } catch (error) {
            toast.error("Failed to upload image to storage");
            setUploadProgress(0);
          }
        },
        onError: () => {
          toast.error("Failed to get upload URL");
        },
      }
    );
  };

  const handleEditImageUpload = async (file: File) => {
    if (!editingId) return;

    setUploadProgress(0);

    getPresignedUrl(
      {
        projectId: project.id.toString(),
        data: {
          fileName: file.name,
          fileType: file.type,
          fileSize: file.size,
        },
      },
      {
        onSuccess: async (presignedData) => {
          try {
            await uploadToS3(file, presignedData.uploadUrl);

            confirmUpload(
              {
                projectId: project.id.toString(),
                imageId: presignedData.id.toString(),
              },
              {
                onSuccess: () => {
                  // Delete old image
                  deleteImage(
                    {
                      projectId: project.id.toString(),
                      imageId: editingId.toString(),
                    },
                    {
                      onSuccess: () => {
                        toast.success("Image updated successfully");
                        setEditingId(null);
                        setUploadProgress(0);
                      },
                      onError: () => {
                        toast.error("Image uploaded but failed to delete old image");
                        setEditingId(null);
                        setUploadProgress(0);
                      },
                    }
                  );
                },
                onError: () => {
                  toast.error("Failed to confirm image upload");
                  setUploadProgress(0);
                },
              }
            );
          } catch (error) {
            toast.error("Failed to upload image to storage");
            setUploadProgress(0);
          }
        },
        onError: () => {
          toast.error("Failed to get upload URL");
        },
      }
    );
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
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border">
                    <Image
                      src={newImage.previewUrl}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
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
                  disabled={!newImage.file || isPendingPresigned || isPendingConfirm || uploadProgress > 0}
                >
                  <Save className="mr-2 h-4 w-4" />
                  {isPendingPresigned || isPendingConfirm || uploadProgress > 0 ? "Uploading..." : "Add Image"}
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
                  disabled={isPendingPresigned || isPendingConfirm || uploadProgress > 0}
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
                {editingId === image.id ? (
                  <div className="border border-border rounded-lg p-4 space-y-3 bg-muted/30">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
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
                    <div className="space-y-2">
                      <Label className="text-xs">Upload New Image</Label>
                      <div
                        className="border-2 border-dashed border-border rounded-lg p-3 transition-colors hover:border-primary"
                        onDragOver={handleEditDragOver}
                        onDrop={handleEditDrop}
                      >
                        <input
                          ref={editFileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleEditFileChange}
                          className="hidden"
                          disabled={isPendingPresigned || isPendingConfirm || isPendingDelete || uploadProgress > 0}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => editFileInputRef.current?.click()}
                          className="w-full"
                          disabled={isPendingPresigned || isPendingConfirm || isPendingDelete || uploadProgress > 0}
                        >
                          <Upload className="mr-2 h-3 w-3" />
                          {isPendingPresigned || isPendingConfirm || uploadProgress > 0 ? "Uploading..." : "Change Image or Drag & Drop"}
                        </Button>
                      </div>
                      {uploadProgress > 0 && uploadProgress < 100 && (
                        <div className="space-y-1">
                          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-primary h-full transition-all duration-300"
                              style={{ width: `${uploadProgress}%` }}
                            />
                          </div>
                          <p className="text-xs text-center text-muted-foreground">{uploadProgress}%</p>
                        </div>
                      )}
                      <p className="text-xs text-muted-foreground">Upload will replace current image automatically.</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleCancelEdit}
                        disabled={isPendingPresigned || isPendingConfirm || isPendingDelete || uploadProgress > 0}
                        className="w-full"
                      >
                        <X className="mr-2 h-4 w-4" />
                        Done
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
                            disabled={isPendingUpdate}
                          >
                            <Star className="mr-2 h-3 w-3" />
                            Set Primary
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(image.id)}
                          disabled={isPendingUpdate || isPendingDelete}
                        >
                          <Pencil className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(image.id)}
                          disabled={isPendingDelete}
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

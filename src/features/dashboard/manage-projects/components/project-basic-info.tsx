"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Pencil, Save, X, Upload } from "lucide-react";
import Image from "next/image";
import { ImageCropper } from "./image-cropper";

interface ProjectBasicInfoProps {
  projectId: string;
}

interface ProjectData {
  title: string;
  slug: string;
  description: string;
  category: string;
  status: string;
  duration: string;
  launchYear: string;
  githubUrl: string;
  demoUrl: string;
  mainImage: string;
  mainImageFile?: File;
}

export function ProjectBasicInfo({ projectId }: ProjectBasicInfoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [projectData, setProjectData] = useState<ProjectData>({
    title: "Smart Campus System",
    slug: "smart-campus-system",
    description:
      "Sistem informasi terintegrasi untuk mengelola aktivitas kampus dengan fitur presensi digital, manajemen kelas, dan dashboard analytics real-time.",
    category: "Web Application",
    status: "Production",
    duration: "6 months",
    launchYear: "2024",
    githubUrl: "https://github.com/scit-uinsuka/smart-campus",
    demoUrl: "https://smartcampus.uin-suka.ac.id",
    mainImage: "/projects/smart-campus.jpg",
  });

  const [editedData, setEditedData] = useState<ProjectData>(projectData);
  const mainImageInputRef = useRef<HTMLInputElement>(null);

  // Cropper states
  const [cropperOpen, setCropperOpen] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string>("");

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData(projectData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData(projectData);
  };

  const handleSave = async () => {
    // TODO: If mainImageFile exists, get presigned URL and upload
    // if (editedData.mainImageFile) {
    //   const presignedUrl = await getPresignedUrl(editedData.mainImageFile);
    //   await uploadToPresignedUrl(presignedUrl, editedData.mainImageFile);
    //   const finalUrl = presignedUrl.split('?')[0];
    //   editedData.mainImage = finalUrl;
    // }

    setProjectData(editedData);
    setIsEditing(false);
  };

  const handleChange = (field: keyof ProjectData, value: string) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  const handleMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImageToCrop(previewUrl);
      setCropperOpen(true);
    }
  };

  const handleCropComplete = (croppedBlob: Blob, croppedUrl: string) => {
    // Convert blob to file
    const croppedFile = new File([croppedBlob], editedData.mainImageFile?.name || "main-image.jpg", {
      type: "image/jpeg",
    });
    setEditedData((prev) => ({ ...prev, mainImage: croppedUrl, mainImageFile: croppedFile }));
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
              <CardTitle className="text-2xl">Basic Information</CardTitle>
              <CardDescription>Project basic details and metadata</CardDescription>
            </div>
            {!isEditing ? (
              <Button
                size="sm"
                variant="outline"
                onClick={handleEdit}
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCancel}
                >
                  <X className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
                <Button
                  size="sm"
                  onClick={handleSave}
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {isEditing ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Project Title</Label>
                <Input
                  id="title"
                  value={editedData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={editedData.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Short Description</Label>
                <Textarea
                  id="description"
                  value={editedData.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Input
                  id="status"
                  value={editedData.status}
                  onChange={(e) => handleChange("status", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  value={editedData.duration}
                  onChange={(e) => handleChange("duration", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="launchYear">Launch Year</Label>
                <Input
                  id="launchYear"
                  value={editedData.launchYear}
                  onChange={(e) => handleChange("launchYear", e.target.value)}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="mainImage">Main Image</Label>
                <div className="space-y-3">
                  {editedData.mainImage && (
                    <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden border border-border">
                      <Image
                        src={editedData.mainImage}
                        alt="Main image preview"
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <input
                      ref={mainImageInputRef}
                      type="file"
                      id="mainImage"
                      accept="image/*"
                      onChange={handleMainImageChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => mainImageInputRef.current?.click()}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      {editedData.mainImageFile ? editedData.mainImageFile.name : "Upload Main Image"}
                    </Button>
                    {editedData.mainImageFile && <Badge variant="secondary">{(editedData.mainImageFile.size / 1024 / 1024).toFixed(2)} MB</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Upload the main/primary image for this project. This will be uploaded using presigned URL.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="demoUrl">Demo URL</Label>
                <Input
                  id="demoUrl"
                  value={editedData.demoUrl}
                  onChange={(e) => handleChange("demoUrl", e.target.value)}
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Project Title</h4>
                <p className="text-base font-medium">{projectData.title}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Category</h4>
                <p className="text-base font-medium">{projectData.category}</p>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Short Description</h4>
                <p className="text-base">{projectData.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Status</h4>
                <p className="text-base font-medium">{projectData.status}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Duration</h4>
                <p className="text-base font-medium">{projectData.duration}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Launch Year</h4>
                <p className="text-base font-medium">{projectData.launchYear}</p>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Main Image</h4>
                {projectData.mainImage && (
                  <div className="relative w-full max-w-md aspect-video rounded-lg overflow-hidden border border-border mt-2">
                    <Image
                      src={projectData.mainImage}
                      alt="Main project image"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Demo URL</h4>
                <a
                  href={projectData.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-primary hover:underline truncate block"
                >
                  {projectData.demoUrl}
                </a>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}

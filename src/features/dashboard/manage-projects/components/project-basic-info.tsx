"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Pencil, Save, X } from "lucide-react";
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
    demoUrl: "https://smartcampus.uin-suka.ac.id",
    mainImage: "/projects/smart-campus.jpg",
  });

  const [editedData, setEditedData] = useState<ProjectData>(projectData);

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
    console.log(editedData);
    setIsEditing(false);
  };

  const handleChange = (field: keyof ProjectData, value: string) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
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

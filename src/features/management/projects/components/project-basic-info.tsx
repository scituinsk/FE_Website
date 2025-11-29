"use client";

import { toast } from "sonner";
import { useState, useMemo } from "react";
import { Pencil, Save, X } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { DetailProject } from "../queries/use-get-project-by-id";
import { UpdateBasicInfoPayload, useUpdateBasicInfo } from "../mutations/use-update-basic-info";

const STATUS_OPTIONS = [
  { value: "PRODUCTION", label: "Production" },
  { value: "BETA_LAUNCH", label: "Beta Launch" },
];

interface ProjectData {
  title: string;
  description: string;
  status: string;
  duration: string;
  launchYear: string;
  demoUrl: string;
}

interface ProjectBasicInfoProps {
  project: DetailProject;
}

export function ProjectBasicInfo({ project }: ProjectBasicInfoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [projectData, setProjectData] = useState<UpdateBasicInfoPayload>({
    title: project.title,
    description: project.description,
    status: project.status,
    duration: project.duration,
    launchYear: project.launchYear,
    demoUrl: project.demoUrl,
  });

  const { mutate, isPending } = useUpdateBasicInfo();

  const [editedData, setEditedData] = useState<UpdateBasicInfoPayload>(projectData);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedData(projectData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData(projectData);
  };

  const handleSave = async () => {
    mutate(
      {
        projectId: String(project.id),
        data: editedData,
      },
      {
        onSuccess: () => {
          toast.success("Project basic info updated successfully.");
          setProjectData(editedData);
        },
        onError: (error) => {
          console.error("Failed to update project basic info:", error);
          toast.error("Failed to update project basic info. Please try again.");
        },
        onSettled: () => {
          setIsEditing(false);
        },
      }
    );
  };

  const handleChange = (field: keyof ProjectData, value: string) => {
    setEditedData((prev) => ({ ...prev, [field]: value }));
  };

  const hasChanges = useMemo(() => {
    return JSON.stringify(projectData) !== JSON.stringify(editedData);
  }, [projectData, editedData]);

  const getStatusLabel = (status: string) => {
    const option = STATUS_OPTIONS.find((opt) => opt.value === status);
    return option ? option.label : status;
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
                  disabled={isPending || !hasChanges}
                >
                  <Save className="mr-2 h-4 w-4" />
                  {isPending ? "Saving..." : "Save"}
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

              {/* <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={editedData.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                />
              </div> */}

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
                <select
                  id="status"
                  value={editedData.status}
                  onChange={(e) => handleChange("status", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {STATUS_OPTIONS.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
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

              {/* <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Category</h4>
                <p className="text-base font-medium">{projectData.category}</p>
              </div> */}

              <div className="md:col-span-2">
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Short Description</h4>
                <p className="text-base">{projectData.description}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-1">Status</h4>
                <p className="text-base font-medium">{getStatusLabel(projectData.status)}</p>
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

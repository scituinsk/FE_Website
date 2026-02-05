"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Pencil, Save, X, Plus, Trash2 } from "lucide-react";
import { DetailProject } from "../queries/use-get-project-by-id";
import { useSyncProjectDetails } from "../mutations/use-sync-project-details";
import { toast } from "sonner";

interface ProjectDetailsProps {
  project: DetailProject;
}

interface ProjectDetail {
  aboutProject: string;
  features: DetailProject["keyFeatures"];
  challenges: DetailProject["challenges"];
  results: DetailProject["results"];
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [projectDetail, setProjectDetail] = useState<ProjectDetail>({
    aboutProject: project.about,
    features: project.keyFeatures,
    challenges: project.challenges,
    results: project.results,
  });

  const [editedDetail, setEditedDetail] = useState<ProjectDetail>(projectDetail);

  const { mutate: sync, isPending: isPendingSync } = useSyncProjectDetails();

  const handleEdit = () => {
    setIsEditing(true);
    setEditedDetail(projectDetail);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedDetail(projectDetail);
  };

  const handleSave = () => {
    sync(
      {
        projectId: project.id.toString(),
        data: editedDetail,
      },
      {
        onSuccess: () => {
          toast.success("Project details synced successfully!");
          setProjectDetail(editedDetail);
        },
        onError: (error) => {
          console.error("Failed to sync project details:", error);
          toast.error("Failed to sync project details. Please try again.");
        },
        onSettled: () => {
          setIsEditing(false);
        },
      },
    );
  };

  const handleAboutChange = (value: string) => {
    setEditedDetail((prev) => ({ ...prev, aboutProject: value }));
  };

  const handleListItemChange = (type: "features" | "challenges" | "results", id: number, value: string) => {
    setEditedDetail((prev) => ({
      ...prev,
      [type]: prev[type].map((item) =>
        item.id === id ? { ...item, [type === "features" ? "feature" : type === "challenges" ? "challenge" : "result"]: value } : item,
      ),
    }));
  };

  const handleAddListItem = (type: "features" | "challenges" | "results") => {
    const newItem = {
      id: Date.now(), // Temporary ID for new items
      projectId: parseInt(String(project.id)),
      [type === "features" ? "feature" : type === "challenges" ? "challenge" : "result"]: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setEditedDetail((prev) => ({
      ...prev,
      [type]: [...prev[type], newItem as any],
    }));
  };

  const handleRemoveListItem = (type: "features" | "challenges" | "results", id: number) => {
    setEditedDetail((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item.id !== id),
    }));
  };

  const hasChanges = useMemo(() => {
    return JSON.stringify(projectDetail) !== JSON.stringify(editedDetail);
  }, [projectDetail, editedDetail]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl">Project Details</CardTitle>
            <CardDescription>Detailed information about the project</CardDescription>
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
                disabled={isPendingSync || !hasChanges}
              >
                <Save className="mr-2 h-4 w-4" />
                {isPendingSync ? "Saving..." : "Save"}
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* About Project */}
        <div className="space-y-3">
          <Label className="text-base font-semibold">About Project</Label>
          {isEditing ? (
            <Textarea
              value={editedDetail.aboutProject}
              onChange={(e) => handleAboutChange(e.target.value)}
              rows={6}
              placeholder="Enter project description..."
            />
          ) : (
            <p className="text-muted-foreground leading-relaxed">{projectDetail.aboutProject || "-"}</p>
          )}
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-base font-semibold">Key Features</Label>
            {isEditing && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleAddListItem("features")}
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Feature
              </Button>
            )}
          </div>
          {isEditing ? (
            <div className="space-y-2">
              {editedDetail.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex gap-2"
                >
                  <Input
                    value={feature.feature}
                    onChange={(e) => handleListItemChange("features", feature.id, e.target.value)}
                    placeholder="Enter feature..."
                  />
                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={() => handleRemoveListItem("features", feature.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {projectDetail.features.map((feature) => (
                <li
                  key={feature.id}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <span className="text-primary mt-1">✓</span>
                  <span>{feature.feature}</span>
                </li>
              ))}
              {projectDetail.features.length === 0 && <p className="text-sm text-muted-foreground">-</p>}
            </ul>
          )}
        </div>

        {/* Challenges and Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Challenges */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-base font-semibold">Challenges</Label>
              {isEditing && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleAddListItem("challenges")}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              )}
            </div>
            {isEditing ? (
              <div className="space-y-2">
                {editedDetail.challenges.map((challenge) => (
                  <div
                    key={challenge.id}
                    className="flex gap-2"
                  >
                    <Input
                      value={challenge.challenge}
                      onChange={(e) => handleListItemChange("challenges", challenge.id, e.target.value)}
                      placeholder="Enter challenge..."
                    />
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => handleRemoveListItem("challenges", challenge.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-2">
                {projectDetail.challenges.map((challenge) => (
                  <li
                    key={challenge.id}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-0.5">•</span>
                    <span>{challenge.challenge}</span>
                  </li>
                ))}
                {projectDetail.challenges.length === 0 && <p className="text-sm text-muted-foreground">-</p>}
              </ul>
            )}
          </div>

          {/* Results */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-base font-semibold">Results</Label>
              {isEditing && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleAddListItem("results")}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              )}
            </div>
            {isEditing ? (
              <div className="space-y-2">
                {editedDetail.results.map((result) => (
                  <div
                    key={result.id}
                    className="flex gap-2"
                  >
                    <Input
                      value={result.result}
                      onChange={(e) => handleListItemChange("results", result.id, e.target.value)}
                      placeholder="Enter result..."
                    />
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => handleRemoveListItem("results", result.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-2">
                {projectDetail.results.map((result) => (
                  <li
                    key={result.id}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-green-500 mt-0.5">→</span>
                    <span>{result.result}</span>
                  </li>
                ))}
                {projectDetail.results.length === 0 && <p className="text-sm text-muted-foreground">-</p>}
              </ul>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

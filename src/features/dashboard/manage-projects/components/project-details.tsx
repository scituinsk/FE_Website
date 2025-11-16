"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Pencil, Save, X, Plus, Trash2 } from "lucide-react";

interface ProjectDetailsProps {
  projectId: string;
}

interface ProjectDetail {
  aboutProject: string;
  features: string[];
  challenges: string[];
  results: string[];
}

export function ProjectDetails({ projectId }: ProjectDetailsProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [projectDetail, setProjectDetail] = useState<ProjectDetail>({
    aboutProject:
      "Platform komprehensif yang mendigitalisasi berbagai aspek kehidupan kampus, mulai dari sistem presensi otomatis menggunakan QR code, manajemen jadwal kelas, hingga dashboard analytics untuk monitoring aktivitas akademik. Sistem ini dirancang untuk meningkatkan efisiensi operasional kampus dan memberikan pengalaman yang lebih baik bagi mahasiswa dan dosen.",
    features: [
      "Digital Attendance System",
      "Class Management Dashboard",
      "Real-time Analytics",
      "Notification System",
      "QR Code Integration",
      "Mobile Responsive Design",
    ],
    challenges: [
      "Integrasi dengan sistem legacy yang sudah ada",
      "Handling real-time data untuk ribuan pengguna",
      "Optimasi performa database",
      "Implementasi security best practices",
    ],
    results: [
      "95% adopsi oleh mahasiswa dalam 3 bulan",
      "Pengurangan waktu absensi hingga 80%",
      "Peningkatan efisiensi administrasi 60%",
      "Zero downtime selama 6 bulan operasional",
    ],
  });

  const [editedDetail, setEditedDetail] = useState<ProjectDetail>(projectDetail);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedDetail(projectDetail);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedDetail(projectDetail);
  };

  const handleSave = () => {
    // TODO: API call to save data
    setProjectDetail(editedDetail);
    setIsEditing(false);
  };

  const handleAboutChange = (value: string) => {
    setEditedDetail((prev) => ({ ...prev, aboutProject: value }));
  };

  const handleListItemChange = (type: "features" | "challenges" | "results", index: number, value: string) => {
    setEditedDetail((prev) => ({
      ...prev,
      [type]: prev[type].map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleAddListItem = (type: "features" | "challenges" | "results") => {
    setEditedDetail((prev) => ({
      ...prev,
      [type]: [...prev[type], ""],
    }));
  };

  const handleRemoveListItem = (type: "features" | "challenges" | "results", index: number) => {
    setEditedDetail((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index),
    }));
  };

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
              >
                <Save className="mr-2 h-4 w-4" />
                Save
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
            <p className="text-muted-foreground leading-relaxed">{projectDetail.aboutProject}</p>
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
              {editedDetail.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-2"
                >
                  <Input
                    value={feature}
                    onChange={(e) => handleListItemChange("features", index, e.target.value)}
                    placeholder="Enter feature..."
                  />
                  <Button
                    size="icon"
                    variant="destructive"
                    onClick={() => handleRemoveListItem("features", index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {projectDetail.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <span className="text-primary mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
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
                {editedDetail.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="flex gap-2"
                  >
                    <Input
                      value={challenge}
                      onChange={(e) => handleListItemChange("challenges", index, e.target.value)}
                      placeholder="Enter challenge..."
                    />
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => handleRemoveListItem("challenges", index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-2">
                {projectDetail.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-0.5">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
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
                {editedDetail.results.map((result, index) => (
                  <div
                    key={index}
                    className="flex gap-2"
                  >
                    <Input
                      value={result}
                      onChange={(e) => handleListItemChange("results", index, e.target.value)}
                      placeholder="Enter result..."
                    />
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={() => handleRemoveListItem("results", index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-2">
                {projectDetail.results.map((result, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-green-500 mt-0.5">→</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, Pencil, Save, X } from "lucide-react";
import Image from "next/image";

interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}

interface ProjectGalleryProps {
  projectId: string;
}

export function ProjectGallery({ projectId }: ProjectGalleryProps) {
  const [images, setImages] = useState<GalleryImage[]>([
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1473042904451-00171c69419d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      alt: "Dashboard Overview",
    },
    {
      id: "2",
      url: "https://plus.unsplash.com/premium_photo-1661919068698-40e7b78f196a?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      alt: "Attendance System",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1496939217462-7d42e9a74f0e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
      alt: "Analytics Dashboard",
    },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<GalleryImage | null>(null);
  const [newImage, setNewImage] = useState<Omit<GalleryImage, "id">>({ url: "", alt: "" });
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (image: GalleryImage) => {
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

  const handleDelete = (id: string) => {
    setImages(images.filter((img) => img.id !== id));
  };

  const handleAddImage = () => {
    if (newImage.url && newImage.alt) {
      const newId = String(Date.now());
      setImages([...images, { ...newImage, id: newId }]);
      setNewImage({ url: "", alt: "" });
      setIsAdding(false);
    }
  };

  return (
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="new-url">Image URL</Label>
                <Input
                  id="new-url"
                  value={newImage.url}
                  onChange={(e) => setNewImage({ ...newImage, url: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-alt">Alt Text</Label>
                <Input
                  id="new-alt"
                  value={newImage.alt}
                  onChange={(e) => setNewImage({ ...newImage, alt: e.target.value })}
                  placeholder="Description of the image"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={handleAddImage}
                disabled={!newImage.url || !newImage.alt}
              >
                <Save className="mr-2 h-4 w-4" />
                Add Image
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setIsAdding(false);
                  setNewImage({ url: "", alt: "" });
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
                      src={editedImage.url}
                      alt={editedImage.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs">Image URL</Label>
                    <Input
                      value={editedImage.url}
                      onChange={(e) => setEditedImage({ ...editedImage, url: e.target.value })}
                      className="text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs">Alt Text</Label>
                    <Input
                      value={editedImage.alt}
                      onChange={(e) => setEditedImage({ ...editedImage, alt: e.target.value })}
                      className="text-sm"
                    />
                  </div>
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
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 space-y-2">
                    <p className="text-sm font-medium truncate">{image.alt}</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(image)}
                        className="flex-1"
                      >
                        <Pencil className="mr-2 h-3 w-3" />
                        Edit
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
  );
}

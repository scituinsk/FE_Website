"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Trash2, Pencil, Save, X, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  rating: number;
  avatar: string;
}

interface ProjectTestimonialsProps {
  projectId: string;
}

export function ProjectTestimonials({ projectId }: ProjectTestimonialsProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: "1",
      name: "Muhammad Rizki",
      role: "Student Representative",
      message:
        "Very user-friendly and makes our daily activities much more efficient. As a student, I appreciate how easy it is to use and how it saves us time every day.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rizki",
    },
    {
      id: "2",
      name: "Dr. Ahmad Fauzi",
      role: "Dean of Faculty",
      message: "This system has revolutionized how we manage campus activities and student attendance. The implementation is seamless.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad",
    },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedTestimonial, setEditedTestimonial] = useState<Testimonial | null>(null);
  const [newTestimonial, setNewTestimonial] = useState<Omit<Testimonial, "id">>({
    name: "",
    role: "",
    message: "",
    rating: 5,
    avatar: "",
  });
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (testimonial: Testimonial) => {
    setEditingId(testimonial.id);
    setEditedTestimonial(testimonial);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedTestimonial(null);
  };

  const handleSaveEdit = () => {
    if (editedTestimonial) {
      setTestimonials(testimonials.map((t) => (t.id === editedTestimonial.id ? editedTestimonial : t)));
      setEditingId(null);
      setEditedTestimonial(null);
    }
  };

  const handleDelete = (id: string) => {
    setTestimonials(testimonials.filter((t) => t.id !== id));
  };

  const handleAddTestimonial = () => {
    if (newTestimonial.name && newTestimonial.role && newTestimonial.message) {
      const newId = String(Date.now());
      const avatar = newTestimonial.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${newTestimonial.name}`;
      setTestimonials([...testimonials, { ...newTestimonial, id: newId, avatar }]);
      setNewTestimonial({ name: "", role: "", message: "", rating: 5, avatar: "" });
      setIsAdding(false);
    }
  };

  const StarRating = ({
    rating,
    onRatingChange,
    readonly = false,
  }: {
    rating: number;
    onRatingChange?: (rating: number) => void;
    readonly?: boolean;
  }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => !readonly && onRatingChange?.(star)}
            disabled={readonly}
            className={`${readonly ? "cursor-default" : "cursor-pointer hover:scale-110"} transition-transform`}
          >
            <Star className={`h-5 w-5 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
          </button>
        ))}
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl">Testimonials</CardTitle>
            <CardDescription>Client feedback and reviews</CardDescription>
          </div>
          {!isAdding && (
            <Button
              size="sm"
              onClick={() => setIsAdding(true)}
            >
              <Plus className="mr-2 h-4 w-4" />
              Add Testimonial
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Add New Testimonial Form */}
        {isAdding && (
          <div className="border border-dashed border-border rounded-lg p-4 space-y-4 bg-muted/30">
            <h4 className="font-semibold">Add New Testimonial</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="new-name">Name</Label>
                <Input
                  id="new-name"
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-role">Role</Label>
                <Input
                  id="new-role"
                  value={newTestimonial.role}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, role: e.target.value })}
                  placeholder="Position or Title"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="new-message">Message</Label>
                <Textarea
                  id="new-message"
                  value={newTestimonial.message}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, message: e.target.value })}
                  placeholder="Enter testimonial message..."
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-avatar">Avatar URL (Optional)</Label>
                <Input
                  id="new-avatar"
                  value={newTestimonial.avatar}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, avatar: e.target.value })}
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
              <div className="space-y-2">
                <Label>Rating</Label>
                <StarRating
                  rating={newTestimonial.rating}
                  onRatingChange={(rating) => setNewTestimonial({ ...newTestimonial, rating })}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={handleAddTestimonial}
                disabled={!newTestimonial.name || !newTestimonial.role || !newTestimonial.message}
              >
                <Save className="mr-2 h-4 w-4" />
                Add Testimonial
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setIsAdding(false);
                  setNewTestimonial({ name: "", role: "", message: "", rating: 5, avatar: "" });
                }}
              >
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Testimonials List */}
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              {editingId === testimonial.id && editedTestimonial ? (
                <div className="border border-border rounded-lg p-4 space-y-4 bg-muted/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-xs">Name</Label>
                      <Input
                        value={editedTestimonial.name}
                        onChange={(e) => setEditedTestimonial({ ...editedTestimonial, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs">Role</Label>
                      <Input
                        value={editedTestimonial.role}
                        onChange={(e) => setEditedTestimonial({ ...editedTestimonial, role: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label className="text-xs">Message</Label>
                      <Textarea
                        value={editedTestimonial.message}
                        onChange={(e) => setEditedTestimonial({ ...editedTestimonial, message: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs">Avatar URL</Label>
                      <Input
                        value={editedTestimonial.avatar}
                        onChange={(e) => setEditedTestimonial({ ...editedTestimonial, avatar: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs">Rating</Label>
                      <StarRating
                        rating={editedTestimonial.rating}
                        onRatingChange={(rating) => setEditedTestimonial({ ...editedTestimonial, rating })}
                      />
                    </div>
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
                <div className="border border-border rounded-lg p-4 hover:border-primary transition-colors">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12 shrink-0">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                        <StarRating
                          rating={testimonial.rating}
                          readonly
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 italic">"{testimonial.message}"</p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(testimonial)}
                        >
                          <Pencil className="mr-2 h-3 w-3" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(testimonial.id)}
                        >
                          <Trash2 className="mr-2 h-3 w-3" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {testimonials.length === 0 && !isAdding && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No testimonials yet. Click "Add Testimonial" to get started.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Save, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useDeleteProject } from "../mutations/use-delete-project";
import { useUpdateSlug } from "../mutations/use-update-slug";

interface DangerousSettingsProps {
  projectId: string;
  currentSlug: string;
}

export function DangerousSettings({ projectId, currentSlug }: DangerousSettingsProps) {
  const [newSlug, setNewSlug] = useState(currentSlug);
  const [isSlugDialogOpen, setIsSlugDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");

  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate: updateSlugMutation, isPending: isUpdatingSlug } = useUpdateSlug({
    mutationConfig: {
      onSuccess: () => {
        toast.success("Slug berhasil diubah");
        queryClient.invalidateQueries({ queryKey: ["projects"] });
        setIsSlugDialogOpen(false);
      },
      onError: (error: any) => {
        toast.error(error.response?.data?.message || "Gagal mengubah slug");
      },
    },
  });

  const { mutate: deleteProjectMutation, isPending: isDeletingProject } = useDeleteProject({
    mutationConfig: {
      onSuccess: () => {
        toast.success("Project berhasil dihapus");
        queryClient.invalidateQueries({ queryKey: ["projects"] });
        setIsDeleteDialogOpen(false);
        setDeleteConfirmation("");
        router.push("/admin/manage-projects");
      },
      onError: (error: any) => {
        toast.error(error.response?.data?.message || "Gagal menghapus project");
      },
    },
  });

  const handleSlugChange = () => {
    updateSlugMutation({
      projectId,
      data: { slug: newSlug },
    });
  };

  const handleDeleteProject = () => {
    if (deleteConfirmation === currentSlug) {
      deleteProjectMutation(projectId);
    }
  };

  return (
    <>
      <Card className="border-destructive/50">
        <CardHeader>
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-1" />
            <div>
              <CardTitle className="text-2xl text-destructive">Dangerous Settings</CardTitle>
              <CardDescription>Actions in this section cannot be undone. Proceed with caution.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Change Slug */}
          <div className="border border-border rounded-lg p-4 space-y-3">
            <div>
              <h4 className="font-semibold text-base mb-1">Change Project Slug</h4>
              <p className="text-sm text-muted-foreground">Changing the slug will update the project URL. All existing links will break.</p>
            </div>
            <div className="flex items-end gap-3">
              <div className="flex-1 space-y-2">
                <Label htmlFor="slug">Current Slug</Label>
                <Input
                  id="slug"
                  value={newSlug}
                  onChange={(e) => setNewSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"))}
                  placeholder="project-slug"
                />
                <p className="text-xs text-muted-foreground">
                  Preview: <code className="bg-muted px-1 py-0.5 rounded">/projects/{newSlug}</code>
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setIsSlugDialogOpen(true)}
                disabled={newSlug === currentSlug || !newSlug || isUpdatingSlug}
              >
                <Save className="mr-2 h-4 w-4" />
                Update Slug
              </Button>
            </div>
          </div>

          {/* Delete Project */}
          <div className="border border-destructive/50 bg-destructive/5 rounded-lg p-4 space-y-3">
            <div>
              <h4 className="font-semibold text-base mb-1 text-destructive">Delete Project</h4>
              <p className="text-sm text-muted-foreground">
                Once you delete a project, there is no going back. All data including images, testimonials, and tech stack will be permanently
                removed.
              </p>
            </div>
            <Button
              variant="destructive"
              onClick={() => setIsDeleteDialogOpen(true)}
              disabled={isDeletingProject}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete This Project
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Slug Change Confirmation Dialog */}
      <Dialog
        open={isSlugDialogOpen}
        onOpenChange={setIsSlugDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Slug Change</DialogTitle>
            <DialogDescription>
              Are you sure you want to change the project slug from <code className="bg-muted px-1 py-0.5 rounded">{currentSlug}</code> to{" "}
              <code className="bg-muted px-1 py-0.5 rounded">{newSlug}</code>?
            </DialogDescription>
          </DialogHeader>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 shrink-0 mt-0.5" />
              <div className="text-sm text-yellow-800 dark:text-yellow-200">
                <p className="font-semibold mb-1">Warning</p>
                <p>This will break all existing links to this project. Make sure to update any references.</p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsSlugDialogOpen(false)}
              disabled={isUpdatingSlug}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSlugChange}
              disabled={isUpdatingSlug}
            >
              {isUpdatingSlug ? "Updating..." : "Confirm Change"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-destructive">Delete Project</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the project and remove all associated data.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-destructive/10 border border-destructive/50 rounded-lg p-4">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold mb-1 text-destructive">This will delete:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>All project information</li>
                    <li>All gallery images</li>
                    <li>All testimonials</li>
                    <li>Tech stack associations</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="delete-confirm">
                Type <code className="bg-muted px-1 py-0.5 rounded font-semibold">{currentSlug}</code> to confirm:
              </Label>
              <Input
                id="delete-confirm"
                value={deleteConfirmation}
                onChange={(e) => setDeleteConfirmation(e.target.value)}
                placeholder="Enter project slug"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsDeleteDialogOpen(false);
                setDeleteConfirmation("");
              }}
              disabled={isDeletingProject}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteProject}
              disabled={deleteConfirmation !== currentSlug || isDeletingProject}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              {isDeletingProject ? "Deleting..." : "Delete Project"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

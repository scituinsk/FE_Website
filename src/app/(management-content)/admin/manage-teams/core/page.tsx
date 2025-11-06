"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Pencil, Crown, Check, X, Upload, Loader2 } from "lucide-react";
import { CORE_TEAM } from "@/constants/core-team";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

interface EditingState {
  index: number;
  field: "name" | "angkatan" | "image";
  name: string;
  angkatan: string;
  imageUrl: string;
}

// Skeleton component for loading state
const MemberCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-5 rounded-lg border bg-card">
      <Skeleton className="size-32 sm:size-36 md:size-40 lg:size-44 aspect-square rounded-full ring-4 ring-primary/20" />
      <div className="flex flex-col items-center mt-4 w-full text-center space-y-2">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  );
};

const CoreTeamManagementPage = () => {
  const [editingMember, setEditingMember] = useState<EditingState | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // TODO: Replace with TanStack Query
  // const { data: coreTeamMembers, isLoading, isError } = useQuery({
  //   queryKey: ['core-team'],
  //   queryFn: fetchCoreTeam
  // });

  // Simulate loading state - Replace this with actual TanStack Query
  const isLoading = false;
  const isError = false;

  // Flatten core team members
  const coreTeamMembers = CORE_TEAM.flat();

  const handleEdit = (member: any, index: number, field: "name" | "angkatan" | "image") => {
    setEditingMember({
      index,
      field,
      name: member.name,
      angkatan: member.angkatan,
      imageUrl: member.imageUrl,
    });
  };

  const handleSave = async () => {
    if (!editingMember) return;

    setIsSaving(true);
    try {
      // TODO: Replace with TanStack Query mutation
      // await updateMutation.mutateAsync({
      //   id: editingMember.index,
      //   field: editingMember.field,
      //   value: editingMember.field === 'name'
      //     ? editingMember.name
      //     : editingMember.field === 'angkatan'
      //       ? editingMember.angkatan
      //       : editingMember.imageUrl
      // });

      console.log("Saving member:", editingMember);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setEditingMember(null);
    } catch (error) {
      console.error("Error saving member:", error);
      // TODO: Show error toast
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setEditingMember(null);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingMember) return;

    setIsUploading(true);
    try {
      // TODO: Implement presigned URL upload with TanStack Query
      // 1. Get presigned URL from your backend
      // const { data: presignedUrl } = await getPresignedUrlMutation.mutateAsync({
      //   fileName: file.name,
      //   fileType: file.type
      // });

      // 2. Upload file to S3 using presigned URL
      // await fetch(presignedUrl, {
      //   method: 'PUT',
      //   body: file,
      //   headers: { 'Content-Type': file.type }
      // });

      // 3. Update editingMember.imageUrl with the final URL
      // const finalImageUrl = presignedUrl.split('?')[0];

      // For now, just create a local URL preview
      const imageUrl = URL.createObjectURL(file);
      setEditingMember({ ...editingMember, imageUrl });

      console.log("Uploading image:", file.name);
    } catch (error) {
      console.error("Error uploading image:", error);
      // TODO: Show error toast
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          asChild
        >
          <Link href="/admin/manage-teams">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Core Team</h1>
            <p className="text-muted-foreground">Kelola tim inti dan leadership SCIT</p>
          </div>
        </div>
      </div>

      {/* Members List */}
      <Card className="py-4">
        <CardContent className="space-y-6">
          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <MemberCardSkeleton key={index} />
              ))}
            </div>
          )}

          {/* Error State */}
          {isError && (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <Crown className="h-12 w-12 text-destructive/50 mb-4" />
              <p className="text-sm text-destructive mb-4">Failed to load core team members</p>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
              >
                Try Again
              </Button>
            </div>
          )}

          {/* Members Grid */}
          {!isLoading && !isError && (
            <div className="grid grid-cols-2 md:grid-cols-3 xl:4 gap-4">
              {coreTeamMembers.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                  <Crown className="h-12 w-12 text-muted-foreground/50 mb-4" />
                  <p className="text-sm text-muted-foreground">No members found</p>
                </div>
              ) : (
                coreTeamMembers.map((member, index) => {
                  const isEditing = editingMember?.index === index;
                  const isEditingName = isEditing && editingMember?.field === "name";
                  const isEditingAngkatan = isEditing && editingMember?.field === "angkatan";
                  const isEditingImage = isEditing && editingMember?.field === "image";

                  return (
                    <div
                      key={`${member.name}-${index}`}
                      className="flex flex-col items-center p-4 sm:p-5 rounded-lg border bg-card hover:shadow-md transition-shadow"
                    >
                      {/* Avatar with Edit Icon */}
                      <div className="relative group">
                        <div className="relative size-32 sm:size-36 md:size-40 lg:size-44 aspect-square rounded-full overflow-hidden bg-muted ring-4 ring-primary/20">
                          <Image
                            fill
                            alt={member.name}
                            src={isEditingImage ? editingMember.imageUrl : member.imageUrl}
                            className="object-cover"
                          />
                        </div>
                        {isEditingImage && (
                          <>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleImageUpload}
                              disabled={isUploading}
                            />
                            <button
                              onClick={() => fileInputRef.current?.click()}
                              disabled={isUploading}
                              className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-100 transition-opacity disabled:cursor-not-allowed"
                            >
                              {isUploading ? <Loader2 className="h-8 w-8 text-white animate-spin" /> : <Upload className="h-8 w-8 text-white" />}
                            </button>
                          </>
                        )}
                        {!isEditing && (
                          <button
                            onClick={() => handleEdit(member, index, "image")}
                            className="absolute top-2 right-2 p-2 bg-background rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                        )}
                      </div>

                      {/* Member Info */}
                      <div className="flex flex-col items-center mt-4 w-full text-center">
                        {/* Name with Edit */}
                        <div className="w-full group/name relative">
                          {isEditingName ? (
                            <Input
                              value={editingMember.name}
                              onChange={(e) => setEditingMember({ ...editingMember, name: e.target.value })}
                              className="text-sm sm:text-base md:text-lg font-bold text-center h-auto py-1"
                            />
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <h3 className="text-sm sm:text-base md:text-lg font-bold leading-tight">{member.name}</h3>
                              <button
                                onClick={() => handleEdit(member, index, "name")}
                                className="opacity-0 group-hover/name:opacity-100 transition-opacity"
                              >
                                <Pencil className="h-3 w-3" />
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Role - Fixed */}
                        <p className="mt-2 text-xs sm:text-sm md:text-base text-muted-foreground font-medium">{member.role}</p>

                        {/* Angkatan with Edit */}
                        <div className="w-full group/angkatan relative mt-1">
                          {isEditingAngkatan ? (
                            <Input
                              value={editingMember.angkatan}
                              onChange={(e) => setEditingMember({ ...editingMember, angkatan: e.target.value })}
                              className="text-xs sm:text-sm text-center h-auto py-1"
                            />
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <p className="text-xs sm:text-sm text-muted-foreground">{member.angkatan}</p>
                              <button
                                onClick={() => handleEdit(member, index, "angkatan")}
                                className="opacity-0 group-hover/angkatan:opacity-100 transition-opacity"
                              >
                                <Pencil className="h-3 w-3" />
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Action Buttons when Editing */}
                        {isEditing && (
                          <div className="flex flex-col gap-2 mt-4 w-full">
                            <Button
                              onClick={handleSave}
                              size="sm"
                              className="w-full"
                              disabled={isSaving}
                            >
                              {isSaving ? (
                                <>
                                  <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                                  Saving...
                                </>
                              ) : (
                                <>
                                  <Check className="h-4 w-4 mr-1" />
                                  Save
                                </>
                              )}
                            </Button>
                            <Button
                              onClick={handleCancel}
                              size="sm"
                              variant="outline"
                              className="w-full"
                              disabled={isSaving}
                            >
                              <X className="h-4 w-4 mr-1" />
                              Cancel
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CoreTeamManagementPage;

"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";

import { RoleAdminGuard } from "@/features/auth/guard/role-admin-guard";
import { Button } from "@/components/ui/button";
import { UserTable } from "@/features/auth/components/user-table";
import { UserFormDialog } from "@/features/auth/components/user-form-dialog";
import { DeleteUserDialog } from "@/features/auth/components/delete-user-dialog";
import { getUsersQueryKey, useGetUsers } from "@/features/auth/queries/useGetUsers";
import { useCreateUser } from "@/features/auth/queries/useCreateUser";
import { useUpdateUser } from "@/features/auth/queries/useUpdateUser";
import { useDeleteUser } from "@/features/auth/queries/useDeleteUser";
import { User, CreateUserRequest, UpdateUserRequest } from "@/types/user";
import { useQueryClient } from "@tanstack/react-query";

const ManageUserLoginPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [formMode, setFormMode] = useState<"create" | "edit">("create");

  const queryClient = useQueryClient();

  // Queries
  const { data: users = [], isLoading } = useGetUsers();

  // Mutations
  const { mutate: createUser, isPending: isCreating } = useCreateUser({
    mutationConfig: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: getUsersQueryKey(),
        });
        toast.success("User berhasil ditambahkan!");
        setIsFormOpen(false);
        setSelectedUser(null);
      },
      onError: (error: any) => {
        toast.error(error?.response?.data?.message || "Gagal menambahkan user");
      },
    },
  });

  const { mutate: updateUser, isPending: isUpdating } = useUpdateUser({
    mutationConfig: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: getUsersQueryKey(),
        });
        toast.success("User berhasil diupdate!");
        setIsFormOpen(false);
        setSelectedUser(null);
      },
      onError: (error: any) => {
        toast.error(error?.response?.data?.message || "Gagal mengupdate user");
      },
    },
  });

  const { mutate: deleteUser, isPending: isDeleting } = useDeleteUser({
    mutationConfig: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: getUsersQueryKey(),
        });
        toast.success("User berhasil dihapus!");
        setIsDeleteDialogOpen(false);
        setSelectedUser(null);
      },
      onError: (error: any) => {
        toast.error(error?.response?.data?.message || "Gagal menghapus user");
      },
    },
  });

  // Handlers
  const handleCreateClick = () => {
    setFormMode("create");
    setSelectedUser(null);
    setIsFormOpen(true);
  };

  const handleEditClick = (user: User) => {
    setFormMode("edit");
    setSelectedUser(user);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (user: User) => {
    setSelectedUser(user);
    setIsDeleteDialogOpen(true);
  };

  const handleFormSubmit = (data: CreateUserRequest | UpdateUserRequest) => {
    if (formMode === "create") {
      createUser(data as CreateUserRequest);
    } else if (selectedUser) {
      updateUser({
        userId: selectedUser.id,
        data: data as UpdateUserRequest,
      });
    }
  };

  const handleDeleteConfirm = () => {
    if (selectedUser) {
      deleteUser(selectedUser.id);
    }
  };

  return (
    <RoleAdminGuard>
      <div className="space-y-6 p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Manajemen User Login</h1>
            <p className="text-muted-foreground mt-1">Kelola akun pengguna dan hak akses sistem</p>
          </div>
          <Button
            onClick={handleCreateClick}
            size="default"
          >
            <Plus className="mr-2 h-4 w-4" />
            Tambah User
          </Button>
        </div>

        {/* User Table */}
        <UserTable
          users={users}
          isLoading={isLoading}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />

        {/* Form Dialog */}
        <UserFormDialog
          open={isFormOpen}
          onOpenChange={setIsFormOpen}
          onSubmit={handleFormSubmit}
          isLoading={isCreating || isUpdating}
          user={selectedUser}
          mode={formMode}
        />

        {/* Delete Dialog */}
        <DeleteUserDialog
          open={isDeleteDialogOpen}
          onOpenChange={setIsDeleteDialogOpen}
          onConfirm={handleDeleteConfirm}
          isLoading={isDeleting}
          user={selectedUser}
        />
      </div>
    </RoleAdminGuard>
  );
};

export default ManageUserLoginPage;

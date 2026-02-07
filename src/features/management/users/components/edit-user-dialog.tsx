"use client";

import { CustomDialog } from "@/components/custom-dialog";
import { getUsersQueryKey } from "@/features/auth/queries/use-get-users";
import { useUpdateUser } from "@/features/auth/queries/use-update-user";
import { useDeleteUser } from "@/features/auth/queries/use-delete-user";
import { queryClient } from "@/lib/query-client";
import { LENGTH_CONSTRAINTS } from "@/constants/length-constraints";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/features/auth/contexts/auth-context";
import { can } from "@/utils/permissions";

interface EditUserDialogProps {
  data: {
    userId: number;
    name: string;
    email: string;
    role: "ADMIN" | "SUPER_ADMIN";
  } | null;
  open: boolean;
  onClose: () => void;
}

const updateUserFormSchema = z.object({
  name: z.string().min(LENGTH_CONSTRAINTS.auth.name.MIN, "Nama terlalu pendek").max(LENGTH_CONSTRAINTS.auth.name.MAX, "Nama terlalu panjang"),
  email: z
    .string()
    .email("Format email tidak valid")
    .min(LENGTH_CONSTRAINTS.auth.email.MIN, "Email terlalu pendek")
    .max(LENGTH_CONSTRAINTS.auth.email.MAX, "Email terlalu panjang"),
  password: z
    .string()
    .optional()
    .refine((val) => !val || (val.length >= LENGTH_CONSTRAINTS.auth.password.MIN && val.length <= LENGTH_CONSTRAINTS.auth.password.MAX), {
      message: `Password harus antara ${LENGTH_CONSTRAINTS.auth.password.MIN}-${LENGTH_CONSTRAINTS.auth.password.MAX} karakter`,
    }),
});

type UpdateUserFormValues = z.infer<typeof updateUserFormSchema>;

export const EditUserDialog = ({ data, open, onClose }: EditUserDialogProps) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const { user } = useAuth();

  const canDeleteUser = can(user, "delete_user", { id: data?.userId });

  const form = useForm<UpdateUserFormValues>({
    resolver: zodResolver(updateUserFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const { mutate: updateUser, isPending: isUpdating } = useUpdateUser({
    mutationConfig: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: getUsersQueryKey(),
        });
        toast.success("User berhasil diupdate!");
        onClose();
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
        setShowDeleteDialog(false);
        onClose();
      },
      onError: (error: any) => {
        toast.error(error?.response?.data?.message || "Gagal menghapus user");
      },
    },
  });

  // Populate form when data changes
  useEffect(() => {
    if (data) {
      form.reset({
        name: data.name,
        email: data.email,
        password: "",
      });
    }
  }, [data, form]);

  // Reset form when dialog closes
  useEffect(() => {
    if (!open) {
      form.reset();
    }
  }, [open, form]);

  function onSubmit(values: UpdateUserFormValues) {
    if (!data) return;

    const updateData: any = {
      name: values.name,
      email: values.email,
    };

    // Only include password if it's provided
    if (values.password && values.password.trim() !== "") {
      updateData.password = values.password;
    }

    updateUser({
      userId: data.userId,
      data: updateData,
    });
  }

  function handleDelete() {
    if (!data) return;
    deleteUser(data.userId);
  }

  if (!data) return null;

  const nameValue = form.watch("name");
  const emailValue = form.watch("email");
  const passwordValue = form.watch("password") || "";

  return (
    <>
      <CustomDialog
        open={open}
        onOpenChange={(val) => {
          if (!val) onClose();
        }}
        title="Edit User"
        maxWidth="4xl"
        isLoading={isUpdating || isDeleting}
        dialogContentProps={{
          onPointerDownOutside: (e) => e.preventDefault(),
        }}
      >
        <form
          id="updateUserForm"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FieldGroup className="gap-3">
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <InputGroup className="h-auto group">
                    <InputGroupInput
                      {...field}
                      id={field.name}
                      placeholder="John"
                      aria-invalid={fieldState.invalid || nameValue.length > LENGTH_CONSTRAINTS.auth.name.MAX}
                      autoComplete="off"
                      disabled={isUpdating}
                    />
                    <InputGroupAddon align="block-start">
                      <InputGroupText>Nama</InputGroupText>
                    </InputGroupAddon>
                    <InputGroupAddon
                      align="block-end"
                      className="opacity-0 group-focus-within:opacity-100 transition-opacity"
                    >
                      <InputGroupText
                        className={`ms-auto ${nameValue.length > LENGTH_CONSTRAINTS.auth.name.MAX ? "text-red-500 font-semibold" : ""}`}
                      >
                        {nameValue.length}/{LENGTH_CONSTRAINTS.auth.name.MAX}
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <InputGroup className="h-auto group">
                    <InputGroupInput
                      {...field}
                      id={field.name}
                      type="email"
                      placeholder="nama@scituinsk.com"
                      aria-invalid={fieldState.invalid || emailValue.length > LENGTH_CONSTRAINTS.auth.email.MAX}
                      autoComplete="off"
                      disabled={isUpdating}
                    />
                    <InputGroupAddon align="block-start">
                      <InputGroupText>Email</InputGroupText>
                    </InputGroupAddon>
                    <InputGroupAddon
                      align="block-end"
                      className="opacity-0 group-focus-within:opacity-100 transition-opacity"
                    >
                      <InputGroupText
                        className={`ms-auto ${emailValue.length > LENGTH_CONSTRAINTS.auth.email.MAX ? "text-red-500 font-semibold" : ""}`}
                      >
                        {emailValue.length}/{LENGTH_CONSTRAINTS.auth.email.MAX}
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <InputGroup className="h-auto group">
                    <InputGroupInput
                      {...field}
                      id={field.name}
                      type="password"
                      placeholder="*******"
                      aria-invalid={fieldState.invalid || (passwordValue.length > 0 && passwordValue.length > LENGTH_CONSTRAINTS.auth.password.MAX)}
                      autoComplete="off"
                      disabled={isUpdating}
                    />
                    <InputGroupAddon align="block-start">
                      <InputGroupText>Password Baru</InputGroupText>
                    </InputGroupAddon>
                    <InputGroupAddon
                      align="block-end"
                      className="opacity-0 group-focus-within:opacity-100 transition-opacity"
                    >
                      {passwordValue.length > 0 && (
                        <InputGroupText
                          className={`ms-auto ${passwordValue.length > LENGTH_CONSTRAINTS.auth.password.MAX ? "text-red-500 font-semibold" : ""}`}
                        >
                          {passwordValue.length}/{LENGTH_CONSTRAINTS.auth.password.MAX}
                        </InputGroupText>
                      )}
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  {!fieldState.invalid && <p className="text-xs text-muted-foreground mt-1">Kosongkan jika tidak ingin mengubah password</p>}
                </Field>
              )}
            />

            <Button
              type="submit"
              size="sm"
              disabled={isUpdating}
              className="w-full"
            >
              {isUpdating ? "Menyimpan..." : "Simpan Perubahan"}
            </Button>
          </FieldGroup>
        </form>

        {canDeleteUser && (
          <>
            <Separator className="my-6" />

            {/* Delete Section */}
            <div className="space-y-3">
              <div>
                <h3 className="text-base font-semibold text-destructive">Hapus User</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Menghapus user akan menghapus semua data terkait. Tindakan ini tidak dapat dibatalkan.
                </p>
              </div>
              <Button
                type="button"
                size="sm"
                variant="destructive"
                disabled={isUpdating || isDeleting}
                onClick={() => setShowDeleteDialog(true)}
                className="w-full"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                {isDeleting ? "Menghapus..." : "Hapus User"}
              </Button>
            </div>
          </>
        )}
      </CustomDialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={showDeleteDialog}
        onOpenChange={setShowDeleteDialog}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus User</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah Anda yakin ingin menghapus user <strong>{data.name}</strong>? Tindakan ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-destructive text-white hover:bg-destructive/90"
            >
              {isDeleting ? "Menghapus..." : "Hapus"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

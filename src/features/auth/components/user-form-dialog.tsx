"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User } from "@/types/user";

const userFormSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter").max(100, "Nama maksimal 100 karakter"),
  username: z.string().email("Format email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter").optional().or(z.literal("")),
  role: z.enum(["USER", "ADMIN"]).optional(),
});

type UserFormValues = z.infer<typeof userFormSchema>;

interface UserFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: UserFormValues) => void;
  isLoading?: boolean;
  user?: User | null;
  mode: "create" | "edit";
}

export function UserFormDialog({ open, onOpenChange, onSubmit, isLoading, user, mode }: UserFormDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<UserFormValues>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      username: "",
      password: "",
      role: "USER",
    },
  });

  const selectedRole = watch("role");

  useEffect(() => {
    if (user && mode === "edit") {
      setValue("name", user.name);
      setValue("username", user.username);
      setValue("role", user.role);
      setValue("password", "");
    } else {
      reset({
        name: "",
        username: "",
        password: "",
        role: "USER",
      });
    }
  }, [user, mode, setValue, reset]);

  const handleFormSubmit = (data: UserFormValues) => {
    if (mode === "edit" && !data.password) {
      const { password, ...dataWithoutPassword } = data;
      onSubmit(dataWithoutPassword);
    } else {
      onSubmit(data);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{mode === "create" ? "Tambah User Baru" : "Edit User"}</DialogTitle>
          <DialogDescription>
            {mode === "create"
              ? "Masukkan informasi user baru yang akan didaftarkan."
              : "Ubah informasi user. Kosongkan password jika tidak ingin mengubahnya."}
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="name">
              Nama Lengkap <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Masukkan nama lengkap"
              {...register("name")}
              disabled={isLoading}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">
              Email/Username <span className="text-destructive">*</span>
            </Label>
            <Input
              id="username"
              type="email"
              placeholder="user@example.com"
              {...register("username")}
              disabled={isLoading}
            />
            {errors.username && <p className="text-sm text-destructive">{errors.username.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">
              Password {mode === "create" && <span className="text-destructive">*</span>}
              {mode === "edit" && <span className="text-muted-foreground text-xs">(Kosongkan jika tidak ingin mengubah)</span>}
            </Label>
            <Input
              id="password"
              type="password"
              placeholder={mode === "create" ? "Minimal 8 karakter" : "Masukkan password baru"}
              {...register("password")}
              disabled={isLoading}
            />
            {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
          </div>

          {mode === "edit" && (
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select
                value={selectedRole}
                onValueChange={(value) => setValue("role", value as "USER" | "ADMIN")}
                disabled={isLoading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USER">User</SelectItem>
                  <SelectItem value="ADMIN">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Batal
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {mode === "create" ? "Tambah User" : "Simpan Perubahan"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

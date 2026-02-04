"use client";

import { AlertTriangle, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { User } from "@/types/user";

interface DeleteUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  isLoading?: boolean;
  user: User | null;
}

export function DeleteUserDialog({ open, onOpenChange, onConfirm, isLoading, user }: DeleteUserDialogProps) {
  if (!user) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
              <AlertTriangle className="h-5 w-5 text-destructive" />
            </div>
            <div>
              <DialogTitle>Hapus Pengguna</DialogTitle>
              <DialogDescription>Tindakan ini tidak dapat dibatalkan</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Apakah Anda yakin ingin menghapus pengguna <span className="font-semibold text-foreground">{user.name}</span> ({user.email})?
          </p>
          <p className="text-sm text-muted-foreground mt-2">Semua data terkait pengguna ini akan dihapus secara permanen.</p>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isLoading}
          >
            Batal
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Hapus Pengguna
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

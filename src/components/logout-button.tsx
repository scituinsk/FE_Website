"use client";

import { toast } from "sonner";
import { LogOut } from "lucide-react";

import { useLogout } from "@/features/auth/queries/useLogout";

import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const { mutate: logoutMutate, isPending: logoutMutateIsPending } = useLogout({
    mutationConfig: {
      onError: (error: any) => {
        const errorMessage = error.status == 401 ? "Unauthorized" : "Internal server error";
        toast.error(errorMessage);
        console.error("Logout error:", error);
      },
      onSuccess: () => {
        window.location.href = "/login";
      },
    },
  });

  const handleLogout = async () => {
    logoutMutate(undefined);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLogout}
      disabled={logoutMutateIsPending}
    >
      <LogOut className="mr-2 h-4 w-4" />
      {logoutMutateIsPending ? "Logging out..." : "Logout"}
    </Button>
  );
}

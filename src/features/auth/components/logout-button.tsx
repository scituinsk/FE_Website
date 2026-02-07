"use client";

import { toast } from "sonner";
import { LogOut } from "lucide-react";

import { useLogout } from "@/features/auth/queries/use-logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "../contexts/auth-context";

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

  const { user } = useAuth();

  const handleLogout = async () => {
    logoutMutate(undefined);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={user?.avatar as string} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-3 w-[300px] z-50 p-4">
        <DropdownMenuGroup>
          <div className="flex items-center pb-2">
            <Avatar className="cursor-pointer size-10">
              <AvatarImage src={user?.avatar as string} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="ml-2">{user?.name}</span>
              <span className="ml-2 text-sm text-muted-foreground">{user?.email}</span>
            </div>
          </div>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            disabled={logoutMutateIsPending}
            onClick={handleLogout}
            className="h-10"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <div>
              <span className="cursor-pointer">Logout</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";

import Link from "next/link";
import { toast } from "sonner";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { User, Settings, ClipboardList, Users, Images, UserIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/contexts/auth-context";

const items = [
  {
    title: "Manage Projects",
    url: "/admin/manage-projects",
    icon: ClipboardList,
  },
  {
    title: "Manage Teams",
    url: "/admin/manage-teams",
    icon: Users,
  },
  {
    title: "Manage Galleries",
    url: "/admin/manage-galleries",
    icon: Images,
  },
];

export const SidebarAdmin = () => {
  const pathname = usePathname();
  const { user } = useAuth();

  // Function to check if a menu item is active
  const isActive = (url: string) => {
    // Remove trailing slashes for comparison
    const currentPath = pathname.replace(/\/$/, "");
    const itemPath = url.replace(/\/$/, "");

    // Exact match or starts with the path (for nested routes)
    return currentPath === itemPath || currentPath.startsWith(itemPath + "/");
  };

  return (
    <Sidebar>
      <SidebarHeader className="h-16 border-b px-4">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 flex-shrink-0 dark:bg-foreground dark:rounded-full">
            <Image
              src="/logo-scit.png"
              alt="SCIT Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <Link href="/">
            <div className="flex flex-col">
              <span className="font-bold text-lg">SCIT</span>
              <span className="text-xs text-muted-foreground">Web Admin Dashboard</span>
            </div>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {user?.role === "ADMIN" && (
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive("/admin/manage-users-login")}
                  >
                    <Link href="/admin/manage-users-login">
                      <UserIcon />
                      <span>Manage User Login</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4 overflow-hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 h-12 px-3"
            >
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarImage
                  src={user?.avatar as string}
                  alt="User"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start text-left overflow-hidden min-w-0 flex-1">
                <span className="text-sm font-medium truncate w-full">{user?.name}</span>
                <span className="text-xs text-muted-foreground truncate w-full">{user?.username}</span>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56"
            align="end"
            forceMount
          >
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none truncate">{user?.name}</p>
                <p className="text-xs leading-none text-muted-foreground truncate">{user?.username}</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => toast.info("Fitur belum tersedia!")}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => toast.info("Fitur belum tersedia!")}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

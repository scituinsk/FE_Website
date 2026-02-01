"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ClipboardList, Users, Images, UserIcon, SettingsIcon } from "lucide-react";

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
import { useAuth } from "@/features/auth/contexts/auth-context";

const items = [
  {
    title: "Projects",
    url: "/admin/manage-projects",
    icon: ClipboardList,
  },
  {
    title: "Teams",
    url: "/admin/manage-teams",
    icon: Users,
  },
  {
    title: "Galleries",
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
                    className="h-10"
                    isActive={isActive(item.url)}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {user?.role === "SUPER_ADMIN" && (
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive("/admin/manage-users-login")}
                    className="h-10"
                  >
                    <Link href="/admin/manage-users-login">
                      <UserIcon />
                      <span>Accounts</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-4 overflow-hidden">
        <SidebarMenuButton className="h-10">
          <SettingsIcon />
          <span>Settings</span>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
};

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

export const SidebarAdminSkeleton = () => {
  return (
    <Sidebar>
      {/* Header Skeleton */}
      <SidebarHeader className="h-16 border-b px-4">
        <div className="flex items-center gap-3">
          {/* Logo Skeleton */}
          <Skeleton className="h-10 w-10 flex-shrink-0 rounded-full" />
          <div className="flex flex-col gap-2 flex-1">
            {/* Title Skeleton */}
            <Skeleton className="h-5 w-16" />
            {/* Subtitle Skeleton */}
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      </SidebarHeader>

      {/* Content Skeleton */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Menu Items Skeleton - 3 items matching the actual sidebar */}
              {[1, 2, 3].map((item) => (
                <SidebarMenuItem key={item}>
                  <div className="flex items-center gap-3 px-3 py-2 h-10">
                    {/* Icon Skeleton */}
                    <Skeleton className="h-5 w-5 flex-shrink-0" />
                    {/* Text Skeleton */}
                    <Skeleton className="h-4 flex-1" />
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer Skeleton */}
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3 px-3 py-2">
          {/* Avatar Skeleton */}
          <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
          <div className="flex flex-col gap-2 flex-1">
            {/* Name Skeleton */}
            <Skeleton className="h-4 w-24" />
            {/* Email Skeleton */}
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

import { ThemeToggle } from "@/components/theme-toggle";
import { LogoutButton } from "@/features/auth/components/logout-button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const NavbarAdmin = () => {
  return (
    <header className="bg-sidebar z-[50] sticky top-0 h-16 flex items-center justify-between border-b px-4 w-full">
      <SidebarTrigger className="size-10" />
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <LogoutButton />
      </div>
    </header>
  );
};

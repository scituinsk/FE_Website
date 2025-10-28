import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const NavbarAdmin = () => {
  return (
    <header className="bg-sidebar sticky top-0 h-16 flex items-center justify-between border-b px-4 w-full">
      <SidebarTrigger className="size-10" />
      <ThemeToggle />
    </header>
  );
};

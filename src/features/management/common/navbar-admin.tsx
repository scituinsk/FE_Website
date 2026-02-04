import { ThemeToggle } from "@/components/theme-toggle";
import { LogoutButton } from "@/features/auth/components/logout-button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

export const NavbarAdmin = () => {
  return (
    <header className="bg-sidebar z-50 h-16 flex items-center justify-between border-b px-4 w-full shrink-0">
      <div className="flex">
        <SidebarTrigger className="size-10" />{" "}
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
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <LogoutButton />
      </div>
    </header>
  );
};

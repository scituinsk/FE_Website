import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ApplicationLogoProps {
  responsive?: boolean;
}

export const ApplicationLogo = ({ responsive = true }: ApplicationLogoProps) => {
  return (
    <Link
      href="/"
      className="flex items-center space-x-3 transition-opacity hover:opacity-80"
    >
      {/* Logo Image */}
      <div className="relative h-10 w-10 flex-shrink-0 dark:bg-foreground dark:rounded-full">
        <Image
          src="/logo-scit.png"
          alt="SCIT Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Text Group */}
      <div className={cn("flex flex-col", responsive ? "hidden sm:flex" : "")}>
        <span className="text-xl font-bold leading-tight text-foreground">SCIT</span>
        <span className="text-xs font-normal leading-tight text-muted-foreground">Study Club Informatika</span>
      </div>
    </Link>
  );
};

"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        disabled
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 hover:bg-primary/10 relative overflow-hidden cursor-pointer"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div className="relative flex items-center justify-center">
        <Sun className={`h-4 w-4 text-primary transition-all duration-300 ${isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
        <Moon className={`h-4 w-4 text-primary absolute transition-all duration-300 ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`} />
      </div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

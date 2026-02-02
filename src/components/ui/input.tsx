import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-zinc-500 dark:placeholder:text-zinc-500 selection:bg-primary selection:text-primary-foreground bg-transparent h-9 w-full min-w-0 rounded-lg border-2 border-zinc-300 dark:border-zinc-700 px-3 py-1 text-base transition-all duration-200 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "text-foreground hover:border-zinc-400 dark:hover:border-zinc-600",
        "focus-visible:border-zinc-500 dark:focus-visible:border-zinc-500",
        "aria-invalid:border-red-500 aria-invalid:shadow-[0_0_0_1px_rgb(239,68,68)]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };

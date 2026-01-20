import React from "react";
import { PackageOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ElementType;
  action?: React.ReactNode;
  className?: string;
  variant?: "default" | "minimal" | "gradient";
}

export const EmptyState = ({
  title = "Data Kosong",
  description = "Belum ada data yang bisa ditampilkan saat ini.",
  icon: Icon = PackageOpen,
  action,
  className,
  variant = "default",
}: EmptyStateProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-12 w-full min-h-[400px] relative overflow-hidden rounded-2xl",
        variant === "default" && "border-2 border-dashed border-border/50 bg-muted/20",
        variant === "minimal" && "bg-background",
        variant === "gradient" && "bg-gradient-to-br from-muted/30 via-background to-muted/20 border border-border/30",
        "transition-all duration-300 hover:border-border/70",
        className,
      )}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Icon with gradient background */}
        <div className="relative mb-6 group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
          <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
            <Icon
              className="w-10 h-10 text-primary/60"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Text content */}
        <h3 className="text-2xl font-bold text-foreground mb-2 tracking-tight">{title}</h3>
        <p className="text-base text-muted-foreground max-w-md leading-relaxed">{description}</p>

        {/* Action button */}
        {action && <div className="mt-8">{action}</div>}
      </div>
    </div>
  );
};

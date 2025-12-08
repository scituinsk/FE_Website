import React from "react";
import { PackageOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ElementType;
  action?: React.ReactNode;
  className?: string;
}

export const EmptyState = ({
  title = "Data Kosong",
  description = "Belum ada data yang bisa ditampilkan saat ini.",
  icon: Icon = PackageOpen,
  action,
  className,
}: EmptyStateProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 w-full h-64",
        "border-2 border-dashed border-border rounded-lg bg-background",
        "hover:bg-muted/50 transition-colors duration-200",
        className
      )}
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-muted">
        <Icon className="w-6 h-6 text-muted-foreground" />
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>

      <p className="text-sm text-muted-foreground max-w-sm mb-6">{description}</p>

      {action && <div className="mt-2">{action}</div>}
    </div>
  );
};

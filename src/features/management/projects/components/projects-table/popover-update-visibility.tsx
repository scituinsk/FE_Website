import { useState, useEffect } from "react";
import { GlobeIcon, LockIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface PopoverUpdateVisibilityProps {
  projectId?: number;
  currentStatus: "PUBLIC" | "PRIVATE";
  onSave: (newStatus: "PUBLIC" | "PRIVATE") => void;
  onCancel: () => void;
  isOpen: boolean;
  children: React.ReactNode;
  onOpenChange: (open: boolean) => void;
  isLoading?: boolean;
}

export const PopoverUpdateVisibility = ({
  projectId,
  currentStatus,
  onSave,
  onCancel,
  isOpen,
  children,
  onOpenChange,
  isLoading,
}: PopoverUpdateVisibilityProps) => {
  const [selectedStatus, setSelectedStatus] = useState<"PUBLIC" | "PRIVATE">(currentStatus);

  useEffect(() => {
    setSelectedStatus(currentStatus);
  }, [currentStatus, isOpen]);

  const handleSave = () => {
    onSave(selectedStatus);
  };

  return (
    <Popover
      open={isOpen}
      onOpenChange={onOpenChange}
    >
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        className="w-sm p-3"
        align="start"
      >
        <div className="space-y-3">
          <h4 className="font-medium text-sm">Visibilitas</h4>
          <div className="space-y-2">
            <label className="flex items-start gap-3 cursor-pointer hover:bg-muted/50 rounded p-2 -mx-2 transition-colors">
              <input
                type="radio"
                name={`visibility-${projectId || "bulk"}`}
                value="PUBLIC"
                checked={selectedStatus === "PUBLIC"}
                onChange={() => setSelectedStatus("PUBLIC")}
                className="mt-0.5 w-4 h-4 text-primary focus:ring-primary"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <GlobeIcon className="size-4" />
                  <span className="text-sm font-medium">Publik</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">Siapa saja dapat melihat proyek ini</p>
              </div>
            </label>
            <label className="flex items-start gap-3 cursor-pointer hover:bg-muted/50 rounded p-2 -mx-2 transition-colors">
              <input
                type="radio"
                name={`visibility-${projectId || "bulk"}`}
                value="PRIVATE"
                checked={selectedStatus === "PRIVATE"}
                onChange={() => setSelectedStatus("PRIVATE")}
                className="mt-0.5 w-4 h-4 text-primary focus:ring-primary"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <LockIcon className="size-4" />
                  <span className="text-sm font-medium">Pribadi</span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">Hanya admin yang dapat melihat</p>
              </div>
            </label>
          </div>
          <Separator />
          <div className="flex gap-2 justify-end">
            <Button
              size="sm"
              variant="outline"
              onClick={onCancel}
              disabled={isLoading}
            >
              Batal
            </Button>
            <Button
              size="sm"
              onClick={handleSave}
              disabled={isLoading}
            >
              {isLoading ? "Menyimpan..." : "Simpan"}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

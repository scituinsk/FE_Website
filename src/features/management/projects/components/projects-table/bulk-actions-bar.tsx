import { IoClose } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { PopoverUpdateVisibility } from "./popover-update-visibility";

interface BulkActionsBarProps {
  selectedCount: number;
  isOpen: boolean;
  onClearSelection: () => void;
  onVisibilitySave: (newStatus: "PUBLIC" | "PRIVATE") => void;
  isVisibilityPopoverOpen: boolean;
  onVisibilityPopoverOpenChange: (open: boolean) => void;
  isLoading?: boolean;
}

export const BulkActionsBar = ({
  selectedCount,
  isOpen,
  onClearSelection,
  onVisibilitySave,
  isVisibilityPopoverOpen,
  onVisibilityPopoverOpenChange,
  isLoading,
}: BulkActionsBarProps) => {
  return (
    <div
      style={{
        maxHeight: isOpen ? "80px" : "0",
        transition: "max-height 300ms cubic-bezier(0, 0, 0.2, 1)",
      }}
      className="overflow-hidden"
    >
      <div className="px-6 py-1 h-16 bg-white text-gray-800 flex items-center justify-between border-b">
        <div className="flex items-center">
          <span className="mr-12">{selectedCount} dipilih</span>
          <div className="mx-4 h-12 w-px bg-gray-300" />
          <PopoverUpdateVisibility
            currentStatus="PUBLIC"
            isOpen={isVisibilityPopoverOpen}
            onOpenChange={onVisibilityPopoverOpenChange}
            onSave={onVisibilitySave}
            onCancel={() => onVisibilityPopoverOpenChange(false)}
            isLoading={isLoading}
          >
            <button className="underline">
              <span>Edit visibilitas</span>
            </button>
          </PopoverUpdateVisibility>
        </div>
        <Button
          variant="close"
          size="icon"
          className="hover:bg-gray-300"
          onClick={onClearSelection}
        >
          <IoClose />
        </Button>
      </div>
    </div>
  );
};

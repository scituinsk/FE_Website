import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { IoClose } from "react-icons/io5";
import { Separator } from "./ui/separator";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { DialogContentProps } from "@radix-ui/react-dialog";

interface CustomDialogProps {
  /**
   * Dialog open state (controlled)
   */
  open: boolean;
  /**
   * Callback when dialog open state changes
   */
  onOpenChange: (open: boolean) => void;
  /**
   * Dialog title
   */
  title: string;
  /**
   * Dialog content
   */
  children: ReactNode;
  /**
   * Optional trigger element. If provided, wraps it with DialogTrigger
   */
  trigger?: ReactNode;
  /**
   * Maximum width of the dialog
   * @default "4xl"
   */
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
  /**
   * Whether to disable the close button
   * @default false
   */
  disableClose?: boolean;
  /**
   * Additional className for DialogContent
   */
  className?: string;
  showCloseButtonOnTopRight?: boolean;
  footerContent?: ReactNode;
  dialogContentProps?: DialogContentProps;
  dialogContentClassName?: string;
  /**
   * Whether to show loading progress bar
   * @default false
   */
  isLoading?: boolean;
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

const IndeterminateProgress = ({ show }: { show: boolean }) => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-1 bg-muted overflow-hidden"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="absolute inset-0 h-full bg-muted-foreground/60 animate-progress-indeterminate-1" />
      <div className="absolute inset-0 h-full bg-muted-foreground animate-progress-indeterminate-2" />
    </div>
  );
};

export const CustomDialog = ({
  open,
  onOpenChange,
  title,
  children,
  trigger,
  maxWidth = "4xl",
  disableClose = false,
  className = "",
  showCloseButtonOnTopRight = true,
  footerContent,
  dialogContentProps,
  dialogContentClassName,
  isLoading = false,
}: CustomDialogProps) => {
  const handleClose = () => {
    if (!disableClose) {
      onOpenChange(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        showCloseButton={false}
        className={cn("p-0 max-h-[85vh] rounded-3xl overflow-hidden flex flex-col gap-0", maxWidthClasses[maxWidth], className)}
        {...dialogContentProps}
      >
        <DialogHeader className="flex flex-row items-center justify-between px-5 py-2.5 shrink-0 h-16 relative">
          <DialogTitle>{title}</DialogTitle>
          {showCloseButtonOnTopRight && (
            <Button
              variant="close"
              size="icon"
              onClick={handleClose}
              disabled={disableClose}
            >
              <IoClose />
            </Button>
          )}
          <IndeterminateProgress show={isLoading} />
        </DialogHeader>
        <Separator className="shrink-0" />
        <div className={cn("overflow-y-auto p-5 flex-1", dialogContentClassName)}>{children}</div>
        {footerContent && (
          <>
            <Separator className="shrink-0" />
            <div className="px-5 py-2.5 shrink-0 h-16 flex">{footerContent}</div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

import { useState } from "react";
import { Activity } from "react";
import { ChevronDown } from "lucide-react";
import { FiSkipBack, FiSkipForward } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface PaginationData {
  from: number;
  to: number;
  total: number;
  lastPage: number;
}

interface PaginationProps {
  currentPage: number;
  pageSize: string;
  pageSizeOptions: string[];
  pagination?: PaginationData;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: string) => void;
  isVisible?: boolean;
}

export const Pagination = ({
  currentPage,
  pageSize,
  pageSizeOptions,
  pagination,
  onPageChange,
  onPageSizeChange,
  isVisible = true,
}: PaginationProps) => {
  const [isPerPagePopoverOpen, setIsPerPagePopoverOpen] = useState(false);

  const handlePageSizeChange = (size: string) => {
    onPageSizeChange(size);
    setIsPerPagePopoverOpen(false);
  };

  return (
    <Activity mode={isVisible ? "visible" : "hidden"}>
      <div className="py-2 px-6 w-full flex justify-end items-center">
        <span className="text-xs text-muted-foreground">Baris per halaman:</span>
        <Popover
          open={isPerPagePopoverOpen}
          onOpenChange={setIsPerPagePopoverOpen}
        >
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="ml-2 mr-4"
            >
              {pageSize}
              <ChevronDown className="size-3 ml-1" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-32 p-2"
            align="end"
          >
            <div className="flex flex-col">
              {pageSizeOptions.map((num) => (
                <button
                  key={num}
                  className={`text-left text-sm px-2 py-1 rounded hover:bg-muted/50 transition-colors ${pageSize === num ? "bg-muted" : ""}`}
                  onClick={() => handlePageSizeChange(num)}
                >
                  {num}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <span className="text-xs text-muted-foreground">
          {pagination?.from}–{pagination?.to} dari {pagination?.total}
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="ml-4"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          <FiSkipBack className="size-4 text-muted-foreground" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="ml-4"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <FaChevronLeft className="size-4 text-muted-foreground" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="ml-4"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={pagination ? currentPage === pagination.lastPage : true}
        >
          <FaChevronRight className="size-4 text-muted-foreground" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="ml-4"
          onClick={() => onPageChange(pagination?.lastPage || 1)}
          disabled={currentPage === pagination?.lastPage}
        >
          <FiSkipForward className="size-4 text-muted-foreground" />
        </Button>
      </div>
    </Activity>
  );
};

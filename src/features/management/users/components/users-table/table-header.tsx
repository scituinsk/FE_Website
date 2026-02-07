import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

interface TableHeaderProps {
  allSelected: boolean;
  someSelected: boolean;
  onSelectAll: (checked: boolean) => void;
  sortBy?: string;
  sortOrder?: string;
  onSort: (field: "created_at") => void;
}

export const TableHeader = ({ allSelected, someSelected, onSelectAll, sortBy, sortOrder, onSort }: TableHeaderProps) => {
  return (
    <div className="flex items-center px-6 py-3 text-xs font-medium text-muted-foreground border-b">
      <div
        className="flex items-center justify-center shrink-0"
        style={{ width: "32px", marginRight: "12px" }}
      >
        <input
          type="checkbox"
          checked={allSelected}
          ref={(input) => {
            if (input) {
              input.indeterminate = someSelected;
            }
          }}
          onChange={(e) => onSelectAll(e.target.checked)}
          className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
          aria-label="Select all"
        />
      </div>
      <div
        className="flex items-center"
        style={{ minWidth: "400px", flex: "3 0 400px" }}
      >
        <span>Proyek</span>
      </div>
      <div
        className="flex items-center"
        style={{ minWidth: "120px", paddingLeft: "12px", flex: "1 0 120px" }}
      >
        <span>Visibilitas</span>
      </div>
      <button
        className="flex items-center gap-1 hover:bg-muted/50 rounded px-2 py-1 -mx-2 transition-colors cursor-pointer group"
        style={{ minWidth: "100px", paddingLeft: "12px", flex: "0 0 100px" }}
        onClick={() => onSort("created_at")}
      >
        <span>Tanggal</span>
        {sortBy === "created_at" ? (
          sortOrder === "asc" ? (
            <ArrowUp className="size-3" />
          ) : (
            <ArrowDown className="size-3" />
          )
        ) : (
          <ArrowUpDown className="size-3 opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </button>
      <div
        className="flex items-center justify-end"
        style={{ minWidth: "100px", paddingLeft: "12px", flex: "1 0 100px" }}
      >
        <span>Tech Stack</span>
      </div>
    </div>
  );
};

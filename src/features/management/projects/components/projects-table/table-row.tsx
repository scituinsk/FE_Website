import Link from "next/link";
import Image from "next/image";
import { GlobeIcon, LockIcon, ChevronDown } from "lucide-react";
import { PopoverUpdateVisibility } from "./popover-update-visibility";
import type { Project } from "@/types/project";

interface TableRowProps {
  project: Project;
  isSelected: boolean;
  isHovered: boolean;
  onSelect: (id: number, checked: boolean) => void;
  onHover: (id: number | null) => void;
  visibilityPopoverId: number | null;
  onVisibilityPopoverChange: (id: number | null) => void;
  onVisibilitySave: (projectId: number, newStatus: "PUBLIC" | "PRIVATE") => void;
  isLoading?: boolean;
}

export const TableRow = ({
  project,
  isSelected,
  isHovered,
  onSelect,
  onHover,
  visibilityPopoverId,
  onVisibilityPopoverChange,
  onVisibilitySave,
  isLoading,
}: TableRowProps) => {
  return (
    <div
      className="px-6 py-4 flex items-start border-b hover:bg-muted/50 transition-colors"
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Checkbox */}
      <div
        className="flex items-center justify-center shrink-0"
        style={{ width: "32px", marginRight: "12px", paddingTop: "4px" }}
      >
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onSelect(project.id, e.target.checked)}
          className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
          aria-label={`Select ${project.title}`}
        />
      </div>

      {/* Proyek */}
      <div
        className="flex items-start gap-3"
        style={{ minWidth: "400px", flex: "3 0 400px" }}
      >
        <Link href={`/admin/projects/${project.id}`}>
          <div className="relative w-24 aspect-video rounded overflow-hidden bg-muted shrink-0">
            <Image
              src={project.thumbnail?.url || "https://placehold.co/600x400"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </Link>
        <div className="flex-1 min-w-0">
          <Link
            href={`/admin/projects/${project.id}`}
            className="font-medium text-sm hover:text-primary line-clamp-1"
          >
            {project.title}
          </Link>
          <p className="text-xs text-muted-foreground line-clamp-1">{project.description}</p>
        </div>
      </div>

      {/* Visibilitas */}
      <div
        className="flex items-center"
        style={{ minWidth: "120px", paddingLeft: "12px", flex: "1 0 120px" }}
      >
        <PopoverUpdateVisibility
          projectId={project.id}
          currentStatus={project.status}
          isOpen={visibilityPopoverId === project.id}
          onOpenChange={(open) => onVisibilityPopoverChange(open ? project.id : null)}
          onSave={(newStatus) => onVisibilitySave(project.id, newStatus)}
          onCancel={() => onVisibilityPopoverChange(null)}
          isLoading={isLoading}
        >
          {project.status === "PRIVATE" ? (
            <button className="flex items-center gap-1 hover:bg-muted/80 rounded px-2 py-1 -mx-2 transition-colors group">
              <LockIcon className="size-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Pribadi</span>
              {isHovered && <ChevronDown className="size-3 text-muted-foreground" />}
            </button>
          ) : (
            <button className="flex items-center gap-1 hover:bg-muted/80 rounded px-2 py-1 -mx-2 transition-colors group">
              <GlobeIcon className="size-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">Publik</span>
              {isHovered && <ChevronDown className="size-3 text-muted-foreground" />}
            </button>
          )}
        </PopoverUpdateVisibility>
      </div>

      {/* Tanggal */}
      <div
        className="flex items-center text-xs text-muted-foreground"
        style={{ minWidth: "100px", paddingLeft: "12px", flex: "0 0 100px" }}
      >
        {Intl.DateTimeFormat("id-ID", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }).format(new Date(project.createdAt))}
      </div>

      {/* Tech Stack */}
      <div
        className="flex items-center justify-end"
        style={{ minWidth: "100px", paddingLeft: "12px", flex: "1 0 100px" }}
      >
        <div className="flex gap-1 items-center">
          {project.technologies.length === 0 && "-"}
          {project.technologies.slice(0, 3).map((tech) => (
            <div
              key={tech.id}
              className="relative w-6 h-6 rounded overflow-hidden bg-muted"
              title={tech.name}
            >
              <Image
                src={tech.logoUrl}
                alt={tech.name}
                fill
                className="object-contain p-0.5"
              />
            </div>
          ))}
          {project.technologies.length > 3 && <span className="text-xs text-muted-foreground ml-1">+{project.technologies.length - 3}</span>}
        </div>
      </div>
    </div>
  );
};

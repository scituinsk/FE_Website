"use client";

import { useState, useEffect, Activity } from "react";
import { GlobeIcon, Plus, ChevronDown, ArrowUpDown, ArrowUp, ArrowDown, LockIcon } from "lucide-react";
import { IoClose, IoFilterSharp } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CustomDialog } from "@/components/custom-dialog";

import { FiSkipBack, FiSkipForward } from "react-icons/fi";

import { CreateProjectForm } from "../components/create-project-form";
import { useGetProjects } from "../queries/use-get-projects";
import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LIMITS, useProjectsFilters } from "../hooks/use-projects-filters";
import { useUpdateVisibility } from "../mutations/use-update-visibility";

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

const PopoverUpdateVisibility = ({
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

const DEBOUNCE_DELAY = 500;

export const ManagementProjectsPage = () => {
  const [filters, setFilters] = useProjectsFilters();

  // Local state for input (immediate update)
  const [searchInput, setSearchInput] = useState(filters.search || "");

  // Dialog state
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Hover state for rows
  const [hoveredRowId, setHoveredRowId] = useState<number | null>(null);

  // Popover open state for visibility
  const [visibilityPopoverId, setVisibilityPopoverId] = useState<number | null>(null);

  // Popover open state for bulk visibility update
  const [isBulkVisibilityPopoverOpen, setIsBulkVisibilityPopoverOpen] = useState(false);

  // Popover open state for per page selector
  const [isPerPagePopoverOpen, setIsPerPagePopoverOpen] = useState(false);

  // Multi-select state
  const [selectedIds, setSelectedIds] = useState<Set<number>>(new Set());

  const { mutate, isPending } = useUpdateVisibility({
    mutationConfig: {
      onSuccess: () => {
        // Invalidate queries to refetch projects data
        setSelectedIds(new Set());
      },
    },
  });

  // Debounce effect - update URL search param after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== filters.search) {
        setFilters({ search: searchInput, page: 1 });
      }
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [searchInput, filters.search, setFilters]);

  // Sync local input with URL search param (for browser back/forward)
  useEffect(() => {
    setSearchInput(filters.search || "");
  }, [filters.search]);

  // Fetch projects with pagination and search
  const { data, isLoading } = useGetProjects({
    params: {
      page: filters.page,
      search: filters.search,
      per_page: filters.limit,
      sort_by: filters.sortBy,
      sort_dir: filters.sortOrder,
    },
  });
  const projects = data?.data;

  // Handle select all
  const handleSelectAll = (checked: boolean) => {
    if (checked && projects) {
      setSelectedIds(new Set(projects.map((p) => p.id)));
    } else {
      setSelectedIds(new Set());
    }
  };

  // Handle individual select
  const handleSelectOne = (id: number, checked: boolean) => {
    const newSelected = new Set(selectedIds);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedIds(newSelected);
  };

  // Check if all are selected
  const allSelected = !!(projects && projects.length > 0 && selectedIds.size === projects.length);
  const someSelected = !!(selectedIds.size > 0 && selectedIds.size < (projects?.length || 0));

  // Handle sorting
  const handleSort = (field: "created_at") => {
    if (filters.sortBy === field) {
      // Toggle order if same field
      setFilters({ sortOrder: filters.sortOrder === "asc" ? "desc" : "asc", page: 1 });
    } else {
      // Set new field with default desc order
      setFilters({ sortBy: field, sortOrder: "desc", page: 1 });
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex py-4 px-6 gap-2 justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Kelola proyek portofolio</h1>
          <CustomDialog
            open={isDialogOpen}
            onOpenChange={setIsDialogOpen}
            title="Tambah proyek"
            maxWidth="4xl"
            trigger={
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Tambah proyek
              </Button>
            }
          >
            <CreateProjectForm onSuccess={() => setIsDialogOpen(false)} />
          </CustomDialog>
        </div>
        <Separator />

        {/* Filter and Header */}
        <div className="sticky top-16 z-10 bg-background">
          {/* Filter */}
          <div className="py-2 px-6 flex items-center border-b">
            <div className="shrink-0 mr-3">
              <IoFilterSharp className="size-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Filter"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
            />
          </div>

          <div
            style={{
              maxHeight: selectedIds.size > 0 ? "80px" : "0",
              transition: "max-height 300ms cubic-bezier(0, 0, 0.2, 1)",
            }}
            className="overflow-hidden"
          >
            <div className="px-6 py-1 h-16 bg-white text-gray-800 flex items-center justify-between border-b">
              <div className="flex items-center">
                <span className="mr-12">{selectedIds.size} dipilih</span>
                <div className="mx-4 h-12 w-px bg-gray-300" />
                <PopoverUpdateVisibility
                  currentStatus="PUBLIC"
                  isOpen={isBulkVisibilityPopoverOpen}
                  onOpenChange={setIsBulkVisibilityPopoverOpen}
                  onSave={(newStatus) => {
                    mutate(
                      {
                        project_ids: Array.from(selectedIds),
                        visibility: newStatus,
                      },
                      {
                        onSuccess: () => {
                          setIsBulkVisibilityPopoverOpen(false);
                        },
                      },
                    );
                  }}
                  onCancel={() => setIsBulkVisibilityPopoverOpen(false)}
                  isLoading={isPending}
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
                onClick={() => setSelectedIds(new Set())}
              >
                <IoClose />
              </Button>
            </div>
          </div>
        </div>

        {/* Table Header */}
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
              onChange={(e) => handleSelectAll(e.target.checked)}
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
            onClick={() => handleSort("created_at")}
          >
            <span>Tanggal</span>
            {filters.sortBy === "created_at" ? (
              filters.sortOrder === "asc" ? (
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
      </div>

      {/* Projects Grid */}
      <div>
        {isLoading ? (
          <div className="h-[30dvh] flex items-center justify-center">
            <div className="text-sm text-muted-foreground">Loading...</div>
          </div>
        ) : !projects || projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="aspect-square relative size-[200px]">
              <Image
                src="https://www.gstatic.com/youtube/img/creator/no_match_illustration_v3_darkmode.svg"
                alt="No projects"
                fill
              />
            </div>
            <p className="text-sm text-muted-foreground">Tidak ada proyek yang cocok</p>
          </div>
        ) : (
          <div className="flex flex-col">
            {projects.map((project) => (
              <div
                key={project.id}
                className="px-6 py-4 flex items-start border-b hover:bg-muted/50 transition-colors"
                onMouseEnter={() => setHoveredRowId(project.id)}
                onMouseLeave={() => setHoveredRowId(null)}
              >
                {/* Checkbox */}
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{ width: "32px", marginRight: "12px", paddingTop: "4px" }}
                >
                  <input
                    type="checkbox"
                    checked={selectedIds.has(project.id)}
                    onChange={(e) => handleSelectOne(project.id, e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                    aria-label={`Select ${project.title}`}
                  />
                </div>

                {/* Proyek */}
                <div
                  className="flex items-start gap-3"
                  style={{ minWidth: "400px", flex: "3 0 400px" }}
                >
                  <Link href={`/admin/manage-projects/${project.id}`}>
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
                      href={`/admin/manage-projects/${project.id}`}
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
                    onOpenChange={(open) => setVisibilityPopoverId(open ? project.id : null)}
                    onSave={(newStatus) => {
                      mutate(
                        {
                          project_ids: [project.id],
                          visibility: newStatus,
                        },
                        {
                          onSuccess: () => {
                            setVisibilityPopoverId(null);
                          },
                        },
                      );
                    }}
                    onCancel={() => setVisibilityPopoverId(null)}
                    isLoading={isPending}
                  >
                    {project.status === "PRIVATE" ? (
                      <button className="flex items-center gap-1 hover:bg-muted/80 rounded px-2 py-1 -mx-2 transition-colors group">
                        <LockIcon className="size-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Pribadi</span>
                        {hoveredRowId === project.id && <ChevronDown className="size-3 text-muted-foreground" />}
                      </button>
                    ) : (
                      <button className="flex items-center gap-1 hover:bg-muted/80 rounded px-2 py-1 -mx-2 transition-colors group">
                        <GlobeIcon className="size-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Publik</span>
                        {hoveredRowId === project.id && <ChevronDown className="size-3 text-muted-foreground" />}
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
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-muted-foreground ml-1">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      <Activity mode={projects && projects?.length > 0 ? "visible" : "hidden"}>
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
                {filters.limit}
                <ChevronDown className="size-3 ml-1" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-32 p-2"
              align="end"
            >
              <div className="flex flex-col">
                {LIMITS.map((num) => (
                  <button
                    key={num}
                    className={`text-left text-sm px-2 py-1 rounded hover:bg-muted/50 transition-colors ${filters.limit === num ? "bg-muted" : ""}`}
                    onClick={() => {
                      setFilters({ limit: num, page: 1 });
                      setIsPerPagePopoverOpen(false);
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          <span className="text-xs text-muted-foreground">
            {data?.pagination.from}–{data?.pagination.to} dari {data?.pagination.total}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="ml-4"
            onClick={() =>
              setFilters({
                page: 1,
              })
            }
            disabled={filters.page === 1}
          >
            <FiSkipBack className="size-4 text-muted-foreground" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="ml-4"
            onClick={() => {
              setFilters((prev) => (prev.page && prev.page > 1 ? { page: prev.page - 1 } : { page: 1 }));
            }}
            disabled={filters.page === 1}
          >
            <FaChevronLeft className="size-4 text-muted-foreground" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="ml-4"
            onClick={() =>
              setFilters({
                page: data ? filters.page + 1 : 1,
              })
            }
            disabled={data ? filters.page === data.pagination.lastPage : true}
          >
            <FaChevronRight className="size-4 text-muted-foreground" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="ml-4"
            onClick={() =>
              setFilters({
                page: data ? data.pagination.lastPage : 1,
              })
            }
            disabled={filters.page === data?.pagination.lastPage}
          >
            <FiSkipForward className="size-4 text-muted-foreground" />
          </Button>
        </div>
      </Activity>
      <Separator />
    </div>
  );
};

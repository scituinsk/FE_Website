"use client";

import { useState, useEffect, Activity } from "react";
import { Plus, ArrowUpDown, ArrowUp, ArrowDown, GlobeIcon, LockIcon, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CustomDialog } from "@/components/custom-dialog";

import { CreateProjectForm } from "../components/create-project-form";
import { useGetProjects } from "../queries/use-get-projects";
import { LIMITS, useProjectsFilters } from "../hooks/use-projects-filters";
import { useUpdateVisibility } from "../mutations/use-update-visibility";
import { BulkActionsBar, EmptyState, FilterBar, Pagination, PopoverUpdateVisibility } from "../components/projects-table";

const DEBOUNCE_DELAY = 500;

export const ManagementProjectsPage = () => {
  const [filters, setFilters] = useProjectsFilters();
  const [searchInput, setSearchInput] = useState(filters.search || "");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [hoveredRowId, setHoveredRowId] = useState<number | null>(null);
  const [visibilityPopoverId, setVisibilityPopoverId] = useState<number | null>(null);
  const [isBulkVisibilityPopoverOpen, setIsBulkVisibilityPopoverOpen] = useState(false);
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
  const { data, isLoading, isRefetching } = useGetProjects({
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
        <div className="sticky top-0 z-10 bg-background">
          {/* Filter */}
          <FilterBar
            value={searchInput}
            onChange={setSearchInput}
          />

          <BulkActionsBar
            selectedCount={selectedIds.size}
            isOpen={selectedIds.size > 0}
            onClearSelection={() => setSelectedIds(new Set())}
            onVisibilitySave={(newStatus) => {
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
            isVisibilityPopoverOpen={isBulkVisibilityPopoverOpen}
            onVisibilityPopoverOpenChange={setIsBulkVisibilityPopoverOpen}
            isLoading={isPending}
          />

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
      </div>

      {/* Projects Grid */}
      <Activity mode={isLoading ? "hidden" : "visible"}>
        {!projects || projects.length === 0 ? (
          <EmptyState />
        ) : (
          <div
            className="flex flex-col"
            style={{
              opacity: isRefetching ? "0.5" : "1",
              pointerEvents: isRefetching ? "none" : "auto",
            }}
          >
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
      </Activity>

      {/* Pagination */}
      <Pagination
        currentPage={filters.page}
        pageSize={filters.limit}
        pageSizeOptions={LIMITS}
        pagination={data?.pagination}
        onPageChange={(page) => setFilters({ page })}
        onPageSizeChange={(limit) => setFilters({ limit, page: 1 })}
        isVisible={!!(projects && projects.length > 0)}
      />
      <Separator />
      <div className="h-20" />
    </div>
  );
};

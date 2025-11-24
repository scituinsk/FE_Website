"use client";

import { useState, useEffect } from "react";
import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { Plus, Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { CreateProjectForm } from "../components/create-project-form";
import { ProjectGrid } from "../components/project-grid";
import { useGetProjects } from "../queries/use-get-projects";

const PER_PAGE = 10;
const DEBOUNCE_DELAY = 500; // 500ms delay

export const ManagementProjectsPage = () => {
  // Nuqs state management for URL params
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [search, setSearch] = useQueryState("search", parseAsString.withDefault(""));

  // Local state for input (immediate update)
  const [searchInput, setSearchInput] = useState(search);

  // Dialog state
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Debounce effect - update URL search param after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== search) {
        setSearch(searchInput);
        setPage(1); // Reset to page 1 when search changes
      }
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [searchInput, search, setSearch, setPage]);

  // Sync local input with URL search param (for browser back/forward)
  useEffect(() => {
    setSearchInput(search);
  }, [search]);

  // Fetch projects with pagination and search
  const { data, isLoading } = useGetProjects({
    params: {
      page,
      search,
      per_page: PER_PAGE,
    },
  });

  const pagination = data?.pagination;
  const projects = data?.data;

  // Generate pagination items
  const generatePaginationItems = () => {
    if (!pagination) return null;

    const { page: currentPage, totalPages } = pagination;
    const items = [];

    // Show max 5 page numbers
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    // First page + ellipsis
    if (startPage > 1) {
      items.push(
        <PaginationItem key="1">
          <PaginationLink
            href="#"
            onClick={() => setPage(1)}
            isActive={currentPage === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>
      );
      if (startPage > 2) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    // Middle pages
    for (let i = startPage; i <= endPage; i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            onClick={() => setPage(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Ellipsis + last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href="#"
            onClick={() => setPage(totalPages)}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Manage Projects</h1>
        <p className="text-muted-foreground">Kelola portfolio dan proyek-proyek SCIT</p>
      </div>

      {/* Projects List */}
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle className="lg:text-2xl">Projects</CardTitle>
              <CardDescription>
                Daftar semua proyek yang telah dikembangkan
                {pagination && ` (${pagination.total} total)`}
              </CardDescription>
            </div>
            <Dialog
              open={isDialogOpen}
              onOpenChange={setIsDialogOpen}
            >
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Tambah Project
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle> Tambah Project</DialogTitle>
                  <DialogDescription>Tambahkan proyek baru ke portfolio</DialogDescription>
                </DialogHeader>
                <CreateProjectForm onSuccess={() => setIsDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filter */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search projects by title, description, or tech..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <Separator />

          {/* Projects Grid */}
          <ProjectGrid
            projects={projects}
            isLoading={isLoading}
          />

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => setPage(Math.max(1, page - 1))}
                    className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>

                {generatePaginationItems()}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => setPage(Math.min(pagination.totalPages, page + 1))}
                    className={page === pagination.totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

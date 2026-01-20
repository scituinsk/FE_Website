"use client";

import { Search, Sparkles, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";

import { useProjectsFilters } from "../hooks/use-projects-filters";

export const ProjectFilterSection = () => {
  const [filters, setFilters] = useProjectsFilters();

  const [searchValue, setSearchValue] = useState(filters.search ?? "");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const debouncedSearch = useDebounce(searchValue, 500);

  // Sync debounced search with URL params
  useEffect(() => {
    const trimmedValue = debouncedSearch.trim();
    setFilters((prev) => ({
      ...prev,
      search: trimmedValue || null,
      page: 1, // Reset to first page when search changes
    }));
  }, [debouncedSearch, setFilters]);

  // Sync URL params with local state when filters change externally
  useEffect(() => {
    setSearchValue(filters.search ?? "");
  }, [filters.search]);

  const handleResetFilters = () => {
    setSearchValue("");
    setFilters({
      search: null,
      page: 1,
    });
  };

  const hasActiveFilters = !!filters.search;

  return (
    <div className="mb-12">
      {/* Hero Search Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 p-8 md:p-12 mb-6">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Temukan Proyek Menarik</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Cari Proyek yang Anda Inginkan</h2>
            <p className="text-muted-foreground text-lg">Telusuri berbagai proyek inovatif dari komunitas kami</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className={`relative group transition-all duration-300 ${isSearchFocused ? "scale-105" : ""}`}>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative flex items-center gap-2">
                <div className="relative flex-1">
                  <Search
                    className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
                      isSearchFocused ? "text-primary" : "text-muted-foreground"
                    }`}
                  />
                  <Input
                    placeholder="Cari berdasarkan nama proyek, teknologi, atau deskripsi..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="pl-12 pr-4 h-14 text-base rounded-xl border-2 bg-background/80 backdrop-blur-sm focus:border-primary transition-all"
                  />
                </div>
                {searchValue && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSearchValue("")}
                    className="h-14 w-14 rounded-xl hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2">
            {filters.search && (
              <Badge
                variant="secondary"
                className="gap-1.5 px-3 py-1.5"
              >
                <Search className="h-3 w-3" />
                &quot;{filters.search.length > 30 ? filters.search.slice(0, 30) + "..." : filters.search}&quot;
              </Badge>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleResetFilters}
              className="gap-2 h-8"
            >
              <X className="h-4 w-4" />
              Hapus Filter
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

"use client";
import { Search, Sparkles, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ProjectFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  totalResults: number;
  onResetFilters: () => void;
}

export const ProjectFilters = ({ search, setSearch, totalResults, onResetFilters }: ProjectFiltersProps) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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
              <span className="text-sm font-medium text-primary">Discover Amazing Projects</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Find Your Next Inspiration</h2>
            <p className="text-muted-foreground text-lg">Explore innovative projects from our talented community</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className={`relative group transition-all duration-300 ${isSearchFocused ? "scale-105" : ""}`}>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="relative flex items-center">
                <Search
                  className={`absolute left-4 h-5 w-5 transition-colors duration-300 ${isSearchFocused ? "text-primary" : "text-muted-foreground"}`}
                />
                <Input
                  placeholder="Search by project name, technology, or description..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="pl-12 pr-4 h-14 text-base rounded-xl border-2 bg-background/80 backdrop-blur-sm focus:border-primary transition-all"
                />
                {search && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearch("")}
                    className="absolute right-2 h-8 w-8 p-0 rounded-full hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Summary */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted/50 border border-border">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-semibold text-foreground">
            {totalResults} {totalResults === 1 ? "Project" : "Projects"} Found
          </span>
        </div>

        {/* Active Search Badge */}
        {search && (
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="gap-1.5 px-3 py-1.5"
            >
              <Search className="h-3 w-3" />
              &quot;{search.length > 30 ? search.slice(0, 30) + "..." : search}&quot;
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={onResetFilters}
              className="gap-2 h-8"
            >
              <X className="h-4 w-4" />
              Clear
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

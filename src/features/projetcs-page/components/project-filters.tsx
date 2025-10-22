"use client";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/constants/projects";

interface ProjectFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  tech: string;
  setTech: (value: string) => void;
  totalResults: number;
  onResetFilters: () => void;
}

export const ProjectFilters = ({ search, setSearch, tech, setTech, totalResults, onResetFilters }: ProjectFiltersProps) => {
  // Extract unique technologies from all projects
  const allTechnologies = Array.from(new Set(PROJECTS.flatMap((project) => project.tech || []))).sort();

  const hasActiveFilters = search || tech !== "all";

  return (
    <Card className="p-6 mb-8">
      <div className="space-y-4">
        {/* Search and Reset Row */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects by title, description, or technology..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {hasActiveFilters && (
            <Button
              variant="outline"
              onClick={onResetFilters}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Reset Filters
            </Button>
          )}
        </div>

        {/* Filters Row */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select
                value={tech}
                onValueChange={setTech}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by technology" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Technologies</SelectItem>
                  {allTechnologies.map((technology) => (
                    <SelectItem
                      key={technology}
                      value={technology.toLowerCase()}
                    >
                      {technology}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {totalResults} project{totalResults !== 1 ? "s" : ""} found
            </span>
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm text-muted-foreground">Active filters:</span>
            {search && (
              <Badge
                variant="secondary"
                className="flex items-center gap-1"
              >
                Search: "{search}"
                <X
                  className="h-3 w-3 cursor-pointer hover:text-destructive"
                  onClick={() => setSearch("")}
                />
              </Badge>
            )}
            {tech !== "all" && (
              <Badge
                variant="secondary"
                className="flex items-center gap-1"
              >
                Tech: {tech}
                <X
                  className="h-3 w-3 cursor-pointer hover:text-destructive"
                  onClick={() => setTech("all")}
                />
              </Badge>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GALLERY_YEARS, GALLERY_MONTHS } from "@/constants/gallery";
import { Filter, X } from "lucide-react";

interface GalleryFiltersProps {
  selectedYear: string | null;
  selectedMonth: string | null;
  onYearChange: (year: string | null) => void;
  onMonthChange: (month: string | null) => void;
}

export const GalleryFilters = ({ selectedYear, selectedMonth, onYearChange, onMonthChange }: GalleryFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilters = selectedYear || selectedMonth;

  const clearAllFilters = () => {
    onYearChange(null);
    onMonthChange(null);
  };

  return (
    <div className="space-y-4">
      {/* Mobile Filter Toggle */}
      <div className="flex items-center justify-between gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden"
        >
          <Filter className="size-4 mr-2" />
          Filter
        </Button>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-muted-foreground"
          >
            <X className="size-4 mr-1" />
            Clear Filters
          </Button>
        )}
      </div>

      {/* Filters */}
      <div
        className={`
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3
          ${showFilters ? "block" : "hidden md:grid"}
        `}
      >
        {/* Year Filter */}
        <Select
          value={selectedYear || "all"}
          onValueChange={(value) => onYearChange(value === "all" ? null : value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Semua Tahun" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Tahun</SelectItem>
            {GALLERY_YEARS.map((year) => (
              <SelectItem
                key={year}
                value={year.toString()}
              >
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Month Filter */}
        <Select
          value={selectedMonth || "all"}
          onValueChange={(value) => onMonthChange(value === "all" ? null : value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Semua Bulan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua Bulan</SelectItem>
            {GALLERY_MONTHS.map((month, index) => (
              <SelectItem
                key={month}
                value={index.toString()}
              >
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Clear Button (Desktop) */}
        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={clearAllFilters}
            className="hidden md:flex"
          >
            <X className="size-4 mr-2" />
            Reset Filter
          </Button>
        )}
      </div>
    </div>
  );
};

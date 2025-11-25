"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Search } from "lucide-react";
import Image from "next/image";

interface TechStack {
  id: string;
  name: string;
  icon: string;
}

interface ProjectTechStackProps {
  projectId: string;
}

// Sample available tech stacks (will be fetched from BE)
const availableTechStacks: TechStack[] = [
  { id: "1", name: "React", icon: "https://icon.icepanel.io/Technology/svg/React.svg" },
  { id: "2", name: "Next.js", icon: "https://icon.icepanel.io/Technology/svg/Next.js.svg" },
  { id: "3", name: "Node.js", icon: "https://icon.icepanel.io/Technology/svg/Node.js.svg" },
  { id: "4", name: "NestJS", icon: "https://icon.icepanel.io/Technology/svg/Nest.js.svg" },
  { id: "5", name: "Python", icon: "https://icon.icepanel.io/Technology/svg/Python.svg" },
  { id: "6", name: "TypeScript", icon: "https://icon.icepanel.io/Technology/svg/TypeScript.svg" },
  { id: "7", name: "PostgreSQL", icon: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg" },
  { id: "8", name: "MongoDB", icon: "https://icon.icepanel.io/Technology/svg/MongoDB.svg" },
  { id: "9", name: "Docker", icon: "https://icon.icepanel.io/Technology/svg/Docker.svg" },
  { id: "10", name: "Tailwind CSS", icon: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg" },
];

export function ProjectTechStack({ projectId }: ProjectTechStackProps) {
  // Initially no tech stacks selected
  const [selectedTechStacks, setSelectedTechStacks] = useState<TechStack[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter available tech stacks based on search query
  const filteredTechStacks = useMemo(() => {
    return availableTechStacks.filter(
      (tech) => !selectedTechStacks.find((t) => t.id === tech.id) && tech.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, selectedTechStacks]);

  // Pagination
  const totalPages = Math.ceil(filteredTechStacks.length / itemsPerPage);
  const paginatedTechStacks = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTechStacks.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTechStacks, currentPage]);

  // Reset to page 1 when search query changes
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleAddTech = (tech: TechStack) => {
    if (!selectedTechStacks.find((t) => t.id === tech.id)) {
      setSelectedTechStacks([...selectedTechStacks, tech]);
    }
  };

  const handleRemoveTech = (techId: string) => {
    setSelectedTechStacks(selectedTechStacks.filter((t) => t.id !== techId));
  };

  const handleSave = () => {
    // TODO: API call to save tech stacks
    console.log(selectedTechStacks);
    setIsSelecting(false);
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl">Tech Stack</CardTitle>
            <CardDescription>Technologies used in this project</CardDescription>
          </div>
          {!isSelecting ? (
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsSelecting(true)}
            >
              Manage Tech Stack
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={handleSave}
            >
              Save Changes
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Selected Tech Stacks */}
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-3">Selected Technologies</h4>
          {selectedTechStacks.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {selectedTechStacks.map((tech) => (
                <div
                  key={tech.id}
                  className="relative group"
                >
                  <div className="flex items-center gap-2 bg-muted rounded-lg p-3 pr-10 border border-border hover:border-primary transition-colors">
                    <div className="relative h-8 w-8 shrink-0">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium text-sm">{tech.name}</span>
                  </div>
                  {isSelecting && (
                    <button
                      onClick={() => handleRemoveTech(tech.id)}
                      className="absolute -top-2 -right-2 bg-destructive text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm">No technologies selected yet. Click "Manage Tech Stack" to add.</p>
          )}
        </div>

        {/* Available Tech Stacks - Only show when selecting */}
        {isSelecting && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-muted-foreground">Available Technologies</h4>
              <p className="text-xs text-muted-foreground">
                {filteredTechStacks.length} of {availableTechStacks.length - selectedTechStacks.length} technologies
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search technologies..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Tech Stack Grid */}
            {paginatedTechStacks.length > 0 ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {paginatedTechStacks.map((tech) => (
                    <button
                      key={tech.id}
                      onClick={() => handleAddTech(tech)}
                      className="flex items-center gap-2 bg-card border border-border rounded-lg p-3 hover:border-primary hover:bg-primary/5 transition-all text-left"
                    >
                      <div className="relative h-8 w-8 shrink-0">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="font-medium text-sm">{tech.name}</span>
                    </button>
                  ))}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <span className="text-sm text-muted-foreground px-2">
                      Page {currentPage} of {totalPages}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <p className="text-center text-muted-foreground text-sm py-8">No technologies found matching "{searchQuery}"</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

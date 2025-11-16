"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
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
    setIsSelecting(false);
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
            <h4 className="text-sm font-medium text-muted-foreground mb-3">Available Technologies</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {availableTechStacks
                .filter((tech) => !selectedTechStacks.find((t) => t.id === tech.id))
                .map((tech) => (
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
          </div>
        )}
      </CardContent>
    </Card>
  );
}

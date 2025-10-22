"use client";

import { useTheme } from "next-themes";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { staggerItem } from "@/lib/hooks/use-scroll-animation";
import { getTechStack } from "@/constants/tech-stacks";

interface TechStackListProps {
  techNames: string[];
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const TechStackList = ({ techNames, size = "md", className = "" }: TechStackListProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`flex gap-2 items-center flex-nowrap overflow-hidden ${className}`}>
        {techNames.map((techName, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center justify-center p-2 bg-secondary/50 rounded-lg"
            title={techName}
          >
            <div className="w-4 h-4 bg-muted rounded animate-pulse" />
          </div>
        ))}
      </div>
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const sizeClasses = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
    >
      <div className="flex gap-2 items-center flex-wrap">
        <AnimatePresence mode="sync">
          {techNames.slice(0, 8).map((techName, index) => {
            const techStack = getTechStack(techName);

            return (
              <motion.div
                key={`${techName}-${index}`}
                variants={staggerItem}
                initial="hidden"
                animate="visible"
                exit="hidden"
                layout
                className={`
                  flex shrink-0 items-center justify-center bg-secondary/50 rounded-lg
                  transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-secondary
                  ${sizeClasses[size]}
                `}
                title={techName} // Tooltip untuk nama tech stack
              >
                {techStack ? (
                  <div className="relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={isDark ? techStack.logo.dark : techStack.logo.light}
                      alt={techStack.name}
                      className={`${iconSizes[size]} object-contain transition-opacity duration-300`}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = "block";
                      }}
                      loading="lazy"
                    />
                    <div
                      className={`${iconSizes[size]} rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground`}
                      style={{
                        backgroundColor: techStack.color + "20",
                        color: techStack.color,
                        display: "none",
                      }}
                    >
                      {techStack.name.charAt(0)}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`${iconSizes[size]} rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground`}
                  >
                    {techName.charAt(0)}
                  </div>
                )}
              </motion.div>
            );
          })}
          {techNames.length > 8 && (
            <motion.div
              variants={staggerItem}
              initial="hidden"
              animate="visible"
              className={`
                flex shrink-0 items-center justify-center bg-muted/70 rounded-lg
                ${sizeClasses[size]}
              `}
              title={`+${techNames.length - 8} more technologies`}
            >
              <span className={`text-muted-foreground font-medium ${size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"}`}>
                +{techNames.length - 8}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// Komponen untuk menampilkan single tech stack dengan tooltip
interface TechStackItemProps {
  techName: string;
  size?: "sm" | "md" | "lg";
}

export const TechStackItem = ({ techName, size = "md" }: TechStackItemProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex items-center justify-center p-2 bg-secondary/50 rounded-lg"
        title={techName}
      >
        <div className="w-4 h-4 bg-muted rounded animate-pulse" />
      </div>
    );
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  const techStack = getTechStack(techName);

  const sizeClasses = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className="group relative">
      <div
        className={`
        flex items-center justify-center bg-secondary/50 rounded-lg
        transition-all duration-300 hover:shadow-md hover:scale-105 hover:bg-secondary
        ${sizeClasses[size]}
      `}
        title={techName}
      >
        {techStack ? (
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={isDark ? techStack.logo.dark : techStack.logo.light}
              alt={techStack.name}
              className={`${iconSizes[size]} object-contain transition-opacity duration-300`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "block";
              }}
              loading="lazy"
            />
            <div
              className={`${iconSizes[size]} rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground`}
              style={{
                backgroundColor: techStack.color + "20",
                color: techStack.color,
                display: "none",
              }}
            >
              {techStack.name.charAt(0)}
            </div>
          </div>
        ) : (
          <div className={`${iconSizes[size]} rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground`}>
            {techName.charAt(0)}
          </div>
        )}
      </div>
    </div>
  );
};

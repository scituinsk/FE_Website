import Image from "next/image";

interface SimpleTechStackProps {
  techNames: string[];
  size?: "sm" | "md" | "lg";
  className?: string;
  maxDisplay?: number;
}

export const SimpleTechStack = ({ techNames, size = "md", className = "", maxDisplay = 8 }: SimpleTechStackProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const displayedTech = techNames.slice(0, maxDisplay);
  const remainingCount = techNames.length - maxDisplay;

  return (
    <div className={`flex flex-wrap gap-2 items-center ${className}`}>
      {displayedTech.map((techName, index) => {
        return (
          <div
            key={`${techName}-${index}`}
            className={`
              relative aspect-square flex shrink-0 items-center justify-center 
              transition-all duration-300
              ${sizeClasses[size]}
            `}
            title={techName}
          >
            <Image
              src="https://icon.icepanel.io/Technology/svg/React.svg"
              alt={techName}
              fill
              className="object-contain"
            />
          </div>
        );
      })}

      {remainingCount > 0 && (
        <div
          className={`
            flex shrink-0 items-center justify-center bg-muted/70 rounded-lg
            ${sizeClasses[size]}
          `}
          title={`+${remainingCount} more technologies`}
        >
          <span className={`text-muted-foreground font-medium ${size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-base"}`}>
            +{remainingCount}
          </span>
        </div>
      )}
    </div>
  );
};

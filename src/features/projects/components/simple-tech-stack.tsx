import Image from "next/image";

interface SimpleTechStackProps {
  technologies: {
    id: number;
    name: string;
    logoUrl: string;
    createdAt: string;
    updatedAt: string;
  }[];
  size?: "sm" | "md" | "lg";
  className?: string;
  maxDisplay?: number;
}

export const SimpleTechStack = ({ technologies, size = "md", className = "", maxDisplay = 8 }: SimpleTechStackProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  return (
    <div className={`flex flex-wrap gap-2 items-center ${className}`}>
      {technologies.map((techName) => {
        return (
          <div
            key={techName.id}
            className={`
              relative aspect-square flex shrink-0 items-center justify-center 
              transition-all duration-300
              ${sizeClasses[size]}
            `}
            title={techName.name}
          >
            <Image
              src={techName.logoUrl}
              alt={techName.name}
              fill
              className="object-contain"
            />
          </div>
        );
      })}
    </div>
  );
};

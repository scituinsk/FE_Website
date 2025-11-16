import { Skeleton } from "@/components/ui/skeleton";

export const ProjectCardSkeleton = () => {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-accent">
      <Skeleton className="w-full h-[210px]" />
      <div className=" p-6">
        <Skeleton className="w-2/4 h-5" />
        <Skeleton className="w-4/4 h-8 mt-2" />
      </div>
      <div className="flex flex-col p-6 pt-0">
        <div className="flex gap-2">
          {[...Array(4)].map((_, idx) => (
            <Skeleton
              key={idx}
              className="w-8 h-8 rounded-full"
            />
          ))}
        </div>
        <Skeleton className="h-9 mt-4" />
      </div>
    </div>
  );
};

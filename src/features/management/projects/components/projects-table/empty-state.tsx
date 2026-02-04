import Image from "next/image";

interface EmptyStateProps {
  message?: string;
  imageUrl?: string;
}

export const EmptyState = ({
  message = "Tidak ada proyek yang cocok",
  imageUrl = "https://www.gstatic.com/youtube/img/creator/no_match_illustration_v3_darkmode.svg",
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="aspect-square relative size-[200px]">
        <Image
          src={imageUrl}
          alt="Empty state"
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
};

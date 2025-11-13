import Image from "next/image";
import { DivisionMember } from "@/constants/division-members";

interface DivisionMemberCardProps {
  member: DivisionMember;
}

export const DivisionMemberCard = ({ member }: DivisionMemberCardProps) => {
  return (
    <div className="flex flex-col items-center p-3 sm:p-4">
      <div className="relative size-24 sm:size-28 md:size-32 aspect-square rounded-full overflow-hidden bg-muted">
        <Image
          fill
          alt={member.name}
          src={member.imageUrl}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center mt-3 text-center">
        <h3 className="text-xs sm:text-sm md:text-base font-semibold leading-tight">{member.name}</h3>
        {/* <p className="mt-1 text-xs sm:text-xs md:text-sm text-muted-foreground">{member.role}</p> */}
        <p className="text-xs text-muted-foreground mt-0.5">{member.angkatan}</p>
      </div>
    </div>
  );
};

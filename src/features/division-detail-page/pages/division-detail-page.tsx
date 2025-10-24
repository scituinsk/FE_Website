import { DivisionData } from "@/constants/division-members";
import { HeroSection } from "../sections/hero-section";
import { MembersSection } from "../sections/members-section";
import { FaqSection } from "../sections/faq-section";

interface DivisionDetailPageProps {
  division: DivisionData;
}

export const DivisionDetailPage = ({ division }: DivisionDetailPageProps) => {
  return (
    <main className="min-h-screen">
      <HeroSection division={division} />
      <MembersSection division={division} />
      <FaqSection division={division} />
    </main>
  );
};

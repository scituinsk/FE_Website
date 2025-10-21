import { HeroSection } from "../sections/hero-section";
import { TeamSection } from "../sections/team-section";
import { ValuesSection } from "../sections/values-section";
import { TimelineSection } from "../sections/timeline-section";
import { VisiMisiSection } from "../sections/visi-misi-section";

export const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VisiMisiSection />
      <TimelineSection />
      <TeamSection />
      <ValuesSection />
    </div>
  );
};

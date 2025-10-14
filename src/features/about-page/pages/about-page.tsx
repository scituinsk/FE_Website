import { HeroSection } from "../components/hero-section";
import { TeamSection } from "../components/team-section";
import { ValuesSection } from "../components/values-section";
import { TimelineSection } from "../components/timeline-section";
import { VisiMisiSection } from "../components/visi-misi-section";
import { ContactInfoSection } from "../components/contact-info-section";

export const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VisiMisiSection />
      <TimelineSection />
      <TeamSection />
      <ValuesSection />
      <ContactInfoSection />
    </div>
  );
};

import { HeroSection } from "../components/hero-section";
import { BenefitsSection } from "../components/benefits-section";
import { TracksSection } from "../components/tracks-section";
import { StepsSection } from "../components/steps-section";
import { ApplicationFormSection } from "../components/application-form-section";
import { ContactInfoSection } from "../components/contact-info-section";

export const JoinPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <TracksSection />
      <StepsSection />
      <ApplicationFormSection />
      <ContactInfoSection />
    </div>
  );
};

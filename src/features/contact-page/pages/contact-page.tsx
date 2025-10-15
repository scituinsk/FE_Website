import { HeroSection } from "../components/hero-section";
import { ContactMethodsSection } from "../components/contact-methods-section";
import { ContactFormSection } from "../components/contact-form-section";
import { LocationSection } from "../components/location-section";
import { FaqSection } from "../components/faq-section";

export const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContactMethodsSection />
      <ContactFormSection />
      <LocationSection />
      <FaqSection />
    </div>
  );
};

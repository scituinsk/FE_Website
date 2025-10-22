import { HeroSection } from "../sections/hero-section";
import { ContactMethodsSection } from "../sections/contact-methods-section";
import { ContactFormSection } from "../sections/contact-form-section";
import { LocationSection } from "../sections/location-section";
import { FaqSection } from "../sections/faq-section";

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

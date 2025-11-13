import * as motion from "framer-motion/client";
import { DivisionData } from "@/constants/division-members";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { animationConfig, fadeIn } from "@/utils/animations";

interface FaqSectionProps {
  division: DivisionData;
}

export const FaqSection = ({ division }: FaqSectionProps) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          {...animationConfig}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Pertanyaan yang sering ditanyakan tentang divisi {division.name}</p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full space-y-3"
          >
            {division.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-4 sm:px-6 bg-background"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold hover:no-underline py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

"use client";

import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "How can I join SCIT UIN Suka?",
    answer:
      "You can join by filling out our online application form, attending an info session, and completing a simple skills assessment. Visit our Join page for detailed steps.",
  },
  {
    question: "Do I need prior programming experience?",
    answer: "No! We welcome members of all skill levels. We have tracks specifically designed for beginners as well as advanced developers.",
  },
  {
    question: "What are the membership requirements?",
    answer: "You must be a student at UIN Sunan Kalijaga, commit to active participation, and follow our community guidelines.",
  },
  {
    question: "Are there any membership fees?",
    answer: "SCIT membership is completely free. We believe technology education should be accessible to all students.",
  },
  {
    question: "How can I partner with SCIT?",
    answer: "We're always open to partnerships! Contact our partnership team at partnership@scit-uinsuka.id to discuss collaboration opportunities.",
  },
  {
    question: "Can non-UIN students participate in events?",
    answer: "Many of our public events are open to everyone. Check specific event details or contact us for more information.",
  },
];

export const FaqSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Find quick answers to common questions about SCIT</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

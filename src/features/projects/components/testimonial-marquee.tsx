"use client";

import { ProjectFullInformation } from "../types";
import { TestimonialCard } from "./testimonial-card";

interface TestimonialMarqueeProps {
  testimonials: ProjectFullInformation["testimonials"];
}

export function TestimonialMarquee({ testimonials }: TestimonialMarqueeProps) {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-container">
        <div className="marquee-track">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              message={testimonial.testimonial}
              rating={testimonial.rating}
              avatar={testimonial.avatarUrl}
            />
          ))}
        </div>
      </div>

      {/* Fade masks on both sides using Tailwind */}
      <div className="absolute top-0 left-0 w-12 md:w-48 h-full bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-12 md:w-48 h-full bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10" />
    </div>
  );
}

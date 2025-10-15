"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Call us during office hours",
    primary: "+62 274 540971",
    secondary: "Mon-Fri 9AM-5PM",
    action: "tel:+62274540971",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a message anytime",
    primary: "info@scit-uinsuka.id",
    secondary: "We'll reply within 24 hours",
    action: "mailto:info@scit-uinsuka.id",
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Visit us at our campus",
    primary: "UIN Sunan Kalijaga",
    secondary: "Yogyakarta, Indonesia",
    action: "https://maps.google.com/",
  },
  {
    icon: Clock,
    title: "Meeting",
    description: "Schedule a consultation",
    primary: "Book a Meeting",
    secondary: "Available online & offline",
    action: "mailto:meeting@scit-uinsuka.id",
  },
];

export const ContactMethodsSection = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="text-center p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <method.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
              <CardDescription className="mb-4">{method.description}</CardDescription>
              <div className="space-y-1">
                <div className="font-medium text-foreground">{method.primary}</div>
                <div className="text-sm text-muted-foreground">{method.secondary}</div>
              </div>
              <Button
                className="mt-4 w-full"
                variant="outline"
                size="sm"
                asChild
              >
                <Link
                  href={method.action}
                  target="_blank"
                >
                  Contact
                </Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

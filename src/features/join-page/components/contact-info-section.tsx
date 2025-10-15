"use client";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Calendar } from "lucide-react";
import Link from "next/link";

export const ContactInfoSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Have Questions?</h2>
          <p className="text-lg text-muted-foreground">Tim kami siap membantu menjawab pertanyaan Anda seputar SCIT dan proses pendaftaran</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl mb-4">Email Us</CardTitle>
            <CardDescription className="mb-4">Send us your questions anytime</CardDescription>
            <Link
              href="mailto:join@scit-uinsuka.id"
              className="text-primary hover:underline"
            >
              join@scit-uinsuka.id
            </Link>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl mb-4">WhatsApp</CardTitle>
            <CardDescription className="mb-4">Chat with our recruitment team</CardDescription>
            <Link
              href="https://wa.me/6281234567890"
              target="_blank"
              className="text-primary hover:underline"
            >
              +62 812 3456 7890
            </Link>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl mb-4">Info Session</CardTitle>
            <CardDescription className="mb-4">Join our weekly info session</CardDescription>
            <div className="text-primary font-medium">Every Friday, 19:00 WIB</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

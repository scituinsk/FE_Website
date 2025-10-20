import Link from "next/link";
import { Instagram, Github, Mail, MapPin, Linkedin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ApplicationLogo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { footerConfig } from "@/constants/footer-config";

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-2 border-background">
      <div className="container mx-auto px-4 py-8 md:py-12 ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* About SCIT */}
          <div className="space-y-4">
            <ApplicationLogo responsive={false} />
            <p className="text-sm text-muted-foreground leading-relaxed">{footerConfig.description}</p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 flex-shrink-0"
                asChild
              >
                <Link
                  href={footerConfig.socialMedia.instagram}
                  target="_blank"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 flex-shrink-0"
                asChild
              >
                <Link
                  href={footerConfig.socialMedia.github}
                  target="_blank"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 flex-shrink-0"
                asChild
              >
                <Link
                  href={footerConfig.socialMedia.linkedin}
                  target="_blank"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {footerConfig.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Division</h3>

            <ul className="space-y-2">
              {footerConfig.divisions.map((division) => (
                <li key={division.link}>
                  <Link
                    href={division.link}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {division.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">{footerConfig.contact.address}</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:scit@uin-suka.ac.id"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {footerConfig.contact.email}
                </a>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {footerConfig.contact.phone}
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} SCIT UIN Sunan Kalijaga. All rights reserved.</p>
            <div className="flex items-center flex-wrap gap-2 sm:gap-4">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            <span>Dikelola oleh SCIT UIN SUKA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

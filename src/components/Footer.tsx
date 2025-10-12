import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Github, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About SCIT */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg">
                S
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900">SCIT</span>
                <span className="ml-1 text-sm text-blue-600">UIN Suka</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Student Community of Information Technology - Komunitas mahasiswa teknologi informasi UIN Sunan Kalijaga Yogyakarta yang berfokus pada
              pengembangan skill dan inovasi teknologi.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                asChild
              >
                <Link
                  href="https://instagram.com/scit_uinsuka"
                  target="_blank"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                asChild
              >
                <Link
                  href="https://twitter.com/scit_uinsuka"
                  target="_blank"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                asChild
              >
                <Link
                  href="https://github.com/scit-uinsuka"
                  target="_blank"
                >
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9"
                asChild
              >
                <Link
                  href="https://facebook.com/scit.uinsuka"
                  target="_blank"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Our Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Blog & News
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/join"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Join SCIT
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs/web-development"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/mobile-development"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/ui-ux-design"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/data-science"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/cybersecurity"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-slate-600">
                  <p>Fakultas Sains dan Teknologi</p>
                  <p>UIN Sunan Kalijaga</p>
                  <p>Jl. Marsda Adisucipto No 1</p>
                  <p>Yogyakarta 55281</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:scit@uin-suka.ac.id"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  scit@uin-suka.ac.id
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-600 flex-shrink-0" />
                <a
                  href="tel:+62274540971"
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  +62 274 540 971
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-sm text-slate-600">© 2024 SCIT UIN Sunan Kalijaga. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Link
                href="/privacy"
                className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <span>Built with</span>
            <span className="text-red-500">♥</span>
            <span>by SCIT Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

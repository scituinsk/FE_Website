import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Code2, Lightbulb, Target } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <div className="space-y-6 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              Student Community of Information Technology
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Innovating the Future of
              <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Technology</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              SCIT UIN Sunan Kalijaga adalah komunitas mahasiswa yang berdedikasi untuk mengembangkan inovasi teknologi dan menciptakan solusi digital
              yang berdampak.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-lg px-8"
              asChild
            >
              <Link href="/join">
                Join Our Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8"
              asChild
            >
              <Link href="/projects">Explore Projects</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">150+</div>
              <div className="text-slate-600">Active Members</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4">
                <Code2 className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-slate-600">Projects Done</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">25+</div>
              <div className="text-slate-600">Innovations</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">10+</div>
              <div className="text-slate-600">Events/Year</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-blue-400/25 rounded-full blur-xl" />
    </section>
  );
};

export default HeroSection;

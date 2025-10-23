"use client";

import Link from "next/link";
import { Home, ArrowLeft, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background tint */}
      <div className="absolute inset-0 bg-primary/5" />

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
        <div className="text-center max-w-2xl mx-auto">
          <div className="space-y-8">
            {/* 404 Number */}
            <div className="text-8xl md:text-9xl font-bold text-primary leading-none">404</div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <MapPin className="h-4 w-4" />
              Page Not Found
            </div>

            {/* Main heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Oops! Halaman
              <span className="block text-primary">Tidak Ditemukan</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak pernah ada. Mari kembali ke halaman utama.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                asChild
              >
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Kembali ke Beranda
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Halaman Sebelumnya
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/15 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-primary/25 rounded-full blur-xl" />
    </div>
  );
}

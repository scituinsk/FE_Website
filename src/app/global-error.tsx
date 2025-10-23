"use client";
import { Home, RefreshCw, AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html>
      <body className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background text-foreground">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-background to-red-500/5" />

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
              {/* Error icon */}
              <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mx-auto">
                <AlertTriangle className="h-12 w-12 text-red-500" />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-600 text-sm font-medium">
                <AlertTriangle className="h-4 w-4" />
                Critical Error
              </div>

              {/* Main heading */}
              <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Terjadi Kesalahan
                <span className="block text-red-600">Kritis</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Aplikasi mengalami kesalahan kritis. Silakan muat ulang halaman atau hubungi tim dukungan jika masalah berlanjut.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  size="lg"
                  onClick={reset}
                >
                  <RefreshCw className="mr-2 h-5 w-5" />
                  Muat Ulang Aplikasi
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => (window.location.href = "/")}
                >
                  <Home className="mr-2 h-5 w-5" />
                  Kembali ke Beranda
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating elements with red theme */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-500/15 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-red-500/25 rounded-full blur-xl" />
      </body>
    </html>
  );
}

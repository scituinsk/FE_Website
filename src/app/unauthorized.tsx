"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useScrollAnimation, staggerContainer, fadeInUp, fadeInDown } from "@/lib/hooks/use-scroll-animation";
import { Home, LogIn, Shield, Mail } from "lucide-react";
import Link from "next/link";

export default function Unauthorized() {
  const { ref: heroRef, controls: heroControls } = useScrollAnimation();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-background to-orange-500/5" />

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
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroControls}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* 401 Number */}
            <motion.div
              variants={fadeInDown}
              className="text-8xl md:text-9xl font-bold text-orange-500/20 leading-none"
            >
              401
            </motion.div>

            {/* Badge */}
            <motion.div
              variants={fadeInDown}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium"
            >
              <Shield className="h-4 w-4" />
              Unauthorized Access
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-foreground leading-tight"
            >
              Akses
              <span className="block text-orange-600">Tidak Diizinkan</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
            >
              Anda tidak memiliki izin untuk mengakses halaman ini. Silakan login terlebih dahulu atau hubungi administrator.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Button
                size="lg"
                asChild
              >
                <Link href="/login">
                  <LogIn className="mr-2 h-5 w-5" />
                  Login
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Kembali ke Beranda
                </Link>
              </Button>
            </motion.div>

            {/* Help section */}
            <motion.div
              variants={fadeInUp}
              className="pt-8"
            >
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Butuh Bantuan?</h3>
                <p className="text-muted-foreground mb-4">
                  Jika Anda merasa seharusnya memiliki akses ke halaman ini, silakan hubungi administrator.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <Link href="mailto:admin@scit-uinsuka.id">
                      <Mail className="mr-2 h-4 w-4" />
                      Hubungi Admin
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <Link href="/#contact">Support Center</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements with orange theme */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/15 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-orange-500/25 rounded-full blur-xl" />
    </div>
  );
}

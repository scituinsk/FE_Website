"use client";

import { Eye, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const VisiMisiSection = () => {
  const { ref: visiMisiRef, controls: visiMisiControls } = useScrollAnimation();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={visiMisiRef}
          initial="hidden"
          animate={visiMisiControls}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          <motion.div variants={staggerItem}>
            <Card className="p-8 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg leading-relaxed text-slate-700">
                  Menjadi komunitas teknologi informasi terdepan yang mengintegrasikan nilai-nilai Islam dalam pengembangan inovasi teknologi untuk
                  kemajuan umat dan bangsa.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={staggerItem}>
            <Card className="p-8 border-0 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Mengembangkan kompetensi teknologi informasi mahasiswa</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Memfasilitasi penelitian dan inovasi teknologi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Membangun jejaring komunitas teknologi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    <span>Mengintegrasikan nilai-nilai Islam dalam teknologi</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

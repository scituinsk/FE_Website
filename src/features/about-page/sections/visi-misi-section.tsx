import * as motion from "framer-motion/client";

import { animationConfig, staggerContainer, staggerItem } from "@/utils/animations";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const VisiMisiSection = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch"
          {...animationConfig}
        >
          <motion.div
            variants={staggerItem}
            className="h-full"
          >
            <Card className="p-8 border-0 bg-primary/10 h-full">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Visi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  Menjadi komunitas teknologi informasi terdepan yang mengintegrasikan nilai-nilai Islam dalam pengembangan inovasi teknologi untuk
                  kemajuan umat dan bangsa.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="h-full"
          >
            <Card className="p-8 border-0 bg-primary/10 h-full">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Mengembangkan kompetensi teknologi informasi mahasiswa</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Memfasilitasi penelitian dan inovasi teknologi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Membangun jejaring komunitas teknologi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
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

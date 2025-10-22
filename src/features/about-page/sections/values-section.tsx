import { Award, Heart, Target, Users } from "lucide-react";
import * as motion from "framer-motion/client";

import { animationConfig, fadeIn, staggerContainer, staggerItem } from "@/utils/animations";

import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export const ValuesSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
          {...animationConfig}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
          <p className="text-lg text-muted-foreground">
            Nilai-nilai fundamental yang menjadi landasan setiap aktivitas dan pengambilan keputusan di SCIT
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto items-stretch"
        >
          <motion.div
            variants={staggerItem}
            className="h-full"
          >
            <Card className="text-center p-8 hover:shadow-lg transition-shadow h-full">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-surface" />
              </div>
              <CardTitle className="text-xl mb-4">Collaboration</CardTitle>
              <CardDescription>Bekerja sama dalam tim untuk mencapai tujuan bersama</CardDescription>
            </Card>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="h-full"
          >
            <Card className="text-center p-8 hover:shadow-lg transition-shadow h-full">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-surface" />
              </div>
              <CardTitle className="text-xl mb-4">Excellence</CardTitle>
              <CardDescription>Selalu berusaha memberikan yang terbaik dalam setiap karya</CardDescription>
            </Card>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="h-full"
          >
            <Card className="text-center p-8 hover:shadow-lg transition-shadow h-full">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-surface" />
              </div>
              <CardTitle className="text-xl mb-4">Integrity</CardTitle>
              <CardDescription>Memegang teguh nilai-nilai moral dan etika dalam berkarya</CardDescription>
            </Card>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="h-full"
          >
            <Card className="text-center p-8 hover:shadow-lg transition-shadow h-full">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-surface" />
              </div>
              <CardTitle className="text-xl mb-4">Innovation</CardTitle>
              <CardDescription>Menciptakan solusi kreatif untuk tantangan masa depan</CardDescription>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

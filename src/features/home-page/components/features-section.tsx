import * as motion from "framer-motion/client";
import { Code2, Smartphone, Palette, Database, Shield, Globe, Brain, Cpu } from "lucide-react";

import { animationConfig, fadeIn, staggerContainer, staggerItem } from "@/utils/animations";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Membangun aplikasi web modern menggunakan teknologi terdepan seperti React, Next.js, dan Node.js",
    color: "bg-blue-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Pengembangan aplikasi mobile cross-platform dengan React Native dan Flutter untuk iOS dan Android",
    color: "bg-green-600",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Menciptakan pengalaman pengguna yang intuitif dan menarik dengan prinsip-prinsip design thinking",
    color: "bg-purple-600",
  },
  {
    icon: Database,
    title: "Data Science",
    description: "Analisis data dan machine learning untuk menghasilkan insights yang valuable dari big data",
    color: "bg-orange-600",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Keamanan sistem informasi dan ethical hacking untuk melindungi aset digital organisasi",
    color: "bg-red-600",
  },
  {
    icon: Globe,
    title: "Cloud Computing",
    description: "Implementasi dan pengelolaan infrastruktur cloud menggunakan AWS, Azure, dan Google Cloud",
    color: "bg-cyan-600",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Pengembangan sistem AI dan deep learning untuk otomatisasi dan intelligent decision making",
    color: "bg-indigo-600",
  },
  {
    icon: Cpu,
    title: "IoT Development",
    description: "Internet of Things dan embedded systems untuk solusi smart city dan industry 4.0",
    color: "bg-pink-600",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
          {...animationConfig}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Expertise Areas</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SCIT UIN Suka mengembangkan berbagai bidang teknologi informasi untuk mempersiapkan mahasiswa menghadapi tantangan industri 4.0 dan era
            digital
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr"
          {...animationConfig}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="h-full"
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-surface h-full">
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14  ${feature.color} rounded-2xl flex items-center justify-center mb-4  `}>
                    <feature.icon className="h-7 w-7 text-surface" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

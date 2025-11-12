import * as motion from "framer-motion/client";

import { animationConfig, fadeIn, staggerContainer, staggerItem } from "@/utils/animations";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: "/icons/web-settings.png",
    title: "Web Development",
    description: "Membangun aplikasi web modern menggunakan teknologi terdepan seperti React, Next.js, dan Node.js",
  },
  {
    icon: "/icons/app-development.png",
    title: "Mobile Development",
    description: "Pengembangan aplikasi mobile cross-platform dengan React Native dan Flutter untuk iOS dan Android",
  },
  {
    icon: "/icons/ui.png",
    title: "UI/UX Design",
    description: "Menciptakan pengalaman pengguna yang intuitif dan menarik dengan prinsip-prinsip design thinking",
  },
  {
    icon: "/icons/it-security.png",
    title: "Cybersecurity",
    description: "Keamanan sistem informasi dan ethical hacking untuk melindungi aset digital organisasi",
  },
  {
    icon: "/icons/ai-assistant.png",
    title: "Artificial Intelligence",
    description: "Pengembangan sistem AI dan deep learning untuk otomatisasi dan intelligent decision making",
  },
  {
    icon: "/icons/internet-of-things.png",
    title: "IoT Development",
    description: "Internet of Things dan embedded systems untuk solusi smart city dan industry 4.0",
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
            Kami mengembangkan berbagai bidang teknologi informasi untuk mempersiapkan mahasiswa menghadapi tantangan industri 4.0 dan era digital
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
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
                  <div
                    style={{
                      backgroundImage: `url("${feature.icon}")`,
                      backgroundSize: "90%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      width: "50px",
                      height: "50px",
                    }}
                  />

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

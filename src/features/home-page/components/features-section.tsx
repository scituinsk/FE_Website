"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Database, Shield, Globe, Brain, Cpu } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";

export const FeaturesSection = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: featuresRef, controls: featuresControls } = useScrollAnimation();
  const { ref: skillsRef, controls: skillsControls } = useScrollAnimation();

  const features = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Membangun aplikasi web modern menggunakan teknologi terdepan seperti React, Next.js, dan Node.js",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Pengembangan aplikasi mobile cross-platform dengan React Native dan Flutter untuk iOS dan Android",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Menciptakan pengalaman pengguna yang intuitif dan menarik dengan prinsip-prinsip design thinking",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Analisis data dan machine learning untuk menghasilkan insights yang valuable dari big data",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Keamanan sistem informasi dan ethical hacking untuk melindungi aset digital organisasi",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Globe,
      title: "Cloud Computing",
      description: "Implementasi dan pengelolaan infrastruktur cloud menggunakan AWS, Azure, dan Google Cloud",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description: "Pengembangan sistem AI dan deep learning untuk otomatisasi dan intelligent decision making",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Cpu,
      title: "IoT Development",
      description: "Internet of Things dan embedded systems untuk solusi smart city dan industry 4.0",
      color: "from-pink-500 to-pink-600",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerControls}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Expertise Areas</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            SCIT UIN Suka mengembangkan berbagai bidang teknologi informasi untuk mempersiapkan mahasiswa menghadapi tantangan industri 4.0 dan era
            digital
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          ref={featuresRef}
          initial="hidden"
          animate={featuresControls}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-surface">
                <CardHeader className="pb-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
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

        {/* Skills development section */}
        <motion.div
          ref={skillsRef}
          initial="hidden"
          animate={skillsControls}
          variants={fadeInUp}
          className="mt-20"
        >
          <div className="bg-surface rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Skill Development Program</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Program pengembangan kompetensi yang terstruktur untuk meningkatkan kemampuan teknis dan soft skills anggota SCIT
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Beginner Track */}
              <motion.div
                variants={staggerItem}
                className="text-center p-6 rounded-2xl bg-primary/5 group hover:bg-primary/10 transition-colors"
              >
                <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-surface font-bold text-xl">B</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Beginner Track</h4>
                <p className="text-muted-foreground mb-4">Fundamental programming, basic web development, dan introduction to tech stack</p>
                <div className="text-sm text-primary font-medium">3-6 Months Program</div>
              </motion.div>

              {/* Intermediate Track */}
              <motion.div
                variants={staggerItem}
                className="text-center p-6 rounded-2xl bg-green-50 group hover:bg-green-100 transition-colors dark:bg-green-900/10 dark:hover:bg-green-900/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-surface font-bold text-xl">I</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Intermediate Track</h4>
                <p className="text-muted-foreground mb-4">Advanced development, project management, dan specialization in chosen field</p>
                <div className="text-sm text-green-600 font-medium">6-12 Months Program</div>
              </motion.div>

              {/* Expert Track */}
              <motion.div
                variants={staggerItem}
                className="text-center p-6 rounded-2xl bg-purple-50 group hover:bg-purple-100 transition-colors dark:bg-purple-900/10 dark:hover:bg-purple-900/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-surface font-bold text-xl">E</span>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Expert Track</h4>
                <p className="text-muted-foreground mb-4">Leadership development, mentoring others, dan contribution to open source projects</p>
                <div className="text-sm text-purple-600 font-medium">12+ Months Program</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, TrendingUp, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp } from "@/lib/hooks/use-scroll-animation";
import { featuredPost } from "@/constants/blogs";

export const FeaturedPostSection = () => {
  const { ref: featuredRef, controls: featuredControls } = useScrollAnimation();

  return (
    <motion.section
      ref={featuredRef}
      initial="hidden"
      animate={featuredControls}
      variants={fadeInUp}
    >
      <div className="flex items-center gap-2 mb-8">
        <TrendingUp className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-slate-900">Featured Article</h2>
      </div>

      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="lg:flex">
          <div className="lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br from-blue-100 to-blue-200 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/30" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white text-blue-700 text-sm font-medium rounded-full">Featured</span>
            </div>
          </div>
          <div className="lg:w-1/2 p-8">
            <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg">{featuredPost.category}</span>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(featuredPost.date).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {featuredPost.readTime}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {featuredPost.views}
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 hover:text-blue-600 transition-colors">{featuredPost.title}</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-slate-900">{featuredPost.author}</div>
                  <div className="text-sm text-slate-600">{featuredPost.authorRole}</div>
                </div>
              </div>
              <Button asChild>
                <Link href={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.section>
  );
};

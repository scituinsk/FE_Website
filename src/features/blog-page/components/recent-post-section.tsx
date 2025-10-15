"use client";

import React from "react";
import Link from "next/link";
import { Calendar, Clock, Eye, User } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, fadeInUp, staggerContainer, staggerItem } from "@/lib/hooks/use-scroll-animation";

import { allPosts } from "@/constants/blogs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const RecentPostSection = () => {
  const { ref: headerRef, controls: headerControls } = useScrollAnimation();
  const { ref: postsRef, controls: postsControls } = useScrollAnimation();
  const { ref: loadMoreRef, controls: loadMoreControls } = useScrollAnimation();

  return (
    <section>
      <motion.h2
        ref={headerRef}
        initial="hidden"
        animate={headerControls}
        variants={fadeInUp}
        className="text-2xl font-bold text-foreground mb-8"
      >
        Latest Articles
      </motion.h2>
      <motion.div
        ref={postsRef}
        initial="hidden"
        animate={postsControls}
        variants={staggerContainer}
        className="grid md:grid-cols-2 gap-8"
      >
        {allPosts.map((post, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
          >
            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-muted to-muted/50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/30" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-surface text-foreground text-xs font-medium rounded-lg">{post.category}</span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("id-ID")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.views}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">{post.excerpt}</CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{post.author}</div>
                      <div className="text-xs text-muted-foreground">{post.authorRole}</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                  >
                    <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>Read More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More */}
      <motion.div
        ref={loadMoreRef}
        initial="hidden"
        animate={loadMoreControls}
        variants={fadeInUp}
        className="text-center mt-12"
      >
        <Button
          variant="outline"
          size="lg"
        >
          Load More Articles
        </Button>
      </motion.div>
    </section>
  );
};

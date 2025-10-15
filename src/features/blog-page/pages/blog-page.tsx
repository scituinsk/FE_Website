import Link from "next/link";
import { Calendar, Tag, TrendingUp, Eye } from "lucide-react";

import { allPosts, categories, popularTags } from "@/constants/blogs";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { CTASection } from "../components/cta-section";
import { HeroSection } from "../components/hero-section";
import { RecentPostSection } from "../components/recent-post-section";
import { FeaturedPostSection } from "../components/featured-post-section";

export const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div></div>
      <div className="container mx-auto px-4 py-16 ">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            <FeaturedPostSection />
            <RecentPostSection />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Tag className="h-5 w-5" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <Link
                      href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {category.name}
                    </Link>
                    <span className={`px-2 py-1 text-xs rounded-lg ${category.color}`}>{category.count}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular Tags</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Popular Posts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {allPosts.slice(0, 5).map((post, index) => (
                  <div
                    key={index}
                    className="group"
                  >
                    <Link
                      href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block"
                    >
                      <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString("id-ID")}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg text-primary">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-primary mb-4">Subscribe to our newsletter untuk mendapatkan artikel terbaru langsung di inbox Anda.</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button
                    className="w-full"
                    size="sm"
                  >
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
};

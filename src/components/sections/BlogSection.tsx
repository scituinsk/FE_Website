import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Tag, TrendingUp } from "lucide-react";

const BlogSection = () => {
  const featuredPosts = [
    {
      title: "Mengenal Artificial Intelligence dalam Perspektif Islam",
      excerpt: "Bagaimana teknologi AI dapat dimanfaatkan sesuai dengan nilai-nilai Islam dan etika teknologi yang bertanggung jawab.",
      author: "Ahmad Fauzi",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "AI & Ethics",
      image: "/blog/ai-islam.jpg",
      featured: true,
    },
    {
      title: "Tutorial: Membangun Web App dengan Next.js 14",
      excerpt: "Panduan lengkap untuk membuat aplikasi web modern menggunakan Next.js 14 dengan App Router dan Tailwind CSS.",
      author: "Siti Nurhaliza",
      date: "2024-03-12",
      readTime: "12 min read",
      category: "Web Development",
      image: "/blog/nextjs-tutorial.jpg",
      featured: false,
    },
    {
      title: "Cybersecurity: Melindungi Data Pribadi di Era Digital",
      excerpt: "Tips dan strategi untuk menjaga keamanan data pribadi dalam aktivitas digital sehari-hari.",
      author: "Budi Santoso",
      date: "2024-03-10",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/blog/cybersecurity.jpg",
      featured: false,
    },
    {
      title: "Mobile Development dengan React Native: Best Practices",
      excerpt: "Kumpulan best practices dalam pengembangan aplikasi mobile menggunakan React Native untuk performa optimal.",
      author: "Rina Maharani",
      date: "2024-03-08",
      readTime: "10 min read",
      category: "Mobile Dev",
      image: "/blog/react-native.jpg",
      featured: false,
    },
    {
      title: "UI/UX Design: Prinsip Design Thinking untuk Developer",
      excerpt: "Memahami prinsip-prinsip design thinking yang dapat diterapkan developer dalam menciptakan user experience yang baik.",
      author: "Dian Pratama",
      date: "2024-03-05",
      readTime: "7 min read",
      category: "UI/UX",
      image: "/blog/design-thinking.jpg",
      featured: false,
    },
    {
      title: "Cloud Computing: Migrasi Aplikasi ke AWS",
      excerpt: "Panduan step-by-step untuk melakukan migrasi aplikasi existing ke Amazon Web Services dengan best practices.",
      author: "Eko Prasetyo",
      date: "2024-03-02",
      readTime: "15 min read",
      category: "Cloud Computing",
      image: "/blog/aws-migration.jpg",
      featured: false,
    },
  ];

  const categories = [
    { name: "Web Development", count: 15, color: "bg-blue-100 text-blue-700" },
    { name: "Mobile Development", count: 12, color: "bg-green-100 text-green-700" },
    { name: "AI & Machine Learning", count: 8, color: "bg-purple-100 text-purple-700" },
    { name: "UI/UX Design", count: 10, color: "bg-pink-100 text-pink-700" },
    { name: "Cybersecurity", count: 6, color: "bg-red-100 text-red-700" },
    { name: "Cloud Computing", count: 9, color: "bg-cyan-100 text-cyan-700" },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Latest from Our Blog</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Artikel terbaru seputar teknologi, tutorial, dan insights dari komunitas SCIT UIN Suka untuk berbagi pengetahuan dengan sesama developer
          </p>
        </div>

        {/* Featured post */}
        <div className="mb-12">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 lg:flex lg:h-96">
            <div className="lg:w-1/2 h-64 lg:h-full bg-gradient-to-br from-blue-100 to-blue-200 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/30" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white text-blue-700 text-sm font-medium rounded-full">Featured</span>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg">{featuredPosts[0].category}</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(featuredPosts[0].date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPosts[0].readTime}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {featuredPosts[0].title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{featuredPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-600">{featuredPosts[0].author}</span>
                </div>
                <Button asChild>
                  <Link href={`/blog/${featuredPosts[0].title.toLowerCase().replace(/\s+/g, "-")}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent posts grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Recent Posts</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.slice(1, 5).map((post, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-slate-700/30" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-1 bg-white text-slate-700 text-xs font-medium rounded-lg">{post.category}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("id-ID")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3 mb-4">{post.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3 text-slate-500" />
                        <span className="text-xs text-slate-600">{post.author}</span>
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
              ))}
            </div>
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
                      className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {category.name}
                    </Link>
                    <span className={`px-2 py-1 text-xs rounded-lg ${category.color}`}>{category.count}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Popular posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Popular Posts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {featuredPosts.slice(0, 3).map((post, index) => (
                  <div
                    key={index}
                    className="group"
                  >
                    <Link
                      href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block"
                    >
                      <h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("id-ID")}
                      </div>
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center bg-white rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Want to Share Your Knowledge?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Bergabunglah sebagai kontributor blog SCIT dan bagikan pengalaman, tutorial, atau insights teknologi Anda kepada komunitas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
            >
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link href="/contribute">Become a Contributor</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

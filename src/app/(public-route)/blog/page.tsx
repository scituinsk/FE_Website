import React from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Tag, TrendingUp, Search, Eye } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "Latest articles, tutorials, and insights from SCIT UIN Sunan Kalijaga community about technology, programming, and innovation.",
};

const BlogPage = () => {
  const featuredPost = {
    title: "Mengenal Artificial Intelligence dalam Perspektif Islam",
    excerpt:
      "Bagaimana teknologi AI dapat dimanfaatkan sesuai dengan nilai-nilai Islam dan etika teknologi yang bertanggung jawab untuk kemajuan umat.",
    content:
      "Dalam era digitalisasi yang semakin pesat, teknologi Artificial Intelligence (AI) telah menjadi bagian integral dari kehidupan manusia. Sebagai umat Muslim, kita perlu memahami bagaimana mengimplementasikan dan memanfaatkan teknologi ini sesuai dengan nilai-nilai Islam...",
    author: "Ahmad Fauzi",
    authorRole: "AI Research Lead",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "AI & Ethics",
    image: "/blog/ai-islam.jpg",
    views: 1240,
    featured: true,
  };

  const allPosts = [
    {
      title: "Tutorial: Membangun Web App dengan Next.js 14",
      excerpt: "Panduan lengkap untuk membuat aplikasi web modern menggunakan Next.js 14 dengan App Router dan Tailwind CSS.",
      author: "Siti Nurhaliza",
      authorRole: "Frontend Developer",
      date: "2024-03-12",
      readTime: "12 min read",
      category: "Web Development",
      image: "/blog/nextjs-tutorial.jpg",
      views: 856,
      featured: false,
    },
    {
      title: "Cybersecurity: Melindungi Data Pribadi di Era Digital",
      excerpt: "Tips dan strategi untuk menjaga keamanan data pribadi dalam aktivitas digital sehari-hari.",
      author: "Budi Santoso",
      authorRole: "Cybersecurity Specialist",
      date: "2024-03-10",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/blog/cybersecurity.jpg",
      views: 642,
      featured: false,
    },
    {
      title: "Mobile Development dengan React Native: Best Practices",
      excerpt: "Kumpulan best practices dalam pengembangan aplikasi mobile menggunakan React Native untuk performa optimal.",
      author: "Rina Maharani",
      authorRole: "Mobile Developer",
      date: "2024-03-08",
      readTime: "10 min read",
      category: "Mobile Development",
      image: "/blog/react-native.jpg",
      views: 729,
      featured: false,
    },
    {
      title: "UI/UX Design: Prinsip Design Thinking untuk Developer",
      excerpt: "Memahami prinsip-prinsip design thinking yang dapat diterapkan developer dalam menciptakan user experience yang baik.",
      author: "Dian Pratama",
      authorRole: "UI/UX Designer",
      date: "2024-03-05",
      readTime: "7 min read",
      category: "UI/UX Design",
      image: "/blog/design-thinking.jpg",
      views: 583,
      featured: false,
    },
    {
      title: "Cloud Computing: Migrasi Aplikasi ke AWS",
      excerpt: "Panduan step-by-step untuk melakukan migrasi aplikasi existing ke Amazon Web Services dengan best practices.",
      author: "Eko Prasetyo",
      authorRole: "DevOps Engineer",
      date: "2024-03-02",
      readTime: "15 min read",
      category: "Cloud Computing",
      image: "/blog/aws-migration.jpg",
      views: 912,
      featured: false,
    },
    {
      title: "Data Science untuk Pemula: Analisis Data dengan Python",
      excerpt: "Pengenalan data science menggunakan Python, pandas, dan matplotlib untuk analisis data dasar.",
      author: "Sarah Wijaya",
      authorRole: "Data Scientist",
      date: "2024-02-28",
      readTime: "11 min read",
      category: "Data Science",
      image: "/blog/data-science.jpg",
      views: 1156,
      featured: false,
    },
    {
      title: "DevOps: Implementasi CI/CD dengan GitHub Actions",
      excerpt: "Tutorial implementasi Continuous Integration dan Continuous Deployment menggunakan GitHub Actions.",
      author: "Rudi Hermawan",
      authorRole: "DevOps Lead",
      date: "2024-02-25",
      readTime: "13 min read",
      category: "DevOps",
      image: "/blog/github-actions.jpg",
      views: 687,
      featured: false,
    },
    {
      title: "Blockchain Technology: Pengenalan Smart Contracts",
      excerpt: "Memahami konsep smart contracts dalam blockchain dan implementasinya menggunakan Solidity.",
      author: "Agus Setiawan",
      authorRole: "Blockchain Developer",
      date: "2024-02-22",
      readTime: "14 min read",
      category: "Blockchain",
      image: "/blog/smart-contracts.jpg",
      views: 534,
      featured: false,
    },
    {
      title: "Machine Learning: Sentiment Analysis untuk Media Sosial",
      excerpt: "Implementasi sentiment analysis menggunakan Python dan Natural Language Processing untuk analisis media sosial.",
      author: "Maya Sari",
      authorRole: "ML Engineer",
      date: "2024-02-20",
      readTime: "16 min read",
      category: "Machine Learning",
      image: "/blog/sentiment-analysis.jpg",
      views: 823,
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
    { name: "Data Science", count: 7, color: "bg-orange-100 text-orange-700" },
    { name: "DevOps", count: 5, color: "bg-indigo-100 text-indigo-700" },
  ];

  const popularTags = [
    "React",
    "Next.js",
    "Python",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React Native",
    "AI/ML",
    "Cybersecurity",
    "AWS",
    "Docker",
    "Git",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">SCIT Tech Blog</h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-8">
              Artikel terbaru seputar teknologi, tutorial programming, dan insights dari komunitas SCIT UIN Suka untuk berbagi pengetahuan dengan
              developer Indonesia.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles, topics..."
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            {/* Featured Post */}
            <section>
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
                        {featuredPost.views.toLocaleString()}
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
            </section>

            {/* Recent Posts */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Latest Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {allPosts.map((post, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-slate-700/30" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-2 py-1 bg-white text-slate-700 text-xs font-medium rounded-lg">{post.category}</span>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
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
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="line-clamp-3 mb-4">{post.excerpt}</CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-900">{post.author}</div>
                            <div className="text-xs text-slate-600">{post.authorRole}</div>
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
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                >
                  Load More Articles
                </Button>
              </div>
            </section>
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
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors"
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
                      <h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-slate-500">
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
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg text-blue-900">Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-blue-700 mb-4">Subscribe to our newsletter untuk mendapatkan artikel terbaru langsung di inbox Anda.</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      {/* CTA Section */}
      <section className="py-24 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Want to Share Your Knowledge?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Bergabunglah sebagai kontributor blog SCIT dan bagikan pengalaman, tutorial, atau insights teknologi Anda kepada komunitas developer
              Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
              >
                <Link href="/contribute">
                  Become a Contributor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

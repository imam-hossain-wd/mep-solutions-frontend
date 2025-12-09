

// app/components/blog/blog-page.tsx
"use client";

import { useState } from "react";
import { Blog } from "@/types/blogTypes";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  ChevronRight, 
  Grid3x3, 
  List, 
  Calendar,
  Tag,
  User,
  BookOpen,
  TrendingUp,
  Clock,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BlogCard } from "@/components/shared/Card/BlogCard";
import { blogs } from "@/constants/blogData";



export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"newest" | "popular" | "oldest">("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const categories = Array.from(new Set(blogs?.map(blog => blog.category)));
  // Extract all unique tags
  const allTags = Array.from(new Set(blogs?.flatMap(blog => blog?.tags)));

  // Filter blogs
  const filteredBlogs = blogs?.filter(blog => {
      // Search filter
      const matchesSearch = searchTerm === "" || 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      // Category filter
      const matchesCategory = selectedCategory === "all" || blog.category === selectedCategory;

      // Tag filter
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.every(tag => blog.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        case "oldest":
          return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        case "popular":
          // For now, sort by read time (shorter = more popular)
          return parseInt(a.readTime) - parseInt(b.readTime);
        default:
          return 0;
      }
    });

  // Featured blog (first one)
  const featuredBlog = blogs[0];

  // Recent blogs (excluding featured)
  const recentBlogs = blogs.slice(1, 4);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev?.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedTags([]);
    setSortBy("newest");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5 border-b">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">LEARN & GROW</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert Insights on{" "}
              <span className="text-primary">Building Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover professional tips, industry trends, and expert advice on building 
              maintenance, electrical, plumbing, and all construction services in Abu Dhabi.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles, guides, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-6 rounded-xl text-lg shadow-lg border-gray-200 focus:border-primary"
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 rounded-lg px-6"
              >
                Search
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { icon: BookOpen, value: blogs.length, label: "Articles" },
                { icon: User, value: new Set(blogs.map(b => b.author.name)).size, label: "Experts" },
                { icon: Tag, value: allTags.length, label: "Topics" },
                { icon: Clock, value: "2024", label: "Updated" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Container>
        <div className="py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Filter className="h-5 w-5 text-primary" />
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === "all"
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>All Categories</span>
                      <span className="text-sm opacity-75">{blogs.length}</span>
                    </div>
                  </button>
                  
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? "bg-primary text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category}</span>
                        <span className="text-sm opacity-75">
                          {blogs?.filter(b => b.category === category).length}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Tag className="h-5 w-5 text-primary" />
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {allTags.slice(0, 12).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1.5 text-sm rounded-full border transition-all ${
                        selectedTags.includes(tag)
                          ? "bg-primary border-primary text-white"
                          : "bg-gray-100 border-gray-200 text-gray-700 hover:border-primary/50"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                
                {selectedTags.length > 0 && (
                  <Button
                    onClick={() => setSelectedTags([])}
                    variant="ghost"
                    size="sm"
                    className="w-full mt-4 text-primary hover:text-primary/80"
                  >
                    Clear Tags
                  </Button>
                )}
              </div>

              {/* Featured Author */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Featured Expert
                </h3>
                <div className="text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gray-100">
                    <img
                      src={blogs[0]?.author.image}
                      alt={blogs[0]?.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="font-bold text-gray-900">{blogs[0]?.author.name}</div>
                  <div className="text-sm text-gray-600 mb-3">{blogs[0]?.author.role}</div>
                  <p className="text-sm text-gray-500 mb-4">
                    Expert in building services with 15+ years of experience in Abu Dhabi.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View Profile
                  </Button>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
                <h3 className="font-bold text-lg mb-3">Stay Updated</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest building service tips and industry insights.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-white border-gray-300"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Showing</span>
                    <span className="font-bold text-primary">{filteredBlogs?.length}</span>
                    <span className="text-sm text-gray-600">of {blogs?.length} articles</span>
                  </div>
                  
                  {selectedTags.length > 0 && (
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {selectedTags.length} tags selected
                    </Badge>
                  )}
                  
                  {selectedCategory !== "all" && (
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {selectedCategory}
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center gap-4">
                  {/* View Toggle */}
                  <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-white/50"
                      }`}
                    >
                      <Grid3x3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-white/50"
                      }`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                  
                  {/* Sort */}
                  <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                    <SelectTrigger className="w-40 border-gray-300">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {(searchTerm || selectedCategory !== "all" || selectedTags.length > 0) && (
                    <Button
                      onClick={clearFilters}
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              </div>

              {/* Featured Blog */}
              {filteredBlogs?.length > 0 && searchTerm === "" && selectedCategory === "all" && selectedTags.length === 0 && (
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      Featured Article
                    </h2>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Editor's Pick
                    </Badge>
                  </div>
                  <BlogCard blog={featuredBlog} variant="featured" />
                </div>
              )}

              {/* Blog Grid/List */}
              {filteredBlogs?.length > 0 ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">
                      {searchTerm ? 'Search Results' : 'Latest Articles'}
                    </h2>
                    <div className="text-sm text-gray-600">
                      Page 1 of {Math.ceil(filteredBlogs?.length / 6)}
                    </div>
                  </div>
                  
                  {viewMode === "grid" ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {filteredBlogs?.map((blog) => (
                        <BlogCard key={blog.slug} blog={blog} />
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredBlogs?.map((blog) => (
                        <BlogCard key={blog.slug} blog={blog} variant="compact" />
                      ))}
                    </div>
                  )}
                  
                  {/* Pagination */}
                  {filteredBlogs?.length > 6 && (
                    <div className="flex justify-center mt-12">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" disabled>
                          Previous
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          1
                        </Button>
                        <Button variant="outline" size="sm">
                          2
                        </Button>
                        <Button variant="outline" size="sm">
                          3
                        </Button>
                        <Button variant="outline" size="sm">
                          Next
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold mb-3">No articles found</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                  <Button onClick={clearFilters} className="bg-primary hover:bg-primary/90">
                    Clear All Filters
                  </Button>
                </div>
              )}

              {/* Recent Posts Sidebar (for list view) */}
              {viewMode === "list" && filteredBlogs?.length > 0 && (
                <div className="mt-12 pt-8 border-t">
                  <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Recent Posts
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {recentBlogs?.map((blog) => (
                      <div key={blog?.slug} className="bg-white rounded-xl border border-gray-200 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                            {blog?.category}
                          </span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
                          {blog?.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          {blog?.readTime}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to Contribute?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Share your expertise in building services with our growing community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-8"
                >
                  Write for Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8"
                >
                  View Guidelines
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 border-t">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">NEWSLETTER</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Building Tips Directly
            </h2>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join 1,000+ professionals who receive our weekly newsletter with 
              expert advice, industry updates, and service tips.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your work email"
                className="bg-white border-gray-300 flex-1 py-6"
              />
              <Button className="bg-primary hover:bg-primary/90 py-6 px-8 rounded-xl">
                <span>Subscribe</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
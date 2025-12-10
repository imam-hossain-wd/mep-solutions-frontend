"use client";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Tag,
  User,
  Share2,
  Bookmark,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Heart,
  BookOpen,
  Sparkles,
  Building,
  Zap,
  Droplet,
  Wrench,
  Hammer,
  PaintBucket,
  Drill,
  Award,
  Phone,
  Search,
  Home
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { blogs } from "@/constants/blogData";
import { notFound } from "next/navigation";


export default function BlogDetailPage({ slug }: any) {

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const blog = blogs?.find(b => b.slug === slug);
  const relatedBlogs = blogs?.filter(b => b.slug !== slug)
    .slice(0, 3);

  if (!blogs) {
    notFound();
  }


  // Format date
  const formattedDate = blog?.publishedAt ? new Date(blog.publishedAt).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Building Maintenance": return <Building className="h-5 w-5" />;
      case "Electrical": return <Zap className="h-5 w-5" />;
      case "Plumbing": return <Droplet className="h-5 w-5" />;
      case "Welding": return <Wrench className="h-5 w-5" />;
      case "Carpentry": return <Hammer className="h-5 w-5" />;
      case "Masonry": return <Building className="h-5 w-5" />;
      case "Painting": return <PaintBucket className="h-5 w-5" />;
      case "Partition": return <Drill className="h-5 w-5" />;
      default: return <BookOpen className="h-5 w-5" />;
    }
  };

  // Share functions
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog?.title}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank');
  };

  const shareViaEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(blog?.title || '')}&body=${encodeURIComponent(`Check out this article: ${window.location.href}`)}`;
  };

  const shareViaWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${blog?.title || ''} - ${window.location.href}`)}`, '_blank');
  };

  // Handle section click
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">📄</div>
          <h1 className="text-2xl font-bold mb-2">Blog Not Found</h1>
          <p className="text-gray-600 mb-4">The article you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Building className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl text-gray-900">Walid Services</span>
              </Link>

              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
                <Link href="/services" className="text-gray-600 hover:text-primary">Services</Link>
                <Link href="/blog" className="text-primary font-semibold">Blog</Link>
                <Link href="/about" className="text-gray-600 hover:text-primary">About</Link>
                <Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-primary"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <Phone className="h-4 w-4 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <Container>
        <div className="py-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary flex items-center gap-1">
                <Home className="h-4 w-4" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 font-medium">{blog.category}</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center gap-2">
                    {getCategoryIcon(blog.category)}
                    <span className="font-semibold text-primary">{blog.category}</span>
                  </div>
                  <div className="text-sm text-gray-500">{blog.readTime}</div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {blog.title}
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Author & Meta Info */}
                <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <Image
                        src={blog.author.image}
                        alt={blog.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{blog.author.name}</div>
                      <div className="text-sm text-gray-600">{blog.author.role}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Published</div>
                      <div className="font-medium text-gray-900">{formattedDate}</div>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className={isBookmarked ? "text-primary" : "text-gray-600"}
                      >
                        <Bookmark className={`h-5 w-5 ${isBookmarked ? "fill-primary" : ""}`} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsLiked(!isLiked)}
                        className={isLiked ? "text-red-500" : "text-gray-600"}
                      >
                        <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500" : ""}`} />
                      </Button>
                      <div className="relative">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setShowShareMenu(!showShareMenu)}
                          className="text-gray-600"
                        >
                          <Share2 className="h-5 w-5" />
                        </Button>

                        {showShareMenu && (
                          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg border border-gray-200 shadow-lg z-50">
                            <div className="p-2">
                              <button
                                onClick={shareOnFacebook}
                                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-gray-100 rounded-md text-left"
                              >
                                <Facebook className="h-4 w-4 text-blue-600" />
                                <span>Facebook</span>
                              </button>
                              <button
                                onClick={shareOnTwitter}
                                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-gray-100 rounded-md text-left"
                              >
                                <Twitter className="h-4 w-4 text-blue-400" />
                                <span>Twitter</span>
                              </button>
                              <button
                                onClick={shareOnLinkedIn}
                                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-gray-100 rounded-md text-left"
                              >
                                <Linkedin className="h-4 w-4 text-blue-700" />
                                <span>LinkedIn</span>
                              </button>
                              <button
                                onClick={shareViaWhatsApp}
                                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-gray-100 rounded-md text-left"
                              >
                                <MessageCircle className="h-4 w-4 text-green-600" />
                                <span>WhatsApp</span>
                              </button>
                              <button
                                onClick={shareViaEmail}
                                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-gray-100 rounded-md text-left"
                              >
                                <Mail className="h-4 w-4 text-gray-600" />
                                <span>Email</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative rounded-2xl overflow-hidden mb-12 shadow-lg">
                <div className="relative h-96">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Article Content */}
              <article className="prose prose-lg max-w-none">
                {blog.sections?.map((section: any, index: number) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="mb-16 scroll-mt-8"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>

                    <div className="space-y-6">
                      {section.content?.map((paragraph: string, pIndex: number) => (
                        <p
                          key={pIndex}
                          className="text-gray-700 leading-relaxed text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {section.list && (
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 mt-6">
                          <div className="grid md:grid-cols-2 gap-4">
                            {section.list.map((item: string, listIndex: number) => (
                              <div
                                key={listIndex}
                                className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100"
                              >
                                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </article>

              {/* FAQ Section */}
              {blog.faqs && blog.faqs.length > 0 && (
                <div className="mb-16">
                  <div className="bg-gradient-to-br from-primary/5 to-white rounded-2xl p-8 border border-primary/10">
                    <div className="flex items-center gap-3 mb-8">
                      <Sparkles className="h-6 w-6 text-primary" />
                      <h3 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
                    </div>

                    <div className="space-y-6">
                      {blog.faqs.map((faq: any, index: number) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl border border-gray-200 p-6 hover:border-primary/30 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <span className="text-primary font-bold">Q</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-lg text-gray-900 mb-3">
                                {faq.question}
                              </h4>
                              <p className="text-gray-700">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="mb-16 pt-8 border-t">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <Tag className="h-5 w-5 text-primary" />
                  Article Tags
                </h3>
                <div className="flex flex-wrap gap-3">
                  {blog.tags?.map((tag: string) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Service CTA */}
              {blog.cta && (
                <div className="mb-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                  <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-flex p-3 bg-white/20 rounded-full mb-6">
                      <Sparkles className="h-8 w-8" />
                    </div>

                    <h3 className="text-3xl font-bold mb-6">
                      {blog.cta.title}
                    </h3>

                    <p className="text-xl text-white/90 mb-8">
                      {blog.cta.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href={blog.cta.link}>
                        <Button
                          size="lg"
                          className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold"
                        >
                          {blog.cta.buttonText}
                        </Button>
                      </Link>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Author Bio */}
              <div className="mb-16 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src={blog.author.image}
                        alt={blog.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">About the Author</h3>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-2">{blog.author.name}</h4>
                    <div className="text-primary font-medium mb-4 flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      {blog.author.role}
                    </div>

                    <p className="text-gray-700 mb-6">
                      With over 15 years of experience in Abu Dhabi's building services industry,
                      {blog.author.name} specializes in delivering expert {blog.category.toLowerCase()}
                      solutions. Their commitment to quality and customer satisfaction has made them
                      a trusted authority in the UAE construction sector.
                    </p>

                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm">
                        View All Articles
                      </Button>
                      <Button variant="outline" size="sm">
                        Contact Author
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-6">Table of Contents</h3>
                  <nav className="space-y-3">
                    {blog.sections?.map((section: any) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-colors ${activeSection === section.id
                            ? 'bg-primary text-white'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                          }`}
                      >
                        <div className={`w-8 h-8 rounded flex items-center justify-center ${activeSection === section.id ? 'bg-white/20' : 'bg-gray-100'
                          }`}>
                          <span className="font-semibold text-sm">
                            {section.id === 'services' ? '1' :
                              section.id === 'importance' ? '2' :
                                section.id === 'benefits' ? '3' : '•'}
                          </span>
                        </div>
                        <span className="font-medium">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Related Services */}
                <div className="bg-gradient-to-br from-primary/5 to-white rounded-xl p-6 border border-primary/10">
                  <h3 className="font-bold text-lg mb-4">Need {blog.category} Service?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Professional {blog.category.toLowerCase()} services in Abu Dhabi
                  </p>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Book Service
                  </Button>
                </div>

                {/* Newsletter */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get expert insights on building services
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Subscribe
                    </Button>
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags?.slice(0, 8).map((tag: string) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${tag}`}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <div className="mt-16 pt-12 border-t">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Related Articles</h2>
                  <p className="text-gray-600">More insights on {blog.category?.toLowerCase()}</p>
                </div>
                <Link href="/blog">
                  <Button variant="outline" className="gap-2">
                    View All
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedBlogs.map((related: any) => (
                  <div
                    key={related.slug}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <Link href={`/blog/${related.slug}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={related.coverImage}
                          alt={related.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1.5 bg-white/90 text-primary font-medium rounded-full text-sm">
                            {related.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <CalendarDays className="h-4 w-4" />
                            {new Date(related.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                        </div>

                        <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2">
                          {related.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {related.excerpt}
                        </p>

                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src={related.author.image}
                              alt={related.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            {related.author.name}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>

      {/* Footer Newsletter */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-white">
            <div className="inline-flex p-3 bg-white/10 rounded-full mb-6">
              <Mail className="h-8 w-8" />
            </div>

            <h2 className="text-3xl font-bold mb-6">
              Never Miss an Update
            </h2>

            <p className="text-white/90 mb-8">
              Get weekly expert insights on building services in Abu Dhabi
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your work email"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-white text-gray-900 hover:bg-white/90 rounded-xl px-8 py-4 text-lg font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <Container>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Building className="h-5 w-5" />
                </div>
                <span className="font-bold text-xl">Walid Services</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional building services in Abu Dhabi. Quality work, trusted results.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/services/electrical" className="hover:text-white">Electrical</Link></li>
                <li><Link href="/services/plumbing" className="hover:text-white">Plumbing</Link></li>
                <li><Link href="/services/maintenance" className="hover:text-white">Maintenance</Link></li>
                <li><Link href="/services/carpentry" className="hover:text-white">Carpentry</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Abu Dhabi, UAE</li>
                <li>+971 50 123 4567</li>
                <li>info@walidservices.com</li>
                <li>24/7 Emergency Service</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 Walid Building Services. All rights reserved.
          </div>
        </Container>
      </footer>
    </div>
  );
}

// app/components/blog/blog-card.tsx
import { Blog } from "@/types/blogTypes";
import { CalendarDays, Clock, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  blog: Blog;
  variant?: "default" | "compact" | "featured";
}

export function BlogCard({ blog, variant = "default" }: BlogCardProps) {
  if (variant === "compact") {
    return (
      <Link href={`/blog/${blog.slug}`}>
        <div className="group bg-white rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
          <div className="flex gap-4 p-4">
            <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {blog.category}
                </span>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3" />
                  {blog.readTime}
                </div>
              </div>
              
              <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                {blog.title}
              </h3>
              
              <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <CalendarDays className="h-3 w-3" />
                  {new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <User className="h-3 w-3" />
                  {blog.author.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link href={`/blog/${blog.slug}`}>
        <div className="group relative bg-white rounded-3xl border border-gray-200 hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer">
          <div className="relative h-80">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-6 left-6">
              <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-primary font-medium rounded-full text-sm">
                {blog.category}
              </span>
            </div>
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1 text-sm text-white/90">
                  <CalendarDays className="h-4 w-4" />
                  {new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric',
                    year: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-1 text-sm text-white/90">
                  <Clock className="h-4 w-4" />
                  {blog.readTime}
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-white/95 transition-colors">
                {blog.title}
              </h2>
              
              <p className="text-white/90 mb-4 line-clamp-2">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src={blog.author.image}
                      alt={blog.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">{blog.author.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link href={`/blog/${blog.slug}`}>
      <div className="group bg-white rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-full">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-primary font-medium rounded-full text-sm">
              {blog.category}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <CalendarDays className="h-4 w-4" />
              {new Date(blog.publishedAt).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric' 
              })}
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              {blog.readTime}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3 line-clamp-2">
            {blog.title}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {blog.excerpt}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index} 
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
            {blog.tags.length > 2 && (
              <span className="px-2.5 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                +{blog.tags.length - 2} more
              </span>
            )}
          </div>
          
          {/* Author */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-100">
              <Image
                src={blog.author.image}
                alt={blog.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-medium text-gray-900">{blog.author.name}</div>
              <div className="text-sm text-gray-500">{blog.author.role}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
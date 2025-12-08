import { blogs } from "@/constants/blogData";
import { BlogPage } from "@/pages/blogpage/BlogPage";


export default function BlogListPage() {
  // Extract all unique categories
  const categories = Array.from(new Set(blogs.map(blog => blog.category)));
  
  return (
    <main>
      <BlogPage blogs={blogs} categories={categories} />
    </main>
  );
}
import BlogDetailPage from "@/pages/blogdetailpage/BlogDetailPage";
import { notFound } from "next/navigation";




export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
//   const blogData = services.find((s) => s.slug === slug);
  const blogData = ""

  if (!blogData) {
    notFound();
  }

  return <BlogDetailPage
    blogData={blogData}/>
}
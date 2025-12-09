import { BlogDetailPage } from "@/pages/blogdetailpage/BlogDetailPage";



export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;
  return <BlogDetailPage slug={slug} />
}
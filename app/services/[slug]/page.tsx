
import { services } from "@/constants/servicedata";
import { notFound } from "next/navigation";
import ServiceDetailPage from "@/pages/servicedetailpage/ServiceDetailsPage";




export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const serviceData = services.find((s) => s.slug === slug);

  if (!serviceData) {
    notFound();
  }

  return <ServiceDetailPage
    serviceData={serviceData}/>
}
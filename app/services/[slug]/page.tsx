

import { notFound } from "next/navigation";
import ServiceDetailPage from "@/pages/servicedetailpage/ServiceDetailsPage";
import { allServices } from "@/constants/servicedata";




export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const serviceData = allServices.find((s) => s.slug === slug);

  if (!serviceData) {
    notFound();
  }

  return <ServiceDetailPage
    serviceData={serviceData}/>
}
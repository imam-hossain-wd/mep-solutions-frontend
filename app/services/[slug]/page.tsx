

// import { services } from "@/constants/servicedata"
// import ServiceDetailPage from "@/pages/servicedetailpage/ServiceDetailsPage"
// import { notFound } from "next/navigation"

import { services } from "@/constants/servicedata";
import ServiceDetailsPage from "@/pages/servicedetailpage/ServiceDetailsPage";
import { notFound } from "next/navigation";



// export default async function ServiceDetail({
//   params,
// }: {
//   params: Promise<{ slug: string }>
// }) {

//   // const {slug} = await params ; 
//   const { slug } = await params
//   const service = services.find((s) => s?.slug === slug)
//   console.log(slug, 'slug')
//   console.log(service, 'service')

//   if (!service) return notFound()

//   return <ServiceDetailPage
//     //@ts-ignore
//     service={service} />
// }


import type { Metadata } from "next";
import { getIcon } from "@/utils/icon-mapping";
import { ServiceWithIcons } from "@/types/serviceDataType";
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

  // Resolve icons before passing to client component
  // const service = resolveServiceWithIcons(serviceData);

  // const relatedServices = services
  //   .filter((s) => serviceData.related.includes(s.slug))

  // return <div>service detail page</div>;

  return <ServiceDetailPage
    serviceData={serviceData}
    // relatedServices={relatedServices}
  />
}
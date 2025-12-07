// app/services/[service]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { 
  Wrench, 
  Clock, 
  Shield, 
  CheckCircle, 
  Users, 
  ArrowRight,
  Phone,
  MessageSquare,
  ChevronRight,
  MapPin,
  Home,
  Building,
  Factory
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";
import { SiteConfig } from "@/config/siteConfig";

// Fix: Define proper type for service details
interface ServiceDetail {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  heroImage: string;
  features: string[];
  benefits: string[];
  projects: { title: string; location: string; image: string }[];
}

// Fix: Use Record type for serviceDetails
const serviceDetails: Record<string, ServiceDetail> = {
  "electrical": {
    title: "Electrical Services",
    description: "Professional electrical installation, repair, and maintenance by DM-certified electricians in Abu Dhabi.",
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    heroImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1920",
    features: [
      "Complete Wiring & Rewiring",
      "Electrical Panel Upgrades",
      "Lighting Installation & Repair",
      "Circuit Breaker Services",
      "Emergency Electrical Repairs",
      "Smart Home Solutions",
      "Generator Installation",
      "Electrical Safety Inspections"
    ],
    benefits: [
      "DM Certified Electricians",
      "24/7 Emergency Service",
      "Free Site Inspection",
      "12-Month Warranty",
      "Energy-Efficient Solutions",
      "UAE Regulations Compliant"
    ],
    projects: [
      { title: "Villa Electrical Upgrade", location: "Khalifa City A", image: "https://images.unsplash.com/photo-1592420503146-9e5d6b0e8e5a?auto=format&fit=crop&w=800" },
      { title: "Office Complex Wiring", location: "Al Reem Island", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800" },
      { title: "Hotel Lighting System", location: "Saadiyat Island", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800" }
    ]
  },
  "plumbing": {
    title: "Plumbing & Pipe Fitting",
    description: "Expert plumbing solutions for leaks, installations, and complete pipe system maintenance in Abu Dhabi.",
    icon: ({ className }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
    ),
    heroImage: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=1920",
    features: [
      "Leak Detection & Repair",
      "Pipe Installation & Replacement",
      "Drain Cleaning & Unclogging",
      "Water Heater Services",
      "Bathroom & Kitchen Plumbing",
      "Sewer Line Services",
      "Water Pressure Regulation",
      "Emergency Plumbing Repairs"
    ],
    benefits: [
      "DM Certified Plumbers",
      "24/7 Emergency Response",
      "Advanced Leak Detection",
      "Water-Saving Solutions",
      "Hygiene Certified Work",
      "Comprehensive Warranty"
    ],
    projects: [
      { title: "Hotel Kitchen Plumbing", location: "Yas Island", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800" },
      { title: "Villa Pipe Replacement", location: "MBZ City", image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800" },
      { title: "Shopping Mall Plumbing", location: "Al Maryah Island", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800" }
    ]
  },
  // Add minimal versions of other services
  "maintenance": {
    title: "Building Maintenance",
    description: "Complete building upkeep, repairs, and preventive maintenance services in Abu Dhabi.",
    icon: ({ className }) => <Wrench className={className} />,
    heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920",
    features: ["Preventive Maintenance", "Emergency Repairs", "Regular Inspections", "Scheduled Services"],
    benefits: ["DM Certified", "24/7 Service", "Free Inspection", "12-Month Warranty"],
    projects: [
      { title: "Annual Maintenance", location: "Khalifa City", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800" },
      { title: "Hotel Maintenance", location: "Saadiyat Island", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800" },
      { title: "Office Maintenance", location: "Al Reem Island", image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800" }
    ]
  }
};

const allServices = [
  {
    title: "Electrical Services",
    description: "Professional electrical installation and repair by certified electricians.",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    href: "/services/electrical",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800",
  },
  {
    title: "Plumbing Services",
    description: "Expert plumbing solutions for leaks and installations.",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
    ),
    href: "/services/plumbing",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800",
  },
  {
    title: "Building Maintenance",
    description: "Complete building upkeep, repairs, and preventive maintenance.",
    icon: ({ className }: { className?: string }) => <Wrench className={className} />,
    href: "/services/maintenance",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800",
  }
];

// Fix: Add proper type for props
interface ServicePageProps {
  params: Promise<{ service: string }>;
}

// Fix: Make it async and await params
export default async function ServicePage({ params }: ServicePageProps) {
  // Fix: Await the params promise
  const { service: serviceSlug } = await params;
  
  // Fix: Check if service exists
  const service = serviceDetails[serviceSlug];
  
  if (!service) {
    notFound();
  }

  const ServiceIcon = service.icon;
  const otherServices = allServices.filter(s => s.href !== `/services/${serviceSlug}`);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Simplified */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
        <Container className="relative h-full flex items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary text-white">
                <ServiceIcon className="h-8 w-8" />
              </div>
              <Badge className="bg-white text-primary border-none">
                DM Certified
              </Badge>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {service.title} in{" "}
              <span className="text-primary">Abu Dhabi</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8">
              {service.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 gap-2"
                onClick={() => window.open(SiteConfig.whatsappLink, "_blank")}
              >
                <MessageSquare className="h-5 w-5" />
                Get Quote Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 gap-2"
                onClick={() => window.open(SiteConfig.callLink, "_blank")}
              >
                <Phone className="h-5 w-5" />
                {SiteConfig.displayNumber}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content - Simplified */}
      <Container className="py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Service Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-bold mb-4">Service Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-bold">2 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Warranty</span>
                  <span className="font-bold">12 Months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Technicians</span>
                  <span className="font-bold">50+</span>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="bg-primary text-white rounded-xl p-6">
              <h3 className="font-bold mb-2">24/7 Emergency</h3>
              <p className="text-sm mb-4">Immediate response across Abu Dhabi</p>
              <a
                href={SiteConfig.callLink}
                className="block text-xl font-bold mb-4"
              >
                {SiteConfig.displayNumber}
              </a>
              <Button
                className="w-full bg-white text-primary hover:bg-white/90"
                onClick={() => window.open(SiteConfig.callLink, "_blank")}
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>

        {/* Other Services */}
        {otherServices.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Other Services</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={service.href}
                  image={service.image}
                  ctaText="Learn More"
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
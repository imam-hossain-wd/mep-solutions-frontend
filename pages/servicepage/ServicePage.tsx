'use client'
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";
import { SiteConfig } from "@/config/siteConfig";
import { allServices } from "@/constants/datas";


// const allServices = [
//   {
//     title: "Building Maintenance",
//     description: "Complete building upkeep, repairs, and preventive maintenance for residential and commercial properties across Abu Dhabi.",
//     icon: Wrench,
//     features: ["Preventive Maintenance", "Emergency Repairs", "Regular Inspections", "Scheduled Services"],
//     href: "/services/maintenance",
//     category: "maintenance",
//     image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800",
//     badge: "Popular" as const,
//     projects: 200
//   },
//   {
//     title: "Electrical Services",
//     description: "Professional electrical installation, repair, and maintenance by DM-certified electricians in Abu Dhabi.",
//     icon: Zap,
//     features: ["Wiring & Rewiring", "Panel Upgrades", "Lighting Installation", "Emergency Electrical"],
//     href: "/services/electrical",
//     category: "electrical",
//     image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800",
//     badge: "24/7" as const,
//     projects: 150
//   },
//   {
//     title: "Plumbing & Pipe Fitting",
//     description: "Expert plumbing solutions for leaks, installations, and complete pipe system maintenance in Abu Dhabi.",
//     icon: Droplet,
//     features: ["Leak Detection", "Pipe Installation", "Drain Cleaning", "Water Heater Services"],
//     href: "/services/plumbing",
//     category: "plumbing",
//     image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=800",
//     badge: "Certified" as const,
//     projects: 120
//   },
//   {
//     title: "Welding & Fabrication",
//     description: "Custom metal fabrication and welding services for gates, railings, and structural components in Abu Dhabi.",
//     icon: Sparkles,
//     features: ["Structural Welding", "Metal Fabrication", "Gate Manufacturing", "Custom Railings"],
//     href: "/services/welding",
//     category: "welding",
//     image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
//     projects: 85
//   },
//   {
//     title: "Carpentry & Fit-Out",
//     description: "High-quality carpentry and interior fit-out services for homes and offices in Abu Dhabi.",
//     icon: Hammer,
//     features: ["Custom Furniture", "Interior Fit-Out", "Door & Window Installation", "Woodworking"],
//     href: "/services/carpentry",
//     category: "carpentry",
//     image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800",
//     projects: 95
//   },
//   {
//     title: "Masonry & Civil Works",
//     description: "Professional masonry, concrete work, and civil construction services in Abu Dhabi.",
//     icon: Building,
//     features: ["Brick Work", "Concrete Pouring", "Foundation Work", "Structural Repairs"],
//     href: "/services/masonry",
//     category: "masonry",
//     image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800",
//     projects: 110
//   },
//   {
//     title: "Painting & Finishing",
//     description: "Interior and exterior painting services with premium materials and professional finish in Abu Dhabi.",
//     icon: PaintBucket,
//     features: ["Interior Painting", "Exterior Painting", "Wall Texturing", "Surface Preparation"],
//     href: "/services/painting",
//     category: "painting",
//     image: "https://images.unsplash.com/photo-1562572159-4efc207f5c9f?auto=format&fit=crop&w=800",
//     badge: "Sale" as const,
//     projects: 130
//   },
//   {
//     title: "Partition & Interior Works",
//     description: "Gypsum partitioning, false ceilings, and complete interior renovation services in Abu Dhabi.",
//     icon: Drill,
//     features: ["Gypsum Partitions", "False Ceilings", "Interior Renovation", "Space Optimization"],
//     href: "/services/partition",
//     category: "partition",
//     image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800",
//     projects: 105
//   },
//   {
//     title: "Parking Shade & Outdoor",
//     description: "Custom parking shades, outdoor structures, and fabrication for UAE climate in Abu Dhabi.",
//     icon: Shield,
//     features: ["Car Parking Shades", "Outdoor Shelters", "Pergolas", "Custom Fabrication"],
//     href: "/services/parking-shade",
//     category: "outdoor",
//     image: "https://images.unsplash.com/photo-1600585154340-963ed7476daf?auto=format&fit=crop&w=800",
//     badge: "New" as const,
//     projects: 75
//   }
// ];




export default function ServicesPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative py-8 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-6 px-4 py-2 bg-primary/20 text-primary border-none">
              Our Professional Services
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Building Services in{" "}
              <span className="text-primary">Abu Dhabi</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Professional building maintenance, repair, and construction solutions 
              trusted by residential, commercial, and industrial clients across the UAE.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => window.open(SiteConfig.whatsappLink, "_blank")}
              >
                Get Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open(SiteConfig.callLink, "_blank")}
              >
                {SiteConfig.displayNumber}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Listing */}
      <section className="py-8">
        <Container>
          {/* Filter Header */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-6 mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">All Building Services</h2>
                <p className="text-gray-600">9 professional services for your Abu Dhabi property</p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {allServices.map((service, index) => (
              <ServiceCard
                key={`${service.title}-${index}`}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                badge={service.badge}
                href={service.href}
                image={service.image}
                ctaText="View Service Details"
                className="h-full"
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Need a Custom Building Solution?
                </h3>
                <p className="text-gray-600 mb-8">
                  Our expert team can combine multiple services or create a custom 
                  package for your specific requirements in Abu Dhabi.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="gap-2"
                    onClick={() => window.open(SiteConfig.whatsappLink, "_blank")}
                  >
                    Request Custom Package
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={() => window.open(SiteConfig.callLink, "_blank")}
                  >
                    Call for Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
// app/components/sections/featured-projects.tsx
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Building, 
  Home, 
  Factory,
  Filter,
  Maximize2
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Project data with actual Abu Dhabi locations
const projects = [
  {
    id: 1,
    title: "Khalifa City A Villa Electrical Upgrade",
    description: "Complete electrical rewiring and smart home installation for a luxury villa. DM-certified work with 3-year warranty.",
    category: "electrical",
    location: "Khalifa City A, Abu Dhabi",
    client: "Private Villa Owner",
    year: "2024",
    features: ["Smart Lighting", "Safety Upgrades", "Energy Efficient"],
    images: [
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1592420503146-9e5d6b0e8e5a?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w-1200"
    ],
    stats: { duration: "2 Weeks", budget: "AED 45,000", size: "4500 sq ft" }
  },
  {
    id: 2,
    title: "Yas Mall Food Court Plumbing System",
    description: "Commercial plumbing installation and maintenance for food court area. Compliant with Abu Dhabi Civil Defense regulations.",
    category: "plumbing",
    location: "Yas Island, Abu Dhabi",
    client: "Yas Mall Management",
    year: "2023",
    features: ["Commercial Grade", "Hygiene Certified", "Preventive Maintenance"],
    images: [
      "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200"
    ],
    stats: { duration: "3 Weeks", budget: "AED 120,000", size: "Food Court" }
  },
  {
    id: 3,
    title: "Al Reem Island Office Fit-Out",
    description: "Complete office interior fit-out including partitions, electrical, and HVAC. Delivered 2 weeks ahead of schedule.",
    category: "partition",
    location: "Al Reem Island, Abu Dhabi",
    client: "Tech Company HQ",
    year: "2024",
    features: ["Modern Design", "Acoustic Partitions", "LED Lighting"],
    images: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200"
    ],
    stats: { duration: "6 Weeks", budget: "AED 280,000", size: "8000 sq ft" }
  },
  {
    id: 4,
    title: "Mohammed Bin Zayed City Parking Shades",
    description: "Custom-designed parking shade structures for residential compound. UV-protected material with 10-year warranty.",
    category: "outdoor",
    location: "MBZ City, Abu Dhabi",
    client: "Residential Compound",
    year: "2023",
    features: ["UV Protection", "Storm Resistant", "Custom Design"],
    images: [
      "https://images.unsplash.com/photo-1600585154340-963ed7476daf?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200"
    ],
    stats: { duration: "1 Week", budget: "AED 65,000", size: "20 Car Spaces" }
  },
  {
    id: 5,
    title: "Saadiyat Island Hotel Maintenance Contract",
    description: "Annual maintenance contract for 5-star hotel including electrical, plumbing, and civil works.",
    category: "maintenance",
    location: "Saadiyat Island, Abu Dhabi",
    client: "Luxury Hotel Chain",
    year: "2023-Present",
    features: ["24/7 Support", "Preventive Maintenance", "Emergency Response"],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200"
    ],
    stats: { duration: "Ongoing", budget: "Annual Contract", size: "Hotel Complex" }
  },
  {
    id: 6,
    title: "Al Raha Beach Welding & Fabrication",
    description: "Custom stainless steel railings and gates for waterfront villas. Salt-resistant materials for coastal environment.",
    category: "welding",
    location: "Al Raha Beach, Abu Dhabi",
    client: "Waterfront Villas",
    year: "2024",
    features: ["Stainless Steel", "Salt Resistant", "Custom Design"],
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1581094794796-8f5be4b88c2c?auto=format&fit=crop&w=1200",
      "https://images.unsplash.com/photo-1581094794793-8e5a5f5c5f5c?auto=format&fit=crop&w=1200"
    ],
    stats: { duration: "3 Weeks", budget: "AED 85,000", size: "8 Villas" }
  }
];

const categories = [
  { id: "all", label: "All Projects", count: projects.length },
  { id: "electrical", label: "Electrical", count: projects.filter(p => p.category === "electrical").length },
  { id: "plumbing", label: "Plumbing", count: projects.filter(p => p.category === "plumbing").length },
  { id: "partition", label: "Interior", count: projects.filter(p => p.category === "partition").length },
  { id: "outdoor", label: "Outdoor", count: projects.filter(p => p.category === "outdoor").length },
  { id: "maintenance", label: "Maintenance", count: projects.filter(p => p.category === "maintenance").length },
  { id: "welding", label: "Welding", count: projects.filter(p => p.category === "welding").length }
];

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categoryLabels: Record<string, string> = {
    electrical: "Electrical Services",
    plumbing: "Plumbing & Pipe Fitting",
    partition: "Partition & Interior",
    outdoor: "Parking Shade & Outdoor",
    maintenance: "Building Maintenance",
    welding: "Welding & Fabrication"
  };

  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2">
            <Filter className="h-4 w-4 mr-2" />
            OUR PORTFOLIO
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects in{" "}
            <span className="text-primary">Abu Dhabi</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our high-quality building services and construction projects 
            completed for residential, commercial, and hospitality clients across the UAE.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <Tabs defaultValue="all" onValueChange={setActiveCategory} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`
                    px-6 py-3 rounded-full border data-[state=active]:bg-primary 
                    data-[state=active]:text-white data-[state=active]:border-primary
                    hover:bg-gray-100 transition-all
                  `}
                >
                  <span className="font-medium">{category.label}</span>
                  <span className="ml-2 text-sm opacity-70">({category.count})</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Category Badge */}
                <Badge className="absolute top-4 left-4">
                  {categoryLabels[project.category]}
                </Badge>
                
                {/* View More */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="rounded-full">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-">
                  <Building className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
                
                {/* Features */}
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div> */}
                
                {/* Stats */}
                {/* <div className="grid grid-cols-3 gap-2 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-primary">{project.stats.duration}</div>
                    <div className="text-xs text-gray-500">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-primary">{project.stats.budget}</div>
                    <div className="text-xs text-gray-500">Budget</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-primary">{project.stats.size}</div>
                    <div className="text-xs text-gray-500">Size</div>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Have a Project in Mind?</h3>
              <p className="text-gray-600">
                Get a free consultation and quote for your building service needs.
              </p>
            </div>
            <Button size="lg" className="gap-2 group">
              View All Projects
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Container>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white"
            >
              <span className="sr-only">Close</span>
              <span className="text-2xl">×</span>
            </button>

            {/* Image Gallery */}
            <div className="relative h-96">
              <Image
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              
              {/* Navigation */}
              <button
                onClick={() => setCurrentImageIndex(prev => 
                  prev === 0 ? selectedProject.images.length - 1 : prev - 1
                )}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setCurrentImageIndex(prev => 
                  (prev + 1) % selectedProject.images.length
                )}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Project Details */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <Badge className="mb-3">{categoryLabels[selectedProject.category]}</Badge>
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mt-2">
                    <Building className="h-4 w-4" />
                    <span>{selectedProject.location}</span>
                    <span>•</span>
                    <span>Client: {selectedProject.client}</span>
                    <span>•</span>
                    <span>{selectedProject.year}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{selectedProject.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500">Duration</div>
                  <div className="text-lg font-bold">{selectedProject.stats.duration}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500">Budget</div>
                  <div className="text-lg font-bold">{selectedProject.stats.budget}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-500">Size</div>
                  <div className="text-lg font-bold">{selectedProject.stats.size}</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Request Similar Project
                </Button>
                <Button variant="outline" onClick={() => setSelectedProject(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
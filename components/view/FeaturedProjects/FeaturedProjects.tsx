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
import ProjectCard from "@/components/shared/Card/ProjectCard";
import { projects } from "@/constants/ProjectData";

// Project data with actual Abu Dhabi locations


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
            <ProjectCard
              key={project.id}
              project={project}
              categoryLabels={categoryLabels}
              onSelect={(project:any) => {
                setSelectedProject(project)
                setCurrentImageIndex(0)
              }}
            />
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

// export default function ProjectsPage() {
//   return (
//     <div>ProjectsPage</div>
//   )
// }

// app/components/pages/projects-page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Filter,
  Search,
  MapPin,
  Calendar,
  Building,
  Users,
  DollarSign,
  ChevronRight,
  ArrowRight,
  Star,
  Shield,
  Award,
  Zap,
  Droplet,
  Wrench,
  Hammer,
  PaintBucket,
  Drill,
  Maximize2,
  X,
  Grid3x3,
  List,
  CheckCircle,
  Clock,
  Target
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/constants/ProjectData";

const categories = [
  { id: "all", label: "All Projects", icon: Grid3x3, count: projects.length },
  { id: "electrical", label: "Electrical", icon: Zap, count: projects.filter(p => p.category === "electrical").length },
  { id: "plumbing", label: "Plumbing", icon: Droplet, count: projects.filter(p => p.category === "plumbing").length },
  { id: "partition", label: "Interior", icon: Drill, count: projects.filter(p => p.category === "partition").length },
  { id: "outdoor", label: "Outdoor", icon: Building, count: projects.filter(p => p.category === "outdoor").length },
  { id: "maintenance", label: "Maintenance", icon: Wrench, count: projects.filter(p => p.category === "maintenance").length },
  { id: "welding", label: "Welding", icon: Hammer, count: projects.filter(p => p.category === "welding").length }
];

const locations = ["All Locations", "Khalifa City", "Yas Island", "Al Reem Island", "MBZ City", "Saadiyat Island", "Al Raha Beach"];
const years = ["All Years", "2024", "2023", "2022", "2021"];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesLocation = selectedLocation === "All Locations" || project.location.includes(selectedLocation);
    const matchesYear = selectedYear === "All Years" || project.year.includes(selectedYear);

    return matchesSearch && matchesCategory && matchesLocation && matchesYear;
  });

  // Statistics
  const stats = [
    { value: projects.length, label: "Projects Completed", icon: Target, color: "text-blue-600", bg: "bg-blue-50" },
    { value: "AED 2.5M+", label: "Total Value", icon: DollarSign, color: "text-green-600", bg: "bg-green-50" },
    { value: "98%", label: "Client Satisfaction", icon: Star, color: "text-amber-600", bg: "bg-amber-50" },
    { value: "500+", label: "Happy Clients", icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  const categoryLabels: Record<string, string> = {
    electrical: "Electrical Services",
    plumbing: "Plumbing & Pipe Fitting",
    partition: "Partition & Interior",
    outdoor: "Parking Shade & Outdoor",
    maintenance: "Building Maintenance",
    welding: "Welding & Fabrication"
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "electrical": return <Zap className="h-4 w-4" />;
      case "plumbing": return <Droplet className="h-4 w-4" />;
      case "partition": return <Drill className="h-4 w-4" />;
      case "outdoor": return <Building className="h-4 w-4" />;
      case "maintenance": return <Wrench className="h-4 w-4" />;
      case "welding": return <Hammer className="h-4 w-4" />;
      default: return <Building className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20">
              <Target className="h-4 w-4 mr-2" />
              OUR PORTFOLIO
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Building Excellence Across{" "}
              <span className="text-primary">Abu Dhabi</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover our portfolio of successfully completed projects, showcasing 
              professional building services and construction excellence throughout the UAE.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search projects by title, location, or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-6 rounded-xl text-lg shadow-lg border-gray-200"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 rounded-lg px-6">
                Search
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`inline-flex p-3 rounded-xl ${stat.bg} ${stat.color} mb-3`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Container>
        <div className="py-12">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
                <p className="text-gray-600">
                  Showing {filteredProjects.length} of {projects.length} projects
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* View Toggle */}
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md ${viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-white/50"}`}
                  >
                    <Grid3x3 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-md ${viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-white/50"}`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>

                {/* Location Filter */}
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 bg-white"
                >
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>

                {/* Year Filter */}
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-gray-300 bg-white"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all ${
                      selectedCategory === category.id
                        ? "bg-primary text-white border-primary"
                        : "bg-white border-gray-300 hover:border-primary/50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{category.label}</span>
                    <Badge className={`ml-2 ${
                      selectedCategory === category.id 
                        ? "bg-white/20 text-white" 
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {category.count}
                    </Badge>
                  </button>
                );
              })}
            </div>

            {/* Active Filters */}
            {(selectedCategory !== "all" || selectedLocation !== "All Locations" || selectedYear !== "All Years" || searchTerm) && (
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-sm text-gray-600">Active filters:</span>
                {selectedCategory !== "all" && (
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {categories.find(c => c.id === selectedCategory)?.label}
                    <button onClick={() => setSelectedCategory("all")} className="ml-2">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {selectedLocation !== "All Locations" && (
                  <Badge className="bg-blue-100 text-blue-800">
                    {selectedLocation}
                    <button onClick={() => setSelectedLocation("All Locations")} className="ml-2">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {selectedYear !== "All Years" && (
                  <Badge className="bg-green-100 text-green-800">
                    {selectedYear}
                    <button onClick={() => setSelectedYear("All Years")} className="ml-2">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                {searchTerm && (
                  <Badge className="bg-amber-100 text-amber-800">
                    Search: {searchTerm}
                    <button onClick={() => setSearchTerm("")} className="ml-2">
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedLocation("All Locations");
                    setSelectedYear("All Years");
                    setSearchTerm("");
                  }}
                >
                  Clear All
                </Button>
              </div>
            )}
          </div>

          {/* Projects Grid/List */}
          {filteredProjects.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card 
                    key={project.id} 
                    className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 backdrop-blur-sm text-primary">
                          {getCategoryIcon(project.category)}
                          <span className="ml-2">{categoryLabels[project.category] || project.category}</span>
                        </Badge>
                      </div>
                      
                      {/* Year */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-sm font-medium">{project.year}</span>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-gray-500 mb-4">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{project.location}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span>{project.stats.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4 text-gray-400" />
                            <span>{project.stats.budget}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-2">
                          View Details
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              // List View
              <div className="space-y-6">
                {filteredProjects.map((project) => (
                  <Card 
                    key={project.id} 
                    className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative h-64 md:h-auto">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent md:hidden" />
                      </div>
                      
                      <CardContent className="flex-1 p-6">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <Badge className="bg-primary/10 text-primary border-primary/20">
                                {categoryLabels[project.category]}
                              </Badge>
                              <span className="text-sm text-gray-500">{project.year}</span>
                            </div>
                            
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            
                            <p className="text-gray-600 mb-4">
                              {project.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-4 mb-4">
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="h-4 w-4" />
                                <span className="text-sm">{project.location}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <Building className="h-4 w-4" />
                                <span className="text-sm">{project.client}</span>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {project.features.map((feature, index) => (
                                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="md:text-right">
                            <div className="space-y-2">
                              <div className="text-lg font-bold text-primary">{project.stats.budget}</div>
                              <div className="text-sm text-gray-600">{project.stats.duration}</div>
                              <div className="text-sm text-gray-600">{project.stats.size}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">No Projects Found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedLocation("All Locations");
                  setSelectedYear("All Years");
                  setSearchTerm("");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredProjects.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex p-3 bg-white/20 rounded-full mb-6">
              <Target className="h-8 w-8" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your building vision to life with professional 
              expertise and quality craftsmanship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold"
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white shadow-lg"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Main Image */}
            <div className="relative h-96">
              <Image
                src={selectedProject.images[activeImageIndex]}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              
              {/* Image Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {selectedProject.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeImageIndex === index ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8">
              <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {getCategoryIcon(selectedProject.category)}
                      <span className="ml-2">{categoryLabels[selectedProject.category]}</span>
                    </Badge>
                    <Badge variant="outline">{selectedProject.year}</Badge>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {selectedProject.title}
                  </h2>
                  
                  <p className="text-gray-700 text-lg mb-6">
                    {selectedProject.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      <span>{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="h-5 w-5" />
                      <span>{selectedProject.client}</span>
                    </div>
                  </div>
                </div>
                
                {/* Stats Sidebar */}
                <div className="lg:w-80 space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4">Project Details</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration</span>
                          <span className="font-semibold">{selectedProject.stats.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Budget</span>
                          <span className="font-semibold text-primary">{selectedProject.stats.budget}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Size</span>
                          <span className="font-semibold">{selectedProject.stats.size}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {selectedProject.images.length > 1 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`relative h-40 rounded-xl overflow-hidden ${
                          activeImageIndex === index ? 'ring-2 ring-primary' : ''
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${selectedProject.title} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                <Button size="lg" className="flex-1 bg-gradient-to-r from-primary to-secondary">
                  Request Similar Project
                </Button>
                <Button size="lg" variant="outline" onClick={() => setSelectedProject(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

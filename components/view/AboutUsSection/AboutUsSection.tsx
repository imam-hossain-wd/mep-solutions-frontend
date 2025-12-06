// app/components/sections/about-us-section.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  CheckCircle, 
  MapPin, 
  Clock,
  Building,
  Shield,
  TrendingUp,
  Handshake
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteConfig } from "@/config/siteConfig";

export function AboutUsSection() {
  const [activeTab, setActiveTab] = useState("mission");

  const companyStats = [
    { value: "15+", label: "Years Experience", description: "Serving Abu Dhabi since 2009" },
    { value: "500+", label: "Projects Completed", description: "Residential & Commercial" },
    { value: "50+", label: "Expert Technicians", description: "DM Certified Team" },
    { value: "98%", label: "Client Satisfaction", description: "Repeat Business Rate" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest pricing, transparent communication, and ethical business practices in every project.",
      color: "blue"
    },
    {
      icon: CheckCircle,
      title: "Quality",
      description: "DM-certified workmanship, premium materials, and 12-month warranty on all services.",
      color: "green"
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "24/7 emergency service, on-time project delivery, and consistent performance.",
      color: "orange"
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Long-term relationships with clients, understanding their unique building service needs.",
      color: "purple"
    },
  ];

  const milestones = [
    { year: "2009", event: "Founded in Abu Dhabi", description: "Started with electrical services" },
    { year: "2012", event: "DM Certification", description: "Licensed by Dubai Municipality" },
    { year: "2015", event: "Service Expansion", description: "Added 8 new building services" },
    { year: "2018", event: "Team Growth", description: "Expanded to 50+ technicians" },
    { year: "2021", event: "Green Certified", description: "Eco-friendly building solutions" },
    { year: "2024", event: "Digital Transformation", description: "Online booking & management" },
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <Container>
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2">
            <Building className="h-4 w-4 mr-2" />
            ABOUT OUR COMPANY
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Building Excellence in{" "}
            <span className="text-primary">Abu Dhabi</span> Since 2009
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are the trusted partner for comprehensive building maintenance, repairs, 
            and construction services across the UAE. Combining local expertise with 
            international standards to deliver exceptional results.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {companyStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200"
                  alt="Walid Building Services Team in Abu Dhabi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-sm font-semibold">Years in UAE</div>
                <div className="text-xs text-gray-600">Building Services</div>
              </div>
            </div>

            {/* Location Tag */}
            <div className="absolute top-6 left-6">
              <Badge className="bg-white/90 backdrop-blur-sm">
                <MapPin className="h-4 w-4 mr-2" />
                Based in {SiteConfig.city}
              </Badge>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Trusted Building Services Partner in{" "}
                <span className="text-primary">Abu Dhabi</span>
              </h2>
              
              <p className="text-gray-700 mb-4 text-lg">
                Founded in 2009, {SiteConfig.brandName} has grown to become one of 
                Abu Dhabi's most reliable building service providers. What started 
                as a small electrical service company has evolved into a comprehensive 
                building solutions provider serving residential, commercial, and 
                industrial clients across the UAE.
              </p>
              
              <p className="text-gray-700 mb-6 text-lg">
                Our deep understanding of Abu Dhabi's building regulations, climate 
                challenges, and architectural requirements allows us to deliver 
                services that are not only compliant but optimized for the local 
                environment.
              </p>
            </div>

            {/* Mission/Vision/Values Tabs */}
            <div className="mb-8">
              <div className="flex border-b mb-6">
                {[
                  { id: "mission", label: "Our Mission", icon: Target },
                  { id: "vision", label: "Our Vision", icon: Eye },
                  { id: "values", label: "Our Values", icon: Heart },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 font-medium transition-all ${
                      activeTab === tab.id
                        ? "text-primary border-b-2 border-primary"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl">
                {activeTab === "mission" && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                    <p className="text-gray-700">
                      To provide exceptional building maintenance and construction services 
                      that enhance the safety, functionality, and value of properties across 
                      Abu Dhabi. We are committed to delivering reliable, high-quality solutions 
                      with transparent pricing and outstanding customer service.
                    </p>
                  </div>
                )}
                
                {activeTab === "vision" && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                    <p className="text-gray-700">
                      To be the most trusted building services provider in the UAE, recognized 
                      for our technical expertise, commitment to quality, and dedication to 
                      client satisfaction. We aim to set industry standards through innovation, 
                      sustainability, and continuous improvement.
                    </p>
                  </div>
                )}
                
                {activeTab === "values" && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Our Core Values</h3>
                    <ul className="space-y-3">
                      {["Integrity in all dealings", "Quality without compromise", 
                        "Reliability you can count on", "Innovation in solutions", 
                        "Safety as priority #1"].map((value, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-gray-700">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Sets Us <span className="text-primary">Apart</span>
            </h2>
            <p className="text-gray-600">
              Our commitment to excellence is built on these core principles
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group bg-white p-6 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`
                  w-14 h-14 rounded-xl flex items-center justify-center mb-6
                  ${value.color === 'blue' ? 'bg-blue-100 text-blue-600' : ''}
                  ${value.color === 'green' ? 'bg-green-100 text-green-600' : ''}
                  ${value.color === 'orange' ? 'bg-orange-100 text-orange-600' : ''}
                  ${value.color === 'purple' ? 'bg-purple-100 text-purple-600' : ''}
                  group-hover:scale-110 transition-transform
                `}>
                  <value.icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>
                
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team & Expertise */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-primary">Expert Team</span>
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">50+ Certified Technicians</h4>
                    <p className="text-gray-600">
                      DM-certified electricians, plumbers, welders, carpenters, and 
                      civil engineers with extensive UAE experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Continuous Training</h4>
                    <p className="text-gray-600">
                      Regular safety training, technical workshops, and certification 
                      updates to maintain industry-leading standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Safety First</h4>
                    <p className="text-gray-600">
                      Comprehensive safety protocols, PPE compliance, and regular 
                      site inspections to ensure accident-free operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Electrical Team", count: "15", color: "blue" },
                  { label: "Plumbing Team", count: "12", color: "green" },
                  { label: "Civil & Masonry", count: "10", color: "orange" },
                  { label: "Support Staff", count: "13", color: "purple" },
                ].map((team) => (
                  <div
                    key={team.label}
                    className="bg-white p-6 rounded-2xl shadow border text-center"
                  >
                    <div className={`text-3xl font-bold text-${team.color}-600 mb-2`}>
                      {team.count}
                    </div>
                    <div className="text-sm font-semibold text-gray-900">
                      {team.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Journey</span> in Abu Dhabi
            </h2>
            <p className="text-gray-600">
              Milestones in our growth and commitment to excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary hidden md:block" />
            
            <div className="space-y-8 md:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow border inline-block max-w-md">
                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-lg font-bold mb-2">{milestone.event}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block relative">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white" />
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-right'}`}>
                    {/* Empty for spacing */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with Abu Dhabi's Trusted Building Partner?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Join hundreds of satisfied clients who trust us with their building 
              maintenance and construction needs across the UAE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.open(SiteConfig.whatsappLink, "_blank")}
              >
                Get Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.open(SiteConfig.callLink, "_blank")}
              >
                Call {SiteConfig.displayNumber}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
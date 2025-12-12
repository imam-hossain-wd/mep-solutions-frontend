"use client";
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  FileCheck,
  ChevronRight
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SiteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export function WhyChooseUs() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Certified Excellence",
      description: "DM & Abu Dhabi Civil Defense certified with 100% compliance",
      accent: "before:bg-blue-500"
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description: "24/7 emergency service with <2 hour response guarantee",
      accent: "before:bg-amber-500"
    },
    {
      icon: Award,
      title: "Local Expertise",
      description: "15+ years mastering Abu Dhabi's unique requirements",
      accent: "before:bg-purple-500"
    },
    {
      icon: FileCheck,
      title: "Quality Assured",
      description: "12-month comprehensive warranty on all work",
      accent: "before:bg-emerald-500"
    }
  ];

  return (
    <section className="relative py-8 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Architectural Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Foundation */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f8fafc_1px,transparent_1px),linear-gradient(#f8fafc_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Structural Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
        
        {/* Corner Accents */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary rotate-45" />
        <div className="absolute top-10 right-10 w-2 h-2 bg-secondary rotate-45" />
        <div className="absolute bottom-10 left-10 w-2 h-2 bg-primary rotate-45" />
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-secondary rotate-45" />
      </div>

      <Container className="relative">
        {/* Header with Architectural Typography */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-3 h-3 bg-primary" />
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">
              The Foundation
            </span>
            <div className="w-3 h-3 bg-secondary" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="block text-gray-900">
              Built on Four
            </span>
            <span className="block">
              <span className="relative">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Pillars of Excellence
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
              </span>
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality, speed, expertise, and trust defines every project
          </p>
        </div>

        {/* Architectural Pillars Design */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Structural Beam */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="relative group"
              >
                {/* Vertical Pillar Line */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -translate-x-1/2" />
                
                {/* Pillar Container */}
                <div className="relative bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Top Architectural Cap */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-4 bg-gradient-to-r from-primary to-secondary clip-pentagon" />
                  </div>
                  
                  {/* Icon with Architectural Base */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-lg transform rotate-6" />
                    <div className={cn(
                      "relative w-20 h-20 rounded-lg",
                      "bg-gradient-to-br from-white to-gray-50",
                      "border border-gray-100",
                      "flex items-center justify-center",
                      "mx-auto"
                    )}>
                      <pillar.icon className="h-10 w-10 text-gray-700" />
                    </div>
                    
                    {/* Pillar Base */}
                    <div className={cn(
                      "absolute -bottom-2 left-1/2 transform -translate-x-1/2",
                      "w-12 h-2",
                      pillar.accent
                    )} />
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                    
                    {/* Measurement Indicator */}
                    <div className="pt-4 flex items-center justify-center">
                      <div className="w-full max-w-32 h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300" />
                      <div className="mx-4 text-xs text-gray-500 font-mono">
                        {index + 1}/4
                      </div>
                      <div className="w-full max-w-32 h-px bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Foundation Stats */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-gray-50 to-white p-8 border border-gray-100">
            {/* Foundation Beam */}
            <div className="absolute -top-1 left-0 right-0 h-2 bg-gradient-to-r from-primary via-primary/50 to-secondary" />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "500+", label: "Projects", detail: "Completed" },
                { value: "98%", label: "Client", detail: "Satisfaction" },
                { value: "50+", label: "Expert", detail: "Technicians" },
                { value: "15+", label: "Years", detail: "Experience" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {stat.detail}
                    </div>
                  </div>
                  
                  {/* Connecting Dot */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Minimal CTA */}
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <a
            href={SiteConfig.callLink}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            <span>Begin Your Project</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </Container>

      {/* Custom Shape CSS */}
      <style jsx global>{`
        .clip-pentagon {
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        }
      `}</style>
    </section>
  );
}
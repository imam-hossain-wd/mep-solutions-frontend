'use client'

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Calendar, Shield, Clock, MapPin, CheckCircle, Award } from "lucide-react";
import Image from "next/image";
import { SiteConfig } from "@/config/siteConfig";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 pt-16 md:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

      {/* Gradient Orbs - Optimized for mobile */}
      <div className="absolute top-10 left-5 w-48 h-48 md:w-72 md:h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-5 w-56 h-56 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <Container className="relative z-10 py-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up order-2 lg:order-1">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20">
              <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
              <span className="text-xs md:text-sm font-medium text-primary">
                Trusted in {SiteConfig.city}, {SiteConfig.country}
              </span>
            </div>

            {/* Main Heading - Reduced Size */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block text-foreground">
                  Expert Building
                </span>
                <span className="block text-primary mt-1 md:mt-2">
                  Services in UAE
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl">
                Complete building maintenance, repairs, and construction solutions for residential, commercial, and industrial properties across Abu Dhabi.
              </p>
            </div>

            {/* Key Features - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 py-4">
              {[
                { icon: Shield, text: "DM Approved & Licensed", sub: "Fully Certified" },
                { icon: Clock, text: "24/7 Emergency Service", sub: "Quick Response" },
                { icon: Award, text: "Quality Guaranteed", sub: "12-Month Warranty" },
                { icon: CheckCircle, text: "Expert Technicians", sub: "Trained & Experienced" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-background/50 backdrop-blur-sm border">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm md:text-base truncate">{feature.text}</p>
                    <p className="text-xs md:text-sm text-muted-foreground truncate">{feature.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
              <Button
                size="lg"
                className="flex-1 group h-12 md:h-14"
                onClick={() => window.open(SiteConfig.whatsappLink, '_blank')}
              >
                <MessageSquare className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base">WhatsApp Now</span>
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="flex-1 group h-12 md:h-14"
                onClick={() => window.open(SiteConfig.callLink, '_blank')}
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base">Call {SiteConfig.displayNumber.split(' ')[0]}</span>
              </Button>
            </div>

            {/* Quick Stats - Responsive */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 pt-6 md:pt-8 border-t">
              {[
                { number: "500+", label: "Projects" },
                { number: "50+", label: "Technicians" },
                { number: "24/7", label: "Service" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-3 md:p-4 rounded-lg bg-background/50">
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Gallery */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Main Image */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-square md:aspect-[4/5] relative">
                {/* Replace with your actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqrUf399gOr5twh1eQT3eAfRrNHHer3Pwjiwv1gz-Mw&s=10" // Replace with your image
                    alt="Building Services in Abu Dhabi"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    priority
                  />
                </div>

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg">
                    <p className="text-sm md:text-base text-muted-foreground">Need Immediate Help?</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-lg md:text-xl font-bold text-primary">{SiteConfig.displayNumber}</p>
                      <Button size="sm" className="shadow-md">
                        <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                        <span className="text-xs md:text-sm">Call Now</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Image Cards */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-2 border-background animate-float">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPQ3t4Px9aFBJXyVrTM7381BTaqsV8rdlkwnp4ZiSylyOLPS0J2nA-I0n4&s=10 " // Replace with service image
                alt="Electrical Services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 128px"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>

            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-20 h-20 md:w-28 md:h-28 rounded-xl md:rounded-2xl overflow-hidden shadow-xl border-2 border-background animate-float delay-1000">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoqrUf399gOr5twh1eQT3eAfRrNHHer3Pwjiwv1gz-Mw&s=10" // Replace with service image
                alt="Plumbing Services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80px, 112px"
              />
              <div className="absolute inset-0 bg-secondary/20"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-1/4 -right-2 md:-right-6 bg-background p-3 md:p-4 rounded-lg md:rounded-xl shadow-lg border hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="p-1.5 md:p-2 rounded-lg bg-accent/10">
                  <Award className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-xs md:text-sm">Certified</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">DM Approved</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hide on small screens */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-2 md:h-3 bg-primary rounded-full mt-1 md:mt-2"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
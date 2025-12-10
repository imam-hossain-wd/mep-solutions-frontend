
"use client";

import { useState, useEffect } from "react";
import { getIcon } from "@/utils/icon-mapping";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  CheckCircle2,
  Clock,
  DollarSign,
  Home,
  Building2,
  Factory,
  MapPin,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  PhoneCall,
  ShieldCheck,
  Truck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { allServices } from "@/constants/servicedata";

interface ServiceDetailsPageProps {
  serviceData: any;
}

export default function ServiceDetailsPage({ serviceData }: ServiceDetailsPageProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  // Get related services
  const relatedServices = allServices.filter((s) =>
    serviceData?.related?.includes(s.slug)
  );

  // Get icon component
  const ServiceIcon = getIcon(serviceData?.icon);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Icon mapping for service types
  const serviceTypeIcons = {
    Residential: Home,
    Commercial: Building2,
    Industrial: Factory,
  };

  // Stats for quick info
  const stats = [
    {
      label: "Response Time",
      value: serviceData?.responseTime,
      icon: Clock,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      label: "Warranty",
      value: serviceData?.warranty,
      icon: Shield,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      label: "Price Range",
      value: serviceData?.priceRange,
      icon: DollarSign,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      label: "Certification",
      value: serviceData?.certification,
      icon: Award,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
  ];

  // Trust factors
  const trustFactors = [
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      description: "Fully compliant with UAE regulations",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "50+ Experts",
      description: "Skilled professional team",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Star,
      title: "4.9/5 Rating",
      description: "Customer satisfaction",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: Truck,
      title: "Quick Response",
      description: serviceData?.responseTime + " response",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  // Handle emergency call
  const handleEmergencyCall = () => {
    window.location.href = "tel:+971501234567";
  };

  // Handle WhatsApp
  const handleWhatsApp = () => {
    window.open("https://wa.me/971501234567", "_blank");
  };

  // Handle booking
  const handleBooking = () => {
    // Implement booking logic here
    console.log("Booking initiated for:", serviceData?.title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className={`relative pt-20 pb-28 px-4 md:px-6 text-white bg-gradient-to-br ${serviceData?.heroColor} overflow-hidden`}>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Back Button */}
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="mb-8 text-white hover:bg-white/20 backdrop-blur-sm rounded-full px-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg">
                  <ServiceIcon className="h-12 w-12" />
                </div>
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 text-base px-4 py-2 rounded-full animate-pulse">
                  {serviceData?.badge}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {serviceData?.title}
              </h1>

              <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
                {serviceData?.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors duration-300"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className={`h-4 w-4 ${stat?.color}`} />
                        <span className="text-sm font-medium text-white/90">{stat?.label}</span>
                      </div>
                      <p className="text-xl font-bold text-white">{stat?.value}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  onClick={handleBooking}
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Free Inspection
                </Button>
                <Button
                  onClick={handleEmergencyCall}
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/20 rounded-full px-8 py-6 text-base font-semibold backdrop-blur-sm"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Call
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  // src={serviceData?.projects[selectedProjectIndex]?.image}
                  src="https://hvaccareermap.org/assets/image-uploads/Commercial-Service-Tech_resized.jpg"
                  alt={serviceData?.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium">Featured Project</p>
                  <h3 className="text-xl font-bold">{serviceData?.projects[selectedProjectIndex]?.title}</h3>
                  <p className="text-white/80">{serviceData?.projects[selectedProjectIndex]?.location}</p>
                </div>

                {/* Project thumbnails */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                  {serviceData?.projects?.map((project: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedProjectIndex(index)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 ${selectedProjectIndex === index ? 'border-white' : 'border-transparent'}`}
                    >
                      <Image
                        // src={project?.image}
                        src="https://hvaccareermap.org/assets/image-uploads/Commercial-Service-Tech_resized.jpg"
                        alt={project?.title}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto -mt-4">
        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="sticky top-4 z-30 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg mb-8">
            <TabsList className="grid w-full grid-cols-4 bg-transparent p-1">
              {["overview", "features", "process", "projects"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300 capitalize"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-12 animate-fade-in">
            {/* Service Distribution */}
            <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Service Distribution</h2>
                    <p className="text-gray-600">Breakdown of our service delivery</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {serviceData?.serviceTypes?.map((type: any, index: number) => {
                    const Icon = serviceTypeIcons[type.type as keyof typeof serviceTypeIcons];
                    return (
                      <div key={index} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <Icon className="h-5 w-5 text-gray-600" />
                            <span className="font-semibold text-lg">{type?.type}</span>
                          </div>
                          <span className="font-bold text-xl text-primary">{type?.percentage}%</span>
                        </div>
                        <Progress value={type?.percentage} className="h-3 rounded-full" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Benefits Section */}
            <div>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
                <p className="text-gray-600 text-lg">Quality service with guaranteed satisfaction</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {serviceData?.benefits?.map((benefit: any, index: number) => {
                  const BenefitIcon = getIcon(benefit?.icon);
                  return (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <BenefitIcon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-2">{benefit?.text}</h3>
                            <p className="text-gray-600">{benefit?.desc}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-8 animate-fade-in">
            <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Our Service Features</h2>
                    <p className="text-gray-600">Comprehensive solutions for all your needs</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {serviceData?.features?.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gray-50 hover:bg-white rounded-xl transition-all duration-300 group"
                    >
                      <CheckCircle2 className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Process Tab */}
          <TabsContent value="process" className="space-y-8 animate-fade-in">
            <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Our 4-Step Process</h2>
                    <p className="text-gray-600">Streamlined workflow for maximum efficiency</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary to-secondary/20 hidden md:block"></div>

                  <div className="space-y-12">
                    {serviceData?.process?.map((step: any, index: number) => (
                      <div key={index} className="relative flex items-start gap-8">
                        <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold text-2xl">{step.step}</span>
                        </div>

                        <div className="flex-1 pt-2">
                          <h3 className="text-2xl font-bold mb-3">{step?.title}</h3>
                          <p className="text-gray-600 text-lg">{step?.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-8 animate-fade-in">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
              <p className="text-gray-600 text-lg">See our work in action</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {serviceData?.projects?.map((project: any, index: number) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => window.open(project?.image, '_blank')}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project?.image}
                      alt={project?.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">{project?.location}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-3">{project?.title}</h3>
                    <div className="flex items-center text-primary font-medium">
                      <span>View Project</span>
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Trust Us</h2>
            <p className="text-gray-600 text-lg">Our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustFactors.map((factor, index) => {
              const Icon = factor?.icon;
              return (
                <Card key={index} className="border-0 shadow-lg rounded-2xl text-center p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className={`inline-flex p-3 rounded-full mb-4 ${factor?.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{factor?.title}</h3>
                  <p className="text-gray-600">{factor?.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices?.length > 0 && (
        <section className="py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Related Services</h2>
              <p className="text-gray-600 text-lg">Explore other services you might need</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices?.map((service) => {
                const RelatedIcon = getIcon(service?.icon);
                return (
                  <Link
                    key={service?.slug}
                    href={`/services/${service?.slug}`}
                    className="block"
                  >
                    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${service?.heroColor} text-white`}>
                            <RelatedIcon className="h-6 w-6" />
                          </div>
                          <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
                            {service?.badge}
                          </Badge>
                        </div>
                        <h3 className="font-bold text-xl mb-3">{service?.title}</h3>
                        <p className="text-gray-600 mb-4">
                          {service.description.substring(0, 100)}...
                        </p>
                        <div className="flex items-center text-primary font-medium">
                          <span>Learn More</span>
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex p-3 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <PhoneCall className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Contact us today for a free consultation and quote. Our experts are ready to assist you with your project in Abu Dhabi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              onClick={handleBooking}
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Inspection
            </Button>
            <Button
              onClick={handleEmergencyCall}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg font-semibold backdrop-blur-sm"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +971 50 123 4567
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-white/80">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-white/80">Free Inspection</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-green-400" />
              <span className="text-white/80">Certified Professionals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
// app/components/sections/about-us-section.tsx
"use client";

import { useState, useEffect } from "react";
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
  Handshake,
  Sparkles,
  Rocket,
  Lightbulb,
  Globe,
  Building2,
  ThumbsUp,
  Star,
  Zap,
  ChevronRight,
  Phone,
  Mail,
  MessageSquare
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { SiteConfig } from "@/config/siteConfig";

export function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission");
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateStats(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const companyStats = [
    { 
      value: "15+", 
      label: "Years Experience", 
      description: "Serving Abu Dhabi since 2009",
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      value: "500+", 
      label: "Projects Completed", 
      description: "Residential & Commercial",
      icon: CheckCircle,
      color: "from-emerald-500 to-green-500"
    },
    { 
      value: "50+", 
      label: "Expert Technicians", 
      description: "DM Certified Team",
      icon: Users,
      color: "from-amber-500 to-orange-500"
    },
    { 
      value: "98%", 
      label: "Client Satisfaction", 
      description: "Repeat Business Rate",
      icon: Star,
      color: "from-violet-500 to-purple-500"
    },
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Integrity First",
      description: "Transparent pricing, honest communication, and ethical practices in every project",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      features: ["No Hidden Costs", "Honest Assessment", "Clear Communication"]
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "DM-certified workmanship with premium materials and comprehensive warranties",
      color: "bg-gradient-to-br from-emerald-500 to-green-600",
      features: ["12-Month Warranty", "Premium Materials", "Quality Control"]
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "24/7 emergency response, on-time delivery, and consistent performance",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
      features: ["24/7 Service", "On-Time Delivery", "Emergency Response"]
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Building long-term relationships based on trust and mutual success",
      color: "bg-gradient-to-br from-violet-500 to-purple-600",
      features: ["Long-term Support", "Regular Maintenance", "Client Relationships"]
    },
  ];

  const milestones = [
    { 
      year: "2009", 
      title: "Foundation", 
      description: "Started with electrical services in Abu Dhabi",
      icon: Zap,
      highlight: true
    },
    { 
      year: "2013", 
      title: "DM Certification", 
      description: "Licensed by Dubai Municipality for all services",
      icon: Shield,
      highlight: true
    },
    { 
      year: "2016", 
      title: "Expansion", 
      description: "Added comprehensive building maintenance services",
      icon: Building2,
      highlight: false
    },
    { 
      year: "2019", 
      title: "Team Growth", 
      description: "Expanded to 50+ certified technicians",
      icon: Users,
      highlight: false
    },
    { 
      year: "2022", 
      title: "Green Certified", 
      description: "Eco-friendly and sustainable building solutions",
      icon: Globe,
      highlight: false
    },
    { 
      year: "2024", 
      title: "Digital Innovation", 
      description: "Advanced online booking and project management",
      icon: Lightbulb,
      highlight: true
    },
  ];

  const teamDepartments = [
    { name: "Electrical", count: 15, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { name: "Plumbing", count: 12, color: "bg-gradient-to-r from-emerald-500 to-teal-500" },
    { name: "Civil Works", count: 10, color: "bg-gradient-to-r from-amber-500 to-orange-500" },
    { name: "Welding", count: 8, color: "bg-gradient-to-r from-rose-500 to-pink-500" },
    { name: "Carpentry", count: 8, color: "bg-gradient-to-r from-violet-500 to-purple-500" },
    { name: "Management", count: 5, color: "bg-gradient-to-r from-gray-600 to-gray-800" },
  ];

  const certifications = [
    { name: "Dubai Municipality", code: "DM", status: "Active" },
    { name: "Abu Dhabi Civil Defense", code: "ADCD", status: "Active" },
    { name: "ISO 9001:2015", code: "ISO", status: "Certified" },
    { name: "Green Building Council", code: "GBC", status: "Member" },
    { name: "ASME/AWS", code: "AWS", status: "Certified" },
    { name: "UAE Safety Standards", code: "USS", status: "Compliant" },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl rotate-12 opacity-50" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed">
        <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl -rotate-12 opacity-50" />
      </div>

      <Container>
        {/* Hero Header */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-4 w-4 mr-2" />
            OUR STORY & VALUES
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent animate-fade-in-up">
            Building Excellence <br />
            <span className="text-primary">Across Abu Dhabi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed">
            For over 15 years, we've been the trusted partner for comprehensive building 
            solutions in the UAE, combining local expertise with international standards 
            to deliver exceptional results.
          </p>
        </div>

        {/* Animated Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 animate-fade-in-up-delayed-2">
          {companyStats.map((stat, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
            >
              <CardContent className="p-8 relative">
                {/* Gradient Background */}
                <div className={`absolute inset-0 opacity-5 ${stat.color} group-hover:opacity-10 transition-opacity`} />
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${stat.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300 inline-flex items-center justify-center`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Animated Number */}
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {animateStats ? stat.value : "0"}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content - Mission & Vision */}
        <div className="mb-24">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="sticky top-4 z-30 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg mb-8 max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 bg-transparent p-1">
                <TabsTrigger 
                  value="mission" 
                  className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Target className="h-5 w-5 mr-2" />
                  Our Mission
                </TabsTrigger>
                <TabsTrigger 
                  value="vision" 
                  className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Eye className="h-5 w-5 mr-2" />
                  Our Vision
                </TabsTrigger>
                <TabsTrigger 
                  value="story" 
                  className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Our Story
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Mission Tab */}
            <TabsContent value="mission" className="animate-fade-in">
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden max-w-4xl mx-auto">
                <CardContent className="p-12">
                  <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-2/5">
                      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800"
                          alt="Our Mission"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                          <Target className="h-8 w-8 mb-2" />
                          <h3 className="text-xl font-bold">Our Purpose</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Our <span className="text-primary">Mission</span>
                      </h2>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        To revolutionize building services in Abu Dhabi by providing 
                        exceptional quality, reliability, and value. We are committed 
                        to enhancing the safety, functionality, and longevity of every 
                        property we serve.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-lg mb-1">Safety First Approach</h4>
                            <p className="text-gray-600">UAE safety standards compliance in every project</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-lg mb-1">Customer-Centric Service</h4>
                            <p className="text-gray-600">Tailored solutions for every client's unique needs</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-lg mb-1">Innovation & Excellence</h4>
                            <p className="text-gray-600">Continual improvement through technology and training</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Vision Tab */}
            <TabsContent value="vision" className="animate-fade-in">
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden max-w-4xl mx-auto">
                <CardContent className="p-12">
                  <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                    <div className="md:w-2/5">
                      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800"
                          alt="Our Vision"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                          <Eye className="h-8 w-8 mb-2" />
                          <h3 className="text-xl font-bold">Future Vision</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Our <span className="text-secondary">Vision</span>
                      </h2>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        To be the undisputed leader in building services across the UAE, 
                        setting new standards for quality, innovation, and customer satisfaction 
                        in the construction and maintenance industry.
                      </p>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl">
                        <h4 className="font-bold text-xl mb-4">Strategic Goals</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="font-medium">Digital Transformation</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="font-medium">Sustainable Practices</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="font-medium">Regional Expansion</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="font-medium">Industry Leadership</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Story Tab */}
            <TabsContent value="story" className="animate-fade-in">
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden max-w-4xl mx-auto">
                <CardContent className="p-12">
                  <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-2/5">
                      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800"
                          alt="Our Story"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                          <Rocket className="h-8 w-8 mb-2" />
                          <h3 className="text-xl font-bold">Our Journey</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/5">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Our <span className="text-primary">Story</span>
                      </h2>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                        Founded in 2009, we began as a small electrical service company with 
                        a vision to provide reliable building solutions in Abu Dhabi. Through 
                        dedication, quality workmanship, and customer-focused service, we've 
                        grown into a comprehensive building services provider trusted by 
                        hundreds of clients across the UAE.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-lg mb-1">Local Expertise</h4>
                            <p className="text-gray-600">Deep understanding of Abu Dhabi's unique building requirements</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <TrendingUp className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-lg mb-1">Continuous Growth</h4>
                            <p className="text-gray-600">Expanding our services and expertise year after year</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Core Values Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide every decision and action we take
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden"
              >
                <CardContent className="p-6 relative">
                  {/* Value Icon */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${value.color} p-3 group-hover:scale-110 transition-transform duration-300 inline-flex items-center justify-center`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {value.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {value.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team & Expertise Section */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Team Info */}
            <div>
              <Badge className="mb-4 px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary">
                OUR TEAM
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our <span className="text-primary">Expert Team</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our strength lies in our diverse team of certified professionals who 
                bring years of UAE-specific experience to every project. From master 
                electricians to skilled carpenters, each member is dedicated to 
                excellence.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">50+ Certified Professionals</h4>
                    <p className="text-gray-600">
                      DM-certified electricians, plumbers, welders, carpenters, and civil engineers 
                      with extensive UAE experience.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl">
                    <Award className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Continuous Training</h4>
                    <p className="text-gray-600">
                      Regular safety training, technical workshops, and certification updates 
                      to maintain industry-leading standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl">
                    <Shield className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Safety First Culture</h4>
                    <p className="text-gray-600">
                      Comprehensive safety protocols, PPE compliance, and regular site 
                      inspections for accident-free operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Team Chart */}
            <div>
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-8 text-center">Our Team Distribution</h3>
                  
                  <div className="space-y-6">
                    {teamDepartments.map((dept, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{dept.name}</span>
                          <span className="font-bold text-gray-900">{dept.count} members</span>
                        </div>
                        <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className={`absolute top-0 left-0 h-full ${dept.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: animateStats ? `${(dept.count / 15) * 100}%` : '0%' 
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">58 Total</div>
                      <div className="text-sm text-gray-600">Certified Professionals</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              Milestones in our growth and commitment to excellence
            </p>
          </div>

          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary hidden lg:block" />
            
            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } ${index < milestones.length - 1 ? 'lg:mb-24' : ''}`}
                >
                  {/* Content Card */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card 
                      className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                        milestone.highlight ? 'bg-gradient-to-br from-primary/5 to-secondary/5' : ''
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 rounded-xl ${milestone.highlight ? 'bg-gradient-to-br from-primary to-secondary text-white' : 'bg-gray-100 text-gray-700'}`}>
                            <milestone.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                            {milestone.highlight && (
                              <Badge className="mt-1 bg-primary/20 text-primary border-0">
                                Key Milestone
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-bold mb-2">{milestone.title}</h4>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block relative z-10">
                    <div className={`w-6 h-6 rounded-full border-4 border-white ${
                      milestone.highlight 
                        ? 'bg-gradient-to-br from-primary to-secondary' 
                        : 'bg-gray-300'
                    }`} />
                  </div>
                  
                  {/* Empty Space */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-primary">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600">
              Fully compliant with UAE regulations and international standards
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-gray-800">{cert.code}</span>
                  </div>
                  
                  <h4 className="font-bold text-gray-900 mb-1">{cert.name}</h4>
                  <Badge 
                    className={`${
                      cert.status === 'Active' || cert.status === 'Certified'
                        ? 'bg-green-100 text-green-800 hover:bg-green-100'
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                    }`}
                  >
                    {cert.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl -skew-y-2 transform" />
          
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-12 text-center">
              <div className="inline-flex p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-6">
                <ThumbsUp className="h-8 w-8 text-primary" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build with <span className="text-primary">Excellence</span>?
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join hundreds of satisfied clients across Abu Dhabi who trust us with 
                their building maintenance and construction needs. Let's create something 
                remarkable together.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  onClick={() => window.open(SiteConfig.whatsappLink, "_blank")}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Get Free Consultation
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 rounded-full px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300"
                  onClick={() => window.open(SiteConfig.callLink, "_blank")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call {SiteConfig.displayNumber}
                </Button>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>24/7 Emergency Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Free Site Inspection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>12-Month Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delayed-2 {
          animation: fade-in-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
}
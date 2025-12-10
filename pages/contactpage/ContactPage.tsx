// app/components/sections/contact-us-section.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle,
  Shield,
  Users,
  Building,
  Globe,
  ChevronRight,
  ThumbsUp,
  Award,
  Sparkles,
  Zap,
  Heart,
  Calendar,
  FileText,
  Smartphone,
  Headphones,
  Video
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SiteConfig } from "@/config/siteConfig";
import { allServices } from "@/constants/servicedata";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredContact: "phone"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeContact, setActiveContact] = useState("phone");

  const contactMethods = [
    {
      id: "phone",
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      details: SiteConfig.displayNumber,
      actionText: "Call Now",
      action: () => window.location.href = SiteConfig.callLink,
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      highlight: true
    },
    {
      id: "whatsapp",
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Instant messaging for quick queries",
      details: "Chat on WhatsApp",
      actionText: "Start Chat",
      action: () => window.open(SiteConfig.whatsappLink, "_blank"),
      color: "from-green-500 to-emerald-500",
      bg: "bg-green-50",
      highlight: true
    },
    {
      id: "email",
      icon: Mail,
      title: "Email Us",
      description: "Send detailed project requirements",
      details: SiteConfig.email,
      actionText: "Send Email",
      action: () => window.location.href = `mailto:${SiteConfig.email}`,
      color: "from-red-500 to-pink-500",
      bg: "bg-red-50",
      highlight: false
    },
    {
      id: "visit",
      icon: MapPin,
      title: "Visit Office",
      description: "Schedule an office visit",
      details: SiteConfig.location,
      actionText: "Get Directions",
      action: () => window.open(SiteConfig.googleMapsLink, "_blank"),
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50",
      highlight: false
    },
  ];

  const serviceHours = [
    { day: "Sunday - Thursday", time: "7:00 AM - 10:00 PM", emergency: true },
    { day: "Friday", time: "9:00 AM - 6:00 PM", emergency: true },
    { day: "Saturday", time: "9:00 AM - 6:00 PM", emergency: true },
  ];

  const emergencyServices = [
    {
      icon: Zap,
      title: "Electrical Emergencies",
      description: "Power outage, sparking, circuit issues",
      response: "2 Hours",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      icon: Building,
      title: "Plumbing Emergencies",
      description: "Burst pipes, leaks, flooding",
      response: "1 Hour",
      color: "bg-gradient-to-br from-cyan-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Structural Issues",
      description: "Cracks, safety hazards, damage",
      response: "4 Hours",
      color: "bg-gradient-to-br from-amber-500 to-orange-500"
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        preferredContact: "phone"
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl rotate-12 opacity-50" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed">
        <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl -rotate-12 opacity-50" />
      </div>

      <Container>
        {/* Hero Header */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-4 w-4 mr-2" />
            GET IN TOUCH
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent animate-fade-in-up">
            Contact Us for <br />
            <span className="text-primary">Exceptional Service</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delayed">
            Reach out to Abu Dhabi's trusted building services partner. Our team is ready 
            to discuss your project, provide expert advice, and deliver outstanding results.
          </p>
        </div>

        {/* Emergency Banner */}
        <div className="mb-16 animate-fade-in-up-delayed-2">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-6 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Zap className="h-8 w-8 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">24/7 Emergency Service</h3>
                  <p className="text-white/90">Immediate response for urgent building issues</p>
                </div>
              </div>
              
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = SiteConfig.callLink}
              >
                <Phone className="mr-2 h-5 w-5" />
                Emergency Call Now
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method) => (
            <Card 
              key={method.id}
              className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${method.bg} ${
                activeContact === method.id ? 'ring-2 ring-offset-2 ring-primary' : ''
              }`}
              onClick={() => {
                setActiveContact(method.id);
                method.action();
              }}
            >
              <CardContent className="p-6 relative">
                {method.highlight && (
                  <Badge className="absolute -top-2 left-6 bg-gradient-to-r from-primary to-secondary text-white border-0">
                    Recommended
                  </Badge>
                )}
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} p-3 mb-6 flex items-center justify-center`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {method.description}
                </p>
                
                <div className="text-lg font-semibold text-gray-900 mb-4">
                  {method.details}
                </div>
                
                <div className="flex items-center text-primary font-medium">
                  <span>{method.actionText}</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                    <Send className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Send Us a Message</h2>
                    <p className="text-gray-600">We'll respond within 2 hours</p>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex p-4 bg-gradient-to-br from-green-100 to-green-200 rounded-full mb-6">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. Our team will get back to you within 2 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="border-primary text-primary hover:bg-primary/5"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+971 50 123 4567"
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="h-12 rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-gray-700">
                        Service Required
                      </Label>
                      <Select 
                        value={formData.service} 
                        onValueChange={(value) => setFormData({...formData, service: value})}
                      >
                        <SelectTrigger className="h-12 rounded-xl">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {allServices.map((service) => (
                            <SelectItem key={service.slug} value={service.slug}>
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, specific requirements, or any issues you're facing..."
                        required
                        rows={4}
                        className="rounded-xl min-h-[120px]"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-gray-700">
                        Preferred Contact Method
                      </Label>
                      <div className="flex flex-wrap gap-4">
                        {contactMethods.map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setFormData({...formData, preferredContact: method.id})}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                              formData.preferredContact === method.id
                                ? 'border-primary bg-primary/5 text-primary'
                                : 'border-gray-200 hover:border-primary/50'
                            }`}
                          >
                            <method.icon className="h-4 w-4" />
                            <span>{method.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                    
                    <p className="text-center text-sm text-gray-500">
                      By submitting, you agree to our privacy policy. We'll never share your information.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Office Location Card */}
            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Our Office Location</h2>
                    <p className="text-gray-600">Visit us for a face-to-face consultation</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Address</h4>
                      <p className="text-gray-600">{SiteConfig.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Phone</h4>
                      <p className="text-gray-600">{SiteConfig.displayNumber}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Email</h4>
                      <p className="text-gray-600">{SiteConfig.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800"
                    alt="Office Location"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <Button
                    onClick={() => window.open(SiteConfig.googleMapsLink, "_blank")}
                    className="absolute bottom-4 left-4 bg-white text-gray-900 hover:bg-gray-100"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Open in Maps
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Service Hours */}
            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Service Hours</h2>
                    <p className="text-gray-600">We're here when you need us</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {serviceHours.map((hour, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <div className="font-semibold text-gray-900">{hour.day}</div>
                        <div className="text-gray-600">{hour.time}</div>
                      </div>
                      {hour.emergency && (
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                          24/7 Emergency
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Headphones className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-bold">Customer Support</h4>
                      <p className="text-sm text-gray-600">Available during service hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Guarantee */}
            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-r from-primary to-secondary text-white">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    <ThumbsUp className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Quick Response Guarantee</h2>
                    <p className="text-white/90">We value your time</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>2-hour response time for general inquiries</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>1-hour emergency response in Abu Dhabi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Free site inspection within 24 hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Services */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              24/7 <span className="text-primary">Emergency Services</span>
            </h2>
            <p className="text-xl text-gray-600">
              Immediate response for urgent building issues across Abu Dhabi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {emergencyServices.map((service, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group cursor-pointer"
                onClick={() => window.location.href = SiteConfig.callLink}
              >
                <CardContent className="p-8 relative">
                  <div className={`absolute top-0 right-0 w-24 h-24 ${service.color} rounded-full -translate-y-12 translate-x-12 opacity-10 group-hover:opacity-20 transition-opacity`} />
                  
                  <div className={`w-16 h-16 rounded-2xl ${service.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300 inline-flex items-center justify-center`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-500">Response Time</div>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                      {service.response}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Channels */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Multiple <span className="text-primary">Contact Channels</span>
            </h2>
            <p className="text-xl text-gray-600">
              Choose the most convenient way to reach us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Video,
                title: "Video Consultation",
                description: "Virtual site visit and consultation",
                action: "Schedule Call",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: FileText,
                title: "Online Quote",
                description: "Instant pricing for your project",
                action: "Get Quote",
                color: "from-amber-500 to-orange-500"
              },
              {
                icon: Calendar,
                title: "Site Visit",
                description: "Free on-site assessment",
                action: "Book Visit",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Smartphone,
                title: "Mobile App",
                description: "Track your project progress",
                action: "Download",
                color: "from-green-500 to-emerald-500"
              },
            ].map((channel, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${channel.color} p-3 mb-4 mx-auto`}>
                    <channel.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">
                    {channel.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {channel.description}
                  </p>
                  
                  <Button variant="outline" className="w-full">
                    {channel.action}
                  </Button>
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
                <Heart className="h-8 w-8 text-primary" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Build Something <span className="text-primary">Amazing</span> Together
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Whether it's a small repair or a major construction project, we're here to 
                provide expert guidance and exceptional service every step of the way.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  onClick={() => window.open(SiteConfig.whatsappLink, "_blank")}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Start a Conversation
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 rounded-full px-8 py-6 text-lg font-semibold hover:scale-105 transition-all duration-300"
                  onClick={() => window.location.href = SiteConfig.callLink}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call {SiteConfig.displayNumber}
                </Button>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Service Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">2-Hour</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">Free</div>
                  <div className="text-sm text-gray-600">Site Inspection</div>
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

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}
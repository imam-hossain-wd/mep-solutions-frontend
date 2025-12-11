// // app/components/sections/contact-us-section.tsx
// "use client";

// import { useState } from "react";
// import { 
//   MapPin, 
//   Phone, 
//   Mail, 
//   MessageSquare, 
//   CheckCircle, 
//   Building,
//   User,
//   FileText,
//   Send,
//   AlertCircle
// } from "lucide-react";
// import { Container } from "@/components/ui/container";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { SiteConfig } from "@/config/siteConfig";
// import { cn } from "@/lib/utils";

// export function ContactUsSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//     urgency: "normal"
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const services = [
//     "Building Maintenance",
//     "Electrical Services",
//     "Plumbing & Pipe Fitting",
//     "Welding & Fabrication",
//     "Carpentry & Fit-Out",
//     "Masonry & Civil Works",
//     "Painting & Finishing",
//     "Partition & Interior",
//     "Parking Shade & Outdoor",
//     "Other/General Inquiry"
//   ];

//   const urgencyOptions = [
//     { value: "emergency", label: "Emergency (24/7)", description: "Need immediate assistance" },
//     { value: "urgent", label: "Urgent", description: "Within 24 hours" },
//     { value: "normal", label: "Normal", description: "Within 2-3 business days" },
//     { value: "planning", label: "Planning", description: "Future project consultation" }
//   ];

//   const contactMethods = [
//     {
//       icon: Phone,
//       title: "Call Us",
//       details: SiteConfig.displayNumber,
//       action: "Call Now",
//       href: SiteConfig.callLink,
//       color: "primary",
//       description: "24/7 emergency service available"
//     },
//     {
//       icon: MessageSquare,
//       title: "WhatsApp",
//       details: "Quick Response",
//       action: "Chat Now",
//       href: SiteConfig.whatsappLink,
//       color: "green",
//       description: "Typically reply within 15 minutes"
//     },
//     {
//       icon: Mail,
//       title: "Email",
//       details: SiteConfig.email,
//       action: "Send Email",
//       href: `mailto:${SiteConfig.email}`,
//       color: "blue",
//       description: "Response within 2 business hours"
//     },
//     {
//       icon: MapPin,
//       title: "Visit Office",
//       details: SiteConfig.location,
//       action: "Get Directions",
//       href: "https://goo.gl/maps/",
//       color: "orange",
//       description: "Khalifa City, Abu Dhabi"
//     }
//   ];

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};

//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone is required";
//     } else if (!/^[\+]?[971]+[-\s\.]?[0-9]{9,10}$/.test(formData.phone.replace(/\s/g, ''))) {
//       newErrors.phone = "Please enter a valid UAE phone number";
//     }

//     if (!formData.service) newErrors.service = "Please select a service";
//     if (!formData.message.trim()) newErrors.message = "Please describe your requirement";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setIsSubmitting(true);

//     // Simulate API call
//     setTimeout(() => {
//       console.log("Form submitted:", formData);
//       setIsSubmitting(false);
//       setIsSubmitted(true);

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         service: "",
//         message: "",
//         urgency: "normal"
//       });

//       // Reset success message after 5 seconds
//       setTimeout(() => setIsSubmitted(false), 5000);
//     }, 1500);
//   };

//   const handleChange = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors(prev => ({ ...prev, [field]: "" }));
//     }
//   };

//   return (
//     <section className="py-8 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
//       <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
//       <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

//       <Container>
//         {/* Header Section */}
//         <div className="text-center max-w-4xl mx-auto mb-8">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-3">
//             <MessageSquare className="h-4 w-4 text-primary" />
//             <span className="text-sm font-semibold text-primary">GET IN TOUCH</span>
//           </div>

//           <h1 className="text-4xl md:text-5xl font-bold mb-3">
//             Contact Our <span className="text-primary">Abu Dhabi</span> Team
//           </h1>

//           <p className="text-md text-gray-600 max-w-3xl mx-auto">
//             Ready to discuss your building service needs? Our expert team in Khalifa City 
//             is here to provide professional solutions for residential, commercial, and 
//             industrial projects across the UAE.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-start">
//           {/* Left Column - Contact Form */}
//           <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
//             <div className="flex items-center gap-3 mb-8">
//               <div className="p-3 rounded-xl bg-primary/10">
//                 <FileText className="h-6 w-6 text-primary" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold">Send Us a Message</h2>
//                 <p className="text-gray-600">Fill out the form below and we'll contact you shortly</p>
//               </div>
//             </div>

//             {isSubmitted ? (
//               <div className="text-center py-12">
//                 <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <CheckCircle className="h-10 w-10 text-green-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-3">Message Sent Successfully!</h3>
//                 <p className="text-gray-600 mb-6">
//                   Thank you for contacting {SiteConfig.brandName}. Our team will 
//                   respond within 2 business hours.
//                 </p>
//                 <div className="flex gap-4 justify-center">
//                   <Button
//                     variant="outline"
//                     onClick={() => setIsSubmitted(false)}
//                   >
//                     Send Another Message
//                   </Button>
//                   <a href={SiteConfig.whatsappLink} target="_blank">
//                     <Button>
//                       <MessageSquare className="h-4 w-4 mr-2" />
//                       WhatsApp Now
//                     </Button>
//                   </a>
//                 </div>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Name & Email */}
//                 <div className="grid sm:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       <span className="flex items-center gap-1">
//                         <User className="h-4 w-4" />
//                         Full Name *
//                       </span>
//                     </label>
//                     <Input
//                       type="text"
//                       placeholder="John Smith"
//                       value={formData.name}
//                       onChange={(e) => handleChange("name", e.target.value)}
//                       className={cn(
//                         errors.name && "border-red-500 focus-visible:ring-red-500"
//                       )}
//                     />
//                     {errors.name && (
//                       <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                         <AlertCircle className="h-3 w-3" />
//                         {errors.name}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       <span className="flex items-center gap-1">
//                         <Mail className="h-4 w-4" />
//                         Email Address *
//                       </span>
//                     </label>
//                     <Input
//                       type="email"
//                       placeholder="john@example.com"
//                       value={formData.email}
//                       onChange={(e) => handleChange("email", e.target.value)}
//                       className={cn(
//                         errors.email && "border-red-500 focus-visible:ring-red-500"
//                       )}
//                     />
//                     {errors.email && (
//                       <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                         <AlertCircle className="h-3 w-3" />
//                         {errors.email}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Phone & Service */}
//                 <div className="grid sm:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       <span className="flex items-center gap-1">
//                         <Phone className="h-4 w-4" />
//                         Phone Number *
//                       </span>
//                       <span className="text-xs text-gray-500 font-normal">UAE format: +971 XX XXX XXXX</span>
//                     </label>
//                     <Input
//                       type="tel"
//                       placeholder="+971 56 643 8421"
//                       value={formData.phone}
//                       onChange={(e) => handleChange("phone", e.target.value)}
//                       className={cn(
//                         errors.phone && "border-red-500 focus-visible:ring-red-500"
//                       )}
//                     />
//                     {errors.phone && (
//                       <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                         <AlertCircle className="h-3 w-3" />
//                         {errors.phone}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       <span className="flex items-center gap-1">
//                         <Building className="h-4 w-4" />
//                         Service Required *
//                       </span>
//                     </label>
//                     <Select
//                       value={formData.service}
//                       onValueChange={(value) => handleChange("service", value)}
//                     >
//                       <SelectTrigger className={cn(
//                         errors.service && "border-red-500 focus-visible:ring-red-500"
//                       )}>
//                         <SelectValue placeholder="Select a service" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         {services.map((service) => (
//                           <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
//                             {service}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                     {errors.service && (
//                       <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                         <AlertCircle className="h-3 w-3" />
//                         {errors.service}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     <span className="flex items-center gap-1">
//                       <FileText className="h-4 w-4" />
//                       Project Details *
//                     </span>
//                   </label>
//                   <Textarea
//                     placeholder="Please describe your building service requirements, project location, timeline, and any specific concerns..."
//                     rows={5}
//                     value={formData.message}
//                     onChange={(e:any) => handleChange("message", e.target.value)}
//                     className={cn(
//                       "min-h-[120px]",
//                       errors.message && "border-red-500 focus-visible:ring-red-500"
//                     )}
//                   />
//                   {errors.message && (
//                     <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                       <AlertCircle className="h-3 w-3" />
//                       {errors.message}
//                     </p>
//                   )}
//                 </div>

//                 {/* Submit Button */}
//                 <Button
//                   type="submit"
//                   size="lg"
//                   disabled={isSubmitting}
//                   className="w-full group"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
//                       Sending Message...
//                     </>
//                   ) : (
//                     <>
//                       Send Message
//                       <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                     </>
//                   )}
//                 </Button>

//                 <p className="text-center text-sm text-gray-500">
//                   By submitting this form, you agree to our{" "}
//                   <a href="/privacy" className="text-primary hover:underline">
//                     Privacy Policy
//                   </a>
//                 </p>
//               </form>
//             )}
//           </div>

//           {/* Right Column - Contact Info & Map */}
//           <div className="space-y-8">
//             {/* Contact Methods */}
//             <div className="grid sm:grid-cols-2 gap-6">
//               {contactMethods.map((method) => (
//                 <a
//                   key={method.title}
//                   href={method.href}
//                   target={method.href.startsWith('http') ? '_blank' : undefined}
//                   rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                   className={cn(
//                     "group p-6 rounded-2xl border transition-all hover:shadow-xl hover:-translate-y-1",
//                     "bg-white"
//                   )}
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className={cn(
//                       "p-3 rounded-xl",
//                       method.color === 'primary' && "bg-primary/10 text-primary",
//                       method.color === 'green' && "bg-green-100 text-green-600",
//                       method.color === 'blue' && "bg-blue-100 text-blue-600",
//                       method.color === 'orange' && "bg-orange-100 text-orange-600"
//                     )}>
//                       <method.icon className="h-6 w-6" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="font-bold text-lg mb-1">{method.title}</h3>
//                       <p className="text-gray-900 font-medium">{method.details}</p>
//                       <p className="text-gray-600 text-sm mt-1">{method.description}</p>
//                       <div className={cn(
//                         "inline-flex items-center gap-1 mt-3 text-sm font-medium",
//                         method.color === 'primary' && "text-primary",
//                         method.color === 'green' && "text-green-600",
//                         method.color === 'blue' && "text-blue-600",
//                         method.color === 'orange' && "text-orange-600"
//                       )}>
//                         {method.action}
//                         <span className="group-hover:translate-x-1 transition-transform">→</span>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               ))}
//             </div>


//             {/* Map Placeholder */}
//             <div className="rounded-2xl overflow-hidden border h-52 relative bg-gray-100">
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
//                 <div className="text-center">
//                   <MapPin className="h-12 w-12 text-primary mx-auto mb-3" />
//                   <h4 className="font-bold text-lg">Khalifa City, Abu Dhabi</h4>
//                   <p className="text-gray-600">Our headquarters location</p>
//                   <a 
//                     href="https://goo.gl/maps/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block mt-3 text-primary font-medium hover:underline"
//                   >
//                     Open in Google Maps →
//                   </a>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>      
//       </Container>
//     </section>
//   );
// }

// app/components/sections/contact-us-section.tsx
"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  Building,
  User,
  FileText,
  Send,
  AlertCircle,
  Target
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SiteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    area: "",
    message: "",
    urgency: "normal"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    "Building Maintenance",
    "Electrical Services",
    "Plumbing & Pipe Fitting",
    "Welding & Fabrication",
    "Carpentry & Fit-Out",
    "Masonry & Civil Works",
    "Painting & Finishing",
    "Partition & Interior",
    "Parking Shade & Outdoor",
    "Other/General Inquiry"
  ];

  const serviceAreas = [
    "Khalifa City",
    "Mohammed Bin Zayed City",
    "Masdar City",
    "Al Bateen"
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: SiteConfig.displayNumber,
      action: "Call Now",
      href: SiteConfig.callLink,
      color: "primary",
      description: "24/7 service"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: "Quick chat",
      action: "Chat",
      href: SiteConfig.whatsappLink,
      color: "green",
      description: "Fast response"
    },
    {
      icon: Mail,
      title: "Email",
      details: SiteConfig.email,
      action: "Email",
      href: `mailto:${SiteConfig.email}`,
      color: "blue",
      description: "2 hour response"
    },
    {
      icon: MapPin,
      title: "Visit Office",
      details: "Get directions",
      action: "Map",
      href: "https://maps.google.com/maps?q=24.4205429,54.5501594",
      color: "orange",
      description: "Abu Dhabi"
    }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[\+]?[971]+[-\s\.]?[0-9]{9,10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid UAE phone number";
    }

    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Please describe your requirement";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        area: "",
        message: "",
        urgency: "normal"
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section className="py-12 bg-white">
      <Container>
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-3">
            <MessageSquare className="h-3 w-3 text-primary" />
            <span className="text-xs font-semibold text-primary">GET IN TOUCH</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Contact Our <span className="text-primary">Abu Dhabi</span> Team
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your building service needs? Our expert team in Abu Dhabi
            is here to provide professional solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Contact Form */}
          <div>
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Send Message</h2>
                  <p className="text-gray-600 text-sm">We'll contact you shortly</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Thank you for contacting {SiteConfig.brandName}. We'll respond soon.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another
                    </Button>
                    <a href={SiteConfig.whatsappLink} target="_blank">
                      <Button size="sm">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={cn(
                          "h-10",
                          errors.name && "border-red-500 focus-visible:ring-red-500"
                        )}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={cn(
                          "h-10",
                          errors.email && "border-red-500 focus-visible:ring-red-500"
                        )}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        placeholder="+971 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={cn(
                          "h-10",
                          errors.phone && "border-red-500 focus-visible:ring-red-500"
                        )}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Service Required *
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleChange("service", value)}
                      >
                        <SelectTrigger className={cn(
                          "h-10",
                          errors.service && "border-red-500 focus-visible:ring-red-500"
                        )}>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.service}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Area */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Service Area
                    </label>
                    <Select
                      value={formData.area}
                      onValueChange={(value) => handleChange("area", value)}
                    >
                      <SelectTrigger className="h-10">
                        <SelectValue placeholder="Select your area" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceAreas.map((area) => (
                          <SelectItem key={area} value={area}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Project Details *
                    </label>
                    <Textarea
                      placeholder="Describe your requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={(e: any) => handleChange("message", e.target.value)}
                      className={cn(
                        "min-h-[100px]",
                        errors.message && "border-red-500 focus-visible:ring-red-500"
                      )}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-11"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}


            </div>
            <div className="grid grid-cols-2 gap-3 mt-4 border p-4 rounded-lg shadow">
              {contactMethods.map((method) => (
                <Link
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-2 rounded-lg border transition-all hover:shadow bg-white"
                >
                  <div className="flex justify-center gap-5 items-center text-center">
                    <div className={cn(
                      "p-2 rounded-lg",
                      method.color === 'primary' && "bg-primary/10 text-primary",
                      method.color === 'green' && "bg-green-100 text-green-600",
                      method.color === 'blue' && "bg-blue-100 text-blue-600",
                      method.color === 'orange' && "bg-orange-100 text-orange-600"
                    )}>
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div>
                      {/* <h3 className="font-semibold text-sm mb-1">{method.title}</h3>
                      <p className="text-gray-600 text-xs">{method.description}</p> */}
                      <div className={cn(
                        "text-xs font-medium",
                        method.color === 'primary' && "text-primary",
                        method.color === 'green' && "text-green-600",
                        method.color === 'blue' && "text-blue-600",
                        method.color === 'orange' && "text-orange-600"
                      )}>
                        {method.action}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-6">

            {/* Map Section */}
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h2 className="font-bold">Our Office Location</h2>
                  <p className="text-gray-600 text-sm">Abu Dhabi, United Arab Emirates</p>
                </div>
              </div>

              {/* Replace the placeholder div with this iframe */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.015539165693!2d54.512015!3d24.3657026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e41fe7943bdfb%3A0xe24721545bc2da73!2sWahid%20Building%20Maintaince%20Works!5e0!3m2!1sen!2sae!4v1733932800000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps location of Wahid Building Maintenance Works"
                ></iframe>
              </div>
            </div>
            {/* Service Areas */}
            <div className="bg-white rounded-xl border shadow-sm p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Target className="h-4 w-4 text-primary" />
                </div>
                <h2 className="font-bold">Our Service Areas</h2>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                We provide services across these areas in Abu Dhabi:
              </p>

              <div className="grid grid-cols-2 gap-2">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <MapPin className="h-3 w-3 text-primary" />
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                <p className="text-xs text-gray-600">
                  <span className="font-medium text-primary">Note:</span> Additional areas available upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
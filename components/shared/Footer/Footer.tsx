// app/components/layout/footer.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Linkedin,
  Send,
  CheckCircle,
  Shield,
  Award,
  Building
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Add your newsletter subscription logic here
      console.log("Subscribed:", email);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const services = [
    { name: "Building Maintenance", href: "/services/maintenance" },
    { name: "Electrical Services", href: "/services/electrical" },
    { name: "Plumbing & Pipe Fitting", href: "/services/plumbing" },
    { name: "Welding & Fabrication", href: "/services/welding" },
    { name: "Carpentry & Fit-Out", href: "/services/carpentry" },
    { name: "Masonry & Civil Works", href: "/services/masonry" },
    { name: "Painting & Finishing", href: "/services/painting" },
    { name: "Partition & Interior", href: "/services/partition" },
    { name: "Parking Shade & Outdoor", href: "/services/parking-shade" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Request Quote", href: "/quote" },
  ];

  const certifications = [
    { name: "Dubai Municipality", code: "DM-45892" },
    { name: "Abu Dhabi Civil Defense", code: "ADCD-Certified" },
    { name: "ISO 9001:2015", code: "Quality Management" },
    { name: "Green Building Certified", code: "UAE-GBC" },
    { name: "Health & Safety Certified", code: "OSHAD" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Building className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{SiteConfig.brandName}</h3>
                <p className="text-gray-400 text-sm">Building Services • {SiteConfig.city}</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6">
              Professional building maintenance, repairs, and construction solutions 
              serving Abu Dhabi and the UAE since 2009.
            </p>
            
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            
            {/* Certifications Badges */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-gray-300">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.slice(0, 3).map((cert) => (
                  <div key={cert.name} className="px-3 py-1 bg-gray-800 rounded-full text-xs">
                    {cert.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <CheckCircle className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Emergency Contact */}
            <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border-l-4 border-secondary">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold">24/7 Emergency</span>
              </div>
              <a 
                href={SiteConfig.callLink}
                className="text-lg font-bold hover:text-secondary transition-colors"
              >
                {SiteConfig.displayNumber}
              </a>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Information</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Office Address</p>
                  <p className="text-gray-400 text-sm">{SiteConfig.location}, {SiteConfig.city}, {SiteConfig.country}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone Number</p>
                  <a 
                    href={SiteConfig.callLink}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {SiteConfig.displayNumber}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium">Email Address</p>
                  <a 
                    href={`mailto:${SiteConfig.email}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {SiteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe for maintenance tips and special offers
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                    required
                  />
                  <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                {subscribed && (
                  <p className="text-green-400 text-sm flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Successfully subscribed!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="py-6 border-t border-gray-800 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h5 className="font-semibold mb-2 text-gray-300">Licensed & Certified By</h5>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-400">{cert.name}</span>
                    <span className="text-xs text-gray-500">({cert.code})</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-400">We Accept:</div>
              <div className="flex gap-2">
                {['Visa', 'MasterCard', 'Apple Pay', 'Cash'].map((method) => (
                  <div key={method} className="px-3 py-1 bg-gray-800 rounded text-xs">
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} {SiteConfig.brandName}. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Reg. No: 123456789 - {SiteConfig.city}, {SiteConfig.country}
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
              <a 
                href={SiteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  "bg-green-600 hover:bg-green-700 text-white",
                  "flex items-center gap-2"
                )}
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons (Mobile) */}
        <div className="lg:hidden fixed bottom-4 left-4 right-4 flex gap-2 z-40">
          <a
            href={SiteConfig.callLink}
            className={cn(
              "flex-1 py-3 px-4 rounded-lg text-center font-medium transition-all",
              "bg-primary hover:bg-primary/90 text-white",
              "flex items-center justify-center gap-2"
            )}
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={SiteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex-1 py-3 px-4 rounded-lg text-center font-medium transition-all",
              "bg-green-600 hover:bg-green-700 text-white",
              "flex items-center justify-center gap-2"
            )}
          >
            <Send className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </Container>
    </footer>
  );
}
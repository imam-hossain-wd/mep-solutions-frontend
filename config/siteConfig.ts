import { SiteConfigType } from "@/types/siteConfigType"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube, Globe,Building,
  Wrench, } from "lucide-react"


export const SiteConfig: SiteConfigType = {
  authorName: "Md Walid",
  brandName: "Walid Portfolio / Service Platform",
  url: "https://yourwebsite.com", 
  email: "yourmail@example.com",
  googleMapsLink: "",

  description:
    "This project is a modern, scalable web platform developed by Md Walid, focused on delivering responsive UI, smooth user experience, and high-performance front-end architecture using Next.js and Tailwind CSS.",

  displayNumber: "+971 56 643 8421",
  callLink: "tel:+971566438421",
  whatsappLink: "https://wa.me/971566438421",

  location: "Khalifa City, Abu Dhabi, UAE",
  city: "Abu Dhabi",
  country: "UAE",

  navItems: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],
  services :[
  { name: "Building Maintenance", href: "/services/maintenance", icon: Building },
  { name: "Electrical Services", href: "/services/electrical", icon: Wrench },
  { name: "Plumbing & Pipe Fitting", href: "/services/plumbing", icon: Wrench },
  { name: "Welding & Fabrication", href: "/services/welding", icon: Wrench },
  { name: "Carpentry & Fit-Out", href: "/services/carpentry", icon: Wrench },
  { name: "Masonry & Civil Works", href: "/services/masonry", icon: Wrench },
  { name: "Painting & Finishing", href: "/services/painting", icon: Wrench },
  { name: "Partition & Interior", href: "/services/partition", icon: Wrench },
  { name: "Parking Shade & Outdoor", href: "/services/parking-shade", icon: Wrench },
],

  footerhrefs: [
    { title: "About Me", href: "/about" },
    { title: "My Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
    { title: "Privacy Policy", href: "/privacy" },
  ],

  socialLinks: [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/yourprofile" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/yourprofile" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/yourprofile" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/@yourchannel" },
    { name: "Website", icon: Globe, href: "https://yourwebsite.com" },
  ],

  contactLinks: [
    { name: "Location", icon: MapPin, href: "https://goo.gl/maps/yourlocation" },
    { name: "Phone", icon: Phone, href: "tel:+971566438421" },
    { name: "Email", icon: Mail, href: "mailto:yourmail@example.com" },
  ],
}

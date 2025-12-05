
import { SiteConfigType } from "@/types/siteConfigType";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";


export const SiteConfig: SiteConfigType = {
  authorName: "Abul Kashem Fazlul Haque",
  brandName: "As Nusra Foundation",
  url: "https://annusrafoundation.com",
  email: "annusrafoundation@gmail.com",
  description: "An Nusra Foundation is a non-profit Islamic organization platform designed to support charity-based activities such as Zakat, Sadaqah, Emergency Aid, Education Funds, etc.",
  displayNumber: "+880 1817-536363",
  callLink: "tel:+01817536363",
  whatsappLink: "https://wa.me/01817536363",
  location: "Dhaka, Bangladesh, 1207",
  city: "Dhaka",
  country: "Bangladesh",
  navItems: [
    { name: "Home", href: "/" },
    { name: "Activities", href: "/activities" },
    { name: "Programs", href: "/programs" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Donate", href: "/donate" }
  ],
  footerhrefs: [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "sitemap", href: "/sitemap.xml" },
  ],

  socialLinks: [
    { name: "Facebook", icon: Facebook, href: "/facebook.com" },
    { name: "Instagram", icon: Instagram, href: "/instagram.com" },
    { name: "Twitter", icon: Twitter, href: "/twitter.com" },
    { name: "YouTube", icon: Youtube, href: "/youtube.com" },
  ],
  contactLinks: [
    { name: "Map", icon: MapPin, href: "/facebook.com" },
    { name: "Phone", icon: Phone, href: "/instagram.com" },
    { name: "Email", icon: Mail, href: "/twitter.com" },
  ]

}


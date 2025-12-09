// app/components/layout/navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  MessageSquare,
  ChevronDown,
  X,
  Home,
  Briefcase,
  User,
  Mail,
  MapPin,
  Building,
  LucideIcon,
} from "lucide-react";
import { SiteConfig } from "@/config/siteConfig";

export type NavItem = {
  icon: LucideIcon;
  name: string;
  href: string;
};


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 20);
    };
    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = SiteConfig.navItems.map((item: any) => ({
    ...item,
    icon: item.name === "Home" ? Home :
      item.name === "Services" ? Briefcase :
        item.name === "Projects" ? Building :
          item.name === "About" ? User :
            item.name === "Contact" ? Mail : Home,
  }));

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex items-center justify-center md:justify-between">
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <a href={SiteConfig.callLink} className="hover:underline">
                {SiteConfig.displayNumber}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              <span>{SiteConfig.location}</span>
            </div>
          </div>
          <div className="text-center md:text-right">
            <span className="font-semibold">24/7 Emergency Service Available</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b shadow-lg"
            : "bg-background"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-secondary rounded-full"></div>
              </div>
              <div className="hidden md:block">
                <span className="text-xl font-bold text-foreground">
                  {SiteConfig.brandName}
                </span>
                <p className="text-xs text-muted-foreground">
                  Building Services • {SiteConfig.city}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item: NavItem) => {
                if (item.name === "Services") {
                  return (
                    <DropdownMenu key={item.name}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className={cn(
                            "text-sm font-medium hover:text-primary transition-colors",
                            pathname === item.href
                              ? "text-primary"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.name}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="center"
                        className="w-64 p-2 grid grid-cols-2 gap-1"
                      >
                        {SiteConfig?.services.map((service) => (
                          <DropdownMenuItem key={service.name} asChild>
                            <Link
                              href={service.href}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 cursor-pointer"
                            >
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <service.icon className="h-4 w-4 text-primary" />
                              </div>
                              <span className="text-sm">{service.name}</span>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window?.open(SiteConfig.whatsappLink, "_blank")}
                className="gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button
                size="sm"
                onClick={() => window?.open(SiteConfig.callLink, "_blank")}
                className="gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="p-6 border-b">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                          <Building className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{SiteConfig.brandName}</p>
                          <p className="text-sm text-muted-foreground">{SiteConfig.city}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3 mb-6">
                      <a
                        href={SiteConfig.callLink}
                        className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg"
                      >
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold">{SiteConfig.displayNumber}</p>
                          <p className="text-sm text-muted-foreground">Call Now</p>
                        </div>
                      </a>
                      <a
                        href={SiteConfig.whatsappLink}
                        className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg"
                      >
                        <MessageSquare className="h-5 w-5 text-secondary" />
                        <div>
                          <p className="font-semibold">WhatsApp</p>
                          <p className="text-sm text-muted-foreground">Quick Response</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-1">
                      {navItems.map((item: NavItem) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center gap-3 p-4 rounded-lg transition-colors",
                            pathname === item.href
                              ? "bg-primary/10 text-primary"
                              : "hover:bg-muted"
                          )}
                        >
                          <item.icon className="h-5 w-5" />
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      ))}

                      {/* Services Submenu */}
                      <div className="mt-6">
                        <p className="text-sm font-semibold text-muted-foreground mb-3 px-4">
                          Our Services
                        </p>
                        <div className="space-y-1">
                          {SiteConfig.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted"
                            >
                              <service.icon className="h-4 w-4 text-primary" />
                              <span className="text-sm">{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Footer */}
                  <div className="p-6 border-t">
                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          window?.open(SiteConfig.whatsappLink, "_blank");
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => {
                          window?.open(SiteConfig.callLink, "_blank");
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}

// Optional: Floating WhatsApp Button
export function FloatingWhatsAppButton() {
  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-xl bg-green-500 hover:bg-green-600"
      onClick={() => window?.open(SiteConfig.whatsappLink, "_blank")}
    >
      <MessageSquare className="h-6 w-6" />
      <span className="sr-only">WhatsApp</span>
    </Button>
  );
}
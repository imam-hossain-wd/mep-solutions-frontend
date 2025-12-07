"use client";

import { useState } from "react";
import {
    Home,
    Building,
    Factory,
    ArrowRight,
    ChevronRight,
    Phone,
    MessageSquare,
    Wrench,
    Eye,
    CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SiteConfig } from "@/config/siteConfig";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";
import { allServices } from "@/constants/services";


const categories = [
    { id: "all", label: "All Services", icon: Home },
    { id: "residential", label: "Residential", icon: Home },
    { id: "commercial", label: "Commercial", icon: Building },
    { id: "industrial", label: "Industrial", icon: Factory },
];

export function ServicesOverview() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredServices = allServices.filter(
        service => activeCategory === "all" || service.category === activeCategory
    );

    return (
        <section className="py-5 relative overflow-hidden">
            <Container>
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-5">
                    <Badge variant="outline" className="mb-4 px-4 py-1 text-sm">
                        Our Professional Services
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Comprehensive Building Solutions in{" "}
                        <span className="text-primary">Abu Dhabi</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Professional building services trusted across the UAE.
                    </p>
                </div>
                {/* Services Grid - Fixed to 4 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {filteredServices.map((service) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            features={service.features}
                            href={service.href}
                            ctaText="View Details"
                            image={service.image}
                            className="h-full"
                        />
                    ))}
                </div>

           
                <div className="mt-12 grid md:grid-cols-2 gap-6">
                    {/* Custom Solution Card */}
                    <div className="bg-primary/5 rounded-xl p-6 text-center">
                        <h4 className="font-bold text-lg mb-3">Custom Solution Needed?</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Get a free consultation for your specific requirements
                        </p>
                        <Button
                            size="sm"
                            className="w-full"
                            onClick={() => window.open(SiteConfig.whatsappLink, "_blank")}
                        >
                            Get Quote
                        </Button>
                    </div>

                    {/* View Services Card */}
                    <div className="bg-secondary/5 rounded-xl p-6 text-center">
                        <h4 className="font-bold text-lg mb-3">All 9 Services</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Explore our complete range of building services
                        </p>
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={() => window.location.href = '/services'}
                        >
                            View All Services
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
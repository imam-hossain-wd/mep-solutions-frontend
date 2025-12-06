"use client";

import { useState } from "react";
import {
    Home,
    Building,
    Factory,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { SiteConfig } from "@/config/siteConfig";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";
import { allServices } from "@/data/serviceData";

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

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">
                            Need a Custom Solution?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Get a free consultation and quote for your project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="px-8 group"
                                onClick={() => window.open(SiteConfig.whatsappLink, "_blank")}
                            >
                                Get Free Quote
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={() => window.open(SiteConfig.callLink, "_blank")}
                            >
                                Call Now
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
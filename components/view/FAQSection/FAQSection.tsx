// app/components/sections/faq-section.tsx
"use client";

import { useState } from "react";
import {
    ChevronDown,
    HelpCircle,
    Clock,
    Shield,
    DollarSign,
    Building,
    Phone,
    CheckCircle,
    AlertCircle,
    Wrench,
    MessageSquare,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";
import { faqItems } from "@/constants/faq";


export function FAQSection() {
    const [openItem, setOpenItem] = useState<string | null>("emergency-1");
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const categories = [
        { id: "all", label: "All Questions", count: faqItems.length, icon: HelpCircle },
        { id: "emergency", label: "Emergency", count: faqItems.filter(f => f.category === "emergency").length, icon: AlertCircle },
        { id: "service", label: "Services", count: faqItems.filter(f => f.category === "service").length, icon: Wrench },
        { id: "pricing", label: "Pricing", count: faqItems.filter(f => f.category === "pricing").length, icon: DollarSign },
        { id: "warranty", label: "Warranty", count: faqItems.filter(f => f.category === "warranty").length, icon: Shield },
        { id: "general", label: "General", count: faqItems.filter(f => f.category === "general").length, icon: Building },
    ];

    const filteredItems = activeCategory === "all"
        ? faqItems
        : faqItems.filter(item => item.category === activeCategory);

    const toggleItem = (id: string) => {
        setOpenItem(openItem === id ? null : id);
    };

    const categoryColors: Record<string, string> = {
        emergency: "bg-red-50 border-red-100 text-red-700",
        service: "bg-blue-50 border-blue-100 text-blue-700",
        pricing: "bg-green-50 border-green-100 text-green-700",
        warranty: "bg-purple-50 border-purple-100 text-purple-700",
        general: "bg-gray-50 border-gray-100 text-gray-700",
    };

    const iconColors: Record<string, string> = {
        emergency: "text-red-600",
        service: "text-blue-600",
        pricing: "text-green-600",
        warranty: "text-purple-600",
        general: "text-gray-600",
    };

    return (
        <section className="py-8 bg-gradient-to-b from-white to-gray-50/50">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                        <HelpCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">FREQUENTLY ASKED QUESTIONS</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Common Questions About <span className="text-primary">Building Services</span>
                    </h2>

                    <p className="text-gray-600">
                        Find answers to frequently asked questions about our Abu Dhabi building services
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { value: "2 Hours", label: "Emergency Response", icon: Clock },
                        { value: "12 Months", label: "Work Warranty", icon: Shield },
                        { value: "Free", label: "Site Inspection", icon: CheckCircle },
                        { value: "24/7", label: "Support Available", icon: Phone },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-xl border text-center hover:shadow-sm transition-shadow"
                        >
                            <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                            <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Left Column - Categories */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-6 space-y-2">
                            <h3 className="font-bold text-lg mb-4">Browse by Category</h3>
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={cn(
                                        "w-full flex items-center justify-between p-3 rounded-lg transition-all",
                                        activeCategory === category.id
                                            ? "bg-primary text-white"
                                            : "bg-white border hover:bg-gray-50"
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        <category.icon className={cn(
                                            "h-5 w-5",
                                            activeCategory === category.id ? "text-white" : "text-gray-500"
                                        )} />
                                        <span className="font-medium">{category.label}</span>
                                    </div>
                                    <span className={cn(
                                        "text-sm px-2 py-1 rounded",
                                        activeCategory === category.id
                                            ? "bg-white/20"
                                            : "bg-gray-100 text-gray-700"
                                    )}>
                                        {category.count}
                                    </span>
                                </button>
                            ))}

                            {/* Quick Contact */}
                            <div className="mt-8 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl">
                                <h4 className="font-bold mb-3">Can't find your answer?</h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    Contact our team directly for specific inquiries
                                </p>
                                <div className="space-y-2">
                                    <a
                                        href={SiteConfig.whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700"
                                    >
                                        <MessageSquare className="h-4 w-4" />
                                        WhatsApp Quick Chat
                                    </a>
                                    <a
                                        href={SiteConfig.callLink}
                                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
                                    >
                                        <Phone className="h-4 w-4" />
                                        Call {SiteConfig.displayNumber}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - FAQ Items */}
                    <div className="lg:col-span-3">
                        <div className="space-y-4">
                            {filteredItems.map((item) => {
                                const Icon = item.icon;
                                const isOpen = openItem === item.id;

                                return (
                                    <div
                                        key={item.id}
                                        className={cn(
                                            "bg-white rounded-xl border transition-all duration-300",
                                            "hover:shadow-md",
                                            isOpen && "shadow-lg border-primary/20"
                                        )}
                                    >
                                        <button
                                            onClick={() => toggleItem(item.id)}
                                            className="w-full p-5 text-left flex items-center justify-between gap-4"
                                        >
                                            <div className="flex items-start gap-4 flex-1">
                                                <div className={cn(
                                                    "p-2 rounded-lg flex-shrink-0",
                                                    categoryColors[item.category]
                                                )}>
                                                    <Icon className={cn("h-5 w-5", iconColors[item.category])} />
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg mb-1">{item.question}</h3>
                                                    <div className="flex items-center gap-2">
                                                        <span className={cn(
                                                            "text-xs px-2 py-1 rounded-full capitalize",
                                                            categoryColors[item.category]
                                                        )}>
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ChevronDown className={cn(
                                                "h-5 w-5 text-gray-400 transition-transform duration-300 flex-shrink-0",
                                                isOpen && "rotate-180 text-primary"
                                            )} />
                                        </button>

                                        <div className={cn(
                                            "overflow-hidden transition-all duration-300",
                                            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        )}>
                                            <div className="px-5 pb-5 border-t pt-5">
                                                <div className="flex gap-4">
                                                    <div className="w-9 flex-shrink-0" /> {/* Spacer for icon alignment */}
                                                    <div className="space-y-3">
                                                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>

                                                        {/* Additional info based on category */}
                                                        {item.category === "emergency" && (
                                                            <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg">
                                                                <div className="flex items-center gap-2 text-red-700 font-medium">
                                                                    <AlertCircle className="h-4 w-4" />
                                                                    Emergency Contact: {SiteConfig.displayNumber}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {item.category === "pricing" && (
                                                            <div className="mt-4 p-3 bg-green-50 border border-green-100 rounded-lg">
                                                                <p className="text-sm text-green-700">
                                                                    💰 <strong>Transparent Pricing:</strong> All quotes include VAT and breakdown of materials & labor
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Still Have Questions? */}
                        <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center">
                            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                                Our building services experts in Abu Dhabi are ready to answer
                                any questions about your project requirements, pricing, or timelines.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="bg-white text-primary hover:bg-white/90"
                                    onClick={() => window.open(SiteConfig.whatsappLink, "_blank")}
                                >
                                    <MessageSquare className="h-5 w-5 mr-2" />
                                    Chat on WhatsApp
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white text-white hover:bg-white/10"
                                    onClick={() => window.open(SiteConfig.callLink, "_blank")}
                                >
                                    <Phone className="h-5 w-5 mr-2" />
                                    Call Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
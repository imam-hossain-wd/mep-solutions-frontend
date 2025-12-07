// app/components/sections/testimonials-slider.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
    Star,
    Quote,
    ChevronLeft,
    ChevronRight,
    MapPin,
    Building,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { testimonials } from "@/constants/testimonials";



export function TestimonialsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const sliderRef = useRef<HTMLDivElement>(null);

    const testimonialsPerView = {
        mobile: 1,
        tablet: 2,
        desktop: 3
    };

    // Auto-rotate testimonials
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) =>
                prev === testimonials.length - testimonialsPerView.desktop
                    ? 0
                    : prev + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - testimonialsPerView.desktop
                ? 0
                : prev + 1
        );
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0
                ? testimonials.length - testimonialsPerView.desktop
                : prev - 1
        );
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    // Calculate visible testimonials based on screen size
    const getVisibleTestimonials = () => {
        const width = window.innerWidth;
        let perView = testimonialsPerView.desktop;

        if (width < 768) perView = testimonialsPerView.mobile;
        else if (width < 1024) perView = testimonialsPerView.tablet;

        return testimonials.slice(currentIndex, currentIndex + perView);
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <section className="py-8 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                        <Quote className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">CLIENT TESTIMONIALS</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Trusted by <span className="text-primary">Abu Dhabi</span> Clients
                    </h2>

                    <p className="text-gray-600">
                        Real feedback from residential, commercial, and hospitality clients across the UAE
                    </p>
                </div>
                {/* Testimonials Slider */}
                <div className="relative mb-5" ref={sliderRef}>
                    {/* Slider Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {visibleTestimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="group bg-white rounded-2xl border hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Testimonial Header */}
                                <div className="p-6 border-b">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                                sizes="56px"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-lg">{testimonial.name}</h3>
                                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        </div>
                                        <Quote className="h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center  justify-between">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={cn(
                                                        "h-4 w-4",
                                                        i < testimonial.rating
                                                            ? "text-yellow-500 fill-yellow-500"
                                                            : "text-gray-300"
                                                    )}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500">{testimonial.date}</span>
                                    </div>
                                </div>

                                {/* Testimonial Content */}
                                <div className="p-6">
                                    <p className="text-gray-700 mb-6 line-clamp-4">{testimonial.content}</p>

                                    {/* Project Details */}
                                    <div className="space-y-3 pt-4 border-t">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Building className="h-4 w-4 text-primary" />
                                            <span className="font-medium">{testimonial.company}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                            <MapPin className="h-4 w-4" />
                                            <span>{testimonial.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="px-3 py-1 bg-primary/10 text-primary rounded-full">
                                                {testimonial.service}
                                            </div>
                                            <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                                                {testimonial.project}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-6 w-6 text-gray-700" />
                    </button>
                </div>

                {/* Mobile Navigation Buttons */}
                <div className="flex md:hidden justify-center gap-4 mb-3">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 bg-white border rounded-full shadow flex items-center justify-center"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 bg-white border rounded-full shadow flex items-center justify-center"
                        aria-label="Next"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mb-8">
                    {Array.from({
                        length: testimonials.length - (testimonialsPerView.desktop - 1)
                    }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all",
                                index === currentIndex
                                    ? "w-8 bg-primary"
                                    : "bg-gray-300 hover:bg-gray-400"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
                {/* CTA */}
                <div className="text-center mt-5">
                    <Button size="lg" className="gap-2 group">
                        Read More Reviews
                        <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </Container>
        </section>
    );
}
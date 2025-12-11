// // app/components/sections/testimonials-slider.tsx
// "use client";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import {
//     Star,
//     Quote,
//     ChevronLeft,
//     ChevronRight,
//     MapPin,
//     Building,
// } from "lucide-react";
// import { Container } from "@/components/ui/container";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { testimonials } from "@/constants/testimonials";


// export function TestimonialsSlider() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//     const sliderRef = useRef<HTMLDivElement>(null);

//     const testimonialsPerView = {
//         mobile: 1,
//         tablet: 2,
//         desktop: 3
//     };

//     // Auto-rotate testimonials
//     useEffect(() => {
//         if (!isAutoPlaying) return;

//         const interval = setInterval(() => {
//             setCurrentIndex((prev) =>
//                 prev === testimonials.length - testimonialsPerView.desktop
//                     ? 0
//                     : prev + 1
//             );
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [isAutoPlaying, testimonials.length]);

//     const nextSlide = () => {
//         setCurrentIndex((prev) =>
//             prev === testimonials.length - testimonialsPerView.desktop
//                 ? 0
//                 : prev + 1
//         );
//         setIsAutoPlaying(false);
//         setTimeout(() => setIsAutoPlaying(true), 10000);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prev) =>
//             prev === 0
//                 ? testimonials.length - testimonialsPerView.desktop
//                 : prev - 1
//         );
//         setIsAutoPlaying(false);
//         setTimeout(() => setIsAutoPlaying(true), 10000);
//     };

//     const goToSlide = (index: number) => {
//         setCurrentIndex(index);
//         setIsAutoPlaying(false);
//         setTimeout(() => setIsAutoPlaying(true), 10000);
//     };

//     // Calculate visible testimonials based on screen size
//     const getVisibleTestimonials = () => {
//         const x= 1200
//         const width = x; 
//         let perView = testimonialsPerView.desktop;

//         if (width < 768) perView = testimonialsPerView.mobile;
//         else if (width < 1024) perView = testimonialsPerView.tablet;

//         return testimonials.slice(currentIndex, currentIndex + perView);
//     };

//     const visibleTestimonials = getVisibleTestimonials();

//     return (
//         <section className="py-8 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
//             {/* Background Elements */}
//             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
//             <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
//             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

//             <Container>
//                 {/* Header */}
//                 <div className="text-center max-w-3xl mx-auto mb-12">
//                     <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
//                         <Quote className="h-4 w-4 text-primary" />
//                         <span className="text-sm font-semibold text-primary">CLIENT TESTIMONIALS</span>
//                     </div>

//                     <h2 className="text-3xl md:text-4xl font-bold mb-4">
//                         Trusted by <span className="text-primary">Abu Dhabi</span> Clients
//                     </h2>

//                     <p className="text-gray-600">
//                         Real feedback from residential, commercial, and hospitality clients across the UAE
//                     </p>
//                 </div>
//                 {/* Testimonials Slider */}
//                 <div className="relative mb-5" ref={sliderRef}>
//                     {/* Slider Container */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {visibleTestimonials.map((testimonial) => (
//                             <div
//                                 key={testimonial.id}
//                                 className="group bg-white rounded-2xl border hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
//                             >
//                                 {/* Testimonial Header */}
//                                 <div className="p-6 border-b">
//                                     <div className="flex items-center gap-4 mb-4">
//                                         <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
//                                             <Image
//                                                 src={testimonial.image}
//                                                 alt={testimonial.name}
//                                                 fill
//                                                 className="object-cover"
//                                                 sizes="56px"
//                                             />
//                                         </div>
//                                         <div className="flex-1">
//                                             <h3 className="font-bold text-lg">{testimonial.name}</h3>
//                                             <p className="text-sm text-gray-600">{testimonial.role}</p>
//                                         </div>
//                                         <Quote className="h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
//                                     </div>

//                                     {/* Rating */}
//                                     <div className="flex items-center  justify-between">
//                                         <div className="flex">
//                                             {[...Array(5)].map((_, i) => (
//                                                 <Star
//                                                     key={i}
//                                                     className={cn(
//                                                         "h-4 w-4",
//                                                         i < testimonial.rating
//                                                             ? "text-yellow-500 fill-yellow-500"
//                                                             : "text-gray-300"
//                                                     )}
//                                                 />
//                                             ))}
//                                         </div>
//                                         <span className="text-sm text-gray-500">{testimonial.date}</span>
//                                     </div>
//                                 </div>

//                                 {/* Testimonial Content */}
//                                 <div className="p-6">
//                                     <p className="text-gray-700 mb-6 line-clamp-4">{testimonial.content}</p>

//                                     {/* Project Details */}
//                                     <div className="space-y-3 pt-4 border-t">
//                                         <div className="flex items-center gap-2 text-sm">
//                                             <Building className="h-4 w-4 text-primary" />
//                                             <span className="font-medium">{testimonial.company}</span>
//                                         </div>
//                                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                                             <MapPin className="h-4 w-4" />
//                                             <span>{testimonial.location}</span>
//                                         </div>
//                                         <div className="flex items-center gap-2 text-sm">
//                                             <div className="px-3 py-1 bg-primary/10 text-primary rounded-full">
//                                                 {testimonial.service}
//                                             </div>
//                                             <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
//                                                 {testimonial.project}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Navigation Arrows */}
//                     <button
//                         onClick={prevSlide}
//                         className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors"
//                         aria-label="Previous testimonial"
//                     >
//                         <ChevronLeft className="h-6 w-6 text-gray-700" />
//                     </button>

//                     <button
//                         onClick={nextSlide}
//                         className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-colors"
//                         aria-label="Next testimonial"
//                     >
//                         <ChevronRight className="h-6 w-6 text-gray-700" />
//                     </button>
//                 </div>

//                 {/* Mobile Navigation Buttons */}
//                 <div className="flex md:hidden justify-center gap-4 mb-3">
//                     <button
//                         onClick={prevSlide}
//                         className="w-10 h-10 bg-white border rounded-full shadow flex items-center justify-center"
//                         aria-label="Previous"
//                     >
//                         <ChevronLeft className="h-5 w-5" />
//                     </button>
//                     <button
//                         onClick={nextSlide}
//                         className="w-10 h-10 bg-white border rounded-full shadow flex items-center justify-center"
//                         aria-label="Next"
//                     >
//                         <ChevronRight className="h-5 w-5" />
//                     </button>
//                 </div>

//                 {/* Dots Indicator */}
//                 <div className="flex justify-center gap-2 mb-8">
//                     {Array.from({
//                         length: testimonials.length - (testimonialsPerView.desktop - 1)
//                     }).map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => goToSlide(index)}
//                             className={cn(
//                                 "w-2 h-2 rounded-full transition-all",
//                                 index === currentIndex
//                                     ? "w-8 bg-primary"
//                                     : "bg-gray-300 hover:bg-gray-400"
//                             )}
//                             aria-label={`Go to slide ${index + 1}`}
//                         />
//                     ))}
//                 </div>
//                 {/* CTA */}
//                 <div className="text-center mt-5">
//                     <Button size="lg" className="gap-2 group">
//                         Read More Reviews
//                         <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                     </Button>
//                 </div>
//             </Container>
//         </section>
//     );
// }

// app/components/sections/testimonials-slider.tsx
"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
    Star,
    Quote,
    ChevronLeft,
    ChevronRight,
    MapPin,
    Building,
    Sparkles,
    Award,
    Heart,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { testimonials } from "@/constants/testimonials";

export function TestimonialsSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            //@ts-ignore
            "(min-width: 1280px)": { slidesToShow: 3 },
            //@ts-ignore
            "(min-width: 1024px)": { slidesToShow: 3 },
            //@ts-ignore
            "(min-width: 768px)": { slidesToShow: 2 },
        },
    }, [
        Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    ]);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <section className="relative py-8 bg-gradient-to-b from-white via-gray-50/30 to-gray-50/10 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

                {/* Floating gradient orbs */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-5 md:left-10 opacity-10">
                <Sparkles className="h-24 w-24 text-primary" />
            </div>
            <div className="absolute bottom-10 right-5 md:right-10 opacity-10">
                <Award className="h-24 w-24 text-secondary" />
            </div>

            <Container>
                {/* Header with Enhanced Design */}
                <div className="relative text-center max-w-4xl mx-auto mb-5 px-4">
                    {/* Animated badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full mb-5 md:mb-6 border border-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-105 group cursor-default">
                        <div className="relative">
                            <Quote className="h-4 w-4 text-primary animate-bounce" />
                            <div className="absolute inset-0 bg-primary/20 blur-sm" />
                        </div>
                        <span className="text-sm font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            CLIENT TESTIMONIALS
                        </span>
                        <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" />
                    </div>

                    {/* Animated title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                            Trusted by{" "}
                        </span>
                        <span className="relative">
                            <span className="bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent animate-gradient">
                                Abu Dhabi
                            </span>
                            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
                        </span>
                        <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                            {" "}Clients
                        </span>
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Discover why businesses and homeowners across the UAE choose our exceptional service
                    </p>
                </div>

                {/* Embla Carousel Container */}
                <div className="relative px-4 md:px-0">
                    {/* Navigation Arrows - Enhanced */}
                    <button
                        onClick={scrollPrev}
                        className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-700 group-hover:text-primary transition-colors" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 hover:shadow-2xl transition-all duration-300 group"
                        aria-label="Next testimonials"
                    >
                        <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-700 group-hover:text-primary transition-colors" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    {/* Carousel Viewport */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex touch-pan-y -ml-4">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-[0_0_calc(100%-2rem)] min-w-0 pl-4 md:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33.333%-1rem)] xl:flex-[0_0_calc(25%-1rem)]"
                                >
                                    <div className="group h-full bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-gray-200/80 p-5 md:p-6 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                                        {/* Background glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Corner accent */}
                                        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                                            <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-500" />
                                        </div>

                                        {/* Testimonial Header */}
                                        <div className="relative mb-4 md:mb-5 pb-4 border-b border-gray-100">
                                            <div className="flex items-center gap-3 md:gap-4">
                                                {/* Avatar with gradient border */}
                                                <div className="relative">
                                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
                                                    <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white">
                                                        <Image
                                                            src={testimonial.image}
                                                            alt={testimonial.name}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(max-width: 768px) 48px, 56px"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-bold text-base md:text-lg truncate bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                                        {testimonial.name}
                                                    </h3>
                                                    <p className="text-xs md:text-sm text-gray-600 truncate">
                                                        {testimonial.role}
                                                    </p>
                                                </div>

                                                {/* Quote icon with animation */}
                                                <div className="relative">
                                                    <Quote className="h-6 w-6 md:h-8 md:w-8 text-primary/30 group-hover:text-primary/50 transition-colors duration-500" />
                                                    <div className="absolute inset-0 bg-primary/10 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                </div>
                                            </div>

                                            {/* Rating with animation */}
                                            <div className="flex items-center justify-between mt-3 md:mt-4">
                                                <div className="flex items-center gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={cn(
                                                                "h-3 w-3 md:h-4 md:w-4 transition-all duration-300",
                                                                i < testimonial.rating
                                                                    ? "text-yellow-500 fill-yellow-500 group-hover:scale-110"
                                                                    : "text-gray-300"
                                                            )}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-xs md:text-sm font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                    {testimonial.date}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Testimonial Content */}
                                        <div className="relative">
                                            <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-4 group-hover:text-gray-800 transition-colors">
                                                {testimonial.content}
                                            </p>

                                            {/* Project Details */}
                                            {/* <div className="space-y-2 md:space-y-3 pt-3 md:pt-4 border-t border-gray-100 group-hover:border-primary/20 transition-colors">
                                                <div className="flex items-center gap-2 text-xs md:text-sm">
                                                    <Building className="h-3 w-3 md:h-4 md:w-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                                                    <span className="font-medium truncate bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                                        {testimonial.company}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                                                    <MapPin className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                                    <span className="truncate">{testimonial.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 flex-wrap pt-1">
                                                    <span className="px-2.5 py-1.5 bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full text-xs font-medium border border-primary/20 group-hover:border-primary/30 transition-colors">
                                                        {testimonial.service}
                                                    </span>
                                                    <span className="px-2.5 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full text-xs font-medium border border-gray-200 group-hover:border-gray-300 transition-colors">
                                                        {testimonial.project}
                                                    </span>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Enhanced Dots Indicator */}
                <div className="flex justify-center items-center gap-1.5 md:gap-2 mt-6 px-4">
                    <div className="flex items-center gap-1.5 md:gap-2 bg-white/50 backdrop-blur-sm rounded-full p-2 border border-gray-200/50">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={cn(
                                    "relative rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30",
                                    "hover:scale-110 active:scale-95",
                                    index === selectedIndex
                                        ? "bg-gradient-to-r from-primary to-secondary h-2.5 w-8 md:w-10"
                                        : "bg-gray-300 hover:bg-gray-400 h-2 w-2"
                                )}
                                aria-label={`Go to testimonial ${index + 1}`}
                                aria-current={index === selectedIndex ? "true" : "false"}
                            >
                                {index === selectedIndex && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-md rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </Container>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
        </section>
    );
}
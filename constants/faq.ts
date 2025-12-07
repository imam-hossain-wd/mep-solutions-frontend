
import { SiteConfig } from "@/config/siteConfig";
import {
    Clock,
    Shield,
    DollarSign,
    Calendar,
    Building,
    CheckCircle,
    AlertCircle,
    Wrench,
    MapPin
} from "lucide-react";


type FAQItem = {
    id: string;
    question: string;
    answer: string;
    category: 'general' | 'pricing' | 'service' | 'emergency' | 'warranty';
    icon: React.ComponentType<{ className?: string }>;
};



export const faqItems: FAQItem[] = [
    // Emergency & Response
    {
        id: "emergency-1",
        question: "What is your emergency response time in Abu Dhabi?",
        answer: "We guarantee a response within 2 hours for emergency calls in Abu Dhabi city center, and within 4 hours for surrounding areas like Khalifa City, MBZ City, and Al Reem Island. Our 24/7 emergency team is always on standby with fully-equipped service vehicles.",
        category: "emergency",
        icon: Clock
    },
    {
        id: "emergency-2",
        question: "Do you provide 24/7 emergency building services?",
        answer: "Yes, we offer 24/7 emergency services for all building maintenance needs including electrical faults, plumbing leaks, AC breakdowns, and structural emergencies. Call our emergency line at any time: " + SiteConfig.displayNumber,
        category: "emergency",
        icon: AlertCircle
    },
    // Service & Quality
    {
        id: "service-1",
        question: "Are your technicians DM-certified and licensed?",
        answer: "All our technicians are Dubai Municipality (DM) certified, Abu Dhabi Civil Defense approved, and hold valid UAE work permits. We conduct regular training and safety certifications to ensure compliance with UAE building regulations.",
        category: "service",
        icon: Shield
    },
    {
        id: "service-2",
        question: "What building services do you offer in Abu Dhabi?",
        answer: "We provide comprehensive building services: 1) Electrical & Lighting, 2) Plumbing & Pipe Fitting, 3) Welding & Fabrication, 4) Carpentry & Fit-Out, 5) Masonry & Civil Works, 6) Painting & Finishing, 7) Partition & Interior, 8) Parking Shade & Outdoor, 9) Preventive Maintenance.",
        category: "service",
        icon: Wrench
    },
    {
        id: "service-3",
        question: "Do you handle both residential and commercial projects?",
        answer: "Yes, we serve residential (villas, apartments), commercial (offices, malls, retail), hospitality (hotels, restaurants), and industrial clients across Abu Dhabi. Our team is experienced with different building types and requirements.",
        category: "service",
        icon: Building
    },
    // Pricing & Quotes
    {
        id: "pricing-1",
        question: "How do you price your building services?",
        answer: "We provide transparent, fixed-price quotes based on: 1) Site inspection, 2) Scope of work, 3) Materials required, 4) Labor hours, 5) Project complexity. All quotes include VAT and there are no hidden charges. We offer competitive rates with quality assurance.",
        category: "pricing",
        icon: DollarSign
    },
    {
        id: "pricing-2",
        question: "Do you offer free site inspections and quotes?",
        answer: "Yes, we provide free site inspections and detailed quotations for all building service projects in Abu Dhabi. Our estimator will visit your location, assess requirements, and provide a comprehensive quote within 24 hours.",
        category: "pricing",
        icon: CheckCircle
    },
    {
        id: "pricing-3",
        question: "What payment methods do you accept?",
        answer: "We accept cash, bank transfer, credit/debit cards (Visa, MasterCard), and corporate checks. For large projects, we offer flexible payment plans. All payments are VAT-compliant with proper invoices issued.",
        category: "pricing",
        icon: DollarSign
    },
    // Warranty & Support
    {
        id: "warranty-1",
        question: "What is your warranty policy?",
        answer: "We offer a 12-month warranty on all workmanship and a 6-month warranty on materials for residential projects. Commercial projects come with a 6-month workmanship warranty. Emergency repairs have a 90-day warranty. All warranties are in writing.",
        category: "warranty",
        icon: Shield
    },
    {
        id: "warranty-2",
        question: "What if I need follow-up service after completion?",
        answer: "We provide comprehensive after-service support including: 1) Free call-back within warranty period, 2) Priority scheduling for existing clients, 3) Annual maintenance contracts, 4) 24/7 emergency support, 5) Digital service records.",
        category: "warranty",
        icon: Calendar
    },
    // General
    {
        id: "general-1",
        question: "How long have you been serving Abu Dhabi?",
        answer: "We have been providing professional building services in Abu Dhabi since 2009. With over 15 years of experience, we understand the unique challenges of UAE climate, building regulations, and construction standards.",
        category: "general",
        icon: Building
    },
    {
        id: "general-2",
        question: "What areas in Abu Dhabi do you cover?",
        answer: "We cover all areas of Abu Dhabi including: Khalifa City, Mohammed Bin Zayed City, Al Reem Island, Yas Island, Saadiyat Island, Al Raha Beach, Tourist Club Area, and surrounding Emirates. Additional charges may apply for remote locations.",
        category: "general",
        icon: MapPin
    },
    {
        id: "general-3",
        question: "How do I schedule a service appointment?",
        answer: "You can schedule through: 1) Phone: Call " + SiteConfig.displayNumber + ", 2) WhatsApp: Message us for quick response, 3) Email: contact@yourdomain.com, 4) Online form: Fill our website contact form. We confirm appointments within 2 hours.",
        category: "general",
        icon: Calendar
    },
];
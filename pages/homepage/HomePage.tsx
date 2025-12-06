import { AboutUsSection } from "@/components/view/AboutUsSection/AboutUsSection";
import { ContactUsSection } from "@/components/view/ContactUs/ContactUs";
import { FeaturedProjects } from "@/components/view/FeaturedProjects/FeaturedProjects";
import { Hero } from "@/components/view/Home/Hero/Hero";
import { ServicesOverview } from "@/components/view/Home/ServiceOverview/ServiceOverview";
import { WhyChooseUs } from "@/components/view/WhyChoose/WhyChoose";



export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Hero />
            <ServicesOverview />
            <WhyChooseUs />
            <FeaturedProjects />
            <AboutUsSection />
            <ContactUsSection />
            {/* Add spacing at bottom */}
            <div className="flex-1"></div>
        </div>
    )
}
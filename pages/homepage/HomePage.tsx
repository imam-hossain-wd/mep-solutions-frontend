import { FeaturedProjects } from "@/components/view/FeaturedProjects/FeaturedProjects";
import { Hero } from "@/components/view/Home/Hero/Hero";
import { ServicesOverview } from "@/components/view/Home/ServiceOverview/ServiceOverview";
import { WhyChooseUs } from "@/components/view/WhyChoose/WhyChoose";



export default function HomePage() {
    return (
        <main className="bg-white h-screen">
            <Hero />
            <ServicesOverview />
            <WhyChooseUs />
            <FeaturedProjects />
        </main>
    )
}
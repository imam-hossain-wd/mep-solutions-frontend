import { Hero } from "@/components/view/Home/Hero/Hero";
import { ServicesOverview } from "@/components/view/Home/ServiceOverview/ServiceOverview";



export default function HomePage() {
    return (
        <main className="bg-white h-screen">
            <Hero />
            <ServicesOverview />
        </main>
    )
}
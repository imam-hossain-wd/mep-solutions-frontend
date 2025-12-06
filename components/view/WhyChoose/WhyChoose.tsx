// app/components/sections/why-choose-us.tsx
import { 
  ShieldCheck, 
  Clock, 
  Award, 
  Users, 
  MapPin, 
  Building, 
  FileCheck,
  Wallet
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SiteConfig } from "@/config/siteConfig";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "DM Certified & Licensed",
      description: "Fully licensed by Dubai Municipality and Abu Dhabi Civil Defense. All our technicians hold UAE-approved certifications and undergo regular safety training.",
      stats: "100% Compliance",
      highlight: true
    },
    {
      icon: Clock,
      title: "24/7 Emergency Response",
      description: "Round-the-clock emergency service with <2 hour response time in Abu Dhabi. Our dedicated emergency team is always on standby for urgent repairs.",
      stats: "Under 2 Hours",
      highlight: true
    },
    {
      icon: Award,
      title: "UAE-Specific Expertise",
      description: "15+ years experience with Abu Dhabi's building regulations, climate challenges, and architectural requirements. We understand local materials and standards.",
      stats: "15+ Years UAE",
      highlight: false
    },
    {
      icon: Users,
      title: "Skilled UAE Workforce",
      description: "Team of 50+ certified technicians including electricians, plumbers, welders, and carpenters. All background-checked and continuously trained.",
      stats: "50+ Technicians",
      highlight: false
    },
    {
      icon: MapPin,
      title: "Local Abu Dhabi Presence",
      description: "Based in Khalifa City with warehouses across Abu Dhabi. Quick mobilization to any location - no delays from distant suppliers.",
      stats: "Multiple Locations",
      highlight: false
    },
    {
      icon: Building,
      title: "End-to-End Solutions",
      description: "From preventive maintenance to complete renovations. Single point of contact for all building services - no need to coordinate multiple contractors.",
      stats: "9 Services",
      highlight: false
    },
    {
      icon: FileCheck,
      title: "Quality Guarantee",
      description: "12-month warranty on all workmanship and materials. Comprehensive inspection checklist and digital reporting for every project.",
      stats: "12-Month Warranty",
      highlight: false
    },
    {
      icon: Wallet,
      title: "Transparent Pricing",
      description: "Fixed-price quotes with no hidden costs. VAT-compliant invoicing in AED. Multiple payment options including installment plans for large projects.",
      stats: "Fixed Pricing",
      highlight: false
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-50/50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">WHY WE STAND OUT</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why <span className="text-primary">Abu Dhabi</span> Trusts 
            <span className="text-secondary"> Our Building Services</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As the leading building services provider in Abu Dhabi, we combine 
            local expertise with international standards to deliver exceptional 
            results for every project, big or small.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "50+", label: "Expert Technicians" },
            { number: "15", label: "Years Experience" },
          ].map((stat) => (
            <div 
              key={stat.label}
              className="bg-white p-6 rounded-2xl shadow-sm border text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`
                group relative p-6 rounded-2xl transition-all duration-300
                ${reason.highlight 
                  ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 shadow-lg' 
                  : 'bg-white border hover:shadow-md'
                }
                hover:-translate-y-2
              `}
            >
              {/* Highlight Badge */}
              {reason.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                    MOST VALUED
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`
                w-14 h-14 rounded-xl flex items-center justify-center mb-6
                ${reason.highlight 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-primary'
                }
                group-hover:scale-110 transition-transform
              `}>
                <reason.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {reason.description}
              </p>
              
              <div className="text-sm font-semibold text-primary">
                {reason.stats}
              </div>

              {/* Bottom Accent */}
              <div className={`
                absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl
                ${reason.highlight ? 'bg-secondary' : 'bg-gray-200 group-hover:bg-primary'}
                transition-colors
              `} />
            </div>
          ))}
        </div>

        {/* Certification Strip */}
        <div className="mt-20 pt-10 border-t">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">Our Certifications & Affiliations</h3>
            <p className="text-gray-600">Fully compliant with UAE regulations and standards</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {[
              { name: "Dubai Municipality", icon: "DM" },
              { name: "Abu Dhabi Civil Defense", icon: "ADCD" },
              { name: "UAE Safety Standards", icon: "USS" },
              { name: "ISO 9001:2015", icon: "ISO" },
              { name: "Green Building Certified", icon: "GBC" },
            ].map((cert) => (
              <div key={cert.name} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-gray-700">{cert.icon}</span>
                </div>
                <div className="text-sm text-gray-600">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bottom */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-primary to-secondary p-1 rounded-2xl">
            <div className="bg-white rounded-xl px-8 py-6">
              <h3 className="text-2xl font-bold mb-3">
                Ready to Experience Professional Building Services?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join 500+ satisfied clients across Abu Dhabi who trust us with their 
                building maintenance and construction needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={SiteConfig.callLink}
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Call {SiteConfig.displayNumber}
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
                >
                  Schedule Free Site Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
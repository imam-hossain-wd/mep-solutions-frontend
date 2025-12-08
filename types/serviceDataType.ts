import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface ServiceBenefit {
  icon: string;
  text: string;
  desc: string;
}

export interface ServiceTypeBreakdown {
  type: "Residential" | "Commercial" | "Industrial";
  percentage: number;
}

export interface ServiceProject {
  title: string;
  location: string;
  image: string;
}

export interface ServiceProcess {
  description: ReactNode;
  step: string;
  title: string;
  desc: string;
}

export interface IService {
  slug: string;
  title: string;
  description: string;
  icon: string;
  heroColor: string;
  badge: string;
  priceRange: string;
  responseTime: string;
  warranty: string;
  certification: string;
  features: string[];
  benefits: ServiceBenefit[];
  process: ServiceProcess[];
  projects: ServiceProject[];
  related: string[];
  serviceTypes: ServiceTypeBreakdown[];
}

export interface ServiceWithIcons extends Omit<IService, 'icon' | 'benefits'> {
  icon: LucideIcon;
  benefits: Array<{
    icon: LucideIcon;
    text: string;
    desc: string;
  }>;
}
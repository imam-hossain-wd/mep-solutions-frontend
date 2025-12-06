// app/components/ui/service-card.tsx

import { LucideIcon } from "lucide-react";




export interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  price?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  variant?: "default" | "featured";
  badge?: "Popular" | "24/7" | "Certified" | "Sale" | "New";
  href?: string;
  className?: string;
}
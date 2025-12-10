"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getIcon } from "@/utils/icon-mapping";

export function ServiceCard({
  title,
  description,
  icon,
  features = [],
  price,
  ctaText = "View Service",
  onCtaClick,
  variant = "default",
  href,
  className,
  image,
}: any& {
  image?: string;
}) {
  
const isFeatured = variant === "featured";
const Icon = getIcon(icon);

  return (
    <Card className={cn(
      "group overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col",
      isFeatured && "border-primary/50",
      className
    )}>
      {/* Image Section - Fixed height container */}
      <div className="relative h-48 w-full overflow-hidden flex-shrink-0 -mt-7">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Icon className="h-12 w-12 text-primary/50" />
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Icon Badge */}
        <div className="absolute top-24 left-4 p-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30">
          <Icon className="h-5 w-5 text-white" />
        </div>
        
        {/* Title on Image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">{title}</h3>
        </div>
      </div>

      {/* Content Section - Flex-grow to fill remaining space */}
      <div className="flex flex-col flex-grow px-6 ">
        {price && (
          <div className="text-right mb-2">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <p className="text-sm text-muted-foreground">starting from</p>
          </div>
        )}
        
        <p className="text-muted-foreground mb-4 line-clamp-2 flex-grow">{description}</p>
        
        {features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {features.slice(0, 3).map((feature:any, index:number) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <Button
          variant={isFeatured ? "default" : "outline"}
          className="w-full group/btn mt-auto"
          onClick={onCtaClick}
          asChild={!!href}
        >
          {href ? (
            <a href={href} className="flex items-center justify-center">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          ) : (
            <span className="flex items-center justify-center">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </span>
          )}
        </Button>
      </div>
    </Card>
  );
}
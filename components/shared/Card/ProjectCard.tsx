"use client";

import Image from "next/image";
import { Maximize2, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  year: string;
  images: string[];
};

interface ProjectCardProps {
  project: Project;
  categoryLabels: Record<string, string>;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({
  project,
  categoryLabels,
  onSelect,
}: ProjectCardProps) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Category badge */}
        <Badge className="absolute top-4 left-4">
          {categoryLabels[project.category] || project.category}
        </Badge>

        {/* View icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="sm" variant="secondary" className="rounded-full">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-gray-500">{project.year}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Building className="h-4 w-4" />
          <span>{project.location}</span>
        </div>
      </div>
    </div>
  );
}

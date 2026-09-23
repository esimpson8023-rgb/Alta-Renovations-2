import Image from "next/image";
import { MapPin } from "lucide-react";
import type { ProjectItem } from "@/lib/data";
import PlaceholderImage from "./PlaceholderImage";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="group relative flex aspect-[4/5] w-full flex-col justify-end overflow-hidden rounded-sm">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <PlaceholderImage
          tone={project.tone}
          label={project.name}
          caption="Project photo placeholder"
          className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
      <div className="relative flex flex-col gap-1.5 p-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-light">
          {project.type}
        </span>
        <h3 className="font-display text-xl text-cream">{project.name}</h3>
        <span className="flex items-center gap-1.5 text-xs text-cream/70">
          <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
          {project.location}
        </span>
      </div>
    </article>
  );
}

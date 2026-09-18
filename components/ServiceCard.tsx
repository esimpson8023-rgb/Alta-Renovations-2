import type { ServiceItem } from "@/lib/data";
import PlaceholderImage from "./PlaceholderImage";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;

  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-stone-pale bg-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <PlaceholderImage
          tone={service.tone}
          icon={Icon}
          label={service.title}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="font-display text-xl text-charcoal">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-stone">
          {service.description}
        </p>
      </div>
    </article>
  );
}

import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <figure className="flex h-full flex-col gap-6 rounded-sm border border-stone-pale bg-white/60 p-8">
      <Quote
        aria-hidden="true"
        strokeWidth={1.25}
        className="h-8 w-8 text-accent"
      />
      <blockquote className="flex-1 text-base leading-relaxed text-charcoal/90">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="border-t border-stone-pale pt-4">
        <span className="block text-sm font-semibold text-charcoal">
          {testimonial.name}
        </span>
        <span className="block text-xs uppercase tracking-wider text-stone">
          {testimonial.role}
        </span>
      </figcaption>
    </figure>
  );
}

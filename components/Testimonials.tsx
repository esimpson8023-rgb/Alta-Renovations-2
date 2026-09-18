import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-cream-100 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What Homeowners Say"
            title="Client Testimonials"
            description="Placeholder testimonials shown for layout purposes — replace with real client feedback once available."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.role} delay={index * 100} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

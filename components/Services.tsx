import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-cream-100 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title="Renovation Services"
            description="From single rooms to full-home transformations, we bring the same level of care and craftsmanship to every project."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((service, index) => (
            <Reveal key={service.slug} delay={index * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

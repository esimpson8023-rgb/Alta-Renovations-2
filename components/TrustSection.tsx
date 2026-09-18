import Container from "./Container";
import Reveal from "./Reveal";
import { TRUST_POINTS } from "@/lib/data";

export default function TrustSection() {
  return (
    <section id="trust" className="border-b border-stone-pale bg-cream py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {TRUST_POINTS.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} delay={index * 100}>
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-accent/5">
                    <Icon
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className="h-5 w-5 text-accent"
                    />
                  </div>
                  <h3 className="font-display text-xl text-charcoal">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section className="bg-charcoal py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="Our Process"
            description="A clear, guided path from first conversation to finished space."
            align="center"
            light
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PROCESS_STEPS.map((step, index) => (
            <Reveal key={step.number} delay={index * 100}>
              <div className="relative flex flex-col gap-4 border-t border-cream/15 pt-6">
                <span className="font-display text-4xl text-accent-light">
                  {step.number}
                </span>
                <h3 className="font-display text-xl text-cream">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/65">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

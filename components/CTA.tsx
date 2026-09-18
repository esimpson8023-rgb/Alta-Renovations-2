import Container from "./Container";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #F7F4EE 0px, #F7F4EE 1px, transparent 1px, transparent 18px)",
        }}
      />
      <Container className="relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl text-balance text-cream sm:text-4xl lg:text-5xl">
            Ready to Transform Your Home?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Let&apos;s talk about your renovation project. Tell us what
            you&apos;re planning and we&apos;ll help you take the next step.
          </p>
          <a href="#contact" className="btn-primary mt-2">
            Request a Free Quote
          </a>
        </Reveal>
      </Container>
    </section>
  );
}

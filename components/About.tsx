import Image from "next/image";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="About Alta Renovations"
              title="Renovations With Purpose."
              description="Alta Renovations focuses on creating spaces that homeowners are proud to live in. We bring together quality workmanship, thoughtful design, and dependable service — so every project reflects the way you actually want to live in your home."
            />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone">
              From the first conversation to the final walkthrough, our goal
              is to make the renovation process feel clear, considered, and
              genuinely collaborative — with a result that fits your home,
              your lifestyle, and your vision.
            </p>
            <a href="#services" className="btn-secondary mt-8 inline-flex">
              Learn More
            </a>
          </Reveal>

          <Reveal
            delay={150}
            className="relative order-1 aspect-[4/5] w-full overflow-hidden rounded-sm lg:order-2"
          >
            <Image
              src="/images/about-accent-wall.jpg"
              alt="Custom wood slat accent wall with built-in media console"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="bg-cream py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Our Work"
              title="Featured Projects"
              description="A look at the kind of transformations we bring to life. Real project photography will replace these placeholders as our portfolio grows."
            />
            <a href="#contact" className="btn-secondary shrink-0">
              Start Your Project
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.slug} delay={index * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

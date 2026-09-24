import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import Container from "./Container";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { CONTACT, SOCIAL } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream-100 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <SectionHeading
              eyebrow="Get In Touch"
              title="Request Your Free Quote"
              description="Tell us a little about your project and we'll follow up to schedule a conversation."
            />

            <ul className="mt-10 flex flex-col gap-6">
              <li className="flex items-start gap-4">
                <Phone aria-hidden="true" className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <span className="block text-sm font-medium text-charcoal">Phone</span>
                  <a
                    href={CONTACT.phoneHref}
                    className="text-sm text-stone transition-colors hover:text-accent"
                  >
                    {CONTACT.phone}{" "}
                    <span className="text-xs">(placeholder)</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail aria-hidden="true" className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <span className="block text-sm font-medium text-charcoal">Email</span>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm text-stone transition-colors hover:text-accent"
                  >
                    {CONTACT.email}{" "}
                    <span className="text-xs">(placeholder)</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <span className="block text-sm font-medium text-charcoal">Service Area</span>
                  <span className="text-sm text-stone">{CONTACT.serviceArea}</span>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alta Renovations on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-pale text-charcoal transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={SOCIAL.facebook}
                aria-label="Alta Renovations on Facebook (placeholder link)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-pale text-charcoal transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <div className="rounded-sm border border-stone-pale bg-white/60 p-6 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

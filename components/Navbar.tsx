"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-cream/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-20 items-center justify-between"
        >
          <a
            href="#home"
            className={`font-display text-lg font-semibold tracking-[0.08em] transition-colors sm:text-xl ${
              scrolled || menuOpen ? "text-charcoal" : "text-cream"
            }`}
          >
            ALTA RENOVATIONS
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent ${
                    scrolled ? "text-charcoal" : "text-cream"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a href="#contact" className="btn-primary">
              Get a Free Quote
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`inline-flex items-center justify-center rounded-sm p-2 transition-colors md:hidden ${
              scrolled || menuOpen ? "text-charcoal" : "text-cream"
            }`}
          >
            {menuOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </nav>
      </Container>

      <div
        className={`md:hidden ${
          menuOpen ? "max-h-[28rem]" : "max-h-0"
        } overflow-hidden bg-cream transition-[max-height] duration-300 ease-in-out`}
      >
        <Container>
          <ul className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-3 text-base font-medium uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={closeMenu}
                className="btn-primary w-full"
              >
                Get a Free Quote
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}

import {
  ChefHat,
  Bath,
  Layers,
  Home as HomeIcon,
  PaintRoller,
  SlidersHorizontal,
  Gem,
  Compass,
  PhoneCall,
  Search,
  type LucideIcon,
} from "lucide-react";

export type ImageTone = "charcoal" | "stone" | "accent" | "cream";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: ImageTone;
  /** Path under /public to a real photo. Falls back to PlaceholderImage when unset. */
  image?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "kitchen-renovations",
    title: "Kitchen Renovations",
    description:
      "Modern, functional kitchens designed around the way you live.",
    icon: ChefHat,
    tone: "charcoal",
    image: "/images/kitchen-open-concept.jpg",
  },
  {
    slug: "bathroom-renovations",
    title: "Bathroom Renovations",
    description: "Beautiful and practical bathroom transformations.",
    icon: Bath,
    tone: "stone",
    image: "/images/bathroom-shower.jpg",
  },
  {
    slug: "basement-renovations",
    title: "Basement Renovations",
    description:
      "Turn unused basement space into something your family can actually use.",
    icon: Layers,
    tone: "accent",
    image: "/images/basement-pool-table.jpg",
  },
  {
    slug: "whole-home-renovations",
    title: "Whole-Home Renovations",
    description: "Complete transformations that bring your vision to life.",
    icon: HomeIcon,
    tone: "charcoal",
  },
  {
    slug: "interior-renovations",
    title: "Interior Renovations",
    description:
      "Walls, flooring, trim, painting, and other interior improvements.",
    icon: PaintRoller,
    tone: "stone",
    image: "/images/about-accent-wall.jpg",
  },
  {
    slug: "custom-renovations",
    title: "Custom Renovations",
    description: "Renovation solutions tailored specifically to your home.",
    icon: SlidersHorizontal,
    tone: "accent",
    image: "/images/basement-bar.jpg",
  },
];

export interface ProjectItem {
  slug: string;
  name: string;
  type: string;
  location: string;
  tone: ImageTone;
  /** Path under /public to a real photo. Falls back to PlaceholderImage when unset. */
  image?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    slug: "modern-kitchen-transformation",
    name: "Modern Kitchen Transformation",
    type: "Kitchen Renovation",
    location: "[Project Location Placeholder]",
    tone: "charcoal",
    image: "/images/hero-kitchen.jpg",
  },
  {
    slug: "luxury-bathroom-remodel",
    name: "Luxury Bathroom Remodel",
    type: "Bathroom Renovation",
    location: "[Project Location Placeholder]",
    tone: "stone",
    image: "/images/bathroom-vanity.jpg",
  },
  {
    slug: "basement-entertainment-space",
    name: "Basement Entertainment Space",
    type: "Basement Renovation",
    location: "[Project Location Placeholder]",
    tone: "accent",
    image: "/images/basement-pool-table.jpg",
  },
  {
    slug: "modern-open-concept-living",
    name: "Modern Open-Concept Living Space",
    type: "Whole-Home Renovation",
    location: "[Project Location Placeholder]",
    tone: "charcoal",
    image: "/images/kitchen-open-concept.jpg",
  },
  {
    slug: "refined-interior-refresh",
    name: "Refined Interior Refresh",
    type: "Interior Renovation",
    location: "[Project Location Placeholder]",
    tone: "stone",
  },
  {
    slug: "tailored-family-remodel",
    name: "Tailored Family Remodel",
    type: "Custom Renovation",
    location: "[Project Location Placeholder]",
    tone: "accent",
    image: "/images/basement-bar.jpg",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description: "Tell us about your project, ideas, and goals.",
  },
  {
    number: "02",
    title: "Planning",
    description: "We work through the details and develop a renovation plan.",
  },
  {
    number: "03",
    title: "Renovation",
    description:
      "Our team brings the project to life with careful workmanship.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description:
      "We review the completed project with you and make sure everything is right.",
  },
];

export interface TrustPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const TRUST_POINTS: TrustPoint[] = [
  {
    icon: Gem,
    title: "Quality Craftsmanship",
    description: "Careful attention to detail from start to finish.",
  },
  {
    icon: Compass,
    title: "Built Around You",
    description:
      "Renovations designed around your home, lifestyle, and vision.",
  },
  {
    icon: PhoneCall,
    title: "Reliable Service",
    description: "Clear communication and dependable project management.",
  },
  {
    icon: Search,
    title: "Attention to Detail",
    description: "We don't cut corners. Every detail matters.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "[Placeholder testimonial] From the first conversation to the final walkthrough, the process felt organized and transparent. Our home genuinely feels like a different space.",
    name: "Homeowner",
    role: "Homeowner",
  },
  {
    quote:
      "[Placeholder testimonial] Our kitchen was completely transformed. The team listened to what we wanted and delivered a space that works beautifully for our family.",
    name: "Kitchen Renovation Client",
    role: "Kitchen Renovation Client",
  },
  {
    quote:
      "[Placeholder testimonial] Communication was clear at every stage of the bathroom remodel, and the final result exceeded what we had pictured.",
    name: "Bathroom Renovation Client",
    role: "Bathroom Renovation Client",
  },
];

export const SERVICE_TYPES = [
  "Kitchen Renovation",
  "Bathroom Renovation",
  "Basement Renovation",
  "Whole-Home Renovation",
  "Interior Renovation",
  "Custom Renovation",
  "Other",
];

export const BUDGET_RANGES = [
  "Under $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000+",
  "Not sure yet",
];

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? "text-accent-light" : ""}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl ${
          light ? "text-cream" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base leading-relaxed sm:text-lg ${
            light ? "text-cream/75" : "text-stone"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

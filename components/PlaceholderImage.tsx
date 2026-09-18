import type { LucideIcon } from "lucide-react";
import { ImageIcon } from "lucide-react";
import type { ImageTone } from "@/lib/data";

/**
 * Styled stand-in for real photography.
 *
 * The brief calls for high-quality renovation photography, but this build
 * ships with no licensed photo assets and no verified image CDN, so rather
 * than risk a broken <img> in production, every photo slot in the site uses
 * this component. Swap it for a real <Image> (see README.md → "Replacing
 * placeholder images") once real project photos are available.
 */

const TONE_STYLES: Record<ImageTone, string> = {
  charcoal: "from-charcoal via-charcoal-light to-stone bg-charcoal",
  stone: "from-stone via-stone-light to-cream-200 bg-stone",
  accent: "from-accent-dark via-accent to-accent-light bg-accent",
  cream: "from-cream-200 via-stone-pale to-stone-light bg-cream-200",
};

const TONE_TEXT: Record<ImageTone, string> = {
  charcoal: "text-cream/70",
  stone: "text-charcoal/70",
  accent: "text-cream/85",
  cream: "text-charcoal/70",
};

interface PlaceholderImageProps {
  tone?: ImageTone;
  icon?: LucideIcon;
  label?: string;
  caption?: string;
  className?: string;
  /**
   * "center" shows an icon + label centered in the frame (default, used for
   * cards). "corner" shows a small unobtrusive badge instead — use this
   * when real content (like hero headline text) will sit on top of the
   * image so the placeholder label doesn't collide with it.
   */
  variant?: "center" | "corner";
}

export default function PlaceholderImage({
  tone = "charcoal",
  icon: Icon,
  label,
  caption = "Photo placeholder",
  className = "",
  variant = "center",
}: PlaceholderImageProps) {
  const ActiveIcon = Icon ?? ImageIcon;

  return (
    <div
      role="img"
      aria-label={label ? `${label} — image placeholder` : "Image placeholder"}
      className={`relative isolate flex h-full w-full overflow-hidden bg-gradient-to-br ${TONE_STYLES[tone]} ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #F7F4EE 0px, #F7F4EE 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/10"
      />

      {variant === "center" ? (
        <div className="relative flex w-full flex-col items-center justify-center gap-3 px-6 text-center">
          <ActiveIcon
            aria-hidden="true"
            strokeWidth={1.25}
            className={`h-9 w-9 ${TONE_TEXT[tone]}`}
          />
          {label && (
            <span
              className={`font-display text-base sm:text-lg ${TONE_TEXT[tone]}`}
            >
              {label}
            </span>
          )}
          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${TONE_TEXT[tone]} opacity-70`}
          >
            {caption}
          </span>
        </div>
      ) : (
        <div
          className={`relative ml-auto mt-auto flex items-center gap-2 px-4 py-3 text-right ${TONE_TEXT[tone]} opacity-60`}
        >
          <ActiveIcon aria-hidden="true" strokeWidth={1.25} className="h-4 w-4" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
}

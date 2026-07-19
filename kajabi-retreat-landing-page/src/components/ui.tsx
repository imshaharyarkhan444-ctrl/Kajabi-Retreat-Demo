import type { AnchorHTMLAttributes, ReactNode, SVGProps } from "react";
import { cn } from "../utils/cn";
import { checkoutHref } from "../config";

/* ── Primary CTA — water ripple ring, sheen, specific action language ── */
type CtaProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "lantern" | "pine";
  size?: "md" | "lg";
  withCoupon?: boolean;
  children: ReactNode;
};

export function Cta({
  variant = "lantern",
  size = "lg",
  withCoupon = true,
  children,
  className,
  href,
  ...rest
}: CtaProps) {
  const base =
    "group/cta relative inline-flex w-full items-center justify-center gap-3 rounded-full font-body font-bold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto";
  const sizes = size === "lg" ? "px-9 py-4.5 text-base sm:text-lg min-h-15" : "px-7 py-3.5 text-base min-h-13";
  const variants =
    variant === "lantern"
      ? "cta-ring cta-sheen bg-lantern-400 text-pine-950 hover:bg-lantern-300 hover:-translate-y-0.5 focus-visible:ring-lantern-300 shadow-[0_14px_40px_-12px_rgba(231,192,126,0.55)]"
      : "cta-ring-dark cta-sheen bg-pine-900 text-sand-50 hover:bg-pine-800 hover:-translate-y-0.5 focus-visible:ring-pine-700 shadow-[0_14px_40px_-12px_rgba(13,40,34,0.55)]";

  return (
    <a
      href={href ?? checkoutHref(withCoupon ? undefined : "")}
      className={cn(base, sizes, variants, className)}
      {...rest}
    >
      <span className="relative z-10">{children}</span>
      <ArrowIcon className="relative z-10 size-5 transition-transform duration-300 group-hover/cta:translate-x-1.5" />
    </a>
  );
}

/* ── Section eyebrow ── */
export function Eyebrow({
  children,
  tone = "lantern",
  center = false,
}: {
  children: ReactNode;
  tone?: "lantern" | "moss" | "mist";
  center?: boolean;
}) {
  const tones = {
    lantern: "text-lantern-400",
    moss: "text-moss-500",
    mist: "text-mist-500",
  };
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] sm:text-xs",
        center && "justify-center",
        tones[tone]
      )}
    >
      <WaveGlyph className="size-4 shrink-0" />
      {children}
    </p>
  );
}

/* ── Animated flowing line motif (brand mark between ideas) ── */
export function FlowLine({ className, tone = "text-lantern-400" }: { className?: string; tone?: string }) {
  return (
    <svg viewBox="0 0 260 24" fill="none" className={cn("flow-line h-5 w-auto", tone, className)} aria-hidden>
      <path d="M2 14c22-12 44-12 66 0s44 12 66 0 44-12 66 0 44 12 66 0" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

/* ── Star rating row ── */
export function Stars({ className, count = 5 }: { className?: string; count?: number }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-lantern-400", className)} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <StarIcon key={i} className="size-4 fill-current" />
      ))}
    </span>
  );
}

/* ── Monogram avatar for testimonials ── */
const MONOGRAM_TINTS = [
  "bg-mist-500",
  "bg-moss-500",
  "bg-lantern-600",
  "bg-pine-600",
];
export function Monogram({ name, index = 0, className }: { name: string; index?: number; className?: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold text-sand-50 ring-2 ring-white/60",
        MONOGRAM_TINTS[index % MONOGRAM_TINTS.length],
        className
      )}
    >
      {initials}
    </span>
  );
}

/* ── Icons ── */
type IconProps = SVGProps<SVGSVGElement>;
const I = ({ children, ...props }: IconProps & { children: ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
    {children}
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <I {...p}>
    <path d="M4 12h15m0 0-6-6m6 6-6 6" />
  </I>
);
export const WaveGlyph = (p: IconProps) => (
  <I {...p}>
    <path d="M2 9c3-3.5 6-3.5 9 0s6 3.5 9 0M2 16c3-3.5 6-3.5 9 0s6 3.5 9 0" />
  </I>
);
export const CheckIcon = (p: IconProps) => (
  <I {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </I>
);
export const LeafIcon = (p: IconProps) => (
  <I {...p}>
    <path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15Zm0 0c2-5 5-8 10-10" />
  </I>
);
export const MoonIcon = (p: IconProps) => (
  <I {...p}>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
  </I>
);
export const StarIcon = (p: IconProps) => (
  <I {...p}>
    <path d="m12 3 2.7 5.9 6.3.7-4.7 4.3 1.3 6.1L12 16.9 6.4 20l1.3-6.1L3 9.6l6.3-.7L12 3Z" />
  </I>
);
export const ShieldIcon = (p: IconProps) => (
  <I {...p}>
    <path d="M12 3 5 6v5c0 4.6 3 8.2 7 10 4-1.8 7-5.4 7-10V6l-7-3Zm-3 9 2.2 2.2L15.5 10" />
  </I>
);
export const FireIcon = (p: IconProps) => (
  <I {...p}>
    <path d="M12 3c1 3-3 4.5-3 8a3 3 0 0 0 6 .4C16.5 13 17 14.5 17 16a5 5 0 0 1-10 0c0-2.6 1.2-4.3 2.5-6C10.8 8.3 11.5 6 12 3Z" />
  </I>
);
export const MountainIcon = (p: IconProps) => (
  <I {...p}>
    <path d="m3 19 6.5-12 4 7 2-3 5.5 8H3Z" />
  </I>
);
export const PlusIcon = (p: IconProps) => (
  <I {...p}>
    <path d="M12 5v14M5 12h14" />
  </I>
);

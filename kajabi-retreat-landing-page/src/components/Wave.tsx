import { cn } from "../utils/cn";

/**
 * Organic section divider. Place as the first child of a section;
 * `fillClass` should be the *previous* section's background color.
 */
export function Wave({ fillClass, className, flip = false }: { fillClass: string; className?: string; flip?: boolean }) {
  return (
    <div className={cn("pointer-events-none -mt-px w-full overflow-hidden", flip && "rotate-180", className)} aria-hidden>
      <svg viewBox="0 0 1440 110" preserveAspectRatio="none" className="block h-14 w-full sm:h-20 lg:h-24">
        <path
          d="M0,58 C180,104 340,10 560,34 C760,56 900,104 1100,84 C1240,70 1360,44 1440,56 L1440,0 L0,0 Z"
          className={fillClass}
        />
      </svg>
    </div>
  );
}

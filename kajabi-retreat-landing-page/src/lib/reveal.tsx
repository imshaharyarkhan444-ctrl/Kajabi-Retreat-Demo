import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { cn } from "../utils/cn";

export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  rootMargin = "0px 0px -40px 0px"
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  style?: CSSProperties;
  as?: "div" | "section" | "span" | "li" | "figure";
};

/** Fades + rises children into view as they enter the viewport. */
export function Reveal({ children, className, delay = 0, style, as = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      className={cn("reveal", inView && "in", className)}
    >
      {children}
    </Tag>
  );
}

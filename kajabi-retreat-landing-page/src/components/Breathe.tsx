import { useEffect, useState } from "react";
import { useInView } from "../lib/reveal";
import { Reveal } from "../lib/reveal";

const PHASES = [
  { label: "Breathe in…", hint: "through your nose", ms: 4000, scale: 1 },
  { label: "Hold…", hint: "softly", ms: 1600, scale: 1 },
  { label: "Let it go…", hint: "out through your mouth", ms: 4800, scale: 0.55 },
] as const;

/** A tiny live demo of what the retreat teaches: one slow breath. */
export function Breathe() {
  const { ref, inView } = useInView<HTMLDivElement>(0.45);
  const [started, setStarted] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);

  useEffect(() => {
    if (inView) setStarted(true);
  }, [inView]);

  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setPhaseIndex((i) => (i + 1) % PHASES.length), PHASES[phaseIndex].ms);
    return () => clearTimeout(t);
  }, [started, phaseIndex]);

  const phase = started ? PHASES[phaseIndex] : PHASES[0];
  const scale = started ? phase.scale : 0.55;

  return (
    <section ref={ref} className="relative overflow-hidden bg-pine-900 py-24 sm:py-28">
      <div className="mist absolute left-1/2 top-1/2 h-[28rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mist-500/10 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-5 text-center">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-mist-300 sm:text-xs">
            Before you keep scrolling
          </p>
          <h2 className="mt-4 font-display text-3xl font-light italic text-sand-50 sm:text-4xl">
            Take one breath with the river.
          </h2>
        </Reveal>

        <div className="relative mt-14 flex size-52 items-center justify-center sm:size-60">
          <span className="absolute -inset-7 rounded-full border border-mist-300/15" aria-hidden />
          <span className="absolute -inset-14 hidden rounded-full border border-mist-300/10 sm:block" aria-hidden />
          <span className="absolute inset-0 rounded-full border border-mist-300/30" aria-hidden />
          <span
            className="block size-full rounded-full bg-[radial-gradient(circle_at_35%_30%,#c9dad8,#7c9fa1_55%,#46706f)] shadow-[0_0_60px_rgba(124,159,161,0.45)]"
            style={{
              transform: `scale(${scale})`,
              transition: `transform ${started ? phase.ms : 1200}ms cubic-bezier(0.37, 0, 0.63, 1)`,
            }}
          />
        </div>

        <div className="mt-12 h-20">
          <p key={phase.label} className="fade-swap font-display text-2xl italic text-lantern-300 sm:text-3xl">
            {phase.label}
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-mist-300">{phase.hint}</p>
        </div>

        <Reveal delay={200}>
          <p className="max-w-md text-base leading-relaxed text-mist-200">
            That's it. That's the whole practice — breath, movement, attention. Three rounds is
            plenty. Now imagine five days of it, with water moving beside you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

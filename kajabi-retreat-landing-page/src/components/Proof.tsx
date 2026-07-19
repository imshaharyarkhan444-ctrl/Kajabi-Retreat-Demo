import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { Eyebrow, Monogram, Stars } from "./ui";
import { Reveal } from "../lib/reveal";
import { Wave } from "./Wave";
import { IMAGES, RETREAT } from "../config";

const QUOTES = [
  {
    text: "I arrived unable to sleep and left sleeping through the night for the first time in years. On day three I cried during a walk — the good kind. I'd forgotten I was a person.",
    name: "Dana R.",
    role: "ER physician · Fall 2025 cohort",
  },
  {
    text: "Nobody tells you how loud the silence is at first. By day two my shoulders dropped, and they stayed down for months after I got home.",
    name: "Marcus T.",
    role: "Startup founder · Spring 2025 cohort",
  },
  {
    text: "I came in skeptical about anything with 'energy' in the description. Qigong is now my daily fifteen minutes. Even my therapist asked what changed.",
    name: "Priya S.",
    role: "Attorney · Fall 2024 cohort",
  },
  {
    text: "Five days with no inbox, and I made the two best decisions of my career the week I got back. The river is a better strategist than my whole leadership team.",
    name: "Elena M.",
    role: "Marketing director · Spring 2025 cohort",
  },
];

const PHOTOS = [
  { src: IMAGES.strip1, caption: "Morning practice · spring cohort", rotate: "rotate-[-2deg]" },
  { src: IMAGES.strip2, caption: "The listening walk · day 3", rotate: "rotate-[1.5deg]" },
  { src: IMAGES.strip3, caption: "The optional float · zero effort", rotate: "rotate-[-1deg]" },
  { src: IMAGES.strip4, caption: "Goodbye hugs · fall 2025", rotate: "rotate-[2deg]" },
];

const STATS = [
  { value: "4.9/5", label: "average alumni rating" },
  { value: "312", label: "alumni since 2019" },
  { value: "94%", label: "say they'd recommend it" },
  { value: "9 in 10", label: "return or send a friend" },
];

export function Proof() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % QUOTES.length), 6500);
    return () => clearInterval(t);
  }, [paused]);

  const quote = QUOTES[index];

  return (
    <section className="grain relative bg-sand-50 pb-24 sm:pb-32">
      <Wave fillClass="fill-pine-950" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <Reveal>
          <div className="text-center">
            <Eyebrow tone="moss" center>
              The proof is in the quiet
            </Eyebrow>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-light leading-tight tracking-tight text-pine-900 sm:text-5xl">
              {RETREAT.alumni} people came back from the river.{" "}
              <em className="italic text-pine-600">Here's what they said.</em>
            </h2>
          </div>
        </Reveal>

        {/* Stats */}
        <Reveal delay={150}>
          <dl className="mx-auto mt-12 flex max-w-4xl flex-wrap items-start justify-center gap-x-12 gap-y-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-semibold text-pine-900 sm:text-5xl">{s.value}</dd>
                <p className="mt-1.5 text-sm font-semibold uppercase tracking-[0.14em] text-pine-600/80">{s.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Testimonial rotator */}
        <Reveal delay={200}>
          <figure
            className="relative mx-auto mt-16 max-w-3xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <span className="pointer-events-none absolute -top-12 left-0 font-display text-[7rem] leading-none text-lantern-500/60 sm:-left-8" aria-hidden>
              “
            </span>
            <div key={index} className="fade-swap relative pt-6">
              <blockquote className="font-display text-2xl font-light italic leading-relaxed text-pine-900 sm:text-[2rem] sm:leading-snug">
                {quote.text}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <Monogram name={quote.name} index={index} />
                <div>
                  <p className="font-bold text-pine-900">{quote.name}</p>
                  <p className="text-sm text-pine-600/85">{quote.role}</p>
                </div>
                <Stars className="ml-auto hidden sm:flex" />
              </figcaption>
            </div>

            <div className="mt-9 flex items-center gap-4">
              <button
                aria-label="Previous testimonial"
                onClick={() => setIndex((index - 1 + QUOTES.length) % QUOTES.length)}
                className="flex size-11 items-center justify-center rounded-full border border-pine-900/25 text-pine-800 transition-all hover:-translate-x-0.5 hover:border-pine-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-600"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M15 6l-6 6 6 6" /></svg>
              </button>
              <button
                aria-label="Next testimonial"
                onClick={() => setIndex((index + 1) % QUOTES.length)}
                className="flex size-11 items-center justify-center rounded-full border border-pine-900/25 text-pine-800 transition-all hover:translate-x-0.5 hover:border-pine-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-600"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="m9 6 6 6-6 6" /></svg>
              </button>
              <div className="ml-2 flex items-center gap-2">
                {QUOTES.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === index ? "w-7 bg-pine-900" : "w-2 bg-pine-900/25 hover:bg-pine-900/50"
                    )}
                  />
                ))}
              </div>
            </div>
          </figure>
        </Reveal>

        {/* Photo strip */}
        <Reveal delay={150}>
          <div className="mt-20">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-pine-600/70">
              Postcards from past cohorts
            </p>
            <div className="mt-7 flex snap-x gap-5 overflow-x-auto pb-6 sm:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {PHOTOS.map((p) => (
                <figure
                  key={p.caption}
                  className={cn("polaroid w-60 shrink-0 snap-center bg-white p-3 pb-4 shadow-[0_18px_36px_-18px_rgba(13,40,34,0.4)] sm:w-72", p.rotate)}
                >
                  <img src={p.src} alt={p.caption} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                  <figcaption className="pt-3 text-center font-display text-sm italic text-pine-700">{p.caption}</figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 flex items-center justify-center gap-2.5 text-center text-sm font-semibold text-pine-700">
              <span className="pulse-dot inline-block size-2 rounded-full bg-lantern-500" />
              Every cohort since 2019 has sold out — most within three weeks of opening.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

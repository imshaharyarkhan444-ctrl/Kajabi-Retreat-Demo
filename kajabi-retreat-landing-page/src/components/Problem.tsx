import type { ReactNode } from "react";
import { Eyebrow, FlowLine, MoonIcon, FireIcon, WaveGlyph, MountainIcon, LeafIcon } from "./ui";
import { Reveal } from "../lib/reveal";

const CONFESSIONS: { icon: ReactNode; text: string }[] = [
  {
    icon: <MoonIcon className="size-5" />,
    text: "You're tired in a way sleep can't fix — even after the “good” weekends.",
  },
  {
    icon: <FireIcon className="size-5" />,
    text: "Your mind starts its to-do loop at 3 a.m., right on schedule, like it pays rent there.",
  },
  {
    icon: <WaveGlyph className="size-5" />,
    text: "You scroll for hours and call it relaxing. You know it isn't.",
  },
  {
    icon: <MountainIcon className="size-5" />,
    text: "You love your life — and you'd still give anything for a week off from being you.",
  },
  {
    icon: <LeafIcon className="size-5" />,
    text: "Nature feels like a memory. So does the last time you felt truly, safely still.",
  },
];

const OFFSETS = ["lg:ml-0", "lg:ml-12", "lg:ml-4", "lg:ml-16", "lg:ml-8"];

export function Problem() {
  return (
    <section className="grain relative overflow-hidden bg-pine-950 py-24 sm:py-32">
      <div className="mist-slow absolute -right-40 top-0 h-96 w-[36rem] rounded-full bg-mist-500/10 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        {/* Sticky intro */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow tone="mist">Let's be honest with each other</Eyebrow>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-sand-50 sm:text-5xl">
                You know this feeling. <em className="italic text-mist-300">You live here.</em>
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-mist-200">
                Not the Instagram kind of tired. The other kind — the one that lives in your chest,
                hums behind your eyes, and follows you on vacation.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <FlowLine className="mt-8 w-32 opacity-60" tone="text-mist-400" />
            </Reveal>
          </div>
        </div>

        {/* The confessions */}
        <ul className="flex flex-col gap-5 lg:col-span-7">
          {CONFESSIONS.map((c, i) => (
            <Reveal as="li" key={i} delay={i * 110} className={OFFSETS[i % OFFSETS.length]}>
              <div className="group flex items-start gap-5 rounded-2xl border border-mist-500/20 bg-pine-900/60 p-6 transition-colors duration-300 hover:border-lantern-400/40 hover:bg-pine-900">
                <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full border border-mist-500/30 text-mist-300 transition-all duration-300 group-hover:border-lantern-400/50 group-hover:text-lantern-300">
                  {c.icon}
                </span>
                <p className="font-display text-lg leading-snug text-sand-100/95 sm:text-xl">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* The reframe */}
      <div className="relative z-10 mx-auto mt-20 w-full max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <FlowLine className="mx-auto w-40" />
          <p className="mt-8 font-display text-3xl font-light italic leading-snug text-sand-50 sm:text-[2.6rem]">
            This isn't a discipline problem.
            <br />
            It's a <span className="text-lantern-300">disconnection</span> problem.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-mist-200">
            Your nervous system has been stuck in <em>one-more-thing</em> mode for so long that rest
            started to feel like a threat. You can't think your way out of this — and you certainly
            can't hustle your way out.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-8 font-display text-xl italic text-lantern-300">
            Good news: the river has been waiting for you this whole time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

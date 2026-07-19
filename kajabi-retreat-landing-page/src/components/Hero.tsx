import { Cta, Eyebrow, FlowLine, Stars, CheckIcon } from "./ui";
import { Reveal } from "../lib/reveal";
import { IMAGES, RETREAT } from "../config";

const FIREFLIES = [
  { top: "22%", left: "8%", delay: "0s", size: 5 },
  { top: "64%", left: "14%", delay: "-3s", size: 4 },
  { top: "38%", left: "42%", delay: "-6s", size: 3 },
  { top: "78%", left: "36%", delay: "-1.5s", size: 5 },
  { top: "18%", left: "55%", delay: "-4.5s", size: 4 },
  { top: "86%", left: "62%", delay: "-7s", size: 3 },
];

const CHIPS = ["All lodging & meals", "Twice-daily qigong", "Beginner-friendly"];

export function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-pine-950">
      {/* River photograph — full bleed on mobile, right panel on desktop */}
      <div className="absolute inset-0 lg:inset-y-0 lg:left-auto lg:w-[46%]">
        <img
          src={IMAGES.hero}
          alt="Mist rising off a forested river at dawn"
          className="kenburns h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/55 to-pine-950/20 lg:bg-gradient-to-r lg:from-pine-950 lg:via-pine-950/35 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-pine-950 to-transparent" />

        {/* Floating date chip */}
        <Reveal
          delay={700}
          className="absolute right-5 top-24 hidden rounded-full border border-sand-50/25 bg-pine-950/55 px-4 py-2 backdrop-blur-sm lg:block xl:right-10"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sand-100">
            {RETREAT.dates} · Blue Ridge, NC
          </p>
        </Reveal>

        {/* Floating quote card over the image */}
        <Reveal
          delay={900}
          className="absolute bottom-24 right-6 hidden w-64 rounded-2xl border border-sand-50/20 bg-pine-900/70 p-5 shadow-2xl backdrop-blur-md lg:block xl:right-12"
        >
          <Stars className="mb-2" />
          <p className="font-display text-[15px] italic leading-snug text-sand-50">
            “The first real quiet I've felt in years.”
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-mist-300">
            Dana R. · ER physician
          </p>
        </Reveal>
      </div>

      {/* Drifting mist */}
      <div className="mist absolute -left-32 top-1/3 h-80 w-[34rem] rounded-full bg-mist-400/10 blur-3xl" aria-hidden />
      <div className="mist-slow absolute -right-24 bottom-10 h-72 w-[30rem] rounded-full bg-lantern-400/10 blur-3xl" aria-hidden />

      {/* Fireflies */}
      {FIREFLIES.map((f, i) => (
        <span
          key={i}
          aria-hidden
          className="firefly absolute rounded-full bg-lantern-300 shadow-[0_0_10px_2px_rgba(242,217,168,0.7)]"
          style={{ top: f.top, left: f.left, width: f.size, height: f.size, animationDelay: f.delay }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-24 pt-40 sm:px-8 lg:px-12 lg:pt-36">
        <div className="max-w-2xl">
          <Reveal delay={100}>
            <Eyebrow>A 5-day restorative qigong retreat</Eyebrow>
          </Reveal>

          <Reveal delay={220}>
            <h1 className="mt-6 font-display text-[2.6rem] font-light leading-[1.04] tracking-tight text-sand-50 sm:text-6xl lg:text-[4.4rem]">
              You weren't built to run this hard forever.{" "}
              <em className="font-normal italic text-lantern-300">Let the river slow you down.</em>
            </h1>
          </Reveal>

          <Reveal delay={360}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist-200">
              <strong className="font-semibold text-sand-100">Return to the River</strong> is five
              unhurried days of gentle qigong, forest air and moving water — for the exhausted, the
              overstretched, and everyone quietly craving to feel like themselves again. No
              performance. No homework. Just rest, practice, and the sound of water.
            </p>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-9 flex flex-col items-start gap-4">
              <Cta>Reserve Your Spot by the River</Cta>
              <p className="text-sm italic text-mist-300">…or keep scrolling. The river is patient.</p>
            </div>
          </Reveal>

          <Reveal delay={640}>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-sand-200/90">
              <span className="flex items-center gap-2">
                <Stars />
                <span>
                  <strong className="font-bold text-sand-50">4.9</strong> from {RETREAT.alumni} alumni
                </span>
              </span>
              <span className="hidden h-4 w-px bg-sand-50/25 sm:block" aria-hidden />
              <span className="flex items-center gap-2">
                <span className="pulse-dot inline-block size-2 rounded-full bg-lantern-400" />
                <strong className="font-bold text-lantern-300">
                  Only {RETREAT.spotsLeft} spots left
                </strong>
              </span>
            </div>
          </Reveal>

          <Reveal delay={760}>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {CHIPS.map((chip) => (
                <li
                  key={chip}
                  className="flex items-center gap-2 rounded-full border border-mist-500/30 bg-mist-500/10 px-4 py-1.5 text-[13px] font-semibold text-mist-200"
                >
                  <CheckIcon className="size-3.5 text-lantern-400" />
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end justify-between px-5 pb-8 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 text-mist-300">
          <FlowLine className="w-24 opacity-70" tone="text-mist-400" />
          <span className="text-[11px] font-bold uppercase tracking-[0.3em]">scroll gently</span>
        </div>
        <span className="bob hidden text-mist-300 sm:block" aria-hidden>
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M12 4v14m0 0 5-5m-5 5-5-5" />
          </svg>
        </span>
      </div>
    </section>
  );
}

import { CheckIcon, Eyebrow, MoonIcon, Stars } from "./ui";
import { Reveal } from "../lib/reveal";
import { Wave } from "./Wave";
import { IMAGES } from "../config";

const ARRIVE = [
  "The 3 a.m. buzz in your chest",
  "A to-do list that follows you into your dreams",
  "Shoulders permanently raised to your ears",
  "Caffeine doing the job sleep used to do",
  "The phrase “I'm fine,” on an endless loop",
];

const LEAVE = [
  "Mornings that begin without urgency",
  "A quiet mind that doesn't feel empty",
  "Sleep that actually repairs you",
  "Energy that isn't borrowed from tomorrow",
  "The feeling of your own two feet on the ground",
];

const OUTCOMES = [
  {
    n: "01",
    title: "Deep rest",
    text: "Sleep returns first. Real sleep — the kind where your body remembers how to repair itself and your mind stops auditing the day.",
  },
  {
    n: "02",
    title: "A clear head",
    text: "The fog lifts somewhere around day three. You'll remember what you actually want — not just what's most urgent.",
  },
  {
    n: "03",
    title: "Living energy",
    text: "Gentle qigong wakes the body without spiking it. Energy comes back like spring water: quiet, steady, rising.",
  },
  {
    n: "04",
    title: "Reconnection",
    text: "With the ground under your feet. With the people around the fire. And — the part nobody expects — with yourself.",
  },
];

export function Transformation() {
  return (
    <section className="grain relative bg-sand-50 pb-24 sm:pb-32">
      <Wave fillClass="fill-pine-900" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section head */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow tone="moss">What five days of stillness makes possible</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-pine-900 sm:text-5xl">
              You won't just feel rested. <em className="italic text-pine-600">You'll feel like you again.</em>
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-pine-700/85 lg:ml-auto">
              This isn't a vacation that ends the moment you hit your inbox. It's a pattern
              interrupt deep enough to change how your body runs.
            </p>
          </Reveal>
        </div>

        {/* Arrive / Leave */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          <Reveal>
            <div className="h-full rounded-3xl border border-sand-300 bg-sand-100/70 p-8 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-pine-900/10 text-pine-700">
                  <MoonIcon className="size-5" />
                </span>
                <h3 className="font-display text-2xl text-pine-800">You arrive carrying…</h3>
              </div>
              <ul className="mt-6 space-y-3.5">
                {ARRIVE.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-pine-700/70">
                    <span className="mt-[11px] h-px w-4 shrink-0 bg-pine-700/40" aria-hidden />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="h-full rounded-3xl bg-pine-900 p-8 shadow-[0_28px_60px_-24px_rgba(13,40,34,0.5)] transition-transform duration-500 hover:-translate-y-1.5 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-lantern-400/20 text-lantern-300">
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M12 3v3m6.4.6-2.2 2.2M21 12h-3m.4 6.4-2.2-2.2M12 18v3M5.6 18.4l2.2-2.2M6 12H3m.6-6.4 2.2 2.2" />
                  </svg>
                </span>
                <h3 className="font-display text-2xl text-sand-50">You leave with…</h3>
              </div>
              <ul className="mt-6 space-y-3.5">
                {LEAVE.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sand-100/90">
                    <CheckIcon className="mt-1 size-4 shrink-0 text-lantern-400" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Outcomes + collage */}
        <div className="mt-20 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <ol className="relative space-y-10 border-l-2 border-dashed border-mist-300 pl-8 sm:pl-10">
            {OUTCOMES.map((o, i) => (
              <Reveal as="li" key={o.n} delay={i * 120} className="relative">
                <span className="absolute -left-[3.35rem] top-0 flex size-11 items-center justify-center rounded-full bg-pine-900 font-display text-sm font-semibold text-lantern-300 shadow-md sm:-left-[3.85rem]">
                  {o.n}
                </span>
                <h3 className="font-display text-2xl text-pine-900 sm:text-[1.7rem]">{o.title}</h3>
                <p className="mt-2.5 max-w-md leading-relaxed text-pine-700/85">{o.text}</p>
              </Reveal>
            ))}
          </ol>

          <div className="relative mx-auto w-full max-w-md lg:mt-6">
            <Reveal>
              <figure className="overflow-hidden rounded-3xl shadow-[0_32px_60px_-24px_rgba(13,40,34,0.45)]">
                <img
                  src={IMAGES.riverGreen}
                  alt="A calm river winding through a green misty valley at dawn"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </figure>
            </Reveal>
            <Reveal delay={220}>
              <figure className="absolute -bottom-10 -left-6 w-52 rotate-[-4deg] overflow-hidden rounded-2xl border-[6px] border-white shadow-xl sm:-left-12 sm:w-64">
                <img
                  src={IMAGES.riverMist}
                  alt="Misty autumn forest beside a quiet river"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </figure>
            </Reveal>
            <Reveal delay={320}>
              <span className="absolute -right-2 -top-4 rotate-3 rounded-full bg-lantern-400 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-pine-950 shadow-lg sm:-right-5">
                Day 2 · the quiet arrives
              </span>
            </Reveal>
            <Reveal delay={400}>
              <p className="absolute -bottom-16 right-0 hidden max-w-[13rem] text-right font-display text-sm italic leading-snug text-pine-700/80 lg:block">
                “Somewhere between the second sunrise and the first nap, I stopped checking for
                notifications.” <Stars className="mt-1.5 block" />
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { cn } from "../utils/cn";
import { CheckIcon, Eyebrow, LeafIcon, MoonIcon, MountainIcon, StarIcon, FireIcon, WaveGlyph } from "./ui";
import { Reveal } from "../lib/reveal";
import { Wave } from "./Wave";
import { IMAGES } from "../config";

const DAYS = [
  {
    day: "Day 1",
    name: "Arrive & Exhale",
    mood: "Permission to put everything down.",
    tags: ["1 qigong session", "welcome feast", "no agenda"],
    schedule: [
      ["3:00", "Check-in, herbal tea & a slow hello"],
      ["5:00", "First gentle qigong on the river deck"],
      ["7:00", "Riverside dinner by lantern light"],
      ["9:00", "Fireside — no agenda, no forced intros"],
    ],
  },
  {
    day: "Day 2",
    name: "Soften",
    mood: "Your shoulders find their way down.",
    tags: ["2 qigong sessions", "forest bathing", "naps encouraged"],
    schedule: [
      ["7:30", "Sunrise qigong at the water's edge"],
      ["9:30", "Guided forest-bathing walk"],
      ["2:00", "River-stones meditation — or a nap. Naps count."],
      ["7:30", "Restorative stretch & journaling by firelight"],
    ],
  },
  {
    day: "Day 3",
    name: "Listen",
    mood: "You start hearing yourself again.",
    tags: ["silent morning", "breathwork", "fire circle"],
    schedule: [
      ["—", "Silent morning until noon (gentler than it sounds)"],
      ["10:00", "Guided listening walk through the cove"],
      ["2:30", "Breathwork & qigong: “opening the river”"],
      ["8:00", "Fire circle — stories, not small talk"],
    ],
  },
  {
    day: "Day 4",
    name: "Flow",
    mood: "Effort becomes optional.",
    tags: ["river float", "massage afternoon", "gratitude feast"],
    schedule: [
      ["7:30", "Moving-water qigong on the deck"],
      ["10:30", "Optional river float — tubes, zero effort"],
      ["2:00", "Massage afternoon or porch-and-book time"],
      ["7:00", "Gratitude feast: five courses, no clocks"],
    ],
  },
  {
    day: "Day 5",
    name: "Return",
    mood: "You leave with a practice, not just a memory.",
    tags: ["closing circle", "one small ritual", "recordings"],
    schedule: [
      ["8:00", "Final practice at the water's edge"],
      ["10:00", "Closing circle & your one-small-ritual intention"],
      ["12:00", "Slow goodbye brunch"],
      ["1:30", "Depart with handbook, recordings & a lighter chest"],
    ],
  },
];

const NATURE = [
  { icon: <LeafIcon className="size-5" />, label: "Guided forest-bathing walks" },
  { icon: <WaveGlyph className="size-5" />, label: "Optional river floats & swims" },
  { icon: <MoonIcon className="size-5" />, label: "Dawn bird-sits on the dock" },
  { icon: <StarIcon className="size-5" />, label: "Star-sits after dark (zero light pollution)" },
  { icon: <MountainIcon className="size-5" />, label: "Listening walks through the cove" },
  { icon: <FireIcon className="size-5" />, label: "Fire circles & barefoot lawn mornings" },
];

const INCLUDED = [
  "4 nights in a private riverside room",
  "Every meal, snack & the 24/7 herbal tea bar",
  "10+ guided qigong & nature sessions",
  "A 1:1 integration check-in with Maren",
  "Retreat handbook & lifetime session recordings",
  "Invitation to the monthly alumni circle",
];

export function Details() {
  const [active, setActive] = useState(0);
  const day = DAYS[active];

  return (
    <section className="grain relative bg-sand-100 pb-24 sm:pb-32">
      <Wave fillClass="fill-sand-50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Head */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow tone="moss">The retreat itself</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-pine-900 sm:text-5xl">
              Five unhurried days <em className="italic text-pine-600">on the water's edge.</em>
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-pine-700/85 lg:ml-auto">
              No agenda anxiety. Each day follows a gentle rhythm — practice, nature, rest — and
              everything is optional except being kind to yourself.
            </p>
          </Reveal>
        </div>

        {/* Itinerary tabs */}
        <Reveal delay={200}>
          <div className="mt-12 flex gap-2.5 overflow-x-auto pb-2 lg:flex-wrap" role="tablist" aria-label="Retreat itinerary">
            {DAYS.map((d, i) => (
              <button
                key={d.day}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-3 text-left transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-600 sm:px-6",
                  active === i
                    ? "border-pine-900 bg-pine-900 text-sand-50 shadow-[0_12px_30px_-12px_rgba(13,40,34,0.6)]"
                    : "border-pine-900/20 bg-white/70 text-pine-800 hover:-translate-y-0.5 hover:border-pine-900/50"
                )}
              >
                <span className={cn("block text-[10px] font-bold uppercase tracking-[0.22em]", active === i ? "text-lantern-300" : "text-pine-600/70")}>
                  {d.day}
                </span>
                <span className="block font-display text-base font-semibold leading-tight sm:text-lg">{d.name}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Active day panel */}
        <div key={active} className="fade-swap mt-4 overflow-hidden rounded-3xl border border-sand-300 bg-white shadow-[0_28px_60px_-30px_rgba(13,40,34,0.35)]">
          <div className="grid md:grid-cols-5">
            <div className="p-7 sm:p-9 md:col-span-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-mist-600">
                {day.day} · {day.name}
              </p>
              <ul className="mt-6">
                {day.schedule.map(([time, item], i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 border-b border-dashed border-sand-300 py-3.5 last:border-0"
                  >
                    <span className="w-12 shrink-0 pt-0.5 font-display text-sm font-semibold text-pine-600">
                      {time}
                    </span>
                    <span className="leading-snug text-pine-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-pine-900 p-7 text-sand-50 sm:p-9 md:col-span-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-lantern-300">
                The feel of the day
              </p>
              <p className="mt-4 font-display text-2xl font-light italic leading-snug">“{day.mood}”</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {day.tags.map((t) => (
                  <span key={t} className="rounded-full border border-mist-500/40 bg-mist-500/10 px-3.5 py-1.5 text-xs font-semibold text-mist-200">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-7 text-sm leading-relaxed text-mist-300">
                Everything on this page is an invitation, never a requirement. Rest is always on the
                schedule.
              </p>
            </div>
          </div>
        </div>

        {/* Bento: practice / nature / lodge */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5 lg:row-span-2">
            <div className="relative h-full min-h-[26rem] overflow-hidden rounded-3xl lg:min-h-full">
              <img
                src={IMAGES.qigong}
                alt="A woman practicing slow qigong movement in lush greenery"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/45 to-pine-950/10" />
              <div className="relative z-10 flex h-full flex-col justify-end p-7 sm:p-9">
                <Eyebrow>The practice</Eyebrow>
                <h3 className="mt-3 font-display text-3xl font-light text-sand-50">Qigong, made gentle</h3>
                <p className="mt-3 max-w-sm leading-relaxed text-sand-100/85">
                  A 5,000-year-old moving meditation: slow breath-led movement that calms the nervous
                  system rather than challenging it. Twice daily, always optional, never sweaty.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {["Zero experience needed", "Chair-friendly", "Trauma-informed cues"].map((t) => (
                    <li key={t} className="flex items-center gap-1.5 rounded-full bg-sand-50/15 px-3.5 py-1.5 text-xs font-semibold text-sand-100 backdrop-blur-sm">
                      <CheckIcon className="size-3 text-lantern-300" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="h-full rounded-3xl border border-mist-200 bg-mist-100/70 p-7 sm:p-9">
              <Eyebrow tone="mist">Nature does the heavy lifting</Eyebrow>
              <h3 className="mt-3 font-display text-3xl font-light text-pine-900">The forest is a co-facilitator</h3>
              <ul className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {NATURE.map((n) => (
                  <li key={n.label} className="flex items-center gap-3 text-pine-800">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-pine-600 shadow-sm">
                      {n.icon}
                    </span>
                    <span className="leading-snug">{n.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={200} className="lg:col-span-7">
            <div className="grid h-full overflow-hidden rounded-3xl border border-sand-300 bg-white sm:grid-cols-2">
              <img
                src={IMAGES.lodge}
                alt="A warm wooden lodge bedroom with soft lamplight and a stone fireplace"
                className="h-56 w-full object-cover sm:h-full"
                loading="lazy"
              />
              <div className="p-7 sm:p-9">
                <Eyebrow tone="moss">Rest & meals</Eyebrow>
                <h3 className="mt-3 font-display text-3xl font-light text-pine-900">Rest like you mean it</h3>
                <p className="mt-3 leading-relaxed text-pine-700/85">
                  Private riverside rooms with wood stoves, wool blankets and rocking-chair porches.
                  Plant-forward whole-food meals from local farms — dietary needs happily covered —
                  and an herbal tea bar that never closes.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* What's included */}
        <Reveal delay={100}>
          <div className="mt-6 rounded-3xl bg-pine-900 p-8 text-sand-50 shadow-[0_28px_60px_-28px_rgba(13,40,34,0.6)] sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h3 className="font-display text-3xl font-light">
                Everything you need. <em className="italic text-lantern-300">Nothing you don't.</em>
              </h3>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-mist-300">Included in one price</p>
            </div>
            <ul className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sand-100/90">
                  <CheckIcon className="mt-1 size-4 shrink-0 text-lantern-400" />
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 border-t border-sand-50/15 pt-5 text-sm leading-relaxed text-mist-300">
              Not included: transport to Asheville (we share a shuttle & carpool list after booking)
              and optional massage sessions.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Eyebrow, LeafIcon, ShieldIcon, StarIcon, FireIcon } from "./ui";
import { Reveal } from "../lib/reveal";
import { Wave } from "./Wave";
import { IMAGES } from "../config";

const CREDENTIALS = [
  {
    icon: <ShieldIcon className="size-5" />,
    title: "Certified Qigong Instructor",
    sub: "National Qigong Association · teaching since 2004",
  },
  {
    icon: <FireIcon className="size-5" />,
    title: "2,400+ students guided",
    sub: "41 retreats led since 2019 — every cohort sold out",
  },
  {
    icon: <LeafIcon className="size-5" />,
    title: "Trauma-aware facilitation",
    sub: "Trained with the Trauma Resource Institute",
  },
  {
    icon: <StarIcon className="size-5" />,
    title: "As featured in",
    sub: "Yoga Journal · The Slow Living Review · Blue Ridge Life",
  },
];

export function Facilitator() {
  return (
    <section className="grain relative overflow-hidden bg-pine-950 pb-24 sm:pb-32">
      <Wave fillClass="fill-sand-100" />
      <div className="mist absolute -left-32 bottom-0 h-80 w-[32rem] rounded-full bg-mist-500/10 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12">
        {/* Portrait */}
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="absolute -inset-3 rotate-2 rounded-3xl border-2 border-lantern-400/50" aria-hidden />
            <img
              src={IMAGES.facilitator}
              alt="Maren Kessler standing calmly among trees in soft natural light"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
              loading="lazy"
            />
            <span className="absolute -bottom-5 right-4 rounded-full bg-lantern-400 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-pine-950 shadow-xl sm:-right-4">
              22 years teaching
            </span>
          </div>
        </Reveal>

        {/* Bio */}
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>Your guide</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-light tracking-tight text-sand-50 sm:text-5xl">Maren Kessler</h2>
            <p className="mt-3 text-sm font-bold uppercase tracking-[0.22em] text-mist-300">
              Qigong teacher · former ICU nurse · lifelong river person
            </p>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-mist-200">
              Maren spent twelve years as an ICU nurse before her own body staged the intervention.
              Burned out and running on caffeine and adrenaline, she collapsed mid-shift in 2011 —
              and spent the next year slowly relearning how to rest. A riverside qigong class in
              Asheville was where it began.
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist-200">
              Two decades of practice later, she has guided more than 2,400 students through 41
              retreats — each one built on the same conviction: you don't fix exhaustion with more
              effort. You meet it with softness, water, and breath.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-mist-500/25 bg-pine-900 p-5 transition-colors duration-300 hover:border-lantern-400/40">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-lantern-400/15 text-lantern-300">
                    {c.icon}
                  </span>
                  <div>
                    <p className="font-bold text-sand-50">{c.title}</p>
                    <p className="mt-1 text-sm leading-snug text-mist-300">{c.sub}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={250}>
            <blockquote className="mt-10 max-w-2xl border-l-2 border-lantern-400 pl-6">
              <p className="font-display text-xl font-light italic leading-relaxed text-sand-100 sm:text-2xl">
                “I don't teach people to empty their minds. I teach them to put the world down for a
                while — the river does the rest.”
              </p>
              <footer className="mt-4 font-display text-2xl italic text-lantern-300">— Maren</footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

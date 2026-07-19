import { Cta, FlowLine, ShieldIcon, Stars, WaveGlyph } from "./ui";
import { Reveal } from "../lib/reveal";
import { Wave } from "./Wave";
import { IMAGES, RETREAT } from "../config";

const FIREFLIES = [
  { top: "18%", left: "12%", delay: "0s", size: 5 },
  { top: "30%", left: "82%", delay: "-2s", size: 4 },
  { top: "68%", left: "8%", delay: "-4s", size: 3 },
  { top: "76%", left: "88%", delay: "-6s", size: 5 },
  { top: "22%", left: "46%", delay: "-1s", size: 3 },
  { top: "58%", left: "70%", delay: "-5s", size: 4 },
  { top: "84%", left: "38%", delay: "-3s", size: 4 },
];

export function FinalCta() {
  return (
    <footer>
      <section className="grain relative overflow-hidden bg-pine-950">
        <Wave fillClass="fill-sand-50" className="relative z-10" />

        <div className="absolute inset-0">
          <img
            src={IMAGES.finalCta}
            alt="A misty river at dusk between dark silhouetted trees"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pine-950/85 via-pine-950/70 to-pine-950/95" />
        </div>

        {FIREFLIES.map((f, i) => (
          <span
            key={i}
            aria-hidden
            className="firefly absolute z-10 rounded-full bg-lantern-300 shadow-[0_0_10px_2px_rgba(242,217,168,0.7)]"
            style={{ top: f.top, left: f.left, width: f.size, height: f.size, animationDelay: f.delay }}
          />
        ))}

        <div className="relative z-10 mx-auto w-full max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <Reveal>
            <FlowLine className="mx-auto w-40" />
            <h2 className="mt-8 font-display text-4xl font-light leading-tight tracking-tight text-sand-50 sm:text-6xl">
              The river isn't going anywhere.
              <br />
              <em className="italic text-lantern-300">But these {RETREAT.spotsLeft} spots are.</em>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-mist-200">
              Five days from now you could be falling asleep to cedar and moving water instead of
              your own racing thoughts. Waking without an alarm. Remembering what silence sounds
              like. All you have to do is say yes.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex justify-center">
              <Cta>Begin Your Return to the River</Cta>
            </div>
          </Reveal>

          <Reveal delay={430}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 text-sm text-sand-200/90">
              <span className="flex items-center gap-2">
                <ShieldIcon className="size-4.5 text-lantern-300" />
                7-day full-refund window
              </span>
              <span className="flex items-center gap-2">
                <Stars />
                {RETREAT.rating} · {RETREAT.alumni} alumni
              </span>
              <span className="flex items-center gap-2">
                <span className="pulse-dot inline-block size-2 rounded-full bg-lantern-400" />
                {RETREAT.spotsLeft} spots remain for {RETREAT.dates}
              </span>
            </div>
          </Reveal>

          <Reveal delay={540}>
            <p className="mx-auto mt-10 max-w-xl font-display text-base italic leading-relaxed text-mist-300">
              P.S. Early-bird pricing ends {RETREAT.earlyBirdDeadline} — after that it's $
              {RETREAT.priceRegular.toLocaleString()}, if spots remain at all.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Wordmark-only footer — Kajabi's default nav/footer stay hidden */}
      <div className="border-t border-sand-50/10 bg-pine-950 py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-5 text-center sm:px-8">
          <p className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full border border-lantern-400/60 text-lantern-300">
              <WaveGlyph className="size-4" />
            </span>
            <span className="font-display text-xl text-sand-50">{RETREAT.name}</span>
          </p>
          <p className="font-display text-base italic text-mist-300">Five days. One river. You, again.</p>
          <div className="space-y-1.5 text-xs leading-relaxed text-mist-400">
            <p>
              © 2026 {RETREAT.name} · {RETREAT.location} · {RETREAT.email}
            </p>
            <p>Secure checkout powered by Kajabi Enhanced Checkout</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

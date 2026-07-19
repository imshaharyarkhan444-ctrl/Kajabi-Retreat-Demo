import { useState } from "react";
import { cn } from "../utils/cn";
import { Cta, Eyebrow, ShieldIcon, Stars } from "./ui";
import { Reveal } from "../lib/reveal";
import { Wave } from "./Wave";
import { RETREAT, EARLY_BIRD_CODE } from "../config";

const VALUE_STACK = [
  ["4 nights private riverside lodging", 760],
  ["Every meal, snack & the herbal tea bar", 380],
  ["10+ guided qigong & nature sessions", 540],
  ["1:1 integration session + lifetime recordings", 220],
  ["Alumni circle & retreat handbook", 150],
] as const;

const VALUE_TOTAL = VALUE_STACK.reduce((sum, [, v]) => sum + v, 0);

export function Pricing() {
  const [plan, setPlan] = useState(false);
  const claimedPct = Math.round(((RETREAT.spotsTotal - RETREAT.spotsLeft) / RETREAT.spotsTotal) * 100);

  return (
    <section id="offer" className="grain relative bg-sand-100 pb-24 sm:pb-32">
      <Wave fillClass="fill-sand-50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="text-center">
            <Eyebrow tone="moss" center>
              The offer
            </Eyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-light leading-tight tracking-tight text-pine-900 sm:text-5xl">
              One clear price. <em className="italic text-pine-600">Everything included.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-pine-700/85">
              No tiers, no upsells at the door. One price for five days that rearrange your nervous
              system.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-14 grid max-w-5xl overflow-hidden rounded-[2rem] bg-pine-950 text-sand-50 shadow-[0_48px_90px_-40px_rgba(8,27,22,0.7)] lg:grid-cols-2">
            {/* Value stack */}
            <div className="p-8 sm:p-11">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-mist-300">Your investment covers</p>
              <ul className="mt-7">
                {VALUE_STACK.map(([label, value]) => (
                  <li
                    key={label}
                    className="flex items-baseline justify-between gap-4 border-b border-dashed border-sand-50/15 py-4 text-[15px] last:border-0"
                  >
                    <span className="leading-snug text-sand-100/90">{label}</span>
                    <span className="shrink-0 font-display font-semibold text-mist-300">${value}</span>
                  </li>
                ))}
              </ul>
              <p className="flex items-baseline justify-between pt-2">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-mist-300">Real value</span>
                <span className="font-display text-2xl font-semibold text-sand-50">${VALUE_TOTAL.toLocaleString()}</span>
              </p>

              <div className="mt-9 flex items-start gap-4 rounded-2xl border border-lantern-400/30 bg-lantern-400/10 p-5">
                <ShieldIcon className="mt-0.5 size-6 shrink-0 text-lantern-300" />
                <div>
                  <p className="font-bold text-sand-50">7-day peace-of-mind guarantee</p>
                  <p className="mt-1 text-sm leading-relaxed text-sand-100/80">
                    Full refund within 7 days of booking, no questions asked. After that, half your
                    payment becomes credit toward any future retreat.
                  </p>
                </div>
              </div>
            </div>

            {/* Price + CTA */}
            <div className="relative bg-pine-900 p-8 sm:p-11">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-lantern-400/40 bg-lantern-400/10 px-4 py-2">
                <span className="pulse-dot inline-block size-2 rounded-full bg-lantern-400" />
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-lantern-300">
                  Early-bird ends {RETREAT.earlyBirdDeadline} · {RETREAT.spotsLeft} of {RETREAT.spotsTotal} spots left
                </p>
              </div>

              <div className="mt-6">
                <div className="h-2 overflow-hidden rounded-full bg-pine-950">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-lantern-600 to-lantern-400 transition-[width] duration-1000"
                    style={{ width: `${claimedPct}%` }}
                  />
                </div>
                <p className="mt-2.5 text-sm text-mist-300">
                  {RETREAT.spotsTotal - RETREAT.spotsLeft} travelers have already said yes.
                </p>
              </div>

              <div className="mt-8">
                <p className="flex items-baseline gap-3">
                  <s className="font-display text-2xl text-mist-400">${RETREAT.priceRegular.toLocaleString()}</s>
                  <span className="rounded-full bg-lantern-400 px-3 py-1 text-xs font-bold uppercase tracking-wide text-pine-950">
                    save ${(RETREAT.priceRegular - RETREAT.priceEarly).toLocaleString()}
                  </span>
                </p>
                <p key={String(plan)} className="fade-swap mt-3 flex items-baseline gap-2">
                  <span className="font-display text-6xl font-semibold tracking-tight text-sand-50 sm:text-7xl">
                    {plan ? `$${RETREAT.planAmount}` : `$${RETREAT.priceEarly.toLocaleString()}`}
                  </span>
                  <span className="text-mist-300">{plan ? `/mo × ${RETREAT.planMonths}` : "/ person"}</span>
                </p>
                <p className="mt-2 text-sm leading-snug text-mist-300">
                  {plan
                    ? `${RETREAT.planMonths} gentle monthly payments — rest now, pay softly.`
                    : `One payment. Code ${EARLY_BIRD_CODE} is pre-applied at checkout.`}
                </p>
              </div>

              {/* Payment toggle */}
              <div className="mt-7 inline-flex rounded-full bg-pine-950 p-1.5" role="group" aria-label="Payment options">
                {[false, true].map((isPlan) => (
                  <button
                    key={String(isPlan)}
                    onClick={() => setPlan(isPlan)}
                    aria-pressed={plan === isPlan}
                    className={cn(
                      "rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-lantern-300",
                      plan === isPlan ? "bg-lantern-400 text-pine-950 shadow" : "text-mist-300 hover:text-sand-50"
                    )}
                  >
                    {isPlan ? `${RETREAT.planMonths} monthly payments` : "Pay in full"}
                  </button>
                ))}
              </div>

              <div className="mt-9">
                <Cta className="w-full sm:w-full">Claim Your Spot by the River</Cta>
              </div>

              <div className="mt-6 flex flex-col items-center gap-2 text-center">
                <p className="flex items-center gap-2 text-sm text-sand-200/90">
                  <Stars />
                  Rated {RETREAT.rating} by {RETREAT.alumni} alumni
                </p>
                <p className="text-xs leading-relaxed text-mist-400">
                  Secure checkout powered by Kajabi · Visa · Mastercard · Amex · Apple Pay
                  <br />
                  Have another code? Swap it in at checkout.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
          <p className="mx-auto mt-9 max-w-xl text-center text-base leading-relaxed text-pine-700/85">
            Questions before you commit? Write to{" "}
            <span className="font-semibold text-pine-900">{RETREAT.email}</span> — a human (Maren)
            answers within a day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

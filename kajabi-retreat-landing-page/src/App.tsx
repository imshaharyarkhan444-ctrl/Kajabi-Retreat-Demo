import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Breathe } from "./components/Breathe";
import { Transformation } from "./components/Transformation";
import { Details } from "./components/Details";
import { Facilitator } from "./components/Facilitator";
import { Proof } from "./components/Proof";
import { Pricing } from "./components/Pricing";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { WaveGlyph } from "./components/ui";
import { RETREAT } from "./config";

/**
 * Return to the River — Kajabi-ready landing page.
 * No site navigation or external links: the only actions on the page are the
 * CTAs, which route to the Kajabi Enhanced Checkout offer (see src/config.ts).
 */
export default function App() {
  return (
    <main className="min-h-screen bg-pine-950">
      {/* Urgency ribbon — replaces the hidden Kajabi header */}
      <div className="relative z-40 bg-lantern-400 px-4 py-2 text-center text-pine-950">
        <p className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11px] font-bold uppercase tracking-[0.14em] sm:text-xs">
          <span className="pulse-dot inline-block size-2 rounded-full bg-pine-900" />
          Early-bird pricing ends {RETREAT.earlyBirdDeadline} · Only {RETREAT.spotsLeft} spots
          remaining · Code {`RIVERSIDE`}
        </p>
      </div>

      <div className="relative">
        {/* Wordmark-only top bar — no nav, no outbound links */}
        <header className="absolute inset-x-0 top-0 z-30">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
            <p className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full border border-lantern-400/60 bg-pine-950/40 text-lantern-300 backdrop-blur-sm">
                <WaveGlyph className="size-4.5" />
              </span>
              <span className="font-display text-lg font-medium tracking-tight text-sand-50 sm:text-xl">
                {RETREAT.name}
              </span>
            </p>
            <p className="hidden text-[11px] font-bold uppercase tracking-[0.24em] text-mist-300 sm:block">
              {RETREAT.dates} · Blue Ridge, NC
            </p>
          </div>
        </header>

        <Hero />
      </div>

      <Problem />
      <Breathe />
      <Transformation />
      <Details />
      <Facilitator />
      <Proof />
      <Pricing />
      <Faq />
      <FinalCta />
    </main>
  );
}

import { useState } from "react";
import { cn } from "../utils/cn";
import { Eyebrow, PlusIcon } from "./ui";
import { Reveal } from "../lib/reveal";
import { Wave } from "./Wave";

const FAQS = [
  {
    q: "How do I get to the retreat?",
    a: "Fly into Asheville Regional (AVL) — the lodge is a 45-minute drive away. After booking you'll get our shuttle list, a carpool thread with other travelers, and driving directions with free parking. Most guests arrive between 1 and 3 p.m. on Day 1, and early check-in is there whenever your flight is.",
  },
  {
    q: "I'm not fit and I've never done qigong. Is this for me?",
    a: "This retreat was designed exactly for your body — the tired one. Every movement is slow, low-impact and fully chair-adapted. There is nothing to keep up with, because there is nothing to keep up to. People in their 30s through their 70s practice together, side by side.",
  },
  {
    q: "What should I bring?",
    a: "Warm layers, a rain shell, a journal, a water bottle, and shoes that don't mind getting wet. A complete packing list arrives after you book. Leave the laptop in a drawer — there's a lockbox at the lodge, and it's remarkable how little you'll miss it.",
  },
  {
    q: "What if I have to cancel?",
    a: "Full refund within 7 days of booking, no questions asked. After that, half your payment becomes credit toward any future retreat, and your spot is transferable to a friend at any time — free, no paperwork, no drama.",
  },
  {
    q: "Will I be reachable in an emergency?",
    a: "The retreat is tech-optional: wifi lives in the lodge lobby only, and there's a phone basket during sessions. You'll share a 24/7 emergency line with your family and work before you arrive. Most guests stop checking their phones by day two — the river is good at that.",
  },
  {
    q: "What about food and dietary needs?",
    a: "Every meal is included: whole-food, plant-forward cooking from local farms, with omnivore options each day. Vegan, vegetarian, gluten-free and allergy-friendly plates are happily covered — just let us know two weeks before you arrive.",
  },
  {
    q: "Is this religious or 'woo'?",
    a: "Neither. Qigong is taught the way we use it here: gentle movement and breath, secular and practical. There's no dogma, no jargon you have to learn, and nothing you have to believe. Take what helps you rest. Leave the rest.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="grain relative bg-sand-50 pb-24 sm:pb-28">
      <Wave fillClass="fill-sand-100" />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow tone="moss" center>
              Before you ask
            </Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-light leading-tight tracking-tight text-pine-900 sm:text-5xl">
              Hesitations, <em className="italic text-pine-600">welcome.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-pine-700/85">
              The exact things people ask before saying yes — answered honestly.
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className="border-b border-pine-900/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-600"
                  >
                    <span className="font-display text-xl leading-snug text-pine-900 sm:text-[1.35rem]">{f.q}</span>
                    <span
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-full border border-pine-900/25 text-pine-800 transition-all duration-300",
                        isOpen && "rotate-45 border-lantern-600 bg-lantern-400 text-pine-950"
                      )}
                    >
                      <PlusIcon className="size-5" />
                    </span>
                  </button>
                  <div className={cn("faq-panel", isOpen && "open")}>
                    <div>
                      <p className="max-w-2xl pb-7 leading-relaxed text-pine-700/85">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={150}>
          <p className="mt-10 text-center text-base text-pine-700/85">
            Something else on your mind?{" "}
            <span className="font-semibold text-pine-900">hello@returntotheriver.com</span> — real
            answers, usually within a day.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

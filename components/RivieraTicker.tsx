"use client";

import { Motion } from "./Motion";

const words = ["Mar", "Fuego", "Sushi", "Grill", "Cocteleria", "Enkai", "Balam", "Naja", "Riviera"];

export function RivieraTicker() {
  return (
    <section aria-label="Atmosfera Riviera" className="overflow-hidden border-y border-riviera-wood/15 bg-riviera-charcoal py-5">
      <Motion.div
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-6 whitespace-nowrap"
      >
        {[...words, ...words, ...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`} className="inline-flex items-center gap-6 font-display text-3xl font-bold text-riviera-warm/72 sm:text-4xl">
            {word}
            <span className="h-px w-8 bg-riviera-wood/70" />
          </span>
        ))}
      </Motion.div>
    </section>
  );
}

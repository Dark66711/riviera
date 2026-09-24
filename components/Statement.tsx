 "use client";

import { Motion } from "./Motion";

export function Statement() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-riviera-charcoal py-24 text-riviera-warm sm:py-32">
      <div className="absolute -left-20 top-8 h-52 w-52 rounded-full border-[30px] border-riviera-wood/12" />
      <div className="absolute bottom-6 right-8 h-28 w-28 rounded-full bg-riviera-coral/16 blur-sm" />
      <Motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="container-x relative"
      >
        <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-riviera-wood">Riviera statement</p>
        <blockquote className="mt-5 max-w-5xl font-display text-5xl font-bold leading-[0.98] sm:text-7xl">
          Del mar al fuego. Despues, Riviera.
        </blockquote>
      </Motion.div>
    </section>
  );
}

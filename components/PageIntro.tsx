"use client";

import { Motion } from "./Motion";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageIntro({ eyebrow, title, text }: PageIntroProps) {
  const words = title.split(" ");

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-32 sm:px-6 lg:px-8 lg:pb-16 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_18%_20%,rgba(177,138,85,0.12),transparent_24rem)]" />
      <div className="editorial-ring drift-side -right-20 top-28 h-56 w-56 border-[24px]" />
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-5xl font-display text-6xl font-bold leading-[0.9] text-riviera-warm sm:text-7xl lg:text-8xl">
          {words.map((word, index) => (
            <span key={`${word}-${index}`} className="mr-4 inline-block overflow-hidden">
              <Motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </Motion.span>
            </span>
          ))}
        </h1>
        <Motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base leading-8 text-secondary sm:text-lg"
        >
          {text}
        </Motion.p>
      </div>
    </section>
  );
}

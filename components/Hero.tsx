 "use client";

import Image from "next/image";
import { useRef } from "react";
import { ButtonLink } from "./ButtonLink";
import { Motion } from "./Motion";
import { useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], reduceMotion ? [0, 0] : [-1.6, 1.6]);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], reduceMotion ? [0, 0] : [1.4, -1.4]);
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.35], reduceMotion ? [0, 0] : [0, -28]);
  const titleWords = ["RIVIERA"];

  return (
    <section id="inicio" className="relative overflow-hidden pt-32 lg:min-h-[860px]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_34%,rgba(177,138,85,0.18),transparent_24rem),radial-gradient(circle_at_18%_18%,rgba(85,183,178,0.12),transparent_22rem)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-riviera-charcoal via-riviera-charcoal/78 to-riviera-charcoal/34" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_40%,rgba(177,138,85,0.18),transparent_22rem),radial-gradient(circle_at_78%_24%,rgba(85,183,178,0.12),transparent_20rem)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-riviera-charcoal to-transparent" />
      </div>

      <Motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="editorial-ring drift-side right-[-5rem] top-32 hidden h-72 w-72 lg:block"
      />
      <div className="float-soft absolute left-[6%] top-44 hidden h-px w-28 bg-riviera-wood/70 lg:block" />
      <div className="float-soft absolute bottom-32 right-[44%] hidden h-16 w-16 rounded-full border border-riviera-wood/20 bg-riviera-charcoal/30 lg:block" />
      <Motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="container-x grid gap-10 pb-16 lg:min-h-[660px] lg:grid-cols-[0.9fr_0.82fr] lg:items-center lg:pb-28"
      >
        <div className="max-w-3xl">
          <div className="mb-7 h-px w-28 bg-gradient-to-r from-riviera-wood via-riviera-coral to-transparent" />
          <Motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="eyebrow mb-5 text-riviera-wood"
          >
            Fish & Grill Torreon
          </Motion.p>
          <h1 className="font-display text-7xl font-bold leading-[0.86] text-riviera-warm drop-shadow-[0_12px_30px_rgba(0,0,0,0.42)] sm:text-8xl lg:text-9xl">
            {titleWords.map((word) => (
              <span key={word} className="inline-block overflow-hidden">
                <Motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </Motion.span>
              </span>
            ))}
          </h1>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-6 max-w-xl font-display text-3xl font-semibold leading-tight text-riviera-warm sm:text-4xl"
          >
            Mar, fuego y sofisticacion.
          </Motion.p>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-5 max-w-2xl text-base leading-8 text-secondary sm:text-lg"
          >
            Seafood, grill, sushi y cocteleria en una experiencia nocturna contemporanea.
          </Motion.p>
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="/menu">Explorar menu</ButtonLink>
            <ButtonLink href="/reservar" variant="secondary">
              Reservar
            </ButtonLink>
          </Motion.div>
        </div>
        <Motion.div
          ref={cardRef}
          initial={{ opacity: 0, scale: 1.05, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          style={{ rotateX, rotateY, y: imageY, transformPerspective: 900 }}
          onMouseMove={(event) => {
            if (reduceMotion || window.innerWidth < 1024) return;
            const rect = event.currentTarget.getBoundingClientRect();
            mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
            mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
          }}
          onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="float-soft absolute -left-5 top-8 h-28 w-28 rounded-full border border-riviera-wood/20 bg-riviera-charcoal/40 sm:h-36 sm:w-36" />
          <div className="drift-side absolute -right-4 bottom-10 h-20 w-20 rounded-full bg-riviera-wood/45 blur-[1px]" />
          <div className="shine relative overflow-hidden rounded-[1.75rem] border border-riviera-wood/20 bg-riviera-mint shadow-soft">
            <Image
              src="/images/riviera-restored/seafood-platter.webp"
              alt="Charola de mariscos Riviera"
              width={760}
              height={960}
              priority
              loading="eager"
              fetchPriority="high"
              className="slow-zoom photo-polish aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 left-5 hidden w-44 overflow-hidden rounded-[1.25rem] border border-riviera-wood/40 bg-riviera-mint shadow-soft sm:block lg:left-[-2rem]">
            <Image
              src="/images/riviera-restored/cocktail.webp"
              alt="Coctel de Riviera"
              width={300}
              height={380}
              className="photo-polish aspect-[4/5] w-full object-cover"
            />
          </div>
        </Motion.div>
      </Motion.div>

      <div className="container-x hidden lg:absolute lg:inset-x-0 lg:bottom-8 lg:block">
        <div className="grid max-w-2xl grid-cols-3 overflow-hidden rounded-[1.5rem] border border-riviera-wood/20 bg-riviera-charcoal/78 shadow-soft backdrop-blur-xl">
          {["Mar", "Fuego", "Sofisticacion"].map((item) => (
            <div key={item} className="border-r border-riviera-wood/15 px-7 py-5 last:border-0">
              <p className="font-display text-3xl font-bold text-riviera-warm">{item}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-riviera-wood/80">Prebeta</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

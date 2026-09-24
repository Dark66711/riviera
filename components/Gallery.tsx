"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { galleryImages } from "@/data/gallery";
import { Motion, reveal } from "./Motion";

type GalleryProps = {
  limit?: number;
  ctaHref?: string;
  ctaLabel?: string;
  hideHeader?: boolean;
};

export function Gallery({ limit, ctaHref, ctaLabel, hideHeader = false }: GalleryProps) {
  const images = typeof limit === "number" ? galleryImages.slice(0, limit) : galleryImages;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : images[activeIndex];
  const move = (direction: -1 | 1) => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + direction + images.length) % images.length;
    });
  };

  return (
    <section id="galeria" className="section-pad bg-riviera-mint/55">
      <div className="container-x">
        {!hideHeader && (
          <div className="max-w-2xl">
            <p className="eyebrow">Galeria</p>
            <h2 className="mt-4 font-display text-5xl font-bold leading-none text-riviera-warm sm:text-6xl">
              Un lugar para disfrutar.
            </h2>
          </div>
        )}

        <div className={`${hideHeader ? "mt-0" : "mt-12"} grid auto-rows-[170px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4`}>
          {images.map((image, index) => (
            <Motion.button
              key={image.src}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
              onClick={() => setActiveIndex(index)}
              className={`focus-ring group relative overflow-hidden rounded-[1.25rem] border border-riviera-wood/15 bg-riviera-charcoal shadow-soft transition duration-500 hover:-translate-y-1 ${image.span}`}
              aria-label={`Abrir imagen: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : undefined}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="photo-polish object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-riviera-charcoal/50 via-transparent to-riviera-charcoal/10 opacity-70 transition duration-500 group-hover:opacity-35" />
              <span className="pointer-events-none absolute left-1/2 top-1/2 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-riviera-wood/45 bg-riviera-charcoal/78 text-xs font-extrabold tracking-[0.2em] text-riviera-warm opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100 lg:grid">
                VER
              </span>
            </Motion.button>
          ))}
        </div>
        {ctaHref && (
          <div className="mt-10 flex justify-center">
            <a className="focus-ring rounded-full border border-riviera-wood/40 bg-riviera-charcoal/35 px-6 py-3 text-sm font-extrabold text-riviera-warm transition hover:border-riviera-wood hover:bg-riviera-wood/10" href={ctaHref}>
              {ctaLabel}
            </a>
          </div>
        )}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-riviera-charcoal/90 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="focus-ring absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-riviera-warm text-riviera-charcoal"
            onClick={() => setActiveIndex(null)}
            aria-label="Cerrar galeria"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            className="focus-ring absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-riviera-warm text-riviera-charcoal"
            onClick={() => move(-1)}
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="focus-ring absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-riviera-warm text-riviera-charcoal"
            onClick={() => move(1)}
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-[1.25rem] border border-riviera-wood/20">
            <Image src={active.src} alt={active.alt} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}

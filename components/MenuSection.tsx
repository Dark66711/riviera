 "use client";

import Image from "next/image";
import { menuItems } from "@/data/menu";
import { ButtonLink } from "./ButtonLink";
import { Motion, reveal } from "./Motion";

type MenuSectionProps = {
  limit?: number;
  ctaHref?: string;
  ctaLabel?: string;
};

export function MenuSection({ limit, ctaHref = "/menu", ctaLabel = "Ver menu completo" }: MenuSectionProps) {
  const items = typeof limit === "number" ? menuItems.slice(0, limit) : menuItems;

  return (
    <section id="menu" className="section-pad bg-riviera-charcoal">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Menu Riviera</p>
            <h2 className="mt-4 font-display text-5xl font-bold leading-none text-riviera-warm sm:text-6xl">
              Mar, grill y cocteleria.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-riviera-warm/62">
            Productos demo basados en fotografias proporcionadas. Sin precios inventados hasta validar el menu oficial.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Motion.article
              key={item.name}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            className="group overflow-hidden rounded-[1.25rem] border border-riviera-wood/15 bg-riviera-mint shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-1 hover:border-riviera-wood/35 hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="photo-polish object-cover transition duration-500 group-hover:scale-105"
                />
                {item.demo && (
                  <span className="absolute left-4 top-4 rounded-full border border-riviera-wood/25 bg-riviera-charcoal/82 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-riviera-warm backdrop-blur">
                    Prebeta
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl font-bold text-riviera-warm">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-riviera-warm/65">{item.description}</p>
                <p className="mt-5 inline-flex rounded-full border border-riviera-wood/20 bg-riviera-charcoal px-3 py-1 text-sm font-extrabold text-riviera-wood">
                  Consultar menu
                </p>
              </div>
            </Motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink href={ctaHref} variant="secondary">
            {ctaLabel}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

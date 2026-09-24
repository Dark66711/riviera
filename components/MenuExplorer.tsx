"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { menuItems } from "@/data/menu";
import { Motion } from "./Motion";

const categories = ["TODOS", "MAR", "GRILL", "SUSHI", "DRINKS", "FISH"];

const itemCategory = (name: string) => menuItems.find((item) => item.name === name)?.category ?? "MAR";

export function MenuExplorer() {
  const [category, setCategory] = useState("Todos");
  const items = useMemo(
    () => menuItems.filter((item) => category === "TODOS" || item.category === category),
    [category]
  );

  return (
    <section className="section-pad bg-riviera-charcoal">
      <div className="container-x">
        <div className="flex gap-2 overflow-x-auto pb-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`focus-ring shrink-0 rounded-full border px-5 py-3 text-sm font-extrabold transition ${
                category === item
                  ? "border-riviera-wood bg-riviera-wood text-riviera-charcoal shadow-lift"
                  : "border-riviera-wood/20 bg-riviera-mint text-riviera-warm hover:bg-riviera-graphite"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {items.map((item, index) => (
            <Motion.article
              key={item.name}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group grid overflow-hidden rounded-[1.25rem] border border-riviera-wood/15 bg-riviera-mint shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition duration-500 hover:-translate-y-1 hover:border-riviera-wood/35 hover:shadow-soft sm:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative min-h-[250px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="photo-polish object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-between p-7">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-riviera-wood">{itemCategory(item.name)}</p>
                  <h2 className="mt-3 font-display text-4xl font-bold text-riviera-warm">{item.name}</h2>
                  <p className="mt-4 text-sm leading-7 text-riviera-warm/68">{item.description}</p>
                </div>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-riviera-warm/45">Precio pendiente de menu oficial</p>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

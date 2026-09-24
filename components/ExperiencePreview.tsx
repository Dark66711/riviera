import Image from "next/image";
import { experiences } from "@/data/experiences";
import { ButtonLink } from "./ButtonLink";

export function ExperiencePreview() {
  return (
    <section className="section-pad bg-riviera-charcoal">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Experiencias</p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-none text-riviera-warm sm:text-6xl">
              Tres formas de vivir Riviera.
            </h2>
          </div>
          <ButtonLink href="/experiencias">Descubrir</ButtonLink>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {experiences.map((experience) => {
            const accent =
              experience.tone === "ambar"
                ? "border-riviera-coral/28 from-riviera-coral/28"
                : experience.tone === "oro"
                  ? "border-riviera-wood/30 from-riviera-wood/24"
                  : "border-riviera-turquoise/24 from-riviera-turquoise/18";

            return (
            <article key={experience.name} className={`group relative min-h-[360px] overflow-hidden rounded-[1.25rem] border bg-riviera-mint shadow-soft ${accent}`}>
              <Image src={experience.image} alt={experience.name} fill sizes="(min-width:1024px) 33vw, 100vw" className="photo-polish object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-riviera-charcoal via-riviera-charcoal/52 to-transparent" />
              <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${accent} to-transparent opacity-70`} />
              <div className="absolute inset-x-0 bottom-0 p-7 text-riviera-warm">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-riviera-wood">{experience.subtitle}</p>
                <h3 className="mt-3 font-display text-5xl font-bold">{experience.name}</h3>
                <p className="mt-3 text-sm leading-6 text-riviera-warm/70">{experience.description}</p>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

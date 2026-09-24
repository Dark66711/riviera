import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { experiences } from "@/data/experiences";

export const metadata = {
  title: "Experiencias Riviera | ENKAI, BALAM, NAJA",
  description: "Tres experiencias de Riviera Fish & Grill: Enkai, Balam y Naja."
};

export default function ExperienciasPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Experiencias"
        title="Tres experiencias. Un solo Riviera."
        text="Enkai, Balam y Naja convierten el restaurante en un recorrido de fuego, oro y agua."
      />
      <section className="section-pad bg-riviera-charcoal">
        <div className="container-x space-y-8">
          {experiences.map((experience, index) => {
            const toneClass =
              experience.tone === "ambar"
                ? "border-riviera-coral/30"
                : experience.tone === "oro"
                  ? "border-riviera-wood/30"
                  : "border-riviera-turquoise/24";

            return (
            <article key={experience.name} className={`group grid overflow-hidden rounded-[1.25rem] border bg-riviera-mint shadow-soft lg:grid-cols-[0.95fr_1.05fr] ${toneClass}`}>
              <div className={`relative min-h-[300px] overflow-hidden ${index % 2 ? "lg:order-2" : ""}`}>
                <Image
                  src={experience.image}
                  alt={experience.name}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : undefined}
                  sizes="(min-width:1024px) 50vw, 100vw"
                  className="photo-polish object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-riviera-charcoal/55 to-transparent" />
              </div>
              <div className="relative flex flex-col justify-center p-8 text-riviera-warm sm:p-12">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-riviera-wood">{experience.subtitle}</p>
                <h2 className="mt-4 font-display text-6xl font-bold leading-none">{experience.name}</h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-riviera-warm/68">{experience.description}</p>
                <span className={`mt-8 h-px w-24 ${experience.tone === "ambar" ? "bg-riviera-coral" : experience.tone === "oro" ? "bg-riviera-wood" : "bg-riviera-turquoise"}`} />
              </div>
            </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

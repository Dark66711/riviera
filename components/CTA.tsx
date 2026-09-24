import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-riviera-charcoal py-16 sm:py-20">
      <div className="container-x">
        <div className="relative grid overflow-hidden rounded-[1.5rem] border border-riviera-wood/20 bg-riviera-mint text-riviera-warm shadow-soft lg:grid-cols-[1fr_0.82fr]">
          <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full border-[26px] border-riviera-wood/12" />
          <div className="float-soft absolute bottom-8 left-[45%] h-14 w-14 rounded-full bg-riviera-coral/22" />
          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-riviera-wood">Reserva o visita</p>
            <h2 className="mt-4 max-w-2xl font-display text-5xl font-bold leading-none sm:text-6xl">
              Haz que Riviera viva tambien en web.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-secondary">
              Esta demo esta lista para presentar una direccion visual clara y convertirla en un sitio final con datos verificados.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/ubicacion" variant="light">
                Como llegar
              </ButtonLink>
              <ButtonLink href="/menu" variant="secondary">
                Ver menu
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[280px]">
            <Image
              src="/images/riviera-restored/sushi-plate.webp"
              alt="Toast servido sobre tabla de madera"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="photo-polish slow-zoom object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

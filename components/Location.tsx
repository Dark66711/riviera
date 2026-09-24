 "use client";

import { Clock, MapPin, Phone } from "lucide-react";
import { business } from "@/data/business";
import { ButtonLink } from "./ButtonLink";
import { Motion, reveal } from "./Motion";

type LocationProps = {
  compact?: boolean;
};

export function Location({ compact = false }: LocationProps) {
  return (
    <section id="ubicacion" className="section-pad relative overflow-hidden bg-riviera-mint/55">
      <div className="editorial-ring drift-side -right-20 top-24 h-56 w-56 border-[26px]" />
      <div className="container-x grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
        <Motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-[1.5rem] border border-riviera-wood/15 bg-riviera-charcoal p-7 text-riviera-warm shadow-soft sm:p-10"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-riviera-wood">Visitanos</p>
          <h2 className="mt-4 font-display text-5xl font-bold leading-none sm:text-6xl">
            {compact ? "Encuentra Riviera en Torreon." : "Visitanos."}
          </h2>

          <div className="mt-9 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-riviera-wood" />
              <div>
                <p className="font-extrabold">Direccion</p>
                <p className="mt-1 text-sm leading-7 text-secondary">{business.address}</p>
                <p className="mt-2 text-xs text-riviera-warm/52">{business.addressStatus}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-riviera-wood" />
              <div>
                <p className="font-extrabold">Horarios</p>
                {business.hours.map((hour) => (
                  <p key={hour} className="mt-1 text-sm leading-6 text-secondary">
                    {hour}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-riviera-wood" />
              <div>
                <p className="font-extrabold">Telefono</p>
                <p className="mt-1 text-sm leading-6 text-secondary">{business.phone}</p>
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={business.mapsUrl} variant="light" external>
              Como llegar
            </ButtonLink>
            <ButtonLink href={business.phoneHref} variant="secondary">
              Llamar
            </ButtonLink>
          </div>
          {compact && (
            <div className="mt-5">
              <ButtonLink href="/ubicacion" variant="secondary">
                Ver ubicacion
              </ButtonLink>
            </div>
          )}
        </Motion.div>

        <div className="min-h-[420px] overflow-hidden rounded-[1.5rem] border border-riviera-wood/15 shadow-soft">
          <iframe
            title="Mapa de Riviera Fish and Grill Torreon"
            src={business.mapEmbed}
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { CalendarDays, UsersRound } from "lucide-react";

export function ReservationDemo() {
  const [sent, setSent] = useState(false);

  return (
    <section className="section-pad bg-riviera-mint/55">
      <div className="container-x grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="rounded-[1.5rem] border border-riviera-wood/15 bg-riviera-charcoal p-8 text-riviera-warm shadow-soft">
          <CalendarDays className="h-7 w-7 text-riviera-wood" />
          <h2 className="mt-5 font-display text-5xl font-bold leading-none">Reservacion demo.</h2>
          <p className="mt-5 text-sm leading-7 text-secondary">
            Esta interfaz muestra como podria funcionar una solicitud de mesa. Aun no envia datos ni crea reservas reales.
          </p>
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-riviera-wood/15 bg-riviera-mint p-4 text-sm">
            <UsersRound className="h-5 w-5 text-riviera-wood" />
            Funcionalidad conceptual para venta.
          </div>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
          className="rounded-[1.5rem] border border-riviera-wood/18 bg-riviera-charcoal p-6 text-riviera-warm shadow-soft sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {["Nombre", "Telefono", "Personas", "Fecha", "Hora"].map((label) => (
              <label key={label} className={label === "Nombre" ? "sm:col-span-2" : ""}>
                <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-riviera-wood">{label}</span>
                <input
                  className="focus-ring mt-2 h-12 w-full rounded-2xl border border-riviera-wood/20 bg-riviera-mint px-4 text-sm text-riviera-warm outline-none"
                  type={label === "Fecha" ? "date" : label === "Hora" ? "time" : label === "Personas" ? "number" : "text"}
                  min={label === "Personas" ? 1 : undefined}
                />
              </label>
            ))}
            <label className="sm:col-span-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-riviera-wood">Area / experiencia</span>
              <select className="focus-ring mt-2 h-12 w-full rounded-2xl border border-riviera-wood/20 bg-riviera-mint px-4 text-sm text-riviera-warm outline-none">
                <option>Riviera</option>
                <option>Enkai</option>
                <option>Balam</option>
                <option>Naja</option>
              </select>
            </label>
          </div>
          <button className="focus-ring mt-6 inline-flex min-h-12 rounded-full bg-riviera-turquoise px-6 text-sm font-extrabold text-riviera-charcoal shadow-lift transition hover:bg-riviera-warm">
            Solicitar reservacion
          </button>
          {sent && (
            <p className="mt-5 rounded-2xl border border-riviera-wood/20 bg-riviera-mint p-4 text-sm font-bold text-riviera-warm">
              Esta funcion estara disponible en la version final. Aqui podria conectarse WhatsApp, correo o un sistema real de reservas.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

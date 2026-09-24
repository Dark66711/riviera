import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin } from "lucide-react";
import { business } from "@/data/business";

const links = [
  ["Inicio", "/"],
  ["Menu", "/menu"],
  ["Experiencias", "/experiencias"],
  ["Galeria", "/galeria"],
  ["Riviera", "/riviera"],
  ["Ubicacion", "/ubicacion"],
  ["Reservar", "/reservar"]
];

export function Footer() {
  return (
    <footer className="border-t border-riviera-wood/10 bg-riviera-charcoal py-12 text-riviera-warm">
      <div className="container-x grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/riviera-logo.webp"
            alt="Logo Riviera Fish and Grill"
            width={170}
            height={110}
            className="h-20 w-36 rounded-xl border border-riviera-wood/15 object-cover"
          />
          <p className="mt-5 max-w-sm text-sm leading-7 text-riviera-warm/65">{business.description}</p>
        </div>
        <div>
          <h3 className="font-extrabold">Navegacion</h3>
          <div className="mt-4 grid gap-3 text-sm text-riviera-warm/68">
            {links.map(([label, href]) => (
              <Link key={href} href={href} className="transition hover:text-riviera-warm">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-extrabold">Contacto</h3>
          <div className="mt-4 space-y-3 text-sm leading-7 text-riviera-warm/68">
            <p>{business.address}</p>
            <p>{business.phone}</p>
            <div className="flex gap-3 pt-2">
              <a className="focus-ring rounded-full p-2 transition hover:bg-riviera-wood/10" href={business.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a className="focus-ring rounded-full p-2 transition hover:bg-riviera-wood/10" href={business.mapsUrl} target="_blank" rel="noreferrer" aria-label="Google Maps">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-x mt-10 border-t border-riviera-wood/12 pt-6 text-xs text-riviera-warm/45">
        <p>
          © {new Date().getFullYear()} Riviera Fish & Grill. Concepto demostrativo. Algunas funciones pueden ser conceptuales. Propuesta visual desarrollada por{" "}
          <a className="underline underline-offset-4 transition hover:text-riviera-warm" href="https://jtcodex.vercel.app" target="_blank" rel="noreferrer">
            JTCodex
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

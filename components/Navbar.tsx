"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { business } from "@/data/business";
import { ButtonLink } from "./ButtonLink";
import { Motion } from "./Motion";

const links = [
  ["Inicio", "/"],
  ["Menu", "/menu"],
  ["Experiencias", "/experiencias"],
  ["Galeria", "/galeria"],
  ["Riviera", "/riviera"],
  ["Ubicacion", "/ubicacion"]
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = "";
    const timer = window.setTimeout(() => setOpen(false), 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-riviera-wood/15 bg-riviera-charcoal/86 shadow-[0_14px_38px_rgba(0,0,0,0.34)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-24 items-center justify-between">
        <Link className="focus-ring flex items-center gap-3 rounded-2xl p-1 transition duration-300 hover:scale-[1.018]" href="/" aria-label="Riviera inicio">
          <Image src="/brand/riviera-logo.webp" alt="Logo Riviera" width={156} height={96} priority className="h-16 w-28 rounded-2xl border border-riviera-wood/20 object-cover shadow-soft sm:w-32" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="focus-ring group relative rounded-full text-sm font-bold text-riviera-warm">
              <span className="bg-gradient-to-r from-riviera-wood to-riviera-coral bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-all duration-300 group-hover:bg-[length:100%_2px]">
                {label}
              </span>
              {pathname === href && <span className="absolute -bottom-3 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-riviera-wood" />}
            </Link>
          ))}
          <ButtonLink href="/reservar">Reservar</ButtonLink>
        </div>

        <button
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-riviera-wood/30 bg-riviera-charcoal/80 text-riviera-warm lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 top-24 z-40 bg-riviera-charcoal lg:hidden">
          <div className="container-x flex h-[calc(100dvh-6rem)] flex-col justify-between py-8">
            <div className="space-y-1">
              {links.map(([label, href], index) => (
                <Motion.div key={href} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.055 }}>
                  <Link href={href} className="focus-ring block rounded-3xl px-2 py-3 font-display text-5xl font-bold leading-none text-riviera-warm">
                    {label}
                  </Link>
                </Motion.div>
              ))}
              <div className="pt-5">
                <ButtonLink href="/reservar">Reservar</ButtonLink>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-riviera-wood/25 pt-5 text-riviera-warm">
              <a className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold" href={business.instagram} target="_blank" rel="noreferrer">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a className="focus-ring inline-flex items-center gap-2 rounded-full text-sm font-bold" href={business.mapsUrl} target="_blank" rel="noreferrer">
                <MapPin className="h-4 w-4" /> Como llegar
              </a>
            </div>
          </div>
        </Motion.div>
      )}

      <div className="h-0.5 bg-transparent">
        <div className="h-full bg-riviera-wood transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState, type MouseEvent, type ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false
}: ButtonLinkProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const base =
    "focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-extrabold tracking-[0.02em] transition duration-300";
  const variants = {
    primary:
      "bg-riviera-turquoise text-riviera-charcoal shadow-lift hover:-translate-y-0.5 hover:bg-riviera-warm",
    secondary:
      "border border-riviera-wood/40 bg-riviera-charcoal/35 text-riviera-warm hover:-translate-y-0.5 hover:border-riviera-wood hover:bg-riviera-wood/10",
    light:
      "bg-riviera-warm text-riviera-charcoal shadow-soft hover:-translate-y-0.5 hover:bg-white"
  };
  const magnetic = {
    style: { transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` },
    onMouseMove: (event: MouseEvent<HTMLAnchorElement>) => {
      if (window.matchMedia("(max-width: 1023px), (prefers-reduced-motion: reduce)").matches) return;
      const rect = event.currentTarget.getBoundingClientRect();
      setOffset({
        x: ((event.clientX - rect.left) / rect.width - 0.5) * 10,
        y: ((event.clientY - rect.top) / rect.height - 0.5) * 8
      });
    },
    onMouseLeave: () => setOffset({ x: 0, y: 0 })
  };
  const content = (
    <>
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (external) {
    return (
      <a {...magnetic} className={`${base} ${variants[variant]}`} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link {...magnetic} className={`${base} ${variants[variant]}`} href={href}>
      {content}
    </Link>
  );
}

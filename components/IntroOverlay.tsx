"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Motion } from "./Motion";

export function IntroOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("riviera-intro-seen");
    if (!seen && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const start = window.setTimeout(() => setShow(true), 0);
      sessionStorage.setItem("riviera-intro-seen", "true");
      const timer = window.setTimeout(() => setShow(false), 2450);
      return () => {
        window.clearTimeout(start);
        window.clearTimeout(timer);
      };
    }
  }, []);

  if (!show) return null;

  return (
    <Motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[120] grid place-items-center overflow-hidden bg-riviera-charcoal"
    >
      <Motion.div className="absolute h-40 w-40 rounded-full bg-riviera-wood/18 blur-sm" initial={{ x: -180, y: 120 }} animate={{ x: -130, y: 70 }} transition={{ duration: 2.1, ease: "easeOut" }} />
      <Motion.div className="absolute h-24 w-24 rounded-full bg-riviera-wood/55" initial={{ x: 160, y: -140 }} animate={{ x: 110, y: -95 }} transition={{ duration: 2.1, ease: "easeOut" }} />
      <Motion.div
        initial={{ opacity: 0, scale: 0.88, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10"
      >
        <Image src="/brand/riviera-logo.webp" alt="Riviera Fish and Grill" width={260} height={180} priority className="h-40 w-60 rounded-[1rem] border border-riviera-wood/20 object-cover shadow-soft" />
      </Motion.div>
      <Motion.div
        className="absolute inset-0 bg-riviera-wood"
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "-100%"] }}
        transition={{ duration: 1.05, delay: 1.35, times: [0, 0.48, 1], ease: "easeInOut" }}
      />
    </Motion.div>
  );
}

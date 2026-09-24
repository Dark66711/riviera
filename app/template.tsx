"use client";

import { usePathname } from "next/navigation";
import { Motion } from "@/components/Motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <Motion.div
      key={pathname}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <Motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[90] bg-riviera-wood"
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      />
      {children}
    </Motion.div>
  );
}

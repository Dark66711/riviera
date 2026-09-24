import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { PageIntro } from "@/components/PageIntro";
import { Statement } from "@/components/Statement";
import { business } from "@/data/business";

export const metadata = {
  title: "Riviera Fish & Grill | Mar, fuego y sofisticacion",
  description: "Concepto editorial de Riviera Fish & Grill en Torreon."
};

export default function RivieraPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Riviera Fish & Grill"
        title="Mar, fuego y sofisticacion."
        text="Una propuesta editorial para presentar el concepto gastronomico de Riviera: seafood contemporaneo, grill, sushi, cocteleria y noche."
      />
      <section className="pb-20">
        <div className="container-x grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[1.25rem] border border-riviera-wood/15 shadow-soft">
            <Image src="/images/riviera-restored/interior-lounge.webp" alt="Interior de Riviera Fish and Grill" fill priority sizes="(min-width:1024px) 60vw, 100vw" className="photo-polish object-cover" />
          </div>
          <div className="grid gap-6">
            <div className="relative min-h-[190px] overflow-hidden rounded-[1.25rem] border border-riviera-wood/20 shadow-soft">
              <Image src="/images/riviera-restored/cocktail.webp" alt="Cocteleria Riviera" fill priority sizes="(min-width:1024px) 40vw, 100vw" className="photo-polish object-cover" />
            </div>
            <div className="rounded-[1.25rem] border border-riviera-wood/20 bg-riviera-mint p-8 text-riviera-warm shadow-soft">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-riviera-wood">Concepto</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-none">
                Una prebeta para vender experiencia, atmosfera y deseo de reserva.
              </h2>
              <p className="mt-5 text-sm leading-7 text-riviera-warm/65">{business.recognition}</p>
              <div className="mt-6">
                <ButtonLink href="/experiencias">Ver experiencias</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Statement />
    </main>
  );
}

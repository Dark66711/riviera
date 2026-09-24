import { CuisineSection } from "@/components/CuisineSection";
import { ExperiencePreview } from "@/components/ExperiencePreview";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { MenuSection } from "@/components/MenuSection";
import { RivieraTicker } from "@/components/RivieraTicker";
import { Statement } from "@/components/Statement";

export default function Home() {
  return (
    <main>
      <Hero />
      <RivieraTicker />
      <CuisineSection />
      <ExperiencePreview />
      <MenuSection limit={3} ctaHref="/menu" ctaLabel="Descubrir menu" />
      <Gallery limit={4} ctaHref="/galeria" ctaLabel="Ver galeria" />
      <Statement />
      <Location compact />
    </main>
  );
}

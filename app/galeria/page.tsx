import { Gallery } from "@/components/Gallery";
import { PageIntro } from "@/components/PageIntro";

export const metadata = {
  title: "Galeria Riviera | Mar, fuego y noche",
  description: "Galeria visual demo para Riviera: comida, cocteleria, interiores y experiencias."
};

export default function GaleriaPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Galeria"
        title="Un lugar para disfrutar."
        text="Composicion visual para mostrar seafood, sushi, grill, cocteleria, interiores y experiencias con una galeria elegante."
      />
      <Gallery hideHeader />
    </main>
  );
}

import { Location } from "@/components/Location";
import { PageIntro } from "@/components/PageIntro";

export const metadata = {
  title: "Ubicacion Riviera Fish & Grill | Torreon",
  description: "Ubicacion y contacto demo de Riviera Fish & Grill en Torreon, Coahuila."
};

export default function UbicacionPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Ubicacion y contacto"
        title="Visitanos en Torreon."
        text="Mapa, acceso rapido a como llegar y datos editables para completar telefono, horarios y redes cuando esten verificados."
      />
      <Location />
    </main>
  );
}

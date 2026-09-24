import { PageIntro } from "@/components/PageIntro";
import { ReservationDemo } from "@/components/ReservationDemo";

export const metadata = {
  title: "Reservar | Riviera Fish & Grill",
  description: "Interfaz demostrativa de reservacion para Riviera Fish & Grill."
};

export default function ReservarPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Reservar"
        title="Solicita tu mesa."
        text="Una interfaz visual de demostracion para mostrar como podria verse el flujo de reservaciones sin implementar backend todavia."
      />
      <ReservationDemo />
    </main>
  );
}

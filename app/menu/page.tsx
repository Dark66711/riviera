import { MenuExplorer } from "@/components/MenuExplorer";
import { PageIntro } from "@/components/PageIntro";

export const metadata = {
  title: "Menu Riviera Fish & Grill",
  description: "Menu demo de Riviera Fish & Grill: mar, grill, sushi y cocteleria."
};

export default function MenuPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Menu Riviera"
        title="Nuestro menu."
        text="Una muestra editorial de mariscos, sushi, grill y cocteleria. Sin precios inventados hasta validar el menu real."
      />
      <MenuExplorer />
    </main>
  );
}

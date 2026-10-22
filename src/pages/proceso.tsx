import { useEffect } from "react";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

export default function Proceso() {
  useEffect(() => {
    const description = "Conocé nuestro proceso de diseño web: creamos tu página sin anticipo, con etapas claras, revisiones y tu aprobación antes de la entrega. Sin sorpresas, con Ferro Studio.";
    const descriptionElement = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionElement?.getAttribute("content");

    document.title = "Creación de Diseño Web sin Anticipo";
    descriptionElement?.setAttribute("content", description);

    return () => {
      document.title = "Ferro Studio | Diseño y Desarrollo de Páginas Web Profesionales";

      if (previousDescription) {
        descriptionElement?.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return (
    <>
      <ProcessSection />
      <CTASection />
    </>
  );
}

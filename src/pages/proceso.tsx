import { useEffect } from "react";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

export default function Proceso() {
  useEffect(() => {
    const description = "Kick-off, diseño, staging y entrega. Así trabajamos en Ferro Studio: sin anticipo, sin sorpresas, con su aprobación en cada paso.";
    const descriptionElement = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionElement?.getAttribute("content");

    document.title = "Cómo Trabajamos: Nuestro Proceso | Ferro Studio";
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

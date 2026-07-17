import { useEffect } from "react";
import PricingSection from "@/components/sections/PricingSection";

export default function Planes() {
  useEffect(() => {
    const description = "hosting, SSL, backups y soporte 24/7. Sumá cambios mensuales y atención prioritaria. Elegí tu plan y olvidate del resto.";
    const descriptionElement = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionElement?.getAttribute("content");

    document.title = "Mantenimiento Web cuatrimestral | Planes de Suscripción - Ferro Studio";
    descriptionElement?.setAttribute("content", description);

    return () => {
      document.title = "Ferro Studio | Diseño y Desarrollo de Páginas Web Profesionales";

      if (previousDescription) {
        descriptionElement?.setAttribute("content", previousDescription);
      }
    };
  }, []);

  return <PricingSection />;
}

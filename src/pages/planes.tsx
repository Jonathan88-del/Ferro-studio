import { useEffect } from "react";
import PricingSection from "@/components/sections/PricingSection";

export default function Planes() {
  useEffect(() => {
    const description = "Tu web necesita más que diseño: necesita mantenimiento. Conocé los planes de Ferro Studio con hosting, SSL, copias de seguridad y soporte para seguir creciendo.";
    const descriptionElement = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionElement?.getAttribute("content");

    document.title = "Mantenimiento Web para tu Negocio | Ferro Studio";
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

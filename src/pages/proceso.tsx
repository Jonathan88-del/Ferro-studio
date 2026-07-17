import { useEffect } from "react";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

export default function Proceso() {
  useEffect(() => {
    document.title = "Cómo Trabajamos: Nuestro Proceso | Ferro Studio";

    return () => {
      document.title = "Ferro Studio | Diseño y Desarrollo de Páginas Web Profesionales";
    };
  }, []);

  return (
    <>
      <ProcessSection />
      <CTASection />
    </>
  );
}

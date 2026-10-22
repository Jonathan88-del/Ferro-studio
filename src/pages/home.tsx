import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import WhyFerroSection from "@/components/sections/WhyFerroSection";
import CTASection from "@/components/sections/CTASection";

const DEFAULT_TITLE = "Ferro Studio | Diseño y Desarrollo de Páginas Web Profesionales";
const DEFAULT_DESCRIPTION =
  "Diseñamos páginas web rápidas, modernas y optimizadas para Google, pensadas para atraer clientes, generar confianza y hacer crecer tu negocio.";

export default function Home() {
  useEffect(() => {
    document.title = "Creación y diseño de páginas web";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Los mejores en todo Buenos Aires."
    );
    return () => {
      document.title = DEFAULT_TITLE;
      document.querySelector('meta[name="description"]')?.setAttribute(
        "content",
        DEFAULT_DESCRIPTION
      );
    };
  }, []);

  return (
    <>
      <Hero />
      <WhyFerroSection />
      <CTASection />
    </>
  );
}

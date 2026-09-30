import { useEffect } from "react";
import { motion } from "framer-motion";
import Services from "@/components/sections/Services";
import IndustrySection from "@/components/sections/IndustrySection";
import CTASection from "@/components/sections/CTASection";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Servicios() {
  useEffect(() => {
    document.title = "Landing Pages y Sitios Institucionales | Ferro Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Landing pages, sitios institucionales y rediseño web con diseño a medida para profesionales y PyMEs en Buenos Aires"
    );

    return () => {
      document.title = "Ferro Studio | Diseño y Desarrollo de Páginas Web Profesionales";
      document.querySelector('meta[name="description"]')?.setAttribute(
        "content",
        "Diseñamos páginas web rápidas, modernas y optimizadas para Google, pensadas para atraer clientes, generar confianza y hacer crecer tu negocio."
      );
    };
  }, []);

  return (
    <>
      {/* Page header */}
      <section className="relative bg-[#0E0E0E] pt-2 pb-0 md:pt-4 md:pb-0 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(245,242,236,0.03) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="container-ferro relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
          </motion.div>
        </div>
      </section>
      <Services />
      <IndustrySection />
      <CTASection />
    </>
  );
}

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
      <section className="relative bg-[#0E0E0E] pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
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
            <div className="flex items-center gap-3 mb-8">
              <span className="w-5 h-px bg-[#C9A84C]/70" />
              <span className="tracking-[0.26em] uppercase font-sans text-[#C9A84C]/80 text-[20px]">
                Lo que hacemos
              </span>
            </div>
            <h1 className="font-serif font-light text-[54px] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-2xl">
              Servicios diseñados para hacer crecer tu negocio.
            </h1>
          </motion.div>
        </div>
      </section>
      <Services />
      <IndustrySection />
      <CTASection />
    </>
  );
}

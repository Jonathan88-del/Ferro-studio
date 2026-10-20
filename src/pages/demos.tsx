import { useEffect } from "react";
import { motion } from "framer-motion";

const DEMOS = [
  {
    title: "Landing Page",
    description: "Una página enfocada en un solo objetivo: que el visitante pida presupuesto.",
    url: "https://landing-page-rho-nine-83.vercel.app/",
    previewTitle: "Demo de landing page para contadores",
  },
  {
    title: "Sitio Institucional",
    description: "Varias páginas que presentan la empresa, sus servicios y su trayectoria.",
    url: "https://pagina-web-muestra.vercel.app/",
    previewTitle: "Demo de sitio institucional",
  },
];

export default function Demos() {
  useEffect(() => {
    document.title = "Demos | Ferro Studio";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Explorá ejemplos de landing page y sitios institucionales de Ferro Studio."
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
    <section className="relative min-h-[70vh] overflow-hidden bg-[#0E0E0E] pb-16 pt-32 md:pb-24 md:pt-36" aria-labelledby="demos-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(245,242,236,0.03) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="container-ferro relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-10"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-5 bg-[#C9A84C]/70" />
            <span className="font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">
              Muestras de proyectos
            </span>
          </div>
          <h1 id="demos-heading" className="font-serif text-[42px] font-light leading-[1.05] tracking-[-0.015em] text-[#F5F2EC] md:text-[50px]">
            Demos
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {DEMOS.map((demo, index) => (
            <motion.article
              key={demo.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-xl border border-[#F5F2EC]/10 bg-[#111111] transition-colors duration-300 hover:border-[#C9A84C]/40"
            >
              <div className="flex items-center gap-3 border-b border-[#F5F2EC]/10 bg-[#1A1A1A] px-4 py-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EC]/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EC]/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EC]/20" />
                </div>
                <div className="min-w-0 flex-1 truncate rounded-md bg-[#0E0E0E] px-3 py-1 font-sans text-[11px] text-[#F5F2EC]/40">
                  {new URL(demo.url).host}
                </div>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F5F2EC]">
                <iframe
                  src={demo.url}
                  title={demo.previewTitle}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  sandbox="allow-scripts allow-forms allow-same-origin"
                  className="h-full w-full"
                />
              </div>
              <div className="flex flex-1 items-center justify-between gap-6 p-6 md:p-7">
                <div>
                  <p className="mb-1 font-sans text-[11px] uppercase tracking-[0.2em] text-[#C9A84C]/75">Demo {index + 1}</p>
                  <h2 className="font-serif text-[24px] font-light text-[#F5F2EC]">{demo.title}</h2>
                  <p className="mt-2 font-sans text-[14px] font-light leading-relaxed text-[#F5F2EC]/50">{demo.description}</p>
                </div>
                <a
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-lg border border-[#C9A84C]/40 px-4 py-2.5 font-sans text-[13px] text-[#C9A84C] no-underline transition-colors hover:bg-[#C9A84C]/10"
                >
                  Ver demo ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

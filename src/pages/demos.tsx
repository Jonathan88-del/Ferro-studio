import { useEffect } from "react";
import { motion } from "framer-motion";

const DEMOS = [
  {
    title: "Landing Page",
    url: "https://plantilla-para-contadores-landing-p.vercel.app/",
    previewTitle: "Demo de landing page para contadores",
  },
  {
    title: "Sitio Institucional",
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
              className="overflow-hidden border border-[#F5F2EC]/10 bg-[#111111]"
            >
              <div className="flex items-center justify-between gap-4 border-b border-[#F5F2EC]/10 px-4 py-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#C9A84C]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EC]/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EC]/25" />
                </div>
                <h2 className="font-serif text-[18px] font-light text-[#F5F2EC]">{demo.title}</h2>
                <a
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-sans text-[12px] text-[#C9A84C] transition-colors hover:text-[#F5F2EC]"
                >
                  Ver demo ↗
                </a>
              </div>
              <iframe
                src={demo.url}
                title={demo.previewTitle}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                sandbox="allow-scripts allow-forms allow-same-origin"
                className="h-[420px] w-full bg-[#F5F2EC] md:h-[560px]"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

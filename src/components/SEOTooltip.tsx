import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const SEO_FEATURES = [
  { simple: "Títulos claros en cada página", technical: "Title optimizados" },
  { simple: "Descripciones en buscadores", technical: "Meta descripciones" },
  { simple: "URLs cortas y limpias", technical: "URLs amigables" },
  { simple: "Estructura ordenada del contenido", technical: "Encabezados H1-H3" },
  { simple: "Mapa del sitio para Google", technical: "Sitemap XML" },
  { simple: "Indicaciones para robots de búsqueda", technical: "robots.txt" },
  { simple: "Candadito de seguridad en el navegador 🔒", technical: "HTTPS (SSL)" },
  { simple: "Funciona perfecto en celular", technical: "Diseño responsive" },
  { simple: "Carga súper rápido", technical: "Optimización de rendimiento" },
  { simple: "Imágenes claras y accesibles", technical: "Atributo alt en imágenes" },
  { simple: "Conectado con Google", technical: "Google Search Console" },
  { simple: "Palabras clave en tu contenido", technical: "Estructura de palabras clave" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SEOTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <motion.button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        whileHover={{ color: "#C9A84C" }}
        transition={{ duration: 0.2 }}
        className="text-[0.92rem] text-[#F5F2EC]/35 font-sans font-light leading-[1.6] hover:text-[#C9A84C] transition-colors text-left cursor-help"
      >
        SEO básico
      </motion.button>

      {/* Tooltip */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: -20, y: 0 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, x: -20, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 z-50 w-96 bg-[#0E0E0E] border border-[#F5F2EC]/[0.1] p-6 pointer-events-auto shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-h-[600px] overflow-y-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
            className="mb-6 sticky top-0 bg-[#0E0E0E] pb-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-[#C9A84C]/70" />
              <span className="tracking-[0.26em] uppercase font-sans text-[#C9A84C]/80 text-[13px]">
                Qué incluye
              </span>
            </div>
            <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC] mb-2">
              SEO Básico
            </h3>
            <p className="text-[#F5F2EC]/40 font-sans font-light text-[0.9rem] leading-relaxed">
              Preparamos tu sitio para que Google lo encuentre y entienda fácilmente.
            </p>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.2 }}
            className="space-y-4"
          >
            {SEO_FEATURES.map((feature, index) => (
              <motion.div
                key={feature.simple}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.35,
                  ease: EASE,
                  delay: 0.25 + index * 0.04,
                }}
                className="flex items-start gap-3 group"
              >
                <Check
                  size={14}
                  strokeWidth={2.5}
                  className="shrink-0 mt-1.5 text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors"
                />
                <div className="flex flex-col gap-1 flex-1">
                  <span className="text-[0.9rem] text-[#F5F2EC]/55 font-sans font-light leading-relaxed group-hover:text-[#F5F2EC]/75 transition-colors">
                    {feature.simple}
                  </span>
                  <span className="text-[0.8rem] text-[#F5F2EC]/30 font-sans italic">
                    ({feature.technical})
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.65 }}
            className="mt-6 pt-6 border-t border-[#F5F2EC]/[0.06]"
          >
            <p className="text-[0.85rem] text-[#F5F2EC]/35 font-sans font-light leading-relaxed flex items-start gap-2">
              <span className="text-[#C9A84C] shrink-0 mt-0.5">✦</span>
              <span>Todo esto viene incluido en tu sitio desde el primer día.</span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

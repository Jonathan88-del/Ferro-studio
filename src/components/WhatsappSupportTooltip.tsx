import { motion } from "framer-motion";
import { MessageCircle, Check, X } from "lucide-react";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const INCLUDES = [
  "Respuesta en 24–48 horas hábiles",
  "Resolución de errores del sitio",
  "Revisión de formularios, botones y enlaces",
  "Ayuda con consultas sobre el funcionamiento del sitio",
  "Asistencia técnica cuando surjan inconvenientes",
];

const NOT_INCLUDES = [
  "Cambios de contenido",
  "Modificaciones de diseño",
  "Nuevas funcionalidades",
];

export default function WhatsappSupportTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="text-[0.95rem] font-sans font-light leading-[1.65] hover:text-[#C9A84C] transition-colors text-left cursor-help"
      >
        Soporte por WhatsApp (24–48 hs hábiles)
      </button>

      {/* Tooltip */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -12 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.95, x: -12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 z-50 w-96 bg-[#0E0E0E] border border-[#F5F2EC]/[0.1] rounded-lg p-6 pointer-events-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE, delay: 0.05 }}
            className="mb-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-[#C9A84C]/15 flex items-center justify-center">
                <MessageCircle size={20} className="text-[#C9A84C]/70" strokeWidth={1.5} />
              </div>
              <span className="tracking-[0.26em] uppercase font-sans text-[#C9A84C]/80 text-[14px]">
                Soporte Técnico
              </span>
            </div>
            <p className="text-[#F5F2EC]/45 font-sans font-light text-[0.95rem] leading-relaxed">
              Recibí atención para consultas y resolución de inconvenientes relacionados con el funcionamiento de tu sitio web. Si detectás un error o necesitás ayuda, estaremos disponibles para asistirte dentro de las 24 a 48 horas hábiles.
            </p>
          </motion.div>

          {/* Incluye section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE, delay: 0.1 }}
            className="mb-6"
          >
            <h4 className="text-[0.85rem] tracking-[0.2em] uppercase font-sans text-[#C9A84C]/80 mb-3">Incluye</h4>
            <div className="space-y-2">
              {INCLUDES.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <Check size={14} className="text-[#C9A84C]/70 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-[0.85rem] text-[#F5F2EC]/50 font-sans font-light leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* No incluye section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE, delay: 0.15 }}
          >
            <h4 className="text-[0.85rem] tracking-[0.2em] uppercase font-sans text-[#C9A84C]/80 mb-3">No incluye</h4>
            <div className="space-y-2">
              {NOT_INCLUDES.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <X size={14} className="text-[#F5F2EC]/25 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-[0.85rem] text-[#F5F2EC]/35 font-sans font-light leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

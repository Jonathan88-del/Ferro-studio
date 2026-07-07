import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const PAGES_FEATURES = [
  { feature: "Página de inicio", description: "Tu cara principal, donde todos llegan primero" },
  { feature: "Página de servicios/productos", description: "Mostra qué ofreces en detalle" },
  { feature: "Página sobre nosotros", description: "Cuéntale a tus clientes quiénes son" },
  { feature: "Página de contacto", description: "Forma fácil para que te contacten" },
  { feature: "Página adicional a tu medida", description: "Blog, FAQ, portafolio o lo que necesites" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PagestooltipTooltip() {
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
        Hasta 5 páginas independientes
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
              5 Páginas Independientes
            </h3>
            <p className="text-[#F5F2EC]/40 font-sans font-light text-[0.9rem] leading-relaxed">
              Un sitio web completo con múltiples secciones para contar tu historia.
            </p>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.2 }}
            className="space-y-4"
          >
            {PAGES_FEATURES.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.35,
                  ease: EASE,
                  delay: 0.25 + index * 0.04,
                }}
                className="flex items-start gap-3 group pb-3 border-b border-[#F5F2EC]/[0.04] last:border-b-0 last:pb-0"
              >
                <Check
                  size={14}
                  strokeWidth={2.5}
                  className="shrink-0 mt-1.5 text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors"
                />
                <div className="flex flex-col gap-2 flex-1">
                  <span className="text-[0.9rem] text-[#F5F2EC]/60 font-sans font-light leading-relaxed group-hover:text-[#F5F2EC]/80 transition-colors">
                    {item.feature}
                  </span>
                  <p className="text-[0.8rem] text-[#C9A84C]/50 font-sans font-light leading-relaxed">
                    ➜ {item.description}
                  </p>
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
              <span>Todas las páginas están optimizadas para móvil y cuentan con soporte técnico.</span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

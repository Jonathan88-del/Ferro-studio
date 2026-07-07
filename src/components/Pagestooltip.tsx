import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

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
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 z-50 w-[440px] bg-[#0E0E0E] border border-[#F5F2EC]/[0.1] p-6 pointer-events-auto shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
            className="mb-6"
          >
            <h3 className="font-serif text-[1.15rem] font-light text-[#F5F2EC] mb-1">
              5 Páginas Independientes
            </h3>
            <p className="text-[#F5F2EC]/40 font-sans font-light text-[0.85rem] leading-relaxed">
              Cada página tiene su propia URL y aparece en Google
            </p>
          </motion.div>

          {/* Visual Demo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.2 }}
            className="space-y-4 mb-6"
          >
            {/* Search Bar */}
            <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-3 flex items-center gap-2">
              <Search size={16} className="text-[#F5F2EC]/30" />
              <span className="text-[0.85rem] text-[#F5F2EC]/50 font-sans font-light">
                Servicios de Ferro Studio
              </span>
            </div>

            {/* Arrow Down */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.35 }}
              className="flex justify-center"
            >
              <ArrowRight
                size={18}
                className="text-[#C9A84C]/60 rotate-90"
              />
            </motion.div>

            {/* Google Result */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.4 }}
              className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-4 space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-[0.75rem] font-sans font-light text-[#C9A84C]">
                  🔍
                </span>
                <span className="text-[0.9rem] font-sans font-light text-[#C9A84C] hover:text-[#C9A84C] cursor-pointer">
                  Servicios | Ferro Studio
                </span>
              </div>
              <p className="text-[0.8rem] text-[#F5F2EC]/35 font-sans font-light">
                ferrostudio.com/servicios
              </p>
            </motion.div>

            {/* Arrow Down */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.5 }}
              className="flex justify-center"
            >
              <ArrowRight
                size={18}
                className="text-[#C9A84C]/60 rotate-90"
              />
            </motion.div>

            {/* Page Preview */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.55 }}
              className="bg-[#1A1A1A] border border-[#C9A84C]/30 rounded-lg p-4 space-y-3"
            >
              <div className="bg-[#0E0E0E] rounded px-3 py-2 border border-[#F5F2EC]/[0.08]">
                <p className="text-[0.75rem] text-[#F5F2EC]/30 font-sans font-light mb-1">
                  Página: Servicios
                </p>
                <p className="text-[0.85rem] text-[#F5F2EC]/70 font-sans font-light">
                  Conoce nuestros servicios
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.65 }}
            className="bg-[#1A1A1A]/50 border border-[#C9A84C]/20 rounded-lg p-4"
          >
            <p className="text-[0.8rem] text-[#F5F2EC]/60 font-sans font-light leading-relaxed flex items-start gap-2">
              <span className="text-[#C9A84C] shrink-0 mt-0.5 text-[1rem]">→</span>
              <span>Los clientes pueden acceder directamente a la información que buscan, sin pasar primero por la página de inicio.</span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

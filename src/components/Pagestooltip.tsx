import { motion } from "framer-motion";
import { Search, HelpCircle } from "lucide-react";
import React, { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PagestooltipTooltip() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const containerRef = useState(null)[0];
  const ref = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsLocked(!isLocked);
    setIsOpen(!isLocked);
    if (!isLocked) {
      setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", inline: "end", block: "nearest" });
      }, 100);
    }
  };

  const handleClickOutside = () => {
    if (!isLocked) {
      setIsOpen(false);
    }
  };

  return (
    <div ref={ref} className="relative inline-block" onMouseLeave={handleClickOutside}>
      <motion.button
        onMouseEnter={() => !isLocked && setIsOpen(true)}
        onMouseLeave={() => !isLocked && setIsOpen(false)}
        onClick={handleClick}
        whileHover={{ color: isLocked ? "#C9A84C" : "#C9A84C" }}
        transition={{ duration: 0.2 }}
        className={`inline-flex items-center gap-2 text-[0.92rem] text-[#F5F2EC]/35 font-sans font-light leading-[1.6] transition-colors text-left cursor-help ${
          isLocked ? "text-[#C9A84C] underline" : "hover:text-[#C9A84C]"
        }`}
      >
        Hasta 5 páginas independientes
        <HelpCircle size={14} strokeWidth={2} className="shrink-0" />
      </motion.button>

      {/* Tooltip */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: -20, y: 0 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, x: -20, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => !isLocked && setIsOpen(false)}
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 z-50 w-[440px] bg-[#0E0E0E] border border-[#F5F2EC]/[0.1] rounded-lg p-6 pointer-events-auto shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
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
            className="space-y-3 mb-6"
          >
            {/* Google Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.25 }}
              className="space-y-2"
            >
              <div className="text-center mb-1">
                <span className="text-[0.75rem] text-[#F5F2EC]/40 font-sans font-light uppercase tracking-wider">
                  Google
                </span>
              </div>
              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.12] rounded-full px-3 py-2 flex items-center gap-2">
                <Search size={13} className="text-[#F5F2EC]/25" />
                <span className="text-[0.75rem] text-[#F5F2EC]/60 font-sans font-light">
                  Servicios de Ferro Studio
                </span>
              </div>
            </motion.div>

            {/* Arrow Down */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: EASE, delay: 0.35 }}
              className="flex justify-center py-0.5"
            >
              <div className="text-[#C9A84C]/50 text-[0.8rem]">↓</div>
            </motion.div>

            {/* Google Result 1 */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.4 }}
              className="space-y-1"
            >
              {/* Breadcrumb */}
              <p className="text-[0.72rem] text-[#C9A84C]/70 font-sans font-light">
                ferrostudio.com › servicios
              </p>
              {/* Title - Google Blue */}
              <h4 className="text-[0.9rem] text-[#1E90FF] font-sans font-normal hover:underline cursor-pointer leading-tight">
                Servicios | Ferro Studio
              </h4>
              {/* Snippet */}
              <p className="text-[0.78rem] text-[#F5F2EC]/65 font-sans font-normal leading-snug">
                Conoce Landing Pages, Sitios Institucionales, E-commerce y más soluciones diseñadas para hacer crecer tu negocio.
              </p>
            </motion.div>

            {/* Arrow Down */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: EASE, delay: 0.5 }}
              className="flex justify-center py-0.5"
            >
              <div className="text-[#C9A84C]/50 text-[0.8rem]">↓</div>
            </motion.div>

            {/* Page Content Preview */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.55 }}
              className="bg-[#1A1A1A] border border-[#C9A84C]/40 rounded-lg p-3 space-y-2"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-[#C9A84C]/50"></div>
                <p className="text-[0.7rem] text-[#C9A84C]/70 font-sans font-light">
                  Página cargada: ferrostudio.com/servicios
                </p>
              </div>
              <h4 className="text-[0.85rem] text-[#F5F2EC]/80 font-sans font-light">
                Soluciones para cada etapa de su negocio
              </h4>
              <p className="text-[0.73rem] text-[#F5F2EC]/55 font-sans font-light leading-relaxed">
                Descubre cómo podemos transformar tu presencia digital con soluciones personalizadas.
              </p>
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

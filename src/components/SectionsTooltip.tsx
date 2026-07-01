import { motion } from "framer-motion";
import { Home, Users, Briefcase, MessageSquare, Images, Mail } from "lucide-react";
import { useState } from "react";

const SECTIONS = [
  { id: 1, name: "Inicio", icon: Home },
  { id: 2, name: "Sobre nosotros", icon: Users },
  { id: 3, name: "Servicios", icon: Briefcase },
  { id: 4, name: "Testimonios", icon: MessageSquare },
  { id: 5, name: "Galería / Portafolio", icon: Images },
  { id: 6, name: "Contacto", icon: Mail },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SectionsTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="text-[0.92rem] text-[#F5F2EC]/35 font-sans font-light leading-[1.6] hover:text-[#C9A84C] transition-colors text-left cursor-help underline underline-offset-2 decoration-[#C9A84C]/40 hover:decoration-[#C9A84C]"
      >
        Hasta 6 secciones
      </button>

      {/* Tooltip */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-72 bg-[#0E0E0E] border border-[#C9A84C]/30 p-4 pointer-events-auto"
        >
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#C9A84C]/30" />

          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-px bg-[#C9A84C]/70" />
            <span className="text-[0.7rem] tracking-[0.2em] uppercase font-sans text-[#C9A84C]/80">
              Secciones
            </span>
          </div>

          {/* Sections Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {SECTIONS.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: EASE,
                    delay: index * 0.05,
                  }}
                  className="flex items-center gap-2 p-2 rounded-sm bg-[#0E0E0E]/40 border border-[#F5F2EC]/[0.06] hover:border-[#C9A84C]/30 transition-all"
                >
                  <Icon size={14} className="text-[#C9A84C]/70 shrink-0" strokeWidth={1.5} />
                  <span className="text-[0.8rem] text-[#F5F2EC]/60 font-sans font-light leading-tight">
                    {section.name}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Footer text */}
          <div className="flex items-start gap-2 pt-3 border-t border-[#F5F2EC]/[0.06]">
            <span className="text-[#C9A84C] mt-0.5 shrink-0 text-[10px]">✦</span>
            <p className="text-[0.75rem] text-[#F5F2EC]/40 font-sans font-light leading-relaxed">
              Personalizable según tus objetivos
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

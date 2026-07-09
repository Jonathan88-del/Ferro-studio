import { motion } from "framer-motion";
import { Home, Users, Briefcase, MessageSquare, Images, Mail, HelpCircle } from "lucide-react";
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
  const [isLocked, setIsLocked] = useState(false);

  const handleClick = () => {
    setIsLocked(!isLocked);
    setIsOpen(!isLocked);
  };

  const handleClickOutside = () => {
    if (!isLocked) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative inline-block" onMouseLeave={handleClickOutside}>
      <button
        onMouseEnter={() => !isLocked && setIsOpen(true)}
        onMouseLeave={() => !isLocked && setIsOpen(false)}
        onClick={handleClick}
        className={`inline-flex items-center gap-2 text-[0.92rem] text-[#F5F2EC]/35 font-sans font-light leading-[1.6] transition-colors text-left cursor-help ${
          isLocked ? "text-[#C9A84C] underline" : "hover:text-[#C9A84C]"
        }`}
      >
        Hasta 6 secciones
        <HelpCircle size={14} strokeWidth={2} className="shrink-0" />
      </button>

      {/* Tooltip */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -12 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.95, x: -12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => !isLocked && setIsOpen(false)}
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 z-50 w-80 bg-[#0E0E0E] border border-[#F5F2EC]/[0.1] rounded-lg p-6 pointer-events-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE, delay: 0.05 }}
            className="mb-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-[#C9A84C]/70" />
              <span className="tracking-[0.26em] uppercase font-sans text-[#C9A84C]/80 text-[14px]">
                Hasta 6 secciones
              </span>
            </div>
            <p className="text-[#F5F2EC]/45 font-sans font-light text-[0.95rem] leading-relaxed">
              Tu sitio puede incluir hasta 6 secciones personalizadas para comunicar todo lo que tu negocio necesita.
            </p>
          </motion.div>

          {/* Dots indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: EASE, delay: 0.1 }}
            className="flex gap-2 mb-6"
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#C9A84C]/40"
              />
            ))}
          </motion.div>

          {/* Sections Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {SECTIONS.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: EASE,
                    delay: 0.15 + index * 0.06,
                  }}
                  className="relative border border-[#F5F2EC]/[0.08] bg-[#0E0E0E]/40 p-4 hover:border-[#C9A84C]/30 transition-all group"
                >
                  {/* Number indicator */}
                  <div className="absolute -top-3 -left-3 w-7 h-7 bg-[#C9A84C] text-[#0E0E0E] rounded-full flex items-center justify-center font-serif text-[12px] font-light">
                    {section.id}
                  </div>

                  {/* Content */}
                  <div className="flex items-start gap-3 ml-2">
                    <Icon size={16} className="text-[#C9A84C]/70 shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <h4 className="font-serif text-[0.95rem] font-light text-[#F5F2EC] group-hover:text-[#C9A84C] transition-colors">
                        {section.name}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer message */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.6 }}
            className="flex items-start gap-3 p-4 border border-[#F5F2EC]/[0.06] bg-[#0E0E0E]/40"
          >
            <span className="text-[#C9A84C] shrink-0 text-[12px]">✦</span>
            <p className="text-[#F5F2EC]/35 font-sans font-light text-[0.9rem] leading-relaxed">
              Totalmente personalizable y adaptado a tus objetivos.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

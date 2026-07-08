import { motion } from "framer-motion";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

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
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 z-50 w-80 bg-[#0E0E0E] border border-[#F5F2EC]/[0.1] p-6 pointer-events-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE, delay: 0.05 }}
            className="text-[#F5F2EC]/45 font-sans font-light text-[0.95rem] leading-relaxed"
          >
            Si encontrás un problema o necesitás un pequeño cambio. Podemos ayudarte con ajustes de visualización, cambios de imágenes o textos, revisión de formularios, enlaces, botones y otras tareas menores.
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}

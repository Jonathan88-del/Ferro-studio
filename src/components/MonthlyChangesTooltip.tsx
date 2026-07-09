import { motion } from "framer-motion";
import { Wrench, Check, X, HelpCircle } from "lucide-react";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const INCLUDES = [
  "Cambiar textos.",
  "Reemplazar fotografías.",
  "Actualizar horarios.",
  "Cambiar precios.",
  "Agregar o modificar integrantes del equipo.",
  "Actualizar datos de contacto.",
  "Ajustar pequeños elementos del diseño.",
  "Modificar botones, enlaces o íconos.",
];

const NOT_INCLUDES = [
  "Nuevas páginas.",
  "Rediseño completo.",
  "Desarrollo de funcionalidades nuevas.",
  "Integraciones complejas.",
];

export default function MonthlyChangesTooltip() {
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
        className={`inline-flex items-center gap-2 text-[0.95rem] font-sans font-light leading-[1.65] transition-colors text-left cursor-help ${
          isLocked ? "text-[#C9A84C] underline" : "hover:text-[#C9A84C]"
        }`}
      >
        Hasta 3 cambios mensuales al sitio
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
                <Wrench size={20} className="text-[#C9A84C]/70" strokeWidth={1.5} />
              </div>
              <span className="tracking-[0.26em] uppercase font-sans text-[#C9A84C]/80 text-[14px]">
                Cambios Mensuales
              </span>
            </div>
            <p className="text-[#F5F2EC]/45 font-sans font-light text-[0.95rem] leading-relaxed">
              Realizamos hasta tres modificaciones menores solicitadas por el cliente cada mes para mantener la información del sitio siempre actualizada, sin necesidad de contratar trabajos adicionales.
            </p>
          </motion.div>

          {/* Incluye section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE, delay: 0.1 }}
            className="mb-6"
          >
            <h4 className="text-[0.85rem] tracking-[0.2em] uppercase font-sans text-[#C9A84C]/80 mb-3">Ejemplos de modificaciones</h4>
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
            className="mb-6"
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

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE, delay: 0.2 }}
            className="border-t border-[#F5F2EC]/[0.08] pt-4"
          >
            <p className="text-[0.8rem] text-[#F5F2EC]/35 font-sans font-light italic leading-relaxed">
              Cada modificación corresponde a una solicitud relacionada. Por ejemplo, actualizar la información completa de un empleado (foto, nombre, cargo y teléfono) cuenta como una sola modificación.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function MonthlyChangesTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="text-[0.95rem] font-sans font-light leading-[1.65] hover:text-[#C9A84C] transition-colors text-left cursor-help"
      >
        Hasta 3 cambios mensuales al sitio
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
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 z-50 w-96 bg-[#0E0E0E] border border-[#F5F2EC]/[0.1] p-6 pointer-events-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE, delay: 0.05 }}
            className="text-[#F5F2EC]/45 font-sans font-light text-[0.95rem] leading-relaxed space-y-4"
          >
            <p>
              Realizamos hasta tres modificaciones menores solicitadas por el cliente cada mes para mantener la información del sitio siempre actualizada, sin necesidad de contratar trabajos adicionales.
            </p>

            <div>
              <p className="text-[#F5F2EC]/60 font-medium mb-2">Ejemplos de modificaciones:</p>
              <ul className="space-y-1.5 text-[0.9rem]">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A84C] mt-1">•</span>
                  <span>Cambiar textos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A84C] mt-1">•</span>
                  <span>Reemplazar fotografías.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A84C] mt-1">•</span>
                  <span>Actualizar horarios.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A84C] mt-1">•</span>
                  <span>Cambiar precios.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A84C] mt-1">•</span>
                  <span>Agregar o modificar integrantes del equipo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A84C] mt-1">•</span>
                  <span>Actualizar datos de contacto.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A84C] mt-1">•</span>
                  <span>Ajustar pequeños elementos del diseño.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A84C] mt-1">•</span>
                  <span>Modificar botones, enlaces o íconos.</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[#F5F2EC]/60 font-medium mb-2">No incluye:</p>
              <ul className="space-y-1.5 text-[0.9rem]">
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A84C] mt-1">•</span>
                  <span>Nuevas páginas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A84C] mt-1">•</span>
                  <span>Rediseño completo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A84C] mt-1">•</span>
                  <span>Desarrollo de funcionalidades nuevas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C9A84C] mt-1">•</span>
                  <span>Integraciones complejas.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-[#F5F2EC]/[0.08] pt-3 mt-3">
              <p className="text-[0.85rem] text-[#F5F2EC]/35 italic">
                Cada modificación corresponde a una solicitud relacionada. Por ejemplo, actualizar la información completa de un empleado (foto, nombre, cargo y teléfono) cuenta como una sola modificación.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

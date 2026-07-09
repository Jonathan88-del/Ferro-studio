import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const ANALYTICS_FEATURES = [
  "📈 Visitas al sitio - Visualizá cuántas personas ingresan a tu página.",
  "👥 Usuarios nuevos y recurrentes - Descubrí cuántos visitantes llegan por primera vez y cuántos vuelven.",
  "📄 Páginas más visitadas - Identificá qué servicios o secciones generan mayor interés.",
  "📱 Dispositivos utilizados - Conocé si navegan desde celular, computadora o tablet.",
  "🌎 Ubicación de los visitantes - Descubrí desde qué ciudades o países visitan tu sitio.",
  "🔗 Origen del tráfico - Sabé si los visitantes llegaron desde Google, redes sociales, WhatsApp o mediante un enlace directo.",
  "💬 Interacciones importantes - Medí clics en WhatsApp, formularios enviados y otras acciones relevantes.",
];

export default function AnalyticsTooltip() {
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
        Google Analytics
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
          className="absolute right-full top-1/2 -translate-y-1/2 mr-4 z-50 w-[520px] bg-[#0E0E0E] border border-[#F5F2EC]/[0.1] rounded-lg p-6 pointer-events-auto shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-h-[600px] overflow-y-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
            className="mb-6 pb-4 border-b border-[#F5F2EC]/[0.06]"
          >
            <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC] mb-2 flex items-center gap-2">
              📊 Google Analytics
            </h3>
            <p className="text-[#F5F2EC]/40 font-sans font-light text-[0.85rem] leading-relaxed">
              Conocé cómo utilizan los visitantes tu sitio web.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-[0.75rem] text-[#F5F2EC]/40 font-sans font-light uppercase tracking-wide mb-3">
              Incluye
            </p>
            {ANALYTICS_FEATURES.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.35,
                  ease: EASE,
                  delay: 0.25 + index * 0.04,
                }}
                className="text-[0.8rem] text-[#F5F2EC]/65 font-sans font-light leading-relaxed"
              >
                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.65 }}
            className="mt-6 pt-6 border-t border-[#F5F2EC]/[0.06]"
          >
            <p className="text-[0.8rem] text-[#F5F2EC]/50 font-sans font-light leading-relaxed">
              <span className="text-[#C9A84C]">✦</span> Con estos datos podrás entender mejor a tus visitantes y mejorar tu sitio.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

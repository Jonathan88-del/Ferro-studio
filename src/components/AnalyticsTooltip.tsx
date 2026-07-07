import { motion } from "framer-motion";
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

const SEARCH_CONSOLE_FEATURES = [
  "🔍 Apariciones en Google - Conocé cuántas veces tu sitio aparece en los resultados de búsqueda.",
  "🖱️ Clics desde Google - Visualizá cuántos usuarios ingresan a tu sitio.",
  "📈 Posición promedio - Consultá en qué lugar suelen aparecer tus páginas.",
  "📝 Palabras clave - Descubrí qué búsquedas realizan los usuarios para encontrar tu empresa.",
  "📄 Páginas con mejor rendimiento - Identificá qué páginas reciben más visitas desde Google.",
  "✅ Estado de indexación - Verificá que Google pueda encontrar e indexar correctamente todas las páginas.",
  "⚠️ Errores de indexación - Detectá problemas que puedan impedir que algunas páginas aparezcan en Google.",
];

export default function AnalyticsTooltip() {
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
        Google Analytics + Search Console
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
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 z-50 w-[900px] bg-[#0E0E0E] border border-[#F5F2EC]/[0.1] p-6 pointer-events-auto shadow-[0_20px_40px_rgba(0,0,0,0.4)] max-h-[700px] overflow-y-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
            className="mb-6 pb-4 border-b border-[#F5F2EC]/[0.06]"
          >
            <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC] mb-2">
              Google Analytics + Search Console
            </h3>
            <p className="text-[#F5F2EC]/40 font-sans font-light text-[0.85rem] leading-relaxed">
              Entiende quién visita tu sitio, qué busca y cómo mejorar
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-6">
            {/* Google Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.2 }}
              className="space-y-3"
            >
              <h4 className="font-serif text-[1rem] font-light text-[#C9A84C] flex items-center gap-2 mb-4">
                📊 Google Analytics
              </h4>
              <p className="text-[#F5F2EC]/50 font-sans font-light text-[0.8rem] leading-relaxed mb-3">
                Conocé cómo utilizan los visitantes tu sitio web.
              </p>
              <div className="space-y-2">
                <p className="text-[0.75rem] text-[#F5F2EC]/40 font-sans font-light uppercase tracking-wide mb-2">
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
                      delay: 0.3 + index * 0.03,
                    }}
                    className="text-[0.8rem] text-[#F5F2EC]/65 font-sans font-light leading-relaxed"
                  >
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Google Search Console */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.25 }}
              className="space-y-3"
            >
              <h4 className="font-serif text-[1rem] font-light text-[#C9A84C] flex items-center gap-2 mb-4">
                🔍 Google Search Console
              </h4>
              <p className="text-[#F5F2EC]/50 font-sans font-light text-[0.8rem] leading-relaxed mb-3">
                Descubrí cómo encuentran tu empresa en Google.
              </p>
              <div className="space-y-2">
                <p className="text-[0.75rem] text-[#F5F2EC]/40 font-sans font-light uppercase tracking-wide mb-2">
                  Incluye
                </p>
                {SEARCH_CONSOLE_FEATURES.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: EASE,
                      delay: 0.35 + index * 0.03,
                    }}
                    className="text-[0.8rem] text-[#F5F2EC]/65 font-sans font-light leading-relaxed"
                  >
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.75 }}
            className="mt-6 pt-6 border-t border-[#F5F2EC]/[0.06]"
          >
            <p className="text-[0.8rem] text-[#F5F2EC]/50 font-sans font-light leading-relaxed">
              <span className="text-[#C9A84C]">✦</span> Con estos datos, podrás tomar decisiones informadas para mejorar tu presencia digital y aumentar tus conversiones.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

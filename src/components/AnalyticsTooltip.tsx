import { motion } from "framer-motion";
import { TrendingUp, Eye, MousePointer } from "lucide-react";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

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
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 z-50 w-[480px] bg-[#0E0E0E] border border-[#F5F2EC]/[0.1] p-6 pointer-events-auto shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.1 }}
            className="mb-6"
          >
            <h3 className="font-serif text-[1.15rem] font-light text-[#F5F2EC] mb-1">
              Analytics + Search Console
            </h3>
            <p className="text-[#F5F2EC]/40 font-sans font-light text-[0.85rem] leading-relaxed">
              Entiende quién visita tu sitio, qué busca y cómo mejorar
            </p>
          </motion.div>

          {/* Visual Demo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.2 }}
            className="space-y-4 mb-6"
          >
            {/* Google Analytics Card */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.3 }}
              className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.1] rounded-lg p-4 space-y-3"
            >
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp size={14} className="text-[#C9A84C]/70" />
                <h4 className="text-[0.85rem] text-[#C9A84C] font-sans font-light">
                  Google Analytics
                </h4>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-[#0E0E0E] rounded p-2 border border-[#F5F2EC]/[0.06]">
                  <p className="text-[0.65rem] text-[#F5F2EC]/40 font-sans font-light mb-1">
                    Visitantes
                  </p>
                  <p className="text-[0.85rem] text-[#F5F2EC]/80 font-sans font-light">
                    2,450
                  </p>
                </div>
                <div className="bg-[#0E0E0E] rounded p-2 border border-[#F5F2EC]/[0.06]">
                  <p className="text-[0.65rem] text-[#F5F2EC]/40 font-sans font-light mb-1">
                    Conversiones
                  </p>
                  <p className="text-[0.85rem] text-[#F5F2EC]/80 font-sans font-light">
                    18%
                  </p>
                </div>
                <div className="bg-[#0E0E0E] rounded p-2 border border-[#F5F2EC]/[0.06]">
                  <p className="text-[0.65rem] text-[#F5F2EC]/40 font-sans font-light mb-1">
                    Tiempo promedio
                  </p>
                  <p className="text-[0.85rem] text-[#F5F2EC]/80 font-sans font-light">
                    2m 34s
                  </p>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="bg-[#0E0E0E] rounded p-2 border border-[#F5F2EC]/[0.06]">
                <p className="text-[0.65rem] text-[#F5F2EC]/40 font-sans font-light mb-2">
                  Tráfico últimos 30 días
                </p>
                <div className="flex items-end justify-between gap-1 h-12">
                  {[3, 5, 4, 7, 6, 8, 9, 7, 8, 6].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-[#C9A84C]/60 rounded-t"
                      style={{ height: `${(height / 9) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Search Console Card */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.4 }}
              className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.1] rounded-lg p-4 space-y-3"
            >
              <div className="flex items-center gap-2 mb-1">
                <Eye size={14} className="text-[#C9A84C]/70" />
                <h4 className="text-[0.85rem] text-[#C9A84C] font-sans font-light">
                  Search Console
                </h4>
              </div>

              {/* Top Keywords */}
              <div className="space-y-2">
                <p className="text-[0.65rem] text-[#F5F2EC]/40 font-sans font-light">
                  Palabras clave principales
                </p>
                <div className="space-y-1">
                  {[
                    { keyword: "diseño web", clicks: 145 },
                    { keyword: "sitio web empresa", clicks: 98 },
                    { keyword: "landing page profesional", clicks: 72 },
                  ].map((item) => (
                    <div
                      key={item.keyword}
                      className="flex items-center justify-between bg-[#0E0E0E] rounded p-2 border border-[#F5F2EC]/[0.06]"
                    >
                      <span className="text-[0.75rem] text-[#F5F2EC]/70 font-sans font-light">
                        {item.keyword}
                      </span>
                      <span className="text-[0.7rem] text-[#C9A84C]/70 font-sans font-light">
                        {item.clicks} clics
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Issues */}
              <div className="bg-[#0E0E0E] rounded p-2 border border-[#F5F2EC]/[0.06] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A84C]/60"></span>
                <p className="text-[0.7rem] text-[#F5F2EC]/60 font-sans font-light">
                  3 problemas detectados en indexación
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE, delay: 0.6 }}
            className="bg-[#1A1A1A]/50 border border-[#C9A84C]/20 rounded-lg p-4 space-y-2"
          >
            <p className="text-[0.8rem] text-[#F5F2EC]/60 font-sans font-light leading-relaxed flex items-start gap-2">
              <span className="text-[#C9A84C] shrink-0 mt-0.5">✓</span>
              <span>Ve exactamente quién visita tu sitio, de dónde vienen y qué hacen.</span>
            </p>
            <p className="text-[0.8rem] text-[#F5F2EC]/60 font-sans font-light leading-relaxed flex items-start gap-2">
              <span className="text-[#C9A84C] shrink-0 mt-0.5">✓</span>
              <span>Descubre las palabras clave que te traen clientes y mejora tu posicionamiento.</span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

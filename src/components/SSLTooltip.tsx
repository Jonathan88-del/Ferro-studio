import { motion } from "framer-motion";
import { Shield, Lock, RefreshCw, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const SSL_INFO = [
  { icon: Shield, title: "Encriptación", description: "Protege datos sensibles de clientes" },
  { icon: Lock, title: "HTTPS", description: "Protocolo seguro en navegador" },
  { icon: RefreshCw, title: "Renovación automática", description: "Nosotros lo hacemos por ti" },
  { icon: CheckCircle2, title: "Confianza", description: "Mejora credibilidad de tu sitio" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SSLTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="text-[0.95rem] font-sans font-light leading-[1.65] hover:text-[#C9A84C] transition-colors text-left cursor-help"
      >
        Gestión y renovación automática del SSL
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
                Certificado SSL
              </span>
            </div>
            <p className="text-[#F5F2EC]/45 font-sans font-light text-[0.95rem] leading-relaxed">
              Protege los datos de tus clientes con encriptación de nivel empresarial.
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

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {SSL_INFO.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: EASE,
                    delay: 0.15 + index * 0.06,
                  }}
                  className="relative border border-[#F5F2EC]/[0.08] bg-[#0E0E0E]/40 p-4 hover:border-[#C9A84C]/30 transition-all group"
                >
                  {/* Icon */}
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={16} className="text-[#C9A84C]/70 shrink-0" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h4 className="font-serif text-[0.9rem] font-light text-[#F5F2EC] group-hover:text-[#C9A84C] transition-colors mb-1">
                    {info.title}
                  </h4>
                  <p className="text-[0.8rem] text-[#F5F2EC]/35 font-sans font-light leading-tight">
                    {info.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Footer message */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.5 }}
            className="flex items-start gap-3 p-4 border border-[#F5F2EC]/[0.06] bg-[#0E0E0E]/40"
          >
            <span className="text-[#C9A84C] shrink-0 text-[12px]">✦</span>
            <p className="text-[#F5F2EC]/35 font-sans font-light text-[0.9rem] leading-relaxed">
              Nosotros renovamos tu certificado automáticamente cada año.
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

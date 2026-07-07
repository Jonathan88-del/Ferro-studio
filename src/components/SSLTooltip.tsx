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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE, delay: 0.05 }}
            className="text-[#F5F2EC]/45 font-sans font-light text-[0.95rem] leading-relaxed"
          >
            Después de publicar tu sitio, nos encargamos de supervisar que la seguridad SSL siga funcionando correctamente, mantenerla activa y resolver cualquier inconveniente relacionado con la conexión segura.
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Users, Briefcase, MessageSquare, Images, Mail } from "lucide-react";

const SECTIONS = [
  { id: 1, name: "Inicio", icon: Home },
  { id: 2, name: "Sobre nosotros", icon: Users },
  { id: 3, name: "Servicios", icon: Briefcase },
  { id: 4, name: "Testimonios", icon: MessageSquare },
  { id: 5, name: "Galería / Portafolio", icon: Images },
  { id: 6, name: "Contacto", icon: Mail },
];

const EASE = [0.22, 1, 0.36, 1] as const;

interface SectionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SectionsModal({ isOpen, onClose }: SectionsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0E0E0E]/80 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-2xl bg-[#0E0E0E] border border-[#F5F2EC]/[0.1] overflow-hidden">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 text-[#F5F2EC]/50 hover:text-[#F5F2EC] transition-colors"
                aria-label="Cerrar"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-6 h-px bg-[#C9A84C]/70" />
                    <span className="tracking-[0.26em] uppercase font-sans text-[#C9A84C]/80 text-[16px]">
                      Hasta 6 secciones
                    </span>
                  </div>
                  <p className="text-[#F5F2EC]/45 font-sans font-light text-[1rem] leading-relaxed max-w-md">
                    Tu sitio puede incluir hasta 6 secciones personalizadas para comunicar todo lo que tu negocio necesita.
                  </p>
                </motion.div>

                {/* Dots indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
                  className="flex gap-2 mb-8"
                >
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-[#C9A84C]/40"
                    />
                  ))}
                </motion.div>

                {/* Sections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {SECTIONS.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: EASE,
                          delay: 0.25 + index * 0.08,
                        }}
                        className="relative border border-[#F5F2EC]/[0.08] bg-[#0E0E0E]/40 p-5 hover:border-[#C9A84C]/30 transition-all duration-300 group"
                      >
                        {/* Number indicator */}
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-[#C9A84C]/10 border border-[#C9A84C]/40 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#C9A84C]/20 transition-all">
                            <Icon size={18} className="text-[#C9A84C]" strokeWidth={1.5} />
                          </div>
                          <div>
                            <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC] group-hover:text-[#C9A84C] transition-colors">
                              {section.name}
                            </h3>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Footer message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.7 }}
                  className="flex items-start gap-3 mb-8 p-4 border border-[#F5F2EC]/[0.06] bg-[#0E0E0E]/40"
                >
                  <span className="text-[#C9A84C] mt-0.5 shrink-0">✦</span>
                  <p className="text-[#F5F2EC]/35 font-sans font-light text-[0.95rem] leading-relaxed">
                    Totalmente personalizable y adaptado a tus objetivos.
                  </p>
                </motion.div>

                {/* Close button */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.8 }}
                  onClick={onClose}
                  className="inline-flex items-center justify-center bg-[#C9A84C] text-[#0E0E0E] px-8 py-[13px] text-[0.65rem] tracking-[0.2em] uppercase font-sans font-medium transition-all duration-300 hover:bg-[#D9BC72] hover:shadow-[0_8px_32px_rgba(201,168,76,0.22)]"
                >
                  Entendido
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

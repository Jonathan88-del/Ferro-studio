import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode } from "react";

const SECTIONS = [
  { id: 1, name: "Inicio", description: "Landing hero, propuesta de valor" },
  { id: 2, name: "Nosotros", description: "Historia, misión, equipo" },
  { id: 3, name: "Servicios", description: "Oferta de productos/servicios" },
  { id: 4, name: "Portafolio", description: "Trabajos realizados, casos" },
  { id: 5, name: "Testimonios", description: "Reseñas de clientes" },
  { id: 6, name: "Contacto", description: "Formulario y datos" },
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
            <div className="relative w-full max-w-2xl bg-[#0E0E0E] border border-[#F5F2EC]/[0.1] rounded-lg overflow-hidden">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 text-[#F5F2EC]/50 hover:text-[#F5F2EC] transition-colors"
                aria-label="Cerrar"
              >
                <X size={24} strokeWidth={1.5} />
              </button>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
                >
                  <h2 className="font-serif text-[2.2rem] md:text-[2.8rem] font-light text-[#F5F2EC] mb-2 leading-tight tracking-[-0.01em]">
                    Elige tus secciones
                  </h2>
                  <p className="text-[#F5F2EC]/45 font-sans font-light text-[1.05rem]">
                    Tu sitio puede incluir hasta 6 secciones. Selecciona las que mejor se adapten a tu negocio.
                  </p>
                </motion.div>

                {/* Sections Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                  {SECTIONS.map((section, index) => (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        ease: EASE,
                        delay: 0.15 + index * 0.08,
                      }}
                      whileHover={{ y: -4, borderColor: "#C9A84C" }}
                      className="group relative border border-[#F5F2EC]/[0.08] bg-[#0E0E0E]/40 p-5 rounded-lg transition-all duration-300 cursor-default hover:bg-[#0E0E0E]/60 hover:border-[#C9A84C]/40"
                    >
                      {/* Number indicator */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#C9A84C] text-[#0E0E0E] rounded-full flex items-center justify-center font-serif text-[14px] font-light">
                        {section.id}
                      </div>

                      {/* Content */}
                      <div className="ml-2">
                        <h3 className="font-serif text-[1.35rem] font-light text-[#F5F2EC] mb-1 group-hover:text-[#C9A84C] transition-colors">
                          {section.name}
                        </h3>
                        <p className="text-[#F5F2EC]/35 font-sans font-light text-[0.95rem] leading-relaxed">
                          {section.description}
                        </p>
                      </div>

                      {/* Checkmark */}
                      <div className="absolute top-5 right-5 w-5 h-5 border border-[#C9A84C]/60 rounded-sm group-hover:bg-[#C9A84C]/10 transition-all flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-[#C9A84C] opacity-100"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.65 }}
                  className="mt-10 pt-8 border-t border-[#F5F2EC]/[0.07]"
                >
                  <p className="text-[#F5F2EC]/35 font-sans font-light text-[0.95rem] mb-5">
                    Todas las secciones incluyen diseño responsivo, animaciones, formularios y más.
                  </p>
                  <button
                    onClick={onClose}
                    className="inline-flex items-center gap-3 bg-[#C9A84C] text-[#0E0E0E] px-8 py-[13px] rounded-none text-[0.65rem] tracking-[0.2em] uppercase font-sans font-medium transition-all duration-300 hover:bg-[#D9BC72] hover:shadow-[0_8px_32px_rgba(201,168,76,0.22)]"
                  >
                    Entendido
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

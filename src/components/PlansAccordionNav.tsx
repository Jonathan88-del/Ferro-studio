import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F3b4a41e626e24dae8e3aa82c13ef83ba%2Ff151b1a5e252471fbb2c9d06ffdb955e?format=webp&width=800&height=1200";

const PLANS_FEATURES = [
  { label: "🖥️ Hosting administrado", href: "/planes-hosting" },
  { label: "🔒 Gestión y renovación automática del SSL", href: "/planes-ssl" },
  { label: "Soporte por WhatsApp", href: "/planes-whatsapp", logo: WHATSAPP_LOGO_URL },
  { label: "✏️ Cambios mensuales al sitio", href: "/planes-cambios" },
];

interface PlansAccordionNavProps {
  isActive: boolean;
  isMobile?: boolean;
}

export function PlansAccordionNav({ isActive, isMobile = false }: PlansAccordionNavProps) {
  const [location] = useLocation();
  const [expandedOnce, setExpandedOnce] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  const handleArrowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Only toggle accordion, never navigate
    setIsOpen(!isOpen);
    setExpandedOnce(true);
  };

  const handleNavigate = () => {
    window.location.href = "/planes";
  };

  // Reset state when navigating away from planes
  useEffect(() => {
    if (!isActive) {
      setIsOpen(false);
      setExpandedOnce(false);
    }
  }, [isActive, location]);

  if (isMobile) {
    return (
      <div ref={containerRef} className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Link
            href="/planes"
            className={cn(
              "font-serif text-[2.2rem] font-light py-2 no-underline transition-colors duration-200",
              isActive ? "text-[#C9A84C]" : "text-[#F5F2EC]/50 hover:text-[#F5F2EC]"
            )}
          >
            Planes
          </Link>
          <button
            type="button"
            aria-label={isOpen ? "Cerrar planes" : "Abrir planes"}
            onClick={() => {
              setIsOpen((open) => !open);
              setExpandedOnce(true);
            }}
            className={cn(
              "ferro-focus p-2 transition-colors duration-200",
              isActive ? "text-[#C9A84C]" : "text-[#F5F2EC]/50 hover:text-[#F5F2EC]"
            )}
          >
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={24} strokeWidth={1.5} />
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && expandedOnce && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden pl-6"
            >
              <ul className="flex flex-col gap-2.5 mb-3">
                {PLANS_FEATURES.map((feature) => (
                  <motion.li
                    key={feature.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Link
                      href={feature.href}
                      className="text-[1.1rem] text-[#F5F2EC]/60 font-light hover:text-[#C9A84C] transition-colors no-underline"
                    >
                      {feature.logo ? (
                        <span className="flex items-center gap-2">
                          <img src={feature.logo} alt="" className="h-5 w-5 object-contain" />
                          {feature.label}
                        </span>
                      ) : (
                        feature.label
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Desktop version
  return (
    <div ref={containerRef} className="relative">
      <button
        className={cn(
          "ferro-focus relative inline-flex flex-col items-center px-3.5 py-1.5 text-[0.67rem] tracking-[0.16em] uppercase font-sans font-normal transition-colors duration-300 group",
          isActive ? "text-[#F5F2EC]" : "text-[#F5F2EC]/45 hover:text-[#F5F2EC]",
          "gap-1"
        )}
      >
        <div className="flex items-center gap-1.5">
          <span onClick={handleNavigate} className="cursor-pointer hover:text-[#C9A84C] transition-colors">
            Planes
          </span>
          <motion.div
            onClick={handleArrowClick}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="cursor-pointer"
          >
            <ChevronDown size={14} strokeWidth={1.5} />
          </motion.div>
        </div>
        <motion.span
          initial={false}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-3.5 right-3.5 h-px bg-[#C9A84C] origin-left"
          aria-hidden="true"
        />
        {!isActive && (
          <span className="absolute bottom-0 left-3.5 right-3.5 h-px bg-[#F5F2EC]/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" aria-hidden="true" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && expandedOnce && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 bg-[#1A1A1A] border border-[#F5F2EC]/[0.1] rounded-lg shadow-lg z-50"
          >
            <ul className="flex flex-col gap-0 py-2 min-w-[280px]">
              {PLANS_FEATURES.map((feature, i) => (
                <motion.li
                  key={feature.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={feature.href}
                    className="px-4 py-2.5 text-[0.85rem] text-[#F5F2EC]/70 hover:text-[#F5F2EC] hover:bg-[#F5F2EC]/[0.05] transition-colors duration-200 block no-underline"
                  >
                    {feature.logo ? (
                      <span className="flex items-center gap-2">
                        <img src={feature.logo} alt="" className="h-5 w-5 object-contain" />
                        {feature.label}
                      </span>
                    ) : (
                      feature.label
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

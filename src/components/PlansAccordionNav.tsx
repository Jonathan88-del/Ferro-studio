import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const PLANS_FEATURES = [
  { label: "Hosting administrado por Ferro Studio", href: "/planes-hosting" },
  { label: "Gestión y renovación automática del SSL", href: "/planes-ssl" },
  { label: "Soporte por WhatsApp (24–48 hs hábiles)", href: "/planes-whatsapp" },
  { label: "Hasta 3 cambios mensuales al sitio", href: "/planes-cambios" },
];

interface PlansAccordionNavProps {
  isActive: boolean;
  isMobile?: boolean;
}

export function PlansAccordionNav({ isActive, isMobile = false }: PlansAccordionNavProps) {
  const [location] = useLocation();
  const [expandedOnce, setExpandedOnce] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!isActive) {
      // Not on planes page - navigate to it
      window.location.href = "/planes";
    } else {
      // Already on planes page - toggle accordion
      setIsOpen(!isOpen);
      setExpandedOnce(true);
    }
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
      <div className="flex flex-col gap-2">
        <button
          onClick={handleClick}
          className={cn(
            "block font-serif text-[2.2rem] font-light py-2 transition-colors duration-200",
            isActive ? "text-[#F5F2EC]" : "text-[#F5F2EC]/50 hover:text-[#F5F2EC]",
            "text-left flex items-center gap-2"
          )}
        >
          Planes
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={24} strokeWidth={1.5} />
          </motion.div>
        </button>

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
                      {feature.label}
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
    <div className="relative">
      <button
        onClick={handleClick}
        className={cn(
          "ferro-focus relative inline-flex flex-col items-center px-3.5 py-1.5 text-[0.67rem] tracking-[0.16em] uppercase font-sans font-normal transition-colors duration-300 group",
          isActive ? "text-[#F5F2EC]" : "text-[#F5F2EC]/45 hover:text-[#F5F2EC]",
          "gap-1"
        )}
      >
        <div className="flex items-center gap-1.5">
          Planes
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
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
                    {feature.label}
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

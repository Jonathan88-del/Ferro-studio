import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HostingTooltip() {
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
      <Link href="/planes-hosting" className="no-underline">
        <button
          onMouseEnter={() => !isLocked && setIsOpen(true)}
          onMouseLeave={() => !isLocked && setIsOpen(false)}
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
          className={`inline-flex items-center gap-2 text-[0.95rem] font-sans font-light leading-[1.65] transition-colors text-left cursor-help ${
            isLocked ? "text-[#C9A84C] underline" : "hover:text-[#C9A84C]"
          }`}
        >
          Hosting administrado por Ferro Studio
          <HelpCircle size={14} strokeWidth={2} className="shrink-0" />
        </button>
      </Link>

      {/* Tooltip */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -12 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.95, x: -12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => !isLocked && setIsOpen(false)}
          className="absolute left-full top-1/2 -translate-y-1/2 ml-4 z-50 w-80 bg-[#0E0E0E] border border-[#F5F2EC]/[0.1] rounded-lg p-6 pointer-events-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE, delay: 0.05 }}
            className="text-[#F5F2EC]/45 font-sans font-light text-[0.95rem] leading-relaxed"
          >
            Nos encargamos de que tu página esté siempre online y funcionando correctamente. Si surge un problema con el hosting, nosotros lo resolvemos para que vos no tengas que preocuparte.
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}

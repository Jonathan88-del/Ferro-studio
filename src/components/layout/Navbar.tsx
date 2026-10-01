import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ServiceAccordionNav } from "../ServiceAccordionNav";
import { PlansAccordionNav } from "../PlansAccordionNav";

const NAV_LINKS = [
  { label: "Inicio",    href: "/" },
  { label: "Servicio",  href: "/servicios" },
  { label: "Proceso",   href: "/proceso" },
  { label: "Contacto",  href: "/contacto" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1,  y: 0   }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={cn(
          "fixed top-0 inset-x-0 z-50",
          "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "bg-[#0E0E0E]/92 backdrop-blur-[14px] border-b border-[#F5F2EC]/[0.07] shadow-[0_1px_24px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        )}
      >
        <div className="container-ferro flex items-center justify-between h-[68px] md:h-[76px]">

          {/* Logo */}
          <Link href="/" className="ferro-focus flex items-center gap-[10px] no-underline shrink-0">
            <LogoMark />
            <span className="font-serif text-[15px] font-light tracking-[0.22em] text-[#F5F2EC] uppercase select-none">
              Ferro<span className="text-[#C9A84C]">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-[2px]" aria-label="Navegación principal">
            <DesktopLink href="/" active={location === "/"}>
              Inicio
            </DesktopLink>
            <ServiceAccordionNav isActive={location === "/servicios"} />
            <DesktopLink href="/proceso" active={location === "/proceso"}>
              Proceso
            </DesktopLink>
            <PlansAccordionNav isActive={location === "/planes"} />
            <DesktopLink href="/demos" active={location === "/demos"}>
              Demos
            </DesktopLink>
            <DesktopLink href="/contacto" active={location === "/contacto"}>
              Contacto
            </DesktopLink>
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contacto"
              className={cn(
                "hidden md:inline-flex items-center gap-2 ferro-focus no-underline shrink-0",
                "border border-[#C9A84C]/60 px-5 py-2.5",
                "text-[0.65rem] tracking-[0.2em] uppercase font-sans font-normal text-[#C9A84C]",
                "transition-all duration-300",
                "hover:bg-[#C9A84C] hover:text-[#0E0E0E] hover:border-[#C9A84C]",
                "hover:shadow-[0_0_20px_rgba(201,168,76,0.18)]"
              )}
            >
              Solicitar presupuesto
            </Link>

            <motion.button
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((v) => !v)}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="md:hidden ferro-focus text-[#F5F2EC]/60 hover:text-[#F5F2EC] transition-colors duration-200 p-1.5"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span key="close" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }} transition={{ duration: 0.2 }} className="block">
                    <X size={18} strokeWidth={1.5} />
                  </motion.span>
                ) : (
                  <motion.span key="open" initial={{ opacity: 0, rotate: 45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -45 }} transition={{ duration: 0.2 }} className="block">
                    <Menu size={18} strokeWidth={1.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div key="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="fixed inset-0 z-40 bg-[#0E0E0E]/96 backdrop-blur-sm" />

            <motion.nav
              key="mobile-nav"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Menú móvil"
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#0E0E0E] border-l border-[#F5F2EC]/[0.07] flex flex-col px-8 py-10 overflow-y-auto overscroll-contain"
            >
              <div className="flex justify-end mb-12">
                <motion.button aria-label="Cerrar menú" onClick={() => setMenuOpen(false)} whileTap={{ scale: 0.9 }} className="ferro-focus text-[#F5F2EC]/40 hover:text-[#F5F2EC] transition-colors duration-200">
                  <X size={18} strokeWidth={1.5} />
                </motion.button>
              </div>

              <div className="flex flex-col gap-0.5 flex-1 min-h-0 overflow-y-auto">
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}>
                  <Link href="/" className={cn("block font-serif text-[2.2rem] font-light py-2 no-underline transition-colors duration-200", location === "/" ? "text-[#C9A84C]" : "text-[#F5F2EC]/50 hover:text-[#F5F2EC]")}>
                    Inicio
                  </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.06 + 0.065, ease: [0.22, 1, 0.36, 1] }}>
                  <ServiceAccordionNav isActive={location === "/servicios"} isMobile />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.06 + 2 * 0.065, ease: [0.22, 1, 0.36, 1] }}>
                  <Link href="/proceso" className={cn("block font-serif text-[2.2rem] font-light py-2 no-underline transition-colors duration-200", location === "/proceso" ? "text-[#C9A84C]" : "text-[#F5F2EC]/50 hover:text-[#F5F2EC]")}>
                    Proceso
                  </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.06 + 3 * 0.065, ease: [0.22, 1, 0.36, 1] }}>
                  <PlansAccordionNav isActive={location === "/planes"} isMobile />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.06 + 4 * 0.065, ease: [0.22, 1, 0.36, 1] }}>
                  <Link href="/demos" className={cn("block font-serif text-[2.2rem] font-light py-2 no-underline transition-colors duration-200", location === "/demos" ? "text-[#C9A84C]" : "text-[#F5F2EC]/50 hover:text-[#F5F2EC]")}>
                    Demos
                  </Link>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.06 + 5 * 0.065, ease: [0.22, 1, 0.36, 1] }}>
                  <Link href="/contacto" className={cn("block font-serif text-[2.2rem] font-light py-2 no-underline transition-colors duration-200", location === "/contacto" ? "text-[#C9A84C]" : "text-[#F5F2EC]/50 hover:text-[#F5F2EC]")}>
                    Contacto
                  </Link>
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.42 }} className="mt-auto pt-10 border-t border-[#F5F2EC]/[0.08]">
                <Link href="/contacto" className={cn("flex items-center justify-center w-full no-underline border border-[#C9A84C]/60 px-6 py-3.5 text-[0.65rem] tracking-[0.2em] uppercase font-sans text-[#C9A84C] transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#0E0E0E]")}>
                  Solicitar presupuesto
                </Link>
                <p className="mt-6 text-[0.6rem] tracking-widest text-[#F5F2EC]/20 uppercase text-center">
                  Ferro Studio · Tranquilidad digital
                </p>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function DesktopLink({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  const className = cn("ferro-focus relative inline-flex flex-col items-center no-underline px-3.5 py-1.5 text-[0.67rem] tracking-[0.16em] uppercase font-sans font-normal transition-colors duration-300 group", active ? "text-[#F5F2EC]" : "text-[#F5F2EC]/45 hover:text-[#C9A84C]");
  const content = (
    <>
      {children}
      <motion.span initial={false} animate={{ scaleX: active ? 1 : 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="absolute bottom-0 left-3.5 right-3.5 h-px bg-[#C9A84C] origin-left" aria-hidden="true" />
      {!active && <span className="absolute bottom-0 left-3.5 right-3.5 h-px bg-[#F5F2EC]/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" aria-hidden="true" />}
    </>
  );

  return <Link href={href} className={className}>{content}</Link>;
}

function LogoMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M2 2h7v2H4v4h4v2H4v8H2V2z" fill="#C9A84C" fillOpacity="0.95" />
      <path d="M11 2h7v2h-5v4h4v2h-4v4h5v2h-7V2z" fill="#F5F2EC" fillOpacity="0.65" />
    </svg>
  );
}

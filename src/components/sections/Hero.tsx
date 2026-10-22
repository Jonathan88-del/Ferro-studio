import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── Animation presets ─── */
const EASE = [0.22, 1, 0.36, 1] as const;

const scaleY = {
  hidden: { scaleY: 0, opacity: 0 },
  show:   { scaleY: 1, opacity: 1, transition: { duration: 1.1, ease: EASE, delay: 0.15 } },
};

const scaleX = {
  hidden: { scaleX: 0, opacity: 0 },
  show:   { scaleX: 1, opacity: 1, transition: { duration: 1.4, ease: EASE, delay: 0.9 } },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.85, ease: EASE, delay } },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.9, ease: "easeOut", delay } },
});

/* ─── Word-split title ─── */
const TITLE_LINES = [
  { text: "Hacemos crecer tu negocio." },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const titleY  = useTransform(scrollY, [0, 500], [0, -60]);
  const opacity = useTransform(scrollY, [0, 340], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col overflow-hidden bg-[#0E0E0E]"
      aria-label="Hero"
    >
      {/* ── Background: dot grid ── */}
      <DotGrid />
      {/* ── Background: warm radial glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 46%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />
      {/* ── Decorative: top-right corner label ── */}
      <motion.div
        variants={fadeIn(0.5)}
        initial="hidden"
        animate="show"
        className="absolute top-[84px] right-[max(1.5rem,env(safe-area-inset-right))] md:right-[3rem] lg:right-[5rem] flex flex-col items-end gap-1 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#F5F2EC]/20 font-sans">
          Est. 2024
        </span>
        <span className="w-[1px] h-8 bg-[#C9A84C]/25 block ml-auto" />
      </motion.div>
      {/* ── Decorative: left coordinates (rotated) ── */}
      <motion.div
        variants={fadeIn(1.1)}
        initial="hidden"
        animate="show"
        className="absolute left-[max(1rem,env(safe-area-inset-left))] md:left-[1.5rem] top-1/2 -translate-y-1/2 pointer-events-none hidden md:flex items-center"
        aria-hidden="true"
        style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
      >
        <span className="text-[8px] tracking-[0.22em] uppercase text-[#F5F2EC]/16 font-sans">
          28.1°N · 15.4°W
        </span>
      </motion.div>
      {/* ── Content ── */}
      <motion.div
        style={{ y: titleY, opacity }}
        className="flex-1 flex flex-col items-center justify-center text-center container-ferro pt-[100px] pb-[80px]"
      >
        {/* Gold hairline dropping from top */}
        <motion.span
          variants={scaleY}
          initial="hidden"
          animate="show"
          className="block w-px h-14 origin-top mb-6"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.5))" }}
          aria-hidden="true"
        />

        {/* Eyebrow — flanked by gold lines */}
        <motion.div
          variants={fadeIn(0.22)}
          initial="hidden"
          animate="show"
          className="flex items-center gap-4 mb-12 md:mb-16"
        >
          <span className="w-6 h-px bg-[#C9A84C]/65 hidden sm:block" />
          <span className="tracking-[0.3em] uppercase text-[#C9A84C]/80 font-sans text-[10px] md:text-[11px]">Ferro Std. — Estudio Digital</span>
          <span className="w-6 h-px bg-[#C9A84C]/65 hidden sm:block" />
        </motion.div>

        {/* Title */}
        <div className="mb-10 md:mb-12 overflow-hidden w-full">
          {TITLE_LINES.map((line, i) => (
            <motion.div
              key={i}
              variants={fadeUp(0.3 + i * 0.1)}
              initial="hidden"
              animate="show"
              className="overflow-hidden"
            >
              <h1
                className={cn(
                  "font-serif font-light leading-[0.96] tracking-[-0.025em] text-[#F5F2EC]",
                  i === 1 ? "whitespace-nowrap text-[clamp(1.75rem,5vw,70px)]" : "text-[70px]"
                )}
              >
                {line.text}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Gold divider between title and subtitle */}
        <motion.span
          variants={fadeIn(0.72)}
          initial="hidden"
          animate="show"
          className="block w-12 h-px bg-[#C9A84C]/40 mb-8 md:mb-10"
          aria-hidden="true"
        />

        {/* Subtitle */}
        <motion.p
          variants={fadeUp(0.78)}
          initial="hidden"
          animate="show"
          className="text-[15px] text-[#F5F2EC]/55 font-sans font-light leading-[1.8] max-w-[440px] mb-10 md:mb-12"
        >
          Diseñamos y desarrollamos páginas web profesionales, seguras y confiables para tus clientes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp(0.9)}
          initial="hidden"
          animate="show"
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Gold CTA */}
          <Link href="/contacto" className="no-underline">
            <motion.span
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE }}
              className={cn(
                "inline-flex items-center gap-3",
                "bg-[#C9A84C] text-[#0E0E0E]",
                "px-8 py-[15px]",
                "text-[10px] tracking-[0.2em] uppercase font-sans font-medium",
                "transition-all duration-300",
                "hover:bg-[#D9BC72] hover:shadow-[0_8px_32px_rgba(201,168,76,0.22)]",
                "cursor-pointer"
              )}
            >
              Solicitar presupuesto
              <ArrowRight size={13} strokeWidth={2} />
            </motion.span>
          </Link>

          {/* Ghost CTA */}
          <Link href="/servicios" className="no-underline">
            <motion.span
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE }}
              className={cn(
                "inline-flex items-center gap-3",
                "border border-[#F5F2EC]/18",
                "px-8 py-[15px]",
                "text-[10px] tracking-[0.2em] uppercase font-sans font-light",
                "text-[#F5F2EC]/55",
                "transition-all duration-300",
                "hover:border-[#F5F2EC]/40 hover:text-[#F5F2EC]",
                "cursor-pointer"
              )}
            >
              Ver servicios
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
      {/* ── Bottom divider + scroll cue ── */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none">
        {/* Thin gold rule */}
        <motion.div
          variants={scaleX}
          initial="hidden"
          animate="show"
          className="h-px bg-[#C9A84C]/18 origin-left mx-[max(1.5rem,env(safe-area-inset-left))] md:mx-[3rem] lg:mx-[5rem] mb-6"
          aria-hidden="true"
        />

        {/* Scroll indicator — centered */}
        <motion.div
          variants={fadeIn(1.2)}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-3 mb-7"
          aria-hidden="true"
        >
          <span className="w-px h-3.5 bg-[#F5F2EC]/12" />
          <span className="text-[8px] tracking-[0.28em] uppercase text-[#F5F2EC]/25 font-sans">
            Scroll
          </span>
          <span className="w-px h-3.5 bg-[#F5F2EC]/12" />
        </motion.div>
      </div>
    </section>
  );
}

/* ── Faint dot grid background ── */
function DotGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(245,242,236,0.035) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    />
  );
}

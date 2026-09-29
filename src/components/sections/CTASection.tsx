import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE, delay } },
});

export default function CTASection() {
  return (
    <section
      className="relative bg-[#0E0E0E] min-h-[90svh] flex flex-col items-center justify-center overflow-hidden py-28 md:pt-20 md:pb-36"
      aria-labelledby="cta-heading"
    >
      {/* ── Geometric background ── */}
      <GeometricBg />
      {/* ── Dot grid ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(245,242,236,0.028) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* ── Top rule ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.3, ease: EASE }}
        className="absolute top-0 left-[max(1.5rem,env(safe-area-inset-left))] right-[max(1.5rem,env(safe-area-inset-right))] md:left-[3rem] md:right-[3rem] lg:left-[5rem] lg:right-[5rem] h-px bg-[#F5F2EC]/[0.07] origin-left"
        aria-hidden="true"
      />
      {/* ── Content ── */}
      <div className="container-ferro relative z-10 flex flex-col items-center text-center">

        {/* Eyebrow */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex items-center gap-4 mb-12 md:mb-16"
        >
          <span className="w-5 h-px bg-[#C9A84C]/70" aria-hidden="true" />
          <span className="tracking-[0.28em] uppercase font-sans text-[#C9A84C]/80 text-[20px]">
            Ferro Studio
          </span>
          <span className="w-5 h-px bg-[#C9A84C]/70" aria-hidden="true" />
        </motion.div>

        {/* Title */}
        <motion.h2
          id="cta-heading"
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="font-serif font-light text-[68px] leading-[1.02] tracking-[-0.02em] text-[#F5F2EC] max-w-4xl mb-10 md:mb-12"
        >
          ¿Listo para dar el siguiente paso?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="text-[#F5F2EC]/42 font-sans font-light max-w-[440px] mb-14 md:mb-16 text-[18px]"
        >
          Construyamos una presencia digital que represente la calidad de tu
          empresa y genere nuevas oportunidades de negocio.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
        >
          {/* Gold primary */}
          <Link href="/contacto" className="no-underline">
            <motion.span
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE }}
              className={cn(
                "inline-flex items-center gap-3 cursor-pointer",
                "bg-[#C9A84C] text-[#0E0E0E]",
                "px-8 py-[15px]",
                "text-[0.65rem] tracking-[0.2em] uppercase font-sans font-medium",
                "transition-all duration-300",
                "hover:bg-[#D9BC72] hover:shadow-[0_10px_36px_rgba(201,168,76,0.22)]"
              )}
            >
              Solicitar presupuesto
              <ArrowRight size={13} strokeWidth={2} />
            </motion.span>
          </Link>

        </motion.div>

        {/* Response time note */}
        <motion.p
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="tracking-[0.14em] text-[#F5F2EC]/22 font-sans text-[18px] font-light opacity-[1]"
        >
          Respondemos normalmente en menos de 24 horas hábiles.
        </motion.p>

      </div>
      {/* ── Bottom brand mark ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 tracking-[0.3em] uppercase font-sans text-[#F5F2EC]/12 select-none text-[17px]"
      >
        Ferro Studio · Tranquilidad digital
      </motion.div>
    </section>
  );
}

/* ── Subtle geometric SVG background ── */
function GeometricBg() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 700"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Large circle — centered, very faint */}
      <motion.circle
        cx="500" cy="350" r="280"
        fill="none" stroke="#F5F2EC" strokeWidth="0.6" strokeOpacity="0.05"
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: EASE }}
        style={{ transformOrigin: "500px 350px" }}
      />

      {/* Outer ring */}
      <motion.circle
        cx="500" cy="350" r="400"
        fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.05"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: EASE, delay: 0.15 }}
        style={{ transformOrigin: "500px 350px" }}
      />

      {/* Horizontal line */}
      <motion.line
        x1="0" y1="350" x2="1000" y2="350"
        stroke="#F5F2EC" strokeWidth="0.5" strokeOpacity="0.04"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: EASE, delay: 0.3 }}
      />

      {/* Vertical line */}
      <motion.line
        x1="500" y1="0" x2="500" y2="700"
        stroke="#F5F2EC" strokeWidth="0.5" strokeOpacity="0.03"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: EASE, delay: 0.45 }}
      />

      {/* Top-left corner bracket */}
      <motion.path
        d="M 40,40 L 40,110 M 40,40 L 110,40"
        fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.14"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
      />

      {/* Bottom-right corner bracket */}
      <motion.path
        d="M 960,660 L 960,590 M 960,660 L 890,660"
        fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeOpacity="0.14"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
      />
    </svg>
  );
}

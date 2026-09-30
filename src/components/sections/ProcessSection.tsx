import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, FileText, Code2, ScanLine, Globe, HeartHandshake } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    number: "01",
    title: "Briefing inicial",
    icon: MessageSquare,
    description:
      "Reunión de diagnóstico para entender su negocio, su público y sus objetivos concretos.\u00A0",
    note: "30–45 minutos · Sin costo",
  },
  {
    number: "02",
    title: "Propuesta personalizada",
    icon: FileText,
    description:
      "Dentro de 24–48 horas recibís una propuesta detallada en PDF con diagnóstico, solución recomendada, alcance exacto, plazo y precio. La enviamos por email o whatsapp.\u00A0",
    note: "24–48 hs · Sin anticipo",
  },
  {
    number: "03",
    title: "Diseño y desarrollo",
    icon: Code2,
    description:
      "Ferro Studio trabaja con la propuesta aprobada. El cliente entrega contenido propio en los primeros 3 días hábiles; si no, procedemos con recursos propios.\u00A0",
    note: "Según plazo del proyecto",
  },
  {
    number: "04",
    title: "Revisión del cliente",
    icon: ScanLine,
    description:
      "El cliente tiene hasta 5 rondas de cambios incluidas. Cada ronda tiene un plazo máximo de 5 días hábiles para responder — pasado ese tiempo, se considera aprobado.",
  },
  {
    number: "05",
    title: "Publicación en entorno de prueba",
    icon: Globe,
    description:
      "El sitio se publica en un dominio temporal de Ferro Studio. El cliente lo ve online completo antes de pagar.\u00A0",
  },
  {
    number: "06",
    title: "Entrega y soporte",
    icon: HeartHandshake,
    description:
      "El sitio migra al dominio definitivo del cliente.\u00A0Solo entonces se emite la factura y se cobra el 100% del proyecto.\u00A0Comienza el período de soporte post-entrega: 30 días (Landing), 60 días (Institucional) o 90 días (CMS). Sin sorpresas.",
  },
] as const;

export default function ProcessSection() {
  return (
    <section
      className="relative bg-[#0E0E0E] pt-16 md:pt-20 lg:pt-24 pb-[40px] overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(245,242,236,0.03) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="container-ferro relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-5 h-px bg-[#C9A84C]/70" />
              <span className="tracking-[0.26em] uppercase font-sans text-[#C9A84C]/80 text-[20px]">Metodología</span>
            </div>
            <h2
              id="process-heading"
              className="font-serif font-light text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.05] tracking-[-0.015em] text-[#F5F2EC]"
              style={{ fontSize: "50px !important" }}
            >
              Un proceso claro.<br />
              Sin sorpresas.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="lg:self-end"
          >
            <div className="mt-4 flex flex-col gap-3">
              {[
                "Sin anticipo — cobro 100% post-entrega",
                "El cliente aprueba en staging antes de pagar",
                "Transparencia total en cada etapa",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="text-[#C9A84C]/60 text-[0.6rem]">✓</span>
                  <span className="text-[#F5F2EC]/38 font-sans font-light text-[22px]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <TimelineLine count={STEPS.length} />
          <div className="flex flex-col">
            {STEPS.map((step, i) => (
              <ProcessStep key={step.number} step={step} index={i} isLast={i === STEPS.length - 1} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function TimelineLine({ count }: { count: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute left-[19px] md:left-[27px] top-3 bottom-3 w-px bg-[#F5F2EC]/[0.07]"
    >
      <motion.span style={{ scaleY, transformOrigin: "top" }} className="absolute inset-0 bg-[#C9A84C]/30" />
    </div>
  );
}

function ProcessStep({
  step,
  index,
  isLast,
}: {
  step: (typeof STEPS)[number];
  index: number;
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.05 + index * 0.07 }}
      className={cn(
        "group relative grid grid-cols-[62px_1fr] md:grid-cols-[88px_1fr] gap-10 md:gap-14",
        !isLast && "pb-12 md:pb-16"
      )}
    >
      <div className="flex flex-col items-center pt-0.5">
        <div
          className={cn(
            "relative z-10 w-[58px] h-[58px] md:w-[82px] md:h-[82px]",
            "flex items-center justify-center shrink-0",
            "border border-[#F5F2EC]/[0.1] bg-[#0E0E0E]",
            "transition-all duration-500",
            "group-hover:border-[#C9A84C]/40 group-hover:bg-[#C9A84C]/[0.04]"
          )}
        >
          <Icon
            size={24}
            strokeWidth={1.2}
            className="text-[#F5F2EC]/30 transition-colors duration-400 group-hover:text-[#C9A84C]/80"
          />
        </div>
      </div>

      <div className="pb-1">
        <div className="flex items-baseline gap-6 md:gap-7 mb-5">
          <span
            className="font-serif text-[3.8rem] md:text-[5rem] font-light leading-none text-[#F5F2EC]/[0.07] select-none shrink-0 transition-colors duration-400 group-hover:text-[#C9A84C]/20"
            aria-hidden="true"
          >
            {step.number}
          </span>
          <h3 className="font-serif text-[1.95rem] md:text-[2.3rem] font-light text-[#F5F2EC] leading-tight tracking-[-0.01em]" style={{ fontSize: "37px !important" }}>
            {step.title}
          </h3>
        </div>

        <p className="text-[1.1rem] text-[#F5F2EC]/40 font-sans font-light leading-[1.85] max-w-[620px] mb-5" style={{ fontSize: "18px" }}>
          {step.description}
        </p>

        {"note" in step && (
          <span className="inline-flex items-center text-[0.82rem] tracking-[0.18em] uppercase font-sans text-[#C9A84C]/55" style={{ fontSize: "14px" }}>
            {step.note}
          </span>
        )}

        {!isLast && (
          <div className="mt-8 md:mt-10 h-px bg-[#F5F2EC]/[0.05] w-full" aria-hidden="true" />
        )}
      </div>
    </motion.div>
  );
}

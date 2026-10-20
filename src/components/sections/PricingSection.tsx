import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 26 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.78, ease: EASE, delay } },
});

/* ── Monthly maintenance plans ── */
interface Plan {
  id: string;
  name: string;
  price: string;
  tagline: string;
  items: string[];
  cta: string;
  featured: boolean;
}

const PLANS: Plan[] = [
  {
    id: "presencia",
    name: "Plan Presencia",
    price: "$20.000 ARS/cuatrimestral",
    tagline: "Ideal para mantener su presencia digital segura y siempre disponible.",
    items: [
      "Hosting administrado",
      "Certificado SSL renovado automáticamente",
      "Backups semanales",
      "Monitoreo 24/7",
      "Soporte por WhatsApp (24–48 hs hábiles)",
    ],
    cta: "Solicitar presupuesto",
    featured: false,
  },
  {
    id: "activo",
    name: "Plan Activo",
    price: "$25.000 ARS/cuatrimestral",
    tagline: "Para empresas que necesitan un sitio siempre actualizado.",
    items: [
      "Todo lo incluido en Plan Presencia",
      "Hasta 3 cambios mensuales al sitio",
      "Prioridad de respuesta (24 hs hábiles)",
      "1 publicación mensual de blog",
    ],
    cta: "Solicitar presupuesto",
    featured: true,
  },
  {
    id: "total",
    name: "Plan Total",
    price: "$30.000 ARS/cuatrimestral",
    tagline: "La solución más completa. Soporte prioritario,",
    items: [
      "Todo lo incluido en Plan Activo",
      "Hasta 6 cambios mensuales al sitio",
      "Soporte prioritario (respuesta en 4–8 hs hábiles)",
    ],
    cta: "Solicitar presupuesto",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <div>
      <section
        className="relative bg-[#0E0E0E] pt-32 pb-28 md:pt-40 md:pb-32 lg:pt-48 lg:pb-36 overflow-hidden"
        aria-labelledby="pricing-heading"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "radial-gradient(circle, rgba(245,242,236,0.03) 1px, transparent 1px)", backgroundSize: "36px 36px" }}
        />

        <div className="container-ferro relative z-10">
          <div className="max-w-3xl mb-8 md:mb-12">
            <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
              <div className="flex items-center gap-4 mb-10">
                <span className="w-7 h-px bg-[#C9A84C]/70" />
                <span className="tracking-[0.26em] uppercase font-sans text-[#C9A84C]/80 text-[22px] md:text-[24px]">Mantenimiento Cuatrimestral</span>
              </div>
              <h2 id="pricing-heading" className="font-serif font-light text-[clamp(2.7rem,6.5vw,4rem)] leading-[1.05] tracking-[-0.015em] text-[#F5F2EC] mb-9">
                Su socio digital permanente.
              </h2>
            </motion.div>
            <motion.p variants={fadeUp(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="max-w-3xl text-[#F5F2EC]/42 font-sans font-light text-[22px] md:text-[24px] leading-[1.8]">
              Garantiza que su sitio funcione siempre, esté actualizado y tenga soporte técnico disponible. Requiere haber contratado un proyecto web previamente.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 md:items-stretch">
            {PLANS.map((plan, i) => (
              <PlanCard key={plan.id} plan={plan} index={i} />
            ))}
          </div>

          <motion.p
            variants={fadeUp(0.45)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="mt-16 text-center text-[#F5F2EC]/22 font-sans font-light tracking-wide text-[20px] md:text-[22px]"
          >
            Pago cuatrimestral por adelantado · Transferencia bancaria o Mercado Pago · Sin contratos de largo plazo
          </motion.p>
        </div>
      </section>
    </div>
  );
}

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const delay = 0.08 + index * 0.1;

  return (
    <motion.article
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      whileHover="hover"
      className={cn(
        "group relative flex flex-col",
        "px-9 py-16 md:px-10 md:py-20",
        "transition-colors duration-500",
        plan.featured ? "bg-[#F5F2EC]" : "bg-[#0E0E0E] hover:bg-[#0f0f0f]"
      )}
    >
      {plan.featured && (
        <span className="absolute inset-x-0 top-0 h-[1.5px] bg-[#C9A84C]" aria-hidden="true" />
      )}
      {!plan.featured && (
        <motion.span
          variants={{ hover: { scaleX: 1 }, initial: { scaleX: 0 } }}
          initial="initial"
          transition={{ duration: 0.35, ease: EASE }}
          className="absolute inset-x-0 top-0 h-px bg-[#C9A84C]/45 origin-left"
          aria-hidden="true"
        />
      )}

      {plan.featured && (
        <div className="flex items-center gap-3 mb-10">
          <span className="w-2 h-2 rounded-full bg-[#C9A84C]" aria-hidden="true" />
          <span className="text-[1rem] tracking-[0.24em] uppercase font-sans text-[#C9A84C]">Más contratado</span>
        </div>
      )}

      <div className={cn("mb-5", !plan.featured && "mt-[42px]")}>
        <h3 className={cn("font-serif text-[2rem] md:text-[2.125rem] font-light leading-tight tracking-[-0.01em]", plan.featured ? "text-[#0E0E0E]" : "text-[#F5F2EC]")}>
          {plan.name}
        </h3>
      </div>

      <p className={cn("font-serif text-[1.5rem] font-light mb-8", plan.featured ? "text-[#0E0E0E]/70" : "text-[#C9A84C]/70")}>
        {plan.price}
      </p>

      <p className={cn("text-[1.25rem] font-sans font-light leading-[1.8] mb-10", plan.featured ? "text-[#0E0E0E]/50" : "text-[#F5F2EC]/38")}>
        {plan.tagline}
      </p>

      <div className={cn("h-px mb-10", plan.featured ? "bg-[#0E0E0E]/10" : "bg-[#F5F2EC]/[0.08]")} aria-hidden="true" />

      <ul className="flex flex-col gap-6 flex-1 mb-14">
        {plan.items.map((item) => (
          <li key={item} className="flex items-start gap-4">
            <Check
              size={16}
              strokeWidth={2}
              className={cn("shrink-0 mt-[5px]", plan.featured ? "text-[#C9A84C]" : "text-[#C9A84C]/60")}
              aria-hidden="true"
            />
            <span className={cn("text-[1.125rem] md:text-[1.25rem] font-sans font-light leading-[1.7]", plan.featured ? "text-[#0E0E0E]/65" : "text-[#F5F2EC]/45")}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <Link href="/contacto" className="no-underline mt-auto">
        <motion.span
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.18, ease: EASE }}
          className={cn(
            "flex items-center justify-center gap-2.5 w-full",
            "text-[0.85rem] md:text-[0.9rem] tracking-[0.2em] uppercase font-sans",
            "py-5 px-8 md:px-10",
            "transition-all duration-300",
            plan.featured
              ? "bg-[#0E0E0E] text-[#F5F2EC] hover:bg-[#C9A84C] hover:text-[#0E0E0E] hover:shadow-[0_8px_28px_rgba(201,168,76,0.18)]"
              : "border border-[#F5F2EC]/18 text-[#F5F2EC]/55 hover:border-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0E0E0E] hover:shadow-[0_8px_28px_rgba(201,168,76,0.18)]"
          )}
        >
          {plan.cta}
          <ArrowRight size={16} strokeWidth={1.8} />
        </motion.span>
      </Link>
    </motion.article>
  );
}

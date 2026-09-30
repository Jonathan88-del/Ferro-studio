import { motion } from "framer-motion";
import { Scale, Home, Compass, Stethoscope } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE, delay } },
});

const INDUSTRIES = [
  {
    icon: Scale,
    title: "Estudios Jurídicos y contadores",
    description:
      "Sitios que transmiten autoridad y seriedad. Genera confianza desde el primer contacto.",
    recommend: "Sitio Institucional\u00A0",
    channel: "LinkedIn + referidos",
  },
  {
    icon: Home,
    title: "Inmobiliarias",
    description:
      "Alta rotación de contenido. Catálogos de propiedades con panel de administración propio. El Plan Total es ideal por la necesidad de cambios constantes y posicionamiento local.",
    recommend: "Sitio con Catálogo\u00A0",
    channel: "Instagram + Google Maps",
  },
  {
    icon: Compass,
    title: "Arquitectos y Diseñadores",
    description:
      "Muy visuales. El sitio debe reflejar su estética antes de mostrar servicios. Portfolios cuidados que destacan cada proyecto con elegancia, pensados para diferenciarse.",
    recommend: "Sitio Institucional\u00A0",
    channel: "Instagram + Behance",
  },
  {
    icon: Stethoscope,
    title: "Clínicas y Médicos",
    description:
      "Requieren énfasis en credibilidad y profesionalismo. El SEO local es muy valioso para captar pacientes por Google.",
    recommend: "Sitio Institucional\u00A0",
    channel: "Google + referidos médicos",
  },
] as const;

export default function IndustrySection() {
  return (
    <section
      className="relative bg-[#F5F2EC] py-[50px] md:py-[50px] lg:py-44 overflow-hidden"
      aria-labelledby="industry-heading"
    >
      <span
        aria-hidden="true"
        className="hidden lg:block absolute left-[5rem] top-0 bottom-0 w-px bg-[#0E0E0E]/[0.05]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(14,14,14,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container-ferro relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-24 mb-20 md:mb-28">
          <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-5 h-px bg-[#C9A84C]" />
              <span className="tracking-[0.26em] uppercase font-sans text-[#C9A84C] text-[20px]">Rubros</span>
            </div>
            <h2
              id="industry-heading"
              className="font-serif font-light text-[45px] leading-[1.06] tracking-[-0.015em] text-[#0E0E0E]"
            >
              Especialistas en empresas que viven de la confianza.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="text-[#0E0E0E]/50 font-sans font-light lg:self-end text-[24px]"
          >
            Tu presencia digital es una inversión, no un gasto.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0E0E0E]/[0.08]">
          {INDUSTRIES.map((industry, i) => (
            <IndustryCard key={industry.title} industry={industry} index={i} />
          ))}
        </div>

        <motion.div
          variants={fadeUp(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-20 md:mt-24 flex flex-col sm:flex-row sm:items-center justify-between gap-8"
        >
          <p className="text-[1rem] text-[#0E0E0E]/45 font-sans font-light max-w-lg leading-relaxed">
            ¿Su rubro no está en la lista? Trabajamos con cualquier sector donde la imagen y la confianza sean clave.
          </p>
          <Link
            href="/contacto"
            className={cn(
              "inline-flex items-center gap-2 no-underline shrink-0",
              "text-[13px] tracking-[0.2em] uppercase font-sans",
              "text-[#0E0E0E]/65 hover:text-[#C9A84C]",
              "border-b border-[#0E0E0E]/20 hover:border-[#C9A84C]/50 pb-1",
              "transition-all duration-300"
            )}
          >
            Hablemos de su proyecto →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

function IndustryCard({
  industry,
  index,
}: {
  industry: (typeof INDUSTRIES)[number];
  index: number;
}) {
  const Icon = industry.icon;
  const delay = 0.06 + index * 0.08;

  return (
    <motion.article
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-30px" }}
      whileHover="hover"
      className={cn(
        "group relative bg-[#F5F2EC]",
        "flex flex-col gap-7",
        "px-10 py-12 md:px-14 md:py-14",
        "transition-colors duration-500",
        "hover:bg-white"
      )}
    >
      <motion.span
        variants={{ hover: { scaleX: 1 }, initial: { scaleX: 0 } }}
        initial="initial"
        transition={{ duration: 0.38, ease: EASE }}
        className="absolute inset-x-0 top-0 h-[1.5px] bg-[#C9A84C]/60 origin-left"
        aria-hidden="true"
      />

      <div
        className={cn(
          "w-14 h-14 flex items-center justify-center",
          "border border-[#0E0E0E]/[0.12]",
          "transition-all duration-400",
          "group-hover:border-[#C9A84C]/40 group-hover:bg-[#C9A84C]/[0.04]"
        )}
      >
        <Icon
          size={22}
          strokeWidth={1.25}
          className="text-[#0E0E0E]/45 transition-colors duration-300 group-hover:text-[#C9A84C]"
        />
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <h3 className="font-serif text-[26px] font-light text-[#0E0E0E] leading-tight tracking-[-0.01em]">
          {industry.title}
        </h3>
        <p className="text-[1rem] text-[#0E0E0E]/45 font-sans font-light leading-[1.8]">
          {industry.description}
        </p>
      </div>

      <div className="pt-5 border-t border-[#0E0E0E]/[0.07] mt-auto">
        <p className="text-[12px] tracking-[0.16em] uppercase font-sans text-[#C9A84C]/90 mb-2">Solución recomendada</p>
        <p className="text-[15px] font-sans font-light text-[#0E0E0E]/75">{industry.recommend}</p>
      </div>
    </motion.article>
  );
}

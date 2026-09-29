import { motion } from "framer-motion";
import { Shield, Eye, Handshake, Zap, BarChart3, BadgeCheck, FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE, delay } },
});

const VALUES = [
  {
    number: "01",
    icon: Shield,
    title: "Calidad sin concesiones",
    description:
      "Cada proyecto es el más inportante.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Transparencia total",
    description:
      "El cliente sabe qué estamos haciendo, por qué y cuánto cuesta. Sin letra chica, sin sorpresas, sin anticipo.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Relación de largo plazo",
    description:
      "El sitio web es el inicio. El objetivo es ser el socio digital permanente de cada cliente, no un proveedor ocasional.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Simplicidad funcional",
    description:
      "Soluciones simples que funcionan mejor que soluciones complejas que nadie entiende.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Resultados medibles",
    description:
      "No vendemos diseño bonito. Vendemos más clientes, más confianza y más negocio.\u00a0",
  },
  {
    number: "06",
    icon: BadgeCheck,
    title: "Sin anticipo",
    description:
      "Cobramos el 100% del proyecto después de la entrega y aprobación. El cliente ve su sitio funcionando antes de pagar.",
  },
] as const;

export default function WhyFerroSection() {
  return (
    <section
      className="relative bg-[#F5F2EC] pt-20 pb-[70px] overflow-hidden"
      aria-labelledby="why-ferro-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(14,14,14,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container-ferro relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-24 mb-20 md:mb-28 text-[20px]">
          <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-5 h-px bg-[#C9A84C]" />
              <span className="tracking-[0.26em] uppercase font-sans text-[#C9A84C] text-[20px]">Por qué Ferro Studio</span>
            </div>
            <h2
              id="why-ferro-heading"
              className="font-serif font-light text-[44px] leading-[1.06] tracking-[-0.015em] text-[#0E0E0E]"
            >
              Existimos para que los pequeños negocios se vean tan profesionales como los grandes.
            </h2>
          </motion.div>

          <motion.div variants={fadeUp(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="lg:self-end">
            <p className="text-[#0E0E0E]/48 font-sans font-light text-[24px]">
              Un estudio jurídico, una clínica, una inmobiliaria o un contador tienen el mismo derecho a verse profesionales, transmitir confianza y conseguir clientes a través de internet.
            </p>
            <p className="text-[#0E0E0E]/35 font-sans font-light mt-4 italic text-[18px]">
              "Nos ocupamos completamente de su presencia online para que usted pueda enfocarse en hacer crecer su negocio."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0E0E0E]/[0.08]">
          {VALUES.map((value, i) => (
            <ValueBlock key={value.number} value={value} index={i} />
          ))}
        </div>

        {/* Code ownership guarantee */}
        <motion.div
          variants={fadeUp(0.35)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-px bg-[#0E0E0E] px-12 py-14 md:px-16 md:py-16 flex flex-col md:flex-row md:items-center gap-10 md:gap-16"
        >
          <div className="shrink-0 w-16 h-16 flex items-center justify-center border border-[#C9A84C]/30">
            <FolderOpen size={28} strokeWidth={1.25} className="text-[#C9A84C]" />
          </div>

          <div className="flex-1">
            <p className="text-[10px] tracking-[0.26em] uppercase font-sans text-[#C9A84C]/80 mb-3">
              Su código, siempre
            </p>
            <h3 className="font-serif text-[26px] md:text-[30px] font-light text-[#F5F2EC] leading-tight tracking-[-0.01em] mb-4">
              Si algún día decide trabajar con otra persona, le entregamos el código completo de su sitio.
            </h3>
            <p className="text-[15px] text-[#F5F2EC]/40 font-sans font-light leading-[1.8]">
              El sitio es suyo. No lo retenemos como forma de fidelización. Si en algún momento quiere cambiar de proveedor, recibirá el código fuente completo para continuar con quien desee, sin restricciones ni condiciones.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function ValueBlock({
  value,
  index,
}: {
  value: (typeof VALUES)[number];
  index: number;
}) {
  const Icon = value.icon;
  const delay = 0.06 + index * 0.08;

  return (
    <motion.div
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-30px" }}
      whileHover="hover"
      className={cn(
        "group relative bg-[#F5F2EC]",
        "flex flex-col gap-10",
        "px-12 py-14 md:px-14 md:py-20",
        "transition-colors duration-500",
        "hover:bg-white"
      )}
    >
      <motion.span
        variants={{ hover: { scaleX: 1 }, initial: { scaleX: 0 } }}
        initial="initial"
        transition={{ duration: 0.36, ease: EASE }}
        className="absolute inset-x-0 top-0 h-[1.5px] bg-[#C9A84C]/55 origin-left"
        aria-hidden="true"
      />

      <div className="flex items-center justify-between">
        <span
          className="font-serif text-[7rem] font-light leading-none text-[#0E0E0E]/[0.22] select-none transition-colors duration-400 group-hover:text-[#C9A84C]/40"
          aria-hidden="true"
        >
          {value.number}
        </span>
        <div
          className={cn(
            "w-20 h-20 flex items-center justify-center",
            "border border-[#0E0E0E]/[0.12]",
            "transition-all duration-400",
            "group-hover:border-[#C9A84C]/40 group-hover:bg-[#C9A84C]/[0.04]"
          )}
        >
          <Icon
            size={36}
            strokeWidth={1.25}
            className="text-[#0E0E0E]/35 transition-colors duration-300 group-hover:text-[#C9A84C]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="font-serif text-[38px] font-light text-[#0E0E0E] leading-tight tracking-[-0.01em]">
          {value.title}
        </h3>
        <p className="text-[18px] text-[#0E0E0E]/45 font-sans font-light leading-[1.82]">
          {value.description}
        </p>
      </div>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import { MousePointerClick, Building2, LayoutGrid, Pencil, MapPin, Phone, Bookmark, Globe2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay } },
});

const SERVICES = [
  {
    icon: MousePointerClick,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop",
    title: "Landing Page",
    price: "$150.000 ARS",
    delivery: "7–10 días hábiles",
    description:
      "Una sola página diseñada para captar clientes. Toda la información se presenta en una única página que el usuario recorre haciendo scroll, guiándolo hacia un contacto.",
    includes: [
      "Diseño personalizado",
      "Hasta 6 secciones",
      "Redacción de textos incluida",
      "Formulario + WhatsApp flotante",
      "SEO básico",
      "Adaptada a Android, tablet, notebook y más",
      "30 días del Plan Total Gratis",
    ],
  },
  {
    icon: Building2,
    image: "https://images.unsplash.com/photo-1553525245-9d0d32b61e75?w=800&q=80&auto=format&fit=crop",
    title: "Sitio Institucional",
    price: "$250.000 ARS",
    delivery: "12–18 días hábiles",
    description:
      "Una web más completa que presenta la empresa, sus servicios, proyectos y trayectoria. Tiene varias, permitiendo al visitante conocer en profundidad la marca, generar confianza y encontrar toda la información necesaria sobre el negocio.",
    includes: [
      "Todo lo de Landing Page",
      "Hasta 10 páginas independientes",
      "Google Analytics",
      "Search Console",
      "60 días del Plan Total Gratis",
    ],
  },
  {
    icon: LayoutGrid,
    image: "https://images.unsplash.com/photo-1558367853-fd760bbe56b6?w=800&q=80&auto=format&fit=crop",
    title: "Sitio con Catálogo / CMS",
    price: "$420.000 ARS",
    delivery: "18–25 días hábiles",
    description:
      "Sitio con panel de administración para que el cliente cargue su propio contenido: propiedades (inmobiliarias), vehículos, productos o servicios. Incluye capacitación y 10 fichas de ejemplo cargadas.",
    includes: [
      "Todo lo de Sitio Institucional",
      "Panel de administración propio",
      "Ideal para inmobiliarias y concesionarias",
      "Categorías y etiquetas incluidas",
      "1 sesión de capacitación",
      "90 días del Plan Total Gratis",
    ],
    soon: true,
  },
  {
    icon: Pencil,
    image: "https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?w=800&q=80&auto=format&fit=crop",
    title: "Rediseño Web",
    price: "$150.000 ARS",
    delivery: "10–15 días hábiles",
    description:
      "Modernización de un sitio existente que ya no representa al negocio.",
    includes: [
      "Análisis del sitio actual",
      "Nuevo diseño visual completo",
      "Migración de contenido existente",
      "Optimización de velocidad",
      "SEO conservando posicionamiento",
      "Adaptada a Android, tablet, notebook y más",
      "30 días del Plan Total Gratis",
    ],
  },
] as const;

export default function Services() {
  return (
    <section
      className="relative bg-[#0E0E0E] pt-10 pb-16 lg:pt-16 lg:pb-24"
      aria-labelledby="services-heading"
    >
      <div className="container-ferro">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
            <p className="mb-4 font-sans text-[12px] font-medium uppercase tracking-[0.2em] text-[#C9A84C]">
              Nuestros servicios
            </p>
            <h2
              id="services-heading"
              className="max-w-[560px] font-sans text-[36px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#F5F2EC] md:text-[44px]"
            >
              Soluciones para cada etapa de su negocio.
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="max-w-[420px] font-sans text-[15px] font-light leading-[1.7] text-[#F5F2EC]/55 lg:mt-2"
          >
            Cada proyecto es único y tratado con atención al detalle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <GoogleBusinessCard />

      </div>
    </section>
  );
}

function GoogleBusinessCard() {
  return (
    <motion.article
      variants={fadeUp(0.38)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className="group relative mt-6 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#F5F2EC]/[0.08] bg-[#0E0E0E] transition-colors duration-400 hover:bg-[#111111] lg:min-h-[540px]"
    >
      <motion.span
        variants={{ hover: { scaleX: 1 }, initial: { scaleX: 0 } }}
        initial="initial"
        transition={{ duration: 0.35, ease: EASE }}
        className="absolute inset-x-0 top-0 z-10 h-px origin-left bg-[#C9A84C]/55"
        aria-hidden="true"
      />


      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[35%] overflow-hidden lg:block" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3279C8]/[0.12] blur-3xl" />
        <div className="absolute left-1/2 top-1/2 translate-x-[2%] -translate-y-[96%] text-[#3279C8]/90 drop-shadow-[0_18px_24px_rgba(0,0,0,0.35)]">
          <MapPin size={112} strokeWidth={1.4} fill="currentColor" />
          <span className="absolute left-1/2 top-[31%] h-8 w-8 -translate-x-1/2 rounded-full bg-[#0E0E0E]/80 ring-1 ring-[#F5F2EC]/30" />
          <span className="absolute left-[18%] top-[18%] h-5 w-8 rotate-[-38deg] rounded-full bg-[#EA4335]/90" />
          <span className="absolute right-[16%] top-[32%] h-7 w-5 rotate-[35deg] rounded-full bg-[#34A853]/90" />
          <span className="absolute bottom-[20%] left-[33%] h-6 w-5 rotate-[22deg] rounded-full bg-[#FBBC05]/90" />
        </div>

        <div className="absolute left-1/2 top-1/2 h-[22.5rem] w-[10.5rem] -translate-x-[70%] -translate-y-[51%] rotate-[3deg] rounded-[1.7rem] border border-[#F5F2EC]/25 bg-[#111820] p-[0.4rem] shadow-[0_28px_50px_rgba(0,0,0,0.55)]">
          <div className="relative h-full overflow-hidden rounded-[1.35rem] bg-[#F5F2EC] px-3 pt-6">
            <div className="absolute left-1/2 top-2 h-1 w-8 -translate-x-1/2 rounded-full bg-[#172331]/35" />
            <div className="flex items-center gap-1.5">
              <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#3279C8] font-sans text-[10px] font-semibold text-white">G</div>
              <div className="h-1.5 w-12 rounded-full bg-[#172331]/25" />
            </div>
            <div className="mt-5 flex flex-col items-center">
              <div className="relative flex h-14 w-full items-end justify-center overflow-hidden rounded-md bg-gradient-to-b from-[#A9D0F4] to-[#6688B5] pb-1">
                <div className="absolute inset-x-0 top-0 flex h-4 justify-center gap-1 bg-[#F5F2EC]/85 px-2">
                  <span className="h-4 w-2.5 rounded-b-md bg-[#3279C8]" />
                  <span className="h-4 w-2.5 rounded-b-md bg-[#F5F2EC]" />
                  <span className="h-4 w-2.5 rounded-b-md bg-[#3279C8]" />
                  <span className="h-4 w-2.5 rounded-b-md bg-[#F5F2EC]" />
                </div>
                <div className="h-6 w-9 rounded-t-md bg-[#172331]/75" />
              </div>
              <span className="mt-2 font-sans text-[11px] font-semibold text-[#172331]/90">Ferro Studio</span>
              <div className="mt-1.5 flex items-center gap-1 text-[#C9A84C]"><span className="text-[9px] leading-none">★ ★ ★ ★ ★</span><span className="font-sans text-[7px] text-[#172331]/45">(56)</span></div>
              <div className="mt-3 grid w-full grid-cols-4 gap-1 border-t border-[#172331]/10 pt-2 text-[#3279C8]">
                <div className="flex flex-col items-center gap-1"><Phone size={11} strokeWidth={1.8} /><span className="font-sans text-[5px] text-[#172331]/60">Llamar</span></div>
                <div className="flex flex-col items-center gap-1"><MapPin size={11} strokeWidth={1.8} /><span className="font-sans text-[5px] text-[#172331]/60">Cómo llegar</span></div>
                <div className="flex flex-col items-center gap-1"><Bookmark size={11} strokeWidth={1.8} /><span className="font-sans text-[5px] text-[#172331]/60">Guardar</span></div>
                <div className="flex flex-col items-center gap-1"><Globe2 size={11} strokeWidth={1.8} /><span className="font-sans text-[5px] text-[#172331]/60">Sitio web</span></div>
              </div>
            </div>
            <div className="mt-4 space-y-2 border-t border-[#172331]/10 pt-3">
              <div className="h-1.5 w-full rounded-full bg-[#172331]/15" />
              <div className="h-1.5 w-4/5 rounded-full bg-[#172331]/10" />
              <div className="h-5 w-full rounded-md bg-[#3279C8]/70" />
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 w-40 -translate-x-[18%] translate-y-[54%] rounded-xl border border-[#F5F2EC]/25 bg-[#171717]/95 p-2.5 shadow-[0_16px_30px_rgba(0,0,0,0.5)] backdrop-blur-sm">
          <div className="relative h-20 overflow-hidden rounded-lg border border-[#F5F2EC]/10 bg-[#183149]">
            <span className="absolute -left-2 top-8 h-px w-24 rotate-[-24deg] bg-[#5B9FE4]/45" />
            <span className="absolute left-5 -top-3 h-24 w-px rotate-[35deg] bg-[#5B9FE4]/30" />
            <span className="absolute right-5 top-0 h-20 w-px rotate-[-35deg] bg-[#5B9FE4]/35" />
            <MapPin className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full text-[#E24A3B] drop-shadow-[0_3px_5px_rgba(0,0,0,0.45)]" size={28} strokeWidth={1.8} fill="currentColor" />
          </div>
          <div className="mt-2 h-1.5 w-16 rounded-full bg-[#F5F2EC]/30" />
        </div>
      </div>

      <div className="flex flex-col gap-7 p-10 md:p-14 lg:ml-[35%]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="font-serif text-[25px] font-light text-[#C9A84C]/70">Servicios extra</span>
            <h3 className="mt-3 font-serif text-[1.75rem] font-light leading-tight tracking-[-0.01em] text-[#F5F2EC]">
              Google Maps
            </h3>
          </div>
          <div className="shrink-0 pt-0.5 text-right">
            <p className="font-serif text-[25px] font-light leading-none text-[#F5F2EC]/85">$30.000</p>
          </div>
        </div>

        <p className="font-sans text-[1rem] font-light leading-[1.82] text-[#F5F2EC]/38">
          Tu negocio en Google Maps. Configuramos y optimizamos tu perfil de Google Business para que tus clientes puedan encontrarte fácilmente y tengan toda la información de tu empresa en un solo lugar.
        </p>

        <ul className="grid grid-cols-1 gap-3 border-t border-[#F5F2EC]/[0.06] pt-5 sm:grid-cols-2 sm:gap-x-6">
          {[
            "Creación y configuración del perfil",
            "Datos del negocio (horarios, teléfono, web)",
            "Logo, portada y fotografías",
            "Vinculación con tu página web",
            "Botón de WhatsApp",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[3px] shrink-0 font-sans text-[0.75rem] text-[#C9A84C]/60">✓</span>
              <span className="font-sans font-light leading-[1.6] text-[#F5F2EC]/35 text-[15px]">{item}</span>
            </li>
          ))}
        </ul>

        <a
          href="/contacto"
          className="self-start border border-[#C9A84C]/60 px-5 py-3 font-sans text-[13px] font-medium text-[#C9A84C] transition-colors duration-300 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10"
        >
          Solicitar este servicio
        </a>
      </div>
    </motion.article>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const Icon = service.icon;
  const delay = 0.08 + index * 0.09;
  const visibleIncludes = service.includes.slice(0, 4);
  const hiddenCount = service.includes.length - visibleIncludes.length;

  return (
    <motion.article
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl",
        "border border-[#F5F2EC]/10 bg-[#16171B]",
        "transition-all duration-500",
        "hover:-translate-y-1 hover:border-[#C9A84C]/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
      )}
    >
      <div className="relative aspect-[2/1] overflow-hidden border-b border-[#F5F2EC]/10 bg-gradient-to-br from-[#2A2D33] via-[#1A1C21] to-[#0E0E0E]">
        <img
          src={service.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/70 via-transparent to-transparent" aria-hidden="true" />
        {service.soon && (
          <span className="absolute left-3 top-3 rounded-full border border-[#C9A84C]/50 bg-[#0E0E0E]/80 px-3 py-1 font-sans text-[11px] font-medium text-[#C9A84C]">
            Próximamente
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#C9A84C]/30 bg-[#C9A84C]/[0.06]">
            <Icon size={17} strokeWidth={1.5} className="text-[#C9A84C]" />
          </div>
          <h3 className="font-sans text-[17px] font-semibold tracking-[-0.01em] text-[#F5F2EC]">
            {service.title}
          </h3>
        </div>

        <p className="mt-4 font-sans text-[14px] leading-[1.65] text-[#F5F2EC]/55">
          {service.description}
        </p>

        <ul className="mt-5 flex flex-col gap-2.5">
          {visibleIncludes.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-[2px] shrink-0 font-sans text-[12px] text-[#C9A84C]">✓</span>
              <span className="font-sans text-[13.5px] leading-[1.5] text-[#F5F2EC]/70">{item}</span>
            </li>
          ))}
        </ul>
        {hiddenCount > 0 && (
          <p className="mt-2 pl-5 font-sans text-[12.5px] text-[#F5F2EC]/35">+{hiddenCount} más incluidos</p>
        )}

        <div className="mt-auto flex flex-col gap-3 border-t border-[#F5F2EC]/10 pt-5">
          <p className="font-sans text-[13px] text-[#F5F2EC]/50">
            Desde <span className="font-semibold text-[#F5F2EC]">{service.price}</span>
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-1.5 self-start font-sans text-[13px] font-medium text-[#C9A84C] transition-colors duration-300 hover:text-[#D9BC72]"
          >
            Solicitar
            <ArrowRight size={14} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

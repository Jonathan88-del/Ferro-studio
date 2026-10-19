import { motion } from "framer-motion";
import { MousePointerClick, Building2, LayoutGrid, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay } },
});

const SERVICES = [
  {
    icon: MousePointerClick,
    title: "Landing Page",
    demoUrl: "https://plantilla-para-contadores-landing-p.vercel.app/",
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
    title: "Sitio Institucional",
    demoUrl: "https://pagina-web-muestra.vercel.app/",
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
    title: "Sitio con Catálogo / CMS",
    demoUrl: null,
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
      "90 días del Plan Total Griatis",
    ],
    soon: true,
  },
  {
    icon: Pencil,
    title: "Rediseño Web",
    demoUrl: null,
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
      className="relative bg-[#0E0E0E] pt-12 pb-[10px] md:pt-16 lg:pt-20"
      aria-labelledby="services-heading"
    >
      <div className="container-ferro">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-16 mb-4 md:mb-6">
          <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-5 h-px bg-[#C9A84C]/70" />
              <span className="tracking-[0.26em] uppercase font-sans text-[#C9A84C]/75 text-[20px]">
                Proyectos web
              </span>
            </div>
            <h2
              id="services-heading"
              className="font-serif font-light text-[50px] leading-[1.05] tracking-[-0.015em] text-[#F5F2EC]"
            >
              Soluciones para cada etapa de su negocio
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:self-end"
          >
            <p className="text-[#F5F2EC]/42 font-sans font-light text-[20px]">
              Cada proyecto es único y tratado con atención al detalle.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#F5F2EC]/[0.06]">
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
      className="group relative mt-px grid grid-cols-1 overflow-hidden bg-[#0E0E0E] transition-colors duration-400 hover:bg-[#111111] lg:min-h-[460px]"
    >
      <motion.span
        variants={{ hover: { scaleX: 1 }, initial: { scaleX: 0 } }}
        initial="initial"
        transition={{ duration: 0.35, ease: EASE }}
        className="absolute inset-x-0 top-0 z-10 h-px origin-left bg-[#C9A84C]/55"
        aria-hidden="true"
      />


      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[35%] items-center justify-center p-8 lg:flex" aria-hidden="true">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F3b4a41e626e24dae8e3aa82c13ef83ba%2F9be79255a4fd4f8886daf0fc8df0350f?format=webp&width=800&height=1200"
          alt=""
          className="max-h-full w-full rounded-2xl object-contain shadow-[0_28px_50px_rgba(0,0,0,0.55)]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-5 p-8 md:p-10 lg:ml-[35%]">
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

  return (
    <motion.article
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      whileHover="hover"
      className={cn(
        "group relative bg-[#0E0E0E]",
        "flex flex-col gap-3",
        "px-6 py-6 md:px-8 md:py-8",
        "transition-colors duration-400",
        "hover:bg-[#111111]",
        service.soon && "opacity-60"
      )}
    >
      {service.soon && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/40 rounded px-6 py-2">
            <span className="text-[#C9A84C] font-serif text-[1.1rem] font-light tracking-wide">Proximamente</span>
          </div>
        </div>
      )}
      <motion.span
        variants={{ hover: { scaleX: 1 }, initial: { scaleX: 0 } }}
        initial="initial"
        transition={{ duration: 0.35, ease: EASE }}
        className="absolute inset-x-0 top-0 h-px bg-[#C9A84C]/55 origin-left"
        aria-hidden="true"
      />

      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div
          className={cn(
            "w-14 h-14 flex items-center justify-center shrink-0",
            "border border-[#F5F2EC]/[0.1]",
            "transition-all duration-400",
            "group-hover:border-[#C9A84C]/30"
          )}
        >
          <Icon
            size={22}
            strokeWidth={1.2}
            className="text-[#C9A84C]/70 transition-colors duration-300 group-hover:text-[#C9A84C]"
          />
        </div>
        <div className="text-right shrink-0 pt-0.5">
          <p className="font-serif text-[23px] font-light text-[#F5F2EC]/85 leading-none">{service.price}</p>
        </div>
      </div>

      <div className={cn("flex flex-col gap-4 flex-1", service.title === "Sitio Institucional" && "pt-[20px] px-[20px]")}>
        <div className="flex items-baseline gap-3">
          <h3 className="font-serif text-[1.75rem] font-light text-[#F5F2EC] leading-tight tracking-[-0.01em]">
            {service.title}
          </h3>
        </div>
        <p className="text-[1rem] text-[#F5F2EC]/38 font-sans font-light leading-[1.82]">
          {service.description}
        </p>
      </div>

      {/* Includes list */}
      <ul className="flex flex-col gap-3 mt-auto pt-5 border-t border-[#F5F2EC]/[0.06]">
        {service.includes.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="text-[#C9A84C]/60 text-[0.75rem] font-sans mt-[3px] shrink-0">✓</span>
            <span className="text-[15px] text-[#F5F2EC]/35 font-sans font-light leading-[1.6]">{item}</span>
          </li>
        ))}
      </ul>

      {service.demoUrl && (
        <a
          href={service.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start border border-[#C9A84C]/60 px-4 py-2.5 font-sans text-[12px] font-medium text-[#C9A84C] transition-colors duration-300 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10"
        >
          Ver una demostración ↗
        </a>
      )}
    </motion.article>
  );
}

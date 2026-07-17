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
    id: "A1",
    title: "Landing Page",
    price: "$150.000 ARS",
    ref: "~$100 USD",
    delivery: "7–10 días hábiles",
    description:
      "Una página de conversión diseñada para generar consultas y ventas. Incluye hasta 6 secciones, redacción de textos, imágenes de banco, formulario de contacto, botón de WhatsApp flotante, SSL y 30 días de soporte post-entrega.",
    includes: [
      "Diseño personalizado (no template)",
      "Hasta 6 secciones",
      "Redacción de textos incluida",
      "Formulario + WhatsApp flotante",
      "SEO básico",
      "Adaptada a Android, tablet, notebook y más",
      "30 días de soporte post-entrega",
    ],
  },
  {
    icon: Building2,
    id: "A2",
    title: "Sitio Institucional",
    price: "$250.000 ARS",
    ref: "~$16USD",
    delivery: "12–18 días hábiles",
    description:
      "Presencia digital completa para empresas y profesionales. Hasta 6 páginas independientes, Google Analytics, Search Console, FAQ y 60 días de soporte. Ideal para estudios jurídicos, contadores, clínicas e inmobiliarias.",
    includes: [
      "Todo lo de Landing Page",
      "Hasta 6 páginas independientes",
      "Google Analytics",
      "Search Console",
      "60 días de soporte post-entrega",
    ],
  },
  {
    icon: LayoutGrid,
    id: "A3",
    title: "Sitio con Catálogo / CMS",
    price: "$420.000 ARS",
    ref: "~$330 USD",
    delivery: "18–25 días hábiles",
    description:
      "Sitio institucional con panel de administración para que el cliente cargue su propio contenido: propiedades (inmobiliarias), vehículos, productos o servicios. Incluye capacitación y 10 fichas de ejemplo cargadas.",
    includes: [
      "Todo lo de Sitio Institucional",
      "Panel de administración propio",
      "Ideal para inmobiliarias y concesionarias",
      "Categorías y etiquetas incluidas",
      "1 sesión de capacitación",
      "90 días de soporte post-entrega",
    ],
    soon: true,
  },
  {
    icon: Pencil,
    id: "A4",
    title: "Rediseño Web",
    price: "$200.000 ARS",
    ref: "~$130 USD",
    delivery: "10–15 días hábiles",
    description:
      "Modernización de un sitio existente que ya no representa al negocio. Nuevo diseño visual completo, migración de contenido, optimización de velocidad y SEO básico conservando el posicionamiento actual.",
    includes: [
      "Análisis del sitio actual",
      "Nuevo diseño visual completo",
      "Migración de contenido existente",
      "Optimización de velocidad",
      "SEO conservando posicionamiento",
      "Adaptada a Android, tablet, notebook y más",
      "30 días de soporte post-entrega",
    ],
  },
] as const;

export default function Services() {
  return (
    <section
      className="relative bg-[#0E0E0E] py-28 md:py-36 lg:py-44"
      aria-labelledby="services-heading"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: EASE }}
        className="absolute top-0 left-[max(1.5rem,env(safe-area-inset-left))] right-[max(1.5rem,env(safe-area-inset-right))] md:left-[3rem] md:right-[3rem] lg:left-[5rem] lg:right-[5rem] h-px bg-[#F5F2EC]/[0.07] origin-left"
        aria-hidden="true"
      />
      <div className="container-ferro">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-20 mb-20 md:mb-28">
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
              Soluciones para cada etapa de su negocio.
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
              Cada proyecto es único y tratado con atención al detalle. El sitio se publica primero en un entorno de prueba — el cliente lo aprueba, y solo entonces se cobra y se migra al dominio definitivo. Sin anticipo.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#F5F2EC]/[0.06]">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <GoogleBusinessCard />

        <motion.p
          variants={fadeUp(0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-12 text-center text-[#F5F2EC]/25 font-sans font-light tracking-wide text-[20px]"
        >
          Todos los proyectos incluyen SSL, diseño responsive y consulta inicial sin costo.
        </motion.p>
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
      className="group relative mt-px grid grid-cols-1 overflow-hidden bg-[#0E0E0E] transition-colors duration-400 hover:bg-[#111111] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
    >
      <motion.span
        variants={{ hover: { scaleX: 1 }, initial: { scaleX: 0 } }}
        initial="initial"
        transition={{ duration: 0.35, ease: EASE }}
        className="absolute inset-x-0 top-0 z-10 h-px origin-left bg-[#C9A84C]/55"
        aria-hidden="true"
      />

      <div className="flex min-h-[180px] items-center justify-center overflow-hidden border-b border-[#F5F2EC]/[0.06] bg-[#F5F2EC] p-3 sm:min-h-[230px] sm:p-6 lg:min-h-[300px] lg:border-b-0 lg:border-r">
        <img
          src="/google-business.webp"
          alt="Google Maps y Google Business en un teléfono móvil"
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="flex flex-col gap-7 p-10 md:p-14">
        <div className="flex items-start justify-between gap-6">
          <div>
            <span className="font-serif text-[1.05rem] font-light text-[#C9A84C]/70">Extra</span>
            <h3 className="mt-3 font-serif text-[1.75rem] font-light leading-tight tracking-[-0.01em] text-[#F5F2EC]">
              Google Maps (Google Business)
            </h3>
          </div>
          <div className="shrink-0 pt-0.5 text-right">
            <p className="font-serif text-[20px] font-light leading-none text-[#F5F2EC]/85">$45.000</p>
            <p className="mt-1 font-sans text-[11px] font-light text-[#F5F2EC]/28">pago único</p>
          </div>
        </div>

        <p className="font-sans text-[1rem] font-light leading-[1.82] text-[#F5F2EC]/38">
          Hacé que tu negocio aparezca en Google y Google Maps. Configuramos y optimizamos tu perfil de Google Business para que tus clientes puedan encontrarte fácilmente y tengan toda la información de tu empresa en un solo lugar.
        </p>

        <ul className="grid grid-cols-1 gap-3 border-t border-[#F5F2EC]/[0.06] pt-5 sm:grid-cols-2 sm:gap-x-6">
          {[
            "Creación y configuración del perfil",
            "Datos del negocio (horarios, teléfono, web)",
            "Categorías y servicios",
            "Logo, portada y fotografías",
            "Descripción optimizada",
            "Vinculación con tu página web",
            "Botón de WhatsApp (si corresponde)",
            "Asistencia durante la verificación",
            "Perfil listo para comenzar a recibir clientes",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[3px] shrink-0 font-sans text-[0.75rem] text-[#C9A84C]/60">✓</span>
              <span className="font-sans text-[13px] font-light leading-[1.6] text-[#F5F2EC]/35">{item}</span>
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
        "flex flex-col gap-8",
        "px-10 py-12 md:px-14 md:py-16",
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
          <p className="font-serif text-[20px] font-light text-[#F5F2EC]/85 leading-none">{service.price}</p>
          <p className="text-[11px] text-[#F5F2EC]/28 font-sans font-light mt-1">{service.ref} ref.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-[1.05rem] text-[#C9A84C]/40 font-light">{service.id}</span>
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
    </motion.article>
  );
}

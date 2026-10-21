import { Fragment } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Search,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  Eye,
  Target,
  MousePointerClick,
  Smartphone,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE },
};

const DIFFERENCES = [
  {
    icon: Eye,
    title: "Analytics: visitantes",
    desc: "Muestra qué hace la gente dentro de tu sitio: qué páginas recorre, cuánto tiempo permanece y si realiza una consulta.",
    highlighted: false,
  },
  {
    icon: Search,
    title: "Search Console: Google",
    desc: "Muestra qué buscan las personas para encontrarte, en qué posición apareces y si Google detecta errores en tu sitio.",
    highlighted: true,
  },
];

const SUPERPOWERS = [
  {
    icon: Search,
    title: "Ves qué buscan",
    example: "Alguien busca “contador en Buenos Aires” y tu sitio aparece en los resultados. Search Console registra esa búsqueda exacta.",
    takeaway: "Sabés exactamente qué pide la gente.",
  },
  {
    icon: TrendingUp,
    title: "Ves tu posición",
    example: "Tu sitio aparece en el puesto 7. El objetivo es llegar al 1-3, y el panel te muestra cómo evoluciona ese puesto.",
    takeaway: "Sabés dónde estás y hacia dónde avanzar.",
  },
  {
    icon: AlertTriangle,
    title: "Detectás problemas a tiempo",
    example: "Google avisa que una página no se ve bien en celulares. Lo corregís antes de que afecte tus visitas.",
    takeaway: "Prevenís pérdidas antes de que ocurran.",
  },
];

const PANEL_INFO = [
  {
    icon: Search,
    title: "Búsquedas que te encuentran",
    desc: "La lista de consultas que usaron las personas para llegar a tu sitio. Si aparece “consultor”, podés crear contenido sobre ese tema.",
  },
  {
    icon: TrendingUp,
    title: "Posición en los resultados",
    desc: "Para cada búsqueda, el puesto en el que aparecés. Del 1 al 3 es una posición destacada; a partir del 10 hay margen de mejora.",
  },
  {
    icon: MousePointerClick,
    title: "Clics recibidos",
    desc: "Cuántas personas hicieron clic en tu resultado. Muchas apariciones con pocos clics suelen indicar un título poco atractivo.",
  },
  {
    icon: Smartphone,
    title: "Problemas técnicos",
    desc: "Errores que impiden una buena experiencia, como páginas que no cargan bien en el celular, enlaces rotos o imágenes que no se muestran.",
  },
];

const BENEFITS = [
  {
    icon: Target,
    title: "Una meta clara",
    desc: "Si querés aparecer primero para “consultor legal” y hoy estás en el puesto 7, sabés exactamente qué mejorar.",
  },
  {
    icon: CheckCircle2,
    title: "Resultados verificables",
    desc: "Después de un cambio, los datos muestran en algunas semanas si la mejora dio resultado.",
  },
  {
    icon: Lightbulb,
    title: "Oportunidades ocultas",
    desc: "Descubrís búsquedas relacionadas con tu negocio que no imaginabas y que pueden traerte nuevos clientes.",
  },
];

const JOURNEY = [
  {
    icon: Search,
    title: "Alguien busca",
    desc: "Escribe en Google lo que necesita, por ejemplo “contador para monotributistas”.",
  },
  {
    icon: Globe,
    title: "Aparecés en el listado",
    desc: "Google muestra tu página entre los resultados. Cada aparición se registra como una impresión.",
  },
  {
    icon: MousePointerClick,
    title: "Hacen clic",
    desc: "Si tu título les resulta claro y útil, eligen entrar a tu sitio. Eso es un clic.",
  },
  {
    icon: Target,
    title: "Llegan a tu sitio",
    desc: "Al entrar, ya están interesados en lo que ofrecés. Analytics registra lo que hacen después.",
  },
];

const TERMS = [
  {
    title: "Consulta",
    desc: "Las palabras que escribió la persona en Google.",
  },
  {
    title: "Impresión",
    desc: "Cada vez que tu resultado aparece en pantalla, aunque nadie haga clic.",
  },
  {
    title: "Posición",
    desc: "El lugar promedio en el que aparece tu resultado. El 1 es el primero.",
  },
  {
    title: "CTR (tasa de clics)",
    desc: "El porcentaje de impresiones que terminan en un clic. Indica qué tan atractivo es tu resultado.",
  },
];

export default function SeccionSearchConsole() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0E0E0E] pt-28 pb-[60px] md:pt-32 md:pb-[80px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(245,242,236,0.03) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="container-ferro relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
            <Link href="/servicios" className="group mb-8 inline-flex items-center gap-2 no-underline ferro-focus">
              <ArrowLeft size={16} className="text-[#C9A84C]/70 transition-colors group-hover:text-[#C9A84C]" />
              <span className="text-[14px] tracking-wide text-[#C9A84C]/70 transition-colors group-hover:text-[#C9A84C]">
                Volver a Servicios
              </span>
            </Link>

            <p className="mb-6 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Seguimiento en Google</p>
            <h1 className="mb-6 max-w-4xl font-serif text-[44px] font-light leading-[1.08] tracking-[-0.018em] text-[#F5F2EC] md:text-[54px]">
              Search Console: ve cómo Google ve tu sitio
            </h1>
            <p className="max-w-2xl text-[19px] font-light leading-relaxed text-[#F5F2EC]/60">
              Es la herramienta gratuita de Google que te muestra qué buscan las personas, en qué lugar apareces y si hay problemas que corregir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Diferencia con Analytics */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Para entenderlo</p>
            <h2 className="mb-4 font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              ¿Qué es Search Console?
            </h2>
            <p className="text-[18px] font-light leading-relaxed text-[#F5F2EC]/55">
              Mientras Analytics muestra qué hacen los visitantes una vez que llegan, Search Console muestra cómo te encuentra Google antes de que lleguen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {DIFFERENCES.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.8, ease: EASE, delay: index * 0.1 }}
                  className={`rounded-lg bg-[#1A1A1A] p-7 md:p-8 ${
                    item.highlighted ? "border border-[#C9A84C]/30" : "border border-[#F5F2EC]/[0.08]"
                  }`}
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-[#C9A84C]/30 bg-[#C9A84C]/10">
                    <Icon size={20} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 font-serif text-[22px] font-light text-[#F5F2EC]">{item.title}</h3>
                  <p className="text-[17px] font-light leading-relaxed text-[#F5F2EC]/55">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recorrido */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Paso a paso</p>
            <h2 className="mb-4 font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              Cómo llega un cliente desde Google
            </h2>
            <p className="text-[18px] font-light leading-relaxed text-[#F5F2EC]/55">
              Search Console sigue cada uno de estos pasos y te dice en qué punto se pierde o se gana un cliente.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch">
            {JOURNEY.map((step, index) => {
              const Icon = step.icon;
              return (
                <Fragment key={step.title}>
                  <motion.div
                    {...fadeUp}
                    transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
                    className="flex flex-col rounded-lg border border-[#F5F2EC]/[0.08] bg-[#1A1A1A] p-6"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-serif text-[28px] font-light leading-none text-[#C9A84C]">
                        {index + 1}
                      </span>
                      <Icon size={18} className="text-[#C9A84C]" strokeWidth={1.5} />
                    </div>
                    <h3 className="mb-2 font-serif text-[20px] font-light text-[#F5F2EC]">{step.title}</h3>
                    <p className="text-[15px] font-light leading-relaxed text-[#F5F2EC]/55">{step.desc}</p>
                  </motion.div>
                  {index < JOURNEY.length - 1 && (
                    <div className="hidden items-center justify-center md:flex">
                      <ArrowRight size={20} className="text-[#C9A84C]/50" strokeWidth={1.5} />
                    </div>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tres funciones */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Qué te permite</p>
            <h2 className="font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              Tres funciones clave para tu negocio
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {SUPERPOWERS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
                  className="flex flex-col rounded-lg border border-[#F5F2EC]/[0.08] bg-[#1A1A1A] p-7"
                >
                  <div className="mb-2 font-serif text-[40px] font-light leading-none text-[#C9A84C]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mb-5 mt-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#C9A84C]/10">
                    <Icon size={20} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 font-serif text-[22px] font-light text-[#F5F2EC]">{item.title}</h3>
                  <p className="mb-5 text-[16px] font-light leading-relaxed text-[#F5F2EC]/55">{item.example}</p>
                  <p className="mt-auto border-t border-[#F5F2EC]/[0.08] pt-4 text-[16px] font-light text-[#C9A84C]">
                    {item.takeaway}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Qué ves en el panel */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">El panel</p>
            <h2 className="mb-4 font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              Qué información ves
            </h2>
            <p className="text-[18px] font-light leading-relaxed text-[#F5F2EC]/55">
              Toda la información está organizada de forma simple para que tomes decisiones con rapidez.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {PANEL_INFO.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  className="flex gap-5 rounded-lg border border-[#F5F2EC]/[0.08] bg-[#1A1A1A] p-7"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-[#C9A84C]/30 bg-[#C9A84C]/10">
                    <Icon size={20} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="mb-2 font-serif text-[21px] font-light text-[#F5F2EC]">{item.title}</h3>
                    <p className="text-[16px] font-light leading-relaxed text-[#F5F2EC]/55">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Glosario */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Vocabulario</p>
            <h2 className="font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              Los términos que vas a ver en el panel
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
            {TERMS.map((term) => (
              <motion.div key={term.title} {...fadeUp} className="border-l border-[#C9A84C]/40 pl-6">
                <h3 className="mb-2 font-serif text-[21px] font-light text-[#F5F2EC]">{term.title}</h3>
                <p className="text-[16px] font-light leading-relaxed text-[#F5F2EC]/55">{term.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué importa */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Por qué importa</p>
            <h2 className="font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              Search Console es tu brújula de SEO
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {BENEFITS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
                  className="rounded-lg border border-[#C9A84C]/20 bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] p-7"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#C9A84C]/10">
                    <Icon size={20} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 font-serif text-[21px] font-light text-[#F5F2EC]">{item.title}</h3>
                  <p className="text-[16px] font-light leading-relaxed text-[#F5F2EC]/55">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[#0E0E0E] pb-[80px] pt-[20px] md:pb-[100px]">
        <div className="container-ferro">
          <motion.div
            {...fadeUp}
            className="rounded-lg border border-[#C9A84C]/30 bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] p-10 text-center md:p-14"
          >
            <h2 className="mx-auto mb-4 max-w-2xl font-serif text-[2rem] font-light text-[#F5F2EC]">
              Search Console viene configurado desde el primer día
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[1rem] font-light leading-relaxed text-[#F5F2EC]/60">
              No necesitás hacer nada técnico. Nosotros lo integramos para que veas cómo Google ve tu sitio desde el primer momento.
            </p>
            <Link
              href="/servicios"
              className="ferro-focus group inline-flex items-center gap-2 rounded-lg bg-[#C9A84C] px-8 py-3 font-light text-[#0E0E0E] no-underline"
            >
              Ver todos nuestros servicios
              <ArrowLeft size={16} className="rotate-180 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

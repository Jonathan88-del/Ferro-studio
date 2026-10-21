import { motion } from "framer-motion";
import { ArrowLeft, Check, Minus, TrendingUp, Users, MapPin, Eye, Smartphone, Target } from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE },
};

const WITHOUT_ANALYTICS = [
  "No sabés cuántas personas visitan tu sitio.",
  "No sabés de dónde llegan ni qué buscan.",
  "No sabés qué páginas funcionan y cuáles no.",
];

const WITH_ANALYTICS = [
  "Conocés el número real de visitas, mes a mes.",
  "Ves si llegan desde Google, redes sociales o recomendaciones.",
  "Tomás decisiones con datos, no con suposiciones.",
];

const INSIGHTS = [
  {
    icon: TrendingUp,
    title: "Cantidad de visitas",
    desc: "Permite comparar meses y detectar si el sitio gana o pierde interés.",
  },
  {
    icon: Users,
    title: "Visitantes nuevos y recurrentes",
    desc: "Muestra si llegan personas que te descubren por primera vez o quienes ya conocen tu trabajo.",
  },
  {
    icon: MapPin,
    title: "Origen del tráfico",
    desc: "Indica si la visita viene de una búsqueda en Google, de una red social, de un anuncio o de forma directa.",
  },
  {
    icon: Smartphone,
    title: "Dispositivo utilizado",
    desc: "Revela si tus visitantes navegan desde el celular, la computadora o una tablet.",
  },
  {
    icon: Eye,
    title: "Página de ingreso",
    desc: "Muestra por qué página entra cada persona, lo que ayuda a entender qué les interesa.",
  },
  {
    icon: Target,
    title: "Recorrido dentro del sitio",
    desc: "Permite ver cuántas páginas recorren antes de contactarte o de abandonar la visita.",
  },
];

const ACTIONS = [
  {
    title: "Identificás lo que atrae clientes",
    desc: "Si una página recibe muchas más visitas que las demás, sabés qué tema conviene reforzar.",
  },
  {
    title: "Destinás la inversión a lo que funciona",
    desc: "Si la mayoría de tus consultas llega desde Google, tiene sentido invertir en contenido para buscadores.",
  },
  {
    title: "Mejorás sin adivinar",
    desc: "Modificás los puntos que realmente afectan tus resultados, en lugar de cambiar cosas al azar.",
  },
  {
    title: "Medís el impacto de cada cambio",
    desc: "Comparás los números antes y después de una mejora para confirmar si dio resultado.",
  },
];

export default function SeccionAnalytics() {
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

            <p className="mb-6 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Medición de tu sitio</p>
            <div className="mb-6 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <h1 className="max-w-3xl font-serif text-[44px] font-light leading-[1.08] tracking-[-0.018em] text-[#F5F2EC] md:text-[54px]">
                Google Analytics: conocé quién visita tu sitio y qué hace en él
              </h1>
              <img src="/logos/google-analytics.png" alt="Logo de Google Analytics" className="h-[110px] w-auto flex-shrink-0 self-start md:self-center" />
            </div>
            <p className="max-w-2xl text-[19px] font-light leading-relaxed text-[#F5F2EC]/60">
              Google Analytics es una herramienta de Google que registra cada visita a tu sitio web. Te muestra cuántas personas llegan, de dónde vienen y qué hacen mientras navegan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Con y sin medición */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">El punto de partida</p>
            <h2 className="mb-4 font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              Un sitio sin medición es una vidriera a oscuras
            </h2>
            <p className="text-[18px] font-light leading-relaxed text-[#F5F2EC]/55">
              Podés tener un sitio bien diseñado, pero sin datos no sabés si tiene visitas ni si esas visitas se transforman en consultas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div {...fadeUp} className="rounded-lg border border-[#F5F2EC]/[0.08] bg-[#1A1A1A] p-7 md:p-8">
              <p className="mb-5 font-sans text-[13px] uppercase tracking-[0.2em] text-[#F5F2EC]/40">Sin medición</p>
              <ul className="space-y-4">
                {WITHOUT_ANALYTICS.map((item) => (
                  <li key={item} className="flex gap-3 text-[17px] font-light leading-relaxed text-[#F5F2EC]/50">
                    <Minus size={18} className="mt-1 flex-shrink-0 text-[#F5F2EC]/30" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="rounded-lg border border-[#C9A84C]/30 bg-[#1A1A1A] p-7 md:p-8"
            >
              <p className="mb-5 font-sans text-[13px] uppercase tracking-[0.2em] text-[#C9A84C]">Con Google Analytics</p>
              <ul className="space-y-4">
                {WITH_ANALYTICS.map((item) => (
                  <li key={item} className="flex gap-3 text-[17px] font-light leading-relaxed text-[#F5F2EC]/80">
                    <Check size={18} className="mt-1 flex-shrink-0 text-[#C9A84C]" strokeWidth={1.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Información que muestra */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Qué podés ver</p>
            <h2 className="mb-4 font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              Seis datos clave sobre tus visitantes
            </h2>
            <p className="text-[18px] font-light leading-relaxed text-[#F5F2EC]/55">
              Cada indicador responde una pregunta concreta sobre cómo te encuentran y cómo navegan tu sitio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {INSIGHTS.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  className="flex flex-col rounded-lg border border-[#F5F2EC]/[0.08] bg-[#1A1A1A] p-7"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-[#C9A84C]/30 bg-[#C9A84C]/10">
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

      {/* Cómo se usa */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Cómo se aprovecha</p>
            <h2 className="font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              De los datos a las decisiones
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ACTIONS.map((action, index) => (
              <motion.div
                key={action.title}
                {...fadeUp}
                transition={{ duration: 0.8, ease: EASE, delay: index * 0.05 }}
                className="flex gap-6 rounded-lg border border-[#F5F2EC]/[0.08] bg-[#1A1A1A] p-7 md:p-8"
              >
                <span className="font-serif text-[40px] font-light leading-none text-[#C9A84C]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-3 font-serif text-[21px] font-light text-[#F5F2EC]">{action.title}</h3>
                  <p className="text-[16px] font-light leading-relaxed text-[#F5F2EC]/55">{action.desc}</p>
                </div>
              </motion.div>
            ))}
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
              Google Analytics viene integrado desde el primer día
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[1rem] font-light leading-relaxed text-[#F5F2EC]/60">
              Nosotros lo configuramos por vos. Vos solo revisás los datos que te ayudan a crecer.
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

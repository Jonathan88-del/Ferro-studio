import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Calculator,
  FileText,
  Globe,
  Phone,
  Search,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

const searches = [
  {
    query: "contador en CABA",
    path: "/",
    problem: "Quiere un contador de confianza para su negocio.",
    title: "Contador en CABA | Tu Empresa",
    snippet: "Estudio contable para monotributistas y pymes. Presupuesto sin cargo.",
    icon: Users,
  },
  {
    query: "recategorizar monotributo",
    path: "/monotributo",
    problem: "Le llegó una notificación de AFIP y no sabe qué hacer.",
    title: "Recategorización de monotributo | Tu Empresa",
    snippet: "Te explicamos tu categoría y hacemos la recategorización por ti.",
    icon: Calculator,
  },
  {
    query: "vencimientos AFIP este mes",
    path: "/declaraciones-afip",
    problem: "Teme pagar multas por una fecha que se le pasó.",
    title: "Vencimientos y declaraciones AFIP | Tu Empresa",
    snippet: "Calendario de vencimientos y presentación de declaraciones al día.",
    icon: FileText,
  },
  {
    query: "contabilidad mensual pyme",
    path: "/contabilidad-mensual",
    problem: "Necesita números claros para tomar decisiones.",
    title: "Contabilidad mensual para pymes | Tu Empresa",
    snippet: "Balances y reportes mensuales para entender cómo va tu negocio.",
    icon: TrendingUp,
  },
  {
    query: "contador cerca de mí",
    path: "/contacto",
    problem: "Quiere hablar con alguien hoy mismo.",
    title: "Contacto | Tu Empresa",
    snippet: "Escríbenos o llámanos. Respondemos en menos de 48 horas.",
    icon: Phone,
  },
];

const reasons = [
  {
    icon: Target,
    title: "Una URL por problema",
    text: "Cada página responde a una necesidad concreta. Google la muestra cuando alguien busca esa necesidad.",
  },
  {
    icon: Search,
    title: "Más puertas de entrada",
    text: "Cada página nueva es una búsqueda más que puedes ganar. Una sola página solo compite con una idea general.",
  },
  {
    icon: Zap,
    title: "Clientes listos para contratar",
    text: "Quien llega con un problema claro ya sabe qué necesita. Es mucho más fácil que pida presupuesto.",
  },
];

export default function SeccionPaginas() {
  const [active, setActive] = useState(0);
  const item = searches[active];

  return (
    <>
      <section className="relative bg-[#0E0E0E] pt-40 pb-[10px] md:pt-48 md:pb-[10px] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(245,242,236,0.03) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="container-ferro relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <Link href="/servicios" className="inline-flex items-center gap-2 mb-8 no-underline ferro-focus group">
              <ArrowLeft size={16} className="text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors" />
              <span className="text-[14px] text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors tracking-wide">
                Volver a Servicios
              </span>
            </Link>

            <h1 className="font-serif font-light text-[54px] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-4xl mb-8">
              Cada página nueva es una búsqueda más que puedes ganar
            </h1>
            <p className="text-[20px] text-[#F5F2EC]/60 font-light max-w-2xl leading-relaxed">
              Cada URL puede responder a un problema concreto que alguien escribe en Google. Más páginas bien pensadas
              significan más puertas de entrada y clientes que llegan listos para contratar.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#0E0E0E] pt-[50px] pb-[10px]">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-4">Una búsqueda, una URL, una solución</h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Elige una búsqueda y mira qué página encuentra el cliente y qué problema resuelve.
            </p>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
              <div className="flex flex-col gap-2">
                {searches.map((s, i) => (
                  <button
                    key={s.query}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={i === active}
                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-left transition-colors ferro-focus ${
                      i === active
                        ? "border-[#C9A84C]/60 bg-[#C9A84C]/10"
                        : "border-[#F5F2EC]/[0.08] bg-[#1A1A1A] hover:border-[#C9A84C]/30"
                    }`}
                  >
                    <Search size={16} className={i === active ? "text-[#C9A84C]" : "text-[#F5F2EC]/40"} />
                    <span className={`text-[16px] font-light ${i === active ? "text-[#F5F2EC]" : "text-[#F5F2EC]/60"}`}>
                      "{s.query}"
                    </span>
                  </button>
                ))}
              </div>

              <div className="relative min-h-[360px] overflow-hidden rounded-xl border border-[#F5F2EC]/10 bg-[#141414] p-6 md:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="space-y-6"
                  >
                    <div className="rounded-lg bg-[#0E0E0E] p-5 md:p-6">
                      <p className="mb-3 text-[13px] text-[#F5F2EC]/40">Resultado de Google</p>
                      <p className="text-[18px] text-[#C9A84C]">{item.title}</p>
                      <p className="mt-1 text-[14px] text-[#51CF66]/80">tusitio.com{item.path}</p>
                      <p className="mt-2 text-[15px] font-light text-[#F5F2EC]/50">{item.snippet}</p>
                    </div>

                    <div className="flex items-start gap-4 rounded-lg border border-[#C9A84C]/25 bg-[#1A1A1A] p-5 md:p-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#C9A84C]/10">
                        <item.icon size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="mb-1 text-[13px] tracking-wide text-[#F5F2EC]/40">Problema que resuelve</p>
                        <p className="font-serif text-[22px] font-light text-[#F5F2EC]">{item.problem}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#0E0E0E] pt-[50px] pb-[20px]">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-12">Por qué cada página suma clientes</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="rounded-lg border border-[#C9A84C]/20 bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] p-8"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#C9A84C]/10">
                    <r.icon size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 font-serif text-[20px] font-light text-[#F5F2EC]">{r.title}</h3>
                  <p className="text-[16px] font-light leading-relaxed text-[#F5F2EC]/50">{r.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#0E0E0E] pt-[50px] pb-[30px]">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-[#C9A84C]/30 bg-[#1A1A1A] p-8 md:flex-row md:items-center md:p-10">
              <div className="flex items-start gap-4">
                <Globe size={24} className="mt-1 flex-shrink-0 text-[#C9A84C]" strokeWidth={1.5} />
                <div>
                  <p className="font-serif text-[24px] font-light text-[#F5F2EC]">Regla simple: una página, un problema, una búsqueda</p>
                  <p className="mt-2 text-[16px] font-light text-[#F5F2EC]/50">
                    Si tu negocio resuelve diez problemas distintos, tiene sentido tener diez páginas.
                  </p>
                </div>
              </div>
              <Link
                href="/contacto"
                className="inline-flex flex-shrink-0 items-center rounded-lg bg-[#C9A84C] px-6 py-3 text-[15px] text-[#0E0E0E] no-underline ferro-focus"
              >
                Hablemos de tus páginas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

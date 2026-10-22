import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Images,
  Mail,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Check,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

const journeySteps = [
  {
    icon: Home,
    anchor: "inicio",
    nav: "Inicio",
    question: "¿Esto es para mí?",
    title: "Inicio",
    purpose: "Tu portada. El primer encuentro. Tienes 3 segundos para que NO se vaya.",
    example: "Un beneficio claro, un título convincente y una llamada a acción",
    highlight: false,
    badge: "",
  },
  {
    icon: Users,
    anchor: "sobre-ti",
    nav: "Sobre ti",
    question: "¿Puedo confiar en ti?",
    title: "Sobre ti / Tu historia",
    purpose: "Aquí construyes confianza. El cliente quiere saber quién eres y por qué debería creerte.",
    example: "Tu experiencia, años en el negocio, por qué empezaste, qué te diferencia",
    highlight: false,
    badge: "",
  },
  {
    icon: Briefcase,
    anchor: "servicios",
    nav: "Servicios",
    question: "¿Qué me vendes y cuánto cuesta?",
    title: "Servicios / Productos",
    purpose: "Aquí VENDES. Explica qué ofreces, precios, paquetes y qué esperar.",
    example: "La sección más importante. Aquí pasan las conversiones",
    highlight: true,
    badge: "Clave",
  },
  {
    icon: MessageSquare,
    anchor: "testimonios",
    nav: "Testimonios",
    question: "¿Qué dicen otros de ti?",
    title: "Testimonios / Casos de éxito",
    purpose: "Otros clientes hablan por ti. Esto MULTIPLICA la confianza.",
    example: "\"Yo traté con ellos y fue excelente\". Más poderoso que cualquier cosa que digas tú",
    highlight: false,
    badge: "",
  },
  {
    icon: Images,
    anchor: "galeria",
    nav: "Galería",
    question: "¿Lo has hecho antes?",
    title: "Galería / Portafolio / Proyectos",
    purpose: "Muestra tu trabajo. Una imagen vale 1.000 palabras.",
    example: "Fotos de trabajos anteriores, proyectos completados, resultados tangibles",
    highlight: false,
    badge: "",
  },
  {
    icon: Mail,
    anchor: "contacto",
    nav: "Contacto",
    question: "¿Cómo te contacto ahora?",
    title: "Contacto",
    purpose: "El final. Aquí el cliente se contacta contigo. Hazlo fácil.",
    example: "Formulario, teléfono, email, ubicación, horarios. Visible y clara",
    highlight: true,
    badge: "Acción final",
  },
];

const bar = "rounded-full bg-[#F5F2EC]/15";

function SectionMock({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <div className="flex h-full flex-col items-center justify-center gap-6 px-6 md:flex-row md:px-10">
          <div className="flex-1 text-center md:text-left">
            <span className="mb-3 inline-block rounded-full border border-[#C9A84C]/40 px-3 py-0.5 text-[11px] text-[#C9A84C]">
              Desde 2010
            </span>
            <p className="font-serif text-[26px] leading-tight text-[#F5F2EC]">
              Tu título principal que convence
            </p>
            <p className="mt-3 text-[14px] text-[#F5F2EC]/50">
              Un beneficio claro en una frase, con el lenguaje de tu cliente.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
              <span className="rounded-md bg-[#C9A84C] px-5 py-2 text-[13px] text-[#0E0E0E]">
                Llamada a acción
              </span>
              <span className="rounded-md border border-[#F5F2EC]/20 px-5 py-2 text-[13px] text-[#F5F2EC]/70">
                Ver servicios
              </span>
            </div>
            <p className="mt-4 text-[12px] text-[#C9A84C]/80">★★★★★ 4.9 · +250 clientes satisfechos</p>
          </div>
          <div className="h-40 w-full max-w-[260px] flex-shrink-0 rounded-lg border border-[#C9A84C]/20 bg-gradient-to-br from-[#C9A84C]/20 to-[#1A1A1A] md:h-48" />
        </div>
      );
    case 1:
      return (
        <div className="flex h-full flex-col items-center justify-center gap-6 px-6 md:flex-row md:px-10">
          <div className="flex flex-shrink-0 flex-col items-center gap-2">
            <div className="h-24 w-24 rounded-full bg-[#C9A84C]/20" />
            <p className="text-[13px] text-[#F5F2EC]">Tu nombre</p>
            <p className="text-[11px] text-[#F5F2EC]/40">Fundador/a</p>
          </div>
          <div className="w-full flex-1 space-y-3">
            <p className="font-serif text-[22px] text-[#F5F2EC]">Quién soy y por qué lo hago</p>
            <div className={`h-2 w-full ${bar}`} />
            <div className={`h-2 w-11/12 ${bar}`} />
            <ul className="space-y-1.5 pt-1">
              {["Años de experiencia en el sector", "Proyectos realizados con éxito", "Lo que me diferencia de otros"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[13px] text-[#F5F2EC]/70">
                  <Check size={14} className="text-[#C9A84C]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-3 pt-3">
              {["+10 años", "+250 proyectos", "98% clientes"].map((stat) => (
                <div key={stat} className="rounded-md border border-[#C9A84C]/25 px-2 py-2 text-center text-[12px] text-[#C9A84C]">
                  {stat}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="flex h-full flex-col justify-center px-6 md:px-10">
          <p className="mb-4 text-center font-serif text-[22px] text-[#F5F2EC]">Lo que ofrecemos</p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              { price: "$990", name: "Básico", items: ["Asesoría inicial", "Entrega en 7 días"] },
              { price: "$1,890", name: "Pro", items: ["Todo lo básico", "Soporte 30 días", "Revisiones ilimitadas"] },
              { price: "$2,990", name: "Premium", items: ["Todo lo anterior", "Atención prioritaria"] },
            ].map((plan, i) => (
              <div
                key={plan.name}
                className={`relative rounded-lg border p-4 ${
                  i === 1 ? "border-[#C9A84C] bg-[#C9A84C]/10" : "border-[#F5F2EC]/10 bg-[#1A1A1A]"
                }`}
              >
                {i === 1 && (
                  <span className="absolute -top-2.5 left-4 rounded-full bg-[#C9A84C] px-2 py-0.5 text-[10px] text-[#0E0E0E]">
                    Más elegido
                  </span>
                )}
                <p className="text-[12px] text-[#F5F2EC]/60">{plan.name}</p>
                <p className="mb-3 font-serif text-[20px] text-[#C9A84C]">{plan.price}</p>
                <ul className="space-y-1.5">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[12px] text-[#F5F2EC]/70">
                      <Check size={12} className="text-[#C9A84C]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    case 3:
      return (
        <div className="flex h-full flex-col justify-center px-6 md:px-10">
          <p className="mb-4 text-center font-serif text-[22px] text-[#F5F2EC]">Lo que dicen nuestros clientes</p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col rounded-lg border border-[#F5F2EC]/10 bg-[#1A1A1A] p-4">
                <p className="mb-2 text-[12px] text-[#C9A84C]">★★★★★</p>
                <p className="mb-4 flex-1 text-[13px] italic text-[#F5F2EC]/70">
                  “Trabajar con ellos fue excelente de principio a fin.”
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-[#C9A84C]/25" />
                  <div>
                    <p className="text-[12px] text-[#F5F2EC]">Nombre del cliente</p>
                    <p className="text-[11px] text-[#F5F2EC]/40">Empresa o ciudad</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 4:
      return (
        <div className="flex h-full flex-col justify-center px-6 md:px-10">
          <p className="mb-4 text-center font-serif text-[22px] text-[#F5F2EC]">Nuestro trabajo</p>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="relative aspect-[16/9] overflow-hidden rounded-md border border-[#F5F2EC]/10"
                style={{
                  background: `linear-gradient(135deg, rgba(201,168,76,${0.1 + i * 0.03}), rgba(26,26,26,1))`,
                }}
              >
                <span className="absolute bottom-2 left-2 text-[11px] text-[#F5F2EC]/70">
                  Proyecto {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    case 5:
      return (
        <div className="flex h-full flex-col justify-center gap-6 px-6 md:flex-row md:px-10">
          <div className="flex-1 space-y-3">
            <p className="font-serif text-[22px] text-[#F5F2EC]">Hablemos</p>
            <p className="text-[13px] text-[#F5F2EC]/60">Teléfono: +00 000 000 000</p>
            <p className="text-[13px] text-[#F5F2EC]/60">Email: hola@tuempresa.com</p>
            <p className="text-[13px] text-[#F5F2EC]/60">Dirección: Calle Principal 123, Ciudad</p>
            <p className="text-[13px] text-[#F5F2EC]/60">Horario: Lun a Vie, 9:00 a 18:00</p>
          </div>
          <div className="flex-1 space-y-2.5 rounded-lg border border-[#F5F2EC]/10 bg-[#1A1A1A] p-4">
            <div className="grid grid-cols-2 gap-2.5">
              <div className="h-8 rounded-md border border-[#F5F2EC]/10 bg-[#0E0E0E]" />
              <div className="h-8 rounded-md border border-[#F5F2EC]/10 bg-[#0E0E0E]" />
            </div>
            <div className="h-8 rounded-md border border-[#F5F2EC]/10 bg-[#0E0E0E]" />
            <div className="h-16 rounded-md border border-[#F5F2EC]/10 bg-[#0E0E0E]" />
            <span className="inline-block rounded-md bg-[#C9A84C] px-5 py-2 text-[12px] text-[#0E0E0E]">
              Enviar mensaje
            </span>
          </div>
        </div>
      );
    default:
      return null;
  }
}

const slideVariants = {
  enter: (direction: number) => ({ y: direction > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit: (direction: number) => ({ y: direction > 0 ? "-100%" : "100%", opacity: 0 }),
};

export default function SeccionesSecciones() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const step = journeySteps[active];
  const total = journeySteps.length;

  const goTo = (to: number) => {
    if (to === active || to < 0 || to >= total) return;
    setDirection(to > active ? 1 : -1);
    setActive(to);
  };

  return (
    <>
      {/* Header */}
      <section className="relative bg-[#0E0E0E] pt-40 pb-[10px] md:pt-48 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(245,242,236,0.03) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="container-ferro relative z-10">
          <motion.div
            initial={false}
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
              Hasta 6 secciones para contar tu historia completa
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Vista previa interactiva */}
      <section className="relative bg-[#0E0E0E] pt-[10px] pb-[10px]">
        <div className="container-ferro">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-4">
              Así recorre tu visitante la página
            </h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Así se ve tu sitio, sección por sección, en el orden en que el visitante la lee.
            </p>

            <div className="mx-auto max-w-[780px] overflow-hidden rounded-xl border border-[#F5F2EC]/10 bg-[#141414] shadow-[0_28px_60px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2 border-b border-[#F5F2EC]/10 bg-[#1A1A1A] px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EC]/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EC]/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EC]/20" />
                <div className="ml-4 flex-1 truncate rounded-md bg-[#0E0E0E] px-3 py-1 text-[11px] text-[#F5F2EC]/40">
                  tusitio.com/#{step.anchor}
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#F5F2EC]/10 px-5 py-2.5">
                <span className="font-serif text-[14px] text-[#C9A84C]">Tu Marca</span>
                <div className="hidden gap-4 text-[11px] md:flex">
                  {journeySteps.map((s, i) => (
                    <span key={s.anchor} className={i === active ? "text-[#C9A84C]" : "text-[#F5F2EC]/35"}>
                      {s.nav}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative h-[300px] overflow-hidden bg-[#0E0E0E] md:h-[280px]">
                <AnimatePresence custom={direction} initial={false}>
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: EASE }}
                    className="absolute inset-0"
                  >
                    <SectionMock index={active} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mx-auto mt-5 flex max-w-[780px] items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                aria-label="Sección anterior"
                className="inline-flex items-center gap-2 rounded-lg border border-[#C9A84C]/40 px-4 py-2 text-[14px] text-[#C9A84C] transition-colors enabled:hover:bg-[#C9A84C]/10 disabled:cursor-not-allowed disabled:opacity-30 ferro-focus"
              >
                <ChevronLeft size={18} />
                Anterior
              </button>

              <div className="flex items-center gap-2">
                {journeySteps.map((s, i) => (
                  <button
                    key={s.title}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Ir a ${s.title}`}
                    aria-current={i === active}
                    className={`h-2.5 rounded-full transition-all ${
                      i === active ? "w-8 bg-[#C9A84C]" : "w-2.5 bg-[#F5F2EC]/25 hover:bg-[#F5F2EC]/50"
                    } ferro-focus`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(active + 1)}
                disabled={active === total - 1}
                aria-label="Sección siguiente"
                className="inline-flex items-center gap-2 rounded-lg border border-[#C9A84C]/40 px-4 py-2 text-[14px] text-[#C9A84C] transition-colors enabled:hover:bg-[#C9A84C]/10 disabled:cursor-not-allowed disabled:opacity-30 ferro-focus"
              >
                Siguiente
                <ChevronRight size={18} />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-10 rounded-lg border bg-[#1A1A1A] p-6 md:p-8 border-[#F5F2EC]/[0.08]"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="text-[13px] tracking-wide text-[#F5F2EC]/40">
                    Paso {active + 1} de {total}
                  </span>
                  <span className="text-[14px] tracking-wide text-[#C9A84C]/80">{step.question}</span>
                  {step.badge && (
                    <span className="rounded-full bg-[#C9A84C]/15 px-3 py-0.5 text-[12px] tracking-wide text-[#C9A84C]">
                      {step.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#C9A84C]/10">
                    <step.icon size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-serif text-[22px] font-light text-[#F5F2EC]">{step.title}</h3>
                    <p className="mb-3 text-[18px] font-light text-[#F5F2EC]/60">{step.purpose}</p>
                    <p className="text-[16px] font-light text-[#C9A84C]">→ {step.example}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Lo que ganas */}
      <section className="relative bg-[#0E0E0E] pt-[30px] pb-[20px]">
        <div className="container-ferro">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-12">
              Lo que ganas con esta estructura
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={false}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#C9A84C]/10 mb-4">
                  <TrendingUp size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-3">
                  Más clientes
                </h3>
                <p className="text-[18px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Cada sección tiene su propósito. Los clientes encuentran exactamente lo que buscaban.
                </p>
              </motion.div>

              <motion.div
                initial={false}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#C9A84C]/10 mb-4">
                  <Target size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-3">
                  Conversiones más altas
                </h3>
                <p className="text-[18px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Una estructura clara reduce abandonos. Los clientes van de punto A a B sin perderse.
                </p>
              </motion.div>

              <motion.div
                initial={false}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#C9A84C]/10 mb-4">
                  <Zap size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-3">
                  Experiencia profesional
                </h3>
                <p className="text-[18px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Tu sitio se ve organizado y confiable. Eso comunica que tu negocio es serio.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[#0E0E0E] pt-[40px] pb-[30px]">
        <div className="container-ferro">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/30 rounded-lg p-12 md:p-16 text-center"
          >
            <h2 className="font-serif text-[2rem] font-light text-[#F5F2EC] mb-4 max-w-2xl mx-auto">
              Una estructura que funciona
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/60 font-light max-w-2xl mx-auto mb-8">
              No es solo bonito. Es un sistema probado que convierte visitantes en clientes.
            </p>
            <Link href="/servicios" className="inline-flex items-center gap-2 px-8 py-3 bg-[#C9A84C] text-[#0E0E0E] rounded-lg no-underline ferro-focus group font-light">
              Ver todos nuestros servicios
              <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

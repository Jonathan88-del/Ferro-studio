import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  Home,
  Users,
  Briefcase,
  Phone,
  Award,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

const pages = [
  {
    icon: Home,
    path: "/",
    nav: "Inicio",
    title: "Inicio",
    label: "Página 1",
    purpose: "Tu tarjeta de presentación. Lo primero que ven es quién eres.",
  },
  {
    icon: Users,
    path: "/sobre-ti",
    nav: "Sobre ti",
    title: "Sobre ti",
    label: "Página 2",
    purpose: "Tu historia. Por qué empezaste, tu experiencia y por qué los clientes confían en ti.",
  },
  {
    icon: Briefcase,
    path: "/servicios",
    nav: "Servicios",
    title: "Servicios",
    label: "Página 3",
    purpose: "Lo que ofreces. Precios, beneficios y qué esperar cuando contratan.",
  },
  {
    icon: Phone,
    path: "/contacto",
    nav: "Contacto",
    title: "Contacto",
    label: "Página 4",
    purpose: "Cómo te llaman. Formulario, teléfono, email o redes. Fácil de encontrar.",
  },
  {
    icon: Award,
    path: "/casos",
    nav: "Casos",
    title: "Lo que diferencia",
    label: "Páginas 5 y 6",
    purpose: "Casos de éxito, trabajos realizados, certificaciones y testimonios de clientes.",
  },
];

const pageVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
};

const bar = "rounded-full bg-[#F5F2EC]/15";

function PageMock({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <div className="flex h-full flex-col items-center justify-center px-6 text-center md:px-10">
          <p className="font-serif text-[26px] leading-tight text-[#F5F2EC]">
            Tu nombre y lo que haces, en una frase
          </p>
          <p className="mt-3 max-w-md text-[14px] text-[#F5F2EC]/50">
            Ayudamos a negocios como el tuyo a conseguir más clientes cada mes.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <span className="rounded-md bg-[#C9A84C] px-5 py-2 text-[13px] text-[#0E0E0E]">
              Pide tu presupuesto
            </span>
            <span className="rounded-md border border-[#F5F2EC]/20 px-5 py-2 text-[13px] text-[#F5F2EC]/70">
              Conoce más
            </span>
          </div>
          <p className="mt-4 text-[12px] text-[#C9A84C]/80">★★★★★ 4.9 · +250 clientes satisfechos</p>
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
            <p className="font-serif text-[22px] text-[#F5F2EC]">Por qué empezamos</p>
            <div className={`h-2 w-full ${bar}`} />
            <div className={`h-2 w-11/12 ${bar}`} />
            <ul className="space-y-1.5 pt-1">
              {["Años de experiencia en el sector", "Proyectos realizados con éxito", "Lo que nos diferencia"].map((item) => (
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
          <p className="mb-4 text-center font-serif text-[22px] text-[#F5F2EC]">Nuestros servicios</p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              { name: "Monotributo", desc: "Alta, categorías y recategorización" },
              { name: "AFIP", desc: "Declaraciones y vencimientos al día" },
              { name: "Contabilidad mensual", desc: "Balances y reportes para tu negocio" },
            ].map((service) => (
              <div key={service.name} className="flex flex-col rounded-lg border border-[#F5F2EC]/10 bg-[#1A1A1A] p-4">
                <p className="mb-1 font-serif text-[18px] text-[#C9A84C]">{service.name}</p>
                <p className="mb-4 flex-1 text-[13px] text-[#F5F2EC]/60">{service.desc}</p>
                <p className="text-[12px] text-[#F5F2EC]/50">Ver detalle →</p>
              </div>
            ))}
          </div>
        </div>
      );
    case 3:
      return (
        <div className="flex h-full flex-col justify-center px-6 md:px-10">
          <p className="mb-4 text-center font-serif text-[22px] text-[#F5F2EC]">Resultados reales</p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              { value: "+120%", label: "Ventas en 6 meses" },
              { value: "48 h", label: "Tiempo de respuesta" },
              { value: "5 años", label: "Clientes que siguen con nosotros" },
            ].map((item) => (
              <div key={item.value} className="rounded-lg border border-[#C9A84C]/25 bg-[#1A1A1A] p-5 text-center">
                <p className="mb-1 font-serif text-[30px] text-[#C9A84C]">{item.value}</p>
                <p className="text-[13px] text-[#F5F2EC]/60">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-[13px] italic text-[#F5F2EC]/50">
            “Desde que tenemos la web, los clientes llegan preguntando por lo que ofrecemos.”
          </p>
        </div>
      );
    case 4:
      return (
        <div className="flex h-full flex-col justify-center gap-6 px-6 md:flex-row md:px-10">
          <div className="flex-1 space-y-3">
            <p className="font-serif text-[22px] text-[#F5F2EC]">Hablemos</p>
            <p className="text-[13px] text-[#F5F2EC]/60">Teléfono: +00 000 000 000</p>
            <p className="text-[13px] text-[#F5F2EC]/60">Email: hola@tuempresa.com</p>
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

export default function SeccionPaginas() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const page = pages[active];
  const total = pages.length;

  const goTo = (to: number) => {
    if (to === active || to < 0 || to >= total) return;
    setDirection(to > active ? 1 : -1);
    setActive(to);
  };

  return (
    <>
      {/* Header */}
      <section className="relative bg-[#0E0E0E] pt-40 pb-[10px] md:pt-48 md:pb-[10px] overflow-hidden">
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
              10 páginas distintas que trabajan juntas
            </h1>
            <p className="text-[20px] text-[#F5F2EC]/60 font-light max-w-2xl leading-relaxed">
              En lugar de una única página, tienes 10 secciones separadas con su propio menú.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: ¿Qué significa hasta 10 secciones? */}
      <section className="relative bg-[#0E0E0E] pt-[40px] pb-[10px]">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-4">
              ¿Qué significa "hasta 10 paginas"?
            </h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Sitio web es como una oficina. En lugar de un único mostrador donde lo explicar todo, tienes 10 mostradores dedicados a diferentes temas.
            </p>

            <div className="mx-auto max-w-[780px] overflow-hidden rounded-xl border border-[#F5F2EC]/10 bg-[#141414] shadow-[0_28px_60px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2 border-b border-[#F5F2EC]/10 bg-[#1A1A1A] px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EC]/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EC]/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EC]/20" />
                <div className="ml-4 flex-1 truncate rounded-md bg-[#0E0E0E] px-3 py-1 text-[11px] text-[#F5F2EC]/40">
                  tusitio.com{page.path}
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-[#F5F2EC]/10 px-5 py-2.5">
                <span className="font-serif text-[14px] text-[#C9A84C]">Tu Marca</span>
                <div className="hidden gap-4 text-[11px] md:flex">
                  {pages.map((p, i) => (
                    <span key={p.path} className={i === active ? "text-[#C9A84C]" : "text-[#F5F2EC]/35"}>
                      {p.nav}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative h-[300px] overflow-hidden bg-[#0E0E0E] md:h-[280px]">
                <AnimatePresence custom={direction} initial={false}>
                  <motion.div
                    key={active}
                    custom={direction}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.45, ease: EASE }}
                    className="absolute inset-0"
                  >
                    <PageMock index={active} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="mx-auto mt-5 flex max-w-[780px] items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                aria-label="Página anterior"
                className="inline-flex items-center gap-2 rounded-lg border border-[#C9A84C]/40 px-4 py-2 text-[14px] text-[#C9A84C] transition-colors enabled:hover:bg-[#C9A84C]/10 disabled:cursor-not-allowed disabled:opacity-30 ferro-focus"
              >
                <ChevronLeft size={18} />
                Anterior
              </button>

              <div className="flex items-center gap-2">
                {pages.map((p, i) => (
                  <button
                    key={p.path}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Ir a ${p.title}`}
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
                aria-label="Página siguiente"
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
                className="mx-auto mt-10 max-w-[780px] rounded-lg border border-[#F5F2EC]/[0.08] bg-[#1A1A1A] p-6 md:p-8"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="text-[13px] tracking-wide text-[#F5F2EC]/40">
                    {page.label} · {page.path}
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#C9A84C]/10">
                    <page.icon size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 font-serif text-[22px] font-light text-[#F5F2EC]">{page.title}</h3>
                    <p className="text-[18px] font-light text-[#F5F2EC]/60">{page.purpose}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Section 2: ¿Por qué debería importarte? */}
      <section className="relative bg-[#0E0E0E] pt-[50px] pb-[20px]">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-4">
              ¿Por qué debería importarte?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#C9A84C]/10 mb-4">
                  <TrendingUp size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-3">
                  Más clientes
                </h3>
                <p className="text-[16px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Si alguien busca en Google "consultoría legal en Madrid", tu página de servicios aparece. Si busca "casos de éxito", aparece la otra. Ganas en más búsquedas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#C9A84C]/10 mb-4">
                  <Zap size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-3">
                  Clientes exactos
                </h3>
                <p className="text-[16px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  No todos llegan a tu página de inicio. El que busca "contacto" va directo al contacto. Sin perder tiempo.
                </p>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Visual Example */}
      <section className="relative bg-[#0E0E0E] pt-[50px] pb-[30px]">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-4">
              Cómo lo ve un cliente en la práctica
            </h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Imagina que alguien busca en Google "tus servicios":
            </p>

            <div className="space-y-8">
              {/* Paso 1: Búsqueda en Google */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8 md:p-12"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-[50px] text-[#C9A84C] font-light pb-[10px]">1</span>
                  </div>
                  <h3 className="font-serif text-[24px] font-light text-[#F5F2EC]">
                    Busca en Google
                  </h3>
                </div>
                <p className="text-[20px] text-[#F5F2EC]/50 font-light mb-6 ml-14">
                  Alguien escribe "Contador en CABA" en Google
                </p>
                <div className="ml-14 bg-[#0E0E0E] rounded-lg p-6 border border-[#F5F2EC]/[0.06]">
                  <p className="text-[18px] text-[#F5F2EC]/40 font-light mb-3">
                    Resultado de búsqueda:
                  </p>
                  <div className="space-y-2">
                    <p className="text-[16px] text-[#C9A84C] font-light">
                      Tu Empresa - Servicio contable
                    </p>
                    <p className="text-[14px] text-[#F5F2EC]/40 font-light">
                      www.tuempresa.com/servicios
                    </p>
                    <p className="text-[16px] text-[#F5F2EC]/35 font-light">
                      Descubre nuestros servicios financieros.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Paso 2: Hace clic */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8 md:p-12"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-[50px] text-[#C9A84C] font-light pb-[10px]">2</span>
                  </div>
                  <h3 className="font-serif text-[24px] font-light text-[#F5F2EC]">
                    Hace clic y va directamente a Servicios
                  </h3>
                </div>
                <p className="text-[18px] text-[#F5F2EC]/50 font-light mb-6 ml-14">
                  No va al inicio, va directamente a la página que busca
                </p>
                <div className="ml-14 bg-[#0E0E0E] rounded-lg p-6 border border-[#F5F2EC]/[0.06] space-y-4">
                  {/* Mock Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#F5F2EC]/[0.1]">
                    <p className="text-[16px] text-[#C9A84C] font-light">Logo</p>
                    <div className="flex gap-6 text-[16px] text-[#F5F2EC]/50 font-light">
                      <p>Inicio</p>
                      <p className="text-[#C9A84C]">Servicios ← Está aquí</p>
                      <p>Contacto</p>
                    </div>
                  </div>
                  {/* Mock Content */}
                  <div className="pt-4 space-y-2">
                    <p className="text-[20px] text-[#F5F2EC] font-serif font-light">
                      Nuestros Servicios
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-4 text-[0.8rem] text-[#F5F2EC]/40 font-light">
                      <div className="bg-[#1A1A1A] p-3 rounded border border-[#F5F2EC]/[0.1]">
                        <p className="text-[16px] text-[#C9A84C] font-light mb-1">Monotributo</p>
                      </div>
                      <div className="bg-[#1A1A1A] p-3 rounded border border-[#F5F2EC]/[0.1]">
                        <p className="text-[16px] text-[#C9A84C] font-light mb-1">AFIP</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Paso 3: Ve exactamente lo que busca */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#51CF66]/30 rounded-lg p-8 md:p-12"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#51CF66]/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-[40px] text-[#51CF66] font-light pb-[23px]">3</span>
                  </div>
                  <h3 className="font-serif text-[24px] font-light text-[#F5F2EC]">
                    Resultado: Conversión
                  </h3>
                </div>
                <ul className="ml-14 space-y-3">
                  <li className="flex gap-3 text-[18px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>Ve exactamente lo que buscaba: tus servicios</span>
                  </li>
                  <li className="flex gap-3 text-[18px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>No pierde tiempo scrolleando</span>
                  </li>
                  <li className="flex gap-3 text-[18px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>Te llama</span>
                  </li>
                  <li className="flex gap-3 text-[18px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>¡Nuevo cliente!</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Quick Numbers */}
      <section className="relative bg-[#0E0E0E] pt-1 pb-5">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-12">
              El impacto en números
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8 text-center"
              >
                <p className="text-[50px] font-serif font-light text-[#C9A84C] mb-2">
                  +300%
                </p>
                <p className="text-[18px] text-[#F5F2EC]/60 font-light">
                  Más búsquedas en Google que te encuentran
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8 text-center"
              >
                <p className="text-[50px] font-serif font-light text-[#C9A84C] mb-2">
                  -60%
                </p>
                <p className="text-[18px] text-[#F5F2EC]/60 font-light">
                  Menos visitantes que se van sin convertir
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8 text-center"
              >
                <p className="text-[50px] font-serif font-light text-[#C9A84C] mb-2">
                  24/7
                </p>
                <p className="text-[18px] text-[#F5F2EC]/60 font-light">
                  Trabajan por ti sin descanso
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

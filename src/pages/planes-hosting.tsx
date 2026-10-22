import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Activity,
  History,
  ShieldCheck,
  Gauge,
  AlertCircle,
  CheckCircle,
  Server,
  Clock,
  Lock,
  Shield,
  Zap,
} from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE },
};

function SecureLockDemo() {
  const [secure, setSecure] = useState(false);

  return (
    <div className="relative w-full max-w-[340px] shrink-0 overflow-hidden rounded-lg border border-[#F5F2EC]/10 bg-[#1A1A1A]">
      <div className="flex items-center border-b border-[#F5F2EC]/10 px-3 py-2.5">
        <div aria-hidden="true" className="flex gap-2">
          <span className="h-2 w-2 rounded-full bg-[#F5F2EC]/20" />
          <span className="h-2 w-2 rounded-full bg-[#F5F2EC]/20" />
          <span className="h-2 w-2 rounded-full bg-[#F5F2EC]/20" />
        </div>
        <div className="ml-3 flex flex-1 items-center gap-2 rounded-md bg-[#0E0E0E] px-3 py-1.5">
          <motion.button
            type="button"
            onClick={() => setSecure((v) => !v)}
            aria-label={secure ? "Sitio seguro" : "Sitio no seguro, hacé clic para verificar"}
            aria-pressed={secure}
            animate={secure ? { scale: 1 } : { scale: [1, 1.2, 1] }}
            transition={secure ? { duration: 0.2 } : { duration: 1.6, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
            whileTap={{ scale: 0.85 }}
            className={`ferro-focus flex transition-colors duration-300 ${secure ? "text-[#51CF66]" : "text-[#FF6B6B]"}`}
          >
            <Lock size={13} strokeWidth={1.8} />
          </motion.button>
          <span className="text-[12px] text-[#F5F2EC]/50">tusitio.com</span>
        </div>
      </div>

      <div className="relative h-[150px] p-5">
        <div aria-hidden="true" className="space-y-3">
          <div className="h-2.5 w-3/4 rounded bg-[#F5F2EC]/10" />
          <div className="h-2.5 w-full rounded bg-[#F5F2EC]/10" />
          <div className="h-2.5 w-2/3 rounded bg-[#F5F2EC]/10" />
        </div>

        <div
          className={`absolute inset-x-5 bottom-4 rounded-md border px-3 py-2.5 transition-colors duration-300 ${
            secure ? "border-[#51CF66]/40 bg-[#51CF66]/10" : "border-[#FF6B6B]/40 bg-[#FF6B6B]/10"
          }`}
        >
          <p className={`text-[13px] font-medium ${secure ? "text-[#51CF66]" : "text-[#FF6B6B]"}`}>
            {secure ? "Sitio seguro" : "Sitio no seguro"}
          </p>
          <p className="mt-0.5 text-[12px] font-light text-[#F5F2EC]/60">
            {secure ? "Conexión cifrada y sin amenazas." : "Se detectaron virus. Hacé clic en el candado."}
          </p>
        </div>
      </div>
    </div>
  );
}

const WITHOUT = [
  "Tu sitio puede caer sin que te enteres",
  "Podés perder clientes mientras dormís",
  "Tenés que buscar un técnico cuando algo falla",
];

const WITH = [
  "Tu sitio se mantiene disponible",
  "Tus clientes siempre pueden contactarte",
  "Nosotros nos ocupamos de los problemas técnicos",
  "Vos podés dedicarte a tu negocio",
];

const FUNCTIONS = [
  {
    icon: Activity,
    title: "Monitoreo constante",
    desc: "Supervisamos que tu sitio esté disponible las 24 horas, para detectar cualquier caída rápidamente.",
  },
  {
    icon: History,
    title: "Control de versiones y respaldo",
    desc: "Conservamos el historial del proyecto para poder recuperar versiones anteriores cuando haga falta.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad gestionada",
    desc: "Protección con Cloudflare, HTTPS y firewall para cuidar el sitio y los datos de tus visitantes.",
  },
  {
    icon: Gauge,
    title: "Optimización continua",
    desc: "Revisamos el rendimiento y la velocidad, y aplicamos mejoras periódicas para una buena experiencia de uso.",
  },
];

const PILLARS = [
  {
    icon: Server,
    title: "Servidor confiable",
    desc: "Infraestructura profesional pensada para mantener tu sitio disponible.",
  },
  {
    icon: Clock,
    title: "Atención rápida",
    desc: "Si algo falla, reaccionamos enseguida para que no te quedes esperando horas.",
  },
  {
    icon: Lock,
    title: "Seguridad cuidada",
    desc: "Protegemos tu sitio frente a ataques y malware, y tenés respaldo para recuperar la información.",
  },
];

const BENEFITS = [
  {
    icon: Shield,
    title: "Tranquilidad",
    desc: "No necesitás ocuparte de temas técnicos. Nosotros vigilamos el sitio por vos.",
    takeaway: "Vos dedicate a tu negocio.",
  },
  {
    icon: CheckCircle,
    title: "Disponibilidad",
    desc: "Tus clientes encuentran el sitio cuando lo buscan, sin interrupciones por fallas que nadie vio venir.",
    takeaway: "Menos clientes perdidos.",
  },
  {
    icon: Zap,
    title: "Velocidad",
    desc: "Un sitio rápido retiene a las personas, y la velocidad también es un factor que Google tiene en cuenta.",
    takeaway: "Mejor experiencia y mejor posicionamiento.",
  },
  {
    icon: Lock,
    title: "Información protegida",
    desc: "Las medidas de seguridad ayudan a proteger los datos de tu sitio y de tus visitantes.",
    takeaway: "Más confianza para tus clientes.",
  },
];

export default function PlanesHosting() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0E0E0E] pt-28 pb-[60px] md:pt-32 md:pb-[10px]">
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
            <Link href="/planes" className="group mb-8 inline-flex items-center gap-2 no-underline ferro-focus">
              <ArrowLeft size={16} className="text-[#C9A84C]/70 transition-colors group-hover:text-[#C9A84C]" />
              <span className="text-[14px] tracking-wide text-[#C9A84C]/70 transition-colors group-hover:text-[#C9A84C]">
                Volver a Planes
              </span>
            </Link>

            <p className="mb-6 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Mantenimiento técnico</p>
            <div className="mb-6 flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-14">
              <h1 className="max-w-3xl font-serif text-[44px] font-light leading-[1.08] tracking-[-0.018em] text-[#F5F2EC] md:text-[54px]">
                Hosting administrado: tu sitio online, sin que tengas que vigilarlo
              </h1>
              <SecureLockDemo />
            </div>
            <p className="max-w-2xl text-[19px] font-light leading-relaxed text-[#F5F2EC]/60">
              Es el servicio que mantiene tu página disponible, protegida y funcionando bien, con alguien pendiente de ella todo el tiempo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Qué problema resuelve */}
      <section className="relative bg-[#0E0E0E] pt-[60px] md:pt-[80px] pb-[10px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Para entenderlo</p>
            <h2 className="mb-4 font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              ¿Por qué importa el hosting administrado?
            </h2>
            <p className="text-[18px] font-light leading-relaxed text-[#F5F2EC]/55">
              Tu sitio trabaja como un vendedor las 24 horas. Si deja de funcionar, dejás de recibir consultas sin darte cuenta.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div
              {...fadeUp}
              className="rounded-lg border border-[#F5F2EC]/[0.08] bg-[#1A1A1A] p-7 md:p-8"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-[#FF6B6B]/30 bg-[#FF6B6B]/10">
                <AlertCircle size={20} className="text-[#FF6B6B]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 font-serif text-[22px] font-light text-[#F5F2EC]">Sin hosting administrado</h3>
              <p className="mb-5 text-[17px] font-light leading-relaxed text-[#F5F2EC]/55">
                Todo depende de vos. Ante un error, el sitio puede quedar caído durante horas.
              </p>
              <ul className="space-y-3">
                {WITHOUT.map((text) => (
                  <li key={text} className="flex gap-3 text-[16px] font-light text-[#F5F2EC]/70">
                    <span className="mt-[2px] text-[#FF6B6B]">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="rounded-lg border border-[#51CF66]/30 bg-[#1A1A1A] p-7 md:p-8"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-[#51CF66]/30 bg-[#51CF66]/10">
                <CheckCircle size={20} className="text-[#51CF66]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 font-serif text-[22px] font-light text-[#F5F2EC]">Con hosting administrado</h3>
              <p className="mb-5 text-[17px] font-light leading-relaxed text-[#F5F2EC]/55">
                Nosotros nos ocupamos del funcionamiento técnico, y vos te concentrás en tu negocio.
              </p>
              <ul className="space-y-3">
                {WITH.map((text) => (
                  <li key={text} className="flex gap-3 text-[16px] font-light text-[#F5F2EC]/70">
                    <span className="mt-[2px] text-[#51CF66]">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="relative bg-[#0E0E0E] pt-[60px] md:pt-[80px] pb-[10px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Qué hacemos</p>
            <h2 className="font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              Cuatro tareas que funcionan sin que tengas que pedirlas
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {FUNCTIONS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
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

      {/* Pilares */}
      <section className="relative bg-[#0E0E0E] pt-[60px] md:pt-[80px] pb-[10px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Tres pilares</p>
            <h2 className="font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              Qué te garantiza el servicio
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PILLARS.map((item, index) => {
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

      {/* Beneficios */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Lo que ganás</p>
            <h2 className="font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              Beneficios para vos y para tus clientes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {BENEFITS.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.8, ease: EASE, delay: index * 0.08 }}
                  className="flex flex-col rounded-lg border border-[#F5F2EC]/[0.08] bg-[#1A1A1A] p-7"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <Icon size={20} className="text-[#C9A84C]" strokeWidth={1.5} />
                    <h3 className="font-serif text-[21px] font-light text-[#F5F2EC]">{item.title}</h3>
                  </div>
                  <p className="mb-5 text-[16px] font-light leading-relaxed text-[#F5F2EC]/55">{item.desc}</p>
                  <p className="mt-auto flex items-center gap-2 border-t border-[#F5F2EC]/[0.08] pt-4 text-[16px] text-[#C9A84C]">
                    <ArrowRight size={16} strokeWidth={1.5} />
                    {item.takeaway}
                  </p>
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
              Un sitio que funciona mientras vos trabajás
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[1rem] font-light leading-relaxed text-[#F5F2EC]/60">
              Con hosting administrado, el mantenimiento técnico queda en manos de quien sabe hacerlo.
            </p>
            <Link
              href="/planes"
              className="ferro-focus group inline-flex items-center gap-2 rounded-lg bg-[#C9A84C] px-8 py-3 font-light text-[#0E0E0E] no-underline"
            >
              Ver todos nuestros planes
              <ArrowLeft size={16} className="rotate-180 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

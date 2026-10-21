import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  Clock,
  Lock,
  RefreshCw,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE },
};

const WITHOUT_SSL = [
  "La información viaja sin cifrar",
  "El navegador muestra una advertencia de sitio no seguro",
  "Los visitantes desconfían y se van",
];

const WITH_SSL = [
  "La información viaja cifrada entre el visitante y tu sitio",
  "El navegador muestra el candado de conexión segura",
  "Los visitantes pueden compartir datos con más tranquilidad",
];

const RENEWAL = [
  {
    icon: Clock,
    title: "El certificado vence",
    desc: "Los certificados SSL tienen fecha de vencimiento. Si nadie los renueva, dejan de funcionar.",
  },
  {
    icon: AlertTriangle,
    title: "Sin renovación, aparece la advertencia",
    desc: "Al vencer, el navegador muestra una alerta y los visitantes pueden dejar de entrar al sitio.",
  },
  {
    icon: RefreshCw,
    title: "Con nosotros, se renueva solo",
    desc: "Gestionamos la renovación antes de que venza, para que no tengas que anotar fechas ni acordarte de nada.",
  },
  {
    icon: CheckCircle,
    title: "La conexión sigue segura",
    desc: "El candado se mantiene vigente y tus clientes siguen entrando con tranquilidad.",
  },
];

const BENEFITS = [
  {
    icon: Shield,
    title: "Tranquilidad",
    desc: "No necesitás recordar fechas de vencimiento. La renovación queda a cargo nuestro.",
    takeaway: "Olvidate de los vencimientos.",
  },
  {
    icon: Lock,
    title: "Visitantes protegidos",
    desc: "El cifrado ayuda a proteger la información que tus clientes envían a través del sitio.",
    takeaway: "Más confianza al contactarte.",
  },
  {
    icon: ShieldCheck,
    title: "Buenas prácticas de seguridad",
    desc: "Un sitio con conexión segura cumple con lo que hoy esperan los navegadores y los usuarios.",
    takeaway: "Tu sitio se ve profesional.",
  },
  {
    icon: CheckCircle,
    title: "Continuidad",
    desc: "Al mantener el certificado vigente, evitás interrupciones por advertencias de seguridad.",
    takeaway: "Tu sitio siempre disponible y seguro.",
  },
];

export default function PlanesSSL() {
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
            <Link href="/planes" className="group mb-8 inline-flex items-center gap-2 no-underline ferro-focus">
              <ArrowLeft size={16} className="text-[#C9A84C]/70 transition-colors group-hover:text-[#C9A84C]" />
              <span className="text-[14px] tracking-wide text-[#C9A84C]/70 transition-colors group-hover:text-[#C9A84C]">
                Volver a Planes
              </span>
            </Link>

            <p className="mb-6 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Seguridad del sitio</p>
            <h1 className="mb-6 max-w-4xl font-serif text-[44px] font-light leading-[1.08] tracking-[-0.018em] text-[#F5F2EC] md:text-[54px]">
              Gestión y renovación automática del SSL
            </h1>
            <p className="max-w-2xl text-[19px] font-light leading-relaxed text-[#F5F2EC]/60">
              El certificado SSL es lo que hace que tu sitio sea seguro. Nosotros nos encargamos de que siga funcionando sin interrupciones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Qué es SSL */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Para entenderlo</p>
            <h2 className="mb-4 font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              ¿Qué es SSL y por qué importa?
            </h2>
            <p className="text-[18px] font-light leading-relaxed text-[#F5F2EC]/55">
              SSL es el candado que aparece en la barra del navegador. Indica que la conexión con tu sitio es segura.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.div {...fadeUp} className="rounded-lg border border-[#F5F2EC]/[0.08] bg-[#1A1A1A] p-7 md:p-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-[#FF6B6B]/30 bg-[#FF6B6B]/10">
                <AlertCircle size={20} className="text-[#FF6B6B]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 font-serif text-[22px] font-light text-[#F5F2EC]">Sin SSL</h3>
              <p className="mb-5 text-[17px] font-light leading-relaxed text-[#F5F2EC]/55">
                El sitio no tiene el candado y los visitantes lo perciben como menos confiable.
              </p>
              <ul className="space-y-3">
                {WITHOUT_SSL.map((text) => (
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
              className="rounded-lg border border-[#C9A84C]/30 bg-[#1A1A1A] p-7 md:p-8"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-[#C9A84C]/30 bg-[#C9A84C]/10">
                <Lock size={20} className="text-[#C9A84C]" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 font-serif text-[22px] font-light text-[#F5F2EC]">Con SSL</h3>
              <p className="mb-5 text-[17px] font-light leading-relaxed text-[#F5F2EC]/55">
                El sitio muestra el candado y la conexión queda protegida para quien lo visita.
              </p>
              <ul className="space-y-3">
                {WITH_SSL.map((text) => (
                  <li key={text} className="flex gap-3 text-[16px] font-light text-[#F5F2EC]/70">
                    <span className="mt-[2px] text-[#C9A84C]">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Renovación */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Renovación</p>
            <h2 className="font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              El certificado vence, pero la renovación queda cubierta
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {RENEWAL.map((item, index) => {
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

      {/* Beneficios */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="mb-12 max-w-3xl">
            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Lo que ganás</p>
            <h2 className="font-serif text-[36px] font-light leading-tight text-[#F5F2EC]">
              Beneficios de la gestión automática del SSL
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
              Tu sitio seguro, sin fechas que recordar
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[1rem] font-light leading-relaxed text-[#F5F2EC]/60">
              Nosotros gestionamos el certificado y su renovación para que tu conexión siga protegida.
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

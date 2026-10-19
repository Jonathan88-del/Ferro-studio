import { motion } from "framer-motion";
import { Home, Users, Briefcase, MessageSquare, Images, Mail, ArrowLeft, TrendingUp, Target, Zap } from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

const journeySteps = [
  {
    icon: Home,
    question: "¿Esto es para mí?",
    title: "Inicio",
    purpose: "Tu portada. El primer encuentro. Tienes 3 segundos para que NO se vaya.",
    example: "Un beneficio claro, un título convincente y una llamada a acción",
    highlight: false,
    badge: "",
  },
  {
    icon: Users,
    question: "¿Puedo confiar en ti?",
    title: "Sobre ti / Tu historia",
    purpose: "Aquí construyes confianza. El cliente quiere saber quién eres y por qué debería creerte.",
    example: "Tu experiencia, años en el negocio, por qué empezaste, qué te diferencia",
    highlight: false,
    badge: "",
  },
  {
    icon: Briefcase,
    question: "¿Qué me vendes y cuánto cuesta?",
    title: "Servicios / Productos",
    purpose: "Aquí VENDES. Explica qué ofreces, precios, paquetes y qué esperar.",
    example: "La sección más importante. Aquí pasan las conversiones",
    highlight: true,
    badge: "Clave",
  },
  {
    icon: MessageSquare,
    question: "¿Qué dicen otros de ti?",
    title: "Testimonios / Casos de éxito",
    purpose: "Otros clientes hablan por ti. Esto MULTIPLICA la confianza.",
    example: "\"Yo traté con ellos y fue excelente\". Más poderoso que cualquier cosa que digas tú",
    highlight: false,
    badge: "",
  },
  {
    icon: Images,
    question: "¿Lo has hecho antes?",
    title: "Galería / Portafolio / Proyectos",
    purpose: "Muestra tu trabajo. Una imagen vale 1.000 palabras.",
    example: "Fotos de trabajos anteriores, proyectos completados, resultados tangibles",
    highlight: false,
    badge: "",
  },
  {
    icon: Mail,
    question: "¿Cómo te contacto ahora?",
    title: "Contacto",
    purpose: "El final. Aquí el cliente se contacta contigo. Hazlo fácil.",
    example: "Formulario, teléfono, email, ubicación, horarios. Visible y clara",
    highlight: true,
    badge: "Acción final",
  },
];


export default function SeccionesSecciones() {
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

      {/* Section 1: Cómo se recorre la página */}
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
              La gente lee tu sitio de arriba hacia abajo, como una conversación. Cada sección responde
              una pregunta que el visitante se hace en ese orden. Si una pregunta queda sin respuesta, se va.
            </p>

            <ol className="relative ml-4 border-l border-[#C9A84C]/25 space-y-6 md:ml-6">
              {journeySteps.map((step, index) => (
                <motion.li
                  key={step.title}
                  initial={false}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative pl-8 md:pl-12"
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[17px] top-6 flex h-8 w-8 items-center justify-center rounded-full border font-serif text-[15px] ${
                      step.highlight
                        ? "border-[#C9A84C] bg-[#C9A84C] text-[#0E0E0E]"
                        : "border-[#C9A84C]/40 bg-[#0E0E0E] text-[#C9A84C]"
                    }`}
                  >
                    {index + 1}
                  </span>

                  <div
                    className={`rounded-lg border bg-[#1A1A1A] p-6 md:p-8 ${
                      step.highlight ? "border-[#C9A84C]/50" : "border-[#F5F2EC]/[0.08]"
                    }`}
                  >
                    <div className="mb-4 flex flex-wrap items-center gap-3">
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
                  </div>
                </motion.li>
              ))}
            </ol>
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

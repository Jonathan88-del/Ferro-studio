import { motion } from "framer-motion";
import { Home, Users, Briefcase, MessageSquare, Images, Mail, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const SECTIONS = [
  { id: 1, name: "Inicio", icon: Home, description: "La puerta de entrada a tu negocio" },
  { id: 2, name: "Sobre nosotros", icon: Users, description: "Conecta con tus clientes" },
  { id: 3, name: "Servicios", icon: Briefcase, description: "Muestra lo que ofreces" },
  { id: 4, name: "Testimonios", icon: MessageSquare, description: "Construye confianza" },
  { id: 5, name: "Galería / Portafolio", icon: Images, description: "Exhibe tu trabajo" },
  { id: 6, name: "Contacto", icon: Mail, description: "Conecta con tus clientes" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SeccionesSecciones() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-[#0E0E0E] pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
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
              <span className="text-[0.85rem] text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors tracking-wide">
                Volver a Servicios
              </span>
            </Link>

            <div className="flex items-center gap-3 mb-8">
              <span className="w-5 h-px bg-[#C9A84C]/70" />
              <span className="tracking-[0.26em] uppercase font-sans text-[#C9A84C]/80 text-[20px]">
                Hasta 6 secciones
              </span>
            </div>
            <h1 className="font-serif font-light text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-3xl mb-6">
              Tu sitio web, estructurado para convertir
            </h1>
            <p className="text-[1.1rem] text-[#F5F2EC]/45 font-light max-w-2xl">
              6 secciones estratégicamente ordenadas para guiar a tus clientes desde el primer click hasta la compra. Sin templetes genéricos, solo lo que tu negocio necesita.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-[#0E0E0E] py-28 md:py-36 lg:py-44">
        <div className="container-ferro">
          {/* Problem & Solution */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-3xl mb-24"
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-6 leading-tight">
              El problema con los sitios sin estructura
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-6">
              Muchos negocios tienen sitios confusos: visitantes no entienden qué ofrecen, no saben en qué orden debe ir la información, o peor: se van sin dejar contacto.
            </p>
            <div className="bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-lg p-6 md:p-8">
              <p className="text-[1rem] text-[#F5F2EC]/60 font-light leading-relaxed">
                <span className="text-[#C9A84C] font-normal">Nuestra solución:</span> 6 secciones estratégicas que guían a tu cliente perfecto desde "¿Quién eres?" hasta "¿Cómo contrato?". Es un funnel de ventas disfrazado de sitio web elegante.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <h3 className="font-serif text-[2rem] font-light text-[#F5F2EC] mb-8 leading-tight">
                Cada sección cumple un rol en tu venta
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-[#C9A84C] text-[1.3rem] flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-serif text-[1rem] text-[#F5F2EC] mb-1">Inicio</h4>
                    <p className="text-[0.9rem] text-[#F5F2EC]/45 font-light">Convence en 3 segundos. El cliente decide si se queda o se va.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#C9A84C] text-[1.3rem] flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-serif text-[1rem] text-[#F5F2EC] mb-1">Sobre Nosotros</h4>
                    <p className="text-[0.9rem] text-[#F5F2EC]/45 font-light">Construye confianza. Cuéntale tu historia, tus valores, por qué existes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#C9A84C] text-[1.3rem] flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-serif text-[1rem] text-[#F5F2EC] mb-1">Servicios</h4>
                    <p className="text-[0.9rem] text-[#F5F2EC]/45 font-light">Vende. Aquí es donde la mayoría de conversiones pasan.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#C9A84C] text-[1.3rem] flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-serif text-[1rem] text-[#F5F2EC] mb-1">Testimonios</h4>
                    <p className="text-[0.9rem] text-[#F5F2EC]/45 font-light">Deja que otros clientes hablen por ti. Aumenta confianza.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#C9A84C] text-[1.3rem] flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-serif text-[1rem] text-[#F5F2EC] mb-1">Galería / Portafolio</h4>
                    <p className="text-[0.9rem] text-[#F5F2EC]/45 font-light">Muestra tu trabajo. Una imagen vale más que 1000 palabras.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#C9A84C] text-[1.3rem] flex-shrink-0">6</span>
                  <div>
                    <h4 className="font-serif text-[1rem] text-[#F5F2EC] mb-1">Contacto</h4>
                    <p className="text-[0.9rem] text-[#F5F2EC]/45 font-light">Cierra la venta. El cliente sabe cómo conectar contigo.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative"
            >
              <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0E0E0E] border border-[#F5F2EC]/[0.08] rounded-lg p-8 md:p-12 sticky top-8">
                <h4 className="font-serif text-[1.2rem] font-light text-[#F5F2EC] mb-8">
                  Ejemplos de secciones
                </h4>
                <div className="space-y-4">
                  {SECTIONS.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.06 }}
                        className="flex items-start gap-3 p-3 rounded-lg border border-[#F5F2EC]/[0.06] hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/[0.02] transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded border border-[#F5F2EC]/[0.1] flex items-center justify-center bg-[#1A1A1A]">
                          <Icon size={16} className="text-[#C9A84C]/70" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-serif text-[0.9rem] font-light text-[#F5F2EC]">
                            {section.name}
                          </h5>
                          <p className="text-[0.75rem] text-[#F5F2EC]/40 font-light">
                            {section.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-20"
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-8 leading-tight">
              Lo que realmente obtienes
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-12 max-w-2xl">
              No es solo tener 6 espacios para contenido. Es tener un sistema probado que reduce "bounce rates" y aumenta conversiones:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#C9A84C] text-[1.5rem]">✦</span>
                  <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC]">
                    Claridad Inmediata
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/45 font-light leading-relaxed">
                  El visitante entiende en 10 segundos qué haces, cómo lo haces y por qué debería trabajar contigo.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#C9A84C] text-[1.5rem]">✦</span>
                  <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC]">
                    Camino Claro
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/45 font-light leading-relaxed">
                  Cada sección guía naturalmente al cliente hacia la siguiente. No hay confusión sobre qué hacer.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#C9A84C] text-[1.5rem]">✦</span>
                  <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC]">
                    Más Conversiones
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/45 font-light leading-relaxed">
                  Una estructura bien pensada puede aumentar tus conversiones hasta 3x en comparación con sitios desordenados.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="bg-gradient-to-r from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8 md:p-12"
          >
            <div className="flex items-start gap-4">
              <span className="text-[#C9A84C] text-[1.6rem] flex-shrink-0">→</span>
              <div>
                <h3 className="font-serif text-[1.3rem] font-light text-[#F5F2EC] mb-3">
                  ¿Por qué funciona?
                </h3>
                <p className="text-[0.95rem] text-[#F5F2EC]/60 font-light leading-relaxed mb-6">
                  Es simple: los clientes necesitan un camino claro. Cuando llegan a tu sitio no quieren pensar dónde ir. Una estructura de 6 secciones es como un "mapa del tesoro" para tu negocio. Cada sección responde una pregunta que tu cliente se hace:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2 text-[0.85rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#C9A84C] mt-0.5">→</span>
                    <span>"¿Quién eres?" → Sobre nosotros</span>
                  </div>
                  <div className="flex items-start gap-2 text-[0.85rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#C9A84C] mt-0.5">→</span>
                    <span>"¿Qué ofreces?" → Servicios</span>
                  </div>
                  <div className="flex items-start gap-2 text-[0.85rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#C9A84C] mt-0.5">→</span>
                    <span>"¿Es bueno?" → Testimonios + Galería</span>
                  </div>
                  <div className="flex items-start gap-2 text-[0.85rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#C9A84C] mt-0.5">→</span>
                    <span>"¿Cómo contrato?" → Contacto</span>
                  </div>
                </div>
                <div className="bg-[#0E0E0E]/60 rounded-lg p-4 border border-[#F5F2EC]/[0.06]">
                  <p className="text-[0.85rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#C9A84C] font-normal">Resultado:</span> Visitantes que entienden tu valor en 1-2 minutos y saben exactamente cómo trabajar contigo.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

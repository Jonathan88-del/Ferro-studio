import { motion } from "framer-motion";
import { Home, Users, Briefcase, MessageSquare, Images, Mail, ArrowLeft, TrendingUp, Target, Zap } from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SeccionesSecciones() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-[#0E0E0E] pt-40 pb-[160px] md:pt-48 md:pb-40 overflow-hidden">
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

      {/* Section 1: Qué es cada sección */}
      <section className="relative bg-[#0E0E0E] pt-[40px] pb-[10px]">
        <div className="container-ferro">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-4">
              ¿Cuál es el trabajo de cada sección?
            </h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Es como el viaje de un cliente real en tu oficina: entra, te conoce, ve lo que haces, confía en ti y finalmente te contacta.
            </p>

            <div className="space-y-4">
              <motion.div
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <Home size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-2">
                      Sección 1: Inicio
                    </h3>
                    <p className="text-[18px] text-[#F5F2EC]/60 font-light mb-3">
                      Tu portada. El primer encuentro. Tienes 3 segundos para que NO se vaya.
                    </p>
                    <p className="text-[16px] text-[#C9A84C] font-light">
                      → Muestra un beneficio claro, un título convincente y una llamada a acción
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <Users size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-2">
                      Sección 2: Sobre ti / Tu historia
                    </h3>
                    <p className="text-[18px] text-[#F5F2EC]/60 font-light mb-3">
                      Aquí construyes confianza. El cliente quiere saber quién eres y por qué debería creerte.
                    </p>
                    <p className="text-[16px] text-[#C9A84C] font-light">
                      → Tu experiencia, años en el negocio, por qué empezaste, qué te diferencia
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <Briefcase size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-2">
                      Sección 3: Servicios / Productos
                    </h3>
                    <p className="text-[20px] text-[#F5F2EC]/60 font-light mb-3">
                      Aquí VENDES. Explica qué ofreces, precios, paquetes y qué esperar.
                    </p>
                    <p className="text-[18px] text-[#C9A84C] font-light">
                      → La sección más importante. Aquí pasan las conversiones
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <MessageSquare size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[24px] font-light text-[#F5F2EC] mb-2">
                      Sección 4: Testimonios / Casos de éxito
                    </h3>
                    <p className="text-[18px] text-[#F5F2EC]/60 font-light mb-3">
                      Otros clientes hablan por ti. Esto MULTIPLICA la confianza.
                    </p>
                    <p className="text-[16px] text-[#C9A84C] font-light">
                      → "Yo traté con ellos y fue excelente". Más poderoso que cualquier cosa que digas tú
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <Images size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-2">
                      Sección 5: Galería / Portafolio / Proyectos
                    </h3>
                    <p className="text-[18px] text-[#F5F2EC]/60 font-light mb-3">
                      Muestra tu trabajo. Una imagen vale 1.000 palabras.
                    </p>
                    <p className="text-[16px] text-[#C9A84C] font-light">
                      → Fotos de trabajos anteriores, proyectos completados, resultados tangibles
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#1A1A1A] border border-[#C9A84C]/30 rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <Mail size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-2">
                      Sección 6: Contacto
                    </h3>
                    <p className="text-[18px] text-[#F5F2EC]/60 font-light mb-3">
                      El final. Aquí el cliente se contacta contigo. Hazlo fácil.
                    </p>
                    <p className="text-[16px] text-[#C9A84C] font-light">
                      → Formulario, teléfono, email, ubicación, horarios. Visible y clara
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Lo que ganas */}
      <section className="relative bg-[#0E0E0E] pt-[50px] pb-[20px]">
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
      <section className="relative bg-[#0E0E0E] pt-[60px] pb-24 md:pb-32">
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

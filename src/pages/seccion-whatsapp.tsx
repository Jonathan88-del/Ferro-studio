import { motion } from "framer-motion";
import { ArrowLeft, Clock, CheckCircle, AlertCircle, MessageCircle, Zap, Shield, Headphones } from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SeccionWhatsapp() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-[#0E0E0E] pt-40 pb-32 md:pt-48 md:pb-40 overflow-hidden">
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

            <h1 className="font-serif font-light text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-4xl mb-8">
              Soporte técnico por WhatsApp: Ayuda rápida cuando la necesitas
            </h1>
            <p className="text-[1.2rem] text-[#F5F2EC]/60 font-light max-w-2xl leading-relaxed">
              Tu sitio web puede tener problemas en cualquier momento. Por eso estamos disponibles en WhatsApp para ayudarte, sin complicaciones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: ¿Qué es el soporte técnico por WhatsApp? */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              ¿Qué es el soporte técnico?
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Imagina que tu sitio web es tu tienda física. El soporte técnico es como tener a alguien disponible para arreglar cualquier problema que surja.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <AlertCircle size={24} className="text-[#FF6B6B] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-2">
                      Sin soporte (la mayoría)
                    </h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Algo se rompe en tu sitio y no sabes a quién llamar.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[0.85rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Pierdes clientes mientras esperas solución</span>
                      </li>
                      <li className="flex gap-2 text-[0.85rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>El error se vuelve más grave con el tiempo</span>
                      </li>
                      <li className="flex gap-2 text-[0.85rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Estrés y incertidumbre de no saber cuándo se arreglará</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#C9A84C]/30 rounded-lg p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle size={24} className="text-[#51CF66] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-2">
                      Con soporte (lo que ofrecemos)
                    </h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Algo se rompe y en 24–48 horas está arreglado.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[0.85rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Contactas por WhatsApp sin complicaciones</span>
                      </li>
                      <li className="flex gap-2 text-[0.85rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Respuesta rápida de alguien que entiende</span>
                      </li>
                      <li className="flex gap-2 text-[0.85rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Tu sitio sigue funcionando sin interrupciones</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Qué incluye exactamente */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              Exactamente qué incluye el soporte
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Estos son los problemas que resolvemos en 24–48 horas hábiles:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: "🔴", title: "Errores del sitio", desc: "La página muestra un error, se cae o no carga" },
                { icon: "🔗", title: "Enlaces rotos", desc: "Un botón o enlace no funciona correctamente" },
                { icon: "📋", title: "Problemas con formularios", desc: "Los clientes no pueden enviar un formulario de contacto" },
                { icon: "⚙️", title: "Funcionalidad general", desc: "Algo no hace lo que debería hacer" },
                { icon: "❓", title: "Consultas técnicas", desc: "¿Cómo se hace esto? ¿Por qué pasó esto?" },
                { icon: "🆘", title: "Emergencias técnicas", desc: "El sitio está completamente caído y necesita reparación urgente" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-[2rem]">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[0.85rem] text-[#F5F2EC]/50 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Comparison: Includes vs Excludes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#1A1A1A] border border-[#51CF66]/30 rounded-lg p-8"
              >
                <h3 className="font-serif text-[1.1rem] font-light text-[#51CF66] mb-6">
                  Sí incluye
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>Respuesta en 24–48 horas hábiles</span>
                  </li>
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>Resolución de errores del sitio</span>
                  </li>
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>Revisión de formularios, botones y enlaces</span>
                  </li>
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>Ayuda con consultas sobre funcionamiento</span>
                  </li>
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>Asistencia técnica ante inconvenientes</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="bg-[#1A1A1A] border border-[#FF6B6B]/30 rounded-lg p-8"
              >
                <h3 className="font-serif text-[1.1rem] font-light text-[#FF6B6B] mb-6">
                  No incluye
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#FF6B6B] flex-shrink-0">•</span>
                    <span>Cambios de contenido (actualizar textos)</span>
                  </li>
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#FF6B6B] flex-shrink-0">•</span>
                    <span>Modificaciones de diseño o estética</span>
                  </li>
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#FF6B6B] flex-shrink-0">•</span>
                    <span>Nuevas funcionalidades o características</span>
                  </li>
                </ul>
                <p className="text-[0.8rem] text-[#F5F2EC]/35 font-light mt-6 pt-6 border-t border-[#FF6B6B]/20">
                  Para esos casos, tenemos otros planes que incluyen cambios mensuales.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: ¿Cómo funciona en la práctica? */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              Un ejemplo real de cómo funciona
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Imagina que es martes a las 15 hs y tu formulario de contacto deja de funcionar:
            </p>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center border border-[#C9A84C]/30">
                    <span className="font-serif text-[#C9A84C] font-light text-[0.9rem]">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[1.05rem] font-light text-[#F5F2EC] mb-2">
                      Escribes por WhatsApp (15:30 hs)
                    </h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light">
                      "Hola, mi formulario no envía. ¿Pueden ayudar?" Adjuntas una captura de pantalla del error.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center border border-[#C9A84C]/30">
                    <span className="font-serif text-[#C9A84C] font-light text-[0.9rem]">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[1.05rem] font-light text-[#F5F2EC] mb-2">
                      Leemos el error (misma tarde)
                    </h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light">
                      Desde Ferro Studio vemos el problema, lo anotamos y lo priorizamos.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center border border-[#C9A84C]/30">
                    <span className="font-serif text-[#C9A84C] font-light text-[0.9rem]">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[1.05rem] font-light text-[#F5F2EC] mb-2">
                      Investigamos (miércoles antes de mediodía)
                    </h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light">
                      Revisamos el código, encontramos el problema (era una configuración mal hecha) y lo anotamos en nuestra lista.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1A1A1A] border border-[#51CF66]/30 rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#51CF66]/20 flex items-center justify-center border border-[#51CF66]/30">
                    <span className="font-serif text-[#51CF66] font-light text-[0.9rem]">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[1.05rem] font-light text-[#F5F2EC] mb-2">
                      Arreglamos y confirmamos (miércoles antes de las 14 hs)
                    </h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light">
                      Hacemos el cambio, lo probamos, y te escribimos: "Listo! El formulario ya funciona. Probá aquí 👉 [enlace]". Tu sitio sigue trabajando sin interrupciones.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Los beneficios para tu negocio */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-12">
              Qué ganas con el soporte técnico
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Tranquilidad garantizada
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Algo se rompe y sabes que hay alguien detrás que va a arreglarlo. No estás solo.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Sin tiempo perdido
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Los errores se arreglan rápido. Tus clientes no ven interrupciones. Tú sigues ganando.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Headphones size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Alguien que entiende
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  No necesitas saber de tecnología. Escribes qué está mal y nosotros lo resolvemos en términos que entiendes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Contacto fácil por WhatsApp
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Sin emails complicados, sin formularios. Un mensaje de WhatsApp y listo. Como hablar con un colega.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Expectativas claras */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              Lo que debes saber
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Para que no haya sorpresas, aquí está la verdad completa:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8"
              >
                <h3 className="font-serif text-[1.05rem] font-light text-[#F5F2EC] mb-3">
                  ⏰ Tiempo de respuesta
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light mb-3">
                  Respondemos en 24–48 <strong>horas hábiles</strong> (lunes a viernes, horario de oficina).
                </p>
                <p className="text-[0.8rem] text-[#F5F2EC]/35 font-light">
                  Si escribes un sábado, respondemos el lunes. Los domingos y feriados no contamos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8"
              >
                <h3 className="font-serif text-[1.05rem] font-light text-[#F5F2EC] mb-3">
                  🔧 Arreglos rápidos vs. complicados
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light mb-3">
                  Algunos errores se arreglan en 1 hora. Otros necesitan más investigación.
                </p>
                <p className="text-[0.8rem] text-[#F5F2EC]/35 font-light">
                  Siempre te avisamos en cuánto tiempo creemos que lo solucionaremos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8"
              >
                <h3 className="font-serif text-[1.05rem] font-light text-[#F5F2EC] mb-3">
                  📱 Mejor con detalles
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light mb-3">
                  Cuántos más detalles nos des, más rápido solucionamos.
                </p>
                <p className="text-[0.8rem] text-[#F5F2EC]/35 font-light">
                  Una captura de pantalla del error nos ayuda mucho. Dinos: ¿Qué estabas haciendo cuando pasó?
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8"
              >
                <h3 className="font-serif text-[1.05rem] font-light text-[#F5F2EC] mb-3">
                  💡 Cambios vs. arreglos
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light mb-3">
                  Si algo se rompió, lo arreglamos. Si quieres cambiar el diseño, es otro servicio.
                </p>
                <p className="text-[0.8rem] text-[#F5F2EC]/35 font-light">
                  Los "cambios mensuales" están en el Plan Activo y Plan Total.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/30 rounded-lg p-12 md:p-16 text-center"
          >
            <h2 className="font-serif text-[2rem] font-light text-[#F5F2EC] mb-4 max-w-2xl mx-auto">
              Soporte que está ahí cuando lo necesitas
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/60 font-light max-w-2xl mx-auto mb-8">
              El soporte técnico es la base de nuestro Plan Presencia. Tu sitio funciona, y si algo falla, nos encargamos.
            </p>
            <Link href="/servicios" className="inline-flex items-center gap-2 px-8 py-3 bg-[#C9A84C] text-[#0E0E0E] rounded-lg no-underline ferro-focus group font-light">
              Ver nuestros planes de mantenimiento
              <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Clock, HeartHandshake, Zap, CheckCircle, AlertCircle, Phone } from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PlanesWhatsapp() {
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
            <Link href="/planes" className="inline-flex items-center gap-2 mb-8 no-underline ferro-focus group">
              <ArrowLeft size={16} className="text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors" />
              <span className="text-[0.875rem] text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors tracking-wide">
                Volver a Planes
              </span>
            </Link>

            <h1 className="font-serif font-light text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-4xl mb-8">
              Soporte por WhatsApp (24–48 hs hábiles)
            </h1>
            <p className="text-[1.25rem] text-[#F5F2EC]/60 font-light max-w-2xl leading-relaxed">
              Respuestas rápidas cuando las necesitás. Tu contacto directo con nuestro equipo en el canal que prefieres.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: ¿Por qué soporte es importante? */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-4">
              Por qué el soporte accesible es clave
            </h2>
            <p className="text-[1.125rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Cuando algo no funciona, necesitás respuestas rápidas, no correos que tardan días:
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
                    <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC] mb-2">
                      Sin soporte cercano
                    </h3>
                    <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Estás solo cuando pasa algo.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Envías email, esperas respuesta</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Tardan horas o días en contestar</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Perdés dinero mientras esperas</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Frustrante cuando es urgente</span>
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
                    <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC] mb-2">
                      Con soporte por WhatsApp
                    </h3>
                    <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Conectás directamente con nuestro equipo.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Escribís, nosotros contestamos rápido</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Respuestas en 24–48 horas hábiles</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Problemas resueltos rápidamente</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Tranquilidad cuando necesitás ayuda</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Cómo funciona */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-4">
              Cómo funciona el soporte
            </h2>
            <p className="text-[1.125rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Es simple. Cuando necesitás ayuda:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              {[
                { step: "1", emoji: "💬", title: "Escribís", desc: "Un mensaje por WhatsApp con tu duda o problema" },
                { step: "2", emoji: "👀", title: "Leemos", desc: "Lo vemos y lo analizamos con cuidado" },
                { step: "3", emoji: "🛠️", title: "Resolvemos", desc: "Dentro de 24–48 horas hábiles" },
                { step: "4", emoji: "✅", title: "Listo", desc: "Tu problema solucionado" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 text-center"
                >
                  <div className="text-[3.75rem] mb-3">{item.emoji}</div>
                  <div className="text-[1.25rem] text-[#C9A84C] font-serif mb-2">Paso {item.step}</div>
                  <h3 className="font-serif text-[1.25rem] font-light text-[#F5F2EC] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Qué podés preguntar */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-4">
              ¿Qué podés preguntar?
            </h2>
            <p className="text-[1.125rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              El soporte cubre todas estas áreas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { emoji: "🌐", title: "Problemas del sitio", desc: "Algo no funciona, ¿qué hago?" },
                { emoji: "📝", title: "Cambios y ediciones", desc: "¿Cómo cambio este texto o imagen?" },
                { emoji: "🔧", title: "Configuración", desc: "¿Cómo configuro esto?" },
                { emoji: "❓", title: "Dudas generales", desc: "Cualquier pregunta sobre tu sitio o plan" },
                { emoji: "📈", title: "Estrategia", desc: "Recomendaciones para mejorar tu sitio" }
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
                    <div className="flex-shrink-0 text-[1.8rem]">{item.emoji}</div>
                    <div className="flex-1">
                      <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Por qué WhatsApp */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-4">
              ¿Por qué soporte por WhatsApp?
            </h2>
            <p className="text-[1.125rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Elegimos WhatsApp porque es donde vos ya estás:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC]">
                    Sin cambiar de app
                  </h3>
                </div>
                <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Ya tenés WhatsApp abierto. No necesitás buscar otro programa para hablar con nosotros.
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
                  <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC]">
                    Respuestas rápidas
                  </h3>
                </div>
                <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  WhatsApp es inmediato. No esperas como con email que tarda días.
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
                  <Phone size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC]">
                    Comunicación personal
                  </h3>
                </div>
                <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Es como hablar directo con nosotros. Más humano, menos corporativo.
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
                  <CheckCircle size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC]">
                    Fácil compartir
                  </h3>
                </div>
                <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Compartís fotos, links o archivos sin complicaciones. Todo en un solo lugar.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Lo que ganas */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-12">
              Lo que ganas con soporte cercano
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
                  <HeartHandshake size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC]">
                    Tranquilidad
                  </h3>
                </div>
                <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Sabés que tenés a alguien a tu lado si necesitás ayuda.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-[1.125rem] text-[#C9A84C]">
                  → No estás solo
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC]">
                    Problemas resueltos rápido
                  </h3>
                </div>
                <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Menos tiempo perdido, más tiempo haciendo crecer tu negocio.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-[1.125rem] text-[#C9A84C]">
                  → Eficiencia garantizada
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC]">
                    Aprendizaje constante
                  </h3>
                </div>
                <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  No solo resolvemos, también te enseñamos cómo hacerlo mejor.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-[1.125rem] text-[#C9A84C]">
                  → Crecimiento junto a nosotros
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC]">
                    Relación de confianza
                  </h3>
                </div>
                <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Conocemos tu sitio, tu negocio, tus necesidades. Somos tu aliados.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-[1.125rem] text-[#C9A84C]">
                  → Soporte que entiende tu realidad
                </div>
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
              Soporte que responde en 24–48 horas
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/60 font-light max-w-2xl mx-auto mb-8">
              Contactá directo a nuestro equipo cuando lo necesites. Respuestas rápidas, soluciones efectivas.
            </p>
            <Link href="/planes" className="inline-flex items-center gap-2 px-8 py-3 bg-[#C9A84C] text-[#0E0E0E] rounded-lg no-underline ferro-focus group font-light">
              Ver todos nuestros planes
              <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

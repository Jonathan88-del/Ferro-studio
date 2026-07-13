import { motion } from "framer-motion";
import { ArrowLeft, Wrench, Calendar, CheckCircle, AlertCircle, Zap, Edit3, Clock } from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PlanesCambios() {
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
              Hasta 3 cambios mensuales al sitio
            </h1>
            <p className="text-[1.25rem] text-[#F5F2EC]/60 font-light max-w-2xl leading-relaxed">
              Mantén tu sitio siempre actualizado sin complicaciones. Tres cambios al mes para que tu información esté siempre fresca.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: ¿Por qué mantener el sitio actualizado? */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-4">
              ¿Por qué mantener el sitio actualizado es clave?
            </h2>
            <p className="text-[1.125rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Un sitio desactualizado es como un negocio cerrado. Cuando algo cambia, necesitás reflejarlo rápido:
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
                      Sin cambios mensuales
                    </h3>
                    <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Tu sitio se queda atrás.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Horarios viejos, clientes confundidos</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Precios desactualizados causan reclamos</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Personas de tu equipo ya no aparecen</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Pierdes profesionalismo y confianza</span>
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
                      Con 3 cambios mensuales
                    </h3>
                    <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Tu sitio siempre está fresco y actualizado.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Actualizas información cuando la necesitás</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Sin esperar, sin hacer vos mismo</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Tu sitio se ve profesional siempre</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Los clientes confían más en ti</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Qué tipos de cambios podés hacer */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-4">
              ¿Qué tipos de cambios podés hacer?
            </h2>
            <p className="text-[1.125rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Casi todo lo que imagines para mantener tu sitio actualizado:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { emoji: "✏️", title: "Textos y contenido", desc: "Cambiar descripciones, actualizar información" },
                { emoji: "📸", title: "Fotografías", desc: "Reemplazar imágenes con versiones nuevas" },
                { emoji: "🕐", title: "Horarios", desc: "Actualizar horarios de atención o promociones" },
                { emoji: "💰", title: "Precios", desc: "Cambiar precios de productos o servicios" },
                { emoji: "👥", title: "Equipo", desc: "Agregar o modificar miembros del equipo" },
                { emoji: "📞", title: "Contacto", desc: "Actualizar teléfono, email, redes sociales" },
                { emoji: "🎨", title: "Elementos de diseño", desc: "Ajustar colores, tamaños o estilos menores" },
                { emoji: "🔗", title: "Botones y enlaces", desc: "Modificar donde apuntan o qué dicen" }
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

      {/* Section 3: Cómo funciona */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              Cómo funciona el servicio
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Simple: tenés 3 cambios cada mes para usar como necesites:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                { step: "1", emoji: "📋", title: "Solicitas", desc: "Un cambio simple por mes, o 3 seguidos" },
                { step: "2", emoji: "⚙️", title: "Realizamos", desc: "Hacemos el cambio rápido y correcto" },
                { step: "3", emoji: "✅", title: "Publicado", desc: "Tu sitio ya está actualizado" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 text-center"
                >
                  <div className="text-[2.5rem] mb-3">{item.emoji}</div>
                  <div className="text-[0.75rem] text-[#C9A84C] font-serif mb-2">Paso {item.step}</div>
                  <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[0.8rem] text-[#F5F2EC]/50 font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Ventajas de tener cambios incluidos */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-12">
              Lo que ganas con cambios mensuales incluidos
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
                  <Clock size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Sin esperar
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  No necesitás aprender a hacerlo. Nos dices qué cambiar, nosotros lo hacemos.
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
                  <Wrench size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Sin riesgos
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  No lo haces vos y no rompes nada accidentalmente.
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
                  <Calendar size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Mes a mes
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Tenés 3 cambios cada mes. No los usás este mes, no se pierden después.
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
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Profesional siempre
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Tu sitio se ve actualizado y profesional todos los meses.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Qué incluye y qué no */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-12">
              ¿Qué está incluido?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ejemplos de modificaciones */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#51CF66]/15 flex items-center justify-center">
                    <CheckCircle size={18} className="text-[#51CF66]" strokeWidth={2} />
                  </div>
                  <h3 className="font-serif text-[1.3rem] font-light text-[#F5F2EC]">
                    Ejemplos de modificaciones
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#51CF66] mt-0.5">✓</span>
                    <span className="text-[0.95rem] text-[#F5F2EC]/60 font-light">Cambiar textos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#51CF66] mt-0.5">✓</span>
                    <span className="text-[0.95rem] text-[#F5F2EC]/60 font-light">Reemplazar fotografías</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#51CF66] mt-0.5">✓</span>
                    <span className="text-[0.95rem] text-[#F5F2EC]/60 font-light">Actualizar horarios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#51CF66] mt-0.5">✓</span>
                    <span className="text-[0.95rem] text-[#F5F2EC]/60 font-light">Cambiar precios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#51CF66] mt-0.5">✓</span>
                    <span className="text-[0.95rem] text-[#F5F2EC]/60 font-light">Agregar o modificar integrantes del equipo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#51CF66] mt-0.5">✓</span>
                    <span className="text-[0.95rem] text-[#F5F2EC]/60 font-light">Actualizar datos de contacto</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#51CF66] mt-0.5">✓</span>
                    <span className="text-[0.95rem] text-[#F5F2EC]/60 font-light">Ajustar pequeños elementos del diseño</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#51CF66] mt-0.5">✓</span>
                    <span className="text-[0.95rem] text-[#F5F2EC]/60 font-light">Modificar botones, enlaces o íconos</span>
                  </li>
                </ul>
              </motion.div>

              {/* No incluye */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#F5F2EC]/10 flex items-center justify-center">
                    <AlertCircle size={18} className="text-[#F5F2EC]/40" strokeWidth={2} />
                  </div>
                  <h3 className="font-serif text-[1.3rem] font-light text-[#F5F2EC]">
                    No incluye
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#F5F2EC]/30 mt-0.5">—</span>
                    <span className="text-[0.95rem] text-[#F5F2EC]/40 font-light">Nuevas páginas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F5F2EC]/30 mt-0.5">—</span>
                    <span className="text-[0.95rem] text-[#F5F2EC]/40 font-light">Rediseño completo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F5F2EC]/30 mt-0.5">—</span>
                    <span className="text-[0.95rem] text-[#F5F2EC]/40 font-light">Desarrollo de funcionalidades nuevas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F5F2EC]/30 mt-0.5">—</span>
                    <span className="text-[0.95rem] text-[#F5F2EC]/40 font-light">Integraciones complejas</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-12 p-6 bg-[#1A1A1A]/50 border border-[#C9A84C]/20 rounded-lg"
            >
              <p className="text-[0.95rem] text-[#F5F2EC]/60 font-light leading-relaxed">
                <span className="text-[#C9A84C] font-light">💡 Aclaración:</span> Cada modificación corresponde a una solicitud relacionada. Por ejemplo, actualizar la información completa de un empleado (foto, nombre, cargo y teléfono) cuenta como una sola modificación.
              </p>
            </motion.div>
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
              3 cambios cada mes para mantener tu sitio actualizado
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/60 font-light max-w-2xl mx-auto mb-8">
              Sin complicaciones, sin esperar, sin hacer vos mismo. Tu sitio siempre fresco y profesional.
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

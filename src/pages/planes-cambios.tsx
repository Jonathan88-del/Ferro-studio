import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, AlertCircle, Zap, RefreshCw, Edit3, Lightbulb, Clock } from "lucide-react";
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
              <span className="text-[0.85rem] text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors tracking-wide">
                Volver a Planes
              </span>
            </Link>

            <h1 className="font-serif font-light text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-4xl mb-8">
              Hasta 3 cambios mensuales al sitio
            </h1>
            <p className="text-[1.2rem] text-[#F5F2EC]/60 font-light max-w-2xl leading-relaxed">
              Tu sitio evoluciona. Cada mes, podés hacer cambios y mejoras sin límite en cantidad de solicitudes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: ¿Por qué cambios mensuales importan? */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              ¿Por qué tu sitio necesita cambios?
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Un sitio estático es un sitio muerto. Los negocios cambian, y tu sitio debe cambiar contigo:
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
                      Sin cambios mensuales
                    </h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Tu sitio envejece. Los clientes notan la falta de actualización.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[0.85rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Información desactualizada ahuyenta clientes</span>
                      </li>
                      <li className="flex gap-2 text-[0.85rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Tus ofertas nuevas nunca aparecen en el sitio</span>
                      </li>
                      <li className="flex gap-2 text-[0.85rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Perdes oportunidades de venta</span>
                      </li>
                      <li className="flex gap-2 text-[0.85rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Los competidores te pasan de largo</span>
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
                      Con cambios mensuales
                    </h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Tu sitio siempre está fresco. Los clientes ven un negocio vivo.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[0.85rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Información siempre actualizada</span>
                      </li>
                      <li className="flex gap-2 text-[0.85rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Tus ofertas nuevas en el sitio al instante</span>
                      </li>
                      <li className="flex gap-2 text-[0.85rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Mas oportunidades de venta</span>
                      </li>
                      <li className="flex gap-2 text-[0.85rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Sitio siempre competitivo</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Qué tipos de cambios */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              ¿Qué podés cambiar?
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Básicamente todo. Aquí hay algunos ejemplos:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { emoji: "✏️", title: "Textos", desc: "Actualizar descripciones, títulos, promociones" },
                { emoji: "🖼️", title: "Imágenes", desc: "Cambiar fotos, agregar nuevas galerías" },
                { emoji: "🎨", title: "Colores y diseño", desc: "Refrescar la estética del sitio" },
                { emoji: "📍", title: "Secciones", desc: "Reorganizar, agregar o quitar áreas" },
                { emoji: "🔗", title: "Enlaces", desc: "Actualizar links internos y externos" },
                { emoji: "⚙️", title: "Funcionalidad", desc: "Agregar formularios, botones, etc" },
                { emoji: "📋", title: "Información de contacto", desc: "Actualizar teléfono, email, ubicación" },
                { emoji: "🎯", title: "CTA", desc: "Cambiar llamadas a la acción (botones)" }
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
          </motion.div>
        </div>
      </section>

      {/* Section 3: Cómo funciona el proceso */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              Cómo funciona el proceso
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Es simple. Cada mes tenés derecho a 3 cambios. Así funciona:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                { step: "1", emoji: "📝", title: "Solicitas", desc: "Envías tus cambios por WhatsApp o email" },
                { step: "2", emoji: "👨‍💼", title: "Revisamos", desc: "Analizamos qué cambios necesitas" },
                { step: "3", emoji: "✅", title: "Hacemos", desc: "Implementamos los cambios en tu sitio" }
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

      {/* Section 4: Ejemplos de cambios */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              Ejemplos reales de cambios
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Aquí hay algunos cambios que nuestros clientes hacen regularmente:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Cambio de promoción", desc: "Antes: \"50% de descuento\". Ahora: \"Envío gratis por $100+\"", icon: "🎁" },
                { title: "Nueva sección de blog", desc: "Agregar artículos nuevos, actualizar testimonios", icon: "📰" },
                { title: "Renovar galería de fotos", desc: "Mostrar trabajos nuevos, eventos recientes", icon: "📸" },
                { title: "Cambiar información de contacto", desc: "Nuevo teléfono, new ubicación, horarios", icon: "📞" },
                { title: "Agregar nuevo servicio", desc: "Un producto nuevo que lanzas, una opción adicional", icon: "⭐" },
                { title: "Mejorar página de precios", desc: "Actualizar tarifas, agregar planes nuevos", icon: "💰" }
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
                    <div className="flex-shrink-0 text-[1.8rem]">{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC] mb-2">
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
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-12">
              Lo que ganas con cambios mensuales
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
                  <Lightbulb size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Flexibilidad total
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Tu sitio se adapta a los cambios de tu negocio. Nada queda congelado.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-[0.8rem] text-[#C9A84C]">
                  → Sitio que evoluciona contigo
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
                  <CheckCircle size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Contenido siempre fresco
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Los visitantes ven novedad. El sitio nunca se siente viejo.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-[0.8rem] text-[#C9A84C]">
                  → Clientes vuelven por novedades
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
                  <Zap size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Responder rápido a oportunidades
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Lanzas una oferta nueva el lunes, está en el sitio el martes.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-[0.8rem] text-[#C9A84C]">
                  → Agilidad para vender más
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
                  <RefreshCw size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Mejora continua
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Cada mes optimizas. Cada mes el sitio se vuelve más rentable.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-[0.8rem] text-[#C9A84C]">
                  → Crecimiento mes a mes
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
              Un sitio que crece con tu negocio
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/60 font-light max-w-2xl mx-auto mb-8">
              3 cambios mensuales para mantener tu sitio siempre actualizado, relevante y competitivo.
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

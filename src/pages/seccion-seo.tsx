import { motion } from "framer-motion";
import { Check, ArrowLeft, Search, TrendingUp, DollarSign, Award, Clock, Zap } from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SeccionSEO() {
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
              SEO: Que clientes te encuentren en Google sin pagar publicidad
            </h1>
            <p className="text-[1.2rem] text-[#F5F2EC]/60 font-light max-w-2xl leading-relaxed">
              SEO es simple: preparar tu sitio para que Google lo entienda y lo muestre cuando alguien busca lo que ofreces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: ¿Qué es SEO en términos simples? */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              ¿Qué es SEO en realidad?
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Imagina que tu sitio es una tienda física. El SEO es asegurarse de que esté en una calle concurrida, bien señalizado y fácil de encontrar.
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
                  <Search size={24} className="text-[#C9A84C] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-2">
                      Sin SEO (la mayoría)
                    </h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Tu sitio existe, pero está escondido en Google. Los clientes no te encuentran.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[0.85rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Gente busca tu servicio pero no apareces</span>
                      </li>
                      <li className="flex gap-2 text-[0.85rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Pagas publicidad para que te vean</span>
                      </li>
                      <li className="flex gap-2 text-[0.85rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Cuando dejas de pagar, desapareces</span>
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
                  <Search size={24} className="text-[#C9A84C] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-2">
                      Con SEO (lo que ofrecemos)
                    </h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Tu sitio aparece en Google cuando buscan lo que ofreces. Tráfico gratis.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[0.85rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Clientes te encuentran sin pagar</span>
                      </li>
                      <li className="flex gap-2 text-[0.85rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Tráfico crece mes a mes</span>
                      </li>
                      <li className="flex gap-2 text-[0.85rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Efecto acumulativo: mejora con el tiempo</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Las 3 cosas que hace el SEO */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              Las 3 pilares del SEO básico
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Todo el SEO se reduce a ayudar a Google a entender tu negocio:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#C9A84C]/10 mb-4">
                  <Zap size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3">
                  1. Google te entiende
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Títulos claros, descripciones, estructura ordenada. Google lee tu sitio como un humano.
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
                  <Search size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3">
                  2. Usas las palabras correctas
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Si buscas "abogado en Madrid", tu contenido menciona exactamente eso.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#C9A84C]/10 mb-4">
                  <TrendingUp size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3">
                  3. Tu sitio es rápido y confiable
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Carga en 1 segundo, funciona en móvil, es seguro. Google lo premia.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Qué incluye el SEO básico */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              11 cosas que hacemos en SEO básico
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Todas están incluidas desde el día 1. No es algo que se agrega después:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { emoji: "📝", title: "Títulos claros", desc: "Cada página tiene un título que Google entiende" },
                { emoji: "👀", title: "Descripciones en Google", desc: "Resumen que ven los clientes antes de entrar" },
                { emoji: "🔗", title: "URLs limpias", desc: "Direcciones cortas y fáciles de recordar" },
                { emoji: "📊", title: "Contenido organizado", desc: "Estructura que Google lee perfectamente" },
                { emoji: "🗺️", title: "Mapa del sitio", desc: "Google ve todas tus páginas al instante" },
                { emoji: "📱", title: "Funciona en móvil", desc: "Perfecto en teléfono (donde vive el 80% de clientes)" },
                { emoji: "⚡", title: "Ultra rápido", desc: "Carga en 1 segundo, no pierdes clientes impacientes" },
                { emoji: "🔒", title: "Seguridad SSL", desc: "Candadito que dice 'este sitio es seguro'" },
                { emoji: "🖼️", title: "Imágenes optimizadas", desc: "Google entiende tus fotos y aparecen en búsquedas" },
                { emoji: "🎯", title: "Palabras clave", desc: "Usamos las palabras que buscan tus clientes" },
                { emoji: "📈", title: "Conectado a Google", desc: "Google Search Console para ver cómo te ve Google" }
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

      {/* Section 4: Lo que ganas */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-12">
              Por qué el SEO es tu mejor inversión
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
                  <DollarSign size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Clientes GRATIS
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Alguien busca en Google "servicios de diseño" y te encuentra. No le cuesta nada.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-[0.8rem] text-[#C9A84C]">
                  → Tráfico gratuito permanente
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
                  <TrendingUp size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Crece con el tiempo
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  A diferencia de publicidad, el SEO crece mes a mes. Es como plantar un árbol.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-[0.8rem] text-[#C9A84C]">
                  → Mes 1: poco | Mes 6: mucho | Año 1: dominas Google
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
                  <Award size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Apareces primero
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Si apareces en la primera página de Google, las personas creen que eres la mejor opción.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-[0.8rem] text-[#C9A84C]">
                  → Autoridad automática sin hacer nada
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
                  <Clock size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    No necesitas publicidad
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Con SEO, tu sitio trabaja 24/7 sin pagar a Google. La publicidad es temporal.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-[0.8rem] text-[#C9A84C]">
                  → Ahorro de miles en publicidad
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Comparativa */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              SEO vs. Publicidad (Google Ads)
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Ambas traen clientes, pero tienen formas muy diferentes de hacerlo:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A1A1A] border border-[#FF6B6B]/30 rounded-lg p-8">
                <h3 className="font-serif text-[1.1rem] font-light text-[#FF6B6B] mb-6">
                  Publicidad (Google Ads)
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#FF6B6B] flex-shrink-0">•</span>
                    <span>Pagas por cada click</span>
                  </li>
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#FF6B6B] flex-shrink-0">•</span>
                    <span>Dejas de pagar = desapareces</span>
                  </li>
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#FF6B6B] flex-shrink-0">•</span>
                    <span>Resultados inmediatos</span>
                  </li>
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#FF6B6B] flex-shrink-0">•</span>
                    <span>$1000+ al mes en muchos casos</span>
                  </li>
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#FF6B6B] flex-shrink-0">•</span>
                    <span>Útil para lanzamientos rápidos</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#1A1A1A] border border-[#51CF66]/30 rounded-lg p-8">
                <h3 className="font-serif text-[1.1rem] font-light text-[#51CF66] mb-6">
                  SEO (lo que hacemos)
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>Pagas una sola vez (implementación)</span>
                  </li>
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>Sigue trayendo clientes para siempre</span>
                  </li>
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>Resultados en 3-6 meses</span>
                  </li>
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>Cero costo por cliente (después de 6 meses)</span>
                  </li>
                  <li className="flex gap-3 text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>Inversión a largo plazo que crece</span>
                  </li>
                </ul>
              </div>
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
              SEO básico ya viene incluido
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/60 font-light max-w-2xl mx-auto mb-8">
              No es algo que agregamos después. Cada página de tu sitio nace optimizada para Google desde el día 1.
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

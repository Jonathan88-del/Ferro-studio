import { motion } from "framer-motion";
import { ArrowLeft, Search, TrendingUp, AlertTriangle, CheckCircle2, Lightbulb, Eye, Target } from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SeccionSearchConsole() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-[#0E0E0E] pt-20 pb-[1px] md:pt-24 md:pb-[1px] overflow-hidden">
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
            <Link href="/servicios" className="inline-flex items-center gap-2 mb-2 no-underline ferro-focus group">
              <ArrowLeft size={16} className="text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors" />
              <span className="text-[0.85rem] text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors tracking-wide">
                Volver a Servicios
              </span>
            </Link>

            <h1 className="font-serif font-light text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-4xl mb-2">
              Search Console: Ve cómo Google ve tu sitio
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section 1: ¿Qué es en realidad? */}
      <section className="relative bg-[#0E0E0E] pt-[1px] pb-[10px]">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[34px] font-light text-[#F5F2EC] mb-2">
              ¿Qué es Search Console?
            </h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-3">
              Mientras Analytics te muestra qué hacen los visitantes, Search Console te muestra cómo Google ve tu sitio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-3"
              >
                <div className="flex items-start gap-1 mb-1">
                  <Eye size={24} className="text-[#C9A84C] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-2">
                      Analytics (visitantes)
                    </h3>
                    <p className="text-[20px] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Te muestra qué hace la gente en tu sitio: dónde hace clic, cuánto tiempo pasa, si compra.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#C9A84C]/30 rounded-lg p-3"
              >
                <div className="flex items-start gap-1 mb-1">
                  <Search size={24} className="text-[#C9A84C] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-2">
                      Search Console (Google)
                    </h3>
                    <p className="text-[20px] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Te muestra qué buscan las personas para encontrarte, en qué posición apareces, si hay errores.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Los 3 superpoderes */}
      <section className="relative bg-[#0E0E0E] pt-[8px] pb-[3px]">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-2">
              Los 3 superpoderes de Search Console
            </h2>
            <div className="space-y-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-3 md:p-4"
              >
                <div className="flex items-start gap-1">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <Search size={18} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-2">
                      Superpoder 1: Ve qué buscan
                    </h3>
                    <p className="text-[20px] text-[#F5F2EC]/50 font-light mb-2">
                      Alguien busca en Google "Contador en Buenos Aires" y apareces. Ves exactamente esa búsqueda.
                    </p>
                    <p className="text-[18px] text-[#C9A84C] font-light">
                      → Sabes exactamente qué pide la gente
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-3 md:p-4"
              >
                <div className="flex items-start gap-1">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <TrendingUp size={18} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-2">
                      Superpoder 2: Ve tu posición
                    </h3>
                    <p className="text-[20px] text-[#F5F2EC]/50 font-light mb-2">
                      Apareces en posición 7 en Google. ¿Tu meta? Llegar a posición 1-3. Ves el camino claramente.
                    </p>
                    <p className="text-[18px] text-[#C9A84C] font-light">
                      → Sabes exactamente dónde estás
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#C9A84C]/30 rounded-lg p-3 md:p-4"
              >
                <div className="flex items-start gap-1">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <AlertTriangle size={18} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-2">
                      Superpoder 3: Ve problemas antes de que exploten
                    </h3>
                    <p className="text-[20px] text-[#F5F2EC]/50 font-light mb-2">
                      Google encuentra un error en tu sitio y te lo dice: "Tu página no carga bien en móvil". Lo corregimos y listo.
                    </p>
                    <p className="text-[18px] text-[#C9A84C] font-light">
                      → Prevención de daño automática
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Qué ves específicamente */}
      <section className="relative bg-[#0E0E0E] pt-[8px] pb-[3px]">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-3">
              Qué información ves en el panel
            </h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-3">
              Todo organizado de forma simple para tomar decisiones rápidas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  emoji: "🔍",
                  title: "Qué búsquedas te traen",
                  desc: "Lista exacta de búsquedas que usó la gente para encontrarte. Si ves 'consultor', creas contenido sobre eso."
                },
                {
                  emoji: "📊",
                  title: "En qué posición estás",
                  desc: "Para cada búsqueda, ves en qué posición apareces. Posición 1-3 = excelente. Posición 10+ = trabaja en mejorar."
                },
                {
                  emoji: "📈",
                  title: "Cuántos clics recibes",
                  desc: "No solo vistas, sino clics reales. Si ves 1000 apariciones pero solo 50 clics, tu título no es atractivo."
                },
                {
                  emoji: "⚠️",
                  title: "Problemas técnicos",
                  desc: "Google detecta si tu sitio no carga bien en móvil, si hay enlaces rotos, si las imágenes no se ven. Te lo dice al instante."
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-3"
                >
                  <div className="flex items-start gap-1">
                    <div className="flex-shrink-0 text-[1.8rem]">{item.emoji}</div>
                    <div className="flex-1">
                      <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[18px] text-[#F5F2EC]/50 font-light">
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

      {/* Section: Por qué importa */}
      <section className="relative bg-[#0E0E0E] pt-[8px] pb-[5px]">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-2">
              Por qué Search Console es tu brújula SEO
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-4"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#C9A84C]/10 mb-2">
                  <Target size={18} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-1">
                  Meta clara
                </h3>
                <p className="text-[18px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Quieres estar en posición 1 para "consultor legal". Ves que ahora estás 7. Sabes exactamente qué perseguir.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-4"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#C9A84C]/10 mb-2">
                  <CheckCircle2 size={18} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-1">
                  Validación inmediata
                </h3>
                <p className="text-[18px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Cambias algo y ves si funcionó en 2-4 semanas. Sabes si fue buena idea o no.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-4"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#C9A84C]/10 mb-2">
                  <Lightbulb size={18} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-1">
                  Oportunidades escondidas
                </h3>
                <p className="text-[18px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Descubres búsquedas que no sabías que existían. Oportunidades de dinero que otros no ven.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[#0E0E0E] pt-[10px] pb-[10px]">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/30 rounded-lg p-5 md:p-6 text-center"
          >
            <h2 className="font-serif text-[2rem] font-light text-[#F5F2EC] mb-2 max-w-2xl mx-auto">
              Ya viene configurado y listo para usar
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/60 font-light max-w-2xl mx-auto mb-3">
              No necesitas hacer nada técnico. Nosotros integramos Search Console desde el primer día para que veas cómo Google ve tu sitio desde el primer momento.
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

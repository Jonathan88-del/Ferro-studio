import { motion } from "framer-motion";
import { ArrowLeft, Search, AlertTriangle, CheckCircle2, TrendingUp, Bug, BarChart3 } from "lucide-react";
import { Link } from "wouter";

const CONSOLE_FEATURES = [
  { icon: Search, title: "Apariciones en Google", desc: "Conocé cuántas veces tu sitio aparece en los resultados de búsqueda." },
  { icon: TrendingUp, title: "Clics desde Google", desc: "Visualizá cuántos usuarios ingresan a tu sitio directamente desde buscadores." },
  { icon: BarChart3, title: "Posición promedio", desc: "Consultá en qué lugar suelen aparecer tus páginas en Google." },
  { icon: Search, title: "Palabras clave", desc: "Descubrí qué búsquedas realizan los usuarios para encontrar tu empresa." },
  { icon: CheckCircle2, title: "Páginas con mejor rendimiento", desc: "Identificá qué páginas reciben más visitas desde Google." },
  { icon: Bug, title: "Errores de indexación", desc: "Detectá problemas que puedan impedir que aparezcan en Google." },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SeccionSearchConsole() {
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
                Search Console
              </span>
            </div>
            <h1 className="font-serif font-light text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-3xl mb-6">
              Descubrí cómo encuentran tu empresa en Google
            </h1>
            <p className="text-[1.1rem] text-[#F5F2EC]/45 font-light max-w-2xl">
              Es como tener una conversación directa con Google sobre tu sitio. Ves exactamente cómo Google ve tu contenido y qué palabras clave te traen clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-[#0E0E0E] py-28 md:py-36 lg:py-44">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-20"
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              La comunicación directa con Google
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/50 font-light mb-12 max-w-2xl">
              Search Console es tu herramienta para entender cómo Google ve, rastrea e indexa tu sitio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CONSOLE_FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/[0.02] transition-all duration-300"
                  >
                    <Icon size={24} className="text-[#C9A84C] mb-4" strokeWidth={1.5} />
                    <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[0.85rem] text-[#F5F2EC]/50 font-light">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-20"
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-8">
              Tres modos de uso
            </h2>

            <div className="space-y-6">
              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle2 size={24} className="text-[#C9A84C] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC]">
                    Modo vigilancia
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light ml-10">
                  Monitorea si Google puede encontrar e indexar todas tus páginas sin problemas.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <div className="flex items-start gap-4 mb-4">
                  <TrendingUp size={24} className="text-[#C9A84C] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC]">
                    Modo análisis
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light ml-10">
                  Observa qué palabras clave traen visitantes y en qué posición aparecer en Google.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <div className="flex items-start gap-4 mb-4">
                  <Bug size={24} className="text-[#C9A84C] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC]">
                    Modo corrección
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light ml-10">
                  Detecta y soluciona problemas que impiden que tus páginas aparezcan en Google.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-20"
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-12">
              Qué descubres en Search Console
            </h2>

            <div className="space-y-6">
              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-[#C9A84C] text-[1.5rem] flex-shrink-0">🔍</span>
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Qué palabras clave te traen clientes
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed ml-12">
                  Ves exactamente qué busca la gente para encontrarte. Si muchos buscan "diseño gráfico en CABA", sabes que debes enfatizar ese nicho en tu marketing.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-[#C9A84C] text-[1.5rem] flex-shrink-0">📊</span>
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    En qué posición apareces en Google
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed ml-12">
                  Si apareces en posición 15 para una palabra clave importante, sabes que necesitas mejorar tu contenido para esa búsqueda. El objetivo es siempre primeras 3 posiciones.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-[#C9A84C] text-[1.5rem] flex-shrink-0">⚠️</span>
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Errores que impiden que Google te vea
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed ml-12">
                  Si hay errores de indexación, Google te lo dice. Podrían ser enlaces rotos, contenido duplicado, o problemas técnicos. Los ves y los corriges rápido.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <div className="flex items-start gap-4 mb-3">
                  <span className="text-[#C9A84C] text-[1.5rem] flex-shrink-0">🔗</span>
                  <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC]">
                    Quién te enlaza desde internet
                  </h3>
                </div>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed ml-12">
                  Los backlinks (enlaces externos a tu sitio) son votos de confianza para Google. Search Console te muestra quién te menciona y de dónde viene autoridad.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-20"
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-12">
              Acciones que puedes tomar
            </h2>

            <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C9A84C] text-[0.9rem] font-serif font-light">1</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC] mb-2">
                      Solicitar indexación
                    </h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light">
                      Si creaste una página nueva, le dices a Google que la revise de inmediato. No esperas a que la encuentre solo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C9A84C] text-[0.9rem] font-serif font-light">2</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC] mb-2">
                      Fijar que tu sitio sea HTTPS
                    </h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light">
                      Search Console te muestra si hay problemas de seguridad. Un sitio seguro es un sitio que Google premia en rankings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C9A84C] text-[0.9rem] font-serif font-light">3</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC] mb-2">
                      Mejorar para palabras clave que casi rankean
                    </h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light">
                      Si apareces en posición 8-10 para una palabra clave, con pequeños ajustes podrías llegar a posición 1-3. Es donde están las conversiones reales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C9A84C] text-[0.9rem] font-serif font-light">4</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC] mb-2">
                      Monitorear y responder a cambios de algoritmo
                    </h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light">
                      Cuando Google actualiza su algoritmo, Search Console te alerta de cambios en tráfico. Sabes de inmediato si estás siendo afectado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="bg-gradient-to-r from-[#C9A84C]/10 to-transparent border border-[#C9A84C]/20 rounded-lg p-8 md:p-12"
          >
            <div className="flex items-start gap-4">
              <span className="text-[#C9A84C] text-[2rem] flex-shrink-0">🎯</span>
              <div>
                <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC] mb-3">
                  Ya viene integrado en tu sitio
                </h3>
                <p className="text-[0.95rem] text-[#F5F2EC]/60 font-light leading-relaxed mb-4">
                  No necesitas instalar nada. Google Search Console está configurado desde el primer día para que puedas empezar a monitorear tu presencia en Google inmediatamente.
                </p>
                <div className="bg-[#0E0E0E] rounded-lg p-4 border border-[#F5F2EC]/[0.06]">
                  <p className="text-[0.85rem] text-[#F5F2EC]/40 font-light">
                    <span className="text-[#C9A84C] font-normal">La verdad:</span> Entender cómo Google ve tu sitio es el superpoder del marketing digital moderno. Sin estos datos, estás navegando a ciegas.
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

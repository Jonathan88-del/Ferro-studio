import { motion } from "framer-motion";
import { ArrowLeft, Search, AlertTriangle, CheckCircle2, TrendingUp, Bug } from "lucide-react";
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
            className="bg-gradient-to-r from-[#C9A84C]/10 to-transparent border border-[#C9A84C]/20 rounded-lg p-8 md:p-12"
          >
            <div className="flex items-start gap-4">
              <span className="text-[#C9A84C] text-[2rem] flex-shrink-0">🎯</span>
              <div>
                <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC] mb-3">
                  Ya viene integrado en tu sitio
                </h3>
                <p className="text-[0.95rem] text-[#F5F2EC]/60 font-light leading-relaxed mb-3">
                  No necesitas instalar nada. Google Search Console está configurado desde el primer día para que puedas empezar a monitorear tu presencia en Google inmediatamente.
                </p>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light">
                  <span className="text-[#C9A84C] font-normal">✦</span> Entender cómo Google ve tu sitio es la base para mejorar tu posicionamiento.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

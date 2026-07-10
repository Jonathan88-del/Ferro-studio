import { motion } from "framer-motion";
import { ArrowLeft, Users, Globe, Smartphone, TrendingUp, BarChart3 } from "lucide-react";
import { Link } from "wouter";

const ANALYTICS_FEATURES = [
  { icon: TrendingUp, title: "Visitas al sitio", desc: "Visualizá cuántas personas ingresan a tu página." },
  { icon: Users, title: "Usuarios nuevos y recurrentes", desc: "Descubrí cuántos visitantes llegan por primera vez y cuántos vuelven." },
  { icon: BarChart3, title: "Páginas más visitadas", desc: "Identificá qué servicios o secciones generan mayor interés." },
  { icon: Smartphone, title: "Dispositivos utilizados", desc: "Conocé si navegan desde celular, computadora o tablet." },
  { icon: Globe, title: "Ubicación de visitantes", desc: "Descubrí desde qué ciudades o países visitan tu sitio." },
  { icon: Users, title: "Origen del tráfico", desc: "Sabé si llegaron desde Google, redes sociales, WhatsApp o enlaces directos." },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SeccionAnalytics() {
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
                Google Analytics
              </span>
            </div>
            <h1 className="font-serif font-light text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-3xl mb-6">
              Conocé cómo utilizan los visitantes tu sitio
            </h1>
            <p className="text-[1.1rem] text-[#F5F2EC]/45 font-light max-w-2xl">
              Con datos en tiempo real, podrás entender mejor a tus clientes y mejorar continuamente tu presencia digital.
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
              Métricas que importan
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/50 font-light mb-12 max-w-2xl">
              Google Analytics es como tener un microscopio digital: ves exactamente qué funcionó, qué no, y por dónde debes mejorar.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ANALYTICS_FEATURES.map((feature, index) => {
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
            className="mb-20 bg-gradient-to-r from-[#1A1A1A] to-[#0E0E0E] border border-[#F5F2EC]/[0.08] rounded-lg p-8 md:p-12"
          >
            <h2 className="font-serif text-[1.8rem] font-light text-[#F5F2EC] mb-6">
              Casos reales de uso
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C9A84C] text-[0.9rem] font-serif font-light">1</span>
                </div>
                <div>
                  <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC] mb-2">
                    Descubre qué funciona
                  </h3>
                  <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    Si tu página de "Servicios" recibe 10x más clics que tu página de "About", sabes dónde enfocar tus esfuerzos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C9A84C] text-[0.9rem] font-serif font-light">2</span>
                </div>
                <div>
                  <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC] mb-2">
                    Identifica a tus clientes
                  </h3>
                  <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    Entiende de dónde vienen tus visitantes más comprometidos: ¿Instagram? ¿Google? ¿Referidos directos?
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#C9A84C] text-[0.9rem] font-serif font-light">3</span>
                </div>
                <div>
                  <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC] mb-2">
                    Mejora constantemente
                  </h3>
                  <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    Con datos reales, tomas decisiones basadas en hechos, no en suposiciones.
                  </p>
                </div>
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
              Lo que ves y qué haces con eso
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3 flex items-center gap-2">
                  <span className="text-[#C9A84C]">📊</span> Visitas totales
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-3">
                  Cuánta gente entra. Si crece cada mes = funciona.
                </p>
                <div className="bg-[#0E0E0E] rounded px-3 py-2 text-[0.8rem] text-[#C9A84C] font-sans">
                  ✓ Sabes si va bien o mal
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3 flex items-center gap-2">
                  <span className="text-[#C9A84C]">🔗</span> De dónde vienen
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-3">
                  ¿De Google? ¿Instagram? ¿Direct? Inviertes en lo que funciona.
                </p>
                <div className="bg-[#0E0E0E] rounded px-3 py-2 text-[0.8rem] text-[#C9A84C] font-sans">
                  ✓ Dinero bien gastado
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3 flex items-center gap-2">
                  <span className="text-[#C9A84C]">⏱️</span> Tiempo en sitio
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-3">
                  Si pasan 5 seg = no les interesa. Si pasan 2 min = interesados.
                </p>
                <div className="bg-[#0E0E0E] rounded px-3 py-2 text-[0.8rem] text-[#C9A84C] font-sans">
                  ✓ Engagement real
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3 flex items-center gap-2">
                  <span className="text-[#C9A84C]">✉️</span> Conversiones
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-3">
                  Cuántos pidieron presupuesto, llamaron, compraron. Lo que importa.
                </p>
                <div className="bg-[#0E0E0E] rounded px-3 py-2 text-[0.8rem] text-[#C9A84C] font-sans">
                  ✓ Dinero en el banco
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-lg p-8 md:p-12"
          >
            <div className="flex items-start gap-4">
              <span className="text-[#C9A84C] text-[2rem] flex-shrink-0">📊</span>
              <div>
                <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC] mb-3">
                  Viene configurado y listo para usar
                </h3>
                <p className="text-[0.95rem] text-[#F5F2EC]/60 font-light leading-relaxed mb-4">
                  No necesitas saber de tecnología. Nosotros integramos Google Analytics en tu sitio desde el primer día y te mostramos los datos más importantes de manera simple y accionable.
                </p>
                <div className="bg-[#0E0E0E] rounded-lg p-4 border border-[#F5F2EC]/[0.06]">
                  <p className="text-[0.85rem] text-[#F5F2EC]/40 font-light">
                    <span className="text-[#C9A84C] font-normal">La verdad:</span> Medir es la diferencia entre un sitio que funciona y uno que solo existe. Los datos son tu brújula en la era digital.
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

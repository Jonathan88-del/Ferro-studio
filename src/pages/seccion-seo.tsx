import { motion } from "framer-motion";
import { Check, ArrowLeft, Eye, Target } from "lucide-react";
import { Link } from "wouter";

const SEO_FEATURES = [
  { simple: "Títulos claros en cada página", technical: "Title optimizados", benefit: "Google entiende de qué trata tu página" },
  { simple: "Descripciones en buscadores", technical: "Meta descripciones", benefit: "Los clientes ven resumen en Google antes de entrar" },
  { simple: "URLs cortas y limpias", technical: "URLs amigables", benefit: "Fáciles de recordar y compartir" },
  { simple: "Estructura ordenada del contenido", technical: "Encabezados H1-H3", benefit: "Google lee mejor, los clientes ven mejor" },
  { simple: "Mapa del sitio para Google", technical: "Sitemap XML", benefit: "Google encuentra todas tus páginas rápido" },
  { simple: "Indicaciones para robots de búsqueda", technical: "robots.txt", benefit: "Le dices exactamente qué páginas revisar" },
  { simple: "Candadito de seguridad en el navegador 🔒", technical: "HTTPS (SSL)", benefit: "Los clientes ven que es seguro (aumenta confianza)" },
  { simple: "Carga súper rápido", technical: "Optimización de rendimiento", benefit: "Menos clientes se van, Google lo premia" },
  { simple: "Imágenes claras y accesibles", technical: "Atributo alt en imágenes", benefit: "Google entiende tus fotos, accesibles para todos" },
  { simple: "Conectado con Google", technical: "Google Search Console", benefit: "Ves exactamente cómo Google ve tu sitio" },
  { simple: "Palabras clave en tu contenido", technical: "Estructura de palabras clave", benefit: "Apareces cuando clientes buscan lo que ofreces" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SeccionSEO() {
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
                SEO básico
              </span>
            </div>
            <h1 className="font-serif font-light text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-3xl mb-6">
              Prepara tu sitio para que Google lo encuentre
            </h1>
            <p className="text-[1.1rem] text-[#F5F2EC]/45 font-light max-w-2xl">
              SEO básico significa preparar tu sitio para que Google lo entienda y los clientes lo encuentren cuando buscan lo que ofreces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-[#0E0E0E] py-28 md:py-36 lg:py-44">
        <div className="container-ferro">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Eye, title: "Google te ve", desc: "Estructura clara para que Google entienda tu contenido" },
              { icon: Target, title: "Clientes te encuentran", desc: "Palabras clave que conectan con tu audiencia" },
              { icon: Check, title: "Todo funciona rápido", desc: "Sitio optimizado para velocidad y usuarios" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8 text-center"
                >
                  <Icon size={32} className="text-[#C9A84C] mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-20"
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-12 text-center">
              11 elementos que incluimos en tu SEO
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SEO_FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.simple}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.06] rounded-lg p-6 hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/[0.02] transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Check size={18} strokeWidth={2.5} className="text-[#C9A84C] flex-shrink-0 mt-1" />
                    <h3 className="font-serif text-[0.95rem] font-light text-[#F5F2EC]">
                      {feature.simple}
                    </h3>
                  </div>
                  <p className="text-[0.75rem] text-[#C9A84C]/60 font-sans mb-2 font-light">
                    {feature.technical}
                  </p>
                  <p className="text-[0.85rem] text-[#F5F2EC]/45 font-light">
                    → {feature.benefit}
                  </p>
                </motion.div>
              ))}
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
              Lo que ganas con SEO
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3 flex items-center gap-2">
                  <span className="text-[#C9A84C]">🔍</span> Clientes gratis desde Google
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Alguien busca tu servicio y te encuentra. Sin pagar publicidad.
                </p>
                <div className="bg-[#0E0E0E] rounded px-3 py-2 mt-4 text-[0.8rem] text-[#C9A84C] font-sans">
                  ✓ Tráfico gratis, permanente
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3 flex items-center gap-2">
                  <span className="text-[#C9A84C]">📈</span> Crece con el tiempo
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  A diferencia de publicidad, el SEO crece mes a mes. Es como plantar un árbol.
                </p>
                <div className="bg-[#0E0E0E] rounded px-3 py-2 mt-4 text-[0.8rem] text-[#C9A84C] font-sans">
                  ✓ Retorno exponencial
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3 flex items-center gap-2">
                  <span className="text-[#C9A84C]">💰</span> Ahorro total
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Después de 6 meses, cada cliente que entra por Google no te cuesta nada.
                </p>
                <div className="bg-[#0E0E0E] rounded px-3 py-2 mt-4 text-[0.8rem] text-[#C9A84C] font-sans">
                  ✓ Rentabilidad infinita
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3 flex items-center gap-2">
                  <span className="text-[#C9A84C]">🏆</span> Te ves profesional
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Si apareces primero en Google, la gente te ve como la mejor opción.
                </p>
                <div className="bg-[#0E0E0E] rounded px-3 py-2 mt-4 text-[0.8rem] text-[#C9A84C] font-sans">
                  ✓ Autoridad automática
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
                <h3 className="font-serif text-[1.3rem] font-light text-[#F5F2EC] mb-3">
                  Todo esto viene incluido desde el primer día
                </h3>
                <p className="text-[0.95rem] text-[#F5F2EC]/60 font-light leading-relaxed">
                  No es algo que se agregue después. Cuando creamos tu sitio, cada página está optimizada para que Google la entienda y tus clientes potenciales la encuentren en los buscadores. Es la base de cualquier presencia digital exitosa.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

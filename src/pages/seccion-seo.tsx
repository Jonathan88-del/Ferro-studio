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
              Aparece en Google cuando los clientes te buscan
            </h1>
            <p className="text-[1.1rem] text-[#F5F2EC]/45 font-light max-w-2xl">
              Tráfico gratuito, permanente y creciente. 11 elementos de SEO básico ya incluidos en tu sitio desde el primer día para que los clientes te encuentren.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-[#0E0E0E] py-28 md:py-36 lg:py-44">
        <div className="container-ferro">
          {/* Problem & Solution */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-3xl mb-24"
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-6 leading-tight">
              El problema: clientes que no te encuentran
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-6">
              Muchos negocios tienen sitios bonitos pero nadie los ve. ¿Por qué? Porque Google no los entiende. Los clientes buscan lo que ofreces, pero aparece la competencia en lugar de ti.
            </p>
            <div className="bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-lg p-6 md:p-8">
              <p className="text-[1rem] text-[#F5F2EC]/60 font-light leading-relaxed">
                <span className="text-[#C9A84C] font-normal">La solución:</span> 11 elementos SEO que preparamos en tu sitio desde el inicio. Google te entiende, los clientes te encuentran, y empiezas a recibir tráfico gratuito y permanente.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Eye, title: "Google te ve", desc: "Títulos, descripciones, estructura clara. Google entiende qué ofreces." },
              { icon: Target, title: "Clientes te encuentran", desc: "Cuando buscan lo que haces, apareces. Tráfico gratis desde el día uno." },
              { icon: Check, title: "Crece con el tiempo", desc: "A diferencia de publicidad, SEO crece mes a mes. Rentabilidad infinita." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8 text-center hover:border-[#C9A84C]/30 transition-all duration-300"
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
            className="mb-24"
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-6 leading-tight">
              Los 11 elementos clave que incluimos
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-12 max-w-2xl">
              Todo esto viene preparado desde el día uno. Sin extra. Sin esperar. Solo un sitio que Google entiende y tus clientes encuentran:
            </p>

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
            className="mb-24"
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-8 leading-tight">
              Lo que realmente obtienes
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-12 max-w-2xl">
              SEO no es solo aparecer en Google. Es empezar a recibir clientes gratis, permanentes, y que crecen mes a mes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-[#C9A84C] text-[1.5rem] flex-shrink-0">→</span>
                  <div>
                    <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC]">Tráfico Gratuito</h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/45 font-light mt-1">Alguien busca tu servicio y te encuentra. Sin publicidad, sin costo por click.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-[#C9A84C] text-[1.5rem] flex-shrink-0">→</span>
                  <div>
                    <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC]">Crece con el Tiempo</h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/45 font-light mt-1">A diferencia de publicidad, SEO crece mes a mes. Es como plantar un árbol.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-[#C9A84C] text-[1.5rem] flex-shrink-0">→</span>
                  <div>
                    <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC]">Rentabilidad Infinita</h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/45 font-light mt-1">Después de 6 meses, cada cliente por Google no te cuesta nada.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 hover:border-[#C9A84C]/30 transition-all duration-300">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-[#C9A84C] text-[1.5rem] flex-shrink-0">→</span>
                  <div>
                    <h3 className="font-serif text-[1rem] font-light text-[#F5F2EC]">Autoridad Automática</h3>
                    <p className="text-[0.9rem] text-[#F5F2EC]/45 font-light mt-1">Si apareces primero en Google, la gente te ve como la mejor opción.</p>
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
            className="bg-gradient-to-r from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8 md:p-12"
          >
            <div className="flex items-start gap-4">
              <span className="text-[#C9A84C] text-[1.6rem] flex-shrink-0">→</span>
              <div>
                <h3 className="font-serif text-[1.3rem] font-light text-[#F5F2EC] mb-3">
                  ¿Por qué viene incluido?
                </h3>
                <p className="text-[0.95rem] text-[#F5F2EC]/60 font-light leading-relaxed mb-6">
                  Porque un sitio bonito sin SEO es como una tienda excelente en una calle vacía. Nadie la ve. No queremos que pagues después por algo que debería venir desde el inicio.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2 text-[0.85rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#C9A84C] mt-0.5">✓</span>
                    <span>Cada página está optimizada desde el inicio</span>
                  </div>
                  <div className="flex items-start gap-2 text-[0.85rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#C9A84C] mt-0.5">✓</span>
                    <span>Google entiende tu contenido automáticamente</span>
                  </div>
                  <div className="flex items-start gap-2 text-[0.85rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#C9A84C] mt-0.5">✓</span>
                    <span>Empiezas a recibir tráfico desde el mes 1</span>
                  </div>
                  <div className="flex items-start gap-2 text-[0.85rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#C9A84C] mt-0.5">✓</span>
                    <span>Crece exponencialmente con el tiempo</span>
                  </div>
                </div>
                <div className="bg-[#0E0E0E]/60 rounded-lg p-4 border border-[#F5F2EC]/[0.06] mt-6">
                  <p className="text-[0.85rem] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#C9A84C] font-normal">Resultado:</span> Un sitio que no solo se ve bien, sino que genera clientes gratis mientras duermes.
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

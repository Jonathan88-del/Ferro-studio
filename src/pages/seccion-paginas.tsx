import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, FileText, Users, Briefcase, Mail, Settings } from "lucide-react";
import { Link } from "wouter";

const EXAMPLE_PAGES = [
  { icon: FileText, title: "Inicio", url: "/", desc: "Tu página de bienvenida" },
  { icon: Users, title: "Sobre Nosotros", url: "/nosotros", desc: "Quiénes eres y tu historia" },
  { icon: Briefcase, title: "Servicios", url: "/servicios", desc: "Lo que ofreces" },
  { icon: Mail, title: "Contacto", url: "/contacto", desc: "Cómo te encuentren" },
  { icon: Settings, title: "+1 página", url: "custom", desc: "Completamente personalizada" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SeccionPaginas() {
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
                5 páginas independientes
              </span>
            </div>
            <h1 className="font-serif font-light text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-3xl mb-6">
              Múltiples páginas con URLs propias en Google
            </h1>
            <p className="text-[1.1rem] text-[#F5F2EC]/45 font-light max-w-2xl">
              Cada página tiene su propia dirección en internet y aparece de manera independiente en los resultados de búsqueda.
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
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-8">
              ¿Por qué múltiples páginas?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3 flex items-center gap-2">
                  <span className="text-[#C9A84C]">🎯</span> Mejor en Google
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Cada página puede posicionarse para palabras clave diferentes. "Servicios de diseño", "contacto cercano", etc.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3 flex items-center gap-2">
                  <span className="text-[#C9A84C]">👥</span> Mejor para clientes
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Acceden directamente al contenido que buscan sin pasar por toda la página de inicio.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3 flex items-center gap-2">
                  <span className="text-[#C9A84C]">📊</span> Información específica
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Puedes profundizar en cada tema sin saturar una sola página larga.
                </p>
              </div>

              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <h3 className="font-serif text-[1.1rem] font-light text-[#F5F2EC] mb-3 flex items-center gap-2">
                  <span className="text-[#C9A84C]">📱</span> Más flexible
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Cambia el contenido de una página sin afectar a las otras.
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
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-8">
              Ejemplos de páginas que puedes tener
            </h2>

            <div className="space-y-4">
              {EXAMPLE_PAGES.map((page, index) => {
                const Icon = page.icon;
                return (
                  <motion.div
                    key={page.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.06] rounded-lg p-6 flex items-center justify-between hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/[0.02] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg border border-[#F5F2EC]/[0.1] flex items-center justify-center bg-[#1A1A1A]">
                        <Icon size={18} className="text-[#C9A84C]/70" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-serif text-[0.95rem] font-light text-[#F5F2EC]">
                          {page.title}
                        </h3>
                        <p className="text-[0.8rem] text-[#F5F2EC]/40 font-light">
                          {page.desc}
                        </p>
                      </div>
                    </div>
                    <div className="text-[#F5F2EC]/30 text-[0.85rem] font-sans">
                      {page.url}
                    </div>
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
            className="bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-lg p-8 md:p-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <span className="text-[#C9A84C] text-[2rem] flex-shrink-0">🔗</span>
              <div className="flex-1">
                <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC] mb-2">
                  Estructura jerárquica inteligente
                </h3>
                <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Aunque tengas 5 páginas independientes, todas están conectadas de manera lógica a través del menú, enlaces internos y estructura de navegación, creando una experiencia cohesiva.
                </p>
              </div>
            </div>

            <div className="bg-[#0E0E0E] rounded-lg p-6 border border-[#F5F2EC]/[0.06]">
              <p className="text-[0.85rem] text-[#F5F2EC]/40 font-light">
                <span className="text-[#C9A84C] font-normal">Resultado:</span> Los visitantes encuentran fácilmente lo que buscan, y Google entiende la estructura de tu negocio.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

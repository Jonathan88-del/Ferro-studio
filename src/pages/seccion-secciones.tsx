import { motion } from "framer-motion";
import { Home, Users, Briefcase, MessageSquare, Images, Mail, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const SECTIONS = [
  { id: 1, name: "Inicio", icon: Home, description: "La puerta de entrada a tu negocio" },
  { id: 2, name: "Sobre nosotros", icon: Users, description: "Conecta con tus clientes" },
  { id: 3, name: "Servicios", icon: Briefcase, description: "Muestra lo que ofreces" },
  { id: 4, name: "Testimonios", icon: MessageSquare, description: "Construye confianza" },
  { id: 5, name: "Galería / Portafolio", icon: Images, description: "Exhibe tu trabajo" },
  { id: 6, name: "Contacto", icon: Mail, description: "Conecta con tus clientes" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SeccionesSecciones() {
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
                Hasta 6 secciones
              </span>
            </div>
            <h1 className="font-serif font-light text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-3xl mb-6">
              Personaliza tu sitio con hasta 6 secciones
            </h1>
            <p className="text-[1.1rem] text-[#F5F2EC]/45 font-light max-w-2xl">
              Tu sitio puede incluir hasta 6 secciones personalizadas para comunicar todo lo que tu negocio necesita. Totalmente flexible y adaptado a tus objetivos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative bg-[#0E0E0E] py-28 md:py-36 lg:py-44">
        <div className="container-ferro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <h2 className="font-serif text-[2.5rem] font-light text-[#F5F2EC] mb-6 leading-tight">
                Cada sección está diseñada para contar tu historia
              </h2>
              <p className="text-[1rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-6">
                No se trata solo de llenar espacios. Cada sección tiene un propósito específico en tu estrategia digital. Desde tu entrada principal hasta el contacto, todo trabaja en conjunto para convertir visitantes en clientes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-[#C9A84C] text-[1.5rem] flex-shrink-0">✦</span>
                  <div>
                    <h3 className="font-serif text-[1.1rem] text-[#F5F2EC] mb-1">Flexibilidad Total</h3>
                    <p className="text-[0.95rem] text-[#F5F2EC]/45 font-light">Elige solo las secciones que necesitas y en el orden que tenga sentido para tu negocio.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#C9A84C] text-[1.5rem] flex-shrink-0">✦</span>
                  <div>
                    <h3 className="font-serif text-[1.1rem] text-[#F5F2EC] mb-1">Diseño Cohesivo</h3>
                    <p className="text-[0.95rem] text-[#F5F2EC]/45 font-light">Todas las secciones mantienen la identidad visual de tu marca, creando una experiencia consistente.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-[#C9A84C] text-[1.5rem] flex-shrink-0">✦</span>
                  <div>
                    <h3 className="font-serif text-[1.1rem] text-[#F5F2EC] mb-1">Funcionalidad Integrada</h3>
                    <p className="text-[0.95rem] text-[#F5F2EC]/45 font-light">Formularios, mapas, galerías y más funcionan sin problemas en cualquier sección.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative"
            >
              <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0E0E0E] border border-[#F5F2EC]/[0.08] rounded-lg p-8 md:p-12">
                <h3 className="font-serif text-[1.3rem] font-light text-[#F5F2EC] mb-8">
                  Ejemplos de secciones
                </h3>
                <div className="space-y-5">
                  {SECTIONS.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="flex items-start gap-4 p-4 rounded-lg border border-[#F5F2EC]/[0.06] hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/[0.02] transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg border border-[#F5F2EC]/[0.1] flex items-center justify-center bg-[#1A1A1A]">
                          <Icon size={18} className="text-[#C9A84C]/70" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="font-serif text-[0.95rem] font-light text-[#F5F2EC]">
                            {section.name}
                          </h4>
                          <p className="text-[0.8rem] text-[#F5F2EC]/40 font-light">
                            {section.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-lg p-8 md:p-12"
          >
            <div className="flex items-start gap-4">
              <span className="text-[#C9A84C] text-[1.8rem] flex-shrink-0">💡</span>
              <div>
                <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC] mb-2">
                  Piensa en las 6 secciones como actos en una obra de teatro
                </h3>
                <p className="text-[0.95rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Cada una tiene su momento, su propósito y su audiencia. Juntas cuentan la historia completa de tu negocio y guían a tus clientes hacia la acción que deseas: comprar, contratar o ponerse en contacto.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

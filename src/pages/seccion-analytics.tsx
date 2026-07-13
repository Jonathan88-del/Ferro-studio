import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, TrendingUp, Users, MapPin, Eye, Smartphone, Target, DollarSign, Lightbulb } from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SeccionAnalytics() {
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
              <span className="text-[14px] text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors tracking-wide">
                Volver a Servicios
              </span>
            </Link>

            <h1 className="font-serif font-light text-[54px] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-4xl mb-8">
              Google Analytics: Ve exactamente qué hace cada visitante
            </h1>
            <p className="text-[20px] text-[#F5F2EC]/60 font-light max-w-2xl leading-relaxed">
              Es como tener una cámara en tu sitio web. Ves quién entra, qué hace, de dónde vino y si se convirtió en cliente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: ¿Qué es en realidad? */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-4">
              ¿Qué es Google Analytics en términos simples?
            </h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Es una herramienta de Google que te muestra todo lo que ocurre en tu sitio web en tiempo real.
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
                  <Eye size={24} className="text-[#C9A84C] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-2">
                      Sin Analytics (lo común)
                    </h3>
                    <p className="text-[18px] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Tu sitio existe pero es una "caja negra". No sabes quién entra, qué ven, o si alguien se interesa.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[16px] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>¿Entran 10 personas o 1000? No sabes</span>
                      </li>
                      <li className="flex gap-2 text-[16px] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>¿De dónde vienen? Ni idea</span>
                      </li>
                      <li className="flex gap-2 text-[16px] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>¿Llamas a qué cambiar? Pura suposición</span>
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
                  <BarChart3 size={24} className="text-[#C9A84C] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-2">
                      Con Analytics (lo que ofrecemos)
                    </h3>
                    <p className="text-[18px] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Ves exactamente qué sucede. Datos claros sobre visitantes, de dónde vienen y qué hacen.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[16px] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Número exacto de visitantes</span>
                      </li>
                      <li className="flex gap-2 text-[16px] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Dónde vienen (Google, Instagram, etc)</span>
                      </li>
                      <li className="flex gap-2 text-[16px] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Decisiones basadas en datos reales</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Qué ves exactamente */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-4">
              Qué información ves en Analytics
            </h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Todo lo importante resumido en un dashboard fácil de entender:
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: TrendingUp,
                  title: "Cuánta gente entra",
                  desc: "100 visitas en enero, 150 en febrero = va bien. Si baja = algo cambió."
                },
                {
                  icon: Users,
                  title: "Nuevos vs. clientes que vuelven",
                  desc: "¿Son visitantes nuevos o gente que ya conoce tu sitio?"
                },
                {
                  icon: MapPin,
                  title: "De dónde vienen",
                  desc: "¿De Google Search? ¿De redes sociales? ¿De un anuncio? ¿Directamente?"
                },
                {
                  icon: Smartphone,
                  title: "Desde qué dispositivo",
                  desc: "¿Entran desde celular, computadora o tablet?"
                },
                {
                  icon: Eye,
                  title: "Qué página ven primero",
                  desc: "¿Todos entran por inicio o muchos van directo a servicios?"
                },
                {
                  icon: Target,
                  title: "Dónde se van",
                  desc: "¿Ven solo una página y se van? ¿O exploran varias antes de contactar?"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                        <Icon size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-2">
                          {item.title}
                        </h3>
                        <p className="text-[18px] text-[#F5F2EC]/50 font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Qué haces con esa info */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-4">
              Qué cambias con esa información
            </h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Los datos son poderosos porque te permiten mejorar cosas específicas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-[50px] text-[#C9A84C] font-light" style={{paddingBottom: '10px'}}>1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-2">
                      Descubre qué atrae clientes
                    </h3>
                    <p className="text-[18px] text-[#F5F2EC]/50 font-light">
                      Si tu página de "Portafolio" recibe 5x más clics que "Sobre nosotros", sabes en qué debe enfocarse tu contenido.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0" style={{paddingBottom: '10px'}}>
                    <span className="font-serif text-[50px] text-[#C9A84C] font-light">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-2">
                      Inviertes dinero donde funciona
                    </h3>
                    <p className="text-[18px] text-[#F5F2EC]/50 font-light">
                      Si los clientes mejores vienen de Google, inviertes en SEO. Si vienen de Instagram, creas más contenido allá.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0" style={{paddingBottom: '25px'}}>
                    <span className="font-serif text-[50px] text-[#C9A84C] font-light">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-2">
                      Mejoras sin adivinar
                    </h3>
                    <p className="text-[18px] text-[#F5F2EC]/50 font-light">
                      En lugar de cambiar cosas al azar, cambias las que realmente afectan tu negocio.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-[50px] text-[#C9A84C] font-light" style={{paddingBottom: '20px'}}>4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-2">
                      Crecimiento verificable
                    </h3>
                    <p className="text-[18px] text-[#F5F2EC]/50 font-light">
                      Ves el antes y después. ¿Cambio la foto? Antes 10 clics, después 50. Resultado cuantificable.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Casos de uso reales */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-12">
              Ejemplos reales
            </h2>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-3">
                  "Nadie llama por teléfono"
                </h3>
                <p className="text-[18px] text-[#F5F2EC]/50 font-light mb-3">
                  Con Analytics ves que 500 personas entraron pero nadie tocó el botón de WhatsApp. La CTA estaba muy pequeña. La hiciste más grande = 10x más contactos.
                </p>
                <p className="text-[16px] text-[#C9A84C] font-light">
                  → Cambio basado en datos, no en suposiciones.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-3">
                  "Instagram no trae clientes"
                </h3>
                <p className="text-[18px] text-[#F5F2EC]/50 font-light mb-3">
                  Ves que el 60% del tráfico viene de Google, no Instagram. Así que el presupuesto de publicidad Instagram se traslada a SEO y Google Ads. El resultado: 3x más ventas.
                </p>
                <p className="text-[16px] text-[#C9A84C] font-light">
                  → Dinero invertido donde realmente funciona.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-3">
                  "Nadie va a mi página de Galería"
                </h3>
                <p className="text-[18px] text-[#F5F2EC]/50 font-light mb-3">
                  Ves en Analytics que de 200 visitantes, solo 5 van a la galería. Entonces añades fotos en la página de inicio. Ahora 80 van a la galería. Las conversiones suben 40%.
                </p>
                <p className="text-[16px] text-[#C9A84C] font-light">
                  → Mejora específica = resultado inmediato.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Por qué importa */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-4">
              ¿Por qué Analytics es tu arma secreta?
            </h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Porque la diferencia entre un sitio que crece y uno que estanca es simple:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#C9A84C]/10 mb-4">
                  <Lightbulb size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-3">
                  Decisiones inteligentes
                </h3>
                <p className="text-[18px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Basadas en datos reales, no en corazonadas. Eso = inversiones que dan retorno.
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
                  <TrendingUp size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-3">
                  Mejora continua
                </h3>
                <p className="text-[18px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Cada mes ves cómo mejoró. El mes que viene cambias algo más. Crecimiento acumulativo.
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
                  <DollarSign size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-3">
                  Dinero ahorrado
                </h3>
                <p className="text-[18px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Inviertes dinero solo en lo que funciona. Nada desperdiciado en canales que no convierten.
                </p>
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
              Analytics está integrado desde el primer día
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/60 font-light max-w-2xl mx-auto mb-8">
              No necesitas hacer nada. Nosotros lo configuramos y tú simplemente ves los datos que importan.
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

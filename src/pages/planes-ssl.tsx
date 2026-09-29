import { motion } from "framer-motion";
import { ArrowLeft, Shield, Lock, CheckCircle, AlertCircle, RefreshCw, Server, Key } from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PlanesSSL() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-[#0E0E0E] pt-[68px] pb-8 md:pt-[76px] md:pb-12 overflow-hidden">
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
            <Link href="/planes" className="inline-flex items-center gap-2 mb-4 no-underline ferro-focus group">
              <ArrowLeft size={16} className="text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors" />
              <span className="text-[0.85rem] text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors tracking-wide">
                Volver a Planes
              </span>
            </Link>

            <h1 className="font-serif font-light text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-4xl mb-4">
              Gestión y renovación automática del SSL
            </h1>
            <p className="text-[1.25rem] text-[#F5F2EC]/60 font-light max-w-2xl leading-relaxed">
              Después de publicar tu sitio, nos encargamos de supervisar que la seguridad SSL siga funcionando correctamente, mantenerla activa y resolver cualquier inconveniente relacionado con la conexión segura.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: ¿Qué es SSL y por qué importa? */}
      <section className="relative bg-[#0E0E0E] py-12 md:py-16">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-4">
              ¿Qué es SSL y por qué es importante?
            </h2>
            <p className="text-[1.125rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-6">
              SSL es el "candadito" que ves en la barra del navegador. Es lo que convierte tu sitio en seguro:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <AlertCircle size={24} className="text-[#FF6B6B] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC] mb-2">
                      Sin SSL (sin seguridad)
                    </h3>
                    <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Tu sitio no tiene ese candadito. Los clientes desconfían.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Datos de clientes viajan sin protección</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>El navegador advierte "Sitio no seguro"</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Google penaliza tu posicionamiento</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Pierdes clientes por desconfianza</span>
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
                className="bg-[#1A1A1A] border border-[#C9A84C]/30 rounded-lg p-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle size={24} className="text-[#51CF66] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC] mb-2">
                      Con SSL (seguro)
                    </h3>
                    <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Tu sitio tiene ese candadito. Los clientes confían.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Datos encriptados de punta a punta</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>El navegador muestra "Sitio seguro"</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Google premia tu SEO por seguridad</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Clientes cómodos compartiendo datos</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Renovación automática */}
      <section className="relative bg-[#0E0E0E] py-12 md:py-16">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-4">
              Lo mejor: renovación automática
            </h2>
            <p className="text-[1.125rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-6">
              El SSL expira. Pero con nosotros, simplemente nunca se vence:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { emoji: "⏰", title: "Sin renovación automática", desc: "Tienes que acordarte de renovar el SSL cada año. Si lo olvidas, tu sitio queda inseguro.", borderColor: "border-[#FF6B6B]/40" },
                { emoji: "🔄", title: "Con renovación automática", desc: "Nosotros lo renovamos antes de que expire. Tú no tienes que hacer nada.", borderColor: "border-[#51CF66]/40" },
                { emoji: "🛑", title: "Problemas si falla", desc: "Si el SSL vence, los clientes ven advertencia de peligro y pierden confianza al instante.", borderColor: "border-[#FF6B6B]/40" },
                { emoji: "✅", title: "Garantía de continuidad", desc: "SSL siempre vigente. Clientes siempre conectan con seguridad. Negocio sin interrupciones.", borderColor: "border-[#51CF66]/40" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`bg-[#1A1A1A] border ${item.borderColor} rounded-lg p-6`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-[1.8rem]">{item.emoji}</div>
                    <div className="flex-1">
                      <h3 className="font-serif text-[1.25rem] font-light text-[#F5F2EC] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light">
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

      {/* Section 3: Qué hacemos por ti */}
      <section className="relative bg-[#0E0E0E] py-12 md:py-16">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-4">
              Lo que hacemos por ti con el SSL
            </h2>
            <p className="text-[1.125rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-6">
              4 cosas fundamentales que vigilamos constantemente:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Lock size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.25rem] font-light text-[#F5F2EC]">
                    Monitoreo continuo
                  </h3>
                </div>
                <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Vigilamos que el certificado esté vigente y funcionando correctamente todos los días.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCw size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.25rem] font-light text-[#F5F2EC]">
                    Renovación automática
                  </h3>
                </div>
                <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Antes de que expire, nosotros renovamos el SSL automáticamente sin que tengas que intervenir.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Key size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.25rem] font-light text-[#F5F2EC]">
                    Resolución de problemas
                  </h3>
                </div>
                <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Si surge algún problema con el SSL, lo detectamos y solucionamos antes de que afecte a tus clientes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.25rem] font-light text-[#F5F2EC]">
                    Encriptación vigente
                  </h3>
                </div>
                <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Garantizamos que la encriptación siempre está activa para que los datos de tus clientes sean seguros.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Beneficios */}
      <section className="relative bg-[#0E0E0E] py-12 md:py-16">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-6">
              Lo que ganas con gestión automática del SSL
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC]">
                    Tranquilidad total
                  </h3>
                </div>
                <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  No tienes que acordarte de nada. El SSL se renueva sin que hagas nada.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-base text-[#C9A84C]">
                  → Olvídate de fechas de vencimiento
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC]">
                    Clientes siempre seguros
                  </h3>
                </div>
                <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Tus clientes siempre verán el candadito. La confianza nunca se interrumpe.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-base text-[#C9A84C]">
                  → Datos siempre encriptados
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Server size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC]">
                    Google está feliz
                  </h3>
                </div>
                <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Google premia los sitios seguros. Tu SEO mejora automáticamente.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-base text-[#C9A84C]">
                  → Mejor posicionamiento en búsquedas
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Lock size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC]">
                    Zero caídas de seguridad
                  </h3>
                </div>
                <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Nunca pierdes clientes por "Sitio no seguro". La conexión siempre es segura.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-base text-[#C9A84C]">
                  → Confianza garantizada
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[#0E0E0E] py-12 md:py-16">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/30 rounded-lg p-8 md:p-10 text-center"
          >
            <h2 className="font-serif text-[2rem] font-light text-[#F5F2EC] mb-4 max-w-2xl mx-auto">
              SSL que se renueva sin que hagas nada
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/60 font-light max-w-2xl mx-auto mb-8">
              Seguridad que funciona sola. Nosotros vigilamos, renovamos y mantenemos tu SSL activo para que tus clientes estén siempre protegidos.
            </p>
            <Link href="/planes" className="inline-flex items-center gap-2 px-8 py-3 bg-[#C9A84C] text-[#0E0E0E] rounded-lg no-underline ferro-focus group font-light">
              Ver todos nuestros planes
              <ArrowLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

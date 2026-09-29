import { motion } from "framer-motion";
import { ArrowLeft, Shield, CheckCircle, AlertCircle, Zap, Clock, Server, Lock } from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PlanesHosting() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-[#0E0E0E] pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
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
            <Link href="/planes" className="inline-flex items-center gap-2 mb-8 no-underline ferro-focus group">
              <ArrowLeft size={16} className="text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors" />
              <span className="text-[0.875rem] text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors tracking-wide">
                Volver a Planes
              </span>
            </Link>

            <h1 className="font-serif font-light text-[clamp(2.8rem,6vw,3.375rem)] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-4xl mb-8">
              Hosting administrado por Ferro Studio
            </h1>
            <p className="text-[1.25rem] text-[#F5F2EC]/60 font-light max-w-2xl leading-relaxed">
              Nos encargamos de que tu página esté siempre online y funcionando correctamente. Si surge un problema con el hosting, nosotros lo resolvemos para que vos no tengas que preocuparte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Sin vs Con hosting administrado */}
      <section className="relative bg-[#0E0E0E] py-14 md:py-20">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-4">
              ¿Por qué es importante el hosting administrado?
            </h2>
            <p className="text-[1.125rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-8">
              Tu sitio es tu vendedor 24/7. Si no funciona, pierdes clientes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <AlertCircle size={24} className="text-[#FF6B6B] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC] mb-2">
                      Sin hosting administrado
                    </h3>
                    <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Todo depende de vos. Un error y tu sitio cae.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Sitio cae sin que lo sepas</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Pierdes clientes mientras duermes</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Tenés que encontrar un técnico a las 3 AM</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#FF6B6B]">
                        <span className="flex-shrink-0">•</span>
                        <span>Actualizaciones de seguridad te asustan</span>
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
                  <CheckCircle size={24} className="text-[#51CF66] flex-shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC] mb-2">
                      Con hosting administrado
                    </h3>
                    <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                      Nosotros nos encargamos. Vos solo vos ocupate de tu negocio.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Tu sitio funciona 99.9% del tiempo</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Los clientes siempre pueden contactarte</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Nosotros resolvemos cualquier problema</span>
                      </li>
                      <li className="flex gap-2 text-[1.125rem] text-[#51CF66]">
                        <span className="flex-shrink-0">✓</span>
                        <span>Vos duermes tranquilo</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Lo que hacemos 24/7 */}
      <section className="relative bg-[#0E0E0E] py-10 md:py-16">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-4">
              6 cosas que hacemos por vos 24/7
            </h2>
            <p className="text-[1.125rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-8">
              Hosting administrado significa que estas 6 cosas funcionan automáticamente:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { emoji: "⚡", title: "Monitoreo constante", desc: "Supervisamos que tu sitio esté disponible las 24 horas. Si se detecta una caída, recibimos una alerta automáticamente." },
                { emoji: "🔁", title: "Recuperación rápida", desc: "Si una actualización o despliegue genera un problema, restauramos la última versión estable lo antes posible." },
                { emoji: "💾", title: "Control de versiones y respaldo", desc: "Conservamos el historial del proyecto para poder recuperar versiones anteriores cuando sea necesario." },
                { emoji: "🔒", title: "Seguridad gestionada", desc: "Protección mediante Cloudflare, HTTPS, firewall y buenas prácticas de seguridad." },
                { emoji: "🆙", title: "Mantenimiento técnico", desc: "Actualizamos dependencias y realizamos tareas de mantenimiento para mantener el sitio seguro y estable." },
                { emoji: "⚙️", title: "Optimización continua", desc: "Revisamos el rendimiento, la velocidad y aplicamos mejoras periódicas para mantener una buena experiencia de uso." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-[1.8rem]">{item.emoji}</div>
                    <div className="flex-1">
                      <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light">
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

      {/* Section 3: Los 3 pilares del hosting administrado */}
      <section className="relative bg-[#0E0E0E] py-14 md:py-20">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-4">
              Los 3 pilares del hosting administrado
            </h2>
            <p className="text-[1.125rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-8">
              Todo se reduce a 3 promesas simples:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/20 rounded-lg p-8"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#C9A84C]/10 mb-4">
                  <Server size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC] mb-3">
                  Servidor confiable
                </h3>
                <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  No es cualquier servidor. Es infraestructura de clase empresarial con garantía de disponibilidad.
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
                  <Clock size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC] mb-3">
                  Atención rápida
                </h3>
                <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Si algo falla, reaccionamos en segundos. No esperas horas ni días para que se arregle.
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
                  <Lock size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[1.375rem] font-light text-[#F5F2EC] mb-3">
                  Seguridad garantizada
                </h3>
                <p className="text-[1.25rem] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Tu sitio está protegido contra ataques, malware y datos perdidos. Siempre.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Qué incluye */}
      <section className="relative bg-[#0E0E0E] py-14 md:py-20">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-4">
              Lo que está incluido siempre
            </h2>
            <p className="text-[1.125rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-8">
              No hay sorpresas. Todo esto viene de serie en nuestro hosting:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <Zap size={20} className="text-[#C9A84C] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div className="flex-1">
                    <h3 className="font-serif text-[1.25rem] font-light text-[#F5F2EC] mb-2">
                      Almacenamiento suficiente
                    </h3>
                    <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light">
                      Espacio para tu sitio, imágenes, videos y bases de datos. Sin limitaciones raras.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <Zap size={20} className="text-[#C9A84C] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div className="flex-1">
                    <h3 className="font-serif text-[1.25rem] font-light text-[#F5F2EC] mb-2">
                      Ancho de banda ilimitado
                    </h3>
                    <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light">
                      Tus clientes acceden desde cualquier lugar del mundo sin ralentizaciones.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <Zap size={20} className="text-[#C9A84C] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div className="flex-1">
                    <h3 className="font-serif text-[1.25rem] font-light text-[#F5F2EC] mb-2">
                      SSL gratuito
                    </h3>
                    <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light">
                      HTTPS en tu sitio. Ese candadito que dice "este sitio es seguro".
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <Zap size={20} className="text-[#C9A84C] flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div className="flex-1">
                    <h3 className="font-serif text-[1.25rem] font-light text-[#F5F2EC] mb-2">
                      CDN global
                    </h3>
                    <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light">
                      Tu sitio carga rápido desde cualquier parte del mundo.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Lo que ganas */}
      <section className="relative bg-[#0E0E0E] py-14 md:py-20">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.25rem] font-light text-[#F5F2EC] mb-8">
              Lo que ganas con hosting administrado
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.25rem] font-light text-[#F5F2EC]">
                    Tranquilidad mental
                  </h3>
                </div>
                <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  No tienes que preocuparte por nada técnico. Tu sitio funciona, punto.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-[1rem] text-[#C9A84C]">
                  → Duermes tranquilo. Nosotros vigilamos.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.25rem] font-light text-[#F5F2EC]">
                    Clientes siempre satisfechos
                  </h3>
                </div>
                <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Tu sitio nunca cae. Los clientes siempre pueden contactarte.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-[1rem] text-[#C9A84C]">
                  → 99.9% de disponibilidad garantizada
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.25rem] font-light text-[#F5F2EC]">
                    Sitio ultrarrápido
                  </h3>
                </div>
                <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Carga en 1 segundo desde cualquier lugar. Los clientes no se van aburridos.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-base text-[#C9A84C]">
                  → Google también te premia por la velocidad
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Lock size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[1.25rem] font-light text-[#F5F2EC]">
                    Datos seguros
                  </h3>
                </div>
                <p className="text-[1.125rem] text-[#F5F2EC]/50 font-light leading-relaxed mb-4">
                  Tu información está blindada. Ataques, malware, robos: no pasan.
                </p>
                <div className="bg-[#0E0E0E] rounded px-4 py-2 text-base text-[#C9A84C]">
                  → Protección multinivel 24/7
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[#0E0E0E] py-14 md:py-20">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/30 rounded-lg p-12 md:p-16 text-center"
          >
            <h2 className="font-serif text-[2rem] font-light text-[#F5F2EC] mb-4 max-w-2xl mx-auto">
              Un hosting que funciona mientras vos trabajas
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/60 font-light max-w-2xl mx-auto mb-8">
              Hosting administrado para que vos no tengas que preocuparte. Nosotros cuidamos tu sitio.
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

import { motion } from "framer-motion";
import { ArrowLeft, Shield, Clock, AlertCircle, Zap } from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PlanesHosting() {
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
            <Link href="/planes" className="inline-flex items-center gap-2 mb-8 no-underline ferro-focus group">
              <ArrowLeft size={16} className="text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors" />
              <span className="text-[0.85rem] text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors tracking-wide">
                Volver a Planes
              </span>
            </Link>

            <h1 className="font-serif font-light text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.018em] text-[#F5F2EC] max-w-4xl mb-8">
              Hosting administrado por Ferro Studio
            </h1>
            <p className="text-[1.2rem] text-[#F5F2EC]/60 font-light max-w-2xl leading-relaxed">
              Nos encargamos de que tu página esté siempre online y funcionando correctamente. Si surge un problema con el hosting, nosotros lo resolvemos para que vos no tengas que preocuparte.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Qué significa */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              ¿Qué significa "hosting administrado"?
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              No es solo guardar tus archivos en un servidor. Es que alguien esté atento, cuidando que funcione 24/7.
            </p>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <Shield size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC] mb-2">
                      Servidor confiable
                    </h3>
                    <p className="text-[0.95rem] text-[#F5F2EC]/60 font-light">
                      Tu sitio está alojado en infraestructura de calidad empresarial. No en un servidor viejo que falla cada dos meses.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <Clock size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC] mb-2">
                      Monitoreo 24/7
                    </h3>
                    <p className="text-[0.95rem] text-[#F5F2EC]/60 font-light">
                      Tenemos sistemas vigilando tu sitio todo el tiempo. Si algo falla, nosotros nos enteramos antes que tus clientes.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <AlertCircle size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC] mb-2">
                      Resolución rápida
                    </h3>
                    <p className="text-[0.95rem] text-[#F5F2EC]/60 font-light">
                      Si tu sitio cae, nosotros lo restauramos. No necesitas saber qué pasó ni llamar a un técnico: nosotros lo solucionamos.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1A1A1A] border border-[#C9A84C]/30 rounded-lg p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center">
                    <Zap size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-[1.2rem] font-light text-[#F5F2EC] mb-2">
                      Actualizaciones y mantenimiento
                    </h3>
                    <p className="text-[0.95rem] text-[#F5F2EC]/60 font-light">
                      No te preocupes por actualizaciones de seguridad o parches. Nosotros lo hacemos. Tu sitio siempre está actualizado y seguro.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Por qué importa */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-4">
              ¿Por qué es importante?
            </h2>
            <p className="text-[1.1rem] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Tu sitio web es tu vendedor 24/7. Si no funciona, pierdes clientes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <h3 className="font-serif text-[1.3rem] font-light text-[#F5F2EC] mb-3">
                  Si tu sitio cae
                </h3>
                <ul className="space-y-3 text-[0.95rem] text-[#F5F2EC]/60 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A84C] font-light mt-1">→</span>
                    <span>Pierdes clientes que intentaron contactarte</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A84C] font-light mt-1">→</span>
                    <span>Dañas tu reputación online</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A84C] font-light mt-1">→</span>
                    <span>Google baja tu posición en búsquedas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A84C] font-light mt-1">→</span>
                    <span>Tú estarás buscando a quién llamar a las 3 AM</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#C9A84C]/30 rounded-lg p-8"
              >
                <h3 className="font-serif text-[1.3rem] font-light text-[#F5F2EC] mb-3">
                  Con hosting administrado
                </h3>
                <ul className="space-y-3 text-[0.95rem] text-[#F5F2EC]/60 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A84C] font-light mt-1">✓</span>
                    <span>Tu sitio funciona 99.9% del tiempo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A84C] font-light mt-1">✓</span>
                    <span>Los clientes siempre pueden contactarte</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A84C] font-light mt-1">✓</span>
                    <span>Tu sitio es rápido y seguro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#C9A84C] font-light mt-1">✓</span>
                    <span>Vos podés dormir tranquilo</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Lo que incluye */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[2.2rem] font-light text-[#F5F2EC] mb-12">
              Qué incluye el hosting administrado
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Almacenamiento suficiente", desc: "Espacio para tu sitio, imágenes, y bases de datos. Sin limitaciones absurdas." },
                { title: "Ancho de banda ilimitado", desc: "Tus clientes pueden acceder desde cualquier lugar del mundo sin problemas." },
                { title: "Backups automáticos", desc: "Tu sitio se respalda regularmente. Si algo sale mal, lo restauramos en minutos." },
                { title: "Seguridad de nivel empresarial", desc: "Protección contra ataques, malware y accesos no autorizados." },
                { title: "Email corporativo", desc: "Correo profesional con tu dominio (tuempresa@tuempresa.com)." },
                { title: "Certificado SSL gratuito", desc: "HTTPS en tu sitio. Esencial para seguridad y confianza." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8"
                >
                  <h3 className="font-serif text-[1.05rem] font-light text-[#F5F2EC] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[0.9rem] text-[#F5F2EC]/50 font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
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
              La tranquilidad que necesitas
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

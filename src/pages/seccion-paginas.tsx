import { motion } from "framer-motion";
import { ArrowLeft, Home, Users, Briefcase, Phone, Award, TrendingUp, Clock, Zap } from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SeccionPaginas() {
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
              Hasta 6 páginas distintas que trabajan juntas
            </h1>
            <p className="text-[20px] text-[#F5F2EC]/60 font-light max-w-2xl leading-relaxed">
              En lugar de una única página, tienes 6 secciones separadas con su propio menú. Cada una muestra exactamente lo que buscan tus clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: ¿Qué significa hasta 6 secciones? */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-4">
              ¿Qué significa "hasta 6 secciones"?
            </h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Imagina que tu sitio web es como una oficina. En lugar de un único mostrador donde lo explicar todo, tienes 6 mostrador dedicados a diferentes temas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Home size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[20px] font-light text-[#F5F2EC]">
                    Página 1: Inicio
                  </h3>
                </div>
                <p className="text-[16px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Tu tarjeta de presentación. Lo primero que ven es quién eres en 3 segundos.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Users size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[20px] font-light text-[#F5F2EC]">
                    Página 2: Sobre ti
                  </h3>
                </div>
                <p className="text-[16px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Tu historia. Por qué empezaste, tu experiencia y por qué los clientes confían en ti.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[20px] font-light text-[#F5F2EC]">
                    Página 3: Servicios
                  </h3>
                </div>
                <p className="text-[16px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Lo que ofreces. Precios, beneficios y qué esperar cuando contratan.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Phone size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[20px] font-light text-[#F5F2EC]">
                    Página 4: Contacto
                  </h3>
                </div>
                <p className="text-[16px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Cómo te llaman. Formulario, teléfono, email o redes. Fácil de encontrar.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8 md:col-span-2"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                  <h3 className="font-serif text-[20px] font-light text-[#F5F2EC]">
                    Página 5 y 6: Lo que diferencia
                  </h3>
                </div>
                <p className="text-[16px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Casos de éxito, trabajos realizados, certificaciones, testimonios de clientes o lo que haga que confíen en ti.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: ¿Por qué debería importarte? */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-4">
              ¿Por qué debería importarte?
            </h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Porque cada página es como un "anuncio gratis" en Google que trabaja 24/7 para traerte clientes.
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
                  <TrendingUp size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-3">
                  Más clientes
                </h3>
                <p className="text-[16px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Si alguien busca en Google "consultoría legal en Madrid", tu página de servicios aparece. Si busca "casos de éxito", aparece la otra. Ganas en más búsquedas.
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
                  <Zap size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-3">
                  Clientes exactos
                </h3>
                <p className="text-[16px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  No todos llegan a tu página de inicio. El que busca "contacto" va directo al contacto. Sin perder tiempo.
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
                  <Clock size={24} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-3">
                  Cambios sin riesgo
                </h3>
                <p className="text-[16px] text-[#F5F2EC]/50 font-light leading-relaxed">
                  Actualizas precios en una página. Las otras siguen igual. Pruebas cambios sin miedo a romper nada.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Visual Comparison */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-12">
              Antes vs. Después
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Sin múltiples páginas */}
              <div className="bg-[#1A1A1A] border border-[#FF6B6B]/30 rounded-lg p-8">
                <h3 className="font-serif text-[20px] font-light text-[#FF6B6B] mb-6">
                  ❌ Una única página
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-[16px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#FF6B6B] flex-shrink-0">•</span>
                    <span>Un cliente busca "servicios" y termina en tu inicio</span>
                  </li>
                  <li className="flex gap-3 text-[16px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#FF6B6B] flex-shrink-0">•</span>
                    <span>Debe scrollear para encontrar lo que busca</span>
                  </li>
                  <li className="flex gap-3 text-[16px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#FF6B6B] flex-shrink-0">•</span>
                    <span>Muchos abandonan por impaciencia</span>
                  </li>
                  <li className="flex gap-3 text-[16px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#FF6B6B] flex-shrink-0">•</span>
                    <span>Google ve todo junto, sin estructura clara</span>
                  </li>
                </ul>
              </div>

              {/* Con múltiples páginas */}
              <div className="bg-[#1A1A1A] border border-[#51CF66]/30 rounded-lg p-8">
                <h3 className="font-serif text-[20px] font-light text-[#51CF66] mb-6">
                  ✓ Hasta 6 páginas
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-[16px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">•</span>
                    <span>El cliente va directo a lo que busca</span>
                  </li>
                  <li className="flex gap-3 text-[16px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">•</span>
                    <span>Página de servicios en 1 click</span>
                  </li>
                  <li className="flex gap-3 text-[16px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">•</span>
                    <span>Mayor probabilidad de venta</span>
                  </li>
                  <li className="flex gap-3 text-[16px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">•</span>
                    <span>Google entiende perfectamente tu negocio</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Visual Example */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-4">
              Cómo lo ve un cliente en la práctica
            </h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Imagina que alguien busca en Google "tus servicios":
            </p>

            <div className="space-y-8">
              {/* Paso 1: Búsqueda en Google */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8 md:p-12"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-[50px] text-[#C9A84C] font-light pb-[10px]">1</span>
                  </div>
                  <h3 className="font-serif text-[24px] font-light text-[#F5F2EC]">
                    Busca en Google
                  </h3>
                </div>
                <p className="text-[20px] text-[#F5F2EC]/50 font-light mb-6 ml-14">
                  Alguien escribe "servicios de diseño en Madrid" en Google
                </p>
                <div className="ml-14 bg-[#0E0E0E] rounded-lg p-6 border border-[#F5F2EC]/[0.06]">
                  <p className="text-[18px] text-[#F5F2EC]/40 font-light mb-3">
                    Resultado de búsqueda:
                  </p>
                  <div className="space-y-2">
                    <p className="text-[16px] text-[#C9A84C] font-light">
                      Tu Empresa - Servicios de Diseño
                    </p>
                    <p className="text-[14px] text-[#F5F2EC]/40 font-light">
                      www.tuempresa.com/servicios
                    </p>
                    <p className="text-[16px] text-[#F5F2EC]/35 font-light">
                      Descubre nuestros servicios de diseño profesional...
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Paso 2: Hace clic */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8 md:p-12"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-[50px] text-[#C9A84C] font-light pb-[10px]">2</span>
                  </div>
                  <h3 className="font-serif text-[24px] font-light text-[#F5F2EC]">
                    Hace clic y va directamente a Servicios
                  </h3>
                </div>
                <p className="text-[18px] text-[#F5F2EC]/50 font-light mb-6 ml-14">
                  No va al inicio, va directamente a la página que busca
                </p>
                <div className="ml-14 bg-[#0E0E0E] rounded-lg p-6 border border-[#F5F2EC]/[0.06] space-y-4">
                  {/* Mock Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#F5F2EC]/[0.1]">
                    <p className="text-[16px] text-[#C9A84C] font-light">Logo</p>
                    <div className="flex gap-6 text-[16px] text-[#F5F2EC]/50 font-light">
                      <p>Inicio</p>
                      <p className="text-[#C9A84C]">Servicios ← Está aquí</p>
                      <p>Contacto</p>
                    </div>
                  </div>
                  {/* Mock Content */}
                  <div className="pt-4 space-y-2">
                    <p className="text-[20px] text-[#F5F2EC] font-serif font-light">
                      Nuestros Servicios
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-4 text-[0.8rem] text-[#F5F2EC]/40 font-light">
                      <div className="bg-[#1A1A1A] p-3 rounded border border-[#F5F2EC]/[0.1]">
                        <p className="text-[16px] text-[#C9A84C] font-light mb-1">Diseño Web</p>
                        <p className="text-[14px]">Sitios modernos y rápidos</p>
                      </div>
                      <div className="bg-[#1A1A1A] p-3 rounded border border-[#F5F2EC]/[0.1]">
                        <p className="text-[16px] text-[#C9A84C] font-light mb-1">Branding</p>
                        <p className="text-[14px]">Tu identidad visual</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Paso 3: Ve exactamente lo que busca */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#51CF66]/30 rounded-lg p-8 md:p-12"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#51CF66]/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-[40px] text-[#51CF66] font-light pb-[23px]">3</span>
                  </div>
                  <h3 className="font-serif text-[24px] font-light text-[#F5F2EC]">
                    Resultado: Conversión
                  </h3>
                </div>
                <ul className="ml-14 space-y-3">
                  <li className="flex gap-3 text-[18px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>Ve exactamente lo que buscaba: tus servicios</span>
                  </li>
                  <li className="flex gap-3 text-[18px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>No pierde tiempo scrolleando</span>
                  </li>
                  <li className="flex gap-3 text-[18px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>Te llama, pide presupuesto o compra</span>
                  </li>
                  <li className="flex gap-3 text-[18px] text-[#F5F2EC]/50 font-light">
                    <span className="text-[#51CF66] flex-shrink-0">✓</span>
                    <span>¡Nuevo cliente!</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Quick Numbers */}
      <section className="relative bg-[#0E0E0E] py-24 md:py-32">
        <div className="container-ferro">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 className="font-serif text-[36px] font-light text-[#F5F2EC] mb-12">
              El impacto en números
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8 text-center"
              >
                <p className="text-[50px] font-serif font-light text-[#C9A84C] mb-2">
                  +300%
                </p>
                <p className="text-[18px] text-[#F5F2EC]/60 font-light">
                  Más búsquedas en Google que te encuentran
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8 text-center"
              >
                <p className="text-[50px] font-serif font-light text-[#C9A84C] mb-2">
                  -60%
                </p>
                <p className="text-[18px] text-[#F5F2EC]/60 font-light">
                  Menos visitantes que se van sin convertir
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8 text-center"
              >
                <p className="text-[50px] font-serif font-light text-[#C9A84C] mb-2">
                  24/7
                </p>
                <p className="text-[18px] text-[#F5F2EC]/60 font-light">
                  Trabajan por ti sin descanso
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
              Listo para que 6 páginas trabajen por ti
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/60 font-light max-w-2xl mx-auto mb-8">
              Sin complicaciones. Sin código. Sin riesgo. Solo más clientes encontrándote.
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

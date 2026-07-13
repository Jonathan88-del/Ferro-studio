import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Mail } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;
const MAIL_TO = "ferro.studio.estudiodigital@gmail.com";
const WA_LINK = "https://wa.me/541167863196?text=Hola%2C%20me%20interesa%20conocer%20los%20planes%20de%20Ferro%20Studio.";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.78, ease: EASE, delay } },
});

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", descripcion: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta de ${form.nombre} — Ferro Studio`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\n\nDescripción del trabajo:\n${form.descripcion}`
    );
    window.location.href = `mailto:${MAIL_TO}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="relative bg-[#0E0E0E] min-h-screen pt-36 pb-28 md:pt-44 md:pb-36 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(245,242,236,0.03) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="container-ferro relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: header + WhatsApp CTA ── */}
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show" className="flex flex-col gap-12">

            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-5 h-px bg-[#C9A84C]/70" />
                <span className="tracking-[0.26em] uppercase font-sans text-[#C9A84C]/80 text-[20px]">Contacto</span>
              </div>
              <h1 className="font-serif font-light text-[clamp(2.25rem,5.5vw,4.2rem)] leading-[1.05] tracking-[-0.015em] text-[#F5F2EC] mb-7">
                Hablemos de su proyecto.
              </h1>
              <p className="text-[#F5F2EC]/42 font-sans font-light text-[20px]">
                Completá el formulario y le responderemos por email en menos de 24 horas hábiles.
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div className="border-t border-[#F5F2EC]/[0.07] pt-10 flex flex-col gap-5">
              <div>
                <p className="tracking-[0.22em] uppercase font-sans text-[#C9A84C] mb-3 text-[20px]">
                  ¿Preferís hablar directo?
                </p>
                <p className="font-serif font-light text-[#F5F2EC] mb-2 text-[25px]">
                  También por WhatsApp.
                </p>
                <p className="text-[#F5F2EC]/38 font-sans font-light text-[20px]">
                  Respondemos en menos de 24 horas hábiles.
                </p>
              </div>

              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="
                  self-start inline-flex items-center gap-3 no-underline
                  bg-[#25D366] text-[#0E0E0E]
                  px-7 py-[13px]
                  text-[0.65rem] tracking-[0.2em] uppercase font-sans font-medium
                  transition-all duration-300
                  hover:bg-[#20bd5a] hover:shadow-[0_8px_28px_rgba(37,211,102,0.22)]
                "
              >
                <MessageCircle size={14} strokeWidth={2} />
                Escribinos por WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* ── Right: form inside a box ── */}
          <motion.div variants={fadeUp(0.18)} initial="hidden" animate="show">
            <div className="border border-[#F5F2EC]/[0.10] p-8 md:p-10">
              {sent ? (
                <div className="flex flex-col gap-5 py-10">
                  <span className="w-2 h-2 rounded-full bg-[#C9A84C]" aria-hidden="true" />
                  <p className="font-serif text-[1.6rem] font-light text-[#F5F2EC] leading-tight">
                    ¡Gracias, {form.nombre}!
                  </p>
                  <p className="text-[0.9rem] text-[#F5F2EC]/45 font-sans font-light leading-[1.8]">
                    Se abrió su cliente de email con la consulta lista para enviar. Si no sucedió,{" "}
                    <a
                      href={`mailto:${MAIL_TO}`}
                      className="text-[#C9A84C] underline-offset-4 hover:underline"
                    >
                      haga clic aquí
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>

                  <div className="flex items-center gap-2.5 mb-2">
                    <Mail size={15} strokeWidth={1.8} className="text-[#C9A84C]/70" />
                    <span className="text-[0.8125rem] tracking-[0.22em] uppercase font-sans text-[#F5F2EC]/35">
                      Formulario de contacto
                    </span>
                  </div>

                  {/* Nombre */}
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="nombre"
                      className="text-[0.8125rem] tracking-[0.18em] uppercase font-sans text-[#F5F2EC]/45"
                    >
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Su nombre o empresa"
                      className="
                        w-full bg-transparent border-b border-[#F5F2EC]/15
                        text-[#F5F2EC] font-sans font-light text-[1.125rem]
                        py-3 placeholder:text-[#F5F2EC]/20
                        focus:outline-none focus:border-[#C9A84C]/60
                        transition-colors duration-300
                      "
                    />
                  </div>

                  {/* Descripción */}
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="descripcion"
                      className="text-[0.8125rem] tracking-[0.18em] uppercase font-sans text-[#F5F2EC]/45"
                    >
                      Descripción del trabajo
                    </label>
                    <textarea
                      id="descripcion"
                      name="descripcion"
                      required
                      rows={6}
                      value={form.descripcion}
                      onChange={handleChange}
                      placeholder="Contenos qué necesita, en qué rubro trabaja, si ya tiene un sitio web…"
                      className="
                        w-full bg-transparent border-b border-[#F5F2EC]/15
                        text-[#F5F2EC] font-sans font-light text-[1.125rem]
                        py-3 placeholder:text-[#F5F2EC]/20 resize-none
                        focus:outline-none focus:border-[#C9A84C]/60
                        transition-colors duration-300
                      "
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.18, ease: EASE }}
                    className="
                      self-start inline-flex items-center gap-3
                      bg-[#C9A84C] text-[#0E0E0E]
                      px-9 py-[16px]
                      text-[0.78rem] tracking-[0.2em] uppercase font-sans font-medium
                      transition-all duration-300
                      hover:bg-[#d4b558] hover:shadow-[0_8px_28px_rgba(201,168,76,0.22)]
                    "
                  >
                    Enviar por email
                    <ArrowRight size={15} strokeWidth={2} />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

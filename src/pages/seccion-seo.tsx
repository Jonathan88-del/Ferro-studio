import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Eye,
  FileText,
  Gauge,
  Link2,
  MessageSquareText,
  Search,
  ShieldCheck,
  Smartphone,
  Target,
  Type,
  X,
} from "lucide-react";
import { Link } from "wouter";

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    number: "01",
    title: "Alguien escribe lo que necesita",
    desc: "Por ejemplo: “contador en CABA”, desde el celular o la computadora.",
  },
  {
    number: "02",
    title: "Google revisa miles de sitios",
    desc: "Busca las páginas que mejor responden a esa necesidad concreta.",
  },
  {
    number: "03",
    title: "Muestra primero a los mejor preparados",
    desc: "Un sitio bien optimizado tiene muchas más chances de aparecer arriba.",
  },
];

const WITHOUT_SEO = [
  "Tus clientes buscan tu servicio y no apareces",
  "Dependes de pagar publicidad para que te vean",
  "Cuando dejas de pagar, la visibilidad desaparece",
];

const WITH_SEO = [
  "Aparecés cuando alguien busca lo que ofrecés",
  "Las visitas llegan sin pagar cada clic",
  "El resultado se acumula y crece con el tiempo",
];

const PILLARS = [
  {
    icon: Eye,
    title: "Google entiende tu sitio",
    desc: "Cada página tiene una estructura clara que Google puede leer sin esfuerzo.",
  },
  {
    icon: Type,
    title: "Usa las palabras correctas",
    desc: "Si tu cliente busca “abogado en CABA”, tu contenido habla de eso con naturalidad.",
  },
  {
    icon: ShieldCheck,
    title: "Es rápido y confiable",
    desc: "Carga veloz, funciona en el celular y es seguro. Google premia esa experiencia.",
  },
];

const INCLUDED = [
  { icon: FileText, title: "Títulos claros", desc: "Cada página tiene un título que describe su contenido." },
  { icon: MessageSquareText, title: "Descripciones en Google", desc: "Un resumen que el cliente lee antes de hacer clic." },
  { icon: Link2, title: "Direcciones limpias", desc: "URLs cortas y fáciles de recordar y compartir." },
  { icon: Smartphone, title: "Pensado para el celular", desc: "Se ve y funciona perfecto en pantallas pequeñas." },
  { icon: Gauge, title: "Velocidad", desc: "Carga rápido para que el visitante no se vaya antes de empezar." },
  { icon: Target, title: "Palabras clave", desc: "Usamos los términos que realmente escriben tus clientes." },
];

const AI_STEPS = [
  {
    number: "01",
    title: "Alguien le hace una pregunta a la IA",
    desc: "Por ejemplo: “¿qué contador conviene para un monotributista en Córdoba?”.",
  },
  {
    number: "02",
    title: "La IA busca información en la web",
    desc: "Revisa sitios publicados y toma los que mejor responden a la consulta.",
  },
  {
    number: "03",
    title: "Tu sitio puede aparecer en la respuesta",
    desc: "Si tu información es clara y está bien organizada, es más fácil que la IA la use y te mencione.",
  },
];

const AI_ASSISTANTS = [
  {
    name: "ChatGPT",
    logo: "/logos/chatgpt.svg",
    desc: "Muchas personas le piden recomendaciones de profesionales y servicios, y también puede consultar la web.",
  },
  {
    name: "Claude",
    logo: "/logos/claude.svg",
    desc: "El asistente de Anthropic. Puede buscar información actualizada en la web cuando la necesita.",
  },
  {
    name: "Google Gemini",
    logo: "/logos/gemini.svg",
    desc: "Integrado con la búsqueda de Google, responde a partir de información publicada en la web.",
  },
  {
    name: "Perplexity",
    logo: "/logos/perplexity.svg",
    desc: "Responde con resúmenes y muestra las fuentes que consultó para hacerlo.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: EASE },
};

export default function SeccionSEO() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-[#0E0E0E] pt-40 pb-[40px] md:pt-48 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(245,242,236,0.03) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="container-ferro relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: EASE }}>
            <Link href="/servicios" className="inline-flex items-center gap-2 mb-8 no-underline ferro-focus group">
              <ArrowLeft size={16} className="text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors" />
              <span className="text-[14px] text-[#C9A84C]/70 group-hover:text-[#C9A84C] transition-colors tracking-wide">
                Volver a Servicios
              </span>
            </Link>

            <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Guía para empezar</p>
            <h1 className="font-serif font-light text-[48px] md:text-[56px] leading-[1.05] tracking-[-0.018em] text-[#F5F2EC] max-w-4xl mb-8">
              SEO: que tus clientes te encuentren en Google
            </h1>
            <p className="text-[19px] text-[#F5F2EC]/60 font-light max-w-2xl leading-relaxed">
              Si nunca escuchaste el término, no te preocupes. Te explicamos qué es, cómo funciona y qué hacemos por tu sitio, sin tecnicismos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Qué es */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-serif text-[36px] md:text-[42px] font-light leading-[1.1] text-[#F5F2EC] mb-6">
                ¿Qué es el SEO?
              </h2>
              <p className="text-[18px] text-[#F5F2EC]/60 font-light leading-relaxed mb-5">
                SEO son las siglas de <span className="text-[#F5F2EC]">Search Engine Optimization</span>, que en español significa optimización para buscadores.
              </p>
              <p className="text-[18px] text-[#F5F2EC]/60 font-light leading-relaxed">
                Es el trabajo que hace que tu sitio aparezca en Google cuando alguien busca lo que ofrecés. A diferencia de un anuncio, las visitas llegan <span className="text-[#F5F2EC]">sin pagar cada clic</span>.
              </p>
            </div>

            {/* Ejemplo visual de resultado */}
            <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-6 md:p-8">
              <p className="mb-4 font-sans text-[11px] uppercase tracking-[0.2em] text-[#F5F2EC]/35">Así se ve un resultado de Google</p>
              <div className="flex items-center gap-3 rounded-full border border-[#F5F2EC]/15 bg-[#0E0E0E] px-5 py-3 mb-6">
                <Search size={16} className="text-[#F5F2EC]/40" strokeWidth={1.5} />
                <span className="text-[15px] text-[#F5F2EC]/80 font-light">contador en CABA</span>
              </div>
              <div className="rounded-lg border border-[#C9A84C]/30 bg-[#0E0E0E] p-5">
                <p className="text-[12px] text-[#F5F2EC]/40 font-sans mb-1">tu-estudio.com.ar</p>
                <p className="font-serif text-[20px] font-light text-[#8AB4F8] mb-2">Contador en CABA | Tu Estudio</p>
                <p className="text-[14px] text-[#F5F2EC]/55 font-light leading-relaxed">
                  Estudio contable para monotributistas y pymes. Presupuesto sin cargo y atención personalizada.
                </p>
              </div>
              <p className="mt-5 text-[13px] text-[#F5F2EC]/40 font-light leading-relaxed">
                El título, la dirección y la descripción son las piezas que el SEO prepara para que tu sitio se vea así.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Cómo funciona */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-[36px] md:text-[42px] font-light text-[#F5F2EC] mb-4">¿Cómo funciona?</h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              En tres pasos, cada vez que alguien busca en Google.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: EASE }}
                  className="border-t border-[#C9A84C]/40 pt-6"
                >
                  <p className="font-serif text-[15px] text-[#C9A84C] mb-3">{step.number}</p>
                  <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-3">{step.title}</h3>
                  <p className="text-[16px] text-[#F5F2EC]/55 font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Sin SEO vs Con SEO */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-[36px] md:text-[42px] font-light text-[#F5F2EC] mb-12">
              La diferencia en la práctica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8">
                <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-5">Sin SEO</h3>
                <ul className="space-y-4">
                  {WITHOUT_SEO.map((item) => (
                    <li key={item} className="flex gap-3 text-[16px] text-[#F5F2EC]/50 font-light">
                      <X size={18} className="mt-[3px] flex-shrink-0 text-[#F5F2EC]/30" strokeWidth={1.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#1A1A1A] border border-[#C9A84C]/35 rounded-lg p-8">
                <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-5">Con SEO</h3>
                <ul className="space-y-4">
                  {WITH_SEO.map((item) => (
                    <li key={item} className="flex gap-3 text-[16px] text-[#F5F2EC]/80 font-light">
                      <Check size={18} className="mt-[3px] flex-shrink-0 text-[#C9A84C]" strokeWidth={1.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Pilares */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-[36px] md:text-[42px] font-light text-[#F5F2EC] mb-4">Tres pilares del SEO básico</h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Todo lo que hacemos por tu sitio se apoya en estas tres ideas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PILLARS.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.6, ease: EASE }}
                    className="bg-[#1A1A1A] border border-[#F5F2EC]/[0.08] rounded-lg p-8"
                  >
                    <Icon size={26} className="text-[#C9A84C] mb-6" strokeWidth={1.25} />
                    <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-3">{pillar.title}</h3>
                    <p className="text-[16px] text-[#F5F2EC]/55 font-light leading-relaxed">{pillar.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Qué incluye */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-[36px] md:text-[42px] font-light text-[#F5F2EC] mb-4">Qué incluye nuestro SEO básico</h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Seis trabajos concretos que ya vienen en cada sitio que creamos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              {INCLUDED.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-5 border-b border-[#F5F2EC]/[0.08] pb-8">
                    <Icon size={22} className="mt-1 flex-shrink-0 text-[#C9A84C]" strokeWidth={1.25} />
                    <div>
                      <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-1">{item.title}</h3>
                      <p className="text-[16px] text-[#F5F2EC]/55 font-light">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Asistentes de IA */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-[36px] md:text-[42px] font-light text-[#F5F2EC] mb-4">
              También te pueden encontrar en las inteligencias artificiales
            </h2>
            <p className="text-[18px] text-[#F5F2EC]/60 font-light max-w-3xl mb-12">
              Cada vez más personas preguntan directamente a un asistente de IA en lugar de buscar en Google. Así funciona ese camino, paso a paso.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {AI_STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: EASE }}
                  className="border-t border-[#C9A84C]/40 pt-6"
                >
                  <p className="font-serif text-[15px] text-[#C9A84C] mb-3">{step.number}</p>
                  <h3 className="font-serif text-[22px] font-light text-[#F5F2EC] mb-3">{step.title}</h3>
                  <p className="text-[16px] text-[#F5F2EC]/55 font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
            <p className="mb-6 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Las herramientas más usadas</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {AI_ASSISTANTS.map((assistant) => (
                <div key={assistant.name} className="flex flex-col overflow-hidden rounded-lg border border-[#F5F2EC]/[0.08] bg-[#1A1A1A]">
                  <div className="flex h-[120px] items-center justify-center bg-[#F5F2EC]">
                    <img src={assistant.logo} alt={`Logo de ${assistant.name}`} loading="lazy" className="h-[36px] w-auto" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-[20px] font-light text-[#F5F2EC] mb-3">{assistant.name}</h3>
                    <p className="text-[16px] text-[#F5F2EC]/55 font-light leading-relaxed">{assistant.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
              <div>
                <p className="mb-4 font-sans text-[13px] uppercase tracking-[0.26em] text-[#C9A84C]/75">Ejemplo ilustrativo (nombres ficticios)</p>
                <h3 className="font-serif text-[28px] font-light leading-tight text-[#F5F2EC] mb-4">
                  Lo que pregunta el cliente y lo que responde la IA
                </h3>
                <p className="text-[16px] text-[#F5F2EC]/55 font-light leading-relaxed">
                  Cuanto más clara y específica es la información de tu sitio, más fácil le resulta a la IA entender qué ofrecés y para quién.
                </p>
              </div>
              <div className="space-y-5 rounded-lg border border-[#F5F2EC]/[0.08] bg-[#1A1A1A] p-6 md:p-8">
                <div className="ml-auto flex max-w-[85%] items-center gap-3 rounded-lg bg-[#F5F2EC] px-5 py-3">
                  <Search size={16} className="flex-shrink-0 text-[#0E0E0E]/50" strokeWidth={1.5} />
                  <span className="text-[15px] font-light text-[#0E0E0E]">¿Qué contador conviene para un monotributista en Córdoba?</span>
                </div>
                <div className="max-w-[92%] space-y-4 rounded-lg border border-[#C9A84C]/30 bg-[#0E0E0E] px-5 py-4 text-[15px] font-light leading-relaxed text-[#F5F2EC]/75">
                  <p>Para un monotributista en Córdoba, los mejores contadores que encontré son:</p>
                  <ul className="space-y-3">
                    <li>
                      <span className="text-[#C9A84C]">1. Estudio Robles &amp; Asociados</span>, especialistas en monotributo y primer contacto sin cargo.
                    </li>
                    <li>
                      <span className="text-[#C9A84C]">2. Contadora Lucía Ferreyra</span>, atiende de forma online y presencial en toda la provincia.
                    </li>
                    <li>
                      <span className="text-[#C9A84C]">3. Gómez Contadores Asociados</span>, con más de 15 años acompañando emprendedores de Córdoba.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="mt-8 text-[14px] text-[#F5F2EC]/40 font-light leading-relaxed max-w-3xl">
              Ninguna herramienta garantiza que mencione a un negocio en particular. Lo que sí podemos hacer es que la información de tu sitio sea clara, precisa y fácil de leer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-[#0E0E0E] py-[60px] md:py-[80px]">
        <div className="container-ferro">
          <motion.div
            {...fadeUp}
            className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] border border-[#C9A84C]/30 rounded-lg p-12 md:p-16 text-center"
          >
            <h2 className="font-serif text-[2rem] font-light text-[#F5F2EC] mb-4 max-w-2xl mx-auto">
              El SEO básico ya viene incluido
            </h2>
            <p className="text-[1rem] text-[#F5F2EC]/60 font-light max-w-2xl mx-auto mb-8">
              No es algo que agregamos después. Cada página de tu sitio nace preparada para Google desde el primer día.
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

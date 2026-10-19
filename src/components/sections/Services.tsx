import { motion } from "framer-motion";
import { ArrowUpRight, Check, LayoutGrid, MousePointerClick, Pencil, Building2 } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const SERVICES = [
  {
    icon: MousePointerClick,
    title: "Landing Page",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85",
    description: "Una página enfocada en presentar tu propuesta y convertir visitas en clientes.",
    items: ["Diseño personalizado", "Hasta 6 secciones", "Redacción de textos incluida", "Formulario + WhatsApp"],
    price: "$250.000 ARS",
  },
  {
    icon: Building2,
    title: "Sitio institucional",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
    description: "Tu empresa, servicios y trayectoria en una web profesional que genera confianza.",
    items: ["Hasta 10 páginas", "Google Analytics", "Configuración SEO", "60 días de soporte"],
    price: "$450.000 ARS",
  },
  {
    icon: LayoutGrid,
    title: "Catálogo / CMS",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
    description: "Mostrá tus productos o servicios de forma simple y organizada, con un panel propio.",
    items: ["Catálogo administrable", "Panel de gestión", "Carga inicial de productos", "Categorías y etiquetas"],
    price: "$590.000 ARS",
  },
  {
    icon: Pencil,
    title: "Rediseño web",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    description: "Modernizá tu sitio actual y mejorá su rendimiento, diseño y experiencia de usuario.",
    items: ["Auditoría del sitio actual", "Nuevo diseño adaptable", "Migración de contenido", "Optimización de velocidad"],
    price: "$390.000 ARS",
  },
] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay } },
});

export default function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden bg-[#0b1013] py-16 md:py-20" aria-labelledby="services-heading">
      <div className="container-ferro">
        <div className="mb-8 grid gap-8 lg:grid-cols-[1fr_430px] lg:items-end">
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
            <p className="mb-4 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9b55b]">Nuestros servicios</p>
            <h2 id="services-heading" className="max-w-xl font-sans text-[2rem] font-semibold leading-[1.05] tracking-[-0.04em] text-[#f5f2ec] md:text-[2.45rem]">
              Soluciones digitales para cada etapa de tu negocio.
            </h2>
          </motion.div>
          <motion.p variants={fadeUp(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="max-w-md font-sans text-[15px] leading-6 text-[#f5f2ec]/70">
            Cada proyecto es único. Trabajamos con vos para crear una estrategia a medida, que potencie tu marca y te ayude a crecer.
          </motion.p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => <ServiceCard key={service.title} service={service} index={index} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
  const Icon = service.icon;
  return (
    <motion.article variants={fadeUp(index * 0.08)} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-40px" }} className="group overflow-hidden rounded-[5px] border border-[#f5f2ec]/10 bg-[#11181c] shadow-[0_14px_30px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[#d9b55b]/45">
      <div className="relative h-[132px] overflow-hidden bg-[#1c2528]">
        <img src={service.image} alt={`Ejemplo de ${service.title}`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11181c] via-transparent to-black/10" />
      </div>
      <div className="flex min-h-[310px] flex-col p-5 md:p-[18px]">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-md border border-[#d9b55b]/40 bg-[#0b1013] text-[#d9b55b]"><Icon size={17} strokeWidth={1.5} /></span>
          <h3 className="font-sans text-lg font-semibold text-[#f5f2ec]">{service.title}</h3>
        </div>
        <p className="mb-5 min-h-12 font-sans text-[14px] leading-5 text-[#f5f2ec]/70">{service.description}</p>
        <ul className="flex flex-col gap-2 border-t border-[#f5f2ec]/10 pt-4">
          {service.items.map((item) => <li key={item} className="flex items-start gap-2 font-sans text-[13px] leading-5 text-[#f5f2ec]/75"><Check size={14} className="mt-0.5 shrink-0 text-[#d9b55b]" />{item}</li>)}
        </ul>
        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <p className="font-sans text-xs text-[#f5f2ec]/55">Desde <strong className="text-sm text-[#f5f2ec]">{service.price}</strong></p>
          <a href="/contacto" className="inline-flex items-center gap-1 font-sans text-xs font-semibold text-[#d9b55b] transition hover:text-[#f5f2ec]">Ver más <ArrowUpRight size={14} /></a>
        </div>
      </div>
    </motion.article>
  );
}

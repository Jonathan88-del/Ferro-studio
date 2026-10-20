import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const NAV_LINKS = [
  { label: "Inicio",    href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proceso",   href: "/proceso" },
  { label: "Planes",    href: "/planes" },
  { label: "Contacto",  href: "/contacto" },
];

const SERVICE_LINKS = [
  { label: "Landing Page",           href: "/servicios" },
  { label: "Sitio Institucional",    href: "/servicios" },
  { label: "Sitio con Catálogo/CMS", href: "/servicios" },
  { label: "Rediseño Web",           href: "/servicios" },
];

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "ferro.studio.estudiodigital@gmail.com",
    href: "mailto:ferro.studio.estudiodigital@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/541167863196?text=Hola%2C%20me%20interesa%20conocer%20los%20servicios%20de%20Ferro%20Studio.",
  },
  {
    icon: MapPin,
    label: "Buenos Aires, Argentina",
    href: null,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0E0E0E] border-t border-[#F5F2EC]/[0.07]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="container-ferro pt-24 pb-20 md:pt-[30px] md:pb-24"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-14">

          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 no-underline mb-9">
              <LogoMark />
              <span className="font-serif text-[22px] font-light tracking-[0.22em] text-[#F5F2EC] uppercase">
                Ferro Std<span className="text-[#C9A84C]">.</span>
              </span>
            </Link>
            <p className="text-[18px] text-[#F5F2EC]/35 font-sans font-light leading-[1.85] max-w-[300px] mb-7">
              Nos ocupamos completamente de su presencia online para que usted pueda enfocarse en hacer crecer su negocio.
            </p>
            <p className="text-[14px] tracking-[0.14em] uppercase text-[#F5F2EC]/18 font-sans font-light">
              ferro.studio · Est. 2024
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p className="text-[13px] tracking-[0.24em] uppercase font-sans text-[#F5F2EC]/28 mb-8">
              Navegación
            </p>
            <ul className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[1.1rem] text-[#F5F2EC]/45 hover:text-[#F5F2EC] font-sans font-light no-underline transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <p className="text-[13px] tracking-[0.24em] uppercase font-sans text-[#F5F2EC]/28 mb-8">
              Servicios
            </p>
            <ul className="flex flex-col gap-5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[1.1rem] text-[#F5F2EC]/45 hover:text-[#F5F2EC] font-sans font-light no-underline transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p className="text-[13px] tracking-[0.24em] uppercase font-sans text-[#F5F2EC]/28 mb-8">
              Contacto
            </p>
            <ul className="flex flex-col gap-5">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <span
                    className={cn(
                      "flex items-center gap-3",
                      "text-[1.1rem] font-sans font-light",
                      "transition-colors duration-200",
                      item.href
                        ? "text-[#F5F2EC]/45 hover:text-[#F5F2EC] cursor-pointer"
                        : "text-[#F5F2EC]/28 cursor-default"
                    )}
                  >
                    <Icon size={17} strokeWidth={1.3} className="shrink-0 text-[#C9A84C]/60" />
                    {item.label}
                  </span>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="no-underline"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-[#F5F2EC]/[0.07] pt-10 text-center">
          <p className="text-[13px] tracking-[0.24em] uppercase font-sans text-[#C9A84C]/70 mb-4">
            Horarios de atención
          </p>
          <p className="text-[1.1rem] text-[#F5F2EC]/45 font-sans font-light">
            De lunes a sábado de 10 a 21 hs
          </p>
        </div>
      </motion.div>

      <div className="container-ferro">
        <div className="h-px bg-[#F5F2EC]/[0.07]" aria-hidden="true" />
      </div>

      <div className="container-ferro py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[14px] tracking-[0.1em] text-[#F5F2EC]/22 font-sans font-light">
            © {year} Ferro Studio · Jonathan Ferrara · Buenos Aires, Argentina
          </p>
          <p className="text-[14px] tracking-[0.1em] text-[#F5F2EC]/18 font-sans font-light">
            Tranquilidad digital · ferro.studio
          </p>
        </div>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M2 2h7v2H4v4h4v2H4v8H2V2z" fill="#C9A84C" fillOpacity="0.9" />
      <path d="M11 2h7v2h-5v4h4v2h-4v4h5v2h-7V2z" fill="#F5F2EC" fillOpacity="0.65" />
    </svg>
  );
}

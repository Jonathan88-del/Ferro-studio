import PricingSection from "@/components/sections/PricingSection";

export default function Planes() {
  useEffect(() => {
    document.title = "Mantenimiento Web cuatrimestral | Planes de Suscripción - Ferro Studio";

    return () => {
      document.title = "Ferro Studio | Diseño y Desarrollo de Páginas Web Profesionales";
    };
  }, []);

  return <PricingSection />;
}

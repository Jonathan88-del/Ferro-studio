import Hero from "@/components/sections/Hero";
import WhyFerroSection from "@/components/sections/WhyFerroSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyFerroSection />
      <CTASection />
      <section className="relative bg-[#0E0E0E] border-t border-[#F5F2EC]/[0.07] py-16 md:py-20" aria-labelledby="office-hours-heading">
        <div className="container-ferro text-center">
          <p className="text-[13px] tracking-[0.24em] uppercase font-sans text-[#C9A84C]/70 mb-4">
            Horarios de atención
          </p>
          <h2 id="office-hours-heading" className="font-serif text-[30px] md:text-[36px] font-light text-[#F5F2EC]">
            De lunes a sábado de 10 a 22 hs
          </h2>
        </div>
      </section>
    </>
  );
}

import { motion } from "framer-motion";
import { Link } from "wouter";
import FerroButton from "@/components/ui/FerroButton";
import { ArrowRight } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="container-ferro">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.p variants={fadeUp} className="label-caps text-gold mb-10">
            Error 404
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-serif text-[clamp(3rem,7vw,6rem)] font-light text-cream leading-tight mb-6"
          >
            Página no encontrada.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-sm text-cream/40 font-light mb-12 leading-relaxed"
          >
            Esta página no existe o ha sido movida. Vuelve al inicio.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/">
              <FerroButton variant="outline" size="lg">
                Volver al inicio
                <ArrowRight size={14} />
              </FerroButton>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

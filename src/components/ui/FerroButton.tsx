import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline" | "gold";

interface FerroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-cream text-dark border border-cream hover:bg-cream/90 active:bg-cream/80",
  ghost:
    "bg-transparent text-cream/70 border border-transparent hover:text-cream hover:border-cream/20",
  outline:
    "bg-transparent text-cream border border-cream/20 hover:border-cream/60 hover:text-cream",
  gold:
    "bg-transparent text-gold border border-gold/40 hover:border-gold hover:text-gold-light",
};

const sizes: Record<string, string> = {
  sm: "text-[0.65rem] px-4 py-2.5 tracking-ferro-widest",
  md: "text-[0.7rem] px-6 py-3 tracking-ferro-widest",
  lg: "text-[0.7rem] px-8 py-4 tracking-ferro-widest",
};

const FerroButton = forwardRef<HTMLButtonElement, FerroButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ y: 0, scale: 0.99 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "inline-flex items-center justify-center gap-2",
          "font-sans uppercase",
          "transition-colors duration-300",
          "ferro-focus",
          "disabled:opacity-40 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...(props as HTMLMotionProps<"button">)}
      >
        {children}
      </motion.button>
    );
  }
);

FerroButton.displayName = "FerroButton";

export default FerroButton;

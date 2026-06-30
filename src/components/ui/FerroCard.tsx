import { HTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FerroCardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  bordered?: boolean;
}

const FerroCard = forwardRef<HTMLDivElement, FerroCardProps>(
  ({ className, hoverable = false, bordered = true, children, ...props }, ref) => {
    const base = cn(
      "relative bg-card rounded-sm overflow-hidden",
      bordered && "border border-cream/[0.08]",
      className
    );

    if (hoverable) {
      return (
        <motion.div
          ref={ref as React.Ref<HTMLDivElement>}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(base, "cursor-pointer group")}
          style={{
            boxShadow: "0 1px 2px rgba(0,0,0,0.3)",
          }}
          {...(props as React.HTMLAttributes<HTMLDivElement>)}
        >
          {/* Gold top line on hover */}
          <span className="absolute inset-x-0 top-0 h-px bg-gold opacity-0 group-hover:opacity-60 transition-opacity duration-400" />
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={base} {...props}>
        {children}
      </div>
    );
  }
);

FerroCard.displayName = "FerroCard";

export default FerroCard;

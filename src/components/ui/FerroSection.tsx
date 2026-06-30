import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FerroSectionProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  contained?: boolean;
  paddingY?: "sm" | "md" | "lg" | "xl";
}

const paddingMap = {
  sm: "py-12 md:py-16",
  md: "py-20 md:py-28",
  lg: "py-28 md:py-36",
  xl: "py-36 md:py-48",
};

export default function FerroSection({
  as: Tag = "section",
  contained = true,
  paddingY = "md",
  className,
  children,
  ...props
}: FerroSectionProps) {
  return (
    <Tag className={cn(paddingMap[paddingY], className)} {...props}>
      {contained ? (
        <div className="container-ferro">{children}</div>
      ) : (
        children
      )}
    </Tag>
  );
}
